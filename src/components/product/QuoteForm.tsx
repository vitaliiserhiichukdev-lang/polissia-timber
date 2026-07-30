import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import Icon from '../ui/Icon'
import { brand } from '../../data/contact'
import { fill } from '../../i18n/content'
import { useI18n } from '../../i18n/useI18n'
import { cn } from '../../lib/cn'

/**
 * Optional JSON endpoint (form service or own API). Without it the form opens a
 * pre-filled email in the visitor's mail client, so the site is useful with no
 * backend deployed.
 */
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT

interface QuoteFormProps {
  /** Pre-selects a product — used on product detail pages. */
  defaultProduct?: string
  compact?: boolean
}

type Status = 'idle' | 'sending' | 'sent' | 'mail' | 'error'

interface FormState {
  name: string
  company: string
  country: string
  email: string
  phone: string
  product: string
  volume: string
  message: string
}

const emptyForm = (defaultProduct: string): FormState => ({
  name: '',
  company: '',
  country: '',
  email: '',
  phone: '',
  product: defaultProduct,
  volume: '',
  message: '',
})

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function QuoteForm({ defaultProduct = '', compact = false }: QuoteFormProps) {
  const { t, productOptions } = useI18n()
  const [form, setForm] = useState<FormState>(emptyForm(defaultProduct))
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<Status>('idle')

  const update = (field: keyof FormState) => (event: { target: { value: string } }) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) next.name = t.form.errors.name
    if (!form.company.trim()) next.company = t.form.errors.company
    if (!EMAIL_PATTERN.test(form.email)) next.email = t.form.errors.email
    if (form.message.trim().length < 10) next.message = t.form.errors.message
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const composeMail = () => {
    const productLabel =
      productOptions.find((option) => option.value === form.product)?.label ??
      t.form.mailFields.notSpecified
    const f = t.form.mailFields
    const dash = '—'
    const body = [
      `${f.name}: ${form.name}`,
      `${f.company}: ${form.company}`,
      `${f.country}: ${form.country || dash}`,
      `${f.email}: ${form.email}`,
      `${f.phone}: ${form.phone || dash}`,
      `${f.product}: ${productLabel}`,
      `${f.volume}: ${form.volume || dash}`,
      '',
      form.message,
    ].join('\n')

    const subject = fill(t.form.mailSubject, { product: productLabel })
    return `mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) return

    if (!ENDPOINT) {
      window.location.href = composeMail()
      setStatus('mail')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, locale: t.locale }),
      })
      if (!response.ok) throw new Error(`Request failed: ${response.status}`)
      setStatus('sent')
      setForm(emptyForm(defaultProduct))
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent' || status === 'mail') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="card-surface flex flex-col items-start gap-4 p-8"
        role="status"
      >
        <span className="grid size-12 place-items-center rounded-full bg-forest-700 text-white">
          <Icon name="check" size={24} />
        </span>
        <h3 className="text-h4 text-ink-900">
          {status === 'sent' ? t.form.sentTitle : t.form.mailTitle}
        </h3>
        <p className="text-sm text-muted">
          {status === 'sent' ? t.form.sentBody : fill(t.form.mailBody, { email: brand.email })}
        </p>
        <button type="button" className="btn btn-outline btn-sm" onClick={() => setStatus('idle')}>
          {t.form.sendAnother}
        </button>
      </motion.div>
    )
  }

  const fieldWrap = 'flex flex-col gap-1.5'
  const labelClass = 'text-xs font-semibold tracking-[0.1em] text-muted uppercase'
  const errorClass = 'text-xs text-[#b4442f]'

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className={cn('card-surface p-6 md:p-8', compact && 'md:p-7')}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className={fieldWrap}>
          <label className={labelClass} htmlFor="qf-name">
            {t.form.name}
          </label>
          <input
            id="qf-name"
            className={cn('field', errors.name && 'field-error')}
            value={form.name}
            onChange={update('name')}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            placeholder={t.form.namePlaceholder}
          />
          {errors.name && <p className={errorClass}>{errors.name}</p>}
        </div>

        <div className={fieldWrap}>
          <label className={labelClass} htmlFor="qf-company">
            {t.form.company}
          </label>
          <input
            id="qf-company"
            className={cn('field', errors.company && 'field-error')}
            value={form.company}
            onChange={update('company')}
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            placeholder={t.form.companyPlaceholder}
          />
          {errors.company && <p className={errorClass}>{errors.company}</p>}
        </div>

        <div className={fieldWrap}>
          <label className={labelClass} htmlFor="qf-country">
            {t.form.country}
          </label>
          <input
            id="qf-country"
            className="field"
            value={form.country}
            onChange={update('country')}
            autoComplete="country-name"
            placeholder={t.form.countryPlaceholder}
          />
        </div>

        <div className={fieldWrap}>
          <label className={labelClass} htmlFor="qf-email">
            {t.form.email}
          </label>
          <input
            id="qf-email"
            type="email"
            className={cn('field', errors.email && 'field-error')}
            value={form.email}
            onChange={update('email')}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            placeholder={t.form.emailPlaceholder}
          />
          {errors.email && <p className={errorClass}>{errors.email}</p>}
        </div>

        <div className={fieldWrap}>
          <label className={labelClass} htmlFor="qf-phone">
            {t.form.phone}
          </label>
          <input
            id="qf-phone"
            type="tel"
            className="field"
            value={form.phone}
            onChange={update('phone')}
            autoComplete="tel"
            placeholder={t.form.phonePlaceholder}
          />
        </div>

        <div className={fieldWrap}>
          <label className={labelClass} htmlFor="qf-product">
            {t.form.product}
          </label>
          <div className="relative">
            <select
              id="qf-product"
              className="field appearance-none pr-11"
              value={form.product}
              onChange={update('product')}
            >
              <option value="">{t.form.productPlaceholder}</option>
              {productOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
              <option value="mixed">{t.form.productMixed}</option>
            </select>
            <span className="pointer-events-none absolute inset-y-0 right-3.5 grid place-items-center text-muted">
              <Icon name="chevronDown" size={18} />
            </span>
          </div>
        </div>

        <div className={cn(fieldWrap, 'sm:col-span-2')}>
          <label className={labelClass} htmlFor="qf-volume">
            {t.form.volume}
          </label>
          <input
            id="qf-volume"
            className="field"
            value={form.volume}
            onChange={update('volume')}
            placeholder={t.form.volumePlaceholder}
          />
        </div>

        <div className={cn(fieldWrap, 'sm:col-span-2')}>
          <label className={labelClass} htmlFor="qf-message">
            {t.form.message}
          </label>
          <textarea
            id="qf-message"
            rows={compact ? 4 : 5}
            className={cn('field resize-y', errors.message && 'field-error')}
            value={form.message}
            onChange={update('message')}
            aria-invalid={Boolean(errors.message)}
            placeholder={t.form.messagePlaceholder}
          />
          {errors.message && <p className={errorClass}>{errors.message}</p>}
        </div>
      </div>

      {status === 'error' && (
        <p className="mt-5 rounded-xl border border-[#b4442f]/30 bg-[#b4442f]/8 px-4 py-3 text-sm text-[#8f351f]">
          {fill(t.form.failed, { email: brand.email })}
        </p>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-oak" disabled={status === 'sending'}>
          {status === 'sending' ? t.form.sending : t.form.submit}
          <span className="btn-icon">
            <Icon name="arrowRight" size={18} />
          </span>
        </button>
        <p className="max-w-xs text-xs text-muted">
          {t.form.required} {t.form.privacy}
        </p>
      </div>
    </form>
  )
}

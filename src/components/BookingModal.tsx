import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { supabase } from '../lib/supabase'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    isPartOfParadox: '',
    cohort: '',
    program: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const { error } = await supabase
        .from('bookings')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            reason: formData.reason,
            is_part_of_paradox: formData.isPartOfParadox,
            cohort: formData.cohort,
            program: formData.program,
            created_at: new Date().toISOString(),
          },
        ])

      if (error) throw error

      setSubmitStatus('success')
      setTimeout(() => {
        onClose()
        setFormData({
          name: '',
          email: '',
          phone: '',
          reason: '',
          isPartOfParadox: '',
          cohort: '',
          program: '',
        })
        setSubmitStatus('idle')
      }, 2000)
    } catch (error) {
      console.error('Error submitting booking:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'
      
      return () => {
        // Restore scroll position when modal closes
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
        document.body.style.overflow = ''
        window.scrollTo(0, scrollY)
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative bg-paradox-bg rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-paradox-dark hover:opacity-70 transition-opacity"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Content */}
        <div className="p-8 md:p-12">
          <h2 className="font-['Anton',sans-serif] text-4xl md:text-5xl text-paradox-dark uppercase mb-8">
            {t('common.reserveYourStay')}
          </h2>

          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="mb-4">
                <svg className="w-16 h-16 text-green-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] text-paradox-dark">
                {t('common.thankYou')}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-['Clash_Grotesk',sans-serif] text-base text-paradox-dark mb-2">
                  {t('common.fullName')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-paradox-dark/20 rounded-sm bg-paradox-bg font-['Clash_Grotesk',sans-serif] text-[22px] text-paradox-dark focus:outline-none focus:border-paradox-dark"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-['Clash_Grotesk',sans-serif] text-base text-paradox-dark mb-2">
                  {t('common.email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-paradox-dark/20 rounded-sm bg-paradox-bg font-['Clash_Grotesk',sans-serif] text-[22px] text-paradox-dark focus:outline-none focus:border-paradox-dark"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block font-['Clash_Grotesk',sans-serif] text-base text-paradox-dark mb-2">
                  {t('common.phoneNumber')} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-paradox-dark/20 rounded-sm bg-paradox-bg font-['Clash_Grotesk',sans-serif] text-[22px] text-paradox-dark focus:outline-none focus:border-paradox-dark"
                />
              </div>

              {/* Why do you want to come */}
              <div>
                <label htmlFor="reason" className="block font-['Clash_Grotesk',sans-serif] text-base text-paradox-dark mb-2">
                  {t('common.whyCome')} *
                </label>
                <textarea
                  id="reason"
                  name="reason"
                  required
                  rows={4}
                  value={formData.reason}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-paradox-dark/20 rounded-sm bg-paradox-bg font-['Clash_Grotesk',sans-serif] text-[22px] text-paradox-dark focus:outline-none focus:border-paradox-dark resize-none"
                />
              </div>

              {/* Are you part of Paradox */}
              <div>
                <label className="block font-['Clash_Grotesk',sans-serif] text-base text-paradox-dark mb-3">
                  {t('common.areYouPartOfParadox')} *
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="isPartOfParadox"
                      value="yes"
                      required
                      checked={formData.isPartOfParadox === 'yes'}
                      onChange={handleChange}
                      className="w-5 h-5 text-paradox-dark focus:ring-paradox-dark"
                    />
                    <span className="font-['Clash_Grotesk',sans-serif] text-[22px] text-paradox-dark">{t('common.yes')}</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="isPartOfParadox"
                      value="no"
                      required
                      checked={formData.isPartOfParadox === 'no'}
                      onChange={handleChange}
                      className="w-5 h-5 text-paradox-dark focus:ring-paradox-dark"
                    />
                    <span className="font-['Clash_Grotesk',sans-serif] text-[22px] text-paradox-dark">{t('common.no')}</span>
                  </label>
                </div>
              </div>

              {/* Which cohort */}
              <div>
                <label htmlFor="cohort" className="block font-['Clash_Grotesk',sans-serif] text-base text-paradox-dark mb-2">
                  {t('common.whichCohort')} *
                </label>
                <input
                  type="text"
                  id="cohort"
                  name="cohort"
                  required
                  value={formData.cohort}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-paradox-dark/20 rounded-sm bg-paradox-bg font-['Clash_Grotesk',sans-serif] text-[22px] text-paradox-dark focus:outline-none focus:border-paradox-dark"
                  placeholder={t('common.enterCohort')}
                />
              </div>

              {/* Which program did you buy */}
              <div>
                <label htmlFor="program" className="block font-['Clash_Grotesk',sans-serif] text-base text-paradox-dark mb-2">
                  {t('common.whichProgram')} *
                </label>
                <input
                  type="text"
                  id="program"
                  name="program"
                  required
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-paradox-dark/20 rounded-sm bg-paradox-bg font-['Clash_Grotesk',sans-serif] text-[22px] text-paradox-dark focus:outline-none focus:border-paradox-dark"
                  placeholder={t('common.enterProgram')}
                />
              </div>

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-sm">
                  <p className="font-['Clash_Grotesk',sans-serif] text-base text-red-600">
                    {t('common.somethingWentWrong')}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-8 py-4 bg-paradox-dark text-paradox-bg font-['Clash_Grotesk',sans-serif] font-semibold text-[22px] uppercase tracking-tight hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? t('common.submitting') : t('common.submitBooking')}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

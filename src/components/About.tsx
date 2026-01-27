import { useTranslation } from 'react-i18next'
import { useScrollReveal } from '../hooks/useScrollReveal'

const img101 = "/image/hero2.png"

export default function About() {
  const { t } = useTranslation()
  const [ref, isVisible] = useScrollReveal(0.1)
  
  return (
    <section 
      ref={ref}
      className={`relative bg-paradox-bg py-20 md:py-32 section-reveal ${isVisible ? 'revealed' : ''}`}
    >
      {/* Heading Section - Full Width */}
      <div className="w-full mb-12 md:mb-16 text-center px-4 md:px-8">
        <h2 className="font-['Anton',sans-serif] text-4xl md:text-6xl lg:text-[80px] leading-tight md:leading-[72px] text-paradox-black mb-6 md:mb-8 uppercase text-center">
          <span className="block">{t('about.welcome')}</span>
          <span className="block text-[36px] md:text-[45px] lg:text-[60px]">{t('about.elegantRetreats')}</span>
        </h2>
      </div>
      
      <div className="relative z-10 container mx-auto px-8 md:px-12 max-w-[1200px]">

        {/* Description Section */}
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-black tracking-tight mb-6">
            {t('about.description')}
          </p>
          
          <a 
            href="#" 
            className="inline-block font-['Clash_Grotesk',sans-serif] font-semibold text-[22px] md:text-[26px] text-paradox-dark uppercase tracking-tight border-b-2 border-paradox-dark hover:opacity-70 transition-opacity"
          >
            {t('about.transformation')}
          </a>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="relative z-10 mt-12 md:mt-16">
        <div className="w-full h-auto md:h-[600px] lg:h-[729px] overflow-hidden">
          <img 
            alt="Paradox House" 
            className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105" 
            src={img101} 
          />
        </div>
      </div>
    </section>
  )
}

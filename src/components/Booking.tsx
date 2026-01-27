import { useTranslation } from 'react-i18next'

const img71 = "https://www.figma.com/api/mcp/asset/f21657ab-26f4-4a36-b578-4714295db31e"

interface BookingProps {
  onBookNow: () => void
}

export default function Booking({ onBookNow }: BookingProps) {
  const { t } = useTranslation()
  return (
    <section className="relative bg-paradox-bg py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-8 md:px-12 max-w-7xl">
        <div className="relative">
          {/* Background Image - Fixed position to prevent movement */}
          <div className="absolute inset-0 -mx-8 md:-mx-12">
            <div className="relative w-full h-full min-h-[600px] md:min-h-[700px]">
              <img 
                alt="Paradox House Interior" 
                className="absolute inset-0 w-full h-full object-cover"
                src={img71}
                style={{ objectPosition: 'center' }}
              />
              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-paradox-dark/40 via-paradox-dark/30 to-paradox-dark/50" />
            </div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 px-8 md:px-16 py-20 md:py-32 min-h-[600px] md:min-h-[700px] flex flex-col items-center justify-center text-center">
            {/* Logo/Icon */}
            <div className="mb-8 md:mb-12">
              <img 
                alt="Paradox House" 
                className="h-10 w-10 md:h-12 md:w-12 mx-auto" 
                src="/image/white_x.png" 
              />
            </div>
            
            {/* Heading */}
            <h2 className="font-['Anton',sans-serif] text-5xl md:text-6xl lg:text-7xl leading-tight text-paradox-bg uppercase mb-8 md:mb-12 max-w-4xl">
              {t('common.reserveYourStay')}
            </h2>
            
            {/* Description */}
            <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-bg max-w-2xl mx-auto mb-10 md:mb-12">
              {t('common.bookingDescription')}
            </p>
            
            {/* Call to Action */}
            <button
              onClick={onBookNow}
              className="inline-block font-['Clash_Grotesk',sans-serif] font-semibold text-[22px] md:text-[26px] text-paradox-bg uppercase tracking-tight border-b-2 border-paradox-bg hover:opacity-70 transition-opacity cursor-pointer"
            >
              {t('common.bookNow')}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

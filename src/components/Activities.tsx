import { useTranslation } from 'react-i18next'

const img1Swimming = "/image/photo_7.jpg"

export default function Activities() {
  const { t } = useTranslation()
  
  const activities = [
    t('activities.morningActivation'),
    t('activities.deepWork'),
    t('activities.eveningRecovery'),
    t('activities.transformation'),
    t('activities.andMore')
  ]
  
  return (
    <section className="relative bg-paradox-bg py-20 md:py-32">
      {/* Heading - Full Width */}
      <div className="w-full mb-16 md:mb-24 text-center px-4 md:px-8">
        <h2 className="font-['Anton',sans-serif] text-5xl md:text-7xl lg:text-[120px] leading-tight md:leading-[108px] text-paradox-dark uppercase text-center">
          {t('activities.title')}
        </h2>
      </div>

      <div className="container mx-auto px-8 md:px-12 max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          {/* Activities List */}
          <div className="space-y-0 relative z-10">
            {activities.map((activity, index) => (
              <div 
                key={index} 
                className="border-t border-paradox-gray/20 py-8 md:py-12 first:border-t-0 transition-opacity hover:opacity-70"
              >
                <h3 className="font-['Anton',sans-serif] text-4xl md:text-5xl lg:text-[64px] leading-tight text-paradox-dark tracking-tight">
                  {activity}
                </h3>
              </div>
            ))}
            
            {/* Description */}
            <div className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-paradox-gray/20">
              <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-dark tracking-tight mb-8 max-w-lg">
                {t('activities.description')}
              </p>
              <a 
                href="#" 
                className="inline-block font-['Clash_Grotesk',sans-serif] font-semibold text-[22px] md:text-[26px] text-paradox-dark uppercase tracking-tight border-b-2 border-paradox-dark hover:opacity-70 transition-opacity"
              >
                {t('common.viewAllActivities')}
              </a>
            </div>
          </div>
          
          {/* Image - Fixed position on large screens */}
          <div className="hidden lg:block relative">
            <div className="sticky top-[100px] h-screen max-h-[calc(100vh-200px)]">
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  alt="Activities" 
                  className="absolute inset-0 w-full h-full object-cover" 
                  src={img1Swimming} 
                />
              </div>
            </div>
          </div>
          
          {/* Mobile Image */}
          <div className="lg:hidden w-full h-[500px] mt-8">
            <div className="relative w-full h-full overflow-hidden">
              <img 
                alt="Activities" 
                className="absolute inset-0 w-full h-full object-cover" 
                src={img1Swimming} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

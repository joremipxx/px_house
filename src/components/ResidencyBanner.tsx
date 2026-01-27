import { useTranslation } from 'react-i18next'

const imgSeasideView = "https://www.figma.com/api/mcp/asset/8906da29-e302-4fa8-8e4e-caaae405e428"
const imgContainer = "https://www.figma.com/api/mcp/asset/60ffa459-bdd4-4be5-9eca-ab60ca023c9f"

export default function ResidencyBanner() {
  const { t } = useTranslation()
  return (
    <section className="relative bg-paradox-dark h-screen min-h-[800px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{ 
          maskImage: `url('${imgContainer}')`,
          WebkitMaskImage: `url('${imgContainer}')`,
        }}
      >
        <div className="absolute inset-0 overflow-hidden">
          <img 
            alt="Seaside view" 
            className="absolute w-full h-[114.79%] top-[-7.4%] object-cover" 
            src={imgSeasideView} 
          />
        </div>
        {/* Subtle gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 md:px-12">
        <div className="text-center max-w-4xl mx-auto space-y-6 md:space-y-8">
          {/* Main Title */}
          <div className="space-y-2 md:space-y-4">
            <h2 className="font-['Anton',sans-serif] text-5xl md:text-7xl lg:text-[120px] leading-tight md:leading-[108px] text-paradox-bg uppercase">
              <span className="block">{t('residency.week')}</span>
              <span className="block">{t('residency.of')}</span>
              <span className="block">{t('residency.greatness')}</span>
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="font-['Clash_Grotesk',sans-serif] text-xl md:text-2xl lg:text-[32px] leading-tight md:leading-[40px] text-paradox-bg">
              {t('residency.model')}
            </h3>
            
            {/* Description */}
            <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-bg max-w-2xl mx-auto">
              {t('residency.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

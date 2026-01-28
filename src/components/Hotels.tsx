import { useTranslation } from 'react-i18next'
import OptimizedImage from './OptimizedImage'

const img31 = "/image/photo_2.png"
const img51 = "/image/photo_1.png"
const img11 = "/image/photo_4.png"
const img61 = "/image/photo_3.png"
const img12 = "/image/photo_6.png"
const img102 = "/image/photo_5.png"

export default function Hotels() {
  const { t } = useTranslation()
  return (
    <section className="relative bg-paradox-bg py-16 md:py-32">
      {/* Heading - Full Width */}
      <div className="w-full mb-12 md:mb-20 text-center px-4 md:px-8">
        <h2 className="font-['Anton',sans-serif] text-5xl md:text-7xl lg:text-[160px] leading-tight md:leading-[144px] text-paradox-dark uppercase text-center">
          {t('hotels.title')}
        </h2>
      </div>
      
      <div className="container mx-auto px-8 md:px-12 max-w-7xl">
        {/* Property Rooms Grid */}
        <div className="space-y-24 md:space-y-32">
          {/* Main Living Space */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content Column */}
            <div className="order-2 lg:order-1 space-y-6">
              <h3 className="font-['Clash_Grotesk',sans-serif] text-3xl md:text-4xl lg:text-[40px] leading-tight text-paradox-dark whitespace-pre-line">
                {t('hotels.mainLivingTitle')}
              </h3>
              <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-dark tracking-tight max-w-lg">
                {t('hotels.mainLivingDesc')}
              </p>
              
              {/* Small Image */}
              <div className="mt-8 w-full max-w-md">
                <div className="aspect-[420/300] overflow-hidden rounded-sm">
                  <OptimizedImage
                    src={img31}
                    alt="Living Space Detail"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            
            {/* Large Image Column */}
            <div className="order-1 lg:order-2">
              <div className="aspect-[1146/764] overflow-hidden rounded-sm">
                <OptimizedImage
                  src={img51}
                  alt="Main Living Space"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          
          {/* Private Sanctuary */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content Column */}
            <div className="order-2 space-y-6">
              <h3 className="font-['Clash_Grotesk',sans-serif] text-3xl md:text-4xl lg:text-[40px] leading-tight text-paradox-dark whitespace-pre-line">
                {t('hotels.privateSanctuaryTitle')}
              </h3>
              <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-dark tracking-tight max-w-lg">
                {t('hotels.privateSanctuaryDesc')}
              </p>
              
              {/* Small Image */}
              <div className="mt-8 w-full max-w-md">
                <div className="aspect-[420/300] overflow-hidden rounded-sm">
                  <OptimizedImage
                    src={img11}
                    alt="Sanctuary Detail"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            
            {/* Large Image Column */}
            <div className="order-1">
              <div className="aspect-[1147/764] overflow-hidden rounded-sm">
                <OptimizedImage
                  src={img61}
                  alt="Private Sanctuary"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
          
          {/* Rooftop Terrace */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content Column */}
            <div className="order-2 lg:order-1 space-y-6">
              <h3 className="font-['Clash_Grotesk',sans-serif] text-3xl md:text-4xl lg:text-[40px] leading-tight text-paradox-dark whitespace-pre-line">
                {t('hotels.rooftopTitle')}
              </h3>
              <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-dark tracking-tight max-w-lg">
                {t('hotels.rooftopDesc')}
              </p>
              
              {/* Small Image */}
              <div className="mt-8 w-full max-w-md">
                <div className="aspect-[420/300] overflow-hidden rounded-sm">
                  <OptimizedImage
                    src={img12}
                    alt="Terrace Detail"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            
            {/* Large Image Column */}
            <div className="order-1 lg:order-2">
              <div className="aspect-[900/763] overflow-hidden rounded-sm">
                <OptimizedImage
                  src={img102}
                  alt="Rooftop Terrace"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

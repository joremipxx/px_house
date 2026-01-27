import { useTranslation } from 'react-i18next'

const img31 = "https://www.figma.com/api/mcp/asset/f5bed58b-b8ee-461a-b7a1-32b2909c3644"
const img51 = "https://www.figma.com/api/mcp/asset/2f31913e-13b9-42e7-9d77-027610cd2f87"
const img11 = "https://www.figma.com/api/mcp/asset/fab8fbbd-bdfd-4994-a089-861d4d069e3a"
const img61 = "https://www.figma.com/api/mcp/asset/f20940b9-5ec0-466a-98fa-9732bbc52a4f"
const img12 = "https://www.figma.com/api/mcp/asset/48a5d65e-fd51-479e-98d7-93f494558f14"
const img102 = "https://www.figma.com/api/mcp/asset/b0bc8e21-e394-46a1-8cb3-f72bb914ebcc"

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
              <a 
                href="#" 
                className="inline-block font-['Clash_Grotesk',sans-serif] font-semibold text-[22px] md:text-[26px] text-paradox-dark uppercase tracking-tight border-b-2 border-paradox-dark hover:opacity-70 transition-opacity"
              >
                {t('common.exploreRoom')}
              </a>
              
              {/* Small Image */}
              <div className="mt-8 w-full max-w-md">
                <div className="aspect-[420/300] overflow-hidden rounded-sm">
                  <img 
                    alt="Living Space Detail" 
                    className="w-full h-full object-cover" 
                    src={img31} 
                  />
                </div>
              </div>
            </div>
            
            {/* Large Image Column */}
            <div className="order-1 lg:order-2">
              <div className="aspect-[1146/764] overflow-hidden rounded-sm">
                <img 
                  alt="Main Living Space" 
                  className="w-full h-full object-cover" 
                  src={img51} 
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
              <a 
                href="#" 
                className="inline-block font-['Clash_Grotesk',sans-serif] font-semibold text-[22px] md:text-[26px] text-paradox-dark uppercase tracking-tight border-b-2 border-paradox-dark hover:opacity-70 transition-opacity"
              >
                {t('common.exploreRoom')}
              </a>
              
              {/* Small Image */}
              <div className="mt-8 w-full max-w-md">
                <div className="aspect-[420/300] overflow-hidden rounded-sm">
                  <img 
                    alt="Sanctuary Detail" 
                    className="w-full h-full object-cover" 
                    src={img11} 
                  />
                </div>
              </div>
            </div>
            
            {/* Large Image Column */}
            <div className="order-1">
              <div className="aspect-[1147/764] overflow-hidden rounded-sm">
                <img 
                  alt="Private Sanctuary" 
                  className="w-full h-full object-cover" 
                  src={img61} 
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
              <a 
                href="#" 
                className="inline-block font-['Clash_Grotesk',sans-serif] font-semibold text-[22px] md:text-[26px] text-paradox-dark uppercase tracking-tight border-b-2 border-paradox-dark hover:opacity-70 transition-opacity"
              >
                {t('common.exploreRoom')}
              </a>
              
              {/* Small Image */}
              <div className="mt-8 w-full max-w-md">
                <div className="aspect-[420/300] overflow-hidden rounded-sm">
                  <img 
                    alt="Terrace Detail" 
                    className="w-full h-full object-cover" 
                    src={img12} 
                  />
                </div>
              </div>
            </div>
            
            {/* Large Image Column */}
            <div className="order-1 lg:order-2">
              <div className="aspect-[900/763] overflow-hidden rounded-sm">
                <img 
                  alt="Rooftop Terrace" 
                  className="w-full h-full object-cover" 
                  src={img102} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

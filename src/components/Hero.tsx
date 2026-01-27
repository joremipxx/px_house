import { useTranslation } from 'react-i18next'

const imgImgLisbon1 = "https://www.figma.com/api/mcp/asset/5885e98d-e092-4dc1-9514-fcc8c6bf7cf1"

export default function Hero() {
  const { t } = useTranslation()
  return (
    <section className="relative bg-paradox-dark h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-80">
        <img 
          alt="Lisbon" 
          className="absolute h-full w-full object-cover" 
          src={imgImgLisbon1} 
        />
        {/* Black gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50" />
      </div>
      
      {/* Container positioned lower at bottom - moved down */}
      <div className="absolute bottom-[-20px] h-[386.8px] left-0 w-full z-10">
        {/* SVG/Frame Container for Title */}
        <div className="absolute h-[304px] left-[50px] right-[50px] top-[calc(50%+41.4px)] -translate-y-1/2">
          <div className="absolute h-[304px] left-0 right-0 top-1/2 -translate-y-1/2">
            <div className="absolute inset-[-0.19px_0.02%_0.19px_-0.02%] overflow-clip">
              <h1 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[152px] font-['Anton',sans-serif] text-[240px] leading-[312.682px] text-[#edece3] text-center uppercase whitespace-pre-wrap w-[1517.968px]">
                {t('hero.title')}
              </h1>
            </div>
          </div>
        </div>
        
        {/* Subtitle */}
        <p className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[73.11px] font-['Clash_Grotesk',sans-serif] text-[22px] leading-[26.4px] text-[#ede9e4] text-center tracking-[-0.66px] w-[699px] whitespace-pre-wrap">
          {t('hero.subtitle')}
        </p>
      </div>
    </section>
  )
}

import { useTranslation } from 'react-i18next'

const imgYachtInTheMiddleOfSea = "https://www.figma.com/api/mcp/asset/18510be8-2f06-4e79-9c4b-84264af34b02"

interface PartOfParadoxProps {
  onBookNow: () => void
}

export default function PartOfParadox({ onBookNow }: PartOfParadoxProps) {
  const { t } = useTranslation()
  return (
    <section className="relative bg-paradox-dark h-[1012.5px] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          alt="Yacht in the middle of sea" 
          className="absolute w-full h-[101.59%] top-[-0.79%] object-cover" 
          src={imgYachtInTheMiddleOfSea} 
        />
        {/* Black gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/50"></div>
      </div>
      
      {/* PART OF / PARADOX - Centered */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-64 md:gap-80 lg:gap-96">
            <h2 className="font-['Anton',sans-serif] text-[120px] leading-[108px] text-paradox-bg uppercase">
              {t('partOfParadox.partOf')}
            </h2>
            <h2 className="font-['Anton',sans-serif] text-[120px] leading-[108px] text-paradox-bg uppercase">
              {t('partOfParadox.paradox')}
            </h2>
          </div>
        </div>
      </div>
      
      {/* Description and Button - Lower */}
      <div className="absolute inset-0 flex items-end justify-center pb-16 md:pb-20 z-10">
        <div className="text-center">
          <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-bg max-w-[594px] mx-auto mb-8">
            {t('partOfParadox.description')}
          </p>
          
          <button
            onClick={onBookNow}
            className="inline-block font-['Inter',sans-serif] font-semibold text-[16px] text-paradox-bg uppercase tracking-[-0.16px] border-b border-paradox-bg hover:opacity-70 transition-opacity cursor-pointer"
          >
            {t('common.bookNowLower')}
          </button>
        </div>
      </div>
    </section>
  )
}

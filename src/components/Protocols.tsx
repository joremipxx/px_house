import { useTranslation } from 'react-i18next'

const imgImgImgPrivateChef = "/image/photo_8.jpg"
const imgImgImgBoardingAssistance = "/image/photo_9.jpg"
const imgImgImgPersonalConcierge = "/image/photo_10.jpg"

export default function Protocols() {
  const { t } = useTranslation()
  
  const protocols = [
    {
      number: "01",
      title: t('protocols.arrivalRitual'),
      description: t('protocols.arrivalDesc'),
      image: imgImgImgPrivateChef
    },
    {
      number: "02",
      title: t('protocols.curatedMastery'),
      description: t('protocols.curatedDesc'),
      image: imgImgImgBoardingAssistance
    },
    {
      number: "03",
      title: t('protocols.recoveryProtocols'),
      description: t('protocols.recoveryDesc'),
      image: imgImgImgPersonalConcierge
    }
  ]
  return (
    <section className="relative bg-paradox-bg py-32">
      <div className="container mx-auto px-12">
        <div className="mb-16">
          <h2 className="font-['Anton',sans-serif] text-[104px] leading-[93.6px] text-paradox-dark text-center uppercase">
            {t('protocols.title')}
          </h2>
        </div>
        
        <div className="space-y-0">
          {protocols.map((protocol, index) => (
            <div key={index} className="bg-paradox-bg border-t border-[#c7c7c7] py-8">
              <div className="grid grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-['Inter',sans-serif] font-medium text-[20px] text-paradox-dark tracking-[-0.6px]">
                      {protocol.number}
                    </span>
                    <h3 className="font-['Clash_Grotesk',sans-serif] text-[60px] leading-[60px] text-paradox-dark tracking-[-2.4px]">
                      {protocol.title}
                    </h3>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <p className="font-['Clash_Grotesk',sans-serif] font-medium text-[22px] md:text-[26px] leading-relaxed text-paradox-dark tracking-tight">
                    {protocol.description}
                  </p>
                  <div className="h-[280px]">
                    <img 
                      alt={protocol.title} 
                      className="w-full h-full object-cover" 
                      src={protocol.image} 
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

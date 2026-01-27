import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="relative bg-paradox-dark py-20">
      <div className="container mx-auto px-12">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <img alt="Paradox House Logo" className="h-[40px] w-auto" src="/image/white_x.png" />
          </div>
          <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-brown text-center tracking-tight">
            {t('footer.tagline')}
          </p>
        </div>
        
        <div className="grid grid-cols-3 gap-12 border-t border-[#2b2a2a] border-b pt-12 pb-12 mb-8">
          <div>
            <h4 className="font-['Inter',sans-serif] font-semibold text-[16px] text-paradox-gray uppercase tracking-[-0.16px] mb-4">
              {t('footer.contact')}
            </h4>
            <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-bg tracking-tight">
              contact@paradoxhouse.com
            </p>
          </div>
          
          <div>
            <h4 className="font-['Inter',sans-serif] font-semibold text-[16px] text-paradox-gray uppercase tracking-[-0.16px] mb-4">
              {t('footer.locations')}
            </h4>
            <div className="space-y-4">
              <a href="#" className="block font-['Inter',sans-serif] font-semibold text-[16px] text-paradox-bg uppercase tracking-[-0.16px] border-b border-paradox-bg w-fit hover:opacity-70 transition-opacity">
                Lisbon
              </a>
              <div className="flex items-center gap-2">
                <span className="font-['Inter',sans-serif] font-semibold text-[16px] text-paradox-bg/50 uppercase tracking-[-0.16px]">
                  Dubai
                </span>
                <span className="font-['Inter',sans-serif] text-sm text-paradox-gray uppercase tracking-wider">
                  {t('footer.comingSoon')}
                </span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-['Inter',sans-serif] font-semibold text-[16px] text-paradox-gray uppercase tracking-[-0.16px] mb-4">
              {t('footer.socials')}
            </h4>
            <div className="space-y-4">
              <a href="https://www.instagram.com/paradox_fr/" target="_blank" rel="noopener noreferrer" className="block font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-bg tracking-tight hover:opacity-70 transition-opacity">
                Instagram
              </a>
              <a href="https://www.linkedin.com/company/weareparadox-fr/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="block font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-bg tracking-tight hover:opacity-70 transition-opacity">
                Linkedin
              </a>
              <a href="https://app.paradox.io" target="_blank" rel="noopener noreferrer" className="block font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-bg tracking-tight hover:opacity-70 transition-opacity">
                Paradox OS
              </a>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <p className="font-['Inter',sans-serif] text-[16px] text-paradox-brown tracking-[-0.64px]">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-['Inter',sans-serif] font-semibold text-[16px] text-paradox-bg uppercase tracking-[-0.16px] border-b border-paradox-bg">
              {t('footer.terms')}
            </a>
            <a href="#" className="font-['Inter',sans-serif] font-semibold text-[16px] text-paradox-bg uppercase tracking-[-0.16px] border-b border-paradox-bg">
              {t('footer.privacy')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { createPortal } from 'react-dom'

export default function Navigation() {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  // Sync i18n with URL on mount and when path changes
  useEffect(() => {
    const pathLang = location.pathname.startsWith('/fr') ? 'fr' : 'en'
    if (i18n.language !== pathLang) {
      i18n.changeLanguage(pathLang)
    }
  }, [location.pathname, i18n])

  const changeLanguage = (lng: string) => {
    const currentPath = location.pathname.replace(/^\/(en|fr)/, '') || '/'
    navigate(`/${lng}${currentPath}`)
    i18n.changeLanguage(lng)
  }

  const navContent = (
    <nav 
      className="fixed top-0 left-0 right-0 z-[9999] h-[100px] bg-transparent" 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        width: '100%',
        margin: 0,
        padding: 0
      }}
    >
      <div className="h-full flex items-center justify-between px-8 md:px-12">
        <div className="h-[28px]">
          <a href="#" className="block h-full flex items-center">
            <img alt="Paradox House Logo" className="h-[28px] w-auto" src="/image/logo.png" />
          </a>
        </div>
        
        {/* Language Selector */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => changeLanguage('en')}
            className={`font-['Inter',sans-serif] text-sm font-semibold uppercase tracking-wider transition-opacity ${
              i18n.language === 'en' 
                ? 'text-white opacity-100' 
                : 'text-white/70 hover:opacity-100'
            }`}
          >
            EN
          </button>
          <span className="text-white/40">|</span>
          <button
            onClick={() => changeLanguage('fr')}
            className={`font-['Inter',sans-serif] text-sm font-semibold uppercase tracking-wider transition-opacity ${
              i18n.language === 'fr' 
                ? 'text-white opacity-100' 
                : 'text-white/70 hover:opacity-100'
            }`}
          >
            FR
          </button>
        </div>
      </div>
    </nav>
  )

  return createPortal(navContent, document.body)
}

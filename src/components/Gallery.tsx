import { useTranslation } from 'react-i18next'

const imgItemGallery1BellevoireView = "https://www.figma.com/api/mcp/asset/6002d8b3-3835-40ac-857b-1f0e30cf4ce3"
const imgItemGallery2BellevoirePortrait = "https://www.figma.com/api/mcp/asset/eda5972b-cb2b-4e38-b133-9cee25d02b54"
const imgItemGallery3BellevoireHotelLocation = "https://www.figma.com/api/mcp/asset/78945f51-2f7d-4c4e-880d-62a20534c2d3"
const imgItemGallery4BellevoireGate = "https://www.figma.com/api/mcp/asset/e6428e16-7147-49fb-a369-7259b8eed1c7"
const imgItemGallery5Bellevoire = "https://www.figma.com/api/mcp/asset/d8af7675-44bf-4850-b0d6-6962e4c677dd"

const galleryImages = [
  imgItemGallery1BellevoireView,
  imgItemGallery2BellevoirePortrait,
  imgItemGallery3BellevoireHotelLocation,
  imgItemGallery4BellevoireGate,
  imgItemGallery5Bellevoire,
]

export default function Gallery() {
  const { t } = useTranslation()
  return (
    <section className="relative bg-paradox-bg py-32">
      <div className="container mx-auto px-12">
        <div className="mb-16 text-center">
          <h2 className="font-['Anton',sans-serif] text-[80px] leading-[72px] text-paradox-dark uppercase mb-4">
            {t('gallery.title')}
          </h2>
          <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-dark tracking-tight mb-4 max-w-[617px] mx-auto">
            {t('gallery.description')}
          </p>
          <a href="#" className="inline-block font-['Clash_Grotesk',sans-serif] font-semibold text-[22px] md:text-[26px] text-paradox-dark uppercase tracking-tight border-b border-paradox-dark">
            {t('common.viewGallery')}
          </a>
        </div>
        
        <div className="grid grid-cols-5 gap-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="h-[535px] overflow-hidden">
              <img 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover" 
                src={image} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

// Generate all 31 gallery images in reverse order (31 down to 1)
const generateGalleryImages = () => {
  const images = []
  for (let i = 31; i >= 1; i--) {
    images.push(`/image/gallery/gallery_${String(i).padStart(2, '0')}.png`)
  }
  return images
}

const galleryImages = generateGalleryImages()

// Preview images to show in the grid: gallery_30, gallery_29, gallery_24, gallery_19, gallery_20
// In reversed array: gallery_30 is index 1, gallery_29 is index 2, gallery_24 is index 7, gallery_19 is index 12, gallery_20 is index 11
const previewImageIndices = [1, 2, 7, 12, 11]

export default function Gallery() {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  // Handle keyboard navigation
  useEffect(() => {
    if (!isModalOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
      } else if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
      } else if (e.key === 'Escape') {
        setIsModalOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  const openModal = (index: number = 0) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <section className="relative bg-paradox-bg py-32">
        <div className="container mx-auto px-12">
          <div className="mb-16 text-center">
            <h2 className="font-['Anton',sans-serif] text-[80px] leading-[72px] text-paradox-dark uppercase mb-4">
              {t('gallery.title')}
            </h2>
            <p className="font-['Clash_Grotesk',sans-serif] text-[22px] md:text-[26px] leading-relaxed text-paradox-dark tracking-tight mb-4 max-w-[617px] mx-auto">
              {t('gallery.description')}
            </p>
            <button 
              onClick={() => openModal(0)}
              className="inline-block font-['Clash_Grotesk',sans-serif] font-semibold text-[22px] md:text-[26px] text-paradox-dark uppercase tracking-tight border-b border-paradox-dark hover:opacity-70 transition-opacity cursor-pointer"
            >
              {t('common.viewGallery')}
            </button>
          </div>
          
          <div className="grid grid-cols-5 gap-4">
            {previewImageIndices.map((imageIndex, index) => (
              <div 
                key={index} 
                className="h-[535px] overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => openModal(imageIndex)}
              >
                <img 
                  alt={`Gallery ${31 - imageIndex}`} 
                  className="w-full h-full object-cover" 
                  src={galleryImages[imageIndex]} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Screen Gallery Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[10000] bg-black flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-8 right-8 z-10 text-white text-4xl font-light hover:opacity-70 transition-opacity"
            aria-label="Close gallery"
          >
            ×
          </button>

          {/* Previous Button */}
          <button
            onClick={handlePrevious}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-10 text-white text-5xl font-light hover:opacity-70 transition-opacity"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-10 text-white text-5xl font-light hover:opacity-70 transition-opacity"
            aria-label="Next image"
          >
            ›
          </button>

          {/* Image Container */}
          <div className="relative w-full h-full flex items-center justify-center p-8">
            <img
              src={galleryImages[currentIndex]}
              alt={`Gallery image ${31 - currentIndex}`}
              className="max-w-4xl max-h-[70vh] object-contain"
            />
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white font-['Clash_Grotesk',sans-serif] text-lg">
            {31 - currentIndex} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  )
}

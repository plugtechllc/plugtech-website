import { useState, useEffect } from 'react'

interface Slide {
  id: number
  title: string
  description: string
  image: string
}

const Slideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)

  const slides: Slide[] = [
    {
      id: 1,
      title: "Residential Electrical Installation",
      description: "Complete home electrical systems, outlets, lighting, and panel upgrades for modern living.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
    },
    {
      id: 2,
      title: "Commercial Electrical Services",
      description: "Professional electrical solutions for offices, retail spaces, and industrial facilities.",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "Emergency Electrical Repairs",
      description: "24/7 emergency electrical services to keep your property safe and powered.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 4,
      title: "Smart Home Integration",
      description: "Modern smart home electrical systems, automation, and energy-efficient solutions.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ]

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number): void => {
    setCurrentSlide(index)
  }

  return (
    <section className="slideshow-container hero-slideshow">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
            <a href="#contact" className="cta-button">Get Free Quote</a>
          </div>
        </div>
      ))}

      <button className="prev" onClick={prevSlide}>
        ❮
      </button>
      <button className="next" onClick={nextSlide}>
        ❯
      </button>

      <div className="dots-container">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}

export default Slideshow

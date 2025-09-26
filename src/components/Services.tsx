import React from 'react'
import { Zap, Home, Building, Wrench, Lightbulb, Shield } from 'lucide-react'

interface Service {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      title: "Residential Wiring",
      description: "Complete home electrical wiring, rewiring, and electrical system upgrades for safety and efficiency.",
      icon: <Home className="service-icon" />
    },
    {
      id: 2,
      title: "Commercial Electrical",
      description: "Professional electrical services for businesses, offices, and commercial properties.",
      icon: <Building className="service-icon" />
    },
    {
      id: 3,
      title: "Emergency Repairs",
      description: "24/7 emergency electrical repair services to restore power and ensure safety.",
      icon: <Zap className="service-icon" />
    },
    {
      id: 4,
      title: "Panel Upgrades",
      description: "Electrical panel upgrades and replacements to meet modern power demands safely.",
      icon: <Wrench className="service-icon" />
    },
    {
      id: 5,
      title: "Lighting Installation",
      description: "Indoor and outdoor lighting installation, LED upgrades, and smart lighting solutions.",
      icon: <Lightbulb className="service-icon" />
    },
    {
      id: 6,
      title: "Safety Inspections",
      description: "Comprehensive electrical safety inspections and code compliance assessments.",
      icon: <Shield className="service-icon" />
    }
  ]

  return (
    <section className="services" id="services">
      <div className="container">
        <h2>Our Electrical Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              {service.icon}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

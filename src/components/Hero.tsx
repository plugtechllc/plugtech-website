

const Hero: React.FC = () => {
  return (
    <section className="hero-intro" id="about">
      <div className="container">
        <div className="hero-intro-content">
          <h2>Why Choose PlugTech?</h2>
          <p>
            With over 15 years of experience, PlugTech is your trusted electrical contractor.
            We're licensed, insured, and committed to providing safe, reliable electrical solutions
            for both residential and commercial properties. Our team of certified electricians
            ensures every job meets the highest safety standards and local electrical codes.
          </p>
          <div className="credentials">
            <div className="credential">✓ Licensed & Insured</div>
            <div className="credential">✓ 24/7 Emergency Service</div>
            <div className="credential">✓ Free Estimates</div>
            <div className="credential">✓ Quality Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

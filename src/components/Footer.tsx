
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact Information</h3>
            <p><Phone size={16} style={{ display: 'inline', marginRight: '8px' }} /> (555) 123-4567</p>
            <p><Mail size={16} style={{ display: 'inline', marginRight: '8px' }} /> info@plugtech.com</p>
            <p><MapPin size={16} style={{ display: 'inline', marginRight: '8px' }} /> Your City, State 12345</p>
          </div>
          
          <div className="footer-section">
            <h3>Business Hours</h3>
            <p><Clock size={16} style={{ display: 'inline', marginRight: '8px' }} /> Monday - Friday: 7:00 AM - 6:00 PM</p>
            <p>Saturday: 8:00 AM - 4:00 PM</p>
            <p>Sunday: Emergency calls only</p>
            <p><strong>24/7 Emergency Service Available</strong></p>
          </div>
          
          <div className="footer-section">
            <h3>Service Areas</h3>
            <p>Residential & Commercial</p>
            <p>Licensed & Insured</p>
            <p>Free Estimates</p>
            <p>Quality Guaranteed</p>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid #444' }}>
          <p>&copy; 2024 PlugTech Electrical Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

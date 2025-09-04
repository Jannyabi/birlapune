import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Newsletter Section */}
        <div className="newsletter-section">
          <h3>Newsletter</h3>
          <p>If your business hosts events or exhibitions, creative services can assist with event planning, booth design.</p>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="email-input"
            />
            <button type="submit" className="subscribe-btn">
              <strong>Subscribe</strong>
            </button>
          </form>
        </div>

        <div className="footer-divider"></div>

        {/* Footer Links */}
        <div className="footer-links">
          {/* About Us Section */}
          <div className="footer-column">
            <h4>About Us</h4>
            <ul>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>

          {/* Our Solutions Section */}
          <div className="footer-column">
            <h4>Our Solutions</h4>
            <ul>
              <li><a href="/solutions/content-syndication">B2B Content Syndication</a></li>
              <li><a href="/solutions/data-intent">B2B Data & Intent</a></li>
              <li><a href="/solutions/sales-development">Sales Development</a></li>
            </ul>
          </div>

          {/* Our Contact Section */}
          <div className="footer-column">
            <h4>Our Contact</h4>
            <ul>
              <li>
                <a href="mailto:personifiedb2bmarketing@gmail.com">
                  personifiedb2bmarketing@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright-section">
          <p>© 2025 Birlapune.com | All Rights Reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #2c3e50;
          color: white;
          padding: 3rem 1rem;
          margin-top: 2rem;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .newsletter-section {
          text-align: center;
          margin-bottom: 2rem;
        }
        
        .newsletter-section h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          color: #ecf0f1;
        }
        
        .newsletter-section p {
          color: #bdc3c7;
          margin-bottom: 1.5rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
          line-height: 1.6;
        }
        
        .newsletter-form {
          display: flex;
          justify-content: center;
          gap: 1rem;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .email-input {
          padding: 0.8rem 1rem;
          border: none;
          border-radius: 4px;
          flex: 1;
          min-width: 200px;
          font-size: 1rem;
        }
        
        .subscribe-btn {
          background: linear-gradient(135deg, #6e8efb 0%, #a777e3 100%);
          color: white;
          border: none;
          padding: 0.8rem 1.5rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .subscribe-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        
        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, #7f8c8d, transparent);
          margin: 2rem 0;
        }
        
        .footer-links {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-column h4 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          color: #ecf0f1;
          position: relative;
          padding-bottom: 0.5rem;
        }
        
        .footer-column h4::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #6e8efb, #a777e3);
        }
        
        .footer-column ul {
          list-style: none;
        }
        
        .footer-column li {
          margin-bottom: 0.8rem;
        }
        
        .footer-column a {
          color: #bdc3c7;
          text-decoration: none;
          transition: color 0.3s ease;
          display: inline-block;
        }
        
        .footer-column a:hover {
          color: #6e8efb;
          transform: translateX(5px);
        }
        
        .copyright-section {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid #34495e;
          color: #95a5a6;
        }
        
        .copyright-section p {
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .newsletter-form {
            flex-direction: column;
          }
          
          .email-input {
            min-width: auto;
          }
          
          .footer-links {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .footer-column h4::after {
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>
    </footer>
  );
}
// app/page.jsx
"use client";
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MarketingPage() {
  return (
    <div className="container">
      <Head>
        <title>Birlapune Marketing</title>
        <meta name="description" content="B2B Marketing Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar Component */}
      <Navbar />

      {/* Main Hero Content */}
      <main className="hero">
        <div className="hero-content">
          <h1>B2B MARKETING</h1>
          <p>Transform your business with our innovative marketing solutions</p>
          <button className="cta-button">
            Explore Our Services
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </main>

      {/* Footer Component */}
      <Footer />

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        .hero {
          background: linear-gradient(135deg, #6e8efb 0%, #a777e3 100%);
          min-height: 80vh;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: white;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          flex: 1;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='0.1' d='M0,128L48,117.3C极速模式,107,192,85,288,极速模式C384,139,480,213,576,218.7C672,224,768,160,864,138.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L极速模式,320Z'%3E%3C/path%3E%3C/s极速模式%3E");
          background-size: cover;
          background-position: center;
        }
        
        .hero-content {
          position: relative;
          z-index: 1;
        }
        
        .hero-content h1 {
          font-size: 3.5rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        
        .hero-content p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          max-width: 600px;
          opacity: 0.9;
        }
        
        .cta-button {
          background-color: white;
          color: #6e8efb;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin: 0 auto;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.3);
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(255, 255, 255, 0.4);
        }
        
        .cta-button:hover .btn-arrow {
          transform: translateX(3px);
        }
        
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  );
}
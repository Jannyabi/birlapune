"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setActiveDropdown(null);
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.nav-container')) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const solutionsItems = [
    { 
      name: "B2B Content Syndication", 
      href: "/solutions/b2b-content-syndication", 
      description: "Amplify your content reach across premium B2B platforms",
      icon: "📡"
    },
    { 
      name: "B2B DATA & INTENT", 
      href: "/solutions/data-intent", 
      description: "Leverage data-driven insights for targeted marketing",
      icon: "🔍"
    },
    { 
      name: "SALES DEVELOPMENT", 
      href: "/solutions/sales", 
      description: "Boost your sales pipeline with proven strategies",
      icon: "📈"
    },
  ];

  const resourcesItems = [
    { 
      name: "Blog", 
      href: "/resources/blog", 
      description: "Latest industry insights",
      icon: "📝"
    },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="logo-text">
              <span className="logo-icon">🚀</span>
              <span className="logo-main">B2B</span>
              <span className="logo-accent">MARKETING</span>
            </span>
          </Link>
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="nav-item">
            <Link href="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">🏠</span>
              Home
            </Link>
          </div>
          
          <div className="nav-item">
            <Link href="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">👥</span>
              About Us
            </Link>
          </div>
          
          <div 
            className="nav-item dropdown"
            onMouseEnter={() => !isMobileMenuOpen && setActiveDropdown('solutions')}
            onMouseLeave={() => !isMobileMenuOpen && setActiveDropdown(null)}
          >
            <button
              className="nav-link dropdown-toggle"
              onClick={() => toggleDropdown('solutions')}
              aria-expanded={activeDropdown === 'solutions'}
            >
              <span className="nav-icon">🔧</span>
              Solutions <span className="arrow">▼</span>
            </button>
            
            {activeDropdown === 'solutions' && (
              <div className="dropdown-menu show">
                <div className="dropdown-header">
                  <h3>Our Solutions</h3>
                  <p>Comprehensive services to grow your business</p>
                </div>
                <div className="dropdown-grid">
                  {solutionsItems.map((item, index) => (
                    <Link 
                      key={index} 
                      href={item.href} 
                      className="dropdown-item"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                    >
                      <span className="dropdown-icon">{item.icon}</span>
                      <div className="dropdown-content">
                        <span className="dropdown-title">{item.name}</span>
                        <span className="dropdown-desc">{item.description}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div 
            className="nav-item dropdown"
            onMouseEnter={() => !isMobileMenuOpen && setActiveDropdown('resources')}
            onMouseLeave={() => !isMobileMenuOpen && setActiveDropdown(null)}
          >
            <button
              className="nav-link dropdown-toggle"
              onClick={() => toggleDropdown('resources')}
              aria-expanded={activeDropdown === 'resources'}
            >
              <span className="nav-icon">📚</span>
              Resources <span className="arrow">▼</span>
            </button>
            
            {activeDropdown === 'resources' && (
              <div className="dropdown-menu show">
                <div className="dropdown-header">
                  <h3>Resources Center</h3>
                  <p>Learn from our expertise</p>
                </div>
                <div className="dropdown-grid">
                  {resourcesItems.map((item, index) => (
                    <Link 
                      key={index} 
                      href={item.href} 
                      className="dropdown-item"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setActiveDropdown(null);
                      }}
                    >
                      <span className="dropdown-icon">{item.icon}</span>
                      <div className="dropdown-content">
                        <span className="dropdown-title">{item.name}</span>
                        <span className="dropdown-desc">{item.description}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="nav-item">
            <Link href="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              <span className="nav-icon">📞</span>
              Contact
            </Link>
          </div>
        </div>
        
        <div className="nav-cta">
          <button className="cta-button" onClick={() => window.location.href = '/get-started'}>
            <span className="cta-icon">✨</span>
            Get Started Now
          </button>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(16px);
          padding: 1rem 2rem;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .navbar.scrolled {
          padding: 0.8rem 2rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          background: rgba(255, 255, 255, 0.92);
        }
        
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1280px;
          margin: 0 auto;
          position: relative;
        }
        
        .logo-text {
          color: #1a365d;
          font-size: 1.6rem;
          font-weight: 800;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
        }
        
        .logo-text:hover {
          transform: translateY(-2px);
        }
        
        .logo-icon {
          font-size: 2rem;
        }
        
        .logo-main {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .logo-accent {
          color: #2d3748;
          font-weight: 700;
        }
        
        .hamburger-menu {
          display: none;
          flex-direction: column;
          justify-content: space-around;
          width: 32px;
          height: 28px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 10;
          position: relative;
        }
        
        .hamburger-line {
          width: 100%;
          height: 3px;
          background: #2d3748;
          border-radius: 3px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: center;
        }
        
        .hamburger-menu.active .hamburger-line:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
          background: #4299e1;
        }
        
        .hamburger-menu.active .hamburger-line:nth-child(2) {
          opacity: 0;
        }
        
        .hamburger-menu.active .hamburger-line:n极速模式-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
          background: #4299e1;
        }
        
        .nav-menu {
          display: flex;
          list-style: none;
          gap: 2.2rem;
          align-items: center;
        }
        
        .nav-item {
          position: relative;
        }
        
        .nav-link {
          color: #2d3748;
          text-decoration: none;
          font-weight: 600;
          padding: 0.6rem 0;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          position: relative;
          font-size: 1rem;
          background: none;
          border: none;
          text-align: left;
        }
        
        .nav-link:hover {
          color: #4299e1;
          transform: translateY(-2px);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #4299e1, #3182ce);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .nav-icon {
          font-size: 1.2rem;
          transition: transform 0.3s ease;
        }
        
        .nav-link:hover .nav-icon {
          transform: scale(1.2);
        }
        
        .dropdown-toggle {
          display: flex;
          align-items: center;
          gap: 0.3rem;
        }
        
        .arrow {
          font-size: 0.7rem;
          transition: transform 0.3s ease;
        }
        
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          min-width: 520px;
          padding: 0;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          z-index: 1000;
          animation: fadeIn 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
          overflow: hidden;
          backdrop-filter: blur(20px);
        }
        
        .dropdown-header {
          padding: 1.8rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        
        .dropdown-header h3 {
          margin: 0 0 0.5rem 0;
          font-size: 1.4rem;
          font-weight: 700;
        }
        
        .dropdown-header p {
          margin: 0;
          opacity: 0.9;
          font-size: 0.95rem;
        }
        
        .dropdown-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 1.2rem;
          gap: 0.8rem;
        }
        
        .dropdown-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.4rem;
          color: #2d3748;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 12px;
          border: 1px solid transparent;
        }
        
        .dropdown-item:hover {
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          border-color: rgba(102, 126, 234, 0.1);
        }
        
        .dropdown-icon {
          font-size: 1.8rem;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }
        
        .dropdown-item:hover .dropdown-icon {
          transform: scale(1.2);
        }
        
        .dropdown-content {
          display: flex;
          flex-direction: column;
        }
        
        .dropdown-title {
          font-weight: 700;
          margin-bottom: 0.4rem;
          font-size: 1.05rem;
          color: #2d3748;
        }
        
        .dropdown-desc {
          font-size: 0.9rem;
          color: #718096;
          line-height: 1.5;
        }
        
        .nav-cta {
          display: flex;
          align-items: center;
        }
        
        .cta-button {
          background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 1rem;
          box-shadow: 0 8px 25px rgba(238, 90, 82, 0.3);
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(238, 90, 82, 0.4);
        }
        
        .cta-icon {
          font-size: 1.2rem;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Mobile Styles */
        @media (max-width: 968px) {
          .hamburger-menu {
            display: flex;
          }
          
          .nav-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 320px;
            height: 100vh;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            flex-direction: column;
            padding: 6rem 2rem 2rem;
            box-shadow: -10px 0 40px rgba(0, 0, 0, 0.2);
            transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            gap: 0;
            justify-content: flex-start;
          }
          
          .nav-menu.active {
            right: 0;
          }
          
          .nav-item {
            width: 100%;
            padding: 1.2rem 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .nav-item:last-child {
            border-bottom: none;
          }
          
          .nav-link {
            color: white;
            font-size: 1.1rem;
            justify-content: flex-start;
          }
          
          .nav-link:hover {
            color: #ffd700;
          }
          
          .dropdown-menu {
            position: static;
            width: 100%;
            margin-top: 1rem;
            min-width: auto;
            box-shadow: none;
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
          }
          
          .dropdown-grid {
            grid-template-columns: 1fr;
            padding: 0.8rem;
          }
          
          .dropdown-item {
            padding: 1.2rem;
            color: white;
          }
          
          .dropdown-title, .dropdown-desc {
            color: white;
          }
          
          .dropdown-item:hover {
            background: rgba(255, 255, 255, 0.15);
          }
          
          .nav-cta {
            display: none;
          }
        }
        
        @media (max-width: 480px) {
          .navbar {
            padding: 0.8rem 1.5rem;
          }
          
          .navbar.scrolled {
            padding: 0.6rem 1.5rem;
          }
          
          .logo-text {
            font-size: 1.4rem;
          }
          
          .nav-menu {
            width: 100%;
          }
        }
      `}</style>
    </nav>
  );
}
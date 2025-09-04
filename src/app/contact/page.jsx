'use client';
import { useState } from 'react';
import Link from 'next/link';
import Navbar from "../../components/Navbar"; 
import Footer from "../../components/Footer"; // Changed from duplicate Navbar import

export default function ContactHeader() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Submission error:', error);
      alert('Sorry, there was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How can I contact Personified B2B Marketing customer support?",
      answer: "You can reach our customer support team through multiple channels: email at support@personifiedb2bmarketing.com, phone at +1 (800) 123-4667, or via the contact form on our website. We're here to help you with any questions or concerns."
    },
    {
      question: "What are your customer support hours?",
      answer: "Our customer support team is available 24/7 to assist you. We understand that business needs can arise at any time, so we ensure round-the-clock support through our phone and email channels."
    },
    {
      question: "How long does it take to get a response from your team?",
      answer: "We pride ourselves on quick response times. For phone support, you'll reach a representative immediately. Email inquiries are typically responded to within 2 hours during business days, and within 4 hours during weekends and holidays."
    },
    {
      question: "Do you have international contact numbers?",
      answer: "Yes, we provide international contact numbers for our global clients. Please reach out to our main support line for assistance, and we'll connect you with the appropriate regional representative based on your location and needs."
    }
  ];

  return (
    <>
      <Navbar />
      <section className="hero-section">
        <div className="container">
          <div className="content">
            <h1>Get in Touch</h1>
            <p>We're here to help! Reach out for support, business inquiries, or just to say hello.</p>
          </div>
        </div>
      </section>

      <section className="contact-info-cards">
        <div className="container">
          <div className="contact-cards">
            {/* Phone Card */}
            <div className="contact-card">
              <div className="card-icon">📞</div>
              <h3>Call Us</h3>
              <p className="contact-detail">+1 (800) 123-4667</p>
              <p className="contact-description">24/7 customer support</p>
            </div>

            {/* Email Card */}
            <div className="contact-card">
              <div className="card-icon">✉️</div>
              <h3>Email Us</h3>
              <p className="contact-detail">support@personifiedb2bmarketing.com</p>
              <p className="contact-description">We'll respond within 2 hours</p>
            </div>

            {/* Address Card */}
            <div className="contact-card">
              <div className="card-icon">📍</div>
              <h3>Visit Us</h3>
              <p className="contact-detail">539 W. Commerce St, Dallas, TX</p>
              <p className="contact-description">Mon-Fri: 9AM - 5PM</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">
            <div className="section-header">
              <h2>Send Us a Message</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>
            
            <div className="contact-grid">
              <div className="contact-info">
                <div className="info-card">
                  <div className="info-icon">📧</div>
                  <h3>Email Us</h3>
                  <p>info@b2bmarketing.com</p>
                  <span>We'll respond within 24 hours</span>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">📞</div>
                  <h3>Call Us</h3>
                  <p>+1 (555) 123-4567</p>
                  <span>Mon-Fri, 9am-5pm EST</span>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">💬</div>
                  <h3>Live Chat</h3>
                  <p>Available on our website</p>
                  <span>Get instant help from our team</span>
                </div>
                
                <div className="info-card">
                  <div className="info-icon">📍</div>
                  <h3>Visit Us</h3>
                  <p>123 Business Avenue</p>
                  <span>New York, NY 10001</span>
                </div>
              </div>
              
              <div className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className={errors.name ? 'error' : ''}
                        disabled={isSubmitting}
                      />
                      {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email address"
                        className={errors.email ? 'error' : ''}
                        disabled={isSubmitting}
                      />
                      {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is this regarding?"
                      className={errors.subject ? 'error' : ''}
                      disabled={isSubmitting}
                    />
                    {errors.subject && <span className="error-message">{errors.subject}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      placeholder="Tell us how we can help you..."
                      className={errors.message ? 'error' : ''}
                      disabled={isSubmitting}
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message}</span>}
                  </div>
                  
                  <button 
                    type="submit" 
                    className="submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="faq-section">
        <div className="container">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find quick answers to common questions about contacting our team.</p>
          </div>
          
          <div className="faq-divider"></div>
          
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              >
                <button 
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={activeIndex === index}
                >
                  {item.question}
                  <span className="faq-icon">
                    {activeIndex === index ? '−' : '+'}
                  </span>
                </button>
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Grow Your Business?</h2>
            <p>Partner with us to elevate your marketing strategy and drive measurable results for your business.</p>
            <Link href="/contact" className="cta-button">
              Get Started Today
            </Link>
          </div>
        </div>
      </section>
      
      <style jsx>{`
        .hero-section {
          padding: 5.5rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
        
        .content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .hero-section h1 {
          font-size: 3rem;
          font-weight: 700;
          margin: 0;
          background: linear-gradient(45deg, #fff, #e0e7ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .hero-section p {
          font-size: 1.25rem;
          line-height: 1.6;
          margin: 0;
          opacity: 0.95;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .contact-info-cards {
          padding: 4rem 2rem;
          background: #f8fafc;
        }
        
        .contact-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .contact-card {
          background: white;
          padding: 2.5rem 2rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: 1px solid #e2e8f0;
        }
        
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }
        
        .card-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          display: block;
        }
        
        .contact-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1a365d;
          margin-bottom: 1rem;
        }
        
        .contact-detail {
          font-size: 1.2rem;
          font-weight: 500;
          color: #2d3748;
          margin-bottom: 0.5rem;
          line-height: 1.4;
        }
        
        .contact-description {
          font-size: 1rem;
          color: #718096;
          margin: 0;
          line-height: 1.5;
        }
        
        .contact-section {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
        }
        
        .contact-content {
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        
        .section-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 3rem 2rem;
          text-align: center;
        }
        
        .section-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }
        
        .section-header p {
          font-size: 1.1rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 0;
        }
        
        .contact-info {
          background: #f8fafc;
          padding: 2.5rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        
        .info-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        
        .info-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
        }
        
        .info-card h3 {
          font-size: 1.1rem;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }
        
        .info-card p {
          font-size: 1rem;
          color: #4a5568;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }
        
        .info-card span {
          font-size: 0.85rem;
          color: #718096;
        }
        
        .contact-form-container {
          padding: 2.5rem;
        }
        
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
        }
        
        .form-group label {
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 0.5rem;
        }
        
        .form-group input,
        .form-group textarea {
          padding: 1rem;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #667eea;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }
        
        .form-group input.error,
        .form-group textarea.error {
          border-color: #e53e3e;
        }
        
        .error-message {
          color: #e53e3e;
          font-size: 0.875rem;
          margin-top: 0.5rem;
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        .submit-btn {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          margin-top: 1rem;
        }
        
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
        }
        
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .faq-section {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
        }
        
        .faq-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }
        
        .faq-header h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #1a365d;
          margin-bottom: 1rem;
        }
        
        .faq-header p {
          font-size: 1.2rem;
          color: #4a5568;
          line-height: 1.6;
        }
        
        .faq-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent, #667eea, transparent);
          margin: 2rem 0;
        }
        
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .faq-item {
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .faq-item:hover {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }
        
        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          background: none;
          border: none;
          text-align: left;
          font-size: 1.1rem;
          font-weight: 600;
          color: #2d3748;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        
        .faq-question:hover {
          background-color: #f7fafc;
        }
        
        .faq-icon {
          font-size: 1.5rem;
          font-weight: 400;
          color: #667eea;
          flex-shrink: 0;
          margin-left: 1rem;
        }
        
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }
        
        .faq-item.active .faq-answer {
          max-height: 300px;
        }
        
        .faq-answer p {
          padding: 0 1.5rem 1.5rem;
          margin: 0;
          color: #4a5568;
          line-height: 1.6;
        }
        
        .cta-section {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
          opacity: 0.5;
        }
        
        .cta-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }
        
        .cta-content h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
        }
        
        .cta-content p {
          font-size: 1.25rem;
          line-height: 1.6;
          margin: 0;
          opacity: 0.95;
          max-width: 600px;
        }
        
        .cta-button {
          display: inline-block;
          background: white;
          color: #667eea;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          margin-top: 1rem;
        }
        
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
          background: #f7fafc;
        }
        
        /* Responsive Design */
        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          
          .contact-info {
            grid-template-columns: 1fr;
            padding: 2rem;
          }
          
          .form-row {
            grid-template-columns: 1fr;
          }
        }
        
        @media (max-width: 768px) {
          .hero-section {
            padding: 3rem 1.5rem;
          }
          
          .hero-section h1 {
            font-size: 2.5rem;
          }
          
          .hero-section p {
            font-size: 1.1rem;
          }
          
          .contact-info-cards {
            padding: 3rem 1.5rem;
          }
          
          .contact-cards {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .contact-card {
            padding: 2rem 1.5rem;
          }
          
          .card-icon {
            font-size: 2.5rem;
          }
          
          .contact-card h3 {
            font-size: 1.3rem;
          }
          
          .contact-detail {
            font-size: 1.1rem;
          }
          
          .contact-section {
            padding: 2rem 1rem;
          }
          
          .section-header {
            padding: 2rem 1rem;
          }
          
          .section-header h2 {
            font-size: 2rem;
          }
          
          .contact-info,
          .contact-form-container {
            padding: 1.5rem;
          }
          
          .faq-section {
            padding: 3rem 1.5rem;
          }
          
          .faq-header h2 {
            font-size: 2rem;
          }
          
          .faq-header p {
            font-size: 1.1rem;
          }
          
          .faq-question {
            padding: 1.25rem;
            font-size: 1rem;
          }
          
          .faq-answer p {
            padding: 0 1.25rem 1.25rem;
          }
          
          .cta-section {
            padding: 4rem 1.5rem;
          }
          
          .cta-content h2 {
            font-size: 2rem;
          }
          
          .cta-content p {
            font-size: 1.1rem;
          }
          
          .cta-button {
            padding: 0.875rem 2rem;
            font-size: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .hero-section {
            padding: 2rem 1rem;
          }
          
          .hero-section h1 {
            font-size: 2rem;
          }
          
          .hero-section p {
            font-size: 1rem;
          }
          
          .contact-info-cards {
            padding: 2rem 1rem;
          }
          
          .contact-card {
            padding: 1.5rem 1rem;
          }
          
          .card-icon {
            font-size: 2rem;
          }
          
          .contact-card h3 {
            font-size: 1.2rem;
          }
          
          .contact-detail {
            font-size: 1rem;
          }
          
          .faq-section {
            padding: 2rem 1rem;
          }
          
          .faq-header h2 {
            font-size: 1.75rem;
          }
          
          .faq-question {
            padding: 1rem;
          }
          
          .faq-answer p {
            padding: 0 1rem 1rem;
          }
          
          .cta-section {
            padding: 3rem 1rem;
          }
          
          .cta-content h2 {
            font-size: 1.75rem;
          }
          
          .cta-content p {
            font-size: 1rem;
          }
          
          .cta-button {
            padding: 0.75rem 1.75rem;
          }
        }
      `}</style>
      <Footer />
    </>
  );
}
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Send, 
  User, 
  Phone, 
  BookOpen, 
  MessageSquare, 
  Mail, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ShieldCheck 
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: 'Cambridge IGCSE Extended Math (0580)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setToastMessage(`🎉 Thank you, ${formData.name}! Anu Mam's team will connect with you on WhatsApp at ${formData.phone} shortly.`);
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  return (
    <main className="contact-page-wrapper">
      
      {/* Background Video with Glassmorphic Dark Overlay */}
      <div className="contact-video-container">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="contact-bg-video"
          src="/assets/contact-video.webm"
        />
        <div className="contact-video-overlay" />
      </div>

      {/* Top Floating Navigation Header */}
      <header className="contact-top-nav">
        <div className="container contact-nav-inner">
          <Link href="/" className="contact-back-btn">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          <Link href="/" className="contact-brand">
            <div className="contact-brand-circle">
              <img 
                src="/assets/bike_logo.png" 
                alt="Maths Habit Logo" 
                className="contact-bike-img" 
              />
            </div>
            <span className="contact-brand-name">
              MATHS <span className="contact-brand-accent">HABIT</span>
            </span>
          </Link>

          <a 
            href="https://wa.me/18005556284?text=Hi%20Anu%20Mam,%20I%20want%20to%20know%20more%20about%20your%20IGCSE%20Mathematics%20classes!"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-nav-whatsapp"
          >
            <MessageSquare size={15} />
            <span>Quick Chat</span>
          </a>
        </div>
      </header>

      {/* Main Glassmorphic Contact Section */}
      <div className="contact-main-content">
        <div className="container">
          <div className="contact-layout-grid">
            
            {/* Left Column: Info & Trust Badges */}
            <div className="contact-info-panel">
              <span className="contact-pill-tag">
                <Sparkles size={14} />
                <span>Get In Touch</span>
              </span>

              <h1 className="contact-headline">
                Let&apos;s Build Your Child&apos;s <span className="contact-gradient-text">IGCSE Success Story</span>
              </h1>

              <p className="contact-subhead">
                Have questions regarding Cambridge IGCSE Extended (0580), Additional Math (0606), or Checkpoint foundation batches? Connect directly with Senior Educator Anu Mam.
              </p>

              {/* Contact Detail Cards */}
              <div className="contact-cards-stack">
                
                <a 
                  href="https://wa.me/18005556284?text=Hi%20Anu%20Mam,%20I%20want%20to%20know%20more%20about%20your%20IGCSE%20Mathematics%20classes!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-quick-card"
                >
                  <div className="contact-card-icon-wrap icon-teal">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <div className="contact-card-label">WhatsApp Admission Desk</div>
                    <div className="contact-card-val">+44 20 7946 0912 / Instant Response</div>
                  </div>
                </a>

                <a href="mailto:info@mathshabit.com" className="contact-quick-card">
                  <div className="contact-card-icon-wrap icon-gold">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="contact-card-label">Official Email Support</div>
                    <div className="contact-card-val">info@mathshabit.com</div>
                  </div>
                </a>

                <div className="contact-quick-card no-hover">
                  <div className="contact-card-icon-wrap icon-blue">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="contact-card-label">Global Timings Supported</div>
                    <div className="contact-card-val">UK, Middle East, Singapore, Malaysia & India</div>
                  </div>
                </div>

              </div>

              {/* Guarantee Tag */}
              <div className="contact-guarantee-box">
                <ShieldCheck size={22} className="guarantee-icon" />
                <p>
                  <strong>100% Free 1-Hour Live Interactive Demo</strong> • No credit card required • Personalized academic diagnosis.
                </p>
              </div>
            </div>

            {/* Right Column: Modern Glassmorphic Form */}
            <div className="contact-form-panel">
              <div className="contact-glass-card">
                
                {submitted ? (
                  <div className="contact-success-state">
                    <div className="success-icon-circle">
                      <CheckCircle2 size={48} color="#14B8A6" />
                    </div>
                    <h3>Inquiry Received!</h3>
                    <p>
                      Thank you, <strong>{formData.name}</strong>. Anu Mam&apos;s team has received your details for <strong>{formData.grade}</strong>.
                    </p>
                    <p className="success-sub">
                      We will reach out to you via WhatsApp at <strong>{formData.phone}</strong> within 2 hours to confirm your free demo schedule.
                    </p>

                    <button 
                      className="btn-reset-form"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', phone: '', grade: 'Cambridge IGCSE Extended Math (0580)', message: '' });
                      }}
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form-inner">
                    <div className="form-header-area">
                      <h2>Book Free Trial / Contact Us</h2>
                      <p>Fill in the details below to receive instant syllabus roadmaps & demo class links.</p>
                    </div>

                    <div className="contact-field-group">
                      <label htmlFor="student-name">Student Full Name *</label>
                      <div className="contact-input-wrap">
                        <User size={17} className="input-icon" />
                        <input 
                          type="text" 
                          id="student-name" 
                          required 
                          placeholder="e.g. Alex Henderson"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="contact-field-group">
                      <label htmlFor="contact-phone">WhatsApp Contact Number *</label>
                      <div className="contact-input-wrap">
                        <Phone size={17} className="input-icon" />
                        <input 
                          type="tel" 
                          id="contact-phone" 
                          required 
                          placeholder="+44 7700 900077 or +971 50 123 4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="contact-field-group">
                      <label htmlFor="target-grade">IGCSE Program / Grade Level *</label>
                      <div className="contact-input-wrap">
                        <BookOpen size={17} className="input-icon" />
                        <select 
                          id="target-grade" 
                          required
                          value={formData.grade}
                          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        >
                          <option value="Cambridge IGCSE Extended Math (0580)">Cambridge IGCSE Extended Math (0580)</option>
                          <option value="Cambridge IGCSE Additional Math (0606)">Cambridge IGCSE Additional Math (0606)</option>
                          <option value="Cambridge IGCSE Core Math (0580)">Cambridge IGCSE Core Math (0580)</option>
                          <option value="Edexcel International GCSE Math (4MA1 / 4PM1)">Edexcel International GCSE Math (4MA1 / 4PM1)</option>
                          <option value="Cambridge Lower Secondary Checkpoint (Grade 8)">Cambridge Lower Secondary Checkpoint (Grade 8)</option>
                          <option value="Cambridge Lower Secondary Math (Grades 6–7)">Cambridge Lower Secondary Math (Grades 6–7)</option>
                          <option value="1-on-1 Personal Mentorship by Anu Mam">1-on-1 Personal Mentorship by Anu Mam</option>
                        </select>
                      </div>
                    </div>

                    <div className="contact-field-group">
                      <label htmlFor="contact-message">Specific Learning Needs / Message (Optional)</label>
                      <textarea 
                        id="contact-message" 
                        rows={3}
                        placeholder="e.g. Looking to improve Paper 4 speed, circle theorems, or preparing for May/June series..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="contact-submit-btn">
                      <span>Confirm & Book Free Trial Class</span>
                      <Send size={16} />
                    </button>

                    <div className="contact-privacy-note">
                      🔒 Zero spam policy • Your contact details remain 100% confidential.
                    </div>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-container">
          <div className="toast">
            <CheckCircle2 size={20} color="#14B8A6" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

    </main>
  );
}

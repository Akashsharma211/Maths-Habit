'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, ChevronRight, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="motion-footer">
      <div className="container">
        
        <div className="footer-featured-grid">
          
          {/* Column 1: Brand & Bio */}
          <div className="footer-col brand-col">
            <Link href="/" className="footer-brand-link">
              <div className="footer-logo-circle">
                <img 
                  src="/assets/bike_logo.png" 
                  alt="Maths Habit Logo" 
                  className="footer-bike-img" 
                />
              </div>
              <span className="footer-brand-title">
                MATHS <span className="highlight-teal">HABIT</span>
              </span>
            </Link>
            
            <p className="footer-brand-desc">
              Premier Cambridge & Edexcel IGCSE Mathematics online academy led by Senior Educator Anu Mam. Building 0-fear conceptual mastery and guaranteed A* results.
            </p>

            <a 
              href="https://wa.me/18005556284?text=Hi%20Anu%20Mam,%20I%20want%20to%20know%20more%20about%20your%20IGCSE%20Mathematics%20classes!"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp-btn"
            >
              <MessageSquare size={15} />
              <span>WhatsApp Admission Desk</span>
            </a>
          </div>

          {/* Column 2: Featured Navigation */}
          <div className="footer-col">
            <h4 className="footer-col-title">Featured Pages</h4>
            <ul className="footer-col-list">
              <li>
                <Link href="/meet-anu">
                  <ChevronRight size={14} className="footer-chevron" />
                  <span>Meet Anu Mam</span>
                </Link>
              </li>
              <li>
                <Link href="/#courses">
                  <ChevronRight size={14} className="footer-chevron" />
                  <span>IGCSE Courses & Batches</span>
                </Link>
              </li>
              <li>
                <Link href="/#who-is-anu">
                  <ChevronRight size={14} className="footer-chevron" />
                  <span>Why Maths Habit</span>
                </Link>
              </li>
              <li>
                <Link href="/#testimonials">
                  <ChevronRight size={14} className="footer-chevron" />
                  <span>Results & Reviews</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <ChevronRight size={14} className="footer-chevron" />
                  <span>Contact & Admissions</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured IGCSE Pathways */}
          <div className="footer-col">
            <h4 className="footer-col-title">Featured IGCSE Batches</h4>
            <ul className="footer-col-list">
              <li>
                <Link href="/#courses">
                  <ChevronRight size={14} className="footer-chevron" />
                  <span>IGCSE Extended Math (0580)</span>
                </Link>
              </li>
              <li>
                <Link href="/#courses">
                  <ChevronRight size={14} className="footer-chevron" />
                  <span>Cambridge Additional Math (0606)</span>
                </Link>
              </li>
              <li>
                <Link href="/#courses">
                  <ChevronRight size={14} className="footer-chevron" />
                  <span>Edexcel International GCSE (4MA1)</span>
                </Link>
              </li>
              <li>
                <Link href="/#courses">
                  <ChevronRight size={14} className="footer-chevron" />
                  <span>Cambridge Checkpoint (Grades 6–8)</span>
                </Link>
              </li>
              <li>
                <Link href="/#courses">
                  <ChevronRight size={14} className="footer-chevron" />
                  <span>10-Year Past Paper Masterclass</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Global Admissions</h4>
            <div className="footer-contact-info">
              <p>
                <MapPin size={16} className="contact-icon" />
                <span>Online Global Academy • Serving Students in UK, UAE, Singapore & Europe</span>
              </p>
              <p>
                <Phone size={16} className="contact-icon" />
                <a href="tel:+442079460912">+44 20 7946 0912 / +1 (800) 555-MATH</a>
              </p>
              <p>
                <Mail size={16} className="contact-icon" />
                <a href="mailto:info@mathshabit.com">info@mathshabit.com</a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Maths Habit Academy. All rights reserved.</p>
          <div className="footer-bottom-tag">
            <span>Cambridge & Edexcel IGCSE Mathematics Mentorship</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

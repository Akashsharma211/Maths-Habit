'use client';

import { MapPin, Phone, Mail, ChevronsRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="motion-footer">
      <div className="container">
        
        <div className="footer-5col-grid">
          
          <div className="footer-col">
            <div style={{ marginBottom: '1.5rem' }}>
              <a href="#" className="motion-brand">
                <img 
                  src="/assets/bike_logo.png" 
                  alt="Maths Habit Bicycle Logo" 
                  className="brand-bike-icon-img" 
                  style={{ height: '72px' }}
                />
                <div className="brand-text-block">
                  <span className="brand-title-main" style={{ fontSize: '1.5rem' }}>
                    MATHS <span className="brand-title-accent">HABIT</span>
                  </span>
                  <span className="brand-tagline-sub" style={{ fontSize: '0.6rem' }}>
                    REASONING • PROBLEM SOLVING • APPLICATION
                  </span>
                </div>
              </a>
            </div>
            <ul className="footer-col-list">
              <li><a href="#"><ChevronsRight size={14} /> Why Maths Habit</a></li>
              <li><a href="#"><ChevronsRight size={14} /> About Anu Mam</a></li>
              <li><a href="#"><ChevronsRight size={14} /> Academics Team</a></li>
              <li><a href="#"><ChevronsRight size={14} /> CBSE/IGCSE Brochure</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Target Boards</h4>
            <ul className="footer-col-list">
              <li><a href="#"><ChevronsRight size={14} /> CBSE Board (Class 6-10)</a></li>
              <li><a href="#"><ChevronsRight size={14} /> IGCSE Cambridge (Grade 6-10)</a></li>
              <li><a href="#"><ChevronsRight size={14} /> IGCSE Checkpoint</a></li>
              <li><a href="#"><ChevronsRight size={14} /> Math & STEM Olympiad</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="footer-col-list">
              <li><a href="#"><ChevronsRight size={14} /> Contact Us</a></li>
              <li><a href="#"><ChevronsRight size={14} /> Enquiry</a></li>
              <li><a href="#"><ChevronsRight size={14} /> Be A Partner</a></li>
              <li><a href="#"><ChevronsRight size={14} /> Parent Portal</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Popular Batches</h4>
            <ul className="footer-col-list">
              <li><a href="#courses">CBSE Class 9 & 10 Foundation</a></li>
              <li><a href="#courses">IGCSE Grade 9 & 10 Math</a></li>
              <li><a href="#courses">CBSE Class 6th-8th STEM</a></li>
              <li><a href="#courses">IGCSE Grade 6-8 Lower Sec</a></li>
              <li><a href="#courses">CBSE Class 10 Board 100/100</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Corporate Office</h4>
            <div className="footer-contact-info">
              <p>
                <MapPin size={16} style={{ color: '#14B8A6', flexShrink: 0 }} />
                <span>394, Rajeev Gandhi Nagar Kota, Rajasthan 324005 / Sector 14, New Delhi</span>
              </p>
              <p>
                <Phone size={16} style={{ color: '#14B8A6', flexShrink: 0 }} />
                <span>18002121799 / +91 98765 43210</span>
              </p>
              <p>
                <Mail size={16} style={{ color: '#14B8A6', flexShrink: 0 }} />
                <span>info@mathshabit.com</span>
              </p>
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}

'use client';

import { useState } from 'react';
import { CheckCircle2, Flame, User, Phone, Send, Lock } from 'lucide-react';

export default function JoinSection({ onToast }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    grade: '',
    subject: '',
    time: 'Evening (5:00 PM)'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onToast(`🎉 Success! Free Demo confirmed for ${formData.name}. Details sent to ${formData.phone}!`);
    setFormData({ name: '', phone: '', grade: '', subject: '', time: 'Evening (5:00 PM)' });
  };

  return (
    <section class="section join-section" id="join">
      <div class="container">
        <div class="join-card-container">
          <div class="grid grid-2 join-grid align-center">
            
            <div class="join-info">
              <span class="section-tag light-tag">Book Your Seat</span>
              <h2 class="join-title">Experience the Difference in a <span class="text-gradient-gold">Free Live Demo Class</span></h2>
              <p class="join-desc">
                Don&apos;t just take our word for it. Attend a <strong>1-Hour Live Interactive Trial Class</strong> with Anu Mam. No credit card required.
              </p>

              <div class="demo-highlights">
                <div class="demo-hl-item">
                  <CheckCircle2 size={18} />
                  <span>Interactive 1-on-1 interaction with Anu Mam</span>
                </div>
                <div class="demo-hl-item">
                  <CheckCircle2 size={18} />
                  <span>Free PDF Formula Master Cheat-Sheet</span>
                </div>
                <div class="demo-hl-item">
                  <CheckCircle2 size={18} />
                  <span>Personal Academic Audit & Score Roadmap</span>
                </div>
              </div>

              <div class="live-counter-box">
                <Flame class="counter-icon" size={28} />
                <div>
                  <span class="counter-title">Limited Slots Available for Next Demo Batch</span>
                  <span class="counter-subtitle">Only <strong>4 Free Demo Seats Remaining</strong> for this week!</span>
                </div>
              </div>
            </div>

            <div class="join-form-wrapper">
              <form class="demo-form" onSubmit={handleSubmit}>
                <h3 class="form-title">Register for Free Demo Class</h3>
                <p class="form-subtitle">Fill in details to receive instant WhatsApp demo link & schedule.</p>

                <div class="form-group">
                  <label htmlFor="student-name">Student Full Name *</label>
                  <div class="input-icon-wrap">
                    <User size={16} />
                    <input 
                      type="text" 
                      id="student-name" 
                      required 
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label htmlFor="parent-phone">WhatsApp Mobile Number *</label>
                  <div class="input-icon-wrap">
                    <Phone size={16} />
                    <input 
                      type="tel" 
                      id="parent-phone" 
                      required 
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div class="form-row grid grid-2">
                  <div class="form-group">
                    <label htmlFor="student-grade">Current Class/Grade *</label>
                    <select 
                      id="student-grade" 
                      required
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    >
                      <option value="">Select Grade</option>
                      <option value="Class 9">Class 9th</option>
                      <option value="Class 10">Class 10th</option>
                      <option value="Class 11">Class 11th</option>
                      <option value="Class 12">Class 12th</option>
                      <option value="Dropper">Dropper / Target JEE/NEET</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label htmlFor="target-subject">Primary Subject *</label>
                    <select 
                      id="target-subject" 
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="">Select Subject</option>
                      <option value="Science">Science Complete</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Physics">Physics (11/12)</option>
                      <option value="Chemistry">Chemistry (11/12)</option>
                      <option value="JEE/NEET Combined">JEE / NEET Prep</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label htmlFor="demo-time">Preferred Batch Time</label>
                  <select 
                    id="demo-time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="Evening (5:00 PM)">Evening Batch (5:00 PM - 6:00 PM)</option>
                    <option value="Late Evening (7:00 PM)">Late Evening (7:00 PM - 8:00 PM)</option>
                    <option value="Weekend (Sunday 11 AM)">Weekend Special (Sunday 11:00 AM)</option>
                  </select>
                </div>

                <button type="submit" class="btn btn-primary btn-block btn-large glow-effect">
                  <Send size={18} /> Confirm Free Demo Slot
                </button>
                
                <p class="form-footer-note">
                  <Lock size={12} style={{ display: 'inline', marginRight: '4px' }} /> We respect your privacy. No spam call policy.
                </p>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

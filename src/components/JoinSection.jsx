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
                Don&apos;t just take our word for it. Attend a <strong>1-Hour Live Interactive Cambridge IGCSE Trial Class</strong> with Anu Mam. No credit card required.
              </p>

              <div class="demo-highlights">
                <div class="demo-hl-item">
                  <CheckCircle2 size={18} />
                  <span>Interactive 1-on-1 interaction with Anu Mam</span>
                </div>
                <div class="demo-hl-item">
                  <CheckCircle2 size={18} />
                  <span>Free Cambridge IGCSE Formula Master Cheat-Sheet</span>
                </div>
                <div class="demo-hl-item">
                  <CheckCircle2 size={18} />
                  <span>Personal IGCSE Academic Audit & A* Score Roadmap</span>
                </div>
              </div>

              <div class="live-counter-box">
                <Flame class="counter-icon" size={28} />
                <div>
                  <span class="counter-title">Limited Slots Available for Next IGCSE Demo Batch</span>
                  <span class="counter-subtitle">Only <strong>4 Free Demo Seats Remaining</strong> for this week!</span>
                </div>
              </div>
            </div>

            <div class="join-form-wrapper">
              <form class="demo-form" onSubmit={handleSubmit}>
                <h3 class="form-title">Register for Free IGCSE Demo Class</h3>
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
                      placeholder="+44 7700 900077 or +971 50 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div class="form-row grid grid-2">
                  <div class="form-group">
                    <label htmlFor="student-grade">Current Grade / Level *</label>
                    <select 
                      id="student-grade" 
                      required
                      value={formData.grade}
                      onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    >
                      <option value="">Select Grade / Level</option>
                      <option value="IGCSE Grade 9–10 (Extended Math 0580)">IGCSE Grade 9–10 (Extended Math 0580)</option>
                      <option value="IGCSE Grade 9–10 (Additional Math 0606)">IGCSE Grade 9–10 (Additional Math 0606)</option>
                      <option value="Grade 8 (Cambridge Checkpoint)">Grade 8 (Cambridge Checkpoint)</option>
                      <option value="Grade 6–7 (Cambridge Lower Secondary)">Grade 6–7 (Cambridge Lower Secondary)</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label htmlFor="target-subject">Primary IGCSE Program *</label>
                    <select 
                      id="target-subject" 
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="">Select IGCSE Subject</option>
                      <option value="Cambridge IGCSE Extended Math (0580)">Cambridge IGCSE Extended Math (0580)</option>
                      <option value="Cambridge IGCSE Additional Math (0606)">Cambridge IGCSE Additional Math (0606)</option>
                      <option value="Cambridge IGCSE Core Math (0580)">Cambridge IGCSE Core Math (0580)</option>
                      <option value="Edexcel International GCSE Math (4MA1)">Edexcel International GCSE Math (4MA1)</option>
                      <option value="Cambridge Lower Secondary Checkpoint (Grades 6–8)">Cambridge Lower Secondary Checkpoint (Grades 6–8)</option>
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

'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const faqs = [
    {
      q: 'How are live classes conducted? What if a student misses a live class?',
      a: 'Live classes are conducted via our high-speed interactive live portal with two-way voice and chat interaction. If a student misses any live session, full HD recordings with downloadable PDF class notes are uploaded to the student portal within 2 hours of lecture completion.'
    },
    {
      q: 'What is the average batch size in Anu Mam Classes?',
      a: 'Unlike massive online platforms with thousands of students in a single room, Anu Mam keeps batch sizes strictly capped at 25-35 students to ensure every student can ask questions directly and receive personal attention.'
    },
    {
      q: 'How is doubt resolution handled outside of class hours?',
      a: 'Students have access to daily post-class live doubt desks (30 minutes after class) as well as an exclusive student WhatsApp doubt helpline where Anu Mam and subject mentors provide step-by-step text/voice solutions within hours.'
    },
    {
      q: 'Are study materials and mock test series included in the fee?',
      a: 'Yes! The course fee is all-inclusive. It includes printed/PDF chapter notes, formula booklets, daily practice sheets (DPPs), Sunday test series, and full-length board/competitive mock exam papers with performance analysis.'
    },
    {
      q: 'Can parents monitor student attendance and test marks?',
      a: 'Absolutely. Parents receive automated SMS/WhatsApp alerts for attendance and test scores after every weekly Sunday test. Additionally, regular 1-on-1 virtual Parent-Teacher Meetings are scheduled every month.'
    },
    {
      q: 'How do I claim the 30% Early Bird Scholarship discount?',
      a: 'Early Bird scholarships are awarded to students who register for a demo class and enroll within 48 hours of demo completion. You can also take our online diagnostic assessment to earn up to 50% merit scholarship.'
    }
  ];

  return (
    <section class="section faq-section" id="faq">
      <div class="container container-narrow">
        <div class="section-header text-center">
          <span class="section-tag">Got Questions?</span>
          <h2 class="section-title">Frequently Asked <span class="text-gradient">Questions</span></h2>
          <p class="section-subtitle">Everything you need to know about class timings, recorded lectures, and mentorship.</p>
        </div>

        <div class="faq-accordion">
          {faqs.map((faq, idx) => (
            <div key={idx} class={`faq-item ${activeIdx === idx ? 'active' : ''}`}>
              <button 
                class="faq-question"
                onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                <ChevronDown class="faq-icon" size={18} />
              </button>
              {activeIdx === idx && (
                <div class="faq-answer">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

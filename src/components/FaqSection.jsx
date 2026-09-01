'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const faqs = [
    {
      q: 'How are live classes conducted? What if a student misses an IGCSE live session?',
      a: 'Live classes are conducted via our high-speed interactive live portal with two-way voice, drawing canvas and chat. If a student misses any live session, full HD recordings with downloadable Cambridge IGCSE PDF class notes are uploaded within 2 hours of lecture completion.'
    },
    {
      q: 'What is the average batch size in Anu Mam\'s IGCSE Classes?',
      a: 'Unlike massive impersonal online platforms, Anu Mam keeps IGCSE batch sizes strictly capped at 15–25 students to ensure every student can ask questions directly on difficult past paper questions and receive personal attention.'
    },
    {
      q: 'How is Cambridge past paper doubt resolution handled outside class hours?',
      a: 'Students have access to daily post-class live doubt desks (30 minutes after class) as well as an exclusive Cambridge IGCSE WhatsApp helpline where Anu Mam provides step-by-step text/voice solutions and video walkthroughs.'
    },
    {
      q: 'Are Cambridge topical past paper booklets and mock tests included in the fee?',
      a: 'Yes! The course fee is all-inclusive. It includes Cambridge formula booklets, topical past paper workbooks (0580 & 0606), weekend timed test series, and full-length IGCSE mock exam papers with examiner mark-scheme grading.'
    },
    {
      q: 'Can parents monitor IGCSE homework and weekly mock test marks?',
      a: 'Absolutely. Parents receive automated WhatsApp alerts for attendance and test scores after every weekly test. Additionally, regular 1-on-1 virtual Parent-Teacher Meetings are held every month to review student progress towards an A*.'
    },
    {
      q: 'Do you cover both Cambridge (CIE) and Pearson Edexcel IGCSE syllabuses?',
      a: 'Yes! We run specialized dedicated batches for Cambridge IGCSE (0580 Extended/Core & 0606 Additional Math) as well as Edexcel International GCSE (4MA1 / 4PM1), tailored to their distinct examination styles.'
    }
  ];

  return (
    <section class="section faq-section" id="faq">
      <div class="container container-narrow">
        <div class="section-header text-center">
          <span class="section-tag">Got Questions?</span>
          <h2 class="section-title">Frequently Asked <span class="text-gradient">Questions</span></h2>
          <p class="section-subtitle">Everything you need to know about Cambridge IGCSE class timings, past paper masterclasses, and mentorship.</p>
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

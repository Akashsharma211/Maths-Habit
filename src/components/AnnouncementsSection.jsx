'use client';

import { ChevronsRight } from 'lucide-react';

export default function AnnouncementsSection({ onOpenDemo }) {
  const announcements = [
    {
      text: 'CBSE Class 9th & 10th Super Foundation Batch—Personal Mentorship by Anu Mam (Batch Date: 29th July 2026)',
      link: 'CBSE Class 9 & 10 Foundation'
    },
    {
      text: 'IGCSE Grade 9 & 10 Extended Mathematics & Science Interactive Batch (Batch Date: 29th July 2026)',
      link: 'IGCSE Grade 9 & 10 Extended Math'
    },
    {
      text: 'Class 6th to 8th STEM, Reasoning & Problem Solving Batch Admissions Open',
      link: 'Class 6th to 8th STEM'
    }
  ];

  return (
    <section className="announcements-bg-section">
      <div className="container">
        <div className="announcements-grid">
          
          <div className="announcements-left">
            <h2>
              <span className="highlight-teal">Our Latest</span><br />
              Announcements
            </h2>
            <p>
              Stay updated with Anu Mam&apos;s upcoming CBSE & IGCSE batches (Classes 6th to 10th), personal doubt sessions, and interactive problem-solving workshops.
            </p>
          </div>

          <div className="announcement-box-card">
            <div className="announcement-box-header">
              New Batches and Announcement
            </div>
            <div className="announcement-box-body">
              {announcements.map((item, idx) => (
                <a 
                  key={idx} 
                  href="#courses" 
                  className="announcement-item-link"
                  onClick={(e) => { e.preventDefault(); onOpenDemo(item.link); }}
                >
                  <ChevronsRight className="announcement-arrow" size={20} />
                  <span>{item.text}</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

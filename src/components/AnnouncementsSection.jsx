'use client';

import { ChevronsRight } from 'lucide-react';

export default function AnnouncementsSection({ onOpenDemo }) {
  const announcements = [
    {
      text: 'Cambridge IGCSE Extended Math (0580) Live Batch — Personal Mentorship by Anu Mam (Batch Date: 29th July 2026)',
      link: 'IGCSE Extended Math (0580)'
    },
    {
      text: 'IGCSE Additional Mathematics (0606) Intensive Calculus & Trig Batch (Batch Date: 29th July 2026)',
      link: 'IGCSE Additional Math (0606)'
    },
    {
      text: 'Cambridge Lower Secondary Checkpoint (Grades 6–8) Foundation Admissions Open',
      link: 'Cambridge Checkpoint (Grades 6–8)'
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
              Stay updated with Anu Mam&apos;s upcoming Cambridge IGCSE (0580 & 0606) live batches (Grades 6th to 10th), topical past paper sessions, and Cambridge examiner mark-scheme workshops.
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

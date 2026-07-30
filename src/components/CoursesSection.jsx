'use client';

import { useState } from 'react';

export default function CoursesSection({ onOpenDemo }) {
  const [activeCategory, setActiveCategory] = useState('CBSE');

  const courseData = {
    CBSE: [
      {
        id: 1,
        title: 'CBSE Class 9 & 10 Foundation',
        batchType: 'Batch',
        forClass: 'For Class 9th & 10th CBSE',
        batchDate: '29th July 2026',
        isAdmissionOpen: false,
        targetYear: 'Target Year - 2027',
        imgSrc: '/assets/student_boy.png'
      },
      {
        id: 2,
        title: 'CBSE Class 10 Board 100/100',
        batchType: 'Batch',
        forClass: 'For Class 10th CBSE Board',
        batchDate: null,
        isAdmissionOpen: true,
        targetYear: 'Target Year - 2027',
        imgSrc: '/assets/student_girl.png'
      },
      {
        id: 3,
        title: 'CBSE Class 6th - 8th STEM & Math',
        batchType: 'Batch',
        forClass: 'For Class 6th, 7th & 8th CBSE',
        batchDate: '5th August 2026',
        isAdmissionOpen: false,
        targetYear: 'Target Year - 2028',
        imgSrc: '/assets/student_boy.png'
      }
    ],
    IGCSE: [
      {
        id: 4,
        title: 'IGCSE Grade 9 & 10 Extended Math',
        batchType: 'Batch',
        forClass: 'For Cambridge IGCSE Grade 9 & 10',
        batchDate: '29th July 2026',
        isAdmissionOpen: false,
        targetYear: 'Target Year - 2027',
        imgSrc: '/assets/student_girl.png'
      },
      {
        id: 5,
        title: 'IGCSE Grade 6-8 Lower Secondary',
        batchType: 'Batch',
        forClass: 'For Cambridge Lower Secondary (Grades 6-8)',
        batchDate: null,
        isAdmissionOpen: true,
        targetYear: 'Target Year - 2028',
        imgSrc: '/assets/student_boy.png'
      },
      {
        id: 6,
        title: 'IGCSE Checkpoint & Physics',
        batchType: 'Batch',
        forClass: 'For Grade 8 Checkpoint & Grade 9',
        batchDate: '15th August 2026',
        isAdmissionOpen: false,
        targetYear: 'Target Year - 2027',
        imgSrc: '/assets/student_girl.png'
      }
    ],
    Foundation: [
      {
        id: 7,
        title: 'Class 6 & 7 Reasoning & Math',
        batchType: 'Batch',
        forClass: 'For Class 6th & 7th (CBSE / IGCSE)',
        batchDate: '5th August 2026',
        isAdmissionOpen: false,
        targetYear: 'Target Year - 2029',
        imgSrc: '/assets/student_boy.png'
      },
      {
        id: 8,
        title: 'Class 8th Olympiad & STEM',
        batchType: 'Batch',
        forClass: 'For Class 8th (CBSE / IGCSE)',
        batchDate: null,
        isAdmissionOpen: true,
        targetYear: 'Target Year - 2028',
        imgSrc: '/assets/student_girl.png'
      },
      {
        id: 9,
        title: 'Class 9 & 10 Problem Solving',
        batchType: 'Batch',
        forClass: 'For Class 9th & 10th Advanced',
        batchDate: '10th August 2026',
        isAdmissionOpen: false,
        targetYear: 'Target Year - 2027',
        imgSrc: '/assets/student_boy.png'
      }
    ]
  };

  const currentCourses = courseData[activeCategory] || courseData['CBSE'];

  return (
    <section className="section courses-section-motion" id="courses">
      <div className="container">
        
        {/* Segmented Filter Tabs */}
        <div className="segmented-tabs-container">
          <div className="segmented-tabs">
            <button 
              className={`seg-tab ${activeCategory === 'CBSE' ? 'active' : ''}`}
              onClick={() => setActiveCategory('CBSE')}
            >
              CBSE Board (6th-10th)
            </button>
            <button 
              className={`seg-tab ${activeCategory === 'IGCSE' ? 'active' : ''}`}
              onClick={() => setActiveCategory('IGCSE')}
            >
              IGCSE Board (Grades 6-10)
            </button>
            <button 
              className={`seg-tab ${activeCategory === 'Foundation' ? 'active' : ''}`}
              onClick={() => setActiveCategory('Foundation')}
            >
              Olympiad & Reasoning
            </button>
          </div>
        </div>

        {/* 3 Course Cards Grid */}
        <div className="motion-courses-grid">
          {currentCourses.map(course => (
            <div key={course.id} className="motion-course-card">
              <div className="card-inner-content">
                <div>
                  <h3 className="card-title-main">{course.title}</h3>
                  <div className="card-batch-sub">{course.batchType}</div>
                  <div className="card-target-class">{course.forClass}</div>

                  {course.isAdmissionOpen ? (
                    <div className="batch-date-box" style={{ color: '#F59E0B', borderColor: '#F59E0B' }}>
                      Admission Open
                    </div>
                  ) : (
                    <div>
                      <div style={{ fontSize: '0.85rem', color: '#4B5563', fontWeight: 600 }}>Batch Date</div>
                      <div className="batch-date-box">{course.batchDate}</div>
                    </div>
                  )}

                  <div className="target-year">{course.targetYear}</div>
                </div>

                <button 
                  className="btn-explore-red"
                  onClick={() => onOpenDemo(`${course.title} (${course.forClass})`)}
                >
                  Explore Course
                </button>
              </div>

              <img 
                src={course.imgSrc} 
                alt="Student Cutout" 
                className="card-student-cutout"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

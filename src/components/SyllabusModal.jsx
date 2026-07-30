'use client';

import { X, BookOpen, Bookmark } from 'lucide-react';

export default function SyllabusModal({ isOpen, onClose, courseTitle, onOpenDemo }) {
  if (!isOpen) return null;

  const syllabusData = {
    'Class 9th & 10th Super Foundation': [
      { unit: 'Physics (Units 1-4)', desc: 'Motion, Force, Gravitation, Work & Energy, Light Reflection & Refraction' },
      { unit: 'Chemistry (Units 1-3)', desc: 'Matter in Our Surroundings, Chemical Reactions & Equations, Acids & Bases' },
      { unit: 'Mathematics (Units 1-5)', desc: 'Real Numbers, Polynomials, Linear Equations, Triangles, Trigonometry' },
      { unit: 'Olympiad Extra', desc: 'Advanced Problem Solving Techniques & Speed Mental Drills' }
    ],
    'Class 11 & 12 Physics Mastermind': [
      { unit: 'Class 11 Physics Core', desc: 'Vectors, Kinematics, Laws of Motion, Rotational Dynamics, Thermodynamics' },
      { unit: 'Class 12 Physics Core', desc: 'Electrostatics, Current Electricity, Electromagnetic Induction, Wave Optics, Modern Physics' },
      { unit: 'Lab & Derivation Drills', desc: 'Complete Board Practical Viva & Step-by-Step Derivation Masterclasses' }
    ],
    'NEET/JEE Target Batch': [
      { unit: 'Mechanics & Electrodynamics', desc: 'High-Yield Numerical Drills & PYQ Shortcuts (Last 15 Years Exam Papers)' },
      { unit: 'Physical & Organic Chemistry', desc: 'Mole Concept, Electrochemistry, Reaction Mechanisms, Periodic Trends' },
      { unit: 'Speed Test CBT Simulations', desc: 'Weekly 3-Hour Computer Based Tests with Instant All-India Rank Analysis' }
    ]
  };

  const units = syllabusData[courseTitle] || [
    { unit: 'Unit 1: Core Fundamentals', desc: 'Comprehensive coverage of core concepts, theory, and NCERT exemplars.' },
    { unit: 'Unit 2: Problem Solving Drills', desc: 'Targeted PYQs, formula cheat-sheets, and sample paper problem practice.' },
    { unit: 'Unit 3: Exam Strategy Workshops', desc: 'Time-management, diagram drawing techniques, and mock test evaluations.' }
  ];

  return (
    <div class="modal-overlay">
      <div class="modal-card modal-large">
        <button class="modal-close" onClick={onClose}><X size={20} /></button>
        <div class="modal-header">
          <BookOpen class="modal-icon" size={36} />
          <h3>{courseTitle} - Syllabus Breakdown</h3>
          <p>Curriculum structure & chapter progression planned by Anu Mam.</p>
        </div>
        <div class="syllabus-content">
          {units.map((u, i) => (
            <div key={i} class="syllabus-unit">
              <h5><Bookmark size={14} style={{ display: 'inline', marginRight: '6px' }} /> {u.unit}</h5>
              <p>{u.desc}</p>
            </div>
          ))}
        </div>
        <div class="modal-footer" style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
          <button class="btn btn-outline" onClick={onClose}>Close</button>
          <button class="btn btn-primary" onClick={() => { onClose(); onOpenDemo(courseTitle); }}>
            Book Demo For This Course
          </button>
        </div>
      </div>
    </div>
  );
}

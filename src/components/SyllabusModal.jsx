'use client';

import { X, BookOpen, Bookmark } from 'lucide-react';

export default function SyllabusModal({ isOpen, onClose, courseTitle, onOpenDemo }) {
  if (!isOpen) return null;

  const syllabusData = {
    'IGCSE Extended Mathematics (0580 / 0980)': [
      { unit: 'Number & Algebra', desc: 'Indices, Standard Form, Algebraic Fractions, Linear/Quadratic Equations, Sequences, Inequalities' },
      { unit: 'Coordinate Geometry & Functions', desc: 'Gradients, Midpoints, Linear & Quadratic Functions, Composite & Inverse Functions, Curve Sketching' },
      { unit: 'Geometry, Trigonometry & Vectors', desc: 'Circle Theorems, Bearings, 2D/3D Trigonometry, Sine & Cosine Rules, Vector Geometry' },
      { unit: 'Mensuration, Statistics & Probability', desc: 'Surface Areas & Volumes, Arc Length/Sector Area, Cumulative Frequency, Histograms, Conditional Probability' },
      { unit: 'Past Paper Mastery (Paper 2 & Paper 4)', desc: '10-Year Cambridge past paper breakdown with official examiner marking scheme analysis' }
    ],
    'Cambridge IGCSE Additional Math (0606)': [
      { unit: 'Functions, Quadratics & Logarithms', desc: 'Simultaneous Equations, Logarithmic and Exponential Functions, Modulus Functions' },
      { unit: 'Circular Measure & Trigonometry', desc: 'Radian Measures, Arc Length & Sector Area, Trigonometric Identities & Equations' },
      { unit: 'Permutations, Combinations & Series', desc: 'Binomial Theorem, Arithmetic & Geometric Progressions, Combinatorics' },
      { unit: 'Calculus: Differentiation & Integration', desc: 'Derivatives of Trig/Exp/Log, Product/Quotient/Chain Rule, Tangents & Normals, Definite & Indefinite Integrals, Kinematics' }
    ],
    'Cambridge Lower Secondary Checkpoint (Grade 8)': [
      { unit: 'Number & Calculation', desc: 'Integers, Powers & Roots, Fractions, Decimals, Percentages, Ratio and Proportion' },
      { unit: 'Algebra & Graphs', desc: 'Constructing Expressions, Solving Equations, Linear Graphs, Sequences and Formulae' },
      { unit: 'Geometry & Measure', desc: 'Angles, 2D/3D Shapes, Pythagoras Theorem, Area, Perimeter and Volume' },
      { unit: 'Statistics, Probability & Checkpoint Drills', desc: 'Averages, Probability Trees, Venn Diagrams & Stage 9 Progression Test Papers' }
    ]
  };

  const units = syllabusData[courseTitle] || [
    { unit: 'Unit 1: Cambridge Core Fundamentals', desc: 'Comprehensive coverage of IGCSE syllabus concepts, theorems, and intuitive graphical methods.' },
    { unit: 'Unit 2: 3-Tier Topical Practice Sheets', desc: 'Targeted Cambridge past-paper questions categorized by difficulty and question type.' },
    { unit: 'Unit 3: Examiner Mark Scheme Drills', desc: 'Time-management strategies, structured multi-step working, and zero-mark-loss exam layouts.' }
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

'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import WhoIsAnu from '../../components/WhoIsAnu';
import AssistBanner from '../../components/AssistBanner';
import Footer from '../../components/Footer';
import DemoModal from '../../components/DemoModal';
import FloatingWidgets from '../../components/FloatingWidgets';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function MeetAnuPage() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('Free Live Demo');
  const [toastMessage, setToastMessage] = useState(null);

  const handleOpenDemo = (courseName = 'Free Live Demo') => {
    setSelectedCourse(courseName);
    setDemoModalOpen(true);
  };

  const handleRoleChange = (role, gradeDetail) => {
    if (role === 'parent') {
      triggerToast('👪 Parent Portal Mode Active!');
    } else {
      triggerToast(`👤 Student Mode Active (${gradeDetail || 'Class 9-10'})`);
    }
  };

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <main style={{ backgroundColor: '#FFFFFF', minHeight: '100vh' }}>
      <Header onRoleChange={handleRoleChange} />
      
      {/* Back to Home Breadcrumb Bar */}
      <div style={{ background: '#FAF9F6', padding: '1rem 0', borderBottom: '1px solid #E6F7F5' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Link href="/" style={{ color: '#0F766E', fontWeight: 700, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <span style={{ color: '#9CA3AF' }}>/</span>
          <span style={{ color: '#1F2937', fontWeight: 600, fontSize: '0.9rem' }}>Meet Anu</span>
        </div>
      </div>

      {/* Meet Anu Dedicated Content */}
      <WhoIsAnu onOpenDemo={handleOpenDemo} />
      <AssistBanner onOpenDemo={handleOpenDemo} />
      
      <Footer />

      <FloatingWidgets />

      <DemoModal 
        isOpen={demoModalOpen} 
        onClose={() => setDemoModalOpen(false)} 
        courseTitle={selectedCourse}
        onToast={triggerToast}
      />

      {toastMessage && (
        <div className="toast-container">
          <div className="toast">
            <CheckCircle2 size={20} color="#14B8A6" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </main>
  );
}

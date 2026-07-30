'use client';

import { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhoIsAnu from '../components/WhoIsAnu';
import CoursesSection from '../components/CoursesSection';
import AnnouncementsSection from '../components/AnnouncementsSection';
import WhyStandsOutSection from '../components/WhyStandsOutSection';
import AssistBanner from '../components/AssistBanner';
import Footer from '../components/Footer';
import DemoModal from '../components/DemoModal';
import FloatingWidgets from '../components/FloatingWidgets';
import { CheckCircle2 } from 'lucide-react';

export default function Home() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('Free Live Demo');
  const [toastMessage, setToastMessage] = useState(null);

  const handleOpenDemo = (courseName = 'Free Live Demo') => {
    setSelectedCourse(courseName);
    setDemoModalOpen(true);
  };

  const handleRoleChange = (role, gradeDetail) => {
    if (role === 'parent') {
      triggerToast('👪 Parent Portal Mode Active! Monitoring Progress Reports.');
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
      <HeroSection onOpenDemo={handleOpenDemo} />
      <WhoIsAnu onOpenDemo={handleOpenDemo} />
      <CoursesSection onOpenDemo={handleOpenDemo} />
      <AnnouncementsSection onOpenDemo={handleOpenDemo} />
      <WhyStandsOutSection />
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

'use client';

import { ChevronUp, MessageSquare } from 'lucide-react';

export default function FloatingWidgets() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="floating-widgets">
      <button className="btn-scroll-top" onClick={scrollToTop} title="Scroll to top">
        <ChevronUp size={24} />
      </button>

      <a 
        href="https://wa.me/919876543210?text=Hi%20Anu%20Mam,%20I%20want%20to%20know%20more%20about%20your%20classes!"
        target="_blank" 
        rel="noopener noreferrer"
        className="btn-whatsapp-bubble" 
        title="Admission Support on WhatsApp"
      >
        <MessageSquare size={26} />
      </a>
    </div>
  );
}

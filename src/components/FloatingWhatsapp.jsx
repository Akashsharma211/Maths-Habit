'use client';

import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsapp() {
  return (
    <a 
      href="https://wa.me/18005556284?text=Hi%20Anu%20Mam,%20I%20want%20to%20know%20more%20about%20your%20IGCSE%20Mathematics%20classes!" 
      class="floating-whatsapp" 
      target="_blank" 
      rel="noopener noreferrer" 
      title="Chat on WhatsApp"
    >
      <MessageSquare size={20} />
      <span>Chat with Anu Mam</span>
    </a>
  );
}

'use client';

import { useState } from 'react';
import { X, Ticket } from 'lucide-react';

export default function DemoModal({ isOpen, onClose, courseTitle, onToast }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState('IGCSE Grade 9–10 (Cambridge Extended)');
  const [board, setBoard] = useState('Cambridge IGCSE Extended (0580)');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onToast(`✅ Demo Seat Reserved for ${name}! (${grade} - ${board}). Details sent to ${phone}.`);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <button className="modal-close" onClick={onClose}><X size={20} /></button>
        <div className="modal-header">
          <Ticket className="modal-icon" size={36} />
          <h3>Demo: {courseTitle || 'Free Live IGCSE Demo Class'}</h3>
          <p>Reserve your seat for Cambridge & Edexcel IGCSE (Grades 6–10) live interactive batch.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Student Full Name</label>
            <input 
              type="text" 
              required 
              placeholder="Enter student's full name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Contact Phone Number / WhatsApp</label>
            <input 
              type="tel" 
              required 
              placeholder="+44 7700 900077 or +971 50 123 4567"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-row grid grid-2">
            <div className="form-group">
              <label>Current Grade / Level</label>
              <select value={grade} onChange={(e) => setGrade(e.target.value)} required>
                <option value="IGCSE Grade 9–10 (Cambridge Extended)">IGCSE Grade 9–10 (Cambridge Extended)</option>
                <option value="IGCSE Grade 9–10 (Additional Math 0606)">IGCSE Grade 9–10 (Additional Math 0606)</option>
                <option value="Grade 8 (Cambridge Checkpoint)">Grade 8 (Cambridge Checkpoint)</option>
                <option value="Grade 6–7 (Cambridge Lower Secondary)">Grade 6–7 (Cambridge Lower Secondary)</option>
              </select>
            </div>
            <div className="form-group">
              <label>IGCSE Program / Board</label>
              <select value={board} onChange={(e) => setBoard(e.target.value)} required>
                <option value="Cambridge IGCSE Extended (0580)">Cambridge IGCSE Extended (0580)</option>
                <option value="Cambridge IGCSE Additional Math (0606)">Cambridge IGCSE Additional Math (0606)</option>
                <option value="Cambridge IGCSE Core (0580)">Cambridge IGCSE Core (0580)</option>
                <option value="Edexcel International GCSE (4MA1 / 4PM1)">Edexcel International GCSE (4MA1 / 4PM1)</option>
                <option value="Cambridge Lower Secondary Checkpoint">Cambridge Lower Secondary Checkpoint</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block glow-effect">
            Confirm Demo Registration
          </button>
        </form>
      </div>
    </div>
  );
}

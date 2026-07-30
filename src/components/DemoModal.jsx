'use client';

import { useState } from 'react';
import { X, Ticket } from 'lucide-react';

export default function DemoModal({ isOpen, onClose, courseTitle, onToast }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [grade, setGrade] = useState('Class 9-10 (CBSE)');
  const [board, setBoard] = useState('CBSE');

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
          <h3>Demo: {courseTitle || 'Free Live Demo Class'}</h3>
          <p>Reserve your seat for Class 6th to 10th (CBSE & IGCSE) live interactive batch.</p>
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
            <label>WhatsApp Phone Number</label>
            <input 
              type="tel" 
              required 
              placeholder="+91 98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-row grid grid-2">
            <div className="form-group">
              <label>Current Class</label>
              <select value={grade} onChange={(e) => setGrade(e.target.value)} required>
                <option value="Class 6th">Class 6th</option>
                <option value="Class 7th">Class 7th</option>
                <option value="Class 8th">Class 8th</option>
                <option value="Class 9th">Class 9th</option>
                <option value="Class 10th">Class 10th</option>
              </select>
            </div>
            <div className="form-group">
              <label>Education Board</label>
              <select value={board} onChange={(e) => setBoard(e.target.value)} required>
                <option value="CBSE Board">CBSE Board</option>
                <option value="IGCSE Cambridge">IGCSE Cambridge</option>
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

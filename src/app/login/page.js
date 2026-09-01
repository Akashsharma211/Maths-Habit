'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  User, 
  Users, 
  Lock, 
  Mail, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ArrowRight,
  BookOpen,
  Phone,
  Shield,
  GraduationCap
} from 'lucide-react';

export default function LoginPage() {
  const [role, setRole] = useState('student'); // 'student' | 'parent'
  const [isRegister, setIsRegister] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    grade: 'Cambridge IGCSE Extended Math (0580)',
    studentName: ''
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null); // { type: 'success' | 'error', text: '' }
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // Check URL parameters for role default
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlRole = urlParams.get('role');
      if (urlRole === 'parent' || urlRole === 'student') {
        setRole(urlRole);
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    const endpoint = isRegister ? '/api/auth/register' : '/api/auth/login';
    const payload = isRegister 
      ? { ...formData, role }
      : { email: formData.email, password: formData.password, role };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setFeedback({ type: 'success', text: data.message });
        setLoggedInUser(data.user);
      } else {
        setFeedback({ type: 'error', text: data.message || 'Authentication failed. Please check your details.' });
      }
    } catch (err) {
      setFeedback({ 
        type: 'error', 
        text: 'Could not connect to server/database. Please verify your connection.' 
      });
    } finally {
      setLoading(false);
    }
  };

  const isParent = role === 'parent';

  return (
    <main className="login-page-wrapper">
      
      {/* Background Ambient Glow Gradients */}
      <div className="login-bg-glow glow-1" />
      <div className="login-bg-glow glow-2" />

      {/* Top Floating Header */}
      <header className="login-header-bar">
        <div className="container login-header-inner">
          <Link href="/" className="login-back-link">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          <Link href="/" className="login-brand">
            <div className="login-logo-circle">
              <img src="/assets/bike_logo.png" alt="Maths Habit Logo" className="login-bike-img" />
            </div>
            <span className="login-brand-title">
              MATHS <span className={isParent ? 'text-amber-gold' : 'highlight-teal'}>HABIT</span>
            </span>
          </Link>

          <Link href="/contact" className="login-help-link">
            Need Help?
          </Link>
        </div>
      </header>

      <div className="container login-main-container">
        
        {loggedInUser ? (
          /* Logged In Interactive Dashboard Preview */
          <div className="login-dashboard-card">
            <div className="dashboard-header-row">
              <div className="dashboard-avatar">
                {isParent ? <Users size={32} color="#D97706" /> : <GraduationCap size={32} color="#14B8A6" />}
              </div>
              <div>
                <h2>Welcome, {loggedInUser.name}!</h2>
                <span className={`portal-role-badge ${isParent ? 'badge-parent' : 'badge-student'}`}>
                  {isParent ? 'Parent Portal (MongoDB Verified)' : 'Student Portal (MongoDB Verified)'}
                </span>
              </div>
            </div>

            <div className="dashboard-metrics-grid">
              <div className="dash-metric-box">
                <span className="metric-title">Enrolled Curriculum</span>
                <strong className="metric-val">{loggedInUser.grade || 'IGCSE Extended Math (0580)'}</strong>
              </div>
              <div className="dash-metric-box">
                <span className="metric-title">Next Live Class</span>
                <strong className="metric-val">Wednesday • 5:00 PM (With Anu Mam)</strong>
              </div>
              <div className="dash-metric-box">
                <span className="metric-title">Upcoming Timed Mock Test</span>
                <strong className="metric-val">Cambridge Paper 4 Sprint (Sunday)</strong>
              </div>
              <div className="dash-metric-box">
                <span className="metric-title">Past Paper Mastery</span>
                <strong className="metric-val text-teal">94% Accuracy Rate</strong>
              </div>
            </div>

            <div className="dashboard-action-row">
              <Link href="/" className="btn-dash-home">Return to Homepage</Link>
              <button 
                className="btn-dash-logout"
                onClick={() => {
                  setLoggedInUser(null);
                  setFeedback(null);
                }}
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          /* Login / Register Glass Card */
          <div className="login-card-wrapper">
            
            {/* Unified Role Capsule Switcher */}
            <div className="login-role-selector">
              <button 
                type="button"
                className={`login-role-btn ${role === 'student' ? 'role-active-student' : ''}`}
                onClick={() => { setRole('student'); setFeedback(null); }}
              >
                <User size={16} />
                <span>Student Portal</span>
              </button>

              <button 
                type="button"
                className={`login-role-btn ${role === 'parent' ? 'role-active-parent' : ''}`}
                onClick={() => { setRole('parent'); setFeedback(null); }}
              >
                <Users size={16} />
                <span>Parent Portal</span>
              </button>
            </div>

            <div className="login-glass-card">
              
              <div className="login-card-head">
                <div className={`portal-icon-circle ${isParent ? 'circle-parent' : 'circle-student'}`}>
                  {isParent ? <Users size={24} /> : <GraduationCap size={24} />}
                </div>
                <h3>{isRegister ? `Create ${isParent ? 'Parent' : 'Student'} Account` : `${isParent ? 'Parent' : 'Student'} Portal Log In`}</h3>
                <p>
                  {isParent 
                    ? 'Monitor your child’s weekly Cambridge IGCSE marks, homework, and attendance.' 
                    : 'Access live interactive classes, HD lecture recordings, and past paper worksheets.'}
                </p>
              </div>

              {/* Feedback Banner */}
              {feedback && (
                <div className={`auth-feedback-banner ${feedback.type === 'success' ? 'feedback-success' : 'feedback-error'}`}>
                  {feedback.type === 'success' ? <CheckCircle2 size={18} /> : <AlertCircle size={18} />}
                  <span>{feedback.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="login-form">
                
                {isRegister && (
                  <div className="auth-field">
                    <label>{isParent ? 'Parent Full Name *' : 'Student Full Name *'}</label>
                    <div className="auth-input-wrap">
                      <User size={16} className="auth-icon" />
                      <input 
                        type="text" 
                        required 
                        placeholder={isParent ? 'e.g. Robert Henderson' : 'e.g. Alex Henderson'}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                  </div>
                )}

                <div className="auth-field">
                  <label>Email Address *</label>
                  <div className="auth-input-wrap">
                    <Mail size={16} className="auth-icon" />
                    <input 
                      type="email" 
                      required 
                      placeholder="e.g. student@mathshabit.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="auth-field">
                  <label>Password *</label>
                  <div className="auth-input-wrap">
                    <Lock size={16} className="auth-icon" />
                    <input 
                      type="password" 
                      required 
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                  </div>
                </div>

                {isRegister && (
                  <>
                    <div className="auth-field">
                      <label>WhatsApp / Mobile Number *</label>
                      <div className="auth-input-wrap">
                        <Phone size={16} className="auth-icon" />
                        <input 
                          type="tel" 
                          required 
                          placeholder="+44 7700 900077"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="auth-field">
                      <label>{isParent ? "Child's IGCSE Program" : 'Target IGCSE Level'}</label>
                      <div className="auth-input-wrap">
                        <BookOpen size={16} className="auth-icon" />
                        <select 
                          value={formData.grade}
                          onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        >
                          <option value="Cambridge IGCSE Extended Math (0580)">Cambridge IGCSE Extended Math (0580)</option>
                          <option value="Cambridge IGCSE Additional Math (0606)">Cambridge IGCSE Additional Math (0606)</option>
                          <option value="Cambridge IGCSE Core Math (0580)">Cambridge IGCSE Core Math (0580)</option>
                          <option value="Edexcel International GCSE (4MA1)">Edexcel International GCSE (4MA1)</option>
                          <option value="Cambridge Lower Secondary Checkpoint">Cambridge Lower Secondary Checkpoint</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                <button 
                  type="submit" 
                  disabled={loading}
                  className={`auth-submit-btn ${isParent ? 'btn-parent-theme' : 'btn-student-theme'}`}
                >
                  {loading ? (
                    <span>Connecting to Database...</span>
                  ) : (
                    <>
                      <span>{isRegister ? 'Create Account' : `Log in to ${isParent ? 'Parent' : 'Student'} Portal`}</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>

              <div className="auth-card-footer">
                <p>
                  {isRegister ? 'Already have an account?' : "Don't have an account yet?"}{' '}
                  <button 
                    type="button" 
                    className="auth-switch-mode-btn"
                    onClick={() => {
                      setIsRegister(!isRegister);
                      setFeedback(null);
                    }}
                  >
                    {isRegister ? 'Log in here' : 'Register with MongoDB'}
                  </button>
                </p>

                <div className="auth-security-badge">
                  <Shield size={13} />
                  <span>Secured MongoDB Cloud Authentication</span>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </main>
  );
}

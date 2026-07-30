'use client';

export default function AssistBanner({ onOpenDemo }) {
  return (
    <section className="assist-banner-container" id="contact">
      <div className="container">
        
        <div className="assist-red-card">
          <div className="assist-left-content">
            <h2 className="assist-title">HAPPY TO ASSIST YOU!</h2>
            <p className="assist-desc">
              Need guidance choosing the right Maths Habit batch for your target goal? Our expert academic counsellor Anu Mam is here to help!
            </p>

            <button className="btn-ask-experts" onClick={() => onOpenDemo('Expert Academic Counselling')}>
              Ask To Experts
            </button>
          </div>

          <div className="assist-counsellor-arch">
            <img 
              src="/assets/anu_teacher.png" 
              alt="Academic Counsellor Anu Mam" 
              className="counsellor-img"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

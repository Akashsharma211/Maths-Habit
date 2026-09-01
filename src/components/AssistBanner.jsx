import Link from 'next/link';

export default function AssistBanner({ onOpenDemo }) {
  return (
    <section className="assist-banner-container" id="contact">
      <div className="container">
        
        <div className="assist-red-card">
          <div className="assist-left-content">
            <h2 className="assist-title">HAPPY TO ASSIST YOU!</h2>
            <p className="assist-desc">
              Need guidance choosing between IGCSE Core vs Extended (0580) or Additional Mathematics (0606)? Our expert Cambridge academic mentor Anu Mam is here to help!
            </p>

            <Link href="/contact" className="btn-ask-experts" style={{ display: 'inline-block', textAlign: 'center', textDecoration: 'none' }}>
              Ask To Experts
            </Link>
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

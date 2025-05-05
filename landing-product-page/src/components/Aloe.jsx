import '../styles/aloe.css';
import { useEffect, useRef, useState } from 'react';

export default function Aloe() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="aloe-section" ref={sectionRef}>
      <h2 className="aloe-heading">
        Ochrona i pielęgnacja. Poznaj moc<br />naturalnych składników.
      </h2>

      <div className={`aloe-box ${visible ? 'fade-in-up delay-600' : 'opacity-0'}`}>
        <img src="/images/aloe@2x.png" alt="Tło z aloesem" className="aloe-bg" />

        <div className="aloe-left">
          <div className="aloe-bar" />
          <div className="aloe-percent">
            <span className="aloe-to">do</span>
            <span className="aloe-big">20%</span>
            <p className="aloe-sub">STĘŻENIA CZYSTEGO,<br />NIEPASTERYZOWANEGO<br />ALOE VERA.</p>
          </div>
        </div>

        <div className="aloe-right">
          <h3 className="aloe-title">WŁAŚCIWOŚCI<br />OCHRONNE I KOJĄCE<br />ALOESU</h3>
          <p className="aloe-desc">
            Aloes Equilibra to surowiec ekstrahowany na zimno, <strong>w 100% czysty</strong> i nienaruszony.
            Dzięki specjalnej metodzie jego otrzymywania zachowuje swoje odżywcze właściwości:
            nawilża, łagodzi i odświeża skórę, zapewniając jej wzmożoną ochronę.
          </p>
        </div>
      </div>
    </section>
  );
}

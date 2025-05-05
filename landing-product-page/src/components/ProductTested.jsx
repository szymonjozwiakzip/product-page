import { useEffect, useRef, useState } from 'react';
import '../styles/producttested.css';

export default function Tested() {
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
      { threshold: 0.3 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="tested" className="tested-section">
      <div className={`tested-box ${visible ? 'fade-in-up delay-200' : 'opacity-0'}`}>
        <img src="/images/Group2@2x.png" alt="Produkt" className="tested-image" />

        {['01', '02', '03', '04', '05', '06'].map((num) => (
          <div key={num} className={`tested-point point-${num}`}>
            {num}
          </div>
        ))}

        <div className="tested-note">
          <div className="tested-arrow" />
          <h3>TESTOWANY<br />FOTODERMATOLOGICZNIE</h3>
          <p>Produkt został przetestowany pod kątem <br></br>tolerancji alergicznej</p>
        </div>
      </div>
    </section>
  );
}


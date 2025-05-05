import { useEffect, useRef, useState } from 'react';
import '../styles/prosun.css';

export default function Prosun() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="prosun" className="prosun-section">
      <div className="prosun-container">
        <img
          src="/images/prosun.png"
          alt="Kobieta chroniąca się przed słońcem"
          className={`prosun-image ${isVisible ? 'slide-in-left delay-200' : 'opacity-0'}`}
          
        />

        <div className={`prosun-text ${isVisible ? 'slide-in-right delay-400' : 'opacity-0'}`}>
          <div className="prosun-badge">Wysoka ochrona</div>
          <h2 className="prosun-heading">
            Kompleks filtrów<br />PROSUN-UV
          </h2>
          <p className="prosun-paragraph">
            Krem zawiera w sobie specjalne połączenie filtrów fizycznych i chemicznych, które zapewniają maksymalną fotostabilność oraz czas ochrony przed promieniami UVA oraz UVB.
          </p>
        </div>
      </div>
    </section>
  );
}

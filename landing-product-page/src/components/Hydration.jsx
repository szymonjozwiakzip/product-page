import '../styles/hydration.css';
import HydrationIcon from './HydrationIcon';

export default function Hydration() {
  return (
    <section id="hydration" className="hydration-section">
      <div className="hydration-top" data-aos="fade-left" data-aos-delay="400">
        <div className="hydration-image">
          <img src="/images/kobieta-kokos@2x.png" alt="kobieta i kokos" />
          <div className="hydration-overlay">
            <div className="hydration-text-box">
              <HydrationIcon className="hydration-icon" />
              <h2 className="hydration-heading">
                Naturalny kompleks<br />nawilżający dla<br />wrażliwej skóry
              </h2>
              <p className="hydration-desc">
                Doskonałe nawilżenie skóry zapewnia formuła na<br />
                bazie olejku kokosowego i oleju arganowego.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hydration-bottom" data-aos="fade-right" data-aos-delay="400">
        <div className="hydration-item">
          <img src="/images/argan-kokos@2x.png" alt="kokos i argan" />
          <h3>Połączenie olejku kokosowego<br />z olejem arganowym</h3>
          <p>Nawilża i uspokaja skórę.</p>
        </div>
        <div className="hydration-item">
          <img src="/images/aloe-small@2x.png" alt="Aloe Vera" />
          <h3>Aloe Vera (40%)</h3>
          <p>Odświeża i koi skórę, zapewniając zwiększoną<br />ochronę.</p>
        </div>
        <div className="hydration-item">
          <img src="/images/witamina-e@2x.png" alt="Witamina E" />
          <h3>Witamina E</h3>
          <p>Zwalcza wolne rodniki.</p>
        </div>
      </div>
    </section>
  );
}

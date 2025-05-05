import '../styles/productcomposition.css';

export default function ProductComposition() {
  return (
    <section className="composition-section">
      <h2 className="composition-title">Skład produktu</h2>
      <p className="composition-desc">
        Aqua (Water), Aloe Barbadensis Leaf Juice, Octocrylene, Phenylbenzimidazole Sulfonic Acid,
        Butyl Methoxydibenzoylmethane (Avobenzone), Shea Butter Ethyl Esters, Diethylamino Hydroxybenzoyl Hexyl Benzoate,
        Arginine, Ethylhexyl Triazone, Glycerin, Polyglyceryl-3 Cocoate, Polyester-7, Bis-Ethylhexyloxyphenol Methoxyphenyl
        Triazine (Bemotrizinol), Neopentyl Glycol Diheptanoate, Polyglyceryl-6 Stearate, Glyceryl Stearate Citrate,
        Phenoxyethanol, Potassium Cetyl Phosphate, Magnesium Aluminum Silicate, Diisopropyl Sebacate,
        Parfum (Fragrance), Cocos Nucifera Oil (Coconut Oil), Argania Spinosa Kernel Oil, Tocopheryl Acetate,
        Ethylhexylglycerin, Polyglyceryl-6 Behenate, Citric Acid.
      </p>

      <div className="composition-bottom">
        <img src="/images/equilibra@2x.png" alt="equilibra logo" className="composition-logo" />
        <img src="/images/Grupa3@2x.png" alt="aloes" className="composition-aloes" />
        <img src="/images/hand@2x.png" alt="hand" className="composition-hand" />
      </div>
    </section>
  );
}

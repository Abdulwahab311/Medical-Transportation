import { Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Need Emergency Medical Transport?
        </h2>
        <p className="mb-10 text-lg text-white/90">
          Our response team is available 24/7 — one call away.
        </p>

        <a
          href="tel:911"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl
          bg-white text-blue-700 font-bold shadow-2xl
          hover:scale-110 transition-all duration-500"
        >
          <Phone />
          Call Emergency: 911
        </a>
      </div>
    </section>
  );
};

export default CTASection;

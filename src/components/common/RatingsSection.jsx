import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah Khan", text: "Fast response & very professional team." },
  { name: "Ahmed Raza", text: "Best medical transport service I've used." },
  { name: "John Smith", text: "Highly trained staff and clean ambulances." },
];

const RatingsSection = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-6
          bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          Trusted by Thousands
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-16">
          Real reviews from real patients
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-lg
              hover:scale-105 transition-all duration-500"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-blue-600 text-blue-600"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                “{r.text}”
              </p>
              <span className="font-bold text-blue-600 dark:text-blue-400">
                {r.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RatingsSection;

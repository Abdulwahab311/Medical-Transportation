import { Ambulance, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Ambulance className="text-blue-500" />
            <span className="text-xl font-bold text-white">
              Medical Transport
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Professional emergency & non-emergency medical transport services
            nationwide.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>Services</li>
            <li>Booking</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4 text-white">Care in Motion</h4>
          <p className="text-sm flex items-center gap-2">
            <Heart className="text-red-500" size={16} />
            Serving patients since 2010
          </p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-12">
        © {new Date().getFullYear()} Medical Transport. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

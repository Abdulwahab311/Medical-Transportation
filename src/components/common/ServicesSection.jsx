import { Ambulance, Plane, MapPin, Shield, ArrowRight, Heart, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const services = [
  {
    icon: <Ambulance size={28} />,
    title: "Ground Medical Transport",
    desc: "24/7 advanced life support ambulances with trained paramedics.",
    image: "https://images.unsplash.com/photo-1582719366846-7a0ebb53af7b?w=800&q=80",
    color: "from-red-600 to-red-700"
  },
  {
    icon: <Plane size={28} />,
    title: "Air Ambulance",
    desc: "Rapid emergency air transfer for critical patients.",
    image: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?w=800&q=80",
    color: "from-red-600 to-red-700"
  },
  {
    icon: <MapPin size={28} />,
    title: "State-to-State Transfer",
    desc: "Safe long-distance medical transport across regions.",
    image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80",
    color: "from-red-600 to-red-700"
  },
  {
    icon: <Shield size={28} />,
    title: "Insurance Assistance",
    desc: "Complete insurance coordination & documentation support.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    color: "from-red-600 to-red-700"
  },
];

const stats = [
  { icon: <Heart size={24} />, number: "10K+", label: "Patients Served" },
  { icon: <Clock size={24} />, number: "24/7", label: "Available" },
  { icon: <Shield size={24} />, number: "100%", label: "Insured" },
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-red-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 right-40 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-red-700/10 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 bg-red-600/10 backdrop-blur-sm border border-red-600/20 text-red-400 px-6 py-3 rounded-full mb-6 animate-pulse-slow">
              <Heart size={18} className="animate-heartbeat" />
              <span className="text-sm font-semibold">Trusted Medical Care</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent animate-gradient-x">
                Our Medical Services
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Professional medical transportation solutions designed to provide rapid, safe, and compassionate care when you need it most
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {stats.map((stat, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${i * 200}ms` }}
                >
                  <div className="text-red-400">
                    {stat.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden
                  border border-white/10 hover:border-red-500/30
                  transition-all duration-700 hover:scale-105 hover:-translate-y-3
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{
                  transitionDelay: `${i * 100 + 400}ms`,
                  boxShadow: hoveredIndex === i ? '0 25px 50px -12px rgba(220, 38, 38, 0.4)' : 'none'
                }}
              >
                {/* Gradient overlay animation */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}></div>

                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?w=800&q=80';
                    }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-2"
                  />
                  
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
                  
                  {/* Animated glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-30 transition-opacity duration-700`}></div>

                  {/* Icon badge */}
                  <div className={`absolute top-4 right-4 w-14 h-14 flex items-center justify-center rounded-2xl
                    bg-white/90 backdrop-blur-sm shadow-xl
                    transition-all duration-500 group-hover:scale-110 group-hover:rotate-12
                    ${hoveredIndex === i ? 'animate-bounce-gentle' : ''}`}>
                    <div className={`text-transparent bg-gradient-to-br ${service.color} bg-clip-text`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Number badge */}
                  <div className="absolute bottom-4 left-4 w-10 h-10 flex items-center justify-center rounded-full
                    bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-sm">
                    {i + 1}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-red-600 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  {/* Learn more button */}
                  <div className={`flex items-center gap-2 text-red-400 font-semibold text-sm
                    transition-all duration-500 cursor-pointer
                    ${hoveredIndex === i ? 'translate-x-2' : 'translate-x-0'}`}>
                    <span>Learn More</span>
                    <ArrowRight size={16} className={`transition-transform duration-300 ${hoveredIndex === i ? 'translate-x-1' : ''}`} />
                  </div>

                  {/* Bottom glow line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color}
                    transition-all duration-700 ${hoveredIndex === i ? 'w-full' : 'w-0'}`}></div>
                </div>

                {/* Shine effect */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none`}>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-full font-bold text-white text-lg
              hover:shadow-2xl hover:shadow-red-600/50 transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Get Emergency Help Now
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 30px) scale(1.1); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -40px) scale(1.05); }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0) scale(1.1) rotate(12deg); }
          50% { transform: translateY(-5px) scale(1.1) rotate(12deg); }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-heartbeat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 1s ease-in-out infinite;
        }

        /* Smooth scrolling */
        * {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #1e293b;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #dc2626, #b91c1c);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #b91c1c, #991b1b);
        }
      `}</style>
    </div>
  );
};

export default ServicesSection;
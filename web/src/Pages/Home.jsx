import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { id: 1, number: "15+", text: "Years Experience" },
  { id: 2, number: "500+", text: "Projects Completed" },
  { id: 3, number: "100%", text: "Client Satisfaction" },
  { id: 4, number: "24/7", text: "Support Available" },
];

const services = [
  {
    id: 1,
    title: "Premium Cement",
    description: "High-grade cement for lasting durability",
    icon: "🏗️",
  },
  {
    id: 2,
    title: "Steel & Metal",
    description: "Quality structural materials",
    icon: "⚡",
  },
  {
    id: 3,
    title: "Lumber & Wood",
    description: "Sustainably sourced timber",
    icon: "🌳",
  },
  {
    id: 4,
    title: "Tools & Equipment",
    description: "Professional-grade tools",
    icon: "🛠️",
  },
];

const ShimmerEffect = () => (
  <div className="animate-pulse">
    <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
  </div>
);

const Home = () => {
  const [loading, setLoading] = React.useState(true);
  const heroContentRef = React.useRef(null);
  const productCardsRef = React.useRef(null);
  const gradientRef = React.useRef(null);
  const statsRef = React.useRef(null);
  const servicesRef = React.useRef(null);

  React.useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);

      // Animate hero content
      // const heroContent = heroContentRef.current;
      // gsap.from(heroContent.children, {
      //   duration: 1,
      //   y: 50,
      //   opacity: 0,
      //   stagger: 0.2,
      //   ease: "power3.out",
      // });

      // Animate product cards
      // const productCards = productCardsRef.current.children;
      // gsap.from(productCards, {
      //   duration: 0.8,
      //   scale: 0.8,
      //   opacity: 0,
      //   stagger: 0.1,
      //   ease: "back.out(1.2)",
      //   scrollTrigger: {
      //     trigger: productCardsRef.current,
      //     start: "top bottom-=100",
      //     toggleActions: "play none none reverse",
      //   },
      // });

      // gsap.to(".myDiv", {
      //   scrollTrigger: {
      //     trigger: ".myDiv",
      //     toggleActions: "restart pause reverse none",
      //   },
      //   x: 400,
      //   rotation: 0,
      //   duration: 3,
      // });

      // Animate gradient background
      gsap.from(gradientRef.current, {
        duration: 1.5,
        opacity: 0,
        scale: 1.2,
        ease: "power2.out",
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div
            ref={gradientRef}
            className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900 to-indigo-900/40"
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div ref={heroContentRef} className="space-y-8 myDiv">
              {loading ? (
                <div className="space-y-4">
                  <div className="h-12 bg-gray-200 rounded-md w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded-md w-5/6 animate-pulse"></div>
                </div>
              ) : (
                <>
                  <motion.h1
                    className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    Construct with{" "}
                    <span className="text-blue-400">Confidence</span>
                  </motion.h1>
                  <motion.p
                    className="text-xl text-gray-300 max-w-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  >
                    Transform your vision into reality with premium construction
                    materials and expert guidance. Building excellence,
                    delivering results.
                  </motion.p>
                  <motion.div
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                  >
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/25">
                      Explore Materials
                    </button>
                    <button className="border-2 border-blue-400/30 text-blue-400 hover:bg-blue-400/10 px-8 py-4 rounded-lg font-semibold transition-all">
                      Schedule Consultation
                    </button>
                  </motion.div>
                </>
              )}
            </div>

            {/* Hero Images Grid */}
            <div ref={productCardsRef} className="grid grid-cols-2 gap-4">
              {loading ? (
                <>
                  <ShimmerEffect />
                  <ShimmerEffect />
                  <ShimmerEffect />
                  <ShimmerEffect />
                </>
              ) : (
                <>
                  <div className="bg-gray-800 rounded-lg p-4 transform hover:scale-105 transition-transform">
                    <div className="h-48 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-white font-semibold">
                        Premium Cement
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 transform hover:scale-105 transition-transform">
                    <div className="h-48 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-white font-semibold">
                        Steel & Metal
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 transform hover:scale-105 transition-transform">
                    <div className="h-48 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-white font-semibold">
                        Lumber & Wood
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 transform hover:scale-105 transition-transform">
                    <div className="h-48 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-white font-semibold">
                        Tools & Equipment
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Stats Section */}
          {!loading && (
            <div
              ref={statsRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.id}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-4xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-400">{stat.text}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Services Section */}
      {!loading && (
        <div className="bg-slate-800/50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Our Services
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Delivering excellence in construction materials and services,
                backed by years of expertise and commitment to quality.
              </p>
            </motion.div>

            <div
              ref={servicesRef}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-colors group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative py-24"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-slate-900"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's bring your construction vision to life with premium
              materials and expert support.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/25"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;

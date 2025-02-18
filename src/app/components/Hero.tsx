// components/Hero.tsx
import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen-90 flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-white font-serif text-4xl md:text-6xl font-bold leading-tight mb-6">
            Transforming Your Look with Professional Expertise
          </h1>
          <p className="text-white text-lg md:text-xl mb-8">
            Experience premium hairstyling services tailored to your unique style and personality.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              href="#booking"
              className="bg-brand-accent text-white px-8 py-3 rounded-md font-medium text-center hover:bg-opacity-90 transition-colors duration-300"
            >
              Book Appointment
            </Link>
            <Link
              href="#services"
              className="border border-white text-white px-8 py-3 rounded-md font-medium text-center hover:bg-white hover:bg-opacity-10 transition-colors duration-300"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
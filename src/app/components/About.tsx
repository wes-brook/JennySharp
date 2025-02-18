// components/About.tsx
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary mb-4">
            About Jenny Sharp
          </h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto"></div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square w-full max-w-md mx-auto md:mx-0"
          >
            <Image
              src="/images/stylist-portrait.jpg"
              alt="Jenny Sharp, Professional Hairstylist"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-serif font-semibold text-brand-primary mb-4">
              With over 10 years of experience
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Jenny Sharp is a passionate hairstylist dedicated to bringing your vision to life. 
              Trained at prestigious academies and with experience in high-end salons, Jenny combines 
              technical expertise with an artistic eye to create looks that enhance your natural beauty.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Whether you're looking for a subtle change or a complete transformation, Jenny's personalized 
              approach ensures that you'll leave with a hairstyle that makes you feel confident and beautiful.
            </p>
            <div className="flex flex-wrap -mx-2">
              <div className="w-1/2 px-2 mb-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-brand-accent mr-2"></div>
                  <span className="text-gray-700">Color Specialist</span>
                </div>
              </div>
              <div className="w-1/2 px-2 mb-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-brand-accent mr-2"></div>
                  <span className="text-gray-700">Bridal Expert</span>
                </div>
              </div>
              <div className="w-1/2 px-2 mb-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-brand-accent mr-2"></div>
                  <span className="text-gray-700">Advanced Cutting</span>
                </div>
              </div>
              <div className="w-1/2 px-2 mb-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-brand-accent mr-2"></div>
                  <span className="text-gray-700">Hair Treatments</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
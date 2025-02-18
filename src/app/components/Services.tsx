// components/Services.tsx
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';

const services = [
  {
    category: 'Hair Cutting',
    items: [
      { name: 'Women\'s Haircut', price: '$65+', description: 'Includes consultation, shampoo, cut and style' },
      { name: 'Men\'s Haircut', price: '$45+', description: 'Includes consultation, shampoo, cut and style' },
      { name: 'Children\'s Haircut', price: '$35+', description: 'For children under 12' },
      { name: 'Bang Trim', price: '$15+', description: 'Quick service for bang maintenance' },
    ],
  },
  {
    category: 'Coloring',
    items: [
      { name: 'Single Process Color', price: '$85+', description: 'All-over color application' },
      { name: 'Partial Highlights', price: '$110+', description: 'Targeted highlighting for dimension' },
      { name: 'Full Highlights', price: '$150+', description: 'Complete highlighting throughout hair' },
      { name: 'Balayage', price: '$175+', description: 'Hand-painted highlights for natural-looking dimension' },
      { name: 'Color Correction', price: 'By consultation', description: 'Specialized service to fix previous color work' },
    ],
  },
  {
    category: 'Styling',
    items: [
      { name: 'Blowout', price: '$50+', description: 'Shampoo and blowdry styling' },
      { name: 'Special Occasion', price: '$85+', description: 'Styling for events and special occasions' },
      { name: 'Updo', price: '$95+', description: 'Formal updo styling for special events' },
      { name: 'Bridal Trial', price: '$120', description: 'Pre-wedding styling consultation and test run' },
      { name: 'Bridal Styling', price: '$250+', description: 'Wedding day hair styling for the bride' },
    ],
  },
  {
    category: 'Treatments',
    items: [
      { name: 'Deep Conditioning', price: '$25+', description: 'Intensive moisture treatment' },
      { name: 'Keratin Treatment', price: '$250+', description: 'Smoothing and anti-frizz treatment' },
      { name: 'Scalp Treatment', price: '$45+', description: 'Treatment for healthy scalp' },
      { name: 'Hair Mask', price: '$35+', description: 'Restorative treatment for damaged hair' },
    ],
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 bg-brand-secondary bg-opacity-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the range of services we offer, tailored to your individual needs and style preferences.
          </p>
          <div className="w-16 h-1 bg-brand-accent mx-auto mt-4"></div>
        </div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <Tab.Group>
            <Tab.List className="flex flex-wrap justify-center space-x-1 border-b border-gray-200 mb-12">
              {services.map((category) => (
                <Tab
                  key={category.category}
                  className={({ selected }) =>
                    `py-3 px-6 focus:outline-none text-lg transition-colors duration-300 ${
                      selected
                        ? 'text-brand-accent border-b-2 border-brand-accent font-medium'
                        : 'text-gray-500 hover:text-brand-accent'
                    }`
                  }
                >
                  {category.category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {services.map((category, idx) => (
                <Tab.Panel key={idx}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {category.items.map((service, serviceIdx) => (
                      <div
                        key={serviceIdx}
                        className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-serif font-medium text-brand-primary">
                            {service.name}
                          </h3>
                          <span className="text-brand-accent font-medium">{service.price}</span>
                        </div>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    ))}
                  </motion.div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </section>
  );
};

export default Services;
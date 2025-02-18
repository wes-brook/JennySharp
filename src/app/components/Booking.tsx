// components/Booking.tsx
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Link from 'next/link';

const bookingOptions = [
  {
    title: 'Online Booking',
    description: 'Book your appointment through our easy-to-use online system.',
    ctaText: 'Book Now',
    ctaLink: '#', // Replace with actual booking link
    icon: '📅',
  },
  // {
  //   title: 'Phone Booking',
  //   description: 'Prefer to speak with someone? Give us a call to schedule.',
  //   ctaText: 'Call Us',
  //   ctaLink: 'tel:+1234567890', // Replace with actual phone number
  //   icon: '📞',
  // },
  {
    title: 'Email Inquiry',
    description: 'Send us your details and preferred time for appointment.',
    ctaText: 'Email Us',
    ctaLink: 'mailto:info@jennysharp.com', // Replace with actual email
    icon: '✉️',
  },
];

const Booking = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="booking" className="py-20 bg-brand-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Book Your Appointment
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Ready for a new look? Choose from our convenient booking options to schedule your appointment.
          </p>
          <div className="w-16 h-1 bg-brand-accent mx-auto mt-4"></div>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {bookingOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-15 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{option.icon}</div>
              <h3 className="text-xl font-serif font-semibold mb-3">{option.title}</h3>
              <p className="text-gray-300 mb-6">{option.description}</p>
              <Link
                href={option.ctaLink}
                className="inline-block bg-brand-accent text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300"
              >
                {option.ctaText}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16 max-w-3xl mx-auto">
          <h3 className="text-xl font-serif font-semibold mb-4">Booking Policy</h3>
          <p className="text-gray-300 mb-6">
            We kindly request at least 24 hours notice for cancellations. A deposit may be required 
            for certain services. Please arrive 10 minutes before your scheduled appointment time.
          </p>
          <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto mb-8">
            <div>
              <h4 className="font-medium mb-2">Business Hours</h4>
              <ul className="text-gray-300 space-y-1">
                <li>Monday - Friday: 9am - 7pm</li>
                <li>Saturday: 9am - 5pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Location</h4>
              <address className="text-gray-300 not-italic">
                123 Styling Street<br />
                Beauty City, BC 12345<br />
                United States
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
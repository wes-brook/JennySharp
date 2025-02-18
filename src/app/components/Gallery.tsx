// components/Gallery.tsx
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {  XMarkIcon  } from '@heroicons/react/24/outline';

// Example gallery items - you would replace these with your actual images
const galleryItems = [
  { id: 1, src: '/images/gallery/gallery-1.jpg', alt: 'Hairstyle example 1', category: 'Color' },
  { id: 2, src: '/images/gallery/gallery-2.jpg', alt: 'Hairstyle example 2', category: 'Cut' },
  { id: 3, src: '/images/gallery/gallery-3.jpg', alt: 'Hairstyle example 3', category: 'Style' },
  { id: 4, src: '/images/gallery/gallery-4.jpg', alt: 'Hairstyle example 4', category: 'Color' },
  { id: 5, src: '/images/gallery/gallery-5.jpg', alt: 'Hairstyle example 5', category: 'Cut' },
  { id: 6, src: '/images/gallery/gallery-6.jpg', alt: 'Hairstyle example 6', category: 'Style' },
  { id: 7, src: '/images/gallery/gallery-7.jpg', alt: 'Hairstyle example 7', category: 'Style' },
  { id: 8, src: '/images/gallery/gallery-8.jpg', alt: 'Hairstyle example 8', category: 'Color' },
];

const categories = ['All', 'Color', 'Cut', 'Style'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-primary mb-4">
            Portfolio Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore a selection of our finest work and get inspired for your next visit.
          </p>
          <div className="w-16 h-1 bg-brand-accent mx-auto mt-4"></div>
        </div>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  activeCategory === category
                    ? 'bg-brand-accent text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="relative aspect-square overflow-hidden rounded-md">
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium">
                    View
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
            <div className="relative aspect-square w-full">
              <Image
                src={galleryItems.find(item => item.id === selectedImage)?.src || ''}
                alt={galleryItems.find(item => item.id === selectedImage)?.alt || ''}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
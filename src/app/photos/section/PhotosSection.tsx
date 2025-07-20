'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

// Type definitions
interface PhotoImage {
  src: string;
  alt: string;
}

interface PhotoSection {
  title: string;
  description: string;
  images: PhotoImage[];
}

const PhotosPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<PhotoImage | null>(null);

  // Define all photo sections with descriptions
  const photoSections: PhotoSection[] = [
    {
      title: 'Fashion Photography',
      description:
        'Capturing the essence of style and elegance through dynamic fashion shoots that showcase clothing, accessories, and the unique personality of each model.',
      images: [
        { src: '/images/photos/fashion/1.webp', alt: 'Fashion Photo 1' },
        { src: '/images/photos/fashion/2.webp', alt: 'Fashion Photo 2' },
        { src: '/images/photos/fashion/3.webp', alt: 'Fashion Photo 3' },
        { src: '/images/photos/fashion/4.webp', alt: 'Fashion Photo 4' },
      ],
    },
    {
      title: 'Food Photography',
      description:
        'Delicious moments captured through artistic food photography that makes every dish look irresistible and tells the story of culinary excellence.',
      images: [
        { src: '/images/photos/food/1.webp', alt: 'Food Photo 1' },
        { src: '/images/photos/food/2.webp', alt: 'Food Photo 2' },
        { src: '/images/photos/food/3.webp', alt: 'Food Photo 3' },
        { src: '/images/photos/food/4.webp', alt: 'Food Photo 4' },
      ],
    },
    {
      title: 'Interior Photography',
      description:
        'Architectural and interior spaces beautifully documented to showcase design, ambiance, and the unique character of every room and building.',
      images: [
        { src: '/images/photos/interior/1.webp', alt: 'Interior Photo 1' },
        { src: '/images/photos/interior/2.webp', alt: 'Interior Photo 2' },
        { src: '/images/photos/interior/3.webp', alt: 'Interior Photo 3' },
        { src: '/images/photos/interior/4.webp', alt: 'Interior Photo 4' },
      ],
    },
    {
      title: 'Malayalam Photography',
      description:
        'Cultural celebrations and traditional moments captured with deep appreciation for Malayalam heritage, customs, and the beauty of local traditions.',
      images: [
        { src: '/images/photos/malayalam/1.webp', alt: 'Malayalam Photo 1' },
        { src: '/images/photos/malayalam/2.webp', alt: 'Malayalam Photo 2' },
        { src: '/images/photos/malayalam/3.webp', alt: 'Malayalam Photo 3' },
        { src: '/images/photos/malayalam/4.webp', alt: 'Malayalam Photo 4' },
      ],
    },
    {
      title: 'Stage Photography',
      description:
        'Dynamic live performances and stage events captured with precision, showcasing the energy, emotion, and artistry of every performance.',
      images: [
        { src: '/images/photos/stage/1.webp', alt: 'Stage Photo 1' },
        { src: '/images/photos/stage/2.webp', alt: 'Stage Photo 2' },
        { src: '/images/photos/stage/3.webp', alt: 'Stage Photo 3' },
        { src: '/images/photos/stage/4.webp', alt: 'Stage Photo 4' },
      ],
    },
    {
      title: 'Wedding Photography',
      description:
        "Timeless wedding moments beautifully preserved, capturing the love, joy, and intimate details that make each couple's special day unique and memorable.",
      images: [
        { src: '/images/photos/wedding/1.webp', alt: 'Wedding Photo 1' },
        { src: '/images/photos/wedding/2.webp', alt: 'Wedding Photo 2' },
        { src: '/images/photos/wedding/3.webp', alt: 'Wedding Photo 3' },
        { src: '/images/photos/wedding/4.webp', alt: 'Wedding Photo 4' },
      ],
    },
    {
      title: 'Hindi Photography',
      description:
        'Rich cultural photography celebrating Hindi traditions, festivals, and ceremonies with authentic storytelling that honors the depth of Indian culture.',
      images: [
        { src: '/images/photos/hindi/1.webp', alt: 'Hindi Photo 1' },
        { src: '/images/photos/hindi/2.webp', alt: 'Hindi Photo 2' },
        { src: '/images/photos/hindi/3.webp', alt: 'Hindi Photo 3' },
        { src: '/images/photos/hindi/4.webp', alt: 'Hindi Photo 4' },
        { src: '/images/photos/hindi/5.webp', alt: 'Hindi Photo 5' },
        { src: '/images/photos/hindi/6.webp', alt: 'Hindi Photo 6' },
        { src: '/images/photos/hindi/7.webp', alt: 'Hindi Photo 7' },
        { src: '/images/photos/hindi/8.webp', alt: 'Hindi Photo 8' },
      ],
    },
  ];

  return (
    <main className="relative min-h-screen w-full">
      {/* Add custom styles for scrollbar hiding */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>

      {/* Hero Section */}
      <section
        className="relative h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/photos/bg/3.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80" />

        <div className="absolute left-4 top-20 h-16 w-1 animate-pulse bg-yellow-500 opacity-30 md:left-10 md:h-20 md:w-2" />
        <div className="absolute bottom-20 right-8 h-2 w-2 animate-ping rounded-full bg-yellow-500 opacity-60 md:bottom-32 md:right-16 md:h-3 md:w-3" />

        <div className="relative z-10 flex h-full w-full items-center justify-center">
          <div className="px-4 text-center md:px-6">
            <div className="mb-6 md:mb-8">
              <div className="mx-auto mb-4 h-0.5 w-16 bg-yellow-500 md:mb-6 md:h-1 md:w-24" />
              <h1 className="font-montserrat mb-4 text-3xl font-[700] uppercase leading-tight tracking-[2px] text-white sm:text-4xl sm:tracking-[4px] md:mb-6 md:text-5xl md:tracking-[6px] lg:text-7xl">
                Photography
              </h1>
              <div className="mx-auto mb-6 h-0.5 w-16 bg-yellow-500 md:mb-8 md:h-1 md:w-24" />
            </div>
            <p className="font-manrope mx-auto mb-4 max-w-xs text-base leading-relaxed text-gray-300 sm:max-w-lg sm:text-lg md:mb-8 md:max-w-3xl md:text-xl lg:text-2xl">
              Discover our comprehensive photography portfolio spanning multiple
              genres and styles
            </p>
            <p className="font-manrope mx-auto max-w-xs text-sm leading-relaxed text-gray-400 sm:max-w-md sm:text-base md:max-w-2xl md:text-lg">
              From intimate weddings to dynamic stage performances, each
              photograph tells a unique story crafted with passion and precision
            </p>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform animate-bounce text-white md:bottom-8">
              <svg
                className="h-5 w-5 md:h-6 md:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Galleries */}
      <div className="relative">
        {photoSections.map((section, sectionIndex) => (
          <section
            key={sectionIndex}
            className="relative py-24 md:py-32"
            style={{
              backgroundImage:
                sectionIndex % 2 === 0
                  ? "url('/images/photos/bg/4.webp')"
                  : "url('/images/photos/bg/5.webp')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/85" />

            {/* Section Header */}
            <div className="relative z-10 mb-12 px-4 text-center md:mb-16 md:px-6 lg:px-12">
              <div className="mx-auto max-w-4xl">
                <div className="mb-4 flex items-center justify-center gap-2 md:mb-6 md:gap-4">
                  <div className="h-0.5 w-8 bg-yellow-500 md:h-1 md:w-16"></div>
                  <h2 className="font-montserrat text-center text-lg font-[700] uppercase tracking-[1px] text-white sm:text-xl sm:tracking-[2px] md:text-2xl md:tracking-[3px] lg:text-4xl">
                    {section.title}
                  </h2>
                  <div className="h-0.5 w-8 bg-yellow-500 md:h-1 md:w-16"></div>
                </div>
                <p className="font-manrope mx-auto max-w-xs text-sm leading-relaxed text-gray-300 sm:max-w-lg sm:text-base md:max-w-2xl md:text-lg lg:text-xl">
                  {section.description}
                </p>
              </div>
            </div>

            {/* Photo Grid / Carousel */}
            <div className="relative z-10 px-4 md:px-6 lg:px-12">
              {/* Mobile Carousel */}
              <div className="md:hidden">
                <div className="scrollbar-hide overflow-x-auto">
                  <div
                    className="flex gap-4 pb-4"
                    style={{ width: `${section.images.length * 280}px` }}
                  >
                    {section.images.map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className="group relative flex-shrink-0 transform cursor-pointer overflow-hidden rounded-xl bg-gray-900 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-yellow-500/20"
                        style={{ width: '260px' }}
                        onClick={() => setSelectedImage(image)}
                      >
                        <div className="relative aspect-[4/5]">
                          <Image
                            width={4000}
                            height={2000}
                            src={image.src}
                            alt={image.alt}
                            className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                          <div className="absolute inset-0 flex translate-y-2 transform items-center justify-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            <div className="text-center">
                              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm">
                                <svg
                                  className="h-6 w-6 text-white"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                  />
                                </svg>
                              </div>
                              <p className="font-montserrat text-xs font-[600] uppercase tracking-[1px] text-white">
                                View Full Size
                              </p>
                            </div>
                          </div>

                          <div className="absolute right-3 top-3 h-6 w-6 rotate-45 transform bg-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carousel indicators */}
                <div className="mt-6 flex justify-center space-x-2">
                  {section.images.map((_, index) => (
                    <div
                      key={index}
                      className="h-2 w-2 rounded-full bg-white/30"
                    />
                  ))}
                </div>
              </div>

              {/* Desktop Grid */}
              <div className="mx-auto hidden max-w-7xl grid-cols-2 gap-6 md:grid md:gap-8 lg:grid-cols-3 lg:gap-10 xl:grid-cols-4">
                {section.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="group relative transform cursor-pointer overflow-hidden rounded-xl bg-gray-900 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-yellow-500/20 md:rounded-2xl md:shadow-2xl md:duration-700 md:hover:scale-105"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="relative aspect-[4/5]">
                      <Image
                        width={4000}
                        height={2000}
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-75 md:duration-700 md:group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:duration-500" />

                      <div className="absolute inset-0 flex translate-y-2 transform items-center justify-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:translate-y-4 md:duration-500">
                        <div className="text-center">
                          <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-sm md:mb-4 md:h-16 md:w-16">
                            <svg
                              className="h-6 w-6 text-white md:h-8 md:w-8"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              />
                            </svg>
                          </div>
                          <p className="font-montserrat text-xs font-[600] uppercase tracking-[1px] text-white md:text-sm md:tracking-[2px]">
                            View Full Size
                          </p>
                        </div>
                      </div>

                      <div className="absolute right-3 top-3 h-6 w-6 rotate-45 transform bg-yellow-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:right-4 md:top-4 md:h-8 md:w-8 md:duration-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 backdrop-blur-sm md:p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative flex h-full max-h-full w-full max-w-7xl items-center justify-center">
            <button
              className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-2xl font-light text-white transition-colors duration-300 hover:text-yellow-500 md:right-4 md:top-4 md:h-12 md:w-12 md:text-4xl"
              onClick={e => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ✕
            </button>
            <div className="relative flex h-full w-full items-center justify-center p-4 md:p-8">
              <Image
                width={4000}
                height={2000}
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="h-auto max-h-[90vh] w-auto max-w-[95vw] rounded-lg object-contain shadow-2xl md:max-h-[85vh] md:max-w-[90vw]"
              />
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section
        className="relative bg-cover bg-fixed bg-center py-20 md:py-32"
        style={{
          backgroundImage: "url('/images/photos/bg/2.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 px-4 text-center md:px-6 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 md:mb-8">
              <div className="mx-auto mb-4 h-0.5 w-16 bg-yellow-500 md:mb-6 md:h-1 md:w-24" />
              <h2 className="font-montserrat mb-4 text-2xl font-[700] uppercase tracking-[2px] text-white sm:text-3xl md:mb-6 md:text-4xl md:tracking-[4px] lg:text-5xl">
                Ready to Work Together?
              </h2>
              <div className="mx-auto h-0.5 w-16 bg-yellow-500 md:h-1 md:w-24" />
            </div>

            <p className="font-manrope mx-auto mb-8 max-w-xs text-base leading-relaxed text-gray-300 sm:max-w-lg sm:text-lg md:mb-12 md:max-w-3xl md:text-xl lg:text-2xl">
              Let&apos;s create something beautiful together. Get in touch to
              discuss your photography needs and bring your vision to life.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-6">
              <Link
                href="https://wa.me/917034732231?text=Hi%20Jamsheer,%20I'm%20interested%20in%20your%20photography%20services."
                className="font-montserrat group relative w-full overflow-hidden border-2 border-yellow-500 bg-yellow-500 px-8 py-3 text-xs font-[600] uppercase tracking-[1px] text-black transition-all duration-300 hover:bg-transparent hover:text-yellow-500 sm:w-auto md:px-10 md:py-4 md:text-sm md:tracking-[2px]"
              >
                Get in Touch
              </Link>

              <Link
                href="/about"
                className="font-montserrat w-full border-2 border-white bg-transparent px-8 py-3 text-xs font-[600] uppercase tracking-[1px] text-white transition-all duration-300 hover:bg-white hover:text-black sm:w-auto md:px-10 md:py-4 md:text-sm md:tracking-[2px]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PhotosPage;

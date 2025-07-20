'use client';
import Link from 'next/link';
import React, { useState } from 'react';

// Type definitions
interface Video {
  src: string;
  title: string;
}

interface VideoSection {
  title: string;
  description: string;
  videos: Video[];
}

const VideosPage: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  // Define all video sections with descriptions
  const videoSections: VideoSection[] = [
    {
      title: 'Wedding Videos',
      description:
        'Cinematic wedding films that capture the magic, emotion, and unforgettable moments of your special day with artistic storytelling and professional quality.',
      videos: [
        {
          src: 'https://res.cloudinary.com/duoycuhvh/video/upload/v1752991353/1_vngeh1.mp4',
          title: 'Wedding Video 1',
        },
        {
          src: 'https://res.cloudinary.com/duoycuhvh/video/upload/v1752991461/2_u2vcpw.mp4',
          title: 'Wedding Video 2',
        },
        {
          src: 'https://res.cloudinary.com/duoycuhvh/video/upload/v1752991531/3_v12cvo.mp4',
          title: 'Wedding Video 3',
        },
      ],
    },
    {
      title: 'Corporate Videos',
      description:
        'Professional corporate videos that showcase your brand, tell your company story, and engage your audience with compelling visual narratives and high production value.',
      videos: [
        {
          src: 'https://res.cloudinary.com/duoycuhvh/video/upload/v1752991065/1_ox7rt8.mp4',
          title: 'Corporate Video 1',
        },
        {
          src: 'https://res.cloudinary.com/duoycuhvh/video/upload/v1752991137/2_gwiynt.mp4',
          title: 'Corporate Video 2',
        },
      ],
    },
    {
      title: 'Advertisement Videos',
      description:
        'Creative and impactful advertisement videos designed to capture attention, convey your message effectively, and drive engagement with stunning visuals and compelling storytelling.',
      videos: [
        {
          src: 'https://res.cloudinary.com/duoycuhvh/video/upload/v1752990728/3_fhnxzp.mp4',
          title: 'Advertisement Video 1',
        },
        {
          src: 'https://res.cloudinary.com/duoycuhvh/video/upload/v1752990849/1_v18ox2.mp4',
          title: 'Advertisement Video 2',
        },
        {
          src: 'https://res.cloudinary.com/duoycuhvh/video/upload/v1752990963/2_1_ptsxsh.mp4',
          title: 'Advertisement Video 3',
        },
      ],
    },
    {
      title: 'Other Videos',
      description:
        "A diverse collection of additional video content including miscellaneous clips, experimental footage, and various other video materials that don't fit into specific categories.",
      videos: [
        {
          src: 'https://res.cloudinary.com/duoycuhvh/video/upload/v1752991203/1_l3axl5.mp4',
          title: 'Other Video 1',
        },
        {
          src: 'https://res.cloudinary.com/duoycuhvh/video/upload/v1752991241/2_mux2y4.mp4',
          title: 'Other Video 2',
        },
        {
          src: 'https://res.cloudinary.com/duoycuhvh/video/upload/v1752991265/3_ajqsgy.mp4',
          title: 'Other Video 3',
        },
        {
          src: 'https://res.cloudinary.com/duoycuhvh/video/upload/v1752991280/4_mcpsra.mp4',
          title: 'Other Video 4',
        },
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
          backgroundImage: "url('/images/home/hero2.webp')",
        }}
      >
        {/* <section className="relative h-screen w-full overflow-hidden">
        
        <video
          className="absolute left-0 top-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/videos/4.webp"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
          <source src="/videos/hero.mp4" type="video/webm" />
          Your browser does not support the video tag.
        </video> */}

        {/* Optional: Dark overlay for better text readability */}

        <div className="absolute left-4 top-20 h-16 w-1 animate-pulse bg-red-500 opacity-30 md:left-10 md:h-20 md:w-2" />
        <div className="absolute bottom-20 right-8 h-2 w-2 animate-ping rounded-full bg-red-500 opacity-60 md:bottom-32 md:right-16 md:h-3 md:w-3" />

        <div className="relative z-10 flex h-full w-full items-center justify-center">
          <div className="px-4 text-center md:px-6">
            <div className="mb-6 md:mb-8">
              <div className="mx-auto mb-4 h-0.5 w-16 bg-red-500 md:mb-6 md:h-1 md:w-24" />
              <h1 className="font-montserrat mb-4 text-3xl font-[700] uppercase leading-tight tracking-[2px] text-white sm:text-4xl sm:tracking-[4px] md:mb-6 md:text-5xl md:tracking-[6px] lg:text-7xl">
                Videography
              </h1>
              <div className="mx-auto mb-6 h-0.5 w-16 bg-red-500 md:mb-8 md:h-1 md:w-24" />
            </div>
            <p className="font-manrope mx-auto mb-4 max-w-xs text-base leading-relaxed text-gray-300 sm:max-w-lg sm:text-lg md:mb-8 md:max-w-3xl md:text-xl lg:text-2xl">
              Discover our cinematic video portfolio across multiple genres and
              storytelling styles
            </p>
            <p className="font-manrope mx-auto max-w-xs text-sm leading-relaxed text-gray-400 sm:max-w-md sm:text-base md:max-w-2xl md:text-lg">
              From intimate wedding films to powerful corporate stories, each
              video is crafted with cinematic excellence and emotional depth
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

      {/* Video Galleries */}
      <div className="relative">
        {videoSections.map((section, sectionIndex) => (
          <section
            key={sectionIndex}
            className="relative py-24 md:py-32"
            style={{
              backgroundImage:
                sectionIndex % 2 === 0
                  ? "url('/images/videos/1.webp')"
                  : "url('/images/videos/4.webp')",
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
                  <div className="h-0.5 w-8 bg-red-500 md:h-1 md:w-16"></div>
                  <h2 className="font-montserrat text-center text-lg font-[700] uppercase tracking-[1px] text-white sm:text-xl sm:tracking-[2px] md:text-2xl md:tracking-[3px] lg:text-4xl">
                    {section.title}
                  </h2>
                  <div className="h-0.5 w-8 bg-red-500 md:h-1 md:w-16"></div>
                </div>
                <p className="font-manrope mx-auto max-w-xs text-sm leading-relaxed text-gray-300 sm:max-w-lg sm:text-base md:max-w-2xl md:text-lg lg:text-xl">
                  {section.description}
                </p>
              </div>
            </div>

            {/* Video Grid / Carousel */}
            <div className="relative z-10 px-4 md:px-6 lg:px-12">
              {/* Mobile Carousel */}
              <div className="md:hidden">
                <div className="scrollbar-hide overflow-x-auto">
                  <div
                    className="flex gap-6 pb-4"
                    style={{ width: `${section.videos.length * 320}px` }}
                  >
                    {section.videos.map((video, videoIndex) => (
                      <div
                        key={videoIndex}
                        className="group relative flex-shrink-0 transform cursor-pointer overflow-hidden rounded-2xl bg-gray-900 shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:shadow-red-500/30"
                        style={{ width: '300px' }}
                        onClick={() => setSelectedVideo(video)}
                      >
                        <div
                          className="relative"
                          style={{ aspectRatio: '16/11' }}
                        >
                          <video
                            className="h-full w-full object-cover brightness-95 transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
                            preload="auto"
                            muted
                            loop
                            autoPlay
                            playsInline
                            onLoadedData={e => {
                              const videoEl = e.target as HTMLVideoElement;
                              videoEl.currentTime = 1;
                              videoEl.play().catch(() => {
                                // Fallback if autoplay fails
                              });
                            }}
                            onCanPlay={e => {
                              const videoEl = e.target as HTMLVideoElement;
                              videoEl.play().catch(() => {
                                // Fallback if autoplay fails
                              });
                            }}
                          >
                            <source src={video.src} type="video/mp4" />
                          </video>

                          {/* Subtle overlay */}
                          <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/10" />

                          {/* Small play icon */}
                          <div className="absolute inset-0 flex items-center justify-center opacity-80 transition-all duration-300 group-hover:opacity-100">
                            <div className="flex h-16 w-16 transform items-center justify-center rounded-full bg-red-500/90 shadow-2xl backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
                              <svg
                                className="ml-1 h-8 w-8 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>

                          {/* Video title */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                            <p className="font-montserrat text-sm font-[600] uppercase leading-tight tracking-[1px] text-white">
                              {video.title}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carousel indicators */}
                <div className="mt-6 flex justify-center space-x-2">
                  {section.videos.map((_, index) => (
                    <div
                      key={index}
                      className="h-2 w-2 rounded-full bg-white/30"
                    />
                  ))}
                </div>
              </div>

              {/* Desktop Grid */}
              <div className="mx-auto hidden max-w-6xl grid-cols-2 gap-8 md:grid lg:gap-12">
                {section.videos.map((video, videoIndex) => (
                  <div
                    key={videoIndex}
                    className="group relative transform cursor-pointer overflow-hidden rounded-2xl bg-gray-900 shadow-2xl transition-all duration-700 hover:scale-[1.02] hover:shadow-red-500/30"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <div className="relative" style={{ aspectRatio: '16/11' }}>
                      <video
                        className="h-full w-full object-cover brightness-95 transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
                        preload="auto"
                        muted
                        loop
                        autoPlay
                        playsInline
                        onLoadedData={e => {
                          const videoEl = e.target as HTMLVideoElement;
                          videoEl.currentTime = 1;
                          videoEl.play().catch(() => {
                            // Fallback if autoplay fails
                          });
                        }}
                        onCanPlay={e => {
                          const videoEl = e.target as HTMLVideoElement;
                          videoEl.play().catch(() => {
                            // Fallback if autoplay fails
                          });
                        }}
                      >
                        <source src={video.src} type="video/mp4" />
                      </video>

                      {/* Subtle overlay */}
                      <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/10" />

                      {/* Small play icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-80 transition-all duration-300 group-hover:opacity-100">
                        <div className="flex h-16 w-16 transform items-center justify-center rounded-full bg-red-500/90 shadow-2xl backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
                          <svg
                            className="ml-1 h-8 w-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Video title */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                        <p className="font-montserrat text-base font-[600] uppercase leading-tight tracking-[1px] text-white">
                          {video.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-2 backdrop-blur-sm md:p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="relative flex h-full max-h-full w-full max-w-6xl items-center justify-center">
            <button
              className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-2xl font-light text-white transition-colors duration-300 hover:text-red-500 md:right-4 md:top-4 md:h-12 md:w-12 md:text-4xl"
              onClick={e => {
                e.stopPropagation();
                setSelectedVideo(null);
              }}
            >
              ✕
            </button>
            <div className="relative flex h-full w-full items-center justify-center p-4 md:p-8">
              <div className="relative w-full max-w-4xl">
                <video
                  className="h-auto max-h-[80vh] w-full rounded-lg shadow-2xl"
                  controls
                  autoPlay
                  onClick={e => e.stopPropagation()}
                >
                  <source src={selectedVideo.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="mt-4 text-center">
                  <h3 className="font-montserrat text-lg font-[600] uppercase tracking-[2px] text-white md:text-xl">
                    {selectedVideo.title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section
        className="relative bg-cover bg-fixed bg-center py-20 md:py-32"
        style={{
          backgroundImage: "url('/images/videos/2.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 px-4 text-center md:px-6 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="mb-6 md:mb-8">
              <div className="mx-auto mb-4 h-0.5 w-16 bg-red-500 md:mb-6 md:h-1 md:w-24" />
              <h2 className="font-montserrat mb-4 text-2xl font-[700] uppercase tracking-[2px] text-white sm:text-3xl md:mb-6 md:text-4xl md:tracking-[4px] lg:text-5xl">
                Ready to Create Your Story?
              </h2>
              <div className="mx-auto h-0.5 w-16 bg-red-500 md:h-1 md:w-24" />
            </div>

            <p className="font-manrope mx-auto mb-8 max-w-xs text-base leading-relaxed text-gray-300 sm:max-w-lg sm:text-lg md:mb-12 md:max-w-3xl md:text-xl lg:text-2xl">
              Let&apos;s bring your vision to life through cinematic
              storytelling. Get in touch to discuss your video production needs.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-6">
              <Link
                href="https://wa.me/917034732231?text=Hi%20Jamsheer,%20I'm%20interested%20in%20your%20photography%20services."
                className="font-montserrat group relative w-full overflow-hidden border-2 border-red-500 bg-red-500 px-8 py-3 text-xs font-[600] uppercase tracking-[1px] text-white transition-all duration-300 hover:bg-transparent hover:text-red-500 sm:w-auto md:px-10 md:py-4 md:text-sm md:tracking-[2px]"
              >
                Get Started
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

export default VideosPage;

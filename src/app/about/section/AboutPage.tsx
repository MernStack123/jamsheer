import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutPage: React.FC = () => {
  const skills = [
    { name: 'Adobe After Effects', icon: '🎬' },
    { name: 'Adobe Photoshop', icon: '🎨' },
    { name: 'Adobe Lightroom', icon: '📸' },
    { name: 'FCP X (Final Cut Pro)', icon: '🎞️' },
    { name: 'Davinci Resolve', icon: '🎨' },
    { name: 'Audition', icon: '🎵' },
  ];

  const jobProfile = [
    'Photography',
    'Videography',
    'Photo Editing and Colour Grading',
    'Video Online Editing',
    'Video Offline Editing',
    'Project Coordinator',
  ];

  const workExperience = [
    {
      company: 'Big Banner Media',
      location: 'Sharjah',
      position: 'Photographer, Videographer & Editor',
      duration: 'June 2013 to present',
      current: true,
    },
    {
      company: 'Revathi Studio',
      location: 'Koottanad',
      position: 'Photographer, Videographer & Editor',
      duration: 'March 2010 to May 2013',
      current: false,
    },
    {
      company: 'ACV Channel (Asianet Cable Vision)',
      location: '',
      position: 'Videographer & Editor',
      duration: 'February 2008 to January 2010',
      current: false,
    },
  ];

  return (
    <main className="relative min-h-screen w-full">
      {/* Hero Section */}
      <section
        className="relative h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/about/1.webp')",
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
                About Me
              </h1>
              <div className="mx-auto mb-6 h-0.5 w-16 bg-yellow-500 md:mb-8 md:h-1 md:w-24" />
            </div>
            <p className="font-manrope mx-auto mb-4 max-w-xs text-base leading-relaxed text-gray-300 sm:max-w-lg sm:text-lg md:mb-8 md:max-w-3xl md:text-xl lg:text-2xl">
              Professional Photographer & Videographer
            </p>
            <p className="font-manrope mx-auto max-w-xs text-sm leading-relaxed text-gray-400 sm:max-w-md sm:text-base md:max-w-2xl md:text-lg">
              Capturing moments and creating visual stories with passion and
              precision
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

      {/* Personal Profile Section */}
      <section
        className="relative py-24 md:py-32"
        style={{
          backgroundImage: "url('/images/about/2.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/85" />

        <div className="relative z-10 px-4 md:px-6 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="h-80 w-80 overflow-hidden rounded-2xl shadow-2xl md:h-96 md:w-96">
                    <Image
                      src="/images/home/about/person.webp"
                      alt="Jamsheer Maliyekkal"
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-yellow-500 opacity-80" />
                  <div className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full bg-yellow-500 opacity-60" /> */}
                </div>
              </div>

              {/* Personal Details */}
              <div className="text-center lg:text-left">
                <div className="mb-8">
                  <div className="mb-6 flex items-center justify-center gap-4 lg:justify-start">
                    <div className="h-1 w-16 bg-yellow-500"></div>
                    <h2 className="font-montserrat text-2xl font-[700] uppercase tracking-[2px] text-white md:text-3xl">
                      Personal Profile
                    </h2>
                  </div>
                </div>

                <div className="mb-8 space-y-4">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <span className="font-montserrat min-w-[120px] text-sm font-[600] uppercase tracking-[1px] text-yellow-500">
                      Name:
                    </span>
                    <span className="font-manrope text-lg text-white">
                      Jamsheer Maliyekkal
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <span className="font-montserrat min-w-[120px] text-sm font-[600] uppercase tracking-[1px] text-yellow-500">
                      Father&apos;s Name:
                    </span>
                    <span className="font-manrope text-lg text-white">
                      Asharaf Maliyekkal
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <span className="font-montserrat min-w-[120px] text-sm font-[600] uppercase tracking-[1px] text-yellow-500">
                      Date of Birth:
                    </span>
                    <span className="font-manrope text-lg text-white">
                      14/01/1990
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <span className="font-montserrat min-w-[120px] text-sm font-[600] uppercase tracking-[1px] text-yellow-500">
                      Nationality:
                    </span>
                    <span className="font-manrope text-lg text-white">
                      Indian
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <span className="font-montserrat min-w-[120px] text-sm font-[600] uppercase tracking-[1px] text-yellow-500">
                      Languages:
                    </span>
                    <span className="font-manrope text-lg text-white">
                      English, Malayalam, Hindi, Arabic
                    </span>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <span className="font-montserrat min-w-[120px] text-sm font-[600] uppercase tracking-[1px] text-yellow-500">
                      Marital Status:
                    </span>
                    <span className="font-manrope text-lg text-white">
                      Married
                    </span>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="font-montserrat mb-4 text-xl font-[700] uppercase tracking-[1px] text-white">
                    Objective
                  </h3>
                  <p className="font-manrope text-base leading-relaxed text-gray-300">
                    Optimism and hard work has always helped me to achieve my
                    goals in life. Pursuing a challenging career in your reputed
                    organization is one of my goals. I feel my personality
                    traits and my ability will help me achieve my goals
                    objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section
        className="relative py-24 md:py-32"
        style={{
          backgroundImage: "url('/images/about/4.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/85" />

        <div className="relative z-10 px-4 md:px-6 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <div className="mb-6 flex items-center justify-center gap-4">
                <div className="h-1 w-16 bg-yellow-500"></div>
                <h2 className="font-montserrat text-2xl font-[700] uppercase tracking-[2px] text-white md:text-3xl">
                  Skills & Expertise
                </h2>
                <div className="h-1 w-16 bg-yellow-500"></div>
              </div>
              <p className="font-manrope mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
                Professional software expertise and technical skills in
                photography and videography
              </p>
            </div>

            <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
              {skills.map((skill, index) => (
                <div key={index} className="group text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 transform items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-lg transition-transform duration-300 group-hover:scale-110 md:h-24 md:w-24">
                    <span className="text-2xl md:text-3xl">{skill.icon}</span>
                  </div>
                  <p className="font-montserrat text-xs font-[600] uppercase leading-tight tracking-[1px] text-white md:text-sm">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {jobProfile.map((job, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/20"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <p className="font-montserrat text-sm font-[600] uppercase tracking-[1px] text-white">
                      {job}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section
        className="relative py-24 md:py-32"
        style={{
          backgroundImage: "url('/images/about/5.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/85" />

        <div className="relative z-10 px-4 md:px-6 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-16 text-center">
              <div className="mb-6 flex items-center justify-center gap-4">
                <div className="h-1 w-16 bg-yellow-500"></div>
                <h2 className="font-montserrat text-2xl font-[700] uppercase tracking-[2px] text-white md:text-3xl">
                  Work Experience
                </h2>
                <div className="h-1 w-16 bg-yellow-500"></div>
              </div>
              <p className="font-manrope mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
                Professional journey and career milestones in photography and
                videography
              </p>
            </div>

            <div className="space-y-8">
              {workExperience.map((work, index) => (
                <div key={index} className="relative">
                  <div className="rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-white/20">
                    <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h3 className="font-montserrat mb-2 text-xl font-[700] uppercase tracking-[1px] text-white">
                          {work.company}
                        </h3>
                        {work.location && (
                          <p className="font-manrope mb-2 text-sm font-[600] uppercase tracking-[1px] text-yellow-500">
                            {work.location}
                          </p>
                        )}
                        <p className="font-manrope text-base text-gray-300">
                          {work.position}
                        </p>
                      </div>
                      <div className="mt-4 text-left md:mt-0 md:text-right">
                        <p className="font-montserrat text-sm font-[600] uppercase tracking-[1px] text-gray-400">
                          {work.duration}
                        </p>
                        {work.current && (
                          <div className="mt-2 inline-block rounded-full bg-green-500/20 px-3 py-1 text-xs font-[600] uppercase tracking-[1px] text-green-400">
                            Current
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="absolute right-4 top-4 h-8 w-8 rotate-45 transform bg-yellow-500 opacity-20" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="relative py-24 md:py-32"
        style={{
          backgroundImage: "url('/images/about/3.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/85" />

        <div className="relative z-10 px-4 md:px-6 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-12">
              <div className="mb-6 flex items-center justify-center gap-4">
                <div className="h-1 w-16 bg-yellow-500"></div>
                <h2 className="font-montserrat text-2xl font-[700] uppercase tracking-[2px] text-white md:text-3xl">
                  Get In Touch
                </h2>
                <div className="h-1 w-16 bg-yellow-500"></div>
              </div>
              <p className="font-manrope mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
                Ready to work together? Let&apos;s create something amazing and
                bring your vision to life.
              </p>
            </div>

            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="font-montserrat mb-3 text-sm font-[600] uppercase tracking-[1px] text-yellow-500">
                  Phone
                </h3>
                <p className="font-manrope text-lg text-white">
                  +971 52 250 5312 (U.A.E)
                </p>
                <p className="font-manrope text-lg text-white">
                  +91 703 473 2231 (India)
                </p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <h3 className="font-montserrat mb-3 text-sm font-[600] uppercase tracking-[1px] text-yellow-500">
                  Email
                </h3>
                <p className="font-manrope text-lg text-white">
                  jamsheermaliyakkal@gmail.com
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <Link
                href="https://wa.me/917034732231?text=Hi%20Jamsheer,%20I'm%20interested%20in%20your%20photography%20services."
                className="font-montserrat group relative w-full overflow-hidden border-2 border-yellow-500 bg-yellow-500 px-10 py-4 text-sm font-[600] uppercase tracking-[2px] text-black transition-all duration-300 hover:bg-transparent hover:text-yellow-500 sm:w-auto"
              >
                Contact Me
              </Link>

              <Link
                href="/photos"
                className="font-montserrat w-full border-2 border-white bg-transparent px-10 py-4 text-sm font-[600] uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-white hover:text-black sm:w-auto"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;

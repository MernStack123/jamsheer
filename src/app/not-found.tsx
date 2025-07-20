'use client';
import React from 'react';
import Link from 'next/link';

export default function NotFound() {
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

              {/* 404 Number */}
              <div className="relative mb-8">
                <h1 className="font-montserrat bg-gradient-to-br from-yellow-500 via-yellow-400 to-orange-500 bg-clip-text text-[8rem] font-[700] uppercase leading-none tracking-[4px] text-transparent sm:text-[10rem] md:text-[12rem] lg:text-[14rem]">
                  404
                </h1>

                {/* Camera lens effects around the zeros */}
                <div className="absolute left-[15%] top-1/2 hidden -translate-y-1/2 transform md:block">
                  <div
                    className="h-16 w-16 animate-spin rounded-full border-4 border-yellow-500/30 md:h-20 md:w-20"
                    style={{ animationDuration: '8s' }}
                  />
                  <div className="absolute inset-2 rounded-full border-2 border-white/20" />
                  <div className="absolute inset-4 rounded-full border border-yellow-500/50" />
                </div>

                <div className="absolute right-[15%] top-1/2 hidden -translate-y-1/2 transform md:block">
                  <div
                    className="h-16 w-16 animate-spin rounded-full border-4 border-yellow-500/30 md:h-20 md:w-20"
                    style={{
                      animationDuration: '8s',
                      animationDirection: 'reverse',
                    }}
                  />
                  <div className="absolute inset-2 rounded-full border-2 border-white/20" />
                  <div className="absolute inset-4 rounded-full border border-yellow-500/50" />
                </div>
              </div>

              <h2 className="font-montserrat mb-4 text-3xl font-[700] uppercase leading-tight tracking-[2px] text-white sm:text-4xl sm:tracking-[4px] md:mb-6 md:text-5xl md:tracking-[6px]">
                Frame Not Found
              </h2>
              <div className="mx-auto mb-6 h-0.5 w-16 bg-yellow-500 md:mb-8 md:h-1 md:w-24" />
            </div>

            <p className="font-manrope mx-auto mb-4 max-w-xs text-base leading-relaxed text-gray-300 sm:max-w-lg sm:text-lg md:mb-8 md:max-w-3xl md:text-xl lg:text-2xl">
              This shot seems to be out of focus
            </p>
            <p className="font-manrope mx-auto max-w-xs text-sm leading-relaxed text-gray-400 sm:max-w-md sm:text-base md:max-w-2xl md:text-lg">
              The page you&apos;re looking for has been developed away. But
              don&apos;t worry – there are plenty of beautiful moments waiting
              to be captured in my portfolio.
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

      {/* Action Buttons Section */}
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
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-12">
              <div className="mb-6 flex items-center justify-center gap-4">
                <div className="h-1 w-16 bg-yellow-500"></div>
                <h3 className="font-montserrat text-2xl font-[700] uppercase tracking-[2px] text-white md:text-3xl">
                  Let&apos;s Get You Back On Track
                </h3>
                <div className="h-1 w-16 bg-yellow-500"></div>
              </div>
              <p className="font-manrope mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
                Don&apos;t let this stop your creative journey. Explore my work
                or get in touch to discuss your next project.
              </p>
            </div>

            {/* Navigation Options */}
            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
              <Link
                href="/"
                className="group rounded-xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500/50 hover:bg-yellow-500/20"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                </div>
                <h4 className="font-montserrat mb-2 text-lg font-[600] uppercase tracking-[1px] text-white">
                  Home
                </h4>
                <p className="font-manrope text-sm text-gray-300">
                  Return to the main page
                </p>
              </Link>

              <Link
                href="/photos"
                className="group rounded-xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500/50 hover:bg-yellow-500/20"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <h4 className="font-montserrat mb-2 text-lg font-[600] uppercase tracking-[1px] text-white">
                  Photography
                </h4>
                <p className="font-manrope text-sm text-gray-300">
                  Browse my photo gallery
                </p>
              </Link>

              <Link
                href="/videos"
                className="group rounded-xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition-all duration-300 hover:border-yellow-500/50 hover:bg-yellow-500/20"
              >
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <svg
                      className="h-8 w-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <h4 className="font-montserrat mb-2 text-lg font-[600] uppercase tracking-[1px] text-white">
                  Videography
                </h4>
                <p className="font-manrope text-sm text-gray-300">
                  Watch my video portfolio
                </p>
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <button
                onClick={() => window.history.back()}
                className="font-montserrat group relative w-full overflow-hidden border-2 border-yellow-500 bg-yellow-500 px-10 py-4 text-sm font-[600] uppercase tracking-[2px] text-black transition-all duration-300 hover:bg-transparent hover:text-yellow-500 sm:w-auto"
              >
                Go Back
              </button>

              <Link
                href="https://wa.me/917034732231?text=Hi%20Jamsheer,%20I%20found%20a%20404%20page%20but%20I'm%20interested%20in%20your%20photography%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="font-montserrat w-full border-2 border-white bg-transparent px-10 py-4 text-sm font-[600] uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-white hover:text-black sm:w-auto"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
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
                <h3 className="font-montserrat text-2xl font-[700] uppercase tracking-[2px] text-white md:text-3xl">
                  Still Need Help?
                </h3>
                <div className="h-1 w-16 bg-yellow-500"></div>
              </div>
              <p className="font-manrope mx-auto max-w-2xl text-lg leading-relaxed text-gray-300">
                Looking for something specific or want to discuss a project?
                I&apos;m here to help.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <h4 className="font-montserrat mb-3 text-sm font-[600] uppercase tracking-[1px] text-yellow-500">
                  Phone
                </h4>
                <p className="font-manrope text-lg text-white">
                  +971 52 250 5312 (U.A.E)
                </p>
                <p className="font-manrope text-lg text-white">
                  +91 703 473 2231 (India)
                </p>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <h4 className="font-montserrat mb-3 text-sm font-[600] uppercase tracking-[1px] text-yellow-500">
                  Email
                </h4>
                <p className="font-manrope text-lg text-white">
                  jamsheermaliyakkal@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

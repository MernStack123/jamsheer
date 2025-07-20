import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-white px-4">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/images/poster/home.webp"
      >
        <source
          src="https://res.cloudinary.com/duoycuhvh/video/upload/v1752991561/home_tyucl8.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 z-0 bg-black/10" />
      <div className="relative z-20 flex h-full w-full items-center justify-center">
        <p className="font-playfair max-w-[750px] px-4 text-center text-lg font-[400] uppercase text-[#fff] md:text-2xl">
          &quot;More than a wedding film — it’s a story of two hearts becoming
          one. Every glance, every tear, every joyful laugh, captured forever in
          the warmth of love.&quot;
        </p>
      </div>
    </section>
  );
};

export default VideoSection;

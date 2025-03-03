// src/app/page.tsx
import Image from 'next/image';
import globe from '../../public/globe.svg';
import designIcon from '../../public/design-icon.svg';
import brandingIcon from '../../public/branding-icon.svg';
import developmentIcon from '../../public/development-icon.svg';

export default function HomePage() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="flex items-center justify-between gap-8 py-16 px-8 bg-white">
        {/* LEFT COLUMN */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-electric-teal uppercase text-sm tracking-wider mb-4">
            YOUR PARTNER IN CREATIVE EXCELLENCE
          </h2>
          <h1 className="text-4xl font-bold leading-snug mb-4">
            Innovative Designs for Modern Businesses
          </h1>
          <p className="text-lg mb-4">
            At CJ8 Designs, we transform your vision into reality with cutting-edge design solutions
            tailored to your needs.
          </p>
          <div className="flex gap-6 font-semibold mb-8">
            <span>Innovative</span>
            <span>Collaborative</span>
            <span>Reliable</span>
          </div>
          <div className="flex gap-4">
            <a href="/services" className="px-4 py-2 rounded-full bg-electric-teal text-white font-semibold hover:bg-teal-600 transition">
              Explore Services
            </a>
            <a href="/contact" className="px-4 py-2 rounded-full border-2 border-electric-teal text-electric-teal font-semibold hover:bg-electric-teal hover:text-white transition">
              Contact Us
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex-1 max-w-lg relative flex justify-center items-center">
          <Image src={globe} alt="globe design" width={400} height={400} />
          <div className="absolute bottom-0 left-0 bg-white px-4 py-2 rounded-tr-lg shadow-md text-sm">
            <p className="m-0">Web Design</p>
            <p className="m-0">Digital Presence</p>
          </div>
        </div>
      </section>

      {/* CORE SERVICES SECTION */}
      <section className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Core Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Cards */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:-translate-y-1 transition text-center">
            <Image src={designIcon} alt="Design Icon" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-electric-teal mb-2">Design</h3>
            <p className="text-gray-600">
              We craft visually appealing and user-centric designs to elevate your brand.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:-translate-y-1 transition text-center">
            <Image src={brandingIcon} alt="Branding Icon" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-electric-teal mb-2">Branding</h3>
            <p className="text-gray-600">
              We build strong brand identities that resonate with your audience.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm hover:-translate-y-1 transition text-center">
            <Image src={developmentIcon} alt="Development Icon" width={64} height={64} className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-electric-teal mb-2">Development</h3>
            <p className="text-gray-600">
              We develop functional and modern websites tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="py-16 px-8 bg-blue-500 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
        <p className="text-lg mb-6">
          Let’s collaborate and bring your vision to life. Contact us today to get started.
        </p>
        <a href="/contact" className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-full hover:bg-white hover:text-blue-500 transition">
          Get in Touch
        </a>
      </section>

    </main>
  );
}

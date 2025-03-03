"use client";
import { useEffect, useState } from "react";
import {
  FaBullseye,
  FaPalette,
  FaCogs,
  FaLaptopCode,
  FaProjectDiagram,
  FaHandshake,
} from "react-icons/fa";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="TITLE-PRIMARY text-4xl font-bold tracking-tight text-black bg-white p-4 sm:text-6xl">
            CJ8 Designs - Crafting Excellence in Design
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            At CJ8 Designs, we blend creativity with precision to deliver
            innovative solutions that drive success.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900">Our Core Values</h3>
          <p className="text-gray-700 mt-2">
            Empowering Businesses Through Design
          </p>
          <p className="text-gray-700 mt-2">
            At CJ8 Designs, we are committed to excellence, innovation, and
            collaboration.
          </p>
          <p className="text-gray-700 mt-2">
            Our mission is to empower businesses with cutting-edge design
            solutions that inspire and transform.
          </p>
          <p className="text-gray-700 mt-2">
            We believe in fostering creativity and delivering results that
            exceed expectations.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-4xl font-bold text-blue-600">2018</h3>
            <p className="text-gray-600 mt-2">Founded</p>
          </div>
          <MetricCard title="Projects Completed" value="200+" />
          <MetricCard title="Global Clients" value="50+" />
          <MetricCard title="Awards Won" value="25" />
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            Discover Our Journey
          </h3>
          <p className="text-gray-700 mt-2">
            Meet the Visionaries Behind CJ8 Designs
          </p>
          <p className="text-gray-700 mt-2">
            Our team of dedicated professionals brings a wealth of experience
            and creativity to every project.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="/generic_person.jpg"
              alt="James Carter"
              width={96}
              height={96}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-bold text-gray-900">James Carter</h4>
            <p className="text-gray-700">Founder & CEO</p>
            <p className="text-gray-700">New York, USA</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="/generic_person.jpg"
              alt="Emily Zhang"
              width={96}
              height={96}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-bold text-gray-900">Emily Zhang</h4>
            <p className="text-gray-700">Creative Director</p>
            <p className="text-gray-700">San Francisco, USA</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="/generic_person.jpg"
              alt="Michael Brown"
              width={96}
              height={96}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-bold text-gray-900">Michael Brown</h4>
            <p className="text-gray-700">Senior UX Designer</p>
            <p className="text-gray-700">London, UK</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Image
              src="/generic_person.jpg"
              alt="Laura Smith"
              width={96}
              height={96}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-bold text-gray-900">Laura Smith</h4>
            <p className="text-gray-700">Marketing Strategist</p>
            <p className="text-gray-700">Toronto, Canada</p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">
          <ExpertiseCard
            icon={<FaBullseye />}
            title="Brand Strategy"
            description="Strategies aligning with business goals and market trends."
          />
          <ExpertiseCard
            icon={<FaPalette />}
            title="User Experience Design"
            description="Seamless and intuitive user journeys."
          />
          <ExpertiseCard
            icon={<FaCogs />}
            title="Visual Design"
            description="Visually stunning and impactful designs."
          />
          <ExpertiseCard
            icon={<FaLaptopCode />}
            title="Digital Innovation"
            description="Cutting-edge technologies driving innovation."
          />
          <ExpertiseCard
            icon={<FaProjectDiagram />}
            title="Project Management"
            description="Timely and efficient project delivery."
          />
          <ExpertiseCard
            icon={<FaHandshake />}
            title="Client Collaboration"
            description="Working closely with clients to achieve their vision."
          />
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            Innovate. Transform. Excel.
          </h3>
          <p className="text-gray-700 mt-2">Driving Success Through Design</p>
          <p className="text-gray-700 mt-2">
            At CJ8 Designs, we are dedicated to delivering design solutions that
            drive measurable success for our clients.
          </p>
          <p className="text-gray-700 mt-2">
            Our approach combines creativity with data-driven insights to ensure
            your brand stands out in a competitive market.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center mt-8">
          <MetricCard title="Years of Experience" value="6" />
          <MetricCard title="Projects Delivered" value="200+" />
          <MetricCard title="Client Satisfaction" value="98%" />
          <MetricCard title="Awards & Recognitions" value="25" />
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900">
            Trusted by Leading Brands
          </h3>
          <p className="text-gray-700 mt-2">
            We collaborate with innovative brands worldwide to deliver
            exceptional design solutions.
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900">Partner With Us</h3>
          <p className="text-gray-700 mt-2">
            Let’s Create Something Extraordinary
          </p>
          <p className="text-gray-700 mt-2">
            At CJ8 Designs, we’re passionate about turning your ideas into
            impactful designs. Reach out to us today.
          </p>
          <div className="mt-4 space-y-2">
            <p className="text-gray-700">
              <strong>Collaborate:</strong> collaborate@cj8designs.com | +1
              (555) 123-4567
            </p>
            <p className="text-gray-700">
              <strong>Press:</strong> press@cj8designs.com | +1 (555) 123-4568
            </p>
            <p className="text-gray-700">
              <strong>Careers:</strong> careers@cj8designs.com | +1 (555)
              123-4569
            </p>
            <p className="text-gray-700">
              <strong>General Inquiry:</strong> hello@cj8designs.com | +1 (555)
              123-4570
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function ExpertiseCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="text-4xl text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function MetricCard({ title, value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.replace(/\D/g, ""));
    if (start === end) return;

    const totalDuration = 500;
    const incrementTime = (totalDuration / end) * 2;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [value]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg text-center">
      <h3 className="text-4xl font-bold text-blue-600">
        {count}
        {value.replace(/\d/g, "")}
      </h3>
      <p className="text-gray-600 mt-2">{title}</p>
    </div>
  );
}

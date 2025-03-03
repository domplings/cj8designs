import Image from 'next/image';
import processImage from '../../../public/design-icon.svg'; 
import { FaBullseye, FaPalette, FaCogs, FaLaptopCode, FaProjectDiagram, FaHandshake } from 'react-icons/fa';

export default function ServicesPage() {
  return (
    <main className="space-y-16">

      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-white">
        <h1 className="text-3xl font-bold mb-4">Innovate with Purpose</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          CJ8 Designs: Your Partner in Creative Solutions
        </p>
        <p className="text-md text-gray-600 mt-4">
          Discover how our tailored services can transform your business. From concept to execution, we deliver excellence at every step.
        </p>
      </section>

      {/* Service Categories */}
      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Our Service Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          <div className="bg-white shadow p-6 text-center rounded-lg">
            <h3 className="font-bold text-lg mb-2">Brand Strategy</h3>
            <p className="text-gray-600">Crafting identities that resonate</p>
          </div>

          <div className="bg-white shadow p-6 text-center rounded-lg">
            <h3 className="font-bold text-lg mb-2">Digital Experience</h3>
            <p className="text-gray-600">Engaging digital solutions</p>
          </div>

          <div className="bg-white shadow p-6 text-center rounded-lg">
            <h3 className="font-bold text-lg mb-2">Visual Design</h3>
            <p className="text-gray-600">Stunning visuals that captivate</p>
          </div>

          <div className="bg-white shadow p-6 text-center rounded-lg">
            <h3 className="font-bold text-lg mb-2">Innovation Consulting</h3>
            <p className="text-gray-600">Driving business transformation</p>
          </div>

        </div>
      </section>

      {/* Reasoning Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8">Why Choose CJ8 Designs?</h2>
        <div className="space-y-8 max-w-4xl mx-auto">

          <div>
            <h3 className="font-bold text-lg mb-2">Strategic Branding</h3>
            <p className="text-gray-600">We develop brands that tell compelling stories and drive engagement. Our strategic approach ensures your brand stands out in a crowded marketplace.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">User-Centric Design</h3>
            <p className="text-gray-600">We create intuitive and engaging designs that enhance user satisfaction and drive conversions.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Innovative Solutions</h3>
            <p className="text-gray-600">Leveraging the latest technologies to solve complex challenges, our solutions are designed to future-proof your business.</p>
          </div>

        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-gray-100 py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-center">

          <ExpertiseCard icon={<FaBullseye />} title="Brand Strategy" description="Strategies aligning with business goals and market trends." />
          <ExpertiseCard icon={<FaPalette />} title="User Experience Design" description="Seamless and intuitive user journeys." />
          <ExpertiseCard icon={<FaCogs />} title="Visual Design" description="Visually stunning and impactful designs." />
          <ExpertiseCard icon={<FaLaptopCode />} title="Digital Innovation" description="Cutting-edge technologies driving innovation." />
          <ExpertiseCard icon={<FaProjectDiagram />} title="Project Management" description="Timely and efficient project delivery." />
          <ExpertiseCard icon={<FaHandshake />} title="Client Collaboration" description="Working closely with clients to achieve their vision." />

        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8">Our Process</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
          <Image src={processImage} alt="Our Process" className="w-full md:w-1/2 object-cover" />
          <ol className="space-y-4 md:w-1/2">
            <li><strong>01.</strong> We start by understanding your business goals and challenges.</li>
            <li><strong>02.</strong> Our team crafts a tailored strategy to meet your needs.</li>
            <li><strong>03.</strong> We execute the plan with precision, ensuring high-quality results.</li>
          </ol>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-8">FAQ</h2>
        <div className="space-y-8 max-w-4xl mx-auto">

          <div>
            <h3 className="font-bold text-lg mb-2">What industries do you specialize in?</h3>
            <p className="text-gray-600">We work across various industries, including tech, retail, healthcare, and more, tailoring our approach to each sector.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">How do you ensure project success?</h3>
            <p className="text-gray-600">Our proven process, combined with close client collaboration, ensures that every project meets and exceeds expectations.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">Can you handle large-scale projects?</h3>
            <p className="text-gray-600">Absolutely. Our team is equipped to manage projects of any scale, delivering consistent quality and efficiency.</p>
          </div>

          <div className="text-center">
            <a href="/faq" className="text-blue-600 font-semibold inline-flex items-center space-x-1">
              <span>View All FAQs</span> <span>→</span>
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}

function ExpertiseCard({ icon, title, description }: { icon: JSX.Element; title: string; description: string }) {
  return (
    <div className="bg-white shadow p-6 rounded-lg flex flex-col items-center">
      <div className="text-3xl text-blue-500 mb-4">{icon}</div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}

// src/app/contact/page.tsx
import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Contact Us</h1>
        <p className="text-center mb-12">We’d love to hear from you! Reach out and let’s get started.</p>

        {/* Contact Form */}
        <form className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md space-y-4">
          <div className="flex flex-col">
            <label className="font-medium mb-1 text-gray-700">Name</label>
            <input
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1 text-gray-700">Email</label>
            <input
              type="email"
              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="font-medium mb-1 text-gray-700">Message</label>
            <textarea
              rows={5}
              className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>

        {/* Office Location & Social Links */}
        <div className="mt-16 text-center space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Our Office</h2>
          <p className="text-gray-700">123 Creative Lane, Suite 8<br />Design City, CA 90210</p>
          <div className="flex justify-center gap-4 text-blue-600">
            <Link href="https://facebook.com" className="hover:text-blue-700">Facebook</Link>
            <Link href="https://instagram.com" className="hover:text-blue-700">Instagram</Link>
            <Link href="https://linkedin.com" className="hover:text-blue-700">LinkedIn</Link>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-900">FAQs</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group">
              <summary className="cursor-pointer font-medium text-blue-700 group-open:text-blue-700">
                What services do you offer?
              </summary>
              <p className="mt-2 text-gray-600">We offer design, branding, and web development services tailored to your needs.</p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium text-blue-700 group-open:text-blue-700">
                How do I start a project?
              </summary>
              <p className="mt-2 text-gray-600">Just fill out the contact form above, and we’ll be in touch shortly.</p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium text-blue-700 group-open:text-blue-700">
                Do you offer consultations?
              </summary>
              <p className="mt-2 text-gray-600">Yes! We offer free initial consultations to understand your needs.</p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}

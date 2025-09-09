import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Courses: React.FC = () => {
  return (
    <>
      <Header />
      {/* Hero */}
      <section className="pt-24 pb-10 bg-[hsl(var(--card))]">
        <div className="section text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary mb-3 text-sm font-medium tracking-wide">
            Our Programs
          </div>
          <h1 className="heading-xl mb-3">German Language Courses</h1>
          <p className="body-lg max-w-2xl mx-auto">
            A clear path from A1 to B2: structure, requirements, and admissions.
          </p>
        </div>
      </section>

      {/* Steps - vertical alignment */}
      <section className="py-8 md:py-12">
        <div className="section">
          {/* Step 1 */}
          <div className="mb-10">
            <div className="flex items-start gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">1</span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold leading-tight text-white">Step 1: Course Structure</h2>
            </div>
            <p className="body-md mb-6 text-gray-700">
              Each level builds practical skills in speaking, listening, reading, and writing. Sessions combine expert instruction, guided practice, and feedback.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg border border-gray-300 p-4 bg-white">
                <h3 className="text-xl md:text-2xl font-display font-semibold leading-tight mb-2 text-gray-900">A1 / A2</h3>
                <ul className="list-disc ml-5 text-base leading-relaxed text-gray-700 space-y-1">
                  <li className="text-gray-700">Core vocabulary and everyday phrases</li>
                  <li className="text-gray-700">Pronunciation and listening drills</li>
                  <li className="text-gray-700">Short readings and basic writing</li>
                </ul>
              </div>
              <div className="rounded-lg border border-gray-300 p-4 bg-white">
                <h3 className="text-xl md:text-2xl font-display font-semibold leading-tight mb-2 text-gray-900">B1 / B2</h3>
                <ul className="list-disc ml-5 text-base leading-relaxed text-gray-700 space-y-1">
                  <li className="text-gray-700">Complex grammar and structured conversation</li>
                  <li className="text-gray-700">Work, study, and interview scenarios</li>
                  <li className="text-gray-700">Exam preparation strategies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="mb-10">
            <div className="flex items-start gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">2</span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold leading-tight text-white">Step 2: Requirements and Fees</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="heading-sm mb-2 text-gray-900">Requirements</h3>
                <ul className="list-disc ml-5 body-sm space-y-1 text-gray-700">
                  <li>Valid ID and contact details</li>
                  <li>Placement guidance for returning learners</li>
                  <li>Basic device and internet for online classes</li>
                </ul>
              </div>
              <div>
                <h3 className="heading-sm mb-2 text-gray-900">Fees (indicative)</h3>
                <ul className="list-disc ml-5 body-sm space-y-1 text-gray-700">
                  <li>A1 / A2: KSh 22,000 per level</li>
                  <li>B1 / B2: KSh 35,000 per level</li>
                  <li>Flexible schedules; installments available</li>
                </ul>
              </div>
            </div>
            <p className="caption mt-3 text-gray-600">Final amounts depend on chosen schedule and materials.</p>
          </div>

          {/* Step 3 - Admissions with responsive two-column layout */}
          <div>
            <div className="flex items-start gap-3 mb-3">
              <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-semibold">3</span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold leading-tight text-white">Step 3: Admissions</h2>
            </div>
            <p className="body-md mb-4 text-gray-700">Fill in details below to Generate an Admission Letter.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <form className="bg-white border border-gray-300 rounded-lg p-6">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 placeholder-gray-500" placeholder="First name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 placeholder-gray-500" placeholder="Last name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 placeholder-gray-500" placeholder="youremail@mail.com" />
                    <p className="caption mt-1 text-gray-600">We won't share your email.</p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Country code</label>
                      <input type="text" value={"+254"} readOnly className="w-full px-4 py-3 border border-gray-300 rounded-md bg-gray-100 text-gray-700" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                      <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-gray-900 placeholder-gray-500" placeholder="712345678" />
                      <p className="caption mt-1 text-gray-600">For communication Via WhatsApp</p>
                    </div>
                  </div>
                  <div className="mt-2">
                    <button type="submit" className="btn-primary w-full">Submit Details</button>
                  </div>
                </div>
              </form>

              <div className="bg-white border border-gray-300 rounded-lg p-6">
                <p className="text-lg leading-relaxed mb-2 text-black">Let us tell you about our classes.</p>
                <ul className="list-disc ml-5 text-base leading-relaxed space-y-1 text-black">
                  <li className="text-black">Classes are offered both as Live-Online Streaming or Physical (Kapsabet).</li>
                  <li className="text-black">Choose from Morning, Afternoon, or Evening sessions to fit your schedule.</li>
                  <li className="text-black">All our trainers are practicing professionals.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Courses;



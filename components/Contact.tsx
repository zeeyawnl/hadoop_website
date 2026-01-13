'use client';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-slate-50 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-center mb-14 mt-0 pt-0">
            Contact Us
            
          </h2>
          <p className="hidden md:block mt-4 text-gray-600 text-base md:text-lg">
            Have questions about our courses or batches?  
            Fill out the form and we’ll get back to you shortly.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          
          {/* Left Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2 mt-0 pt-0">
              Get in Touch
            </h3>

            <p className="hidden md:block text-gray-600 leading-relaxed mb-6">
              Whether you are a student, working professional, or corporate
              learner, our team is here to help you choose the right learning
              path in Big Data, Cloud, and Machine Learning.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg font-medium text-gray-900">
                 help.techcloud@gmail.com
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-lg font-medium text-gray-900">
                  +91 7823842448
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-lg font-medium text-gray-900">
                  Pune, Maharashtra
                </p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
            <form
  className="space-y-6"
  onSubmit={(e) => {
    e.preventDefault();
    alert('Message submitted');
    e.currentTarget.reset();
  }}
>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Interested Course
                </label>
                
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us your requirement..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-white font-medium shadow-lg hover:scale-105 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

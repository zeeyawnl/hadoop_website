'use client';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-slate-50 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              About
              <span className="block text-5xl md:text-8xl bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
                TechCloud
              </span>
            </h2>

            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed">
              TechCloud is a specialized training institute focused on Big Data,
              Cloud Computing, and Machine Learning. We help students and working
              professionals build strong fundamentals and real-world skills that
              are directly applicable in the industry.
            </p>

            <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
              Our teaching approach is practical-first — combining core concepts,
              hands-on labs, and real project exposure to prepare learners for
              real production environments.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="px-5 py-3 rounded-xl bg-white shadow-sm border border-gray-200 text-gray-800 font-medium">
                Hadoop Ecosystem
              </div>
              <div className="px-5 py-3 rounded-xl bg-white shadow-sm border border-gray-200 text-gray-800 font-medium">
                AWS Cloud
              </div>
              <div className="px-5 py-3 rounded-xl bg-white shadow-sm border border-gray-200 text-gray-800 font-medium">
                Machine Learning
              </div>
            </div>
          </div>

          {/* Right Visual / Stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-4xl font-bold text-blue-600">5+</h3>
                <p className="mt-2 text-gray-600 font-medium">
                  Years of Teaching Experience
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-4xl font-bold text-purple-600">100+</h3>
                <p className="mt-2 text-gray-600 font-medium">
                  Students Trained
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-4xl font-bold text-blue-600">100%</h3>
                <p className="mt-2 text-gray-600 font-medium">
                  Hands-on Training
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                <h3 className="text-4xl font-bold text-purple-600">Live</h3>
                <p className="mt-2 text-gray-600 font-medium">
                  Real-World Projects
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

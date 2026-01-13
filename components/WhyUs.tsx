'use client';

const features = [
  {
    title: 'Industry-Focused Curriculum',
    desc: 'Courses designed around current industry tools and real job requirements.',
  },
  {
    title: 'Hands-On Practical Training',
    desc: 'Live labs, real datasets, and production-style environments.',
  },
  {
    title: 'Real-World Projects',
    desc: 'End-to-end projects that strengthen resumes and GitHub profiles.',
  },
  {
    title: 'Placement & Career Support',
    desc: 'Interview preparation, resume guidance, and career mentoring.',
  },
  {
    title: 'Flexible Learning Modes',
    desc: 'Online, offline, weekday, and weekend batch options.',
  },
  {
    title: 'Experienced Trainers',
    desc: 'Learn from professionals with real industry exposure.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Why Choose
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TechCloud
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg">
            We focus on practical learning, real-world exposure, and career-oriented training.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

const courses = [
  {
    title: 'Hadoop',
    desc: 'Learn HDFS, MapReduce, YARN, Hive, Spark with real big-data use cases.',
    img: '/images/hadoop.jpg',
  },
  {
    title: 'AWS Cloud',
    desc: 'Hands-on cloud training with EC2, S3, IAM, VPC and deployment projects.',
    img: '/images/amazon.jpg',
  },
  {
    title: 'ML',
    desc: 'ML fundamentals, Python, models, and real-world predictive systems.',
    img: '/images/machinelearning.jpg',
  },
];

export default function Courses() {
  return (
    <section id="courses" className="pt-0 pb-10 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-0">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-14 mt-0 pt-0">
          Our Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 justify-items-center">
          {courses.map((course) => (
            <div key={course.title} className="[perspective:700px]">
              <div
                className="
                  relative w-[280px] h-[400px]
                  bg-white
                  border border-gray-300
                  rounded-xl
                  shadow-lg
                 
                  transition-transform duration-500
                  [transform-style:preserve-3d]
                  hover:[transform:translateZ(14px)_rotateX(18deg)_rotateY(18deg)]
                "
              >
                {/* Image */}
                <div className="w-full h-44 overflow-hidden rounded-t-xl">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* 3D Title */}
                <h3
                  className="
                    absolute top-[52%] right-6
                    -translate-y-1/2
                    text-3xl font-extrabold
                    text-gray-900
                    font-mono
                     hover:shadow-2xl
                    on-hover:cursor-pointer
                    transition-transform duration-500
                    [text-shadow:-1px_-1px_0_#fff,1px_-1px_0_#fff,-1px_1px_0_#fff,1px_1px_0_#fff]
                    hover:[transform:translateZ(60px)]
                  "
                >
                  {course.title}
                </h3>

                {/* Description */}
                <div className="absolute bottom-0 p-5 text-gray-700 text-base leading-relaxed">
                  {course.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

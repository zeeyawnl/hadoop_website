'use client';

import Link from "next/dist/client/link";
import Courses from "./Courses";

export default function Hero() {
  return (
    <section id="home" className="relative w-full bg-slate-50 overflow-hidden py-24 md:py-40">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]
            [background-size:20px_30px]
            [mask-image:radial-gradient(ellipse_90%_70%_at_50%_0%,black_60%,transparent_100%)]
            [-webkit-mask-image:radial-gradient(ellipse_90%_80%_at_50%_0%,black_60%,transparent_100%)]
          "
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center py-24 px-6">
        <div className="max-w-4xl text-center mt-4 md:mt-0">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight py-12 md:py-0">
            Learn Big Data
            <span className="block bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent py-2 md:py-0">
              with TechCloud
            </span>
          </h1>

          <p className="hidden md:block mt-6 text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Industry-focused Hadoop training covering HDFS, MapReduce, YARN, Hive, Spark,
  and real-world big data use cases with hands-on practice.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 md:px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg hover:scale-105 transition">
              Get Started
            </button>
            <Link
  href="/learnMore"
  className="px-8 py-3 rounded-full border border-gray-300 text-gray-800 font-medium hover:bg-gray-100 transition"
>
  Learn More
</Link>
          </div>
        </div>
        
      </div>
    
    </section>
  );
}

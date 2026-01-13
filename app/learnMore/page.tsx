export default function learnMore() {
  return (
    <main className="w-full bg-slate-50 py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          What You Will Learn at
          <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            TechCloud
          </span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-3xl">
          Our curriculum is designed to build strong foundations in Big Data,
          Cloud Computing, and Linux — the core skills required for modern data
          and cloud engineering roles.
        </p>

        {/* Hadoop */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Hadoop & Big Data
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Big Data concepts and Hadoop architecture</li>
            <li>HDFS – storage, replication, and fault tolerance</li>
            <li>YARN – resource management</li>
            <li>MapReduce programming fundamentals</li>
            <li>Hive, Pig, and data querying</li>
            <li>Apache Spark fundamentals</li>
            <li>Working with real datasets</li>
          </ul>
        </section>

        {/* AWS */}
        <section className="mt-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            AWS Cloud
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Cloud computing fundamentals</li>
            <li>EC2, S3, IAM, VPC</li>
            <li>Deploying applications on AWS</li>
            <li>Security basics and best practices</li>
            <li>Cost optimization concepts</li>
          </ul>
        </section>

        {/* Linux */}
        <section className="mt-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Linux Fundamentals
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Linux file system and directory structure</li>
            <li>Basic and advanced Linux commands</li>
            <li>Shell scripting basics</li>
            <li>User, permission, and process management</li>
            <li>Linux for Hadoop and cloud environments</li>
          </ul>
        </section>

        {/* CTA */}
        <div className="mt-20 flex gap-4">
          <a
            href="/#contact"
            className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3 text-white font-medium shadow-lg hover:scale-105 transition"
          >
            Enquire Now
          </a>

          <a
            href="/"
            className="rounded-full border border-gray-300 px-8 py-3 text-gray-800 font-medium hover:bg-gray-100 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}

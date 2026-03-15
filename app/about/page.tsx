export default function AboutPage() {
  return (
    <main className="bg-gray-50 text-gray-900">

      <div className="max-w-6xl mx-auto px-6 py-28">

        {/* Executive Intro */}
        <section className="mb-32 text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
            About <span className="text-blue-600">TechShieldAnalytics</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-6">
            TechShieldAnalytics is a modern technology advisory firm specializing in
            cloud architecture, data engineering, advanced analytics and AI-driven systems.
          </p>

          <p className="text-lg text-gray-500 leading-relaxed max-w-3xl mx-auto">
            We partner with ambitious organizations to design scalable,
            secure and performance-focused technology foundations that drive
            measurable operational and financial impact.
          </p>
        </section>


        {/* What We Do */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold mb-14 text-center">
            What We Do
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            {[
              {
                title: "Cloud Architecture & Modernization",
                desc: "Enterprise-grade cloud design, infrastructure optimization, migration strategies and security frameworks across AWS and Google Cloud."
              },
              {
                title: "Data Engineering & Advanced Analytics",
                desc: "Scalable data platforms, modeling frameworks, BigQuery architecture and real-time analytics systems enabling informed decision-making."
              },
              {
                title: "Artificial Intelligence & Automation",
                desc: "Machine learning systems, predictive modeling, workflow automation and AI-driven operational intelligence."
              },
              {
                title: "Business Intelligence & Platform Migration",
                desc: "Looker, Power BI, Alteryx implementations and seamless migration across BI ecosystems with governance and scalability."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </section>


        {/* Technology Capabilities */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold mb-14 text-center">
            Technology Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Cloud Platforms",
                items: "AWS • Google Cloud • BigQuery • Cost Optimization"
              },
              {
                title: "Data & Engineering",
                items: "SQL • Python • ETL Pipelines • Data Modeling • Analytics Architecture"
              },
              {
                title: "Business Intelligence",
                items: "Looker • Power BI • Alteryx • BI Tool Migration"
              },
              {
                title: "Automation & Optimization",
                items: "Workflow Automation • Process Optimization • System Integration"
              },
              {
                title: "AI & Machine Learning",
                items: "Predictive Modeling • AI Systems • ML Pipelines"
              },
              {
                title: "Strategic Advisory",
                items: "Licensing Strategy • Audit Analytics • Cloud Governance"
              }
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition"
              >
                <p className="font-semibold mb-3">
                  {tech.title}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tech.items}
                </p>
              </div>
            ))}

          </div>
        </section>


        {/* Our Approach */}
        <section className="mb-32 bg-white p-16 rounded-3xl border border-gray-100 shadow-sm">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Our Approach
          </h2>

          <div className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed text-center">
            <p className="mb-6">
              Successful technology transformation begins with clarity.
              Every engagement starts with a deep understanding of business
              objectives, system constraints and long-term growth strategy.
            </p>

            <p>
              From advisory to execution, we prioritize architectural integrity,
              scalability and measurable business outcomes.
            </p>
          </div>
        </section>


        {/* Founder Perspective */}
        <section className="mb-32 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Founder Perspective
          </h2>

          <div className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
            <p className="mb-6">
              With over 10+ years of hands-on experience in cloud engineering,
              data platforms and analytics transformation, we bring execution
              excellence combined with strategic foresight.
            </p>

            <p>
              Every engagement is built around scalability, clarity and
              long-term architectural integrity — ensuring technology becomes
              a growth multiplier, not a constraint.
            </p>
          </div>
        </section>


        {/* Premium CTA */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white p-16 rounded-3xl shadow-lg">
          <h3 className="text-3xl font-bold mb-6">
            Let’s Build Intelligent Systems Together
          </h3>

          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether modernizing infrastructure, building data platforms or
            implementing AI systems — we deliver scalable, future-ready solutions.
          </p>

          <a
            href="/contact"
            className="bg-white text-blue-700 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Schedule a Consultation
          </a>
        </section>

      </div>
    </main>
  );
}
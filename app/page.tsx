import FadeIn from "./components/FadeIn";
import Counter from "./components/Counter";
import TechStrip from "./components/TechStrip";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* HERO */}
      <FadeIn>
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white py-36 px-6">
          <div className="max-w-5xl mx-auto text-center">

            <div className="mb-6 inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
              Cloud • Data • AI Consulting
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8 tracking-tight">
              Engineering Intelligent Systems for
              <span className="text-blue-600"> Scalable Growth</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              We partner with startups and enterprises to design,
              modernize and scale cloud-native architectures,
              data platforms and AI-driven solutions.
            </p>

<div className="flex flex-col items-center gap-6">

  {/* Buttons Row */}
  <div className="flex justify-center gap-6 flex-wrap">
    <a
      href="/contact"
      className="btn-premium bg-blue-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 shadow-lg transition"
    >
      Schedule a 30-Minute Strategy Call
    </a>

    <a
      href="/services"
      className="border border-gray-300 px-10 py-4 rounded-xl text-lg hover:bg-gray-100 transition"
    >
      Explore Services
    </a>
  </div>

  {/* Subtext */}
  <p className="text-sm text-gray-400">
    No sales pitch. Just technical clarity.
  </p>

</div>
</div>
        </section>
      </FadeIn>
      <TechStrip />


      {/* SERVICES */}
      <section className="py-28 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">

          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">
              Our <span className="text-blue-600">Expertise</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: "☁",
                title: "Cloud Consulting",
                desc: "Cloud architecture design, migrations, cost optimization and secure scalable infrastructure."
              },
              {
                icon: "📊",
                title: "Data Engineering",
                desc: "Modern data pipelines, warehousing and analytics platforms enabling real-time insights."
              },
              {
                icon: "🤖",
                title: "AI & Machine Learning",
                desc: "Predictive systems, automation workflows and AI-driven intelligence for operations."
              }
            ].map((service, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-lg mb-6 text-xl">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.desc}
                  </p>

                  <a
                    href="/services"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Learn More →
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
<section className="py-32 px-6 bg-white border-t border-gray-100">
  <div className="max-w-6xl mx-auto">

    {/* Section Header */}
    <div className="text-center mb-20">
      <h2 className="text-4xl font-bold tracking-tight mb-6">
        How We <span className="text-blue-600">Deliver Results</span>
      </h2>

      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        A structured, engineering-first approach designed to reduce risk,
        accelerate execution and build systems that scale.
      </p>
    </div>

    {/* Process Steps */}
    <div className="grid md:grid-cols-3 gap-12">

      {/* Step 1 */}
      <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
        <div className="text-5xl font-bold text-blue-600 mb-6">
          01
        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Assess & Architect
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6">
          We evaluate your current infrastructure, data workflows and
          system bottlenecks to design a future-ready architecture aligned
          with your business objectives.
        </p>

        <ul className="space-y-2 text-gray-600 text-sm">
          <li>• Cloud & infrastructure audit</li>
          <li>• Data platform review</li>
          <li>• Cost & performance analysis</li>
          <li>• Architecture blueprint</li>
        </ul>
      </div>

      {/* Step 2 */}
      <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
        <div className="text-5xl font-bold text-blue-600 mb-6">
          02
        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Design & Build
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6">
          We implement scalable cloud-native systems, modern data pipelines
          and AI-driven automation designed for performance, reliability
          and long-term flexibility.
        </p>

        <ul className="space-y-2 text-gray-600 text-sm">
          <li>• Cloud-native architecture</li>
          <li>• Modern data engineering</li>
          <li>• AI & ML integration</li>
          <li>• Infrastructure automation</li>
        </ul>
      </div>

      {/* Step 3 */}
      <div className="bg-gray-50 p-12 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
        <div className="text-5xl font-bold text-blue-600 mb-6">
          03
        </div>

        <h3 className="text-2xl font-semibold mb-4">
          Optimize & Scale
        </h3>

        <p className="text-gray-600 leading-relaxed mb-6">
          We continuously monitor, optimize and refine systems to ensure
          predictable performance, cost control and sustained scalability
          as your business grows.
        </p>

        <ul className="space-y-2 text-gray-600 text-sm">
          <li>• Performance tuning</li>
          <li>• Cost governance</li>
          <li>• Security hardening</li>
          <li>• Long-term scalability planning</li>
        </ul>
      </div>

    </div>

  </div>
</section>

      {/* WHY US */}
      <section className="py-28 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">

          <FadeIn>
            <h2 className="text-4xl font-bold mb-16 tracking-tight">
              Why <span className="text-blue-600">Partner With Us</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Deep Technical Expertise",
                desc: "Proven experience in cloud-native systems, distributed architecture and advanced analytics."
              },
              {
                title: "Business-Driven Solutions",
                desc: "Every solution is aligned with measurable business impact and long-term value creation."
              },
              {
                title: "Scalable & Future-Ready",
                desc: "Systems built for performance, flexibility and sustained innovation."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

{/* FOUNDER CREDIBILITY */}
<section className="py-32 px-6 bg-gray-50 border-t border-gray-100">
  <div className="max-w-5xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-8 tracking-tight">
      Built by an Engineer , focused on Outcomes.
    </h2>

    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-16">
      With over a decade of hands-on engineering experience across cloud-native
      systems, modern data platforms and AI-driven architectures, we focus on
      building scalable, cost-efficient systems designed for long-term growth.
    </p>

    <div className="grid md:grid-cols-3 gap-10 text-left">

      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="font-semibold mb-3 text-blue-600">
          10+ Years Engineering Experience
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Deep expertise in distributed systems, cloud-native architecture
          and performance optimization.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="font-semibold mb-3 text-blue-600">
          Multi-Industry Exposure
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Experience across SaaS, FinTech, E-commerce and enterprise
          modernization initiatives.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h3 className="font-semibold mb-3 text-blue-600">
          Architecture-First Approach
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Solutions designed for scalability, reliability and measurable
          business impact — not short-term fixes.
        </p>
      </div>

    </div>

  </div>
</section>
   
{/* TESTIMONIALS */}
<section className="py-32 px-6 bg-white border-t border-gray-100">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-6 tracking-tight">
      What <span className="text-blue-600">Clients Value</span>
    </h2>

    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-20">
      Trusted by technology leaders to deliver scalable architecture,
      modern data platforms and intelligent systems.
    </p>

    <div className="grid md:grid-cols-3 gap-12">

      {/* Testimonial 1 */}
      <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
        <p className="text-gray-700 leading-relaxed mb-8 text-lg">
          “Delivered a scalable cloud architecture that improved system
          performance by over 30% while reducing infrastructure costs.
          The execution was structured, precise and forward-looking.”
        </p>

        <div className="text-sm text-gray-500">
          CTO <span className="text-gray-400">• SaaS Company</span>
        </div>
      </div>


      {/* Testimonial 2 */}
      <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
        <p className="text-gray-700 leading-relaxed mb-8 text-lg">
          “Strong technical leadership combined with clear business
          understanding. Modernized our data platform and significantly
          improved reporting reliability.”
        </p>

        <div className="text-sm text-gray-500">
          Head of Engineering <span className="text-gray-400">• FinTech</span>
        </div>
      </div>


      {/* Testimonial 3 */}
      <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
        <p className="text-gray-700 leading-relaxed mb-8 text-lg">
          “Professional execution, clean architecture and long-term
          scalability thinking. The solutions were designed for growth,
          not short-term fixes.”
        </p>

        <div className="text-sm text-gray-500">
          Product Director <span className="text-gray-400">• E-Commerce Platform</span>
        </div>
      </div>

    </div>

  </div>
</section>   


{/* CASE STUDIES */}
<section className="py-32 px-6 bg-gray-50 border-t border-gray-100">
  <div className="max-w-6xl mx-auto">

    {/* Section Header */}
    <div className="text-center mb-20">
      <h2 className="text-4xl font-bold tracking-tight mb-6">
        Selected <span className="text-blue-600">Case Studies</span>
      </h2>

      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Real-world engagements delivering measurable impact across
        cloud, data and AI transformation.
      </p>
    </div>


    {/* Featured Case Study */}
    <div className="bg-white p-16 rounded-3xl border border-gray-100 shadow-sm mb-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">

        <div>
          <h3 className="text-2xl font-bold mb-6">
            Cloud Modernization for a Growing SaaS Platform
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            A rapidly scaling SaaS company faced infrastructure instability
            and rising cloud costs. We redesigned their cloud architecture,
            implemented cost governance controls and introduced performance
            monitoring frameworks.
          </p>

          <ul className="space-y-3 text-gray-600">
            <li>• 30% reduction in infrastructure cost</li>
            <li>• 40% improvement in system performance</li>
            <li>• Scalable cloud-native architecture</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-10 rounded-2xl border border-gray-100">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            “The engagement transformed our infrastructure from reactive
            to scalable. We now have predictable costs and performance
            aligned with our growth.”
          </p>

          <p className="text-sm text-gray-500">
            CTO • SaaS Company
          </p>
        </div>

      </div>
    </div>


    {/* Two Snapshot Case Studies */}
    <div className="grid md:grid-cols-2 gap-12">

      {/* Snapshot 1 */}
      <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm">
        <h4 className="text-xl font-semibold mb-4">
          Data Platform Modernization — FinTech
        </h4>

        <p className="text-gray-600 leading-relaxed mb-6">
          Re-architected BigQuery data warehouse and built scalable
          ETL pipelines enabling real-time executive reporting.
        </p>

        <ul className="space-y-2 text-gray-600 text-sm">
          <li>• Reduced reporting latency by 50%</li>
          <li>• Improved data reliability & governance</li>
          <li>• Executive dashboard transformation</li>
        </ul>
      </div>


      {/* Snapshot 2 */}
      <div className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm">
        <h4 className="text-xl font-semibold mb-4">
          AI-Driven Process Automation — E-Commerce
        </h4>

        <p className="text-gray-600 leading-relaxed mb-6">
          Implemented predictive modeling and workflow automation
          to optimize operational decision-making.
        </p>

        <ul className="space-y-2 text-gray-600 text-sm">
          <li>• 25% improvement in forecasting accuracy</li>
          <li>• Reduced manual workload across teams</li>
          <li>• Automated operational insights</li>
        </ul>
      </div>

    </div>

  </div>
</section>

{/* IMPACT SECTION */}
<section className="py-28 px-6 bg-gray-50 border-t border-gray-100">
  <div className="max-w-6xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-6 tracking-tight">
      Impact & Experience
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-16">
      Delivering reliable, scalable and performance-driven solutions
      across cloud, data and AI ecosystems.
    </p>

    <div className="grid md:grid-cols-4 gap-8">

      {[
  { value: 10, suffix: "+", label: "Years of Engineering Experience" },
  { value: 20, suffix: "+", label: "Projects Delivered" },
  { value: 4, suffix: "+", label: "Industries Served" },
  { value: 100, suffix: "%", label: "Client-Focused Approach" },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
        >
          <h3 className="text-4xl font-bold text-blue-600 mb-3">
          <Counter value={item.value} suffix={item.suffix} />
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.label}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center py-24 px-6">
        <div className="max-w-4xl mx-auto">
<h2 className="text-4xl font-bold mb-6 tracking-tight">
  Schedule a 30-Minute Architecture Strategy Call
</h2>

<p className="mb-6 text-lg text-blue-100 max-w-2xl mx-auto">
  Discuss your cloud, data or AI architecture challenges.
  Walk away with actionable technical clarity.
</p>

<p className="mb-10 text-sm text-blue-200">
  No obligation. No generic sales pitch.
</p>

<a
  href="/contact"
  className="btn-premium bg-white text-blue-600 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 shadow-lg"
>
  Book Your Strategy Call
</a>
        </div>
      </section>

    </main>
  );
}
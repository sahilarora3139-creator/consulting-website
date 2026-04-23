"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cloud,
  Database,
  Brain,
  BarChart3,
  Shield,
  ChevronDown,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const cloudSubcategories = [
  {
    id: "cloud-assessment",
    title: "Cloud Assessment",
    icon: "🔍",
    intro:
      "Build a secure and scalable cloud foundation from the start. At TechShield Analytics, we take a deep dive into your cloud environment to evaluate its security posture, performance, and operational risks. Our approach focuses on identifying hidden vulnerabilities, testing system resilience, and ensuring your infrastructure is well-protected against evolving cybersecurity threats.",
    keyOutcomes: [
      "Identify critical vulnerabilities, misconfigurations, and risk-prone areas across your cloud infrastructure",
      "Analyze network traffic and system behavior to detect unusual patterns or potential breach indicators",
      "Develop a structured, proactive security strategy to strengthen defenses and prevent future cyber attacks",
    ],
    services: [
      {
        icon: "🔍",
        title: "Cloud Readiness Assessment",
        points: ["Evaluate infrastructure and applications", "Identify migration feasibility"],
      },
      {
        icon: "📊",
        title: "Cost & ROI Analysis",
        points: ["Estimate cloud costs", "Identify cost-saving opportunities"],
      },
      {
        icon: "⚙️",
        title: "Application Assessment",
        points: ["Classify applications", "Decide: Lift & Shift vs Re-architect"],
      },
      {
        icon: "🔐",
        title: "Security & Compliance Assessment",
        points: ["Identify vulnerabilities", "Compliance gap analysis"],
      },
      {
        icon: "📈",
        title: "Performance & Scalability Review",
        points: ["Analyze system performance", "Identify optimization areas"],
      },
    ],
    whyUs: [
      "Data-driven assessment approach with actionable insights",
      "Strong expertise across cloud, security, audit, and analytics",
      "Business-focused recommendations aligned with ROI",
      "End-to-end support from assessment to execution",
    ],
    faqs: [
      {
        q: "How long does the assessment take?",
        a: "Typically depends on environment size and complexity.",
      },
      {
        q: "What tools do you use?",
        a: "We use industry-standard cloud monitoring, security, and assessment frameworks tailored to client environments.",
      },
      {
        q: "Do you provide cost estimates?",
        a: "Yes, we provide detailed cost and ROI analysis.",
      },
      {
        q: "Can you help after assessment?",
        a: "Yes, we support migration, optimization, and ongoing cloud operations.",
      },
    ],
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration",
    icon: "🚀",
    intro:
      "Execute seamless, secure, and scalable cloud migrations with zero compromise on performance. At TechShield Analytics, we design and implement end-to-end cloud migration strategies tailored to your business architecture. From initial assessment and workload mapping to execution and post-migration optimization, we ensure your transition is efficient, secure, and aligned with industry best practices.",
    keyOutcomes: [
      "Perform in-depth workload assessment, dependency mapping, and migration planning",
      "Enable multi-cloud and hybrid cloud architectures for flexibility and resilience",
      "Implement strategies to avoid vendor lock-in using containerization and open standards",
      "Ensure secure data transfer, compliance adherence, and minimal downtime during migration",
      "Centralize infrastructure management with unified monitoring, automation, and performance optimization",
    ],
    services: [
      {
        icon: "🔍",
        title: "Cloud Readiness Assessment",
        points: ["Analyze infrastructure, applications, and dependencies", "Identify risks, gaps, and cloud adoption opportunities"],
      },
      {
        icon: "🧭",
        title: "Migration Strategy & Planning",
        points: ["Choose lift & shift, re-platform, or re-architect", "Build a structured migration roadmap"],
      },
      {
        icon: "⚙️",
        title: "Application Migration",
        points: ["Migrate legacy systems to cloud-ready architectures", "Ensure minimal downtime"],
      },
      {
        icon: "💾",
        title: "Data Migration",
        points: ["Encrypted and validated data transfer", "Maintain data integrity and compliance"],
      },
      {
        icon: "🏗️",
        title: "Infrastructure Migration",
        points: ["Migrate servers, networks, and workloads", "Ensure scalability and cloud-native readiness"],
      },
      {
        icon: "📈",
        title: "Post-Migration Optimization",
        points: ["Optimize cloud usage and reduce costs", "Continuous monitoring of performance and security"],
      },
    ],
    whyUs: [
      "Certified cloud experts with hands-on migration experience",
      "Security-first and compliance-driven methodology",
      "Minimal downtime execution strategy",
      "Cost-efficient and performance-focused migrations",
      "End-to-end support from planning to post-migration optimization",
    ],
    faqs: [
      {
        q: "How long does a cloud migration take?",
        a: "It depends on the complexity of your environment, typically ranging from a few weeks to a few months.",
      },
      {
        q: "Is my data secure during migration?",
        a: "Yes, we use encrypted transfer methods and strict security controls to ensure data protection.",
      },
      {
        q: "What are the costs involved?",
        a: "Costs vary based on infrastructure size and complexity. We provide detailed estimates during assessment.",
      },
      {
        q: "Will there be downtime?",
        a: "We follow a minimal-to-zero downtime approach wherever possible.",
      },
    ],
  },
  {
    id: "cloud-optimization",
    title: "Cloud Optimization",
    icon: "⚡",
    intro:
      "Maximize performance, minimize cost, and ensure continuous efficiency across your cloud ecosystem. At TechShield Analytics, we implement advanced cloud optimization strategies that help businesses achieve the right balance between cost efficiency, performance, and security.",
    keyOutcomes: [
      "Optimize resource allocation and workload distribution to improve performance and reduce costs",
      "Enhance scalability and reliability through intelligent workload management across multi-cloud environments",
      "Identify security gaps, misconfigurations, and compliance risks in your cloud setup",
      "Re-architect and fine-tune infrastructure for better efficiency and stability",
      "Implement continuous monitoring, automation, and cost governance for long-term optimization",
    ],
    services: [
      {
        icon: "💰",
        title: "Cost Optimization (FinOps)",
        points: ["Identify unused and underutilized resources", "Right-size cloud instances based on usage", "Leverage reserved instances and savings plans"],
      },
      {
        icon: "⚡",
        title: "Performance Optimization",
        points: ["Improve application performance and latency", "Configure auto-scaling for dynamic workloads"],
      },
      {
        icon: "🧠",
        title: "Resource Optimization",
        points: ["CPU and memory tuning", "Storage optimization strategies", "Database performance improvements"],
      },
      {
        icon: "🔐",
        title: "Cloud Security Optimization",
        points: ["Identity and access management optimization", "Continuous compliance monitoring"],
      },
      {
        icon: "🏗️",
        title: "Architecture Optimization",
        points: ["Transition to cloud-native architecture", "Adopt microservices and container-based models"],
      },
    ],
    whyUs: [
      "Data-driven cloud optimization approach",
      "Expertise across multi-cloud environments (AWS, Azure, GCP)",
      "Continuous monitoring and transparent reporting",
      "Strong focus on measurable ROI and cost efficiency",
      "Built-in governance, security, and compliance alignment",
    ],
    faqs: [
      {
        q: "Why is cloud optimization important?",
        a: "It helps reduce unnecessary costs, improves performance, and ensures your cloud environment remains efficient and scalable.",
      },
      {
        q: "Do you provide continuous optimization?",
        a: "Yes, we offer ongoing monitoring and optimization services.",
      },
      {
        q: "Can you optimize existing cloud setups?",
        a: "Yes, we work on both new and existing cloud infrastructures.",
      },
      {
        q: "Which cloud platforms do you support?",
        a: "We support AWS, Microsoft Azure, and Google Cloud Platform (GCP).",
      },
    ],
  },
  {
    id: "multi-hybrid-cloud",
    title: "Multi & Hybrid Cloud",
    icon: "🔷",
    intro:
      "Enable seamless integration, flexibility, and resilience across your cloud ecosystem. At TechShield Analytics, we help organizations design and manage multi-cloud and hybrid cloud environments that balance performance, cost, and security.",
    keyOutcomes: [
      "Enable seamless integration between public, private, and on-premise environments",
      "Distribute workloads across multiple cloud platforms for improved performance and resilience",
      "Ensure high availability through failover and redundancy mechanisms",
      "Optimize resource utilization to balance cost and efficiency",
      "Implement centralized monitoring and unified infrastructure management",
    ],
    services: [
      {
        icon: "🧭",
        title: "Multi-Cloud Strategy & Consulting",
        points: ["Cloud platform selection and vendor comparison", "Workload distribution strategy across multiple clouds"],
      },
      {
        icon: "🏗️",
        title: "Hybrid Cloud Architecture Design",
        points: ["Integration of on-premise infrastructure with cloud platforms", "Secure connectivity using VPNs and private links"],
      },
      {
        icon: "🔗",
        title: "Cloud Integration & Orchestration",
        points: ["Cross-platform integration and orchestration", "API-based connectivity and automation"],
      },
      {
        icon: "🚀",
        title: "Workload Portability",
        points: ["Seamless workload migration between cloud platforms", "Containerization using Docker and Kubernetes"],
      },
      {
        icon: "💾",
        title: "Data Synchronization & Management",
        points: ["Real-time data synchronization", "Data governance, integrity, and consistency management"],
      },
      {
        icon: "🔐",
        title: "Security & Compliance",
        points: ["Centralized security policies and access controls", "Compliance alignment with industry standards"],
      },
    ],
    whyUs: [
      "Deep expertise in multi-cloud and hybrid cloud ecosystems",
      "Strong architecture design and integration capabilities",
      "Security-first approach across all cloud environments",
      "Balanced focus on cost optimization and performance",
      "End-to-end lifecycle support from strategy to management",
    ],
    faqs: [
      {
        q: "What is the difference between multi-cloud and hybrid cloud?",
        a: "Multi-cloud uses multiple public cloud providers, while hybrid cloud combines on-premise infrastructure with cloud environments.",
      },
      {
        q: "Is multi-cloud more expensive?",
        a: "Not necessarily. With proper optimization, it can improve cost efficiency and avoid vendor lock-in.",
      },
      {
        q: "How do you manage security across multiple clouds?",
        a: "We implement centralized security policies, monitoring, and compliance frameworks across all environments.",
      },
      {
        q: "Can we migrate gradually to a multi-cloud setup?",
        a: "Yes, we support phased migration strategies to ensure minimal risk and disruption.",
      },
    ],
  },
  {
    id: "cloud-security",
    title: "Cloud Security",
    icon: "🔐",
    intro:
      "Protect your cloud ecosystem with a security-first, future-ready approach. At TechShield Analytics, we go beyond basic protection to build a resilient security architecture that safeguards your data, applications, and infrastructure.",
    keyOutcomes: [
      "Implement end-to-end security across infrastructure, applications, and data layers",
      "Continuously monitor and detect threats with real-time visibility and analytics",
      "Identify vulnerabilities, misconfigurations, and compliance gaps",
      "Enforce identity, access, and data protection policies",
      "Build a scalable and compliance-ready security framework",
    ],
    services: [
      {
        icon: "🔍",
        title: "Cloud Security Assessment",
        points: ["Identify vulnerabilities and misconfigurations", "Perform risk analysis and gap assessment"],
      },
      {
        icon: "🔐",
        title: "Identity & Access Management (IAM)",
        points: ["Role-based access control (RBAC)", "Least privilege enforcement", "Multi-factor authentication (MFA)"],
      },
      {
        icon: "💾",
        title: "Data Security & Encryption",
        points: ["Encryption at rest and in transit", "Backup and disaster recovery strategies"],
      },
      {
        icon: "🌐",
        title: "Network Security",
        points: ["Firewalls, VPNs, and private network configurations", "Zero Trust architecture implementation"],
      },
      {
        icon: "📜",
        title: "Compliance & Governance",
        points: ["Support for GDPR, ISO, SOC standards", "Policy creation and enforcement"],
      },
      {
        icon: "🚨",
        title: "Threat Detection & Monitoring",
        points: ["Real-time monitoring and alerting", "SIEM integration", "Incident response and mitigation"],
      },
    ],
    whyUs: [
      "Security-first approach across all cloud services",
      "Certified cloud and cybersecurity experts",
      "Continuous monitoring and rapid incident response",
      "Strong compliance and governance expertise",
      "End-to-end cloud protection",
    ],
    faqs: [
      {
        q: "How secure is the cloud?",
        a: "Cloud environments are highly secure when configured and managed correctly with proper controls and monitoring.",
      },
      {
        q: "What is the shared responsibility model?",
        a: "It defines the division of security responsibilities between the cloud provider and the customer.",
      },
      {
        q: "How do you ensure compliance?",
        a: "We implement continuous compliance monitoring and align your environment with industry standards.",
      },
      {
        q: "Do you provide continuous monitoring?",
        a: "Yes, we offer ongoing monitoring and threat detection services.",
      },
    ],
  },
  {
    id: "devsecops",
    title: "DevSecOps",
    icon: "⚙️",
    intro:
      "Integrate security into every stage of your development lifecycle. At TechShield Analytics, we embed security directly into your DevOps processes, ensuring applications are built, tested, and deployed with security at their core.",
    keyOutcomes: [
      "Integrate automated security testing into CI/CD pipelines",
      "Implement secure coding practices and continuous code analysis",
      "Automate compliance checks and policy enforcement",
      "Monitor applications and infrastructure for real-time threats",
      "Enable faster and secure deployments with minimal manual effort",
    ],
    services: [
      {
        icon: "🔄",
        title: "CI/CD Pipeline Setup & Optimization",
        points: ["Jenkins, GitHub Actions, GitLab CI implementation", "Automated build and deployment pipelines"],
      },
      {
        icon: "🔐",
        title: "Security Integration in CI/CD",
        points: ["SAST (Static Application Security Testing)", "DAST (Dynamic Application Security Testing)", "Dependency and vulnerability scanning"],
      },
      {
        icon: "🏗️",
        title: "Infrastructure as Code (IaC) Security",
        points: ["Terraform and CloudFormation security", "Misconfiguration detection and prevention"],
      },
      {
        icon: "📦",
        title: "Container Security",
        points: ["Docker and Kubernetes security", "Container image scanning and hardening"],
      },
      {
        icon: "📊",
        title: "Automated Compliance Checks",
        points: ["Security policies embedded into pipelines", "Continuous compliance validation"],
      },
      {
        icon: "🚨",
        title: "Monitoring & Incident Response",
        points: ["Real-time alerts and monitoring", "Security event tracking and response"],
      },
    ],
    whyUs: [
      "Strong DevOps and security integration expertise",
      "Automation-first approach for faster delivery",
      "Balance between speed, security, and reliability",
      "End-to-end pipeline ownership",
    ],
    faqs: [
      {
        q: "How is DevSecOps different from DevOps?",
        a: "DevSecOps integrates security into every stage of the DevOps lifecycle.",
      },
      {
        q: "Will this slow down development?",
        a: "No, automation ensures security without impacting development speed.",
      },
      {
        q: "What tools do you integrate?",
        a: "We work with industry-standard tools like Jenkins, GitHub, Kubernetes, and more.",
      },
      {
        q: "Is it suitable for small teams?",
        a: "Yes, DevSecOps can be scaled based on team size and requirements.",
      },
    ],
  },
  {
    id: "managed-services",
    title: "Cloud Infrastructure Managed Services",
    icon: "🛠️",
    intro:
      "Ensure reliable, secure, and fully optimized cloud operations—without the operational overhead. At TechShield Analytics, we take complete ownership of your cloud infrastructure management, allowing you to focus on core business growth.",
    keyOutcomes: [
      "Provide 24/7 monitoring, alerting, and incident management for uninterrupted operations",
      "Optimize infrastructure performance, resource utilization, and cost efficiency",
      "Manage cloud security, patching, and compliance to reduce risks and vulnerabilities",
      "Automate routine operations and deployments to improve efficiency and reliability",
      "Ensure high availability, backup, and disaster recovery for business continuity",
    ],
    services: [
      {
        icon: "🏗️",
        title: "Infrastructure Design & Architecture",
        points: ["Scalable architecture design", "High availability & fault tolerance"],
      },
      {
        icon: "⚙️",
        title: "Infrastructure Setup & Deployment",
        points: ["Virtual machines, containers, serverless", "Network setup (VPC, subnets)"],
      },
      {
        icon: "📄",
        title: "Infrastructure as Code (IaC)",
        points: ["Terraform, CloudFormation", "Automated infrastructure provisioning"],
      },
      {
        icon: "🌐",
        title: "Networking & Connectivity",
        points: ["Secure network design", "VPN, private connections"],
      },
      {
        icon: "💾",
        title: "Storage & Database Setup",
        points: ["Scalable storage solutions", "Database deployment & optimization"],
      },
      {
        icon: "🔄",
        title: "Backup & Disaster Recovery",
        points: ["Automated backups", "Business continuity planning"],
      },
    ],
    whyUs: [
      "Strong cloud architecture expertise",
      "Automation-first deployment",
      "Security & compliance integrated",
      "Scalable and future-ready designs",
      "End-to-end support",
    ],
    faqs: [
      {
        q: "What does managed services include?",
        a: "It covers monitoring, incident management, patching, security, cost optimization, and ongoing support.",
      },
      {
        q: "Do you offer 24/7 support?",
        a: "Yes, we provide round-the-clock monitoring and incident response.",
      },
      {
        q: "Can you manage our existing cloud setup?",
        a: "Yes, we can take over management of your existing cloud infrastructure regardless of its current state.",
      },
      {
        q: "Which platforms do you manage?",
        a: "We manage environments on AWS, Microsoft Azure, and Google Cloud Platform.",
      },
    ],
  },
  {
    id: "container-serverless",
    title: "Container & Serverless Computing",
    icon: "📦",
    intro:
      "Build scalable, efficient, and future-ready applications with modern cloud-native architectures. At TechShield Analytics, we help organizations adopt containerization and serverless computing to accelerate development, improve scalability, and reduce infrastructure overhead.",
    keyOutcomes: [
      "Design and deploy containerized applications using orchestration platforms for scalability and portability",
      "Implement serverless architectures to eliminate infrastructure management and optimize costs",
      "Enable faster development cycles with automated deployments and CI/CD integration",
      "Ensure high availability, fault tolerance, and efficient resource utilization",
      "Strengthen security and governance across container and serverless environments",
    ],
    services: [
      {
        icon: "📦",
        title: "Containerization Services",
        points: ["Application containerization (Docker)", "Legacy app modernization"],
      },
      {
        icon: "☸️",
        title: "Kubernetes Implementation",
        points: ["Cluster setup & management", "Scaling & orchestration"],
      },
      {
        icon: "⚡",
        title: "Serverless Architecture Development",
        points: ["AWS Lambda / Azure Functions", "Event-driven applications"],
      },
      {
        icon: "🔄",
        title: "CI/CD for Containers & Serverless",
        points: ["Automated deployment pipelines"],
      },
      {
        icon: "📊",
        title: "Monitoring & Logging",
        points: ["Container monitoring", "Serverless performance tracking"],
      },
      {
        icon: "🔐",
        title: "Security for Containers & Serverless",
        points: ["Image scanning", "Runtime protection"],
      },
    ],
    whyUs: [
      "Expertise in Docker, Kubernetes, and serverless frameworks",
      "Cloud-native architecture design capabilities",
      "Security and governance embedded from the start",
      "Performance-optimized deployment strategies",
      "End-to-end lifecycle management",
    ],
    faqs: [
      {
        q: "Containers vs serverless — which is better?",
        a: "Each suits different workloads. We help you choose the right approach based on your requirements.",
      },
      {
        q: "Is serverless cost-effective?",
        a: "Yes, serverless eliminates idle resource costs and charges only for actual usage.",
      },
      {
        q: "How secure are containers?",
        a: "With proper image scanning, runtime protection, and network policies, containers can be highly secure.",
      },
      {
        q: "Can legacy apps be containerized?",
        a: "Yes, we specialize in modernizing legacy applications through containerization.",
      },
    ],
  },
  {
    id: "business-continuity",
    title: "Business Continuity Solutions",
    icon: "🛡️",
    intro:
      "Ensure uninterrupted operations with a resilient and disaster-ready cloud strategy. At TechShield Analytics, we design and implement cloud-based business continuity solutions that keep your critical systems running—even during disruptions.",
    keyOutcomes: [
      "Design and implement disaster recovery (DR) strategies with automated failover mechanisms",
      "Ensure regular data backups, replication, and secure storage across multiple regions",
      "Minimize downtime with high-availability architectures and redundancy planning",
      "Enable rapid recovery of applications and infrastructure with predefined recovery objectives (RTO/RPO)",
      "Continuously test and optimize continuity plans to ensure readiness during real-world scenarios",
    ],
    services: [
      {
        icon: "📋",
        title: "Business Continuity Planning (BCP)",
        points: ["Risk assessment", "Business impact analysis (BIA)", "Continuity strategy design"],
      },
      {
        icon: "🔄",
        title: "Disaster Recovery (DR) Solutions",
        points: ["DR architecture design", "Failover & failback mechanisms"],
      },
      {
        icon: "💾",
        title: "Backup & Data Protection",
        points: ["Automated backups", "Data replication"],
      },
      {
        icon: "🌐",
        title: "High Availability Setup",
        points: ["Multi-region deployment", "Load balancing"],
      },
      {
        icon: "🧪",
        title: "DR Testing & Simulation",
        points: ["Regular testing", "Scenario-based simulations"],
      },
      {
        icon: "🚨",
        title: "Monitoring & Incident Response",
        points: ["Real-time alerts", "Rapid response mechanisms"],
      },
    ],
    whyUs: [
      "Strong risk & audit expertise",
      "Cloud-native DR solutions",
      "Automated recovery mechanisms",
      "Continuous testing & validation",
      "End-to-end resilience strategy",
    ],
    faqs: [
      {
        q: "What is RTO and RPO?",
        a: "RTO (Recovery Time Objective) is how fast you recover; RPO (Recovery Point Objective) is how much data you can afford to lose.",
      },
      {
        q: "How often should DR plans be tested?",
        a: "We recommend at least quarterly testing with scenario-based simulations.",
      },
      {
        q: "Do you support multi-region setups?",
        a: "Yes, we design multi-region architectures to ensure geographic redundancy.",
      },
      {
        q: "What if we already have a DR plan?",
        a: "We review and improve existing plans, filling gaps and modernizing outdated approaches.",
      },
    ],
  },
];

const pillars = [
  {
    id: "cloud",
    icon: Cloud,
    label: "Cloud & Digital Transformation",
    color: "blue",
    active: true,
    intro:
      "Cloud transformation is more than a technology upgrade—it's a complete shift in how your business operates and grows. At TechShield Analytics, we help organizations reimagine their cloud strategy by aligning technology, processes, and people into a unified, secure, and scalable ecosystem. Our focus is on improving performance, reducing operational friction, and strengthening resilience against modern cyber risks.\n\nFrom initial discovery and planning to migration, optimization, and ongoing management, we stay involved at every stage of your journey. Our team ensures your cloud environment remains secure, efficient, and adaptable, while supporting the modernization and reliable hosting of your mission-critical applications.",
    subcategories: cloudSubcategories,
  },
  {
    id: "data",
    icon: Database,
    label: "SaaS Solutions",
    color: "purple",
    active: false,
    intro: "Coming soon.",
    subcategories: [],
  },
  {
    id: "ai",
    icon: Brain,
    label: "Audit , Risk & Cyber Security",
    color: "indigo",
    active: false,
    intro: "Coming soon.",
    subcategories: [],
  },
  {
    id: "bi",
    icon: BarChart3,
    label: "Data Analytics & Business Intelligence",
    color: "cyan",
    active: false,
    intro: "Coming soon.",
    subcategories: [],
  },
  {
    id: "security",
    icon: Shield,
    label: "Artificial Intelligence",
    color: "rose",
    active: false,
    intro: "Coming soon.",
    subcategories: [],
  },
];

// ─── FAQ ACCORDION ────────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border border-white/10 rounded-xl overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between px-5 py-4 bg-white/5 hover:bg-white/8 transition">
        <span className="text-sm font-medium text-gray-200">{q}</span>
        <ChevronDown
          size={16}
          className={`text-blue-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="px-5 py-4 text-sm text-gray-400 border-t border-white/10"
          >
            {a}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── SUBCATEGORY DETAIL ───────────────────────────────────────────────────────

function SubcategoryDetail({ sub }: { sub: (typeof cloudSubcategories)[0] }) {
  return (
    <motion.div
      key={sub.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35 }}
      className="space-y-10"
    >
      {/* Intro */}
      <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{sub.icon}</span>
          <h3 className="text-2xl font-bold text-white">{sub.title}</h3>
        </div>
        <p className="text-gray-300 leading-relaxed">{sub.intro}</p>
      </div>

      {/* Key Outcomes */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-blue-400 rounded-full inline-block" />
          Key Outcomes
        </h4>
        <div className="grid sm:grid-cols-2 gap-3">
          {sub.keyOutcomes.map((o, i) => (
            <div key={i} className="flex gap-3 bg-white/5 rounded-xl p-4 border border-white/8">
              <CheckCircle2 size={18} className="text-blue-400 mt-0.5 shrink-0" />
              <p className="text-gray-300 text-sm">{o}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-purple-400 rounded-full inline-block" />
          Our Services
        </h4>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {sub.services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="bg-white/5 border border-white/10 rounded-xl p-5"
            >
              <span className="text-2xl mb-3 block">{s.icon}</span>
              <h5 className="font-semibold text-white text-sm mb-2">{s.title}</h5>
              <ul className="space-y-1">
                {s.points.map((p, j) => (
                  <li key={j} className="text-gray-400 text-xs flex gap-2 items-start">
                    <ArrowRight size={12} className="mt-0.5 text-blue-400 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Us */}
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-cyan-400 rounded-full inline-block" />
          Why Choose TechShield Analytics
        </h4>
        <div className="grid sm:grid-cols-2 gap-3">
          {sub.whyUs.map((w, i) => (
            <div key={i} className="flex gap-2 items-start">
              <CheckCircle2 size={16} className="text-cyan-400 mt-0.5 shrink-0" />
              <span className="text-gray-300 text-sm">{w}</span>
            </div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div>
        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-indigo-400 rounded-full inline-block" />
          Frequently Asked Questions
        </h4>
        <div className="space-y-3">
          {sub.faqs.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── PILLAR CONTENT ───────────────────────────────────────────────────────────

function PillarContent({ pillar }: { pillar: (typeof pillars)[0] }) {
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const selectedSub = pillar.subcategories.find((s) => s.id === activeSub);

  if (!pillar.active) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="text-6xl mb-6 opacity-30">🚧</div>
        <h3 className="text-2xl font-semibold text-white mb-3">Coming Soon</h3>
        <p className="text-gray-500 max-w-md">
          This pillar is currently under development. Check back soon for detailed services and capabilities.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Pillar intro */}
      <div className="max-w-3xl">
        {pillar.intro.split("\n\n").map((para, i) => (
          <p key={i} className={`text-gray-400 leading-relaxed text-lg ${i > 0 ? "mt-4" : ""}`}>
            {para}
          </p>
        ))}
      </div>

      {/* Subcategory buttons */}
      <div>
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Select a Service Area</p>
        <div className="flex flex-wrap gap-3">
          {pillar.subcategories.map((sub) => (
            <button
              key={sub.id}
              onClick={() => setActiveSub(activeSub === sub.id ? null : sub.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                activeSub === sub.id
                  ? "bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-500/20"
                  : "bg-white/5 border-white/10 text-gray-300 hover:border-blue-400/50 hover:text-white"
              }`}
            >
              <span>{sub.icon}</span>
              <span>{sub.title}</span>
              <ChevronRight
                size={14}
                className={`transition-transform duration-200 ${activeSub === sub.id ? "rotate-90" : ""}`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Subcategory detail */}
      <AnimatePresence mode="wait">
        {selectedSub && (
          <SubcategoryDetail key={selectedSub.id} sub={selectedSub} />
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  const [activePillar, setActivePillar] = useState<string>("cloud");
  const currentPillar = pillars.find((p) => p.id === activePillar)!;

  return (
    <main className="relative overflow-hidden bg-gray-950 text-white min-h-screen">

      {/* Floating Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-blue-600/20 blur-[160px] rounded-full -top-40 -left-40" />
        <div className="absolute w-[700px] h-[700px] bg-purple-600/20 blur-[150px] rounded-full top-1/2 right-0" />
        <div className="absolute w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full bottom-0 left-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 space-y-16">

        {/* HEADER */}
        <section className="max-w-3xl">
          <p className="text-blue-400 text-sm uppercase tracking-widest mb-4 font-medium">
            What We Do
          </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Platform <span className="text-blue-400">Capabilities</span>
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed">
            TechShield Analytics provides enterprise-grade cloud, data and AI systems
            designed to scale modern data platforms and intelligent decision systems.
          </p>
        </section>

        {/* PILLAR TABS */}
        <section>
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-5">Our Five Pillars</p>
          <div className="flex flex-wrap gap-3">
            {pillars.map((p) => {
              const Icon = p.icon;
              const isActive = activePillar === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActivePillar(p.id)}
                  className={`flex items-center gap-3 px-5 py-3 rounded-2xl border text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-blue-600/40 to-purple-600/40 border-blue-400/50 text-white shadow-lg shadow-blue-500/10"
                      : p.active
                      ? "bg-white/5 border-white/10 text-gray-300 hover:border-white/20 hover:text-white"
                      : "bg-white/3 border-white/6 text-gray-600 cursor-pointer hover:border-white/10 hover:text-gray-500"
                  }`}
                >
                  <Icon
                    size={18}
                    className={isActive ? "text-blue-400" : p.active ? "text-gray-400" : "text-gray-700"}
                  />
                  <span>{p.label}</span>
                  {!p.active && (
                    <span className="text-[10px] bg-white/10 text-gray-500 px-2 py-0.5 rounded-full">
                      Soon
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        {/* PILLAR DIVIDER */}
        <div className="h-px bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-transparent" />

        {/* PILLAR CONTENT */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            {(() => {
              const Icon = currentPillar.icon;
              return <Icon size={28} className="text-blue-400" />;
            })()}
            <h2 className="text-2xl font-bold text-white">{currentPillar.label}</h2>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePillar}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <PillarContent pillar={currentPillar} />
            </motion.div>
          </AnimatePresence>
        </section>

        {/* CTA */}
        <section className="pt-10">
          <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 border border-white/10 p-16 rounded-3xl backdrop-blur-xl text-center">
            <h3 className="text-3xl font-semibold mb-4">Build Intelligent Systems</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              From cloud architecture to AI-driven platforms, TechShield Analytics helps
              organizations design modern technology ecosystems.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 transition px-10 py-4 rounded-xl font-semibold">
              Schedule Consultation
            </button>
          </div>
        </section>

      </div>
    </main>
  );
}
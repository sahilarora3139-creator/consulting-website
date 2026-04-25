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
  Layers,
} from "lucide-react";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type Service = { icon: string; title: string; points: string[] };
type Faq = { q: string; a: string };
type SubSub = {
  id: string;
  title: string;
  icon: string;
  intro: string;
  items: { icon: string; title: string; points: string[] }[];
  positioningLine?: string;
};
type Subcategory = {
  id: string;
  title: string;
  icon: string;
  intro: string;
  keyOutcomes: string[];
  services: Service[];
  whyUs: string[];
  faqs: Faq[];
  approach?: { step: string; desc: string }[];
  deliverables?: string[];
  subSubs?: SubSub[];
};

// ─── CLOUD DATA ───────────────────────────────────────────────────────────────

const cloudSubcategories: Subcategory[] = [
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
      { icon: "🔍", title: "Cloud Readiness Assessment", points: ["Evaluate infrastructure and applications", "Identify migration feasibility"] },
      { icon: "📊", title: "Cost & ROI Analysis", points: ["Estimate cloud costs", "Identify cost-saving opportunities"] },
      { icon: "⚙️", title: "Application Assessment", points: ["Classify applications", "Decide: Lift & Shift vs Re-architect"] },
      { icon: "🔐", title: "Security & Compliance Assessment", points: ["Identify vulnerabilities", "Compliance gap analysis"] },
      { icon: "📈", title: "Performance & Scalability Review", points: ["Analyze system performance", "Identify optimization areas"] },
    ],
    whyUs: [
      "Data-driven assessment approach with actionable insights",
      "Strong expertise across cloud, security, audit, and analytics",
      "Business-focused recommendations aligned with ROI",
      "End-to-end support from assessment to execution",
    ],
    faqs: [
      { q: "How long does the assessment take?", a: "Typically depends on environment size and complexity." },
      { q: "What tools do you use?", a: "We use industry-standard cloud monitoring, security, and assessment frameworks tailored to client environments." },
      { q: "Do you provide cost estimates?", a: "Yes, we provide detailed cost and ROI analysis." },
      { q: "Can you help after assessment?", a: "Yes, we support migration, optimization, and ongoing cloud operations." },
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
      { icon: "🔍", title: "Cloud Readiness Assessment", points: ["Analyze infrastructure, applications, and dependencies", "Identify risks, gaps, and cloud adoption opportunities"] },
      { icon: "🧭", title: "Migration Strategy & Planning", points: ["Choose lift & shift, re-platform, or re-architect", "Build a structured migration roadmap"] },
      { icon: "⚙️", title: "Application Migration", points: ["Migrate legacy systems to cloud-ready architectures", "Ensure minimal downtime"] },
      { icon: "💾", title: "Data Migration", points: ["Encrypted and validated data transfer", "Maintain data integrity and compliance"] },
      { icon: "🏗️", title: "Infrastructure Migration", points: ["Migrate servers, networks, and workloads", "Ensure scalability and cloud-native readiness"] },
      { icon: "📈", title: "Post-Migration Optimization", points: ["Optimize cloud usage and reduce costs", "Continuous monitoring of performance and security"] },
    ],
    whyUs: [
      "Certified cloud experts with hands-on migration experience",
      "Security-first and compliance-driven methodology",
      "Minimal downtime execution strategy",
      "Cost-efficient and performance-focused migrations",
      "End-to-end support from planning to post-migration optimization",
    ],
    faqs: [
      { q: "How long does a cloud migration take?", a: "It depends on the complexity of your environment, typically ranging from a few weeks to a few months." },
      { q: "Is my data secure during migration?", a: "Yes, we use encrypted transfer methods and strict security controls to ensure data protection." },
      { q: "What are the costs involved?", a: "Costs vary based on infrastructure size and complexity. We provide detailed estimates during assessment." },
      { q: "Will there be downtime?", a: "We follow a minimal-to-zero downtime approach wherever possible." },
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
      { icon: "💰", title: "Cost Optimization (FinOps)", points: ["Identify unused and underutilized resources", "Right-size cloud instances based on usage", "Leverage reserved instances and savings plans"] },
      { icon: "⚡", title: "Performance Optimization", points: ["Improve application performance and latency", "Configure auto-scaling for dynamic workloads"] },
      { icon: "🧠", title: "Resource Optimization", points: ["CPU and memory tuning", "Storage optimization strategies", "Database performance improvements"] },
      { icon: "🔐", title: "Cloud Security Optimization", points: ["Identity and access management optimization", "Continuous compliance monitoring"] },
      { icon: "🏗️", title: "Architecture Optimization", points: ["Transition to cloud-native architecture", "Adopt microservices and container-based models"] },
    ],
    whyUs: [
      "Data-driven cloud optimization approach",
      "Expertise across multi-cloud environments (AWS, Azure, GCP)",
      "Continuous monitoring and transparent reporting",
      "Strong focus on measurable ROI and cost efficiency",
      "Built-in governance, security, and compliance alignment",
    ],
    faqs: [
      { q: "Why is cloud optimization important?", a: "It helps reduce unnecessary costs, improves performance, and ensures your cloud environment remains efficient and scalable." },
      { q: "Do you provide continuous optimization?", a: "Yes, we offer ongoing monitoring and optimization services." },
      { q: "Can you optimize existing cloud setups?", a: "Yes, we work on both new and existing cloud infrastructures." },
      { q: "Which cloud platforms do you support?", a: "We support AWS, Microsoft Azure, and Google Cloud Platform (GCP)." },
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
      { icon: "🧭", title: "Multi-Cloud Strategy & Consulting", points: ["Cloud platform selection and vendor comparison", "Workload distribution strategy across multiple clouds"] },
      { icon: "🏗️", title: "Hybrid Cloud Architecture Design", points: ["Integration of on-premise infrastructure with cloud platforms", "Secure connectivity using VPNs and private links"] },
      { icon: "🔗", title: "Cloud Integration & Orchestration", points: ["Cross-platform integration and orchestration", "API-based connectivity and automation"] },
      { icon: "🚀", title: "Workload Portability", points: ["Seamless workload migration between cloud platforms", "Containerization using Docker and Kubernetes"] },
      { icon: "💾", title: "Data Synchronization & Management", points: ["Real-time data synchronization", "Data governance, integrity, and consistency management"] },
      { icon: "🔐", title: "Security & Compliance", points: ["Centralized security policies and access controls", "Compliance alignment with industry standards"] },
    ],
    whyUs: [
      "Deep expertise in multi-cloud and hybrid cloud ecosystems",
      "Strong architecture design and integration capabilities",
      "Security-first approach across all cloud environments",
      "Balanced focus on cost optimization and performance",
      "End-to-end lifecycle support from strategy to management",
    ],
    faqs: [
      { q: "What is the difference between multi-cloud and hybrid cloud?", a: "Multi-cloud uses multiple public cloud providers, while hybrid cloud combines on-premise infrastructure with cloud environments." },
      { q: "Is multi-cloud more expensive?", a: "Not necessarily. With proper optimization, it can improve cost efficiency and avoid vendor lock-in." },
      { q: "How do you manage security across multiple clouds?", a: "We implement centralized security policies, monitoring, and compliance frameworks across all environments." },
      { q: "Can we migrate gradually to a multi-cloud setup?", a: "Yes, we support phased migration strategies to ensure minimal risk and disruption." },
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
      { icon: "🔍", title: "Cloud Security Assessment", points: ["Identify vulnerabilities and misconfigurations", "Perform risk analysis and gap assessment"] },
      { icon: "🔐", title: "Identity & Access Management (IAM)", points: ["Role-based access control (RBAC)", "Least privilege enforcement", "Multi-factor authentication (MFA)"] },
      { icon: "💾", title: "Data Security & Encryption", points: ["Encryption at rest and in transit", "Backup and disaster recovery strategies"] },
      { icon: "🌐", title: "Network Security", points: ["Firewalls, VPNs, and private network configurations", "Zero Trust architecture implementation"] },
      { icon: "📜", title: "Compliance & Governance", points: ["Support for GDPR, ISO, SOC standards", "Policy creation and enforcement"] },
      { icon: "🚨", title: "Threat Detection & Monitoring", points: ["Real-time monitoring and alerting", "SIEM integration", "Incident response and mitigation"] },
    ],
    whyUs: [
      "Security-first approach across all cloud services",
      "Certified cloud and cybersecurity experts",
      "Continuous monitoring and rapid incident response",
      "Strong compliance and governance expertise",
      "End-to-end cloud protection",
    ],
    faqs: [
      { q: "How secure is the cloud?", a: "Cloud environments are highly secure when configured and managed correctly with proper controls and monitoring." },
      { q: "What is the shared responsibility model?", a: "It defines the division of security responsibilities between the cloud provider and the customer." },
      { q: "How do you ensure compliance?", a: "We implement continuous compliance monitoring and align your environment with industry standards." },
      { q: "Do you provide continuous monitoring?", a: "Yes, we offer ongoing monitoring and threat detection services." },
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
      { icon: "🔄", title: "CI/CD Pipeline Setup & Optimization", points: ["Jenkins, GitHub Actions, GitLab CI implementation", "Automated build and deployment pipelines"] },
      { icon: "🔐", title: "Security Integration in CI/CD", points: ["SAST (Static Application Security Testing)", "DAST (Dynamic Application Security Testing)", "Dependency and vulnerability scanning"] },
      { icon: "🏗️", title: "Infrastructure as Code (IaC) Security", points: ["Terraform and CloudFormation security", "Misconfiguration detection and prevention"] },
      { icon: "📦", title: "Container Security", points: ["Docker and Kubernetes security", "Container image scanning and hardening"] },
      { icon: "📊", title: "Automated Compliance Checks", points: ["Security policies embedded into pipelines", "Continuous compliance validation"] },
      { icon: "🚨", title: "Monitoring & Incident Response", points: ["Real-time alerts and monitoring", "Security event tracking and response"] },
    ],
    whyUs: [
      "Strong DevOps and security integration expertise",
      "Automation-first approach for faster delivery",
      "Balance between speed, security, and reliability",
      "End-to-end pipeline ownership",
    ],
    faqs: [
      { q: "How is DevSecOps different from DevOps?", a: "DevSecOps integrates security into every stage of the DevOps lifecycle." },
      { q: "Will this slow down development?", a: "No, automation ensures security without impacting development speed." },
      { q: "What tools do you integrate?", a: "We work with industry-standard tools like Jenkins, GitHub, Kubernetes, and more." },
      { q: "Is it suitable for small teams?", a: "Yes, DevSecOps can be scaled based on team size and requirements." },
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
      { icon: "🏗️", title: "Infrastructure Design & Architecture", points: ["Scalable architecture design", "High availability & fault tolerance"] },
      { icon: "⚙️", title: "Infrastructure Setup & Deployment", points: ["Virtual machines, containers, serverless", "Network setup (VPC, subnets)"] },
      { icon: "📄", title: "Infrastructure as Code (IaC)", points: ["Terraform, CloudFormation", "Automated infrastructure provisioning"] },
      { icon: "🌐", title: "Networking & Connectivity", points: ["Secure network design", "VPN, private connections"] },
      { icon: "💾", title: "Storage & Database Setup", points: ["Scalable storage solutions", "Database deployment & optimization"] },
      { icon: "🔄", title: "Backup & Disaster Recovery", points: ["Automated backups", "Business continuity planning"] },
    ],
    whyUs: ["Strong cloud architecture expertise", "Automation-first deployment", "Security & compliance integrated", "Scalable and future-ready designs", "End-to-end support"],
    faqs: [
      { q: "What does managed services include?", a: "It covers monitoring, incident management, patching, security, cost optimization, and ongoing support." },
      { q: "Do you offer 24/7 support?", a: "Yes, we provide round-the-clock monitoring and incident response." },
      { q: "Can you manage our existing cloud setup?", a: "Yes, we can take over management of your existing cloud infrastructure regardless of its current state." },
      { q: "Which platforms do you manage?", a: "We manage environments on AWS, Microsoft Azure, and Google Cloud Platform." },
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
      { icon: "📦", title: "Containerization Services", points: ["Application containerization (Docker)", "Legacy app modernization"] },
      { icon: "☸️", title: "Kubernetes Implementation", points: ["Cluster setup & management", "Scaling & orchestration"] },
      { icon: "⚡", title: "Serverless Architecture Development", points: ["AWS Lambda / Azure Functions", "Event-driven applications"] },
      { icon: "🔄", title: "CI/CD for Containers & Serverless", points: ["Automated deployment pipelines"] },
      { icon: "📊", title: "Monitoring & Logging", points: ["Container monitoring", "Serverless performance tracking"] },
      { icon: "🔐", title: "Security for Containers & Serverless", points: ["Image scanning", "Runtime protection"] },
    ],
    whyUs: ["Expertise in Docker, Kubernetes, and serverless frameworks", "Cloud-native architecture design capabilities", "Security and governance embedded from the start", "Performance-optimized deployment strategies", "End-to-end lifecycle management"],
    faqs: [
      { q: "Containers vs serverless — which is better?", a: "Each suits different workloads. We help you choose the right approach based on your requirements." },
      { q: "Is serverless cost-effective?", a: "Yes, serverless eliminates idle resource costs and charges only for actual usage." },
      { q: "How secure are containers?", a: "With proper image scanning, runtime protection, and network policies, containers can be highly secure." },
      { q: "Can legacy apps be containerized?", a: "Yes, we specialize in modernizing legacy applications through containerization." },
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
      { icon: "📋", title: "Business Continuity Planning (BCP)", points: ["Risk assessment", "Business impact analysis (BIA)", "Continuity strategy design"] },
      { icon: "🔄", title: "Disaster Recovery (DR) Solutions", points: ["DR architecture design", "Failover & failback mechanisms"] },
      { icon: "💾", title: "Backup & Data Protection", points: ["Automated backups", "Data replication"] },
      { icon: "🌐", title: "High Availability Setup", points: ["Multi-region deployment", "Load balancing"] },
      { icon: "🧪", title: "DR Testing & Simulation", points: ["Regular testing", "Scenario-based simulations"] },
      { icon: "🚨", title: "Monitoring & Incident Response", points: ["Real-time alerts", "Rapid response mechanisms"] },
    ],
    whyUs: ["Strong risk & audit expertise", "Cloud-native DR solutions", "Automated recovery mechanisms", "Continuous testing & validation", "End-to-end resilience strategy"],
    faqs: [
      { q: "What is RTO and RPO?", a: "RTO (Recovery Time Objective) is how fast you recover; RPO (Recovery Point Objective) is how much data you can afford to lose." },
      { q: "How often should DR plans be tested?", a: "We recommend at least quarterly testing with scenario-based simulations." },
      { q: "Do you support multi-region setups?", a: "Yes, we design multi-region architectures to ensure geographic redundancy." },
      { q: "What if we already have a DR plan?", a: "We review and improve existing plans, filling gaps and modernizing outdated approaches." },
    ],
  },
];

// ─── AUDIT / RISK / CYBER DATA ────────────────────────────────────────────────

const auditSubcategories: Subcategory[] = [
  {
    id: "vapt",
    title: "VAPT",
    icon: "🔍",
    intro:
      "Identify and eliminate security vulnerabilities before attackers do. At TechShield Analytics, we deliver comprehensive vulnerability assessment and penetration testing to secure your systems, applications, and networks. Our approach combines real-world attack simulation with detailed remediation guidance—so you're not just finding gaps, you're closing them.",
    keyOutcomes: [
      "Uncover vulnerabilities across networks, applications, and APIs before malicious actors can exploit them",
      "Receive risk-classified findings with clear, prioritized remediation guidance",
      "Validate your security posture with real-world attack simulations",
      "Achieve and maintain compliance with security standards and regulatory requirements",
      "Strengthen your overall security architecture with expert recommendations",
    ],
    services: [
      { icon: "🌐", title: "Network VAPT", points: ["Identify network vulnerabilities", "Firewall & access control testing"] },
      { icon: "💻", title: "Web Application VAPT", points: ["Test web apps for security flaws", "OWASP vulnerability assessment"] },
      { icon: "📱", title: "Mobile Application VAPT", points: ["Android / iOS security testing", "API security validation"] },
      { icon: "☁️", title: "Cloud Security Testing", points: ["Misconfiguration detection", "Access control and privilege testing"] },
      { icon: "🛠️", title: "API Security Testing", points: ["API vulnerability assessment", "Authentication & authorization testing"] },
    ],
    deliverables: [
      "Detailed vulnerability report with risk severity classification",
      "Prioritized remediation recommendations for each finding",
      "Executive summary suitable for leadership and compliance teams",
      "Post-remediation validation and re-testing support",
    ],
    whyUs: [
      "Deep security expertise with real-world attack simulation experience",
      "Risk-classified, detailed reporting aligned to business impact",
      "Business-focused recommendations—not just technical findings",
      "Coverage across network, web, mobile, cloud, and API layers",
    ],
    faqs: [
      { q: "How often should VAPT be done?", a: "We recommend at least annually, and after any major infrastructure or application changes." },
      { q: "Will testing affect live systems?", a: "We coordinate testing windows carefully to minimize disruption. Non-intrusive scans can run during business hours; intrusive tests are scheduled off-peak." },
      { q: "What tools do you use?", a: "We use industry-standard tools including Burp Suite, Nessus, Metasploit, and custom scripts, tailored to the target environment." },
      { q: "How long does VAPT take?", a: "Scope determines duration—typically 1–3 weeks for a comprehensive assessment covering multiple surfaces." },
    ],
  },
  {
    id: "tprm",
    title: "Third-Party Risk Management",
    icon: "🤝",
    intro:
      "Manage third-party risks with confidence and control. At TechShield Analytics, we help organizations identify, assess, and monitor risks across their vendor ecosystem with a structured, data-driven approach. Your vendors can be your biggest risk—we help you control it.",
    keyOutcomes: [
      "Gain full visibility into risks posed by vendors, suppliers, and partners",
      "Implement structured onboarding and continuous monitoring for all third parties",
      "Reduce exposure to financial, operational, and cybersecurity risks from external parties",
      "Maintain regulatory compliance across your entire vendor ecosystem",
      "Build a data-driven vendor risk dashboard for executive-level oversight",
    ],
    services: [
      { icon: "🔍", title: "Vendor Risk Assessment", points: ["Due diligence & onboarding checks", "Risk scoring and classification"] },
      { icon: "📊", title: "Continuous Monitoring", points: ["Ongoing vendor risk tracking", "Alerts for significant risk changes"] },
      { icon: "🔐", title: "Third-Party Security Assessment", points: ["Security posture evaluation", "Compliance and control checks"] },
      { icon: "📑", title: "Contract & Compliance Review", points: ["SLA and risk clause analysis", "Regulatory compliance alignment"] },
      { icon: "📈", title: "Risk Reporting & Dashboards", points: ["Vendor risk dashboards", "Analytics-driven insights for leadership"] },
    ],
    approach: [
      { step: "Identify Vendors", desc: "Map and catalogue all third-party relationships across the organization." },
      { step: "Assess Risks", desc: "Evaluate financial, operational, cybersecurity, and compliance risks for each vendor." },
      { step: "Classify & Prioritize", desc: "Score and tier vendors by risk level to focus efforts where they matter most." },
      { step: "Monitor Continuously", desc: "Track vendor risk in real time with automated alerts for material changes." },
      { step: "Report & Improve", desc: "Deliver dashboards and reports, then refine the program based on findings." },
    ],
    whyUs: [
      "Strong audit & risk expertise applied to third-party ecosystems",
      "Data-driven vendor risk models for objective scoring",
      "Continuous monitoring approach—not just point-in-time assessments",
      "Seamless integration with cloud and cybersecurity frameworks",
    ],
    faqs: [
      { q: "What types of third-party risks do you cover?", a: "We assess financial, operational, cybersecurity, regulatory, and reputational risks across your vendor ecosystem." },
      { q: "How do you prioritize vendors for assessment?", a: "We use a risk-tiering model based on data access, criticality, and exposure level to prioritize which vendors require deeper assessment." },
      { q: "Can TPRM integrate with our existing GRC tools?", a: "Yes, we design TPRM programs to integrate with existing GRC platforms and workflows." },
      { q: "How frequently should vendors be reassessed?", a: "High-risk vendors should be assessed annually at minimum; continuous monitoring supplements periodic reviews for all tiers." },
    ],
    subSubs: [
      {
        id: "erm",
        title: "Enterprise Risk Management (ERM)",
        icon: "🏢",
        intro:
          "Build an enterprise-wide risk framework that gives leadership clear visibility into risks across all business functions. Our ERM practice helps organizations move from reactive risk management to proactive, strategic risk governance.",
        items: [
          { icon: "📋", title: "Risk Identification & Framework Design", points: ["Enterprise-wide risk frameworks", "Risk registers aligned to business objectives"] },
          { icon: "📊", title: "Risk Assessment & Scoring", points: ["Quantitative & qualitative risk models", "Risk prioritization and heat mapping"] },
          { icon: "⚙️", title: "Risk Mitigation Strategies", points: ["Control design and implementation", "Action plans with ownership and timelines"] },
          { icon: "📈", title: "Risk Monitoring & Reporting", points: ["Executive risk dashboards", "Periodic reporting for boards and leadership"] },
        ],
      },
      {
        id: "trm",
        title: "Technology Risk Management (TRM)",
        icon: "💻",
        intro:
          "Secure your technology landscape with structured risk management and control frameworks. Our TRM practice addresses IT, cloud, and cyber risks with a governance lens—ensuring your technology estate is resilient, compliant, and well-controlled.",
        items: [
          { icon: "🖥️", title: "IT Risk Assessment", points: ["System vulnerability identification", "Infrastructure risk mapping"] },
          { icon: "☁️", title: "Cyber & Cloud Risk", points: ["Cloud security risk assessment", "Data protection risk analysis"] },
          { icon: "🔐", title: "IT Controls & Governance", points: ["IT General Controls (ITGC)", "Access management and segregation of duties"] },
          { icon: "📜", title: "Technology Compliance", points: ["ISO, SOC, and regulatory framework alignment", "Control gap assessments"] },
          { icon: "📡", title: "Continuous Monitoring", points: ["Real-time technology risk tracking", "Automated alerts for control failures"] },
        ],
        positioningLine: "We secure your technology landscape with structured risk management and control frameworks.",
      },
    ],
  },
  {
    id: "cyber-risk",
    title: "Cyber Risk Management",
    icon: "🛡️",
    intro:
      "Proactively manage cyber risks before they become breaches. At TechShield Analytics, we help organizations identify, predict, and mitigate cyber threats with advanced risk intelligence and continuous monitoring. It's not just about security—it's about managing cyber risk intelligently.",
    keyOutcomes: [
      "Identify and quantify cyber risks across your entire attack surface",
      "Move from reactive incident response to proactive risk intelligence",
      "Implement controls that directly reduce your highest-priority cyber risks",
      "Maintain continuous visibility through real-time monitoring and analytics",
      "Build executive-level cyber risk reporting for informed decision-making",
    ],
    services: [
      { icon: "🔐", title: "Risk Assessment & Identification", points: ["Identify vulnerabilities across systems and processes", "Quantitative cyber risk scoring"] },
      { icon: "📊", title: "Threat Intelligence & Monitoring", points: ["Real-time threat monitoring", "Threat detection and early warning systems"] },
      { icon: "⚙️", title: "Security Control Implementation", points: ["Access controls and privilege management", "Security policy design and enforcement"] },
      { icon: "📈", title: "Risk Analytics & Reporting", points: ["Cyber risk dashboards for leadership", "Predictive insights and trend analysis"] },
    ],
    approach: [
      { step: "Identify Threats", desc: "Map threat actors, attack vectors, and potential entry points relevant to your environment." },
      { step: "Assess Risks", desc: "Quantify likelihood and business impact for each identified threat." },
      { step: "Predict Potential Breaches", desc: "Apply predictive modeling to identify which risks are most likely to materialize." },
      { step: "Mitigate Risks", desc: "Design and implement targeted controls to reduce your highest-priority risks." },
      { step: "Monitor Continuously", desc: "Maintain real-time visibility and iterate the risk program based on new intelligence." },
    ],
    whyUs: [
      "Integrated approach combining cyber expertise with audit and risk methodology",
      "Predictive analytics capabilities to stay ahead of emerging threats",
      "Business-contextualized risk scoring—not just technical severity ratings",
      "Continuous monitoring with executive-ready dashboards",
    ],
    faqs: [
      { q: "What is the difference between cyber risk management and cybersecurity?", a: "Cybersecurity focuses on technical controls; cyber risk management frames those controls in terms of business risk, likelihood, and financial impact." },
      { q: "How do you prioritize which risks to address first?", a: "We use risk scoring models that combine technical severity, likelihood of exploitation, and business impact to guide prioritization." },
      { q: "Do you provide ongoing risk monitoring?", a: "Yes, continuous monitoring is a core component of our cyber risk management service." },
      { q: "Can this be aligned with our existing compliance requirements?", a: "Absolutely. We align our cyber risk framework with relevant standards including ISO 27001, SOC 2, and NIST." },
    ],
  },
  {
    id: "breach-predictivity",
    title: "Breach Predictivity",
    icon: "🔮",
    intro:
      "Predict cyber breaches before they happen. At TechShield Analytics, we use data and analytics to identify patterns, anomalies, and high-risk areas that signal potential breaches—before attackers can exploit them. We use data and analytics to predict potential cyber threats before they impact your business.",
    keyOutcomes: [
      "Move from reactive security to proactive breach prevention",
      "Identify high-risk areas and attack patterns before exploitation occurs",
      "Prioritize security investment based on predicted likelihood of breach",
      "Reduce mean time to detect (MTTD) through early warning signals",
      "Build a continuously learning threat prediction model tailored to your environment",
    ],
    services: [
      { icon: "🔍", title: "Predictive Risk Modeling", points: ["Analyze patterns and behavioral data", "Identify high-risk systems and user behaviors"] },
      { icon: "📊", title: "Anomaly Detection", points: ["Detect unusual system and network behavior", "Early warning signals before incidents escalate"] },
      { icon: "📈", title: "Risk Scoring Models", points: ["Prioritize threats by predicted impact", "Focus security resources on critical risks"] },
      { icon: "🤖", title: "AI & Data-Driven Insights", points: ["Machine learning models for attack scenario prediction", "Continuously learning from new threat intelligence"] },
    ],
    whyUs: [
      "Advanced analytics and data science capabilities applied to security",
      "Proprietary risk scoring models combining threat intelligence and behavioral data",
      "Proven ability to shift security posture from reactive to predictive",
      "Integration with existing SIEM and monitoring platforms",
    ],
    faqs: [
      { q: "How accurate is breach prediction?", a: "While no prediction is 100% certain, our models significantly improve the detection of high-risk patterns before they become incidents, reducing response time and impact." },
      { q: "What data sources do you use for prediction?", a: "We ingest logs, network telemetry, threat feeds, user behavior analytics, and vulnerability data to build comprehensive prediction models." },
      { q: "Is this suitable for organizations without a mature security team?", a: "Yes, we provide managed breach predictivity services so organizations at any maturity level can benefit." },
      { q: "How does this integrate with our existing tools?", a: "We integrate with common SIEM, SOAR, and log management platforms to enrich existing workflows with predictive intelligence." },
    ],
  },
  {
    id: "breach-mitigation",
    title: "Breach Mitigation",
    icon: "🚨",
    intro:
      "Minimize impact with rapid breach mitigation. At TechShield Analytics, we ensure your organization can respond fast, contain damage, and recover effectively when a cyber incident occurs. We ensure fast, effective response to minimize the impact of cyber incidents.",
    keyOutcomes: [
      "Contain breaches rapidly to limit lateral movement and data exfiltration",
      "Execute predefined response playbooks to minimize decision delay under pressure",
      "Recover systems and data with minimal downtime and data loss",
      "Identify root cause to prevent recurrence of similar incidents",
      "Produce post-incident reports for regulatory, legal, and leadership requirements",
    ],
    services: [
      { icon: "🛡️", title: "Incident Response Planning", points: ["Predefined response playbooks and escalation paths", "Rapid containment strategies by incident type"] },
      { icon: "🔐", title: "Security Controls Implementation", points: ["Firewalls, access controls, and network segmentation", "Zero Trust architecture implementation"] },
      { icon: "🔄", title: "Recovery & Remediation", points: ["System and data recovery procedures", "Root cause analysis and permanent remediation"] },
      { icon: "📑", title: "Post-Incident Reporting", points: ["Detailed incident reports for leadership and regulators", "Lessons learned and control improvement recommendations"] },
    ],
    whyUs: [
      "Experienced incident response team with cross-industry expertise",
      "Pre-built playbooks that accelerate response time significantly",
      "Holistic approach covering containment, recovery, and prevention",
      "Regulatory-ready post-incident documentation",
    ],
    faqs: [
      { q: "How quickly can you respond to an active breach?", a: "Our incident response team can be engaged within hours. Pre-engagement retainer clients receive priority response." },
      { q: "Do you offer retainer-based incident response?", a: "Yes, retainer agreements ensure priority access and allow us to pre-understand your environment for faster response." },
      { q: "What types of incidents do you handle?", a: "Ransomware, data breaches, insider threats, phishing compromises, DDoS, and unauthorized access incidents." },
      { q: "How do you prevent recurrence after a breach?", a: "We conduct thorough root cause analysis and implement control improvements to address the specific vulnerability that enabled the breach." },
    ],
  },
  {
    id: "grc",
    title: "Governance, Risk & Compliance (GRC)",
    icon: "📜",
    intro:
      "Drive compliance, control risk, and strengthen governance. At TechShield Analytics, we help organizations build a resilient, compliant, and well-governed framework that ensures control, visibility, and accountability across the enterprise. GRC ensures your business operates securely, efficiently, and in compliance.",
    keyOutcomes: [
      "Build a unified governance, risk, and compliance framework aligned to your business",
      "Achieve and maintain compliance with ISO, SOC, GDPR, and other relevant standards",
      "Automate control testing and compliance monitoring to reduce manual overhead",
      "Gain real-time visibility into risk and compliance posture through dashboards",
      "Embed GRC into daily operations rather than treating it as a periodic exercise",
    ],
    services: [
      { icon: "🏛️", title: "Governance Framework Design", points: ["Policy development and control frameworks", "Organizational governance models and accountability structures"] },
      { icon: "⚠️", title: "Risk Management Integration", points: ["Risk registers and scoring", "Enterprise risk alignment across business units"] },
      { icon: "📑", title: "Compliance Management", points: ["Regulatory compliance (ISO, SOC, GDPR)", "Compliance gap assessments and audit readiness"] },
      { icon: "🔍", title: "Control Testing & Monitoring", points: ["Automated control testing", "Continuous control monitoring with exception reporting"] },
      { icon: "📊", title: "GRC Dashboards & Reporting", points: ["Real-time compliance tracking dashboards", "Risk and control reporting for boards and regulators"] },
    ],
    approach: [
      { step: "Assess Current Framework", desc: "Evaluate existing governance structures, controls, and compliance posture." },
      { step: "Identify Gaps", desc: "Map gaps against target frameworks and regulatory requirements." },
      { step: "Design Governance & Controls", desc: "Build the governance model, policies, and control framework." },
      { step: "Implement GRC Solutions", desc: "Deploy controls, automate testing, and integrate with existing systems." },
      { step: "Monitor & Improve Continuously", desc: "Track compliance in real time and iterate based on findings and regulatory changes." },
    ],
    whyUs: [
      "Strong audit & risk expertise forming the foundation of our GRC practice",
      "Data-driven GRC solutions with automation at the core",
      "Seamless integration with cloud infrastructure and cybersecurity programs",
      "Continuous monitoring approach—compliance is ongoing, not annual",
      "Business-focused insights that translate GRC findings into decisions",
    ],
    faqs: [
      { q: "What frameworks do you support?", a: "We support ISO 27001, SOC 1 & 2, GDPR, NIST CSF, COBIT, and other industry-specific regulatory frameworks." },
      { q: "How do you automate GRC?", a: "We implement automated control testing, continuous compliance monitoring, and integrated dashboards that reduce manual effort significantly." },
      { q: "Can GRC be integrated with our cloud environment?", a: "Yes, we design cloud-native GRC programs that integrate with AWS, Azure, and GCP environments." },
      { q: "Do you provide continuous monitoring?", a: "Yes, continuous monitoring is central to our GRC approach—we move away from point-in-time assessments to always-on visibility." },
    ],
  },
];

// ─── DATA ANALYTICS & BI DATA ─────────────────────────────────────────────────

const dataSubcategories: Subcategory[] = [
  {
    id: "data-engineering",
    title: "Modern Data Engineering",
    icon: "⚙️",
    intro:
      "Build the foundation of your entire data strategy. At TechShield Analytics, we design and implement scalable data engineering pipelines that ingest, transform, and deliver data reliably across your organization. Whether batch or real-time, structured or unstructured, we build data infrastructure that your business can trust.",
    keyOutcomes: [
      "Ingest data from diverse sources including APIs, SaaS platforms, databases, and streaming systems",
      "Build reliable ETL/ELT pipelines with automated quality checks and monitoring",
      "Enable both batch and real-time data processing to support all use cases",
      "Lay a clean, well-governed data foundation for analytics, AI, and reporting",
      "Reduce data engineering toil through automation and reusable frameworks",
    ],
    services: [
      { icon: "🔄", title: "ETL / ELT Pipeline Development", points: ["Design and build scalable data pipelines", "Batch and incremental data loading strategies"] },
      { icon: "⚡", title: "Real-Time & Streaming", points: ["Event-driven data architectures", "Apache Kafka streaming pipelines"] },
      { icon: "🔗", title: "Data Ingestion & Integration", points: ["API, SaaS, and database connectors", "Multi-source data consolidation"] },
      { icon: "🧪", title: "Data Quality & Testing", points: ["Automated data quality checks using dbt", "Validation rules and anomaly detection"] },
      { icon: "📊", title: "Pipeline Monitoring & Observability", points: ["Pipeline health dashboards", "Alerting for failures and data drift"] },
    ],
    whyUs: [
      "Hands-on expertise with Apache Kafka, dbt, and modern data stack tools",
      "Reusable pipeline templates that accelerate delivery timelines",
      "Quality and governance built into pipelines from day one",
      "Cloud-native design across AWS, Azure, and GCP",
    ],
    faqs: [
      { q: "What data sources can you integrate?", a: "We integrate relational databases, NoSQL stores, SaaS platforms, REST APIs, and streaming sources like Kafka into unified pipelines." },
      { q: "Do you support real-time data processing?", a: "Yes, we design event-driven streaming architectures for near real-time data delivery." },
      { q: "How do you ensure data quality in pipelines?", a: "We embed automated validation, schema checks, and anomaly detection using tools like dbt and Great Expectations." },
      { q: "Can you modernize our legacy ETL processes?", a: "Yes, we assess existing pipelines and migrate them to modern, maintainable architectures incrementally." },
    ],
  },
  {
    id: "data-warehousing",
    title: "Data Warehousing & Lakehouse",
    icon: "🏗️",
    intro:
      "Design scalable, cloud-native data platforms that serve as the single source of truth for your organization. At TechShield Analytics, we architect data warehouses and lakehouses that are performant, governed, and ready for analytics and AI workloads.",
    keyOutcomes: [
      "Build a unified, cloud-native data warehouse or lakehouse serving all business units",
      "Optimize query performance and storage costs through intelligent data modeling",
      "Enable scalable analytics on structured and semi-structured data",
      "Establish clear data ownership, lineage, and access controls",
      "Support downstream analytics, BI, and AI/ML workloads from a reliable foundation",
    ],
    services: [
      { icon: "❄️", title: "Cloud Data Warehouse Design", points: ["Snowflake, BigQuery, Azure Synapse architecture", "Schema design and performance optimization"] },
      { icon: "🏞️", title: "Lakehouse Architecture", points: ["Unified storage for structured and unstructured data", "Delta Lake and similar lakehouse implementations"] },
      { icon: "📐", title: "Data Modeling & Optimization", points: ["Dimensional and entity-relationship modeling", "Query performance tuning and cost optimization"] },
      { icon: "🔐", title: "Data Governance & Access Control", points: ["Role-based access and row-level security", "Data lineage and cataloguing"] },
    ],
    whyUs: [
      "Platform-agnostic expertise across Snowflake, BigQuery, and Azure Synapse",
      "Lakehouse-first thinking for organizations needing flexibility beyond traditional warehouses",
      "Performance optimization reducing query costs significantly",
      "Governance and lineage embedded from the design phase",
    ],
    faqs: [
      { q: "Warehouse vs Lakehouse — which should we choose?", a: "We recommend based on your data types, use cases, and team capabilities. Lakehouses suit organizations with diverse data types; warehouses excel for structured analytics." },
      { q: "Can you migrate our existing data warehouse?", a: "Yes, we specialize in migrating on-premise and legacy cloud warehouses to modern platforms with minimal disruption." },
      { q: "How do you handle data modeling for complex businesses?", a: "We work closely with business stakeholders to understand KPIs and business logic, then translate these into well-structured data models." },
      { q: "What governance frameworks do you apply?", a: "We align with data governance frameworks including DAMA-DMBOK and implement tooling for lineage, quality, and access management." },
    ],
  },
  {
    id: "bi-visualization",
    title: "Business Intelligence & Visualization",
    icon: "📊",
    intro:
      "Make data understandable and actionable for every level of your organization. At TechShield Analytics, we build BI solutions that go beyond static reports—delivering interactive dashboards, self-service analytics, and executive intelligence that drive real decisions.",
    keyOutcomes: [
      "Deliver executive dashboards that provide real-time visibility into KPIs",
      "Enable self-service analytics so business users can explore data independently",
      "Standardize metric definitions across the organization to eliminate conflicting numbers",
      "Accelerate decision-making with visual insights replacing manual reporting",
      "Build a scalable BI ecosystem that grows with your data and user base",
    ],
    services: [
      { icon: "📊", title: "Executive & Operational Dashboards", points: ["KPI tracking and business performance views", "Drill-down and filtering capabilities"] },
      { icon: "🔍", title: "Self-Service Analytics", points: ["User-friendly interfaces for business users", "Semantic layers for consistent metric definitions"] },
      { icon: "🔄", title: "BI Migration & Modernization", points: ["Migration from legacy BI tools to modern platforms", "Report consolidation and standardization"] },
      { icon: "📈", title: "BI Platform Implementation", points: ["Power BI, Tableau, and Looker deployment", "Governance, licensing, and administration"] },
    ],
    whyUs: [
      "Expertise across Power BI, Tableau, Looker, and other leading BI platforms",
      "Business-first approach—metrics are defined by business logic, not tool defaults",
      "Self-service frameworks that reduce dependency on data teams for ad hoc queries",
      "Proven migration methodology for organizations moving between BI tools",
    ],
    faqs: [
      { q: "Which BI tool should we choose?", a: "We recommend based on your ecosystem, budget, and user base. Power BI suits Microsoft environments; Looker excels with data-heavy teams; Tableau is ideal for visual exploration." },
      { q: "How do you ensure consistent metric definitions?", a: "We build semantic layers and certified datasets that define metrics once and use them everywhere, eliminating conflicting numbers." },
      { q: "Can non-technical users create their own reports?", a: "Yes, we design self-service environments with guardrails so business users can explore data safely without writing SQL." },
      { q: "How long does a BI implementation take?", a: "Simple dashboard projects can be delivered in 2–4 weeks; enterprise BI programs with governance typically run 2–4 months." },
    ],
  },
  {
    id: "advanced-analytics",
    title: "Advanced Analytics & ML Integration",
    icon: "🧠",
    intro:
      "Go beyond reporting with analytics that predict, explain, and prescribe. At TechShield Analytics, we augment your BI with machine learning models and statistical techniques that turn historical data into forward-looking intelligence.",
    keyOutcomes: [
      "Move from descriptive analytics (what happened) to predictive analytics (what will happen)",
      "Integrate ML models into existing BI dashboards for embedded intelligence",
      "Identify customer segments, anomalies, and trends automatically",
      "Improve operational efficiency through data-driven forecasting",
      "Deliver decision-ready insights rather than raw model outputs",
    ],
    services: [
      { icon: "📈", title: "Predictive Analytics", points: ["Forecasting models for revenue, demand, and risk", "Time-series analysis and trend detection"] },
      { icon: "🔵", title: "Clustering & Segmentation", points: ["Customer and operational segmentation", "Behavioral pattern identification"] },
      { icon: "🔗", title: "ML Model Integration with BI", points: ["Embedding model outputs into dashboards", "Automated insight surfacing in reports"] },
      { icon: "📊", title: "Statistical Analysis & Experimentation", points: ["A/B testing frameworks", "Regression analysis and hypothesis testing"] },
    ],
    whyUs: [
      "Practical ML integration—models deployed into business workflows, not just notebooks",
      "Domain expertise across risk, audit, finance, and operations analytics",
      "Interpretable model outputs designed for business decision-makers",
      "Cloud-native ML deployment on AWS SageMaker, Azure ML, and Google Vertex AI",
    ],
    faqs: [
      { q: "Do we need a lot of data to use predictive analytics?", a: "Not necessarily. We assess your data maturity and recommend the right approaches given your current data volume and quality." },
      { q: "How do you make ML outputs understandable for business users?", a: "We focus on explainability—presenting model outputs as business recommendations with clear confidence levels rather than raw scores." },
      { q: "Can predictive models integrate with our existing BI dashboards?", a: "Yes, we specialize in embedding model outputs into Power BI, Tableau, and Looker dashboards for seamless consumption." },
      { q: "What industries do you serve with advanced analytics?", a: "Financial services, retail, healthcare, manufacturing, and professional services—our models are adapted to domain-specific KPIs and data patterns." },
    ],
  },
  {
    id: "data-prep-automation",
    title: "Data Preparation & Analytics Automation",
    icon: "🔄",
    intro:
      "Accelerate analytics workflows by automating data preparation, blending, and repetitive analytical tasks. At TechShield Analytics, we help organizations reduce the time spent wrangling data and increase time spent acting on insights.",
    keyOutcomes: [
      "Reduce manual data preparation time by automating repetitive cleansing and blending tasks",
      "Standardize data preparation workflows across teams and use cases",
      "Accelerate time-to-insight through pre-built analytical pipelines",
      "Enable analysts to focus on interpretation rather than data manipulation",
      "Build reusable automation assets that scale with analytical demand",
    ],
    services: [
      { icon: "🔀", title: "Data Blending & Preparation", points: ["Multi-source data blending for analysis", "Automated cleansing and standardization workflows"] },
      { icon: "⚙️", title: "Analytics Pipeline Automation", points: ["Automated report generation and distribution", "Scheduled analytical workflows"] },
      { icon: "🛠️", title: "Alteryx Implementation", points: ["Alteryx workflow design and deployment", "Training and adoption support for teams"] },
      { icon: "📊", title: "Analytics Workflow Optimization", points: ["Audit and optimization of existing workflows", "Performance improvements and error reduction"] },
    ],
    whyUs: [
      "Certified Alteryx expertise for enterprise analytics automation",
      "Proven track record reducing manual analytical effort by 60–80%",
      "Workflow design that non-technical users can maintain independently",
      "Integration with warehouse, BI, and cloud data platforms",
    ],
    faqs: [
      { q: "What is Alteryx and why do you recommend it?", a: "Alteryx is a leading data preparation and analytics automation platform that empowers analysts to automate complex workflows without writing code." },
      { q: "Can analytics automation replace our data engineering team?", a: "No—automation complements engineering by handling analyst-level data prep tasks, freeing engineers for complex pipeline work." },
      { q: "How long does it take to see ROI from automation?", a: "Most clients see measurable time savings within the first 4–6 weeks of deploying automated workflows." },
      { q: "Does Alteryx integrate with our existing data stack?", a: "Yes, Alteryx connects to virtually all major databases, cloud platforms, and BI tools." },
    ],
  },
  {
    id: "chat-with-data",
    title: "Chat with Your Data (GenAI + BI)",
    icon: "💬",
    intro:
      "Turn data into conversations. At TechShield Analytics, we build conversational analytics interfaces that let business users ask questions in plain language and get immediate, accurate insights—no SQL, no dashboards required. This is the future of self-service analytics.",
    keyOutcomes: [
      "Enable any business user to query data using plain English without technical skills",
      "Reduce the analytics bottleneck by giving users direct access to insights",
      "Surface relevant KPIs, anomalies, and trends through natural language queries",
      "Integrate conversational analytics with existing dashboards and BI tools",
      "Build AI assistants that understand your business context and domain",
    ],
    services: [
      { icon: "💬", title: "Natural Language Query Interface", points: ["Ask questions in plain English, get instant answers", "Context-aware responses using your business data"] },
      { icon: "🤖", title: "AI-Powered Dashboard Generation", points: ["Automatically generate visuals from natural language requests", "Dynamic chart creation based on user intent"] },
      { icon: "🔗", title: "Data Source Integration", points: ["Connect to warehouses, BI tools, and databases", "Secure access control for sensitive data"] },
      { icon: "🧠", title: "Business Context Embedding", points: ["Train models on your metric definitions and business logic", "Domain-specific language understanding"] },
    ],
    whyUs: [
      "GenAI expertise combined with deep BI and data engineering capability",
      "Secure implementations with role-based access—users only see their authorized data",
      "Business context built in—not generic LLM responses but domain-aware answers",
      "Integration with Snowflake, BigQuery, Power BI, Looker, and other platforms",
    ],
    faqs: [
      { q: "How accurate are the answers from natural language queries?", a: "Accuracy depends heavily on data quality and model configuration. We invest in context embedding and validation to maximize reliability." },
      { q: "Is our data secure when using GenAI interfaces?", a: "Yes, we implement strict access controls and can deploy models in your private cloud environment to keep data within your perimeter." },
      { q: "Can this replace our existing BI dashboards?", a: "It complements rather than replaces dashboards—conversational interfaces handle ad hoc questions while dashboards serve structured monitoring needs." },
      { q: "Which GenAI models power this capability?", a: "We work with Azure OpenAI, AWS Bedrock, and Google Vertex AI, selecting based on your cloud environment and security requirements." },
    ],
  },
  {
    id: "realtime-analytics",
    title: "Real-Time & Streaming Analytics",
    icon: "⚡",
    intro:
      "Act on data instantly. At TechShield Analytics, we build event-driven architectures and streaming pipelines that deliver insights at the speed of your business—enabling real-time monitoring, alerting, and decision-making.",
    keyOutcomes: [
      "Process and analyze events within milliseconds of occurrence",
      "Build real-time dashboards that reflect the current state of your business",
      "Enable proactive alerting when metrics cross defined thresholds",
      "Support operational use cases requiring immediate data-driven response",
      "Scale streaming infrastructure to handle high-volume event streams reliably",
    ],
    services: [
      { icon: "⚡", title: "Streaming Pipeline Design", points: ["Apache Kafka event streaming architecture", "Real-time data ingestion and processing"] },
      { icon: "📊", title: "Real-Time Dashboards", points: ["Live KPI monitoring with sub-second refresh", "Operational intelligence for time-sensitive decisions"] },
      { icon: "🚨", title: "Event-Driven Alerting", points: ["Threshold-based alerts and anomaly notifications", "Integration with communication and ticketing platforms"] },
      { icon: "🔗", title: "Stream-to-Warehouse Integration", points: ["Real-time data landing in cloud warehouses", "Unified batch and streaming data models"] },
    ],
    whyUs: [
      "Deep Apache Kafka expertise for enterprise-scale streaming",
      "Experience across financial services, retail, and operational analytics use cases",
      "Unified architecture that serves both real-time and batch consumers",
      "Monitoring and reliability engineering for production streaming systems",
    ],
    faqs: [
      { q: "Do we need real-time analytics or is batch enough?", a: "It depends on your use cases. We assess your latency requirements and business value before recommending real-time investment." },
      { q: "Is Apache Kafka the right tool for our streaming needs?", a: "Kafka is the industry standard for high-throughput streaming. We evaluate your scale and requirements and may recommend lighter alternatives for simpler use cases." },
      { q: "How do you ensure reliability in streaming systems?", a: "We implement consumer group management, dead letter queues, schema registries, and monitoring to ensure streaming reliability at scale." },
      { q: "Can streaming data land in our existing data warehouse?", a: "Yes, we design streaming pipelines that land data in Snowflake, BigQuery, and Azure Synapse with near real-time latency." },
    ],
  },
  {
    id: "data-governance",
    title: "Data Governance, Quality & Security",
    icon: "🔐",
    intro:
      "Trust your data. At TechShield Analytics, we build data governance frameworks that ensure your data is accurate, discoverable, secure, and compliant. Good governance is the invisible foundation that makes everything else work.",
    keyOutcomes: [
      "Establish clear data ownership, stewardship, and accountability across the organization",
      "Implement automated data quality checks that catch issues before they reach users",
      "Build data lineage so users can trace any metric back to its source",
      "Enforce access controls that protect sensitive data without blocking legitimate use",
      "Achieve compliance readiness for regulatory data requirements",
    ],
    services: [
      { icon: "📋", title: "Data Governance Framework", points: ["Data ownership and stewardship models", "Data policy design and enforcement"] },
      { icon: "✅", title: "Data Quality Management", points: ["Automated quality rules and validation", "Data quality monitoring and alerting"] },
      { icon: "🔍", title: "Data Lineage & Cataloguing", points: ["End-to-end data lineage tracking", "Business and technical metadata management"] },
      { icon: "🔐", title: "Data Access & Security", points: ["Role-based and attribute-based access control", "Column-level and row-level security"] },
      { icon: "📜", title: "Compliance Alignment", points: ["GDPR, CCPA, and industry-specific data requirements", "Audit trail and data retention management"] },
    ],
    whyUs: [
      "Governance frameworks designed for regulated industries with strict compliance requirements",
      "Automated quality and lineage tooling reducing manual governance overhead",
      "Integration with dbt, data catalogs, and cloud-native governance tools",
      "Pragmatic approach—governance that enables rather than blocks the business",
    ],
    faqs: [
      { q: "How do you implement data lineage?", a: "We use tools like dbt, OpenLineage, and native cloud catalog services to capture and visualize end-to-end data lineage automatically." },
      { q: "What is a data catalog and do we need one?", a: "A data catalog is a searchable inventory of your data assets. If your organization struggles to find, understand, or trust data, a catalog delivers significant value." },
      { q: "How does data governance relate to compliance?", a: "Governance provides the controls and documentation that compliance frameworks require. Well-governed data makes audits and regulatory reviews significantly smoother." },
      { q: "Can data quality be automated?", a: "Yes, using tools like dbt tests, Great Expectations, and custom monitoring rules, most quality checks can be automated within data pipelines." },
    ],
  },
  {
    id: "decision-intelligence",
    title: "Decision Intelligence Layer",
    icon: "🎯",
    intro:
      "From insights to actions. At TechShield Analytics, our Decision Intelligence layer sits above analytics and reporting to deliver AI-driven recommendations, risk-informed decisions, and business frameworks that help organizations act on data—not just view it. We don't build dashboards, we build data-driven decision systems.",
    keyOutcomes: [
      "Transform analytical outputs into clear, actionable business recommendations",
      "Embed risk and audit intelligence directly into operational decision workflows",
      "Deliver decision frameworks that combine data, judgment, and governance",
      "Accelerate decision-making with AI-powered recommendation engines",
      "Close the loop between insight and action across business functions",
    ],
    services: [
      { icon: "🤖", title: "AI-Driven Recommendations", points: ["Automated recommendation engines for operational decisions", "Contextual suggestions embedded in BI tools"] },
      { icon: "⚠️", title: "Risk & Audit Analytics Integration", points: ["Decision frameworks incorporating risk scores", "Compliance-aware analytics for regulated environments"] },
      { icon: "📊", title: "Decision Dashboards", points: ["Next-best-action dashboards for operational teams", "Leadership decision support with scenario modeling"] },
      { icon: "🔄", title: "Feedback Loop Design", points: ["Decision outcome tracking and learning", "Continuous improvement frameworks for decision quality"] },
    ],
    whyUs: [
      "Unique combination of data engineering, analytics, audit, and risk expertise",
      "Business-first framing—every recommendation tied to measurable outcomes",
      "Deep experience in regulated environments where decisions require justification",
      "End-to-end ownership from data to decision",
    ],
    faqs: [
      { q: "What makes Decision Intelligence different from regular BI?", a: "BI shows you what happened. Decision Intelligence combines that with predictive models, risk context, and recommendation engines to tell you what to do next." },
      { q: "Is this only for large enterprises?", a: "No, we scale the approach to fit organizational size. Even small teams benefit from structured decision frameworks built on clean data." },
      { q: "How do you embed recommendations into existing workflows?", a: "We integrate recommendations into existing BI dashboards, operational systems, and communication tools so they appear in the context of decisions being made." },
      { q: "Can this work in compliance-sensitive environments?", a: "Yes, our decision frameworks include audit trails, justification documentation, and compliance controls for regulated industries." },
    ],
  },
];

// ─── AI DATA ──────────────────────────────────────────────────────────────────

const aiSubcategories: Subcategory[] = [
  {
    id: "ai-strategy",
    title: "AI Strategy & Consulting",
    icon: "🧭",
    intro:
      "Define the right AI roadmap for your business before investing in implementation. At TechShield Analytics, we help organizations identify high-value AI opportunities, assess data readiness, and build a clear, prioritized AI strategy aligned to business objectives.",
    keyOutcomes: [
      "Identify the highest-impact AI use cases for your specific business context",
      "Assess current data maturity and infrastructure readiness for AI adoption",
      "Build a phased AI roadmap with clear priorities, timelines, and success metrics",
      "Avoid costly AI investments in low-value or technically infeasible use cases",
      "Align AI strategy with governance, ethics, and regulatory requirements",
    ],
    services: [
      { icon: "🔍", title: "AI Opportunity Assessment", points: ["Identify and prioritize AI use cases by business value", "Feasibility assessment based on data and infrastructure"] },
      { icon: "🗺️", title: "AI Roadmap Design", points: ["Phased implementation roadmap", "Resource, timeline, and success metric planning"] },
      { icon: "📊", title: "Data Readiness Assessment", points: ["Evaluate data quality and availability for AI", "Gap analysis and remediation planning"] },
      { icon: "⚖️", title: "AI Governance & Ethics", points: ["Responsible AI framework design", "Bias detection and explainability planning"] },
    ],
    whyUs: [
      "Business-first AI strategy—use cases selected for ROI, not technical novelty",
      "Honest data readiness assessment before recommending AI investment",
      "Integration with existing analytics, cloud, and data engineering capabilities",
      "Governance and ethics embedded from the strategy phase",
    ],
    faqs: [
      { q: "Where do most organizations start with AI?", a: "Most find highest early value in predictive analytics, automation of repetitive processes, and natural language interfaces for internal data." },
      { q: "How long does an AI strategy engagement take?", a: "Typically 4–8 weeks for a comprehensive strategy including use-case prioritization, roadmap, and data readiness assessment." },
      { q: "Do we need a large data science team to implement AI?", a: "Not necessarily. We design AI programs that match your organizational capability and can provide ongoing support." },
      { q: "How do you measure AI ROI?", a: "We define success metrics at the strategy stage—cost reduction, revenue uplift, time savings, or risk reduction—and track these through implementation." },
    ],
  },
  {
    id: "ml-development",
    title: "ML Model Development",
    icon: "🤖",
    intro:
      "Build machine learning models that solve real business problems. At TechShield Analytics, we develop, train, and tune predictive, classification, and clustering models tailored to your data and business objectives—not generic off-the-shelf solutions.",
    keyOutcomes: [
      "Develop custom ML models trained on your proprietary data for maximum relevance",
      "Achieve measurable improvements in prediction accuracy and business outcomes",
      "Deliver interpretable models that business stakeholders can understand and trust",
      "Build models that integrate into existing workflows and systems",
      "Establish ongoing model monitoring to detect drift and maintain performance",
    ],
    services: [
      { icon: "📈", title: "Predictive Modeling", points: ["Revenue, demand, and risk forecasting models", "Time-series and regression model development"] },
      { icon: "🔵", title: "Classification & Clustering", points: ["Customer segmentation and behavioral clustering", "Binary and multi-class classification problems"] },
      { icon: "⚙️", title: "Model Training & Tuning", points: ["Hyperparameter optimization", "Cross-validation and performance benchmarking"] },
      { icon: "🧪", title: "Model Evaluation & Validation", points: ["Business metric alignment and A/B testing", "Bias detection and fairness assessment"] },
    ],
    whyUs: [
      "End-to-end model development from data preparation to deployment",
      "Domain expertise across finance, risk, retail, and operational analytics",
      "Interpretable model design—explainability for regulated environments",
      "Technology-agnostic approach across TensorFlow, PyTorch, and scikit-learn",
    ],
    faqs: [
      { q: "How much data do we need for ML models?", a: "It depends on the use case. We assess data volume, quality, and relevance before recommending an approach—some models work well with a few thousand records." },
      { q: "How do you prevent models from becoming stale?", a: "We implement drift detection and automated retraining pipelines to keep models accurate as data distributions change over time." },
      { q: "Can you explain model outputs to non-technical stakeholders?", a: "Yes, we use techniques like SHAP values and decision trees to provide business-interpretable explanations for model predictions." },
      { q: "What platforms do you use for ML development?", a: "We work across Python-based frameworks (scikit-learn, TensorFlow, PyTorch) and cloud ML platforms including AWS SageMaker, Azure ML, and Google Vertex AI." },
    ],
  },
  {
    id: "ai-analytics",
    title: "AI-Powered Analytics",
    icon: "📊",
    intro:
      "Move beyond descriptive analytics to intelligence that predicts and prescribes. At TechShield Analytics, we embed AI capabilities into your analytics stack to deliver decision intelligence, anomaly detection, and predictive insights that drive competitive advantage.",
    keyOutcomes: [
      "Augment existing BI with AI-driven insights surfaced automatically",
      "Detect anomalies and outliers in real time before they become problems",
      "Deliver predictive insights alongside historical reporting",
      "Enable analysts to focus on insight interpretation rather than manual analysis",
      "Build a continuously learning analytics environment",
    ],
    services: [
      { icon: "🔍", title: "Anomaly Detection", points: ["Automated detection of unusual patterns in data", "Real-time alerting for operational anomalies"] },
      { icon: "📈", title: "Predictive Insights in BI", points: ["Embedded forecasting in Power BI, Tableau, Looker", "AI-generated narrative insights alongside charts"] },
      { icon: "🧠", title: "Decision Intelligence", points: ["AI-driven recommendations in operational dashboards", "Next-best-action suggestions for business users"] },
      { icon: "⚡", title: "Automated Insight Generation", points: ["Natural language summaries of data changes", "Automated root cause analysis for metric shifts"] },
    ],
    whyUs: [
      "Deep integration capability between AI models and existing BI platforms",
      "Audit and risk domain expertise for compliance-sensitive analytics",
      "Practical AI—deployed into workflows, not just research environments",
      "Cloud-native implementations on AWS, Azure, and GCP",
    ],
    faqs: [
      { q: "Can AI analytics work with our existing BI tools?", a: "Yes, we integrate AI capabilities into Power BI, Tableau, and Looker without requiring a full platform replacement." },
      { q: "What types of anomalies can AI detect?", a: "Financial anomalies, operational deviations, security events, data quality issues, and behavioral patterns across customer or system data." },
      { q: "How do we ensure AI insights are accurate and trustworthy?", a: "We implement validation frameworks, human-in-the-loop review processes, and continuous monitoring to maintain AI output quality." },
      { q: "Is AI-powered analytics suitable for regulated industries?", a: "Yes, we design explainable AI analytics with full audit trails and documentation for compliance-sensitive environments." },
    ],
  },
  {
    id: "ai-automation",
    title: "AI Automation & RPA",
    icon: "⚙️",
    intro:
      "Automate intelligent workflows and eliminate repetitive manual processes at scale. At TechShield Analytics, we combine AI with robotic process automation to build end-to-end intelligent automation solutions that free your teams to focus on high-value work.",
    keyOutcomes: [
      "Automate high-volume, rules-based processes with zero manual intervention",
      "Apply AI to handle exceptions and unstructured inputs that traditional RPA cannot",
      "Reduce operational costs and processing time across target workflows",
      "Improve accuracy and consistency by removing human error from repetitive tasks",
      "Scale automation across business functions with governed, monitored bot ecosystems",
    ],
    services: [
      { icon: "🤖", title: "Intelligent Process Automation", points: ["AI + RPA for end-to-end workflow automation", "Exception handling with machine learning"] },
      { icon: "🔄", title: "Workflow Automation Design", points: ["Process mapping and automation opportunity identification", "Bot design, development, and testing"] },
      { icon: "📄", title: "Document & Data Extraction", points: ["Intelligent document processing (IDP)", "Structured data extraction from unstructured sources"] },
      { icon: "📊", title: "Automation Monitoring & Governance", points: ["Bot performance dashboards", "Exception tracking and continuous optimization"] },
    ],
    whyUs: [
      "Combined AI and RPA expertise for truly intelligent automation",
      "Process-first approach—we identify the right processes before recommending tools",
      "Governance frameworks ensuring bots remain compliant and auditable",
      "Scalable automation programs that grow from pilot to enterprise deployment",
    ],
    faqs: [
      { q: "What is the difference between RPA and AI automation?", a: "RPA automates rule-based, structured tasks. AI automation handles variability, judgment, and unstructured inputs that traditional RPA cannot process." },
      { q: "Which processes are best suited for automation?", a: "High-volume, repetitive, rules-based processes with structured data inputs—such as data entry, report generation, invoice processing, and compliance checking." },
      { q: "How do you ensure automated processes remain compliant?", a: "We embed audit trails, exception logging, and human review checkpoints into automation designs from the start." },
      { q: "How long does it take to automate a process?", a: "Simple automations can be deployed in 2–4 weeks. Complex multi-system workflows typically take 6–12 weeks." },
    ],
  },
  {
    id: "nlp-conversational",
    title: "NLP & Conversational AI",
    icon: "💬",
    intro:
      "Build intelligent systems that understand and communicate in human language. At TechShield Analytics, we develop NLP solutions and conversational AI applications that automate communication, extract insights from text, and deliver intelligent self-service experiences.",
    keyOutcomes: [
      "Automate customer and employee interactions with context-aware conversational AI",
      "Extract structured insights from unstructured text at scale",
      "Reduce response times and improve experience through intelligent virtual assistants",
      "Apply sentiment analysis and text classification to support decision-making",
      "Build knowledge-grounded assistants that answer accurately from your internal data",
    ],
    services: [
      { icon: "🤖", title: "Chatbot & Virtual Assistant Development", points: ["Customer support and internal helpdesk bots", "Context-aware, multi-turn conversation design"] },
      { icon: "📊", title: "Text Analytics & Classification", points: ["Sentiment analysis and opinion mining", "Topic classification and entity extraction"] },
      { icon: "🔍", title: "Information Extraction", points: ["Named entity recognition and relationship extraction", "Automated summarization from large text corpora"] },
      { icon: "🧠", title: "Knowledge-Grounded AI", points: ["RAG (Retrieval-Augmented Generation) implementations", "Internal knowledge base assistants"] },
    ],
    whyUs: [
      "Proven NLP implementations across customer service, audit, and compliance domains",
      "Knowledge-grounded approaches that ensure accuracy over generic LLM responses",
      "Secure deployments keeping sensitive business data within your environment",
      "Integration with existing CRM, ITSM, and communication platforms",
    ],
    faqs: [
      { q: "Can AI chatbots handle complex, multi-step queries?", a: "Yes, modern conversational AI with proper design handles multi-turn dialogues and complex workflows well beyond simple FAQ bots." },
      { q: "How do you prevent AI assistants from giving incorrect answers?", a: "We use retrieval-augmented generation (RAG) to ground responses in your verified internal knowledge base, significantly reducing hallucination." },
      { q: "Can NLP solutions work with our internal documents?", a: "Yes, we build knowledge-grounded assistants trained on your policies, manuals, and internal content with appropriate access controls." },
      { q: "What languages do your NLP solutions support?", a: "We support major languages including English, with multilingual model options available for global deployments." },
    ],
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    icon: "🖼️",
    intro:
      "Enable your systems to see and interpret visual information intelligently. At TechShield Analytics, we develop computer vision solutions that automate visual inspection, extract information from documents and images, and enable new capabilities through visual AI.",
    keyOutcomes: [
      "Automate visual inspection and quality control processes",
      "Extract structured data from images, documents, and video streams",
      "Enable real-time visual monitoring and anomaly detection",
      "Process large volumes of visual content at scale without human review",
      "Build new product and service capabilities powered by visual intelligence",
    ],
    services: [
      { icon: "🔍", title: "Image Recognition & Classification", points: ["Object detection and classification models", "Custom training on domain-specific image datasets"] },
      { icon: "📄", title: "Document Processing & OCR", points: ["Intelligent document extraction and processing", "Form recognition and data capture"] },
      { icon: "🎥", title: "Video Analytics", points: ["Real-time video monitoring and event detection", "Behavioral pattern recognition from video streams"] },
      { icon: "✅", title: "Visual Quality Control", points: ["Automated defect detection in manufacturing", "Compliance checking through visual inspection"] },
    ],
    whyUs: [
      "Custom model development—not generic APIs applied without domain adaptation",
      "Experience across document processing, manufacturing, and operational use cases",
      "Edge and cloud deployment options for diverse operational environments",
      "Integration with existing operational systems and workflows",
    ],
    faqs: [
      { q: "How much labeled training data do we need for computer vision?", a: "It varies by use case. We use transfer learning and data augmentation to minimize labeling requirements while achieving target accuracy." },
      { q: "Can computer vision work in real time?", a: "Yes, we design models optimized for real-time inference and can deploy on edge devices for low-latency applications." },
      { q: "What is the difference between OCR and intelligent document processing?", a: "OCR extracts text; intelligent document processing understands document structure, extracts specific fields, and classifies document types." },
      { q: "How do you handle privacy in video analytics?", a: "We implement privacy-preserving techniques including face blurring, data minimization, and processing on-premise to address privacy requirements." },
    ],
  },
  {
    id: "mlops",
    title: "AI Model Deployment & MLOps",
    icon: "🔄",
    intro:
      "Deploy AI models reliably and keep them performing in production. At TechShield Analytics, we build the MLOps infrastructure that takes models from notebook to production—with monitoring, retraining, and governance so your AI investments deliver lasting value.",
    keyOutcomes: [
      "Deploy ML models into production with reliability, versioning, and rollback capability",
      "Monitor model performance continuously to detect drift before it affects outcomes",
      "Automate retraining pipelines that keep models accurate as data evolves",
      "Build CI/CD workflows for ML that mirror software engineering best practices",
      "Establish ML governance ensuring models meet compliance and ethics requirements",
    ],
    services: [
      { icon: "🚀", title: "Model Deployment", points: ["REST API and batch inference deployment", "Cloud-native deployment on SageMaker, Azure ML, Vertex AI"] },
      { icon: "📊", title: "Model Monitoring", points: ["Drift detection and performance tracking", "Automated alerting for degradation"] },
      { icon: "🔄", title: "Retraining Pipelines", points: ["Automated retraining triggers based on drift thresholds", "Continuous integration for ML workflows"] },
      { icon: "⚖️", title: "ML Governance", points: ["Model registry and versioning", "Experiment tracking and reproducibility"] },
    ],
    whyUs: [
      "MLOps expertise that prevents the common failure of models performing well in development but poorly in production",
      "Platform expertise across AWS SageMaker, Azure ML, and Google Vertex AI",
      "Governance-first approach ensuring deployed models are auditable and compliant",
      "Full lifecycle ownership from initial deployment to eventual model retirement",
    ],
    faqs: [
      { q: "Why do AI projects often fail after initial deployment?", a: "Most failures stem from data drift, lack of monitoring, and absence of retraining pipelines. MLOps addresses all of these systematically." },
      { q: "What is model drift and why does it matter?", a: "Drift occurs when the statistical patterns in production data diverge from training data, causing model accuracy to degrade over time." },
      { q: "Do we need a dedicated ML engineering team for MLOps?", a: "Not necessarily. We can manage MLOps infrastructure as a service or build and hand over capability to your existing team." },
      { q: "How long does model deployment take?", a: "Simple model serving can be set up in days; full MLOps pipelines with monitoring and retraining typically take 4–8 weeks." },
    ],
  },
  {
    id: "genai",
    title: "Generative AI (GenAI)",
    icon: "✨",
    intro:
      "Transform workflows with Generative AI and intelligent copilots. At TechShield Analytics, we build GenAI solutions that automate content creation, enhance decision-making, and unlock insights from your internal data. From chatbots to intelligent assistants—we help you scale smarter. GenAI doesn't just analyze data—it creates and assists.",
    keyOutcomes: [
      "Automate document-heavy workflows with intelligent generation and extraction",
      "Build domain-specific AI assistants grounded in your internal knowledge",
      "Enable business users to query data in plain language and get instant insights",
      "Accelerate development workflows with AI-assisted code generation",
      "Reduce manual effort in reporting, summarization, and content creation",
    ],
    services: [
      { icon: "🤖", title: "AI Chatbots & Virtual Assistants", points: ["Customer support and internal helpdesk automation", "Context-aware, knowledge-grounded conversational AI", "Audit query assistants and HR bots"] },
      { icon: "💬", title: "Chat with Data", points: ["Natural language querying of internal data", "Ask questions, get insights instantly", "\"Show me high-risk transactions\" — real answers"] },
      { icon: "💻", title: "Code Generation & Automation", points: ["AI-assisted coding and script generation", "Test case automation", "DevSecOps pipeline integration"] },
      { icon: "📄", title: "Intelligent Document Processing", points: ["Extract data from PDFs and contracts", "Generate summaries from large document sets", "Compliance document and audit report processing"] },
      { icon: "🧠", title: "AI Copilots", points: ["Business copilots for operational decision support", "Audit and risk copilots for analysts", "Executive insight assistants"] },
      { icon: "✍️", title: "Content & Report Generation", points: ["Automated analytical report writing", "Business summaries and communication drafting", "Regulatory submission content support"] },
    ],
    approach: [
      { step: "Identify Use Cases", desc: "Discover highest-value GenAI opportunities aligned to your business processes." },
      { step: "Data & Context Integration", desc: "Connect GenAI to your internal data sources with appropriate security controls." },
      { step: "Model Selection & Design", desc: "Select the right foundation model and design prompting and retrieval strategies." },
      { step: "Deployment & Integration", desc: "Deploy into existing workflows, applications, and communication platforms." },
      { step: "Monitoring & Optimization", desc: "Track output quality, user adoption, and continuously improve model performance." },
    ],
    whyUs: [
      "Deep audit + analytics integration enabling compliance-aware GenAI applications",
      "Business-focused use cases—not technology-first implementations",
      "Secure deployments keeping sensitive data within your environment",
      "Cloud expertise across Azure OpenAI, AWS Bedrock, and Google Vertex AI",
    ],
    faqs: [
      { q: "Is GenAI secure for internal business use?", a: "Yes, when properly implemented. We deploy private instances and retrieval-augmented approaches that prevent your data from being used to train public models." },
      { q: "Can GenAI work with our internal documents and data?", a: "Yes, we build RAG systems that ground GenAI responses in your verified internal content for accurate, document-backed answers." },
      { q: "How accurate are GenAI responses?", a: "Accuracy depends on the quality of grounding data and system design. We implement validation, citation tracking, and human review workflows to maximize reliability." },
      { q: "How long does GenAI implementation take?", a: "Proof-of-concept implementations typically take 3–6 weeks; production deployments with full integration and governance take 2–4 months." },
    ],
  },
];

// ─── PILLARS ──────────────────────────────────────────────────────────────────

const pillars = [
  {
    id: "cloud",
    icon: Cloud,
    label: "Cloud & Digital Transformation",
    active: true,
    intro:
      "Cloud transformation is more than a technology upgrade—it's a complete shift in how your business operates and grows. At TechShield Analytics, we help organizations reimagine their cloud strategy by aligning technology, processes, and people into a unified, secure, and scalable ecosystem. Our focus is on improving performance, reducing operational friction, and strengthening resilience against modern cyber risks.\n\nFrom initial discovery and planning to migration, optimization, and ongoing management, we stay involved at every stage of your journey. Our team ensures your cloud environment remains secure, efficient, and adaptable, while supporting the modernization and reliable hosting of your mission-critical applications.",
    subcategories: cloudSubcategories,
  },
  {
    id: "saas",
    icon: Layers,
    label: "SaaS Solutions",
    active: false,
    intro: "Coming soon.",
    subcategories: [],
  },
  {
    id: "audit",
    icon: Shield,
    label: "Audit, Risk & Cybersecurity",
    active: true,
    intro:
      "Strengthen your business with integrated Audit, Risk & Cybersecurity solutions. At TechShield Analytics, we help organizations identify risks, ensure compliance, and protect their digital assets with a data-driven, security-first approach.\n\nFrom assessment to continuous monitoring, we keep your business secure and audit-ready. Our integrated practice combines deep internal audit expertise, advanced risk analytics, and cutting-edge cybersecurity capabilities—giving you a unified view of risk across your entire organization.",
    subcategories: auditSubcategories,
  },
  {
    id: "data",
    icon: Database,
    label: "Data Analytics & Business Intelligence",
    active: true,
    intro:
      "Build intelligent data platforms that drive real business decisions. At TechShield Analytics, we design, build, and scale modern data ecosystems—from data ingestion to advanced analytics and AI-driven insights.\n\nWe don't build dashboards—we build data-driven decision systems. Our end-to-end data practice covers engineering, warehousing, BI, real-time analytics, and AI augmentation, delivering a unified platform that turns fragmented data into strategic intelligence.",
    subcategories: dataSubcategories,
  },
  {
    id: "ai",
    icon: Brain,
    label: "Artificial Intelligence",
    active: true,
    intro:
      "Transform your business with AI-driven intelligence. At TechShield Analytics, we help organizations leverage the power of Artificial Intelligence and Machine Learning to automate processes, gain predictive insights, and make smarter decisions at scale.\n\nFrom data to decisions—we make AI work for you. Our AI practice spans strategy and consulting, custom model development, intelligent automation, NLP, computer vision, and Generative AI—giving you the full spectrum of AI capability grounded in real-world business value.",
    subcategories: aiSubcategories,
  },
];

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden cursor-pointer" onClick={() => setOpen(!open)}>
      <div className="flex items-center justify-between px-5 py-4 bg-white/5 hover:bg-white/8 transition">
        <span className="text-sm font-medium text-gray-200">{q}</span>
        <ChevronDown size={16} className={`text-blue-400 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
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

function SubSubDetail({ ss }: { ss: SubSub }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="mt-6 bg-gradient-to-br from-indigo-600/15 to-blue-600/15 border border-indigo-400/20 rounded-2xl p-6 space-y-6"
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl">{ss.icon}</span>
        <h5 className="text-lg font-bold text-white">{ss.title}</h5>
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{ss.intro}</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {ss.items.map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
            <span className="text-xl mb-2 block">{item.icon}</span>
            <h6 className="font-semibold text-white text-sm mb-2">{item.title}</h6>
            <ul className="space-y-1">
              {item.points.map((p, j) => (
                <li key={j} className="text-gray-400 text-xs flex gap-2 items-start">
                  <ArrowRight size={11} className="mt-0.5 text-indigo-400 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {ss.positioningLine && (
        <p className="text-indigo-300 text-sm italic border-l-2 border-indigo-400 pl-4">{ss.positioningLine}</p>
      )}
    </motion.div>
  );
}

function SubcategoryDetail({ sub }: { sub: Subcategory }) {
  const [activeSubSub, setActiveSubSub] = useState<string | null>(null);
  const selectedSubSub = sub.subSubs?.find((s) => s.id === activeSubSub);

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
            <motion.div key={i} whileHover={{ y: -4 }} className="bg-white/5 border border-white/10 rounded-xl p-5">
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

      {/* Deliverables (VAPT) */}
      {sub.deliverables && sub.deliverables.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-yellow-400 rounded-full inline-block" />
            What You Get
          </h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {sub.deliverables.map((d, i) => (
              <div key={i} className="flex gap-3 bg-white/5 rounded-xl p-4 border border-white/8">
                <CheckCircle2 size={18} className="text-yellow-400 mt-0.5 shrink-0" />
                <p className="text-gray-300 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Approach */}
      {sub.approach && sub.approach.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-cyan-400 rounded-full inline-block" />
            Our Approach
          </h4>
          <div className="flex flex-col gap-0">
            {sub.approach.map((step, i) => (
              <div key={i} className="flex gap-5 relative">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-400 text-xs font-bold shrink-0 z-10">
                    {i + 1}
                  </div>
                  {i < sub.approach!.length - 1 && <div className="w-px flex-1 bg-blue-400/20 my-1" />}
                </div>
                <div className={`pb-6 ${i === sub.approach!.length - 1 ? "" : ""}`}>
                  <p className="font-semibold text-white text-sm">{step.step}</p>
                  <p className="text-gray-400 text-sm mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Sub-Sub Pillars (TPRM → ERM, TRM) */}
      {sub.subSubs && sub.subSubs.length > 0 && (
        <div>
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-indigo-400 rounded-full inline-block" />
            Specialized Frameworks
          </h4>
          <div className="flex flex-wrap gap-3 mb-4">
            {sub.subSubs.map((ss) => (
              <button
                key={ss.id}
                onClick={() => setActiveSubSub(activeSubSub === ss.id ? null : ss.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                  activeSubSub === ss.id
                    ? "bg-indigo-500 border-indigo-500 text-white shadow-lg shadow-indigo-500/20"
                    : "bg-white/5 border-white/10 text-gray-300 hover:border-indigo-400/50 hover:text-white"
                }`}
              >
                <span>{ss.icon}</span>
                <span>{ss.title}</span>
                <ChevronRight size={13} className={`transition-transform duration-200 ${activeSubSub === ss.id ? "rotate-90" : ""}`} />
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            {selectedSubSub && <SubSubDetail key={selectedSubSub.id} ss={selectedSubSub} />}
          </AnimatePresence>
        </div>
      )}

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
          {sub.faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
        </div>
      </div>
    </motion.div>
  );
}

function PillarContent({ pillar }: { pillar: (typeof pillars)[0] }) {
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const selectedSub = pillar.subcategories.find((s) => s.id === activeSub);

  if (!pillar.active) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="text-6xl mb-6 opacity-30">🚧</div>
        <h3 className="text-2xl font-semibold text-white mb-3">Coming Soon</h3>
        <p className="text-gray-500 max-w-md">This pillar is currently under development. Check back soon for detailed services and capabilities.</p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="max-w-3xl">
        {pillar.intro.split("\n\n").map((para, i) => (
          <p key={i} className={`text-gray-400 leading-relaxed text-lg ${i > 0 ? "mt-4" : ""}`}>{para}</p>
        ))}
      </div>

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
              <ChevronRight size={14} className={`transition-transform duration-200 ${activeSub === sub.id ? "rotate-90" : ""}`} />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedSub && <SubcategoryDetail key={selectedSub.id} sub={selectedSub} />}
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
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-[800px] h-[800px] bg-blue-600/20 blur-[160px] rounded-full -top-40 -left-40" />
        <div className="absolute w-[700px] h-[700px] bg-purple-600/20 blur-[150px] rounded-full top-1/2 right-0" />
        <div className="absolute w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full bottom-0 left-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 space-y-16">
        {/* HEADER */}
        <section className="max-w-3xl">
          <p className="text-blue-400 text-sm uppercase tracking-widest mb-4 font-medium">What We Do</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Platform <span className="text-blue-400">Capabilities</span>
          </h1>
          <p className="text-gray-400 text-xl leading-relaxed">
            TechShield Analytics provides enterprise-grade cloud, data and AI systems designed to scale modern data platforms and intelligent decision systems.
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
                  <Icon size={18} className={isActive ? "text-blue-400" : p.active ? "text-gray-400" : "text-gray-700"} />
                  <span>{p.label}</span>
                  {!p.active && (
                    <span className="text-[10px] bg-white/10 text-gray-500 px-2 py-0.5 rounded-full">Soon</span>
                  )}
                </button>
              );
            })}
          </div>
        </section>

        <div className="h-px bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-transparent" />

        {/* PILLAR CONTENT */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            {(() => { const Icon = currentPillar.icon; return <Icon size={28} className="text-blue-400" />; })()}
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
              From cloud architecture to AI-driven platforms, TechShield Analytics helps organizations design modern technology ecosystems.
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
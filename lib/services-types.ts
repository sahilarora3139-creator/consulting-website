// lib/services-types.ts

export type Service = {
  icon: string;
  title: string;
  points: string[];
};

export type Faq = { q: string; a: string };

export type ApproachStep = { step: string; desc: string };

export type SubSub = {
  id: string;
  title: string;
  icon: string;
  intro: string;
  items: { icon: string; title: string; points: string[] }[];
  positioningLine?: string;
};

export type Subcategory = {
  id: string;
  title: string;
  icon: string;
  intro: string;
  keyOutcomes: string[];
  services: Service[];
  whyUs: string[];
  faqs: Faq[];
  approach?: ApproachStep[];
  deliverables?: string[];
  subSubs?: SubSub[];
  // SEO
  metaTitle?: string;
  metaDescription?: string;
};

export type Pillar = {
  id: string;
  iconName: "Cloud" | "Shield" | "Database" | "Brain" | "Layers";
  label: string;
  shortLabel: string;
  tagline: string;
  active: boolean;
  intro: string;
  subcategories: Subcategory[];
  // SEO
  metaTitle?: string;
  metaDescription?: string;
};

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://pinnacletherapeutics.in";

export const contactEmail = "info@pinnacletherapeutics.in";
export const contactPhoneDisplay = "9821607700";
export const contactPhoneE164 = "+919821607700";

export type FocusArea = {
  id: string;
  number: string;
  title: string;
  briefing: string;
  image: string;
  categoryTag: string;
};

export const focusAreas: FocusArea[] = [
  {
    id: "orthopedic",
    number: "01",
    title: "Orthopedic",
    briefing: "Targeted bone, joint, and musculoskeletal formulations engineered for structural resilience, cartilage support, and pain-free mobility.",
    image: "/images/focus-areas/orthopedic.jpg",
    categoryTag: "Musculoskeletal & Bone Care"
  },
  {
    id: "internal-medicine",
    number: "02",
    title: "Internal Medicine",
    briefing: "Comprehensive systemic therapies addressing complex acute and chronic clinical conditions across diverse adult patient populations.",
    image: "/images/focus-areas/internal-medicine.jpg",
    categoryTag: "Systemic Clinical Therapeutics"
  },
  {
    id: "cardiometabolic",
    number: "03",
    title: "Cardiometabolic Care",
    briefing: "Cardiovascular and metabolic health solutions focused on vascular integrity, lipid balance, and metabolic equilibrium.",
    image: "/images/focus-areas/cardiometabolic.jpg",
    categoryTag: "Vascular & Metabolic Health"
  },
  {
    id: "gynaecology",
    number: "04",
    title: "Gynaecology",
    briefing: "Specialized maternal and reproductive health formulations engineered to support women's health through every lifecycle stage.",
    image: "/images/focus-areas/gynaecology.jpg",
    categoryTag: "Women’s Health & Maternal Care"
  },
  {
    id: "neutraceutical",
    number: "05",
    title: "Nutraceutical",
    briefing: "High-potency bio-active dietary supplements, essential micronutrients, and trace elements backed by nutritional science.",
    image: "/images/focus-areas/nutraceutical.jpg",
    categoryTag: "Evidence-Based Supplements"
  },
  {
    id: "everyday-wellness",
    number: "06",
    title: "Everyday Wellness",
    briefing: "Essential daily health formulations designed to enhance immunity, cellular vitality, antioxidant protection, and active living.",
    image: "/images/focus-areas/everyday-wellness.jpg",
    categoryTag: "Vitality & Preventative Care"
  },
  {
    id: "gastroenterology",
    number: "07",
    title: "Gastroenterology",
    briefing: "Advanced digestive health, acid control, and gastrointestinal mucosal barrier protection for optimal gut wellness.",
    image: "/images/focus-areas/gastroenterology.jpg",
    categoryTag: "Digestive & GI Formulations"
  },
  {
    id: "respiratory-health",
    number: "08",
    title: "Respiratory Health",
    briefing: "Targeted airway management, pulmonary comfort, and anti-infective formulations designed for clear, healthy breathing.",
    image: "/images/focus-areas/respiratory.jpg",
    categoryTag: "Airway & Pulmonary Care"
  }
];

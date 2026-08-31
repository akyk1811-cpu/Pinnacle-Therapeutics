export type Product = {
  brand: string;
  form: "Tablet" | "Capsule" | "Sachet" | "Powder";
  composition?: string;
  category: "Nutraceutical" | "Women’s health" | "Pain management" | "Gastroenterology" | "Anti-infective" | "Wellness";
  note?: string;
  image?: string;
};

export const products: Product[] = [
  {
    brand: "UBX-GOLD",
    form: "Tablet",
    category: "Nutraceutical",
    image: "/images/products/UBX-GOLD.jpg",
    composition: "Co-Enzyme Q10 100 mg, Lycopene 5000 mcg, Omega-3 Fatty Acids (EPA 90 mg + DHA 60 mg), L-Arginine 100 mg, L-Carnitine 500 mg, Wheat Germ 25 mg, Zinc Sulphate 27.45 mg"
  },
  {
    brand: "UBX-FORTE",
    form: "Tablet",
    category: "Nutraceutical",
    image: "/images/products/UBX-FORTE.jpg",
    composition: "Co-Enzyme Q10 300 mg"
  },
  {
    brand: "ALPHAHEP-400",
    form: "Tablet",
    category: "Wellness",
    image: "/images/products/ALPHAHEP-400.jpg",
    composition: "Tocopherol 400iu, Omega 3 fatty acid 500mg"
  },
  {
    brand: "ALPHAHEP-L",
    form: "Tablet",
    category: "Wellness",
    image: "/images/products/ALPHAHEP-L.jpg",
    composition: "Silymarin 140mg, L-ornithine L-aspartate 150mg"
  },
  {
    brand: "DYDOPURE",
    form: "Tablet",
    category: "Women’s health",
    image: "/images/products/DYDOPURE.jpg",
    composition: "Dydrogesterone 10 mg"
  },
  {
    brand: "GILDAGEST-200 SR",
    form: "Tablet",
    category: "Women’s health",
    image: "/images/products/GILDAGEST-200-SR.jpg",
    composition: "Natural Micronised Progesterone 200 mg SR"
  },
  {
    brand: "GILDAGEST-300 SR",
    form: "Tablet",
    category: "Women’s health",
    image: "/images/products/GILDAGEST-300-SR.jpg",
    composition: "Natural micronized progesterone 300mg SR"
  },
  {
    brand: "KLZ-PLUS",
    form: "Capsule",
    category: "Nutraceutical",
    image: "/images/products/KLZ-PLUS.jpg",
    composition: "Calcium Citrate Malate 500 mg, Calcitriol 0.25 mcg, Omega-3 Fatty Acid 150 mg, Vitamin K2-7 45 mcg, Methylcobalamin 1500 mcg, Pyridoxal Phosphate 0.5 mg, L-Methylfolate Calcium 1 mg, Lycopene 5000 mcg"
  },
  {
    brand: "KLZ",
    form: "Tablet",
    category: "Nutraceutical",
    image: "/images/products/KLZ.jpg",
    composition: "Calcium Citrate 1000 mg, Magnesium 100 mg, Zinc Sulphate 4 mg, Vitamin D3 200 IU"
  },
  {
    brand: "KLZ-K2",
    form: "Tablet",
    category: "Nutraceutical",
    image: "/images/products/KLZ-K2.jpg",
    composition: "Calcium Citrate Malate 1000 mg, Vitamin D3 1000 IU, Zinc Oxide 15 mg, Magnesium Oxide 50 mg, Vitamin K2-7 50 mcg"
  },
  {
    brand: "ZYNOR-NT",
    form: "Tablet",
    category: "Pain management",
    image: "/images/products/ZYNOR-NT.jpg",
    composition: "Pregabalin 75 mg + Nortriptyline 10 mg"
  },
  {
    brand: "ZEPAMOL-SP",
    form: "Tablet",
    category: "Pain management",
    image: "/images/products/ZEPAMOL-SP.jpg",
    composition: "Aceclofenac 100 mg + Serratiopeptidase 15 mg + Paracetamol 325 mg"
  },
  {
    brand: "PAXO-D",
    form: "Tablet",
    category: "Gastroenterology",
    image: "/images/products/PAXO-D.jpg",
    composition: "Pantoprazole 40 mg + Domperidone 10 mg"
  },
  {
    brand: "PAXO-DSR",
    form: "Capsule",
    category: "Gastroenterology",
    image: "/images/products/PAXO-DSR.jpg",
    composition: "Pantoprazole 40 mg + Domperidone 30 mg SR"
  },
  {
    brand: "PAXO-RD",
    form: "Capsule",
    category: "Gastroenterology",
    image: "/images/products/PAXO-RD.jpg",
    composition: "Rabeprazole 20mg, Domperidone 30mg SR"
  },
  {
    brand: "L-PRODIN",
    form: "Sachet",
    category: "Women’s health",
    image: "/images/products/L-PRODIN.jpg",
    composition: "L-Arginine 3 g + Proanthocyanidins 75 mg",
    note: "Sugar free"
  },
  {
    brand: "DROFA-M",
    form: "Tablet",
    category: "Pain management",
    image: "/images/products/DROFA-M.jpg",
    composition: "Drotaverine Hydrochloride 80 mg + Mefenamic Acid 250 mg"
  },
  {
    brand: "VISARON",
    form: "Tablet",
    category: "Nutraceutical",
    image: "/images/products/VISARON.jpg",
    composition: "Ferrous Ascorbate 100 mg, Folic Acid 1.5 mg, Zinc Sulphate 22.5 mg"
  },
  {
    brand: "MURFIX-200 LB",
    form: "Capsule",
    category: "Anti-infective",
    image: "/images/products/MURFIX-200LB.jpg",
    composition: "Cefixime 200 mg, lactic acid bacillus 60 million spores"
  },
  {
    brand: "MURFIX-O",
    form: "Tablet",
    category: "Anti-infective",
    image: "/images/products/MURFIX-O.jpg",
    composition: "Cefixime 200 mg, Ofloxacin 200 mg"
  },
  {
    brand: "ROF-OZ",
    form: "Tablet",
    category: "Anti-infective",
    image: "/images/products/ROF-OZ.jpg",
    composition: "Ofloxacin 200 mg + Ornidazole 500 mg"
  },
  {
    brand: "L-Prodino",
    form: "Powder",
    category: "Wellness",
    image: "/images/products/L-Prodino.jpg",
    note: "Nutritional supplement for liver health (Chocolate Flavour)."
  }
];

/**
 * Verified Unsplash photo IDs (HTTP 200 tested).
 * Format: https://images.unsplash.com/photo-{id}?w={width}&q=80
 */
export const IMAGES = {
  /** Tropical coastal villa — primary brand imagery */
  hero: "1613490493576-7fde63acd811",
  /** Gold Coast: luxury estate at golden hour / coastal living */
  about: "1600596542815-ffad4c1539a9",
  penthouse: [
    "1600596542815-ffad4c1539a9",
    "1600607687939-ce8a6c25118c",
    "1600047509807-ba8f99d2cdde",
  ],
  townhouse: [
    "1600585154526-990dced4db0d",
    "1600047509807-ba8f99d2cdde",
    "1564013799919-ab600027ffc6",
  ],
  office: [
    "1497366216548-37526070297c",
    "1486406146926-c627a92ad1ab",
    "1600566753190-17f0baa2a6c3",
  ],
  villa: [
    "1613490493576-7fde63acd811",
    "1600566753190-17f0baa2a6c3",
    "1600047509807-ba8f99d2cdde",
  ],
  accraApt: [
    "1600210492493-0946911123ea",
    "1600607687939-ce8a6c25118c",
    "1564013799919-ab600027ffc6",
  ],
  estate: ["1600585154526-990dced4db0d", "1600047509807-ba8f99d2cdde"],
  rental: ["1600607687920-4e2a09cf159d", "1600210492493-0946911123ea"],
  land: ["1500382017468-9049fed747ef", "1564013799919-ab600027ffc6"],
  categories: {
    apartments: "1600210492493-0946911123ea",
    offices: "1486406146926-c627a92ad1ab",
    villas: "1613490493576-7fde63acd811",
    commercial: "1497366216548-37526070297c",
    land: "1500382017468-9049fed747ef",
  },
} as const;

export function luxuryUrl(photoId: string, width = 1920): string {
  return `https://images.unsplash.com/photo-${photoId}?w=${width}&q=80&auto=format&fit=crop`;
}

export const HERO_IMAGE_URL = luxuryUrl(IMAGES.hero, 1920);
export const ABOUT_IMAGE_URL = luxuryUrl(IMAGES.about, 2400);

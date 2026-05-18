/** Curated Unsplash IDs — luxury real estate photography */
export const IMAGES = {
  hero: "1613490493576-7fde63acd811",
  investment: "1512917774080-999a75830299",
  about: "1600585154340-be6162a9a2a6",
  penthouse: [
    "1600596542815-ffad4c1539a9",
    "1600607687939-ce8a6c25118c",
    "1600210492483-0946911123ea",
  ],
  townhouse: [
    "1600585154340-be6162a9a2a6",
    "1600047509807-ba8f99d2cdde",
    "1512917774080-999a75830299",
  ],
  office: [
    "1497366216548-37526070297c",
    "1497366751453-902cef43b0b1",
    "1486406146926-c627a92ad1ab",
  ],
  villa: [
    "1613490493576-7fde63acd811",
    "1605276374101-de4d6b6a2e3e",
    "1600566753190-17f0baa2a6c3",
  ],
  accraApt: [
    "1600607687644-c7171b424245",
    "1600210492493-0946911123ea",
    "1522708323590-d24dbb6b9267",
  ],
  estate: [
    "1600585154526-990dced4db0d",
    "1512917774080-999a75830299",
  ],
  loft: [
    "1600607687920-4e2a09cf159d",
    "1600210492483-0946911123ea",
  ],
  land: ["1500382017468-9049fed747ef", "1464822759023-fed95897e2c4"],
  categories: {
    apartments: "1522708323590-d24dbb6b9267",
    offices: "1486406146926-c627a92ad1ab",
    villas: "1613490493576-7fde63acd811",
    commercial: "1497366216548-37526070297c",
    land: "1500382017468-9049fed747ef",
  },
} as const;

export function luxuryUrl(photoId: string, width = 2000): string {
  return `https://images.unsplash.com/photo-${photoId}?w=${width}&q=92&auto=format&fit=crop`;
}

export function luxuryThumb(photoId: string): string {
  return luxuryUrl(photoId, 400);
}

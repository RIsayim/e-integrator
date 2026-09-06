export type Project = {
  slug: string;
  title: string;
  location: string;
  category: string;
  client: string;
  year: string;
  services: string[];
  description: string;
  scene: string;
  image: string;
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: 'lumé-studio', title: 'Lumé Studio', location: 'Milan, Italy', category: 'Commercial', client: 'Atelier Collective', year: '2023',
    services: ['Interior Design', 'Lighting Design', 'Space Planning'], scene: 'charcoal', image: 'lVdV1MiB2EiktdICNa5kk9xSeM.jpg',
    gallery: ['eJXlmLx8FVhzFaA9WBiu4KJayM.jpg', '3iuVVNhVZXaYvpSuWkZKMgkqbq0.jpg', 'yG2WvLgt76HMu9o64a3QvpLAQ.jpg', '0DNp1oc9pZQqQihUidlEslzyyQ.jpg', 'BSVMveDavrtAUExOw4L3lwdRUwA.jpg', 'KBbkCDy6eq8BesLluatGMXSybU.jpg', 'Nr0cGv5jAsCP9LgCGnlJV6L4.jpg'],
    description: 'A contemporary workspace designed to inspire creativity and focus. Clean lines, layered lighting, and subtle material contrasts define the interior, while a neutral palette enhances calm and productivity. Every element is tailored to reflect the brand’s refined yet forward-thinking identity.'
  },
  {
    slug: 'the-horizon-residence', title: 'The Horizon Residence', location: 'London, United Kingdom', category: 'Residential', client: 'AURA Development Group', year: '2025',
    services: ['Interior Design', 'Furniture Curation', 'Styling', 'Lighting Design'], scene: 'sand', image: 'bA6pm3kKCsRbvGPvpS2gO3UANI0.jpg',
    gallery: ['Dv9ZpRQUkoV6aHlzBWHtly1HvmI.jpg', '10sqFBJRP5YHVjY5b319o4tIMg.jpg', '2pU0YmANVziZ6OALlblvn4hDPc.jpg', '5cBgAIfQocDr0B7qUPiraYUs0.jpg', 'K0miXoasSy6MQOArsNY06rETEj0.jpg', 'pG8CMmZ56WMFehSlxMSd1VTD6EU.jpg', 'vEVUTrAa5uMqScnIPADYTrUIa6k.jpg'],
    description: 'Each project begins with a deep understanding of the client’s lifestyle and aspirations. From spatial planning to material selection, every detail is carefully considered to create interiors that feel harmonious, timeless, and uniquely personal. The result is a space that reflects both function and emotion — where design meets comfort in perfect balance.'
  },
  {
    slug: 'the-verena-residence', title: 'The Verena Residence', location: 'Copenhagen, Denmark', category: 'Residential', client: 'Private Client', year: '2024',
    services: ['Interior Design', 'Furniture Curation', 'Space Planning', 'Styling'], scene: 'forest', image: 'clANltkimMrgnAQNdfI1xzsQ.jpg',
    gallery: ['zxZweK7WPniKhlbnyIOpZ5fvY.jpg', 'j17jitGYsXrLRWXvtGm13qWe7o.jpg', 'xcSN57BUo1zcndhjLY4DEeSMfpc.jpg', 'LtwRq28z932cUOht2RFWKeZLoo.jpg', '53Bpdn2be4PHkM3HpWzpQ2gJ4hI.jpg', '8SMYXhL5MrivR0gBzllB6laRpIQ.jpg', 'IA2xyKHjR4uK7CQg6WzW1qLFOU0.jpg'],
    description: 'A calm, light-filled residence designed to capture the essence of Scandinavian simplicity. Natural textures, warm wood, and soft neutral tones create an atmosphere of understated elegance. Every detail is thoughtfully composed to balance modern functionality with timeless comfort.'
  },
  {
    slug: 'arden-boutique-hotel', title: 'Arden Boutique Hotel', location: 'Paris, France', category: 'Hospitality', client: 'Maison Group', year: '2024',
    services: ['Interior Design', 'Concept Development', 'Furniture Selection', 'Styling'], scene: 'rose', image: 'e3e2Wkwnu8Pu8f0P5wuIZXdUxI.jpg',
    gallery: ['j9gPKNvPrDwsjhKD8ao16oYL8E.jpg', 'aF5iBP7j57aF5a4euSr4Jr0WTGo.jpg', 'IeMI8BiTkx9i3Rktwp1pNhT9UJI.jpg', 'kOFIFrDfZQM5ZvkJEWJbe9SAo.jpg', 'bXDEOikdx3nU5DNdu8fwapmGnpk.jpg', 'JmVHttnaLPxWPKOPDRxGWPZdxew.jpg', 'WJmQDZXuxWzPzDWX2ZUsSawLLM.jpg'],
    description: 'An intimate hotel blending classic Parisian charm with contemporary refinement. Soft lighting, tactile fabrics, and tailored detailing create a sense of warmth and quiet sophistication. Each room is designed as a sanctuary — timeless, inviting, and effortlessly elegant.'
  },
  {
    slug: 'wavenwood-residence', title: 'Wavenwood Residence', location: 'Colombo, Sri Lanka', category: 'Residenct', client: 'Mr. Perera', year: '2024',
    services: ['Interior Design', 'Lighting', 'Swimming Pool', 'Garden Design'], scene: 'ocean', image: 'jAdFoKULTO5PhoduohFCGolY5U.jpg',
    gallery: ['bJNj6NXoXoIvo22mXzc3o9O4wI.jpg', 'HSn12iPO0uUOg0NCERqpiInaWg.jpg', 'xcSN57BUo1zcndhjLY4DEeSMfpc.jpg', 'LtwRq28z932cUOht2RFWKeZLoo.jpg', 'Ccy1uQ02SCJ8HiMkVcGWyTM6alk.jpg', '5cBgAIfQocDr0B7qUPiraYUs0.jpg', '2pU0YmANVziZ6OALlblvn4hDPc.jpg'],
    description: 'A serene redesign of a private residence focused on natural textures and restrained elegance. The space blends warm timber, soft linens, and diffused lighting to create a calm, livable atmosphere.'
  },
  {
    slug: 'ridgeview-loft', title: 'Ridgeview Loft', location: 'Mumbai, India', category: 'Exterior Design', client: 'Sean Parker', year: '2022',
    services: ['Landscape Design', 'Interior Design', 'Swimming Pool'], scene: 'clay', image: 'XPsGt6oKdp6DF0HC8NCKtWJa20.jpg',
    gallery: ['CGZmJVnE2KOSOnoGPQF1CqO69w.jpg', '3iuVVNhVZXaYvpSuWkZKMgkqbq0.jpg', 'IeMI8BiTkx9i3Rktwp1pNhT9UJI.jpg', 'kOFIFrDfZQM5ZvkJEWJbe9SAo.jpg', 'Dv9ZpRQUkoV6aHlzBWHtly1HvmI.jpg', '5cBgAIfQocDr0B7qUPiraYUs0.jpg', 'xcSN57BUo1zcndhjLY4DEeSMfpc.jpg'],
    description: 'A complete transformation of a coastal loft into a modern, sculptural living space. This project balances bold architectural details with minimal décor, delivering a harmonious yet expressive interior.'
  }
];

export const bySlug = (slug: string) => projects.find((project) => project.slug === slug);

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
};

export const projects: Project[] = [
  {
    slug: 'lume-studio', title: 'Lumé Studio', location: 'Milan, Italy', category: 'Commercial', client: 'Atelier Collective', year: '2023',
    services: ['Interior Design', 'Lighting Design', 'Space Planning'], scene: 'charcoal',
    description: 'A contemporary workspace designed to inspire creativity and focus. Clean lines, layered lighting, and subtle material contrasts define the interior, while a neutral palette enhances calm and productivity.'
  },
  {
    slug: 'the-horizon-residence', title: 'The Horizon Residence', location: 'Los Angeles, USA', category: 'Residential', client: 'Private Client', year: '2024',
    services: ['Interior Design', 'Custom Furniture', 'Styling'], scene: 'sand',
    description: 'A light-filled residence shaped around quiet moments and long views. Natural stone, sculptural forms, and warm oak form a relaxed, enduring backdrop for everyday life.'
  },
  {
    slug: 'the-verena-residence', title: 'The Verena Residence', location: 'London, UK', category: 'Residential', client: 'Verena Family', year: '2022',
    services: ['Interior Design', 'Art Curation', 'Joinery Design'], scene: 'forest',
    description: 'A refined family home where thoughtful detailing meets a calm, collected palette. Each room carries its own character while a shared material language connects the whole house.'
  },
  {
    slug: 'arden-boutique-hotel', title: 'Arden Boutique Hotel', location: 'Paris, France', category: 'Hospitality', client: 'Maison Group', year: '2024',
    services: ['Interior Design', 'Concept Development', 'Furniture Selection', 'Styling'], scene: 'rose',
    description: 'An intimate hotel blending classic Parisian charm with contemporary refinement. Soft lighting, tactile fabrics, and tailored detailing create a sense of warmth and quiet sophistication.'
  },
  {
    slug: 'wavenwood-residence', title: 'Wavenwood Residence', location: 'Colombo, Sri Lanka', category: 'Residential', client: 'Mr. Perera', year: '2024',
    services: ['Interior Design', 'Lighting', 'Swimming Pool', 'Garden Design'], scene: 'ocean',
    description: 'A serene redesign of a private residence focused on natural textures and restrained elegance. Warm timber, soft linens, and diffused lighting create a calm, livable atmosphere.'
  },
  {
    slug: 'ridgeview-loft', title: 'Ridgeview Loft', location: 'New York, USA', category: 'Residential', client: 'Ridgeview Partners', year: '2021',
    services: ['Space Planning', 'Interior Design', 'Lighting Design'], scene: 'clay',
    description: 'An urban loft reworked for generous entertaining and restful retreat. A flexible plan, textural finishes, and tailored storage bring clarity to the original industrial shell.'
  }
];

export const bySlug = (slug: string) => projects.find((project) => project.slug === slug);

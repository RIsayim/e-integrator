export type Project = {
  projectNumber: string;
  slug: string;
  title: string;
  category: string;
  service: string;
  location: string;
  year: string;
  clientType: string;
  shortDescription: string;
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
  heroImage: string;
  thumbnailImage: string;
  featureImage: string;
  galleryImages: string[];
  featured: boolean;
  servicesUsed: string[];
  systemHighlights: string[];
  technologyPartners?: string[];
};

export const projects: Project[] = [
  {
    projectNumber: '01', slug: 'whole-home-automation-residence', title: 'Whole Home Automation Residence', category: 'Smart Home Automation', service: 'Whole Home Control', location: 'New York, USA', year: '2026', clientType: 'Private Residence', featured: true,
    shortDescription: 'A fully connected residence where lighting, climate, entertainment, security and shading work together through one effortless control experience.',
    overview: 'A residence designed around effortless control, where every important environment responds naturally to the way its owners live.',
    challenge: 'The homeowners wanted sophisticated technology throughout the property without visible equipment, competing interfaces or complicated controls.',
    solution: 'A unified control platform was planned around the architecture, bringing lighting, climate, entertainment, shading, security and networking into one intuitive experience.',
    outcome: 'The completed system disappears naturally into the home while giving the owners confident control over every important environment.',
    heroImage: 'home_automation_001.png', thumbnailImage: 'outdoor_living_002.jpg', featureImage: 'lighting_001.jpg',
    galleryImages: ['home_automation_001.png', 'lighting_001.jpg', 'network_wifi_005.jpg', 'outdoor_living_002.jpg'],
    servicesUsed: ['Smart Home Control', 'Architectural Lighting', 'Automated Shading', 'Whole-Home Audio', 'Integrated Security', 'High-Performance Networking'],
    systemHighlights: ['Unified Smart Home Control', 'Architectural Lighting', 'Automated Shading', 'Whole-Home Audio', 'Integrated Security', 'High-Performance Networking'], technologyPartners: ['Control4', 'Lutron', 'Sonos']
  },
  {
    projectNumber: '02', slug: 'architectural-lighting-residence', title: 'Architectural Lighting Residence', category: 'Lighting & Shading', service: 'Lighting & Shading', location: 'Hamptons, USA', year: '2025', clientType: 'Private Residence', featured: true,
    shortDescription: 'A refined lighting and shading system designed to enhance the home architecture while adapting naturally throughout the day.',
    overview: 'A calm, layered lighting environment shaped to bring warmth, depth and an effortless daily rhythm to a coastal home.',
    challenge: 'The architecture relied on natural light and carefully selected materials, so technology needed to remain visually quiet while still offering flexibility.',
    solution: 'We designed considered lighting scenes and automated shading around the changing daylight, with discreet keypads and simple whole-home control.',
    outcome: 'The home now shifts naturally from daylight to evening, preserving the architectural intent in every setting.',
    heroImage: 'lighting_002.jpeg', thumbnailImage: 'lighting_003.jpeg', featureImage: 'shading_soluation_001.jpg',
    galleryImages: ['lighting_002.jpeg', 'lighting_003.jpeg', 'lighting_004.jpeg', 'lighting_006.webp'],
    servicesUsed: ['Lighting Control', 'Automated Shading', 'Scene Design', 'Keypad Design'], systemHighlights: ['Daylight-Responsive Shading', 'Layered Lighting Scenes', 'Discreet Architectural Keypads', 'Whole-Home Control'], technologyPartners: ['Lutron', 'Ketra']
  },
  {
    projectNumber: '03', slug: 'private-cinema-retreat', title: 'Private Cinema Retreat', category: 'Home Cinema', service: 'Private Cinema', location: 'Connecticut, USA', year: '2025', clientType: 'Private Residence', featured: true,
    shortDescription: 'A dedicated private cinema combining immersive sound, cinematic projection and intuitive one-touch control.',
    overview: 'A private cinema retreat that turns an evening at home into a fully immersive, effortlessly controlled experience.',
    challenge: 'Performance had to be exceptional without turning the room into a collection of visible technology and equipment.',
    solution: 'Projection, surround sound, lighting and climate were integrated into a single scene-based control system, tailored for both cinema and casual viewing.',
    outcome: 'The space feels intimate and architectural, while one touch creates a complete cinema experience.',
    heroImage: 'home_cinema_006.jpg', thumbnailImage: 'home_cinema_007.jpg', featureImage: 'home_cinema_008.jpg',
    galleryImages: ['home_cinema_006.jpg', 'home_cinema_007.jpg', 'home_cinema_008.jpg', 'home_cinema_003.jpg'],
    servicesUsed: ['Cinema Design', 'Projection', 'Surround Sound', 'Lighting Control'], systemHighlights: ['4K Projection', 'Immersive Surround Sound', 'One-Touch Cinema Scenes', 'Acoustic Integration'], technologyPartners: ['Sony', 'Control4', 'Bowers & Wilkins']
  },
  {
    projectNumber: '04', slug: 'connected-entertainment-residence', title: 'Connected Entertainment Residence', category: 'Home Audio & Entertainment', service: 'Home Audio', location: 'New Jersey, USA', year: '2024', clientType: 'Private Residence', featured: true,
    shortDescription: 'Whole-home audio and entertainment designed to deliver exceptional performance without interrupting the architecture.',
    overview: 'An entertaining-focused home where music, television and media follow the family seamlessly from room to room.',
    challenge: 'The owners wanted serious performance and simple access to every source without compromising the clean lines of the home.',
    solution: 'We integrated distributed audio, hidden speakers, television and networked media into a calm, room-by-room control experience.',
    outcome: 'The home now delivers exceptional sound and entertainment exactly where it is wanted, with virtually no visible technology.',
    heroImage: 'audio_001.jpg', thumbnailImage: 'audio_005.jpg', featureImage: 'audio_003.jpg',
    galleryImages: ['audio_001.jpg', 'audio_003.jpg', 'audio_005.jpg', 'audio_010.jpg'],
    servicesUsed: ['Whole-Home Audio', 'Media Rooms', 'Hidden Speakers', 'Networked Entertainment'], systemHighlights: ['Multi-Room Audio', 'Architectural Speakers', 'Unified Media Control', 'High-Resolution Streaming'], technologyPartners: ['Sonos', 'Sonance', 'Control4']
  },
  {
    projectNumber: '05', slug: 'secure-smart-residence', title: 'Secure Smart Residence', category: 'Security & Surveillance', service: 'Security & Surveillance', location: 'Westchester, USA', year: '2024', clientType: 'Private Residence', featured: false,
    shortDescription: 'An intelligently integrated security system combining surveillance, controlled access and remote awareness in one simple experience.',
    overview: 'A discreet residential security system that gives the owners awareness and confidence without placing technology at the forefront.',
    challenge: 'Security needed to be comprehensive and responsive while feeling as considered as every other element of the home.',
    solution: 'We connected surveillance, access, gates and alerts to the home control platform, with carefully placed equipment and straightforward remote monitoring.',
    outcome: 'The owners have a single clear view of their property and a more relaxed, secure daily experience.',
    heroImage: 'security_surveillance_005.jpg', thumbnailImage: 'security_surveillance_010.jpg', featureImage: 'security_surveillance_015.jpg',
    galleryImages: ['security_surveillance_005.jpg', 'security_surveillance_010.jpg', 'security_surveillance_015.jpg', 'security_surveillance_027.webp'],
    servicesUsed: ['Surveillance', 'Access Control', 'Remote Monitoring', 'Integrated Alerts'], systemHighlights: ['Property Surveillance', 'Controlled Access', 'Remote Awareness', 'Integrated Alerts'], technologyPartners: ['IC Realtime', 'Control4']
  },
  {
    projectNumber: '06', slug: 'high-performance-connected-home', title: 'High-Performance Connected Home', category: 'Networking & Wi-Fi', service: 'Networking & Wi-Fi', location: 'Long Island, USA', year: '2023', clientType: 'Private Residence', featured: false,
    shortDescription: 'A professionally engineered network providing reliable high-speed connectivity throughout the residence and surrounding outdoor spaces.',
    overview: 'A dependable digital foundation for a connected family home, designed to perform as invisibly as the rest of the integrated technology.',
    challenge: 'The property required reliable coverage inside and out, despite demanding construction materials and a growing number of connected devices.',
    solution: 'A managed wired and wireless network was planned from the ground up, with access points and equipment positioned for performance and serviceability.',
    outcome: 'Fast, reliable connectivity now supports work, entertainment, security and outdoor living across the entire property.',
    heroImage: 'network_wifi_005.jpg', thumbnailImage: 'network_wifi_006.jpg', featureImage: 'outdoor_living_007.jpg',
    galleryImages: ['network_wifi_005.jpg', 'network_wifi_006.jpg', 'network_wifi_009.png', 'outdoor_living_007.jpg'],
    servicesUsed: ['Managed Wi-Fi', 'Structured Wiring', 'Outdoor Coverage', 'Network Security'], systemHighlights: ['Whole-Property Wi-Fi', 'Wired Backbone', 'Managed Network', 'Outdoor Connectivity'], technologyPartners: ['Ubiquiti', 'Access Networks']
  }
];

export const featuredProjects = projects.filter((project) => project.featured);
export const bySlug = (slug: string) => projects.find((project) => project.slug === slug);

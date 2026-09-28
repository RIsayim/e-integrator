export type CoreService = {
  number: string;
  slug: string;
  menuLabel: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  overview: string;
  heroImage: string;
  featureImage: string;
  highlights: string[];
};

export const coreServices: CoreService[] = [
  { number: '01', slug: 'home-integration', menuLabel: 'Home Integration', title: 'Smart Home Automation', eyebrow: 'Home Integration', shortDescription: 'Bring lighting, climate, entertainment and security together through one intuitive control experience.', overview: 'A single, considered system for the home. We connect the technology you use every day so it responds naturally to the way you live.', heroImage: 'home_automation_001.png', featureImage: 'outdoor_living_002.jpg', highlights: ['Unified home control', 'Lighting and climate', 'Entertainment integration', 'Security and shading'] },
  { number: '02', slug: 'lighting-shading', menuLabel: 'Lighting & Shading', title: 'Lighting & Shading', eyebrow: 'Lighting & Shading', shortDescription: 'Create the perfect atmosphere with intelligent lighting and automated shading designed around your home.', overview: 'Light changes everything. We shape layered lighting and daylight-responsive shading around your architecture, routines and mood.', heroImage: 'lighting_001.jpg', featureImage: 'shading_soluation_001.jpg', highlights: ['Architectural lighting scenes', 'Automated shades', 'Daylight response', 'Elegant keypads'] },
  { number: '03', slug: 'home-theater', menuLabel: 'Home Theater', title: 'Home Theater', eyebrow: 'Private Cinema', shortDescription: 'Create a private cinema with immersive sound, cinematic projection and effortless one-touch control.', overview: 'A dedicated cinema should feel immersive without feeling technical. We integrate performance, comfort and control into one refined experience.', heroImage: 'home_cinema_006.jpg', featureImage: 'home_cinema_007.jpg', highlights: ['Cinematic projection', 'Immersive sound', 'One-touch scenes', 'Acoustic integration'] },
  { number: '04', slug: 'home-audio', menuLabel: 'Home Audio', title: 'Home Audio', eyebrow: 'Audio & Entertainment', shortDescription: 'Enjoy beautifully distributed music and entertainment that disappears naturally into the architecture.', overview: 'Exceptional sound belongs everywhere you live. Our systems deliver music and entertainment throughout the home with minimal visual impact.', heroImage: 'audio_003.jpg', featureImage: 'audio_005.jpg', highlights: ['Multi-room music', 'Architectural speakers', 'Streaming integration', 'Simple room-by-room control'] },
  { number: '05', slug: 'network-wifi', menuLabel: 'Network & Wi-Fi', title: 'Network & Wi-Fi', eyebrow: 'Connected Home', shortDescription: 'Reliable, high-performance connectivity engineered to reach every room and outdoor living space.', overview: 'A dependable network is the foundation of a connected home. We engineer secure, high-speed coverage for every device, room and outdoor space.', heroImage: 'network_wifi_005.jpg', featureImage: 'network_wifi_006.jpg', highlights: ['Whole-property Wi-Fi', 'Wired network backbone', 'Secure network design', 'Remote system monitoring'] },
  { number: '06', slug: 'security-access', menuLabel: 'Security & Access', title: 'Security & Access', eyebrow: 'Security & Access', shortDescription: 'Discreet security, surveillance and access control that keeps your home protected and simple to manage.', overview: 'Protection should feel reassuring, not intrusive. We integrate surveillance, access and alerts into a clear, simple experience.', heroImage: 'security_surveillance_005.jpg', featureImage: 'security_surveillance_010.jpg', highlights: ['Discreet surveillance', 'Access control', 'Remote awareness', 'Integrated alerts'] }
];

export const serviceBySlug = (slug: string) => coreServices.find((service) => service.slug === slug);

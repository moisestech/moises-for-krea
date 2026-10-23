export const FIELD_STUDIO = 'https://krea-field-studio.vercel.app';
export const FIELD_STUDIO_REPO = 'https://github.com/moisestech/krea-field-studio';
export const SITE = 'https://moises-for-krea.vercel.app';
export const SITE_REPO = 'https://github.com/moisestech/moises-for-krea';
export const STUDIO = 'https://www.moises.tech';
export const CONTACT_MAIL = 'mailto:hello@moises.tech?subject=Krea%20%E2%80%94%20engineering%20%2B%20creative%20production';
export const CONTACT_LABEL = 'Walk through the work with me';
export const JOB_URL = 'https://jobs.ashbyhq.com/krea/1eb60922-3223-45ec-be02-8e43dd9e8764';
export const AEP_REPO = 'https://github.com/moisestech/agentic-evidence-pipeline';
export const UNOFFICIAL = 'Unofficial application site. Not affiliated with or endorsed by Krea.';
export const HERO_ART =
  'https://res.cloudinary.com/dck5rzi4h/image/upload/v1738035709/art/moisestech-website/price_of_existence_wideshot.png';

export type Claim = 'live' | 'replay' | 'case study' | 'planned' | 'building';

export const evidenceCards = [
  {
    id: 'field-studio',
    title: 'Krea Field Studio',
    story: 'An API integration prototype for approval-gated creative production and inspectable async jobs.',
    proof: 'Interactive replay, state-machine tests, public source',
    href: '/field-studio',
    external: false,
    claim: 'replay' as Claim,
    image: HERO_ART,
    alt: 'Price of Existence — artist-owned source artwork used by Field Studio'
  },
  {
    id: 'lore-machine',
    title: 'Lore Machine',
    story: 'Founding engineering and product work on a multimodal storytelling system for creators.',
    proof: 'Redacted case study, product media, role context',
    href: '/work/lore-machine',
    external: false,
    claim: 'case study' as Claim,
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1780253940/resume/resume-images/lore-machine-home-page_wra1x2.png',
    alt: 'Lore Machine product home page'
  },
  {
    id: 'oolite',
    title: 'Oolite Digital Lab',
    story: 'Creative technology translated into workshops, services, and operating infrastructure.',
    proof: 'Workshop record, systems diagram, selected outcomes',
    href: '/work/oolite-digital-lab',
    external: false,
    claim: 'case study' as Claim,
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1781710428/oolite-arts/oolite-arts-computer-vision-digilab-room-upscale-cyan-1030x579_whqmlg.webp',
    alt: 'Oolite Arts Digital Lab workspace'
  },
  {
    id: 'aep',
    title: 'Agentic Evidence Pipeline',
    story: 'Human-controlled, durable, inspectable AI workflows.',
    proof: 'Public source, architecture, job and approval trail',
    href: AEP_REPO,
    external: true,
    claim: 'live' as Claim,
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1781659418/ai24-website-above-the-fold_kbp2ei.png',
    alt: 'AI24 systems image used as Agentic Evidence Pipeline context'
  }
] as const;

export const loopSteps = [
  { id: 'listen', title: 'Hear the brief', body: 'Site, artwork, constraints, and what must not change.' },
  { id: 'map', title: 'Map the workflow', body: 'Turn the brief into explicit decisions and bounded model calls.' },
  { id: 'run', title: 'Run under approval', body: 'Exact states, controlled spend, recoverable failure.' },
  { id: 'teach', title: 'Make it legible', body: 'A team can compare, choose, refine, and explain the result.' },
  { id: 'return', title: 'Return evidence', body: 'Trace the run and convert friction into product feedback.' }
];

export const evidenceRows = [
  {
    roleNeed: 'Build production-grade AI workflows',
    proof: 'Field Studio — typed provider boundary, approval gates, async state machine, end-to-end replay',
    href: '/field-studio',
    claim: 'replay' as Claim
  },
  {
    roleNeed: 'Understand filmmakers and creative teams',
    proof: 'Lore Machine — founding engineer / Chief Prompt Officer on a narrative-to-media product',
    href: '/work/lore-machine',
    claim: 'case study' as Claim
  },
  {
    roleNeed: 'Teach, demo, and support adoption',
    proof: 'Oolite Digital Lab — workshops, creative services, and technical direction',
    href: '/work/oolite-digital-lab',
    claim: 'case study' as Claim
  },
  {
    roleNeed: 'Operate durable agent systems',
    proof: 'Agentic Evidence Pipeline — jobs, human approval, idempotency, and audit trail',
    href: AEP_REPO,
    claim: 'live' as Claim
  },
  {
    roleNeed: 'Bring an artist’s point of view',
    proof: 'Museum practice and artist-owned work used as source material—not synthetic Krea proof',
    href: STUDIO + '/art',
    claim: 'live' as Claim
  }
];

export const FIELD_STUDIO = 'https://krea-field-studio.vercel.app';
export const SITE = 'https://krea.moises.tech';
export const STUDIO = 'https://www.moises.tech';
export const CONTACT_MAIL = 'mailto:hello@moises.tech?subject=Krea%20Creative%20Lead%20%E2%80%94%20run%20a%20client%20workflow';
export const CONTACT_LABEL = 'Run a client workflow with me';
export const JOB_URL = 'https://jobs.ashbyhq.com/krea/1eb60922-3223-45ec-be02-8e43dd9e8764';
export const AEP_REPO = 'https://github.com/moisestech/agentic-evidence-pipeline';
export const UNOFFICIAL = 'Unofficial application site. Not affiliated with or endorsed by Krea.';

export type Claim = 'live' | 'replay' | 'case study' | 'planned' | 'building';

export const evidenceCards = [
  {
    id: 'field-studio',
    title: 'Krea Field Studio',
    story: 'A Krea-powered client workflow from brief to approved proposal and product field note.',
    proof: 'Replay, source, 90-second path',
    href: '/field-studio',
    external: false,
    claim: 'replay' as Claim,
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1738035709/art/moisestech-website/price_of_existence_wideshot.png',
    alt: 'Price of Existence — fixture artwork for Field Studio previz'
  },
  {
    id: 'lore-machine',
    title: 'Lore Machine',
    story: 'Multimodal storytelling product work for actual creators.',
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
    proof: 'Public source, architecture, job/approval trail',
    href: AEP_REPO,
    external: true,
    claim: 'live' as Claim,
    image:
      'https://res.cloudinary.com/dck5rzi4h/image/upload/v1781659418/ai24-website-above-the-fold_kbp2ei.png',
    alt: 'AI24 / systems still used as AEP visual context'
  }
] as const;

export const loopSteps = [
  { id: 'listen', title: 'Hear the brief', body: 'Site, artwork, constraints, what must not change.' },
  { id: 'map', title: 'Map a workflow', body: 'Three lanes with reasons — not a universal taste system.' },
  { id: 'run', title: 'Run Krea under approval', body: 'Exact job states. No silent spend.' },
  { id: 'teach', title: 'Make it legible', body: 'Compare, refine, export a board a client can argue with.' },
  { id: 'return', title: 'Return a field note', body: 'Friction, reproduction, product opportunity, evidence.' }
];

export const thirtyDays = {
  '1–10': [
    'Shadow enterprise demos and onboarding.',
    'Catalog vertical-specific production constraints.',
    'Identify recurring last-mile friction between model capability and team adoption.'
  ],
  '11–20': [
    'Create two reusable workshop/workflow templates.',
    'Define a lightweight field-note format for product feedback.',
    'Build one technical demo with API or Nodes where it increases adoption.'
  ],
  '21–30': [
    'Run a client workshop.',
    'Measure where people stall, retry, or abandon.',
    'Return a prioritized product brief with clips, exact steps, and reproducible inputs.'
  ]
};

export const evidenceRows = [
  {
    roleNeed: 'Partner with sales on product demos',
    proof: 'Field Studio replay — 90-second client workflow',
    href: '/field-studio',
    claim: 'replay' as Claim
  },
  {
    roleNeed: 'Workshops, onboarding, Q&A',
    proof: 'Oolite Digital Lab — Technical Director of Digital, with Fabiola Larios as Director',
    href: '/work/oolite-digital-lab',
    claim: 'case study' as Claim
  },
  {
    roleNeed: 'Reinvent production pipelines with Krea',
    proof: 'Lore Machine — founding engineer / Chief Prompt Officer on a narrative-to-media product',
    href: '/work/lore-machine',
    claim: 'case study' as Claim
  },
  {
    roleNeed: 'Stress-test product; voice of the customer',
    proof: 'Field Studio field-note format + AI24 live-system operator constraints',
    href: '/work/ai24-social-orchestra',
    claim: 'case study' as Claim
  },
  {
    roleNeed: 'Taste with a point of view',
    proof: 'Museum practice: Price of Existence and related installation work used as owned previz assets',
    href: `${STUDIO}/art`,
    claim: 'live' as Claim
  },
  {
    roleNeed: 'Unusual technical leverage',
    proof: 'Agentic Evidence Pipeline — durable jobs, human approval, idempotency, audit trail',
    href: AEP_REPO,
    claim: 'live' as Claim
  }
];

export const reelTranscript = `
0:00  Brief: exhibition previz for Price of Existence in a white-cube bay.
0:08  Three lanes appear — faithful, material, surprise — each with a reason.
0:18  Operator approves the six-job plan. No silent generation.
0:28  Jobs move through queued, processing, sampling, completed. One inspectable state per tile.
0:48  Compare. Keyboard selects. No auto-rank.
1:00  Refinement and a proposal board with a limitations line.
1:15  Field note: what stalled, how to reproduce, what product could change.
`;

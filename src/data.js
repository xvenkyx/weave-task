export const engineers = [
  {
    id: "mattbro",
    name: "MattBro",
    role: "Stripe & AI Specialist",
    archetype: "Delivery Driver",
    avatar: "/avatars/mattbro.png",
    impactScore: 96,
    metrics: { velocity: 98, assistance: 82, complexity: 95, stability: 88 },
    stats: { mergedPRs: 48, reviews: 92, commits: 256 },
    whyItMatters: "Rapidly ships high-impact features in AI and Billing, maintaining high velocity across core monetization stacks.",
    highImpactWork: [
      "Implemented Stripe Deep Links for subscription tracking",
      "Architected the PH-AI deep-scanning pipeline",
      "Refactored multi-tenant sync logic for consistency"
    ],
    tagline: "The High-Velocity Specialist"
  },
  {
    id: "tatoalo",
    name: "tatoalo",
    role: "Integrity & Maintainer",
    archetype: "Collaboration Anchor",
    avatar: "/avatars/tatoalo.png",
    impactScore: 92,
    metrics: { velocity: 85, assistance: 96, complexity: 90, stability: 94 },
    stats: { mergedPRs: 34, reviews: 145, commits: 189 },
    whyItMatters: "A central unblocker whose high review volume and rapid feedback cycles significantly accelerate merges across multiple squads.",
    highImpactWork: [
      "Resolved critical CI bottleneck affecting all teams",
      "Maintained core PH-AI stability during rapid scaling",
      "Top reviewer across Data Warehouse and Product Analytics"
    ],
    tagline: "The Architectural Guardian"
  },
  {
    id: "veryayskiy",
    name: "veryayskiy",
    role: "Stability Driver",
    archetype: "Quality Guardian",
    avatar: "/avatars/veryayskiy.png",
    impactScore: 89,
    metrics: { velocity: 92, assistance: 78, complexity: 88, stability: 98 },
    stats: { mergedPRs: 52, reviews: 64, commits: 310 },
    whyItMatters: "Focuses on the 'Engine', ensuring system stability through aggressive bug-fixing and large-scale refactors.",
    highImpactWork: [
      "Aggressive bug-fixing sweep across 12 squad domains",
      "Optimized database query patterns for session replays",
      "Fixed long-standing race condition in event processing"
    ],
    tagline: "The Engine Optimizer"
  },
  {
    id: "yakigonne",
    name: "yakigonne",
    role: "Core Contributor",
    archetype: "Subsystem Owner",
    avatar: "/avatars/yakigonne.png",
    impactScore: 87,
    metrics: { velocity: 88, assistance: 84, complexity: 92, stability: 84 },
    stats: { mergedPRs: 29, reviews: 88, commits: 145 },
    whyItMatters: "Deep domain expert in Data Warehouse schemas, ensuring architectural integrity during major migrations.",
    highImpactWork: [
      "Foundation changes for upcoming Data Warehouse features",
      "Migrated legacy event schemas to standard format",
      "Improved telemetry accuracy for internal dashboards"
    ],
    tagline: "The Structural Expert"
  },
  {
    id: "mariusandra",
    name: "mariusandra",
    role: "Strategic Reviewer",
    archetype: "Force Multiplier",
    avatar: "/avatars/mariusandra.png",
    impactScore: 85,
    metrics: { velocity: 72, assistance: 98, complexity: 94, stability: 76 },
    stats: { mergedPRs: 18, reviews: 210, commits: 88 },
    whyItMatters: "Strategic reviewer who unblocks teams by guiding high-level architectural shifts rather than just line-by-line comments.",
    highImpactWork: [
      "Guided major architectural shift for Product Analytics",
      "Highest quality-of-review score among senior staff",
      "Unblocked 3 separate squads on critical integration issues"
    ],
    tagline: "The Knowledge Hub"
  }
];

export const subsystems = [
  { name: "Session Replay", contributors: 2, busFactor: 1, risk: "High", color: "#ff4444", topContributor: "veryayskiy", share: "64%" },
  { name: "Data Warehouse", contributors: 6, busFactor: 3, risk: "Low", color: "#00c853", topContributor: "yakigonne", share: "22%" },
  { name: "Stripe / Billing", contributors: 3, busFactor: 1, risk: "Medium", color: "#ff9100", topContributor: "mattbro", share: "58%" },
  { name: "AI Infrastructure", contributors: 3, busFactor: 2, risk: "Medium", color: "#ff9100", topContributor: "tatoalo", share: "41%" }
];


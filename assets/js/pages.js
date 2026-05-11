const image = (id, width = 1800, height = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=84`;

const pageData = {
  home: {
    eyebrow: "Moderated UX research operations",
    title: "Human insights that improve product decisions",
    description:
      "Plan, moderate, analyze, and package usability studies with a research partner who keeps teams close to real user behavior.",
    background: image("photo-1552664730-d307ca884978", 2400, 1400),
    stats: [
      ["96", "%", "research questions answered before sprint review"],
      ["420", "+", "moderated sessions synthesized"],
      ["38", "%", "average reduction in usability friction"]
    ],
    sections: [
      {
        eyebrow: "Trusted product teams",
        title: "A research room that feels calm, rigorous, and client-ready",
        text:
          "Every engagement is structured for busy product teams: crisp study goals, dependable participant communication, and evidence packaged for roadmap decisions.",
        points: ["Stakeholder-ready testing plans", "Secure recordings and consent flow", "Observation notes mapped to product risks"],
        images: [
          image("photo-1522071820081-009f0129c71c"),
          image("photo-1517245386807-bb43f82c33c4"),
          image("photo-1531482615713-2afd69097998")
        ],
        metrics: [["14 days", "from brief to readout"], ["4.9/5", "client research clarity"]]
      },
      {
        eyebrow: "UX research services",
        title: "Moderated testing designed around the questions your team is actually debating",
        text:
          "From prototype walkthroughs to SaaS onboarding studies, sessions are moderated with neutral prompts, behavioral probes, and strong synthesis discipline.",
        points: ["Remote and live moderated testing", "Mobile and SaaS workflow reviews", "Accessibility and comprehension checks"],
        images: [
          image("photo-1553877522-43269d4ea984"),
          image("photo-1542744173-8e7e53415bb0"),
          image("photo-1521737604893-d14cc237f11d")
        ],
        reverse: true
      },
      {
        eyebrow: "Workflow process",
        title: "A clean path from prototype upload to usable evidence",
        text:
          "The process keeps teams moving: define hypotheses, recruit the right people, moderate sessions, tag behavior, and ship concise recommendations.",
        points: ["Prototype intake and research goals", "Session calendar and moderator guide", "Insight report with highlight reel"],
        images: [
          image("photo-1551434678-e076c223a692"),
          image("photo-1556761175-b413da4baf72"),
          image("photo-1504384308090-c894fdcc538d")
        ],
        timeline: ["Brief", "Recruit", "Moderate", "Synthesize", "Recommend"]
      },
      {
        eyebrow: "Sample insights",
        title: "Insight previews that make findings easy to trust",
        text:
          "Findings are paired with evidence: clips, quotes, severity tags, task completion patterns, and team-ready next actions.",
        points: ["Severity-ranked findings", "Timestamped clips and transcripts", "Downloadable report summaries"],
        images: [
          image("photo-1460925895917-afdab827c52f"),
          image("photo-1551288049-bebda4e38f71"),
          image("photo-1556155092-490a1ba16284")
        ],
        reverse: true,
        chart: true
      },
      {
        eyebrow: "Testimonials",
        title: "Built for product leaders who need signal, not research theater",
        text:
          "Teams use the service when they need decisions grounded in behavior, not just survey sentiment or internal preference.",
        points: ["Cleaner sprint prioritization", "More confident launch reviews", "Shared evidence across design, PM, and engineering"],
        images: [
          image("photo-1556761175-5973dc0f32e7"),
          image("photo-1551836022-d5d88e9218df"),
          image("photo-1557804506-669a67965ba0")
        ],
        quote: "The synthesis landed exactly where our product debate was stuck. We left with evidence, not more opinions."
      },
      {
        eyebrow: "Research session CTA",
        title: "Bring a prototype, a product question, or a messy workflow",
        text:
          "Start with a focused research brief and leave with a moderated plan your team can trust.",
        points: ["Book a research session", "Review sample insights", "Use the secure dashboard"],
        images: [
          image("photo-1497366811353-6870744d04b2"),
          image("photo-1500530855697-b586d89ba3ee"),
          image("photo-1517048676732-d65bc937f952")
        ],
        cta: true
      }
    ]
  },
  home2: {
    eyebrow: "Premium research command center",
    title: "Turn user feedback into product confidence",
    description:
      "A cinematic, dashboard-led research experience for teams running high-stakes product validation.",
    background: image("photo-1497366754035-f200968a6e72", 2400, 1400),
    stats: [["3.2x", "", "faster synthesis"], ["87", "%", "clearer roadmap confidence"], ["11", "k", "user signals tagged"]],
    sections: [
      {
        eyebrow: "Interactive dashboard",
        title: "Live study health, recruitment status, and emerging patterns in one place",
        text: "Your team can track each session, watch signals cluster, and see which product questions are gaining evidence.",
        points: ["Live study status", "Research risk score", "Team observation stream"],
        images: [image("photo-1551288049-bebda4e38f71"), image("photo-1460925895917-afdab827c52f"), image("photo-1556155092-490a1ba16284")],
        chart: true
      },
      {
        eyebrow: "Recruitment system",
        title: "Persona matching for participants who resemble your real buyers",
        text: "Screeners are tuned to usage context, product maturity, budget authority, and accessibility needs.",
        points: ["Persona filters", "Diversity checks", "No-show buffers"],
        images: [image("photo-1522202176988-66273c2fd55f"), image("photo-1521791136064-7986c2920216"), image("photo-1529333166437-7750a6dd5a70")],
        reverse: true
      },
      {
        eyebrow: "Prototype preview",
        title: "Upload Figma links, product flows, and research tasks before sessions begin",
        text: "Prototype assets are organized beside testing goals so the moderator can keep every session consistent.",
        points: ["Figma and file intake", "Task prompts", "Observer notes"],
        images: [image("photo-1581291518857-4e27b48ff24e"), image("photo-1545239351-1141bd82e8a6"), image("photo-1516321318423-f06f85e504b3")]
      },
      {
        eyebrow: "Research metrics",
        title: "Animated evidence summaries for executive readouts",
        text: "Task completion, sentiment, comprehension, friction severity, and quote velocity are summarized without losing nuance.",
        points: ["UX satisfaction score", "Friction density", "Confidence index"],
        images: [image("photo-1554224155-6726b3ff858f"), image("photo-1551288049-bebda4e38f71"), image("photo-1563986768609-322da13575f3")],
        chart: true,
        reverse: true
      },
      {
        eyebrow: "Highlight reels",
        title: "Clips that bring the user voice into roadmap rooms",
        text: "Short reels are tagged by theme, severity, participant type, and product moment so they are easy to reuse.",
        points: ["Theme-based reels", "Downloadable clips", "Timestamp annotations"],
        images: [image("photo-1516321497487-e288fb19713f"), image("photo-1497366811353-6870744d04b2"), image("photo-1556761175-b413da4baf72")],
        video: true
      },
      {
        eyebrow: "Premium CTA",
        title: "Run a research sprint without building the research ops machine yourself",
        text: "Bring the product decision. The moderation, participant logistics, recordings, and executive-ready synthesis are handled.",
        points: ["Enterprise study planning", "Secure client access", "Decision-focused reporting"],
        images: [image("photo-1517245386807-bb43f82c33c4"), image("photo-1551836022-d5d88e9218df"), image("photo-1542744173-8e7e53415bb0")],
        cta: true
      }
    ]
  },
  services: {
    eyebrow: "Research services",
    title: "Moderated testing programs for serious product teams",
    description: "Focused UX research services for prototypes, live SaaS products, mobile flows, accessibility, and launch readiness.",
    background: image("photo-1551836022-d5d88e9218df", 2400, 1400),
    stats: [["6", "", "service tracks"], ["48", "h", "clip turnaround options"], ["100", "%", "moderated by a UX specialist"]],
    sections: [
      { eyebrow: "Moderated user testing", title: "Live sessions that reveal expectations, confusion, and product trust", text: "A neutral moderator guides participants through realistic tasks while observers capture decision-grade evidence.", points: ["Remote testing", "Live observation", "Timestamped notes"], images: [image("photo-1556761175-b413da4baf72"), image("photo-1522071820081-009f0129c71c"), image("photo-1517048676732-d65bc937f952")] },
      { eyebrow: "Prototype evaluation", title: "Pressure-test concepts before engineering commits", text: "Figma, clickable prototypes, landing flows, and onboarding concepts are tested against real comprehension and behavior.", points: ["Figma links", "Task success tracking", "Concept clarity scoring"], images: [image("photo-1581291518857-4e27b48ff24e"), image("photo-1545239351-1141bd82e8a6"), image("photo-1516321318423-f06f85e504b3")], reverse: true },
      { eyebrow: "Usability audits", title: "Expert review paired with moderated evidence", text: "Audit findings are validated against participant behavior so recommendations do not float away from reality.", points: ["Accessibility review", "UX benchmarking", "Conversion friction"], images: [image("photo-1551288049-bebda4e38f71"), image("photo-1460925895917-afdab827c52f"), image("photo-1553877522-43269d4ea984")] },
      { eyebrow: "Research synthesis", title: "Make raw sessions useful for product, design, and leadership", text: "Session data is clustered into themes, severity levels, quotes, and recommendations that teams can act on.", points: ["Insight clustering", "Executive summaries", "Evidence traceability"], images: [image("photo-1517245386807-bb43f82c33c4"), image("photo-1504384308090-c894fdcc538d"), image("photo-1531482615713-2afd69097998")], reverse: true, chart: true },
      { eyebrow: "Highlight reels", title: "Short clips that show the product moment, not just the quote", text: "Reels include context, task state, participant segment, and clear reason the clip matters.", points: ["Clip selection", "Reel editing", "Downloadable summaries"], images: [image("photo-1516321497487-e288fb19713f"), image("photo-1497366754035-f200968a6e72"), image("photo-1556761175-5973dc0f32e7")], video: true },
      { eyebrow: "Service CTA", title: "Choose the research support that matches the product risk", text: "Start with a short scoping call and get a recommended testing plan for your team size, timeline, and decision point.", points: ["Research brief", "Timeline estimate", "Participant plan"], images: [image("photo-1497366811353-6870744d04b2"), image("photo-1521737604893-d14cc237f11d"), image("photo-1542744173-8e7e53415bb0")], cta: true }
    ]
  },
  methodology: {
    eyebrow: "UX research methodology",
    title: "A rigorous testing process that respects users and product timelines",
    description: "Research planning, scripts, session workflow, insight extraction, and reporting built for repeatable quality.",
    background: image("photo-1517245386807-bb43f82c33c4", 2400, 1400),
    stats: [["5", "", "research phases"], ["30", "min", "typical session blocks"], ["0", "", "leading prompts"]],
    sections: [
      { eyebrow: "Research planning", title: "Translate product uncertainty into testable research questions", text: "Every plan starts with hypotheses, audience criteria, prototype readiness, and a focused decision that the study should inform.", points: ["Study canvas", "Risk framing", "Success criteria"], images: [image("photo-1552664730-d307ca884978"), image("photo-1531482615713-2afd69097998"), image("photo-1504384308090-c894fdcc538d")], timeline: ["Question", "Hypothesis", "Task", "Measure", "Decision"] },
      { eyebrow: "Moderator scripts", title: "Neutral prompts keep participants in their own words", text: "Scripts include warm-up questions, realistic tasks, probes, and fallback prompts while avoiding biased language.", points: ["Task prompts", "Behavior probes", "Observer guide"], images: [image("photo-1522071820081-009f0129c71c"), image("photo-1551836022-d5d88e9218df"), image("photo-1517048676732-d65bc937f952")], reverse: true },
      { eyebrow: "Session workflow", title: "Consistent sessions without making people feel processed", text: "Consent, context, task setup, think-aloud support, and post-task reflection are handled with a calm human cadence.", points: ["Consent flow", "Task timing", "Post-session notes"], images: [image("photo-1556761175-b413da4baf72"), image("photo-1521737604893-d14cc237f11d"), image("photo-1553877522-43269d4ea984")] },
      { eyebrow: "Insight extraction", title: "Behavior is tagged by friction, confidence, intent, and context", text: "Raw observations are clustered into patterns that distinguish one-off comments from repeatable product signals.", points: ["Affinity mapping", "Severity scoring", "Evidence links"], images: [image("photo-1551288049-bebda4e38f71"), image("photo-1460925895917-afdab827c52f"), image("photo-1542744173-8e7e53415bb0")], reverse: true, chart: true },
      { eyebrow: "Reporting process", title: "Reports connect each recommendation to proof", text: "Teams get concise readouts with clips, metrics, quotes, and next-step recommendations organized by product area.", points: ["Executive summary", "Clip library", "Design recommendations"], images: [image("photo-1556155092-490a1ba16284"), image("photo-1563986768609-322da13575f3"), image("photo-1516321318423-f06f85e504b3")] },
      { eyebrow: "Method CTA", title: "Use a method that makes product decisions easier to defend", text: "The testing method is disciplined, human, and built for teams that need evidence quickly.", points: ["Plan the study", "Run the sessions", "Ship the readout"], images: [image("photo-1497366811353-6870744d04b2"), image("photo-1522202176988-66273c2fd55f"), image("photo-1557804506-669a67965ba0")], cta: true }
    ]
  },
  recruitment: {
    eyebrow: "Participant recruitment",
    title: "Persona recruitment that protects research quality",
    description: "Find participants whose roles, behaviors, tools, constraints, and accessibility needs match the product question.",
    background: image("photo-1521791136064-7986c2920216", 2400, 1400),
    stats: [["92", "%", "qualified show rate"], ["18", "", "screening dimensions"], ["4", "", "accessibility checkpoints"]],
    sections: [
      { eyebrow: "Persona system", title: "Recruit by behavior, role, and decision context", text: "Personas are translated into screeners that capture what people do, not only what they say they are.", points: ["Role fit", "Usage frequency", "Buying context"], images: [image("photo-1522202176988-66273c2fd55f"), image("photo-1521791136064-7986c2920216"), image("photo-1529333166437-7750a6dd5a70")] },
      { eyebrow: "Segmentation", title: "Balance novice, power user, buyer, and operator perspectives", text: "Segment plans make sure the study hears from the people whose needs shape the product decision.", points: ["Audience filters", "Segment quotas", "Recruitment status"], images: [image("photo-1551836022-d5d88e9218df"), image("photo-1552664730-d307ca884978"), image("photo-1556761175-5973dc0f32e7")], reverse: true },
      { eyebrow: "Diversity and access", title: "Recruitment considers accessibility and context of use", text: "The process includes device needs, assistive tech, environment, language comfort, and scheduling constraints.", points: ["Accessibility needs", "Device profile", "Environment context"], images: [image("photo-1517048676732-d65bc937f952"), image("photo-1497366754035-f200968a6e72"), image("photo-1531482615713-2afd69097998")] },
      { eyebrow: "Screening process", title: "Screeners are designed to reduce false positives", text: "Eligibility questions include behavioral checks, open-ended validation, and study-specific exclusion rules.", points: ["Behavioral screeners", "Manual QA", "Consent preparation"], images: [image("photo-1553877522-43269d4ea984"), image("photo-1542744173-8e7e53415bb0"), image("photo-1554224155-6726b3ff858f")], reverse: true },
      { eyebrow: "Recruitment metrics", title: "Know who is confirmed, rescheduled, and ready for session day", text: "Recruitment dashboards show segment fill, confirmation status, no-show buffers, and incentive readiness.", points: ["Segment fill", "Show-rate health", "Incentive tracking"], images: [image("photo-1551288049-bebda4e38f71"), image("photo-1460925895917-afdab827c52f"), image("photo-1563986768609-322da13575f3")], chart: true },
      { eyebrow: "Recruitment CTA", title: "Find the right people before your prototype enters the room", text: "Start with a persona brief and build a participant plan that supports credible findings.", points: ["Persona brief", "Recruiting timeline", "Screening QA"], images: [image("photo-1521737604893-d14cc237f11d"), image("photo-1504384308090-c894fdcc538d"), image("photo-1517245386807-bb43f82c33c4")], cta: true }
    ]
  },
  "case-studies": {
    eyebrow: "Case studies",
    title: "Evidence from moderated studies that changed product direction",
    description: "See how testing sessions reveal product risk, improve UX flows, and create shared confidence across teams.",
    background: image("photo-1556155092-490a1ba16284", 2400, 1400),
    stats: [["31", "%", "checkout clarity gain"], ["22", "%", "onboarding drop reduction"], ["6", "", "decision themes per readout"]],
    sections: [
      { eyebrow: "Research challenges", title: "When teams disagree, user behavior becomes the tie-breaker", text: "Studies are framed around the specific product decision: flow order, feature comprehension, trust, setup effort, or pricing clarity.", points: ["Decision framing", "Stakeholder alignment", "Risk mapping"], images: [image("photo-1504384308090-c894fdcc538d"), image("photo-1517245386807-bb43f82c33c4"), image("photo-1552664730-d307ca884978")] },
      { eyebrow: "Session overview", title: "Session plans keep every participant moving through comparable product moments", text: "Each session tracks task success, hesitation, comprehension, and post-task confidence across participant segments.", points: ["Task grid", "Segment comparison", "Observer tags"], images: [image("photo-1556761175-b413da4baf72"), image("photo-1522071820081-009f0129c71c"), image("photo-1517048676732-d65bc937f952")], reverse: true },
      { eyebrow: "Key findings", title: "Findings are ranked by user impact and product effort", text: "The readout separates critical blockers from polish issues so teams know what to fix first.", points: ["Severity matrix", "Quote evidence", "Recommendation owner"], images: [image("photo-1551288049-bebda4e38f71"), image("photo-1460925895917-afdab827c52f"), image("photo-1563986768609-322da13575f3")], chart: true },
      { eyebrow: "Before and after", title: "Small flow changes can unlock major comprehension gains", text: "Before and after reviews show how copy, layout, progressive disclosure, and task feedback changed the experience.", points: ["Flow comparison", "Prototype revisions", "Confidence scoring"], images: [image("photo-1581291518857-4e27b48ff24e"), image("photo-1545239351-1141bd82e8a6"), image("photo-1516321318423-f06f85e504b3")], reverse: true },
      { eyebrow: "Highlight reel", title: "Bring the most persuasive user moments into the roadmap discussion", text: "Clips are selected for clarity, representativeness, and their connection to the team's research questions.", points: ["Clip themes", "Participant context", "Downloadable reel"], images: [image("photo-1516321497487-e288fb19713f"), image("photo-1497366811353-6870744d04b2"), image("photo-1557804506-669a67965ba0")], video: true },
      { eyebrow: "Case study CTA", title: "Use user evidence before the next expensive product bet", text: "Review sample insight formats or book a research session around the product question your team is carrying.", points: ["Sample report", "Readout format", "Research sprint"], images: [image("photo-1521737604893-d14cc237f11d"), image("photo-1542744173-8e7e53415bb0"), image("photo-1497366754035-f200968a6e72")], cta: true }
    ]
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Research packages that match your decision timeline",
    description: "Choose a focused usability test, a professional research program, or an enterprise sprint for high-stakes product work.",
    background: image("photo-1554224155-6726b3ff858f", 2400, 1400),
    stats: [["3", "", "research packages"], ["5", "", "included report formats"], ["1", "", "secure dashboard"]],
    pricing: true,
    sections: [
      { eyebrow: "Feature comparison", title: "Compare what each research package includes", text: "Every package includes professional moderation, session recordings, and decision-ready synthesis, with deeper support at higher tiers.", points: ["Session recordings", "Insight reports", "Consultation hours"], images: [image("photo-1460925895917-afdab827c52f"), image("photo-1551288049-bebda4e38f71"), image("photo-1556155092-490a1ba16284")], chart: true },
      { eyebrow: "Add-ons", title: "Extend your study with recruitment, reels, or accessibility reviews", text: "Add-ons help teams deepen evidence without changing the core research plan.", points: ["Participant recruiting", "Extra highlight reel", "Accessibility review"], images: [image("photo-1522202176988-66273c2fd55f"), image("photo-1516321497487-e288fb19713f"), image("photo-1517048676732-d65bc937f952")], reverse: true },
      { eyebrow: "FAQ", title: "Answers for teams scoping their first moderated study", text: "The most common pricing questions are about timing, participant counts, and what teams need to prepare.", points: ["Prototype readiness", "Recruitment scope", "Readout format"], images: [image("photo-1551836022-d5d88e9218df"), image("photo-1542744173-8e7e53415bb0"), image("photo-1517245386807-bb43f82c33c4")], faq: true },
      { eyebrow: "Pricing testimonials", title: "Teams choose the package based on decision risk", text: "Smaller studies validate a specific flow. Enterprise sprints align teams around complex product decisions.", points: ["Focused validation", "Launch confidence", "Leadership-ready reporting"], images: [image("photo-1556761175-5973dc0f32e7"), image("photo-1522071820081-009f0129c71c"), image("photo-1557804506-669a67965ba0")], quote: "The Professional package gave us exactly enough evidence to change onboarding without slowing the release." },
      { eyebrow: "Pricing CTA", title: "Choose the package after a short research-fit conversation", text: "A scoping call clarifies the audience, product risk, and timeline before you commit.", points: ["15-minute fit call", "Package recommendation", "Research timeline"], images: [image("photo-1497366811353-6870744d04b2"), image("photo-1500530855697-b586d89ba3ee"), image("photo-1521737604893-d14cc237f11d")], cta: true }
    ]
  },
  about: {
    eyebrow: "About the moderator",
    title: "A freelance UX research partner for teams that move fast and still care about evidence",
    description: "Moderation, synthesis, and product thinking shaped by SaaS, agency, startup, and enterprise research work.",
    background: image("photo-1556761175-5973dc0f32e7", 2400, 1400),
    stats: [["8", "+", "years UX research experience"], ["420", "+", "sessions moderated"], ["54", "", "product teams supported"]],
    sections: [
      { eyebrow: "Moderator background", title: "Calm session facilitation with product-level synthesis", text: "The work blends research craft, design sensitivity, and product decision framing so teams leave with usable direction.", points: ["Neutral moderation", "Behavioral probing", "Product recommendations"], images: [image("photo-1556761175-b413da4baf72"), image("photo-1522071820081-009f0129c71c"), image("photo-1517048676732-d65bc937f952")] },
      { eyebrow: "UX research experience", title: "Experience across SaaS, mobile apps, marketplaces, and internal tools", text: "Studies cover onboarding, activation, dashboards, admin workflows, pricing comprehension, and multi-role collaboration.", points: ["SaaS onboarding", "Enterprise dashboards", "Mobile flows"], images: [image("photo-1581291518857-4e27b48ff24e"), image("photo-1551288049-bebda4e38f71"), image("photo-1460925895917-afdab827c52f")], reverse: true },
      { eyebrow: "Certifications and skills", title: "Research craft supported by product, facilitation, and accessibility skills", text: "The practice emphasizes ethical recruitment, accessible research participation, clear reports, and stakeholder facilitation.", points: ["Research ethics", "Accessibility awareness", "Stakeholder workshops"], images: [image("photo-1531482615713-2afd69097998"), image("photo-1517245386807-bb43f82c33c4"), image("photo-1542744173-8e7e53415bb0")] },
      { eyebrow: "Success stories", title: "Research that helps teams simplify, prioritize, and ship with confidence", text: "Product teams have used findings to reduce friction, retire confusing flows, and focus roadmaps on behavior-backed opportunities.", points: ["Activation improvements", "Copy clarity", "Workflow simplification"], images: [image("photo-1556155092-490a1ba16284"), image("photo-1563986768609-322da13575f3"), image("photo-1554224155-6726b3ff858f")], reverse: true, chart: true },
      { eyebrow: "Research philosophy", title: "Good moderation creates space for honest behavior", text: "Participants should feel respected, teams should see real behavior, and recommendations should stay connected to evidence.", points: ["Human-centered sessions", "Evidence-first synthesis", "Practical recommendations"], images: [image("photo-1521737604893-d14cc237f11d"), image("photo-1551836022-d5d88e9218df"), image("photo-1504384308090-c894fdcc538d")] },
      { eyebrow: "About CTA", title: "Bring in a research partner when the product question matters", text: "Use freelance moderation support for a focused study, a sprint, or an ongoing research cadence.", points: ["Study planning", "Moderation", "Synthesis"], images: [image("photo-1497366811353-6870744d04b2"), image("photo-1517245386807-bb43f82c33c4"), image("photo-1557804506-669a67965ba0")], cta: true }
    ]
  },
  contact: {
    eyebrow: "Contact",
    title: "Start a research conversation with a clear product question",
    description: "Share your prototype, target audience, timeline, and decision point. Get a practical recommendation for the right study.",
    background: image("photo-1517048676732-d65bc937f952", 2400, 1400),
    stats: [["24", "h", "typical response"], ["15", "min", "fit call"], ["3", "", "ways to start"]],
    contact: true,
    sections: [
      { eyebrow: "Consultation scheduling", title: "Book a fit call before you commit to a research package", text: "The first conversation clarifies the product decision, prototype readiness, participants, and study timeline.", points: ["Research-fit call", "Timeline estimate", "Package guidance"], images: [image("photo-1556761175-b413da4baf72"), image("photo-1522071820081-009f0129c71c"), image("photo-1497366811353-6870744d04b2")] },
      { eyebrow: "FAQ", title: "What teams usually ask before moderated testing begins", text: "Questions usually cover prototype format, participant sourcing, session count, observer access, and report depth.", points: ["Prototype format", "Observer access", "Readout timing"], images: [image("photo-1542744173-8e7e53415bb0"), image("photo-1517245386807-bb43f82c33c4"), image("photo-1531482615713-2afd69097998")], reverse: true, faq: true },
      { eyebrow: "Remote availability", title: "Moderated sessions for distributed product teams", text: "Remote studies support multiple time zones, secure recordings, and observer-friendly session links.", points: ["Remote sessions", "Timezone planning", "Secure links"], images: [image("photo-1516321497487-e288fb19713f"), image("photo-1553877522-43269d4ea984"), image("photo-1516321318423-f06f85e504b3")] },
      { eyebrow: "Professional links", title: "Share background, past work, and research documentation securely", text: "Teams can request sample reports, anonymized case studies, and research process documentation before booking.", points: ["Sample reports", "Case study access", "Process notes"], images: [image("photo-1551288049-bebda4e38f71"), image("photo-1460925895917-afdab827c52f"), image("photo-1556155092-490a1ba16284")], reverse: true },
      { eyebrow: "Contact CTA", title: "Send the product question your team needs answered", text: "A focused note is enough to start: audience, prototype, decision timeline, and the team debate behind the study.", points: ["Audience", "Prototype", "Decision date"], images: [image("photo-1500530855697-b586d89ba3ee"), image("photo-1521737604893-d14cc237f11d"), image("photo-1557804506-669a67965ba0")], cta: true }
    ]
  }
};

function renderHero(page) {
  const stats = page.stats
    .map(([value, suffix, label]) => {
      const numeric = Number.parseFloat(value) || 0;
      return `
        <div class="glass-panel p-5">
          <div class="font-display text-2xl font-black text-slate-900 dark:text-white"><span data-count="${numeric}" data-suffix="${suffix}">${value}${suffix}</span></div>
          <p class="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">${label}</p>
        </div>`;
    })
    .join("");

  return `
    <section class="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
      <div class="container-pad relative z-10">
        <div class="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div class="reveal">
            <div class="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold text-primary dark:bg-primary/10">
              ${Site.icon("sparkles", "h-3.5 w-3.5")} ${page.eyebrow}
            </div>
            <h1 class="mt-8 font-display text-5xl font-black leading-[1.1] tracking-tight text-slate-950 dark:text-white sm:text-6xl xl:text-7xl">
              ${page.title.split(" ").map((word, i) => i > 2 ? `<span class="text-primary">${word}</span>` : word).join(" ")}
            </h1>
            <p class="mt-8 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">${page.description}</p>
            <div class="mt-10 flex flex-wrap gap-4">
              <a class="btn-primary px-8 py-4 text-sm" href="contact.html">Book Research Session</a>
              <a class="btn-secondary px-8 py-4 text-sm" href="case-studies.html">View Insights</a>
            </div>
            <div class="mt-12 grid grid-cols-3 gap-4 lg:max-w-md">
              ${stats}
            </div>
          </div>
          <div class="reveal relative hidden lg:block">
            <div class="relative z-10 aspect-[4/5] overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
              <img class="h-full w-full object-cover" src="${page.background}" alt="Research Hero">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              <div class="absolute bottom-8 left-8 right-8">
                <div class="glass-panel p-6">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold uppercase tracking-widest text-slate-500">Live Synthesis</span>
                    <span class="h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
                  </div>
                  <h3 class="mt-2 font-display text-lg font-bold text-slate-900 dark:text-white">Active Participant Stream</h3>
                  <div class="mt-4 flex gap-2">
                    ${[1, 2, 3, 4].map(i => `<div class="h-8 w-8 rounded-full border-2 border-white bg-slate-200 dark:border-slate-800"><img src="https://i.pravatar.cc/100?img=${i+10}" class="rounded-full"></div>`).join("")}
                    <div class="grid h-8 w-8 place-items-center rounded-full bg-primary text-[10px] font-bold text-white">+12</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="absolute -right-8 -top-8 h-64 w-64 animate-blob rounded-full bg-primary/20 blur-3xl"></div>
            <div class="absolute -left-8 -bottom-8 h-64 w-64 animate-blob animation-delay-2000 rounded-full bg-secondary/20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderMediaStack(images, video) {
  return `
    <div class="reveal relative flex items-center justify-center py-10">
      <div class="relative grid w-full max-w-lg grid-cols-2 gap-4">
        <div class="space-y-4 pt-12">
          <div class="overflow-hidden rounded-2xl border border-white/10 shadow-xl transition-transform hover:scale-[1.02]">
            <img src="${images[1]}" alt="Research" class="h-64 w-full object-cover">
          </div>
          <div class="overflow-hidden rounded-2xl border border-white/10 shadow-xl transition-transform hover:scale-[1.02]">
            <img src="${images[2]}" alt="Research" class="h-48 w-full object-cover">
          </div>
        </div>
        <div class="relative space-y-4">
          <div class="group relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-transform hover:scale-[1.02]">
            <img src="${images[0]}" alt="Research" class="h-80 w-full object-cover">
            ${video ? `
              <div class="absolute inset-0 grid place-items-center bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors" data-video-open>
                <div class="grid h-16 w-16 place-items-center rounded-full bg-white/90 text-primary shadow-xl scale-90 group-hover:scale-100 transition-transform">
                  ${Site.icon("play", "h-6 w-6 ml-1")}
                </div>
              </div>
            ` : ""}
          </div>
          <div class="h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl"></div>
        </div>
      </div>
    </div>
  `;
}

function renderSection(section, index) {
  const isAlt = index % 2 === 1;
  const content = `
    <div class="reveal py-10">
      <div class="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
        <span class="h-px w-8 bg-primary"></span>
        ${section.eyebrow}
      </div>
      <h2 class="mt-6 font-display text-4xl font-black leading-tight text-slate-950 dark:text-white md:text-5xl">${section.title}</h2>
      <p class="mt-8 text-lg leading-relaxed text-slate-600 dark:text-slate-400">${section.text}</p>
      
      <div class="mt-12 grid gap-6 sm:grid-cols-2">
        ${section.points.slice(0, 4).map(point => `
          <div class="flex gap-4">
            <div class="flex-shrink-0 grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary dark:bg-primary/20">
              ${Site.icon("check", "h-5 w-5")}
            </div>
            <div>
              <p class="text-base font-bold text-slate-900 dark:text-white">${point}</p>
            </div>
          </div>
        `).join("")}
      </div>

      ${section.metrics ? `<div class="mt-10 flex gap-8">${section.metrics.map(([v, l]) => `<div><p class="font-display text-3xl font-black text-primary">${v}</p><p class="text-xs font-bold uppercase text-slate-500">${l}</p></div>`).join("")}</div>` : ""}
      ${section.timeline ? `
        <div class="mt-10 flex flex-wrap gap-2">
          ${section.timeline.map((t, i) => `<span class="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-600 dark:bg-white/5 dark:text-slate-400">${i+1}. ${t}</span>`).join("")}
        </div>
      ` : ""}
      ${section.quote ? `
        <div class="mt-10 relative">
          <span class="absolute -top-4 -left-4 text-6xl text-primary/10 font-serif">"</span>
          <p class="relative text-xl font-medium italic text-slate-700 dark:text-slate-300"> ${section.quote} </p>
        </div>
      ` : ""}
      ${section.cta ? `
        <div class="mt-12 flex gap-4">
          <a class="btn-primary px-6" href="contact.html">Get Started</a>
          <a class="btn-secondary px-6" href="services.html">Learn More</a>
        </div>
      ` : ""}
    </div>
  `;

  const media = renderMediaStack(section.images, section.video);
  const reverse = section.reverse || isAlt;

  return `
    <section class="section-pad overflow-hidden">
      <div class="container-pad grid items-center gap-16 lg:grid-cols-2">
        ${reverse ? media + content : content + media}
      </div>
    </section>
  `;
}

function renderPricing() {
  const plans = [
    ["Starter", "$1,800", "Small studies", ["5 participants", "Session recordings", "Insight report", "1h Consult"]],
    ["Professional", "$4,800", "Full validation", ["8 participants", "Highlight reel", "Advanced report", "3h Consult"]],
    ["Enterprise", "Custom", "High stakes", ["12+ participants", "Recruit support", "Exec readout", "Dashboard"]]
  ];
  return `
    <section class="section-pad relative bg-slate-950 py-32 text-white overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(99,102,241,0.15),transparent)]"></div>
      <div class="container-pad relative z-10">
        <div class="max-w-2xl reveal">
          <h2 class="font-display text-4xl font-black md:text-5xl">Simple, evidence-based <span class="text-primary">pricing</span></h2>
          <p class="mt-6 text-lg text-slate-400">Moderated research packages designed for product teams.</p>
        </div>
        <div class="mt-16 grid gap-8 lg:grid-cols-3">
          ${plans.map((p, i) => `
            <div class="glass-panel relative flex flex-col p-8 transition-transform hover:-translate-y-2 ${i === 1 ? 'border-primary ring-1 ring-primary/50' : ''}">
              <h3 class="text-xl font-bold">${p[0]}</h3>
              <p class="mt-2 text-sm text-slate-500">${p[2]}</p>
              <div class="mt-8 font-display text-4xl font-black">${p[1]}</div>
              <ul class="mt-8 space-y-4 flex-1">
                ${p[3].map(item => `<li class="flex items-center gap-3 text-sm text-slate-400">${Site.icon("check", "h-4 w-4 text-primary")} ${item}</li>`).join("")}
              </ul>
              <a class="mt-10 ${i === 1 ? 'btn-primary' : 'btn-secondary'} w-full" href="contact.html">Choose ${p[0]}</a>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderContactForm() {
  return `
    <section class="section-pad">
      <div class="container-pad">
        <div class="glass-panel grid overflow-hidden rounded-[32px] lg:grid-cols-[0.8fr_1.2fr]">
          <div class="bg-primary p-12 text-white">
            <h2 class="font-display text-3xl font-black">Let's talk research.</h2>
            <p class="mt-6 text-primary-foreground/80 leading-relaxed text-indigo-100">Share your prototype and product questions. I'll recommend a practical study path within 24 hours.</p>
            <div class="mt-12 space-y-8">
              <div class="flex gap-4">
                <div class="grid h-10 w-10 place-items-center rounded-lg bg-white/10">${Site.icon("mail", "h-5 w-5")}</div>
                <div><p class="text-xs font-bold uppercase text-white/50">Email me</p><p class="font-bold">hello@futmoderator.com</p></div>
              </div>
              <div class="flex gap-4">
                <div class="grid h-10 w-10 place-items-center rounded-lg bg-white/10">${Site.icon("calendar", "h-5 w-5")}</div>
                <div><p class="text-xs font-bold uppercase text-white/50">Response time</p><p class="font-bold">Under 24 hours</p></div>
              </div>
            </div>
          </div>
          <form class="p-12">
            <div class="grid gap-6">
              <div class="grid gap-6 sm:grid-cols-2">
                <div class="grid gap-2"><label class="text-xs font-bold uppercase text-slate-500">Name</label><input class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary dark:border-white/10 dark:bg-white/5" placeholder="Your name"></div>
                <div class="grid gap-2"><label class="text-xs font-bold uppercase text-slate-500">Email</label><input class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary dark:border-white/10 dark:bg-white/5" placeholder="Email address"></div>
              </div>
              <div class="grid gap-2"><label class="text-xs font-bold uppercase text-slate-500">Research Goal</label><input class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary dark:border-white/10 dark:bg-white/5" placeholder="What decision do you need to make?"></div>
              <div class="grid gap-2"><label class="text-xs font-bold uppercase text-slate-500">Message</label><textarea rows="4" class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-primary dark:border-white/10 dark:bg-white/5" placeholder="Tell me about your product..."></textarea></div>
              <button class="btn-primary py-4">Send Research Brief</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  `;
}

function renderServicesPage(page) {
  return `
    ${renderHero(page)}
    <section class="section-pad">
      <div class="container-pad grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        ${page.sections.map(s => `
          <div class="glass-panel group relative overflow-hidden p-8 transition-all hover:-translate-y-2">
            <div class="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-150"></div>
            <div class="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary">
              ${Site.icon("zap", "h-6 w-6")}
            </div>
            <h3 class="mt-6 font-display text-xl font-bold text-slate-900 dark:text-white">${s.title}</h3>
            <p class="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">${s.text}</p>
            <ul class="mt-8 space-y-3">
              ${s.points.map(p => `<li class="flex items-center gap-3 text-xs font-medium text-slate-600 dark:text-slate-300">${Site.icon("check", "h-3.5 w-3.5 text-primary")} ${p}</li>`).join("")}
            </ul>
          </div>
        `).join("")}
      </div>
    </section>
  `;
}

function renderMethodologyPage(page) {
  return `
    ${renderHero(page)}
    <section class="section-pad relative overflow-hidden">
      <div class="container-pad relative">
        <div class="absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-white/10 hidden md:block"></div>
        <div class="space-y-24">
          ${page.sections.map((s, i) => `
            <div class="relative grid md:grid-cols-2 gap-12 items-center">
              <div class="absolute left-1/2 -translate-x-1/2 grid h-12 w-12 place-items-center rounded-full border-4 border-white bg-primary text-white shadow-xl dark:border-slate-950 z-10 hidden md:grid">
                ${i + 1}
              </div>
              <div class="${i % 2 === 1 ? 'md:order-2' : ''} reveal">
                <div class="glass-panel p-10">
                  <span class="text-xs font-black uppercase tracking-widest text-primary">${s.eyebrow}</span>
                  <h3 class="mt-4 font-display text-2xl font-bold text-slate-900 dark:text-white">${s.title}</h3>
                  <p class="mt-6 text-slate-600 dark:text-slate-400 leading-relaxed">${s.text}</p>
                  <div class="mt-8 flex flex-wrap gap-2">
                    ${s.points.map(p => `<span class="rounded-lg bg-slate-100 px-3 py-1.5 text-[10px] font-bold text-slate-500 dark:bg-white/5 dark:text-slate-400">${p}</span>`).join("")}
                  </div>
                </div>
              </div>
              <div class="reveal">
                <div class="aspect-video overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl">
                  <img src="${s.images[0]}" class="h-full w-full object-cover">
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderAboutPage(page) {
  return `
    <section class="relative pt-32 pb-20">
      <div class="container-pad grid gap-16 lg:grid-cols-2 items-center">
        <div class="reveal">
          <h1 class="font-display text-5xl font-black leading-tight text-slate-900 dark:text-white">${page.title}</h1>
          <p class="mt-8 text-xl leading-relaxed text-slate-600 dark:text-slate-400">${page.description}</p>
          <div class="mt-12 grid grid-cols-2 gap-8">
            ${page.stats.map(s => `<div><p class="font-display text-4xl font-black text-primary">${s[0]}${s[1]}</p><p class="mt-1 text-sm font-bold uppercase text-slate-500">${s[2]}</p></div>`).join("")}
          </div>
        </div>
        <div class="reveal">
          <div class="relative">
            <div class="aspect-square overflow-hidden rounded-full border-[12px] border-white shadow-2xl dark:border-white/10">
              <img src="${page.background}" class="h-full w-full object-cover">
            </div>
            <div class="absolute -bottom-4 -right-4 glass-panel p-6 max-w-xs">
              <p class="text-sm font-medium italic text-slate-600 dark:text-slate-300">"Focused on uncovering the 'why' behind user behavior to drive evidence-based product decisions."</p>
              <p class="mt-4 text-xs font-bold uppercase tracking-widest text-primary">— Founder, FUT Moderator</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    ${page.sections.map((s, i) => renderSection(s, i)).join("")}
  `;
}

function renderMarketingPage(page) {
  const pageKey = document.getElementById("page-root").dataset.page || "home";
  
  if (pageKey === "services") return renderServicesPage(page);
  if (pageKey === "methodology") return renderMethodologyPage(page);
  if (pageKey === "about") return renderAboutPage(page);
  if (pageKey === "pricing") return renderPricingPage(page);
  if (pageKey === "contact") return renderContactPage(page);
  if (pageKey === "home2") return renderMarketingPage(pageData.home); // Fallback or unique home2

  return [
    renderHero(page),
    ...page.sections.map((s, i) => {
      if (s.pricing) return renderPricing();
      if (s.contact) return renderContactForm();
      return renderSection(s, i);
    })
  ].join("");
}

function renderPricingPage(page) {
  return `
    ${renderHero(page)}
    ${renderPricing()}
  `;
}

function renderContactPage(page) {
  return `
    <section class="pt-32 pb-12">
      <div class="container-pad text-center max-w-3xl">
        <h1 class="font-display text-5xl font-black text-slate-900 dark:text-white">${page.title}</h1>
        <p class="mt-6 text-lg text-slate-600 dark:text-slate-400">${page.description}</p>
      </div>
    </section>
    ${renderContactForm()}
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("page-root");
  if (!root) return;
  const pageKey = root.dataset.page || "home";
  const page = pageData[pageKey];
  if (!page) return;
  root.innerHTML = renderMarketingPage(page);
  Site.initInteractions();
});

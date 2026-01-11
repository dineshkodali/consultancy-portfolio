
import { ResearchLogEntry, RiskItem, RACIMember, PESTLEItem } from './types';

export const RESEARCH_LOGS: ResearchLogEntry[] = [
  {
    unit: 1,
    title: "Introduction to Consultancy Operations",
    theory: "Block's (2011) Flawless Consulting framework emphasizes the dual role of the consultant as an expert and a facilitator.",
    practice: "Applied this to branding CR Consultancy, ensuring our identity balances technical expertise with a collaborative approach.",
    reflections: "Focusing on trust-building as the primary currency in technical transformations."
  },
  {
    unit: 2,
    title: "Strategic Analysis & Frameworks",
    theory: "PESTLE and SWOT analysis provide a holistic view of the macro and micro environment (Porter, 1985).",
    practice: "Conducted a PESTLE analysis for GreenPath Retailers to identify environmental regulations impacting their logistics.",
    reflections: "Internal IT departments must professionalize to compete with external providers."
  },
  {
    unit: 3,
    title: "Stakeholder Management & Power Interest",
    theory: "Mendelow's Matrix categorizes stakeholders by power and interest to determine communication strategies.",
    practice: "Identified the CEO as a high-power/high-interest 'Key Player' and local warehouse staff as high-interest/low-power to be 'Kept Informed'.",
    reflections: "Communication is the most critical tool for restoring lost credibility."
  },
  {
    unit: 4,
    title: "Ethics in Consultancy & UH Protocol",
    theory: "Deontological ethics suggests that actions are right or wrong regardless of their consequences.",
    practice: "Integrated UH Ethics Protocol constraints: strictly ensuring data anonymity and informed consent during client interviews.",
    reflections: "Neutrality and confidentiality are non-negotiable for consultant integrity."
  },
  {
    unit: 5,
    title: "Sustainability & ESG Integration",
    theory: "Elkington's Triple Bottom Line (TBL) – People, Planet, Profit.",
    practice: "Structured the success criteria for the client project around carbon reduction (Planet) and community engagement (People).",
    reflections: "Sustainable IT means systems that serve people without burning out resources."
  },
  {
    unit: 6,
    title: "Risk Management & Mitigation Strategy",
    theory: "The ISO 31000 standard provides a framework for managing uncertainty.",
    practice: "Developed a high-level risk register with quantitative probability scores for GreenPath Retailers.",
    reflections: "Managing uncertainty is fundamental to maintaining project momentum."
  },
  {
    unit: 7,
    title: "Project Planning & Communication",
    theory: "RACI (Responsible, Accountable, Consulted, Informed) clarifies project roles and avoids duplicate effort.",
    practice: "Finalized the RACI matrix for the logistics implementation phase of the transformation.",
    reflections: "Role clarity prevents the fragmentation of accountability in large-scale changes."
  }
];

export const RISKS: RiskItem[] = [
  { id: 'R1', description: 'Resistance to standardized ITIL processes', probability: 'High', impact: 'Medium', mitigation: 'Incremental training and cultural collaboration workshops.' },
  { id: 'R2', description: 'Service disruption during transformation', probability: 'Low', impact: 'High', mitigation: 'Staged implementation with robust rollback procedures.' },
  { id: 'R3', description: 'Data privacy / Ethics breach', probability: 'Low', impact: 'High', mitigation: 'Strict adherence to UH Protocol and anonymized data handling.' }
];

export const RACI_DATA: RACIMember[] = [
  { role: 'IS Director', name: 'Internal Client Lead', responsibilities: 'Strategic accountability, budget approval', raci: 'A' },
  { role: 'Consultancy Lead', name: 'CR Consultancy Team', responsibilities: 'ITIL process design, implementation guide', raci: 'R' },
  { role: 'Service Desk Staff', name: 'Operational Team', responsibilities: 'Incident control, reporting', raci: 'C' },
  { role: 'End Users', name: 'User Community', responsibilities: 'Feedback, UAT participation', raci: 'I' }
];

export const SWOT_DATA = {
  strengths: ['Standardized ITIL framework', 'Research-backed solutions', 'Clear governance models'],
  weaknesses: ['Fragmented legacy units', 'Lost internal trust', 'Culture of shadow IT'],
  opportunities: ['Cost reduction through efficiency', 'Improved service reliability', 'Commercial utility transition'],
  threats: ['External provider competition', 'Internal change resistance', 'Critical service outages']
};

export const PESTLE_DATA: PESTLEItem[] = [
  { factor: 'Political', detail: 'UK Government drive for digital sovereignty and Green IT mandates.' },
  { factor: 'Economic', detail: 'Pressure to reduce IT overhead while avoiding high costs of total outsourcing.' },
  { factor: 'Social', detail: 'Workforce demand for reliable, consumer-grade IT experiences in industrial settings.' },
  { factor: 'Technological', detail: 'Transition to cloud-native ITSM tools and AI-assisted service desks.' },
  { factor: 'Legal', detail: 'Compliance with GDPR and mission-critical safety regulations (Electricity/Chemical).' },
  { factor: 'Environmental', detail: 'Mandates for energy-efficient data centers and sustainable hardware lifecycles.' }
];

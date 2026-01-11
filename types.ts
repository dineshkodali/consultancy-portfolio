
export interface ResearchLogEntry {
  unit: number;
  title: string;
  theory: string;
  practice: string;
  reflections: string;
}

export interface RiskItem {
  id: string;
  description: string;
  probability: 'Low' | 'Medium' | 'High';
  impact: 'Low' | 'Medium' | 'High';
  mitigation: string;
}

export interface RACIMember {
  role: string;
  name: string;
  responsibilities: string;
  raci: 'R' | 'A' | 'C' | 'I';
}

export interface PESTLEItem {
  factor: string;
  detail: string;
}

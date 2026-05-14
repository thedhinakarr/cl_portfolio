export interface WorkEntry {
  readonly year: number;
  readonly title: string;
  readonly role: string;
  readonly tags: readonly string[];
  readonly status: string;
  readonly active?: boolean;
  readonly href?: string;
}

export const work: readonly WorkEntry[] = [
  {
    year: 2026,
    title: 'CarbonLens',
    role: 'AI-powered fair-value engine for voluntary carbon credits. Founder, full-stack.',
    tags: ['PyTorch', 'XGBoost', 'Next.js', 'FinBERT'],
    status: 'Shipping',
    active: true,
    href: 'https://carbonlens.app',
  },
  {
    year: 2025,
    title: 'LSTM equity forecasting',
    role: 'Time-series prediction with walk-forward validation. The architectural ancestor of CarbonLens.',
    tags: ['PyTorch', 'NumPy'],
    status: 'Archive',
  },
  {
    year: 2024,
    title: 'Viak Group data pipelines',
    role: 'Batch error rate from 12% to under 1%. Reporting time from 4 hours to 15 minutes.',
    tags: ['Azure', 'Python', 'Power BI'],
    status: 'Industry',
  },
  {
    year: 2024,
    title: 'Decision-support regression',
    role: 'XGBoost + SHAP for operations. Surfaced three levers that weren\'t being measured.',
    tags: ['XGBoost', 'SHAP'],
    status: 'Industry',
  },
  {
    year: 2023,
    title: 'Bedrock RAG assistant',
    role: 'Retrieval pipeline mixing OpenAI embeddings and LLaMA 2. Internal knowledge tool, ran on EKS.',
    tags: ['LangChain', 'AWS Bedrock'],
    status: 'Industry',
  },
] as const;

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
    title: 'CarbonLenz',
    role: 'AI CBAM evidence scanner for EU importers. Extracts supplier emissions data, checks evidence gaps, calculates 2026–2034 cost exposure.',
    tags: ['Groq', 'Llama 3.3', 'FastAPI', 'Next.js', 'Recharts'],
    status: 'Shipping',
    active: true,
    href: 'https://carbonlenz.com',
  },
] as const;
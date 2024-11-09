export interface AnalyzedContent {
  url: string;
  title: string;
  content: string;
  wordCount: number;
  readingTime: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  keywords: string[];
  timestamp: string;
}
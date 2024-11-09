import React, { useState } from 'react';
import { Header } from './components/Header';
import { UrlForm } from './components/UrlForm';
import { ContentCard } from './components/ContentCard';
import { EmptyState } from './components/EmptyState';
import { ErrorBanner } from './components/ErrorBanner';
import { LoadingState } from './components/LoadingState';
import { useLocalStorage } from './hooks/useLocalStorage';
import type { AnalyzedContent } from './types';

function App() {
  const [analyzedContents, setAnalyzedContents] = useLocalStorage<AnalyzedContent[]>('analyzed-contents', []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const analyzeUrl = async (url: string) => {
    setLoading(true);
    setError(null);

    try {
      // Simulated content analysis with more realistic data
      const analyzedContent: AnalyzedContent = {
        url,
        title: "How AI is Transforming Content Analysis",
        content: "Artificial Intelligence is revolutionizing how we analyze and understand digital content. From natural language processing to sentiment analysis, AI tools are providing unprecedented insights into online content. This technology enables content creators and analysts to make data-driven decisions and better understand their audience's needs.",
        wordCount: 42,
        readingTime: "2 min read",
        sentiment: "positive",
        keywords: ["AI", "content analysis", "technology"],
        timestamp: new Date().toISOString()
      };

      setAnalyzedContents(prev => [analyzedContent, ...prev]);
    } catch (err) {
      setError('Failed to analyze the URL. Please check the URL and try again.');
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = () => {
    setAnalyzedContents([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header analyzedCount={analyzedContents.length} onClearHistory={clearHistory} />
      
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <UrlForm onAnalyze={analyzeUrl} isLoading={loading} />
          {error && <ErrorBanner message={error} onDismiss={() => setError(null)} />}
        </div>

        {loading && <LoadingState />}

        {!loading && (
          <div className="space-y-6">
            {analyzedContents.map((content, index) => (
              <ContentCard key={`${content.url}-${index}`} {...content} />
            ))}

            {analyzedContents.length === 0 && <EmptyState />}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
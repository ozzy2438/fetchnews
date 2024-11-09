import React, { useState } from 'react';
import { Link2, Loader2 } from 'lucide-react';

interface UrlFormProps {
  onAnalyze: (url: string) => Promise<void>;
  isLoading: boolean;
}

export function UrlForm({ onAnalyze, isLoading }: UrlFormProps) {
  const [url, setUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onAnalyze(url.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative">
        <input
          type="url"
          placeholder="Enter a URL to analyze (e.g., https://example.com)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-4 py-3 pl-12 pr-32 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
          required
        />
        <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <button
          type="submit"
          disabled={isLoading}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1.5 rounded-md hover:bg-indigo-700 disabled:bg-indigo-400 flex items-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 size={16} className="animate-spin" />
              Analyzing...
            </>
          ) : (
            'Analyze'
          )}
        </button>
      </div>
    </form>
  );
}
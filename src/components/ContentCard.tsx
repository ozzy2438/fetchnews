import React from 'react';
import { Globe, Clock, Hash, BarChart2, Tag } from 'lucide-react';
import type { AnalyzedContent } from '../types';

export function ContentCard(props: AnalyzedContent) {
  const { url, title, content, wordCount, readingTime, sentiment, keywords, timestamp } = props;

  const sentimentColor = {
    positive: 'text-green-600 bg-green-50',
    negative: 'text-red-600 bg-red-50',
    neutral: 'text-blue-600 bg-blue-50'
  }[sentiment];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-gray-900 line-clamp-2 flex-1">{title}</h3>
      </div>
      
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <Globe size={16} className="text-indigo-500" />
        <a href={url} target="_blank" rel="noopener noreferrer" 
           className="text-indigo-600 hover:text-indigo-700 truncate hover:underline">
          {url}
        </a>
      </div>

      <div className="mb-6">
        <p className="text-gray-700 line-clamp-4">{content}</p>
      </div>

      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2 text-gray-600">
          <Hash size={16} className="text-indigo-500" />
          <span>{wordCount} words</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <Clock size={16} className="text-indigo-500" />
          <span>{readingTime}</span>
        </div>

        <div className="flex items-center gap-2">
          <BarChart2 size={16} className="text-indigo-500" />
          <span className={`px-2 py-1 rounded-full ${sentimentColor} capitalize`}>
            {sentiment}
          </span>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Tag size={16} className="text-indigo-500" />
        {keywords.map((keyword, index) => (
          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
            {keyword}
          </span>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t text-sm text-gray-500">
        <time>
          {new Date(timestamp).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </time>
      </div>
    </div>
  );
}
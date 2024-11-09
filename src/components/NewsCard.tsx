import React from 'react';
import { ExternalLink } from 'lucide-react';

interface NewsCardProps {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

export function NewsCard({ title, description, url, urlToImage, publishedAt, source }: NewsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="aspect-video w-full relative overflow-hidden">
        <img
          src={urlToImage || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800'}
          alt={title}
          className="object-cover w-full h-full"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {source.name}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center justify-between">
          <time className="text-sm text-gray-500">
            {new Date(publishedAt).toLocaleDateString('en-US', {
              month: 'short',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium"
          >
            Read More <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
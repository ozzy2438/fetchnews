import React from 'react';
import { Loader2 } from 'lucide-react';

export function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Loader2 size={40} className="text-indigo-600 animate-spin mb-4" />
      <p className="text-gray-600">Analyzing content...</p>
    </div>
  );
}
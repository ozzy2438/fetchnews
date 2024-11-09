import React from 'react';
import { FileSearch } from 'lucide-react';

export function EmptyState() {
  return (
    <div className="text-center py-12">
      <div className="flex justify-center mb-4">
        <FileSearch size={48} className="text-gray-400" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">No Content Analyzed Yet</h3>
      <p className="text-gray-500">Enter a URL above to start analyzing content</p>
    </div>
  );
}
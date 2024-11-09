import React from 'react';
import { Link2, Trash2 } from 'lucide-react';

interface HeaderProps {
  analyzedCount: number;
  onClearHistory: () => void;
}

export function Header({ analyzedCount, onClearHistory }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-800 text-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Link2 size={32} />
              <h1 className="text-3xl font-bold">ContentLens</h1>
            </div>
            <p className="mt-2 text-indigo-100">Analyze content from any URL</p>
          </div>
          
          {analyzedCount > 0 && (
            <button
              onClick={onClearHistory}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <Trash2 size={16} />
              Clear History
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
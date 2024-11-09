import React from 'react';
import { XCircle, X } from 'lucide-react';

interface ErrorBannerProps {
  message: string;
  onDismiss: () => void;
}

export function ErrorBanner({ message, onDismiss }: ErrorBannerProps) {
  return (
    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
      <XCircle size={20} />
      <p className="flex-1">{message}</p>
      <button onClick={onDismiss} className="p-1 hover:bg-red-100 rounded-full">
        <X size={16} />
      </button>
    </div>
  );
}
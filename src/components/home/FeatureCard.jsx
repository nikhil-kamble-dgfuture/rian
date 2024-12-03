import React from 'react';
import { Globe } from 'lucide-react';

function FeatureCard({ title, description }) {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="p-3 bg-blue-50 rounded-full mb-4">
        <Globe className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-center text-sm">{description}</p>
    </div>
  );
}

export default FeatureCard;
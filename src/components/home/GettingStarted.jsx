// import React from 'react';
// import FeatureCard from './FeatureCard';
// import GettingStartedSection from './GettingStartedSection';

// function GettingStarted() {
//   const features = [
//     {
//       title: "Reliable hosting",
//       description: "Offer clients uninterrupted momentum and peace of mind select Enterprise customers are covered with a 99.99% uptime SLA."
//     },
//     {
//       title: "Reliable hosting",
//       description: "Offer clients uninterrupted momentum and peace of mind select Enterprise customers are covered with a 99.99% uptime SLA."
//     },
//     {
//       title: "Reliable hosting",
//       description: "Offer clients uninterrupted momentum and peace of mind select Enterprise customers are covered with a 99.99% uptime SLA."
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
//         <GettingStartedSection />
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {features.map((feature, index) => (
//             <FeatureCard
//               key={index}
//               title={feature.title}
//               description={feature.description}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default GettingStarted;
import React from 'react';
import FeatureCard from './FeatureCard';
import GettingStartedSection from './GettingStartedSection';

function GettingStarted() {
  const features = [
    {
      title: "AI-Voice Match",
      description: "Offer clients uninterrupted momentum and peace of mind. Select Enterprise customers are covered with a 99.99% uptime SLA."
    },
    {
      title: "Lip-Sync",
      description: "Offer clients uninterrupted momentum and peace of mind. Select Enterprise customers are covered with a 99.99% uptime SLA."
    },
    {
      title: "Creative Localization",
      description: "Offer clients uninterrupted momentum and peace of mind. Select Enterprise customers are covered with a 99.99% uptime SLA."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <GettingStartedSection />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GettingStarted;

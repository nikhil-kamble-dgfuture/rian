import FeatureCard from './FeatureCard';

const features = [
  {
    title: "Natural Voice Synthesis",
    description: "Create human-like voices with advanced AI technology"
  },
  {
    title: "Multiple Languages",
    description: "Support for over 30+ languages and various accents"
  },
  {
    title: "Custom Voice Training",
    description: "Train the AI with your own voice samples"
  },
  {
    title: "Real-time Generation",
    description: "Generate voice content in seconds"
  }
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}
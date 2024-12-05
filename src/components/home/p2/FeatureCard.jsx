export default function FeatureCard({ title, description }) {
    return (
      <div className="bg-custom-primary/20 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:bg-custom-secondary/30 transition-all duration-300 border border-white/10">
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
    );
  }
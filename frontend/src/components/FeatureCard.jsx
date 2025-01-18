function FeatureCard({ title, description, gradient }) {
    return (
      <div
        className={`p-6 rounded-lg ${gradient} text-white hover:animate-neon-glow transition duration-300`}
        style={{
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
      </div>
    );
  }
  
  export default FeatureCard;
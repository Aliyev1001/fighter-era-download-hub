const SystemRequirements = () => {
  const requirements = {
    minimum: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i5-4460 / AMD FX-6300",
      memory: "8 GB RAM",
      graphics: "NVIDIA GeForce GTX 760 / AMD Radeon RX 560",
      storage: "50 GB available space",
    },
    recommended: {
      os: "Windows 10/11 64-bit",
      processor: "Intel Core i7-8700K / AMD Ryzen 5 3600X",
      memory: "16 GB RAM",
      graphics: "NVIDIA GeForce RTX 2060 / AMD Radeon RX 5700",
      storage: "50 GB SSD",
    },
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {Object.entries(requirements).map(([type, specs]) => (
        <div
          key={type}
          className="p-6 rounded-2xl bg-game-charcoal/50 backdrop-blur-md border border-game-purple/20"
        >
          <h3 className="text-xl font-semibold mb-4 text-white capitalize">
            {type} Requirements
          </h3>
          <div className="space-y-3">
            {Object.entries(specs).map(([spec, value]) => (
              <div key={spec} className="flex justify-between">
                <span className="text-gray-400 capitalize">{spec}:</span>
                <span className="text-white">{value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SystemRequirements;
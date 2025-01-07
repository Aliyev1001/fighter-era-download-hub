const SystemRequirements = () => {
  const requirements = {
    minimum: {
      os: "Windows 7 32-bit",
      processor: "Intel Core 2 Duo / AMD Athlon X2",
      memory: "2 GB RAM",
      graphics: "Intel HD Graphics / AMD Radeon HD 4000",
      storage: "50 MB available space",
    },
    recommended: {
      os: "Windows 10 64-bit",
      processor: "Intel Core i3 / AMD FX-4300",
      memory: "4 GB RAM",
      graphics: "NVIDIA GeForce GT 730 / AMD Radeon R7 240",
      storage: "50 MB available space",
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
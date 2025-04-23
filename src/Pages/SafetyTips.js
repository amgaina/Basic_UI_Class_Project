import SafetyTip from "../Components/SafetyTip";

const SafetyTips = () => {
  const tips = [
    {
      id: 1,
      category: "Home Safety",
      title: "Secure Your Home",
      content: "Always lock doors and windows when leaving. Consider installing motion-sensor lights.",
    },
    {
      id: 2,
      category: "Walking Safety",
      title: "Nighttime Precautions",
      content: "Walk in well-lit areas. Stay aware of your surroundings and avoid distractions.",
    },
    {
      id: 3,
      category: "Vehicle Safety",
      title: "Parking Safety",
      content: "Park in visible areas. Never leave valuables in plain sight.",
    },
  ];

  return (
    <>
      <style>
        {`
          .tips-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
          }
          
          .tips-container h2 {
            color: #990033;
            font-size: 2rem;
            text-align: center;
            margin-bottom: 2rem;
          }
          
          .tips-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
          }
          
          @media (max-width: 768px) {
            .tips-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>

      <div className="tips-container">
        <h2>Safety Tips</h2>
        <div className="tips-grid">
          {tips.map((tip) => (
            <SafetyTip key={tip.id} tip={tip} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SafetyTips;
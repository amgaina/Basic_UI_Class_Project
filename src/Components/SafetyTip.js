const SafetyTip = ({ tip }) => {
  return (
    <>
      <style>{`
        .safety-tip {
          background: white;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          transition: transform 0.2s ease;
        }
        
        .safety-tip:hover {
          transform: translateY(-5px);
        }
        
        .tip-category {
          display: inline-block;
          background: #990033;
          color: white;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        
        h3 {
          color: #333;
          margin-bottom: 0.8rem;
          font-size: 1.2rem;
        }
        
        p {
          color: #666;
          line-height: 1.5;
        }
      `}</style>

      <div className="safety-tip">
        <div className="tip-category">{tip.category}</div>
        <h3>{tip.title}</h3>
        <p>{tip.content}</p>
      </div>
    </>
  );
};

export default SafetyTip;

const PharmaOrbit = () => {
  return (
    <div className="orbit-container">
      {/* Central Core - Premium Intelligence Hub */}
      <div className="orbit-center">
        <div className="core-glow"></div>
        <span className="core-text">ENSA</span>
      </div>
      
      {/* Primary Orbit Ring - Elegant Data Ring */}
      <div className="orbit-ring">
        <div className="ring-glow"></div>
        
        {/* Floating Node Cards - Premium Pill Cards */}
        <div className="orbit-item orbit-item-1">
          <div className="node-card">
            <div className="node-glow"></div>
            <span className="node-text">API</span>
          </div>
        </div>
        
        <div className="orbit-item orbit-item-2">
          <div className="node-card">
            <div className="node-glow"></div>
            <span className="node-text">M&A</span>
          </div>
        </div>
        
        <div className="orbit-item orbit-item-3">
          <div className="node-card">
            <div className="node-glow"></div>
            <span className="node-text">Licensing</span>
          </div>
        </div>
        
        <div className="orbit-item orbit-item-4">
          <div className="node-card">
            <div className="node-glow"></div>
            <span className="node-text">Capital</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PharmaOrbit

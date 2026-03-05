function OrbitGraphic() {
  return (
    <div className="orbit-wrap">
      <div className="graphic-orbit">
        <div className="orbit-center">ENSA</div>
        <div className="orbit-ring" />
        <div className="orbit-plane">
          <div className="orbit-node pos-top">
            <div className="orbit-node-inner">
              <span className="orbit-node-text">API</span>
            </div>
          </div>
          <div className="orbit-node pos-right">
            <div className="orbit-node-inner">
              <span className="orbit-node-text">M&amp;A</span>
            </div>
          </div>
          <div className="orbit-node is-licensing pos-bottom">
            <div className="orbit-node-inner">
              <span className="orbit-node-text">Licensing</span>
            </div>
          </div>
          <div className="orbit-node pos-left">
            <div className="orbit-node-inner">
              <span className="orbit-node-text">Capital</span>
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow" />
      </div>
    </div>
  )
}

export default OrbitGraphic

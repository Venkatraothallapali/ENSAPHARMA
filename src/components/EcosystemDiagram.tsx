import './EcosystemDiagram.css'

const EcosystemDiagram = () => {
  return (
    <>
      <div className="ecosystem-diagram-premium">
        {/* SVG Connections Layer */}
        <svg className="ecosystem-svg" viewBox="0 0 700 500">
          <defs>
            {/* Gradient Definitions */}
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e82c9" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
            </linearGradient>
            
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#23b04d" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1e82c9" stopOpacity="0.8" />
            </linearGradient>
            
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#23b04d" stopOpacity="0.8" />
            </linearGradient>
            
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.8" />
            </linearGradient>
            
            {/* Glow Filter */}
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Curved Connection Paths */}
          {/* Investors to Center */}
          <path 
            d="M 350 80 Q 300 150 350 250" 
            stroke="url(#gradient1)" 
            strokeWidth="2" 
            fill="none"
            opacity="0.6"
            filter="url(#glow)"
            className="flow-path-reverse"
          />
          
          {/* API Manufacturers to Center */}
          <path 
            d="M 100 250 Q 200 200 350 250" 
            stroke="url(#gradient2)" 
            strokeWidth="2" 
            fill="none"
            opacity="0.6"
            filter="url(#glow)"
            className="flow-path-reverse"
          />
          
          {/* Center to Pharmaceutical Companies */}
          <path 
            d="M 600 250 Q 450 200 350 250" 
            stroke="url(#gradient3)" 
            strokeWidth="2" 
            fill="none"
            opacity="0.6"
            filter="url(#glow)"
            className="flow-path-reverse"
          />
          
          {/* Center to CRO/BA-BE Centers */}
          <path 
            d="M 350 420 Q 400 330 350 250" 
            stroke="url(#gradient4)" 
            strokeWidth="2" 
            fill="none"
            opacity="0.6"
            filter="url(#glow)"
            className="flow-path-reverse"
          />
          
          {/* Connection Labels */}
          <text x="300" y="150" fill="#1e82c9" fontSize="11" fontWeight="500" textAnchor="middle">
            Capital Advisory
          </text>
          
          <text x="200" y="200" fill="#23b04d" fontSize="11" fontWeight="500" textAnchor="middle">
            Partnerships
          </text>
          
          <text x="450" y="200" fill="#f59e0b" fontSize="11" fontWeight="500" textAnchor="middle">
            Collaboration
          </text>
          
          <text x="400" y="330" fill="#ff6b35" fontSize="11" fontWeight="500" textAnchor="middle">
            Licensing & Partnerships
          </text>
          
          {/* Animated Flowing Dots */}
          <circle r="3" fill="#1e82c9" filter="url(#glow)">
            <animateMotion dur="3s" repeatCount="indefinite">
              <mpath href="#path1-reverse"/>
            </animateMotion>
          </circle>
          
          <circle r="3" fill="#23b04d" filter="url(#glow)">
            <animateMotion dur="3.5s" repeatCount="indefinite">
              <mpath href="#path2-reverse"/>
            </animateMotion>
          </circle>
          
          <circle r="3" fill="#f59e0b" filter="url(#glow)">
            <animateMotion dur="4s" repeatCount="indefinite">
              <mpath href="#path3-reverse"/>
            </animateMotion>
          </circle>
          
          <circle r="3" fill="#ff6b35" filter="url(#glow)">
            <animateMotion dur="4.5s" repeatCount="indefinite">
              <mpath href="#path4-reverse"/>
            </animateMotion>
          </circle>
          
          {/* Define paths for animation - REVERSED direction */}
          <path id="path1-reverse" d="M 350 80 Q 300 150 350 250" fill="none"/>
          <path id="path2-reverse" d="M 100 250 Q 200 200 350 250" fill="none"/>
          <path id="path3-reverse" d="M 600 250 Q 450 200 350 250" fill="none"/>
          <path id="path4-reverse" d="M 350 420 Q 400 330 350 250" fill="none"/>
        </svg>
        
        {/* Nodes Layer */}
        <div className="ecosystem-nodes">
          {/* Center Node - ENSA PHARMA */}
          <div className="ecosystem-node center-node">
            <div className="node-content">
              <h3>CRO / BA / BE Partnerships</h3>
              <p>Strategic Connector</p>
            </div>
          </div>
          
          {/* Top Node - Investors */}
          <div className="ecosystem-node top-node">
            <div className="node-content">
              <h4>API Marketing</h4>
              <p>Capital Advisory</p>
            </div>
          </div>
          
          {/* Left Node - API Manufacturers */}
          <div className="ecosystem-node left-node">
            <div className="node-content">
              <h4>Global servicing </h4>
              <p>Partnerships</p>
            </div>
          </div>
          
          {/* Right Node - Pharmaceutical Companies */}
          <div className="ecosystem-node right-node">
            <div className="node-content">
              <h4>Pharma M & A </h4>
              <p>Collaboration</p>
            </div>
          </div>
          
          {/* Bottom Node - CRO/BA-BE Centers */}
          <div className="ecosystem-node bottom-node">
            <div className="node-content">
              <h4>Investors</h4>
              <p>Capitol Advisory </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Description moved outside */}
      <div className="ecosystem-description">
        <p>ENSA acts as the central strategic connector in the pharmaceutical value chain</p>
      </div>
    </>
  )
}

export default EcosystemDiagram

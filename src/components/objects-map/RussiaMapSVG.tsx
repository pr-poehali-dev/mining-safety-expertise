interface RussiaMapSVGProps {
  objects: Array<{
    id: number;
    name: string;
    x: number;
    y: number;
    type?: 'project' | 'expertise' | 'research';
  }>;
  onObjectHover: (id: number | null) => void;
  hoveredObject: number | null;
}

const RussiaMapSVG = ({ objects, onObjectHover, hoveredObject }: RussiaMapSVGProps) => {
  const getMarkerColor = (type?: string) => {
    switch (type) {
      case 'project': return '#10b981';
      case 'expertise': return '#ef4444';
      case 'research': return '#f59e0b';
      default: return '#3b82f6';
    }
  };

  return (
    <svg viewBox="0 0 1600 900" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <filter id="shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
        </filter>
      </defs>
      
      <rect width="1600" height="900" fill="#f1f5f9" />
      
      <path
        d="M 100 350 L 140 320 L 180 300 L 220 290 L 260 285 L 300 280 L 340 275 L 380 270 L 420 265 L 460 260 L 500 255 L 540 250 L 580 245 L 620 245 L 660 245 L 700 250 L 740 255 L 780 265 L 820 275 L 860 290 L 900 310 L 940 330 L 980 350 L 1020 370 L 1060 385 L 1100 395 L 1140 400 L 1180 402 L 1220 400 L 1260 395 L 1300 387 L 1340 375 L 1380 360 L 1400 345 L 1420 325 L 1440 300 L 1450 275 L 1455 250 L 1455 225 L 1450 200 L 1440 180 L 1425 165 L 1400 155 L 1370 150 L 1340 145 L 1310 142 L 1280 140 L 1250 140 L 1220 142 L 1190 145 L 1160 148 L 1130 150 L 1100 150 L 1070 148 L 1040 145 L 1010 140 L 980 135 L 950 130 L 920 125 L 890 122 L 860 120 L 830 120 L 800 122 L 770 125 L 740 130 L 710 135 L 680 142 L 650 150 L 620 160 L 590 172 L 560 185 L 530 200 L 500 215 L 470 230 L 440 245 L 410 260 L 380 275 L 350 290 L 320 305 L 290 320 L 260 335 L 230 350 L 200 365 L 170 378 L 140 388 L 110 395 L 85 398 L 65 397 L 50 392 L 40 385 L 35 375 L 35 365 L 40 355 L 50 345 L 65 337 L 82 330 Z M 1320 500 L 1340 490 L 1360 485 L 1380 485 L 1400 490 L 1415 500 L 1425 515 L 1430 535 L 1428 555 L 1420 575 L 1408 590 L 1392 600 L 1372 605 L 1350 605 L 1328 600 L 1310 590 L 1298 575 L 1292 555 L 1292 535 L 1298 515 L 1308 502 Z"
        fill="#1e40af"
        stroke="#1e3a8a"
        strokeWidth="2"
        opacity="0.95"
      />
      
      <path
        d="M 180 300 L 200 310 L 220 315 L 235 310 L 245 295 L 240 280 L 225 270 L 205 272 L 188 285 Z"
        fill="none"
        stroke="#cbd5e1"
        strokeWidth="1"
        opacity="0.4"
      />
      <path
        d="M 350 290 L 370 295 L 385 290 L 395 275 L 388 262 L 372 255 L 355 260 L 345 275 Z"
        fill="none"
        stroke="#cbd5e1"
        strokeWidth="1"
        opacity="0.4"
      />
      <path
        d="M 520 250 L 545 252 L 565 245 L 575 230 L 568 218 L 548 212 L 528 220 L 518 235 Z"
        fill="none"
        stroke="#cbd5e1"
        strokeWidth="1"
        opacity="0.4"
      />
      <path
        d="M 750 255 L 775 260 L 795 252 L 805 235 L 798 220 L 778 215 L 758 225 L 748 242 Z"
        fill="none"
        stroke="#cbd5e1"
        strokeWidth="1"
        opacity="0.4"
      />
      <path
        d="M 950 300 L 975 308 L 995 300 L 1005 280 L 998 262 L 978 255 L 958 265 L 948 285 Z"
        fill="none"
        stroke="#cbd5e1"
        strokeWidth="1"
        opacity="0.4"
      />
      <path
        d="M 1150 380 L 1175 385 L 1195 378 L 1205 360 L 1198 345 L 1178 340 L 1158 350 L 1148 368 Z"
        fill="none"
        stroke="#cbd5e1"
        strokeWidth="1"
        opacity="0.4"
      />
      
      {objects.map((obj) => {
        const color = getMarkerColor(obj.type);
        const isHovered = hoveredObject === obj.id;
        const scale = isHovered ? 1.4 : 1;
        
        return (
          <g
            key={obj.id}
            transform={`translate(${obj.x}, ${obj.y})`}
            onMouseEnter={() => onObjectHover(obj.id)}
            onMouseLeave={() => onObjectHover(null)}
            style={{ cursor: 'pointer', transition: 'all 0.2s' }}
          >
            <circle
              r={isHovered ? 32 : 24}
              fill={color}
              stroke="white"
              strokeWidth={isHovered ? 4 : 3}
              opacity={isHovered ? 1 : 0.95}
              filter="url(#shadow)"
              style={{ transition: 'all 0.2s' }}
            />
            <text
              y="8"
              fontSize={isHovered ? 20 : 16}
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
              style={{ 
                pointerEvents: 'none',
                transition: 'all 0.2s',
                userSelect: 'none'
              }}
            >
              {objects.filter(o => Math.abs(o.x - obj.x) < 30 && Math.abs(o.y - obj.y) < 30).length}
            </text>
            {isHovered && (
              <text
                y={50}
                fontSize={14}
                fontWeight="600"
                fill="#1e293b"
                textAnchor="middle"
                className="pointer-events-none"
                style={{ userSelect: 'none' }}
              >
                {obj.name}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
};

export default RussiaMapSVG;

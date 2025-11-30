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

  const regions = [
    'M 50 380 L 70 370 L 80 380 L 75 395 L 60 400 L 48 392 Z',
    'M 180 320 L 200 315 L 215 320 L 225 330 L 220 345 L 205 355 L 185 350 L 170 335 Z',
    'M 160 290 L 230 285 L 245 305 L 240 330 L 220 350 L 195 360 L 170 350 L 155 320 Z',
    'M 125 360 L 170 355 L 185 370 L 180 390 L 160 400 L 140 395 L 120 375 Z',
    'M 175 340 L 230 335 L 245 355 L 240 380 L 215 395 L 190 390 L 170 365 Z',
    'M 278 408 L 292 405 L 302 410 L 298 422 L 286 425 L 276 418 Z',
    'M 245 385 L 315 380 L 335 405 L 330 430 L 300 445 L 270 440 L 240 415 Z',
    'M 235 350 L 295 345 L 310 365 L 305 390 L 280 400 L 250 395 L 230 370 Z',
    'M 175 395 L 235 390 L 250 410 L 245 435 L 220 445 L 190 440 L 170 415 Z',
    'M 220 425 L 275 420 L 290 440 L 285 465 L 260 475 L 235 470 L 215 445 Z',
    'M 265 445 L 320 440 L 335 460 L 330 485 L 305 495 L 280 490 L 260 465 Z',
    'M 310 420 L 365 415 L 380 435 L 375 460 L 350 470 L 325 465 L 305 440 Z',
    'M 315 385 L 370 380 L 385 400 L 380 425 L 355 435 L 330 430 L 310 405 Z',
    'M 290 355 L 345 350 L 360 370 L 355 395 L 330 405 L 305 400 L 285 375 Z',
    'M 335 340 L 390 335 L 405 355 L 400 380 L 375 390 L 350 385 L 330 360 Z',
    'M 330 380 L 385 375 L 400 395 L 395 420 L 370 430 L 345 425 L 325 400 Z',
    'M 360 405 L 430 400 L 450 425 L 445 455 L 415 470 L 385 460 L 355 430 Z',
    'M 180 425 L 235 420 L 250 440 L 245 465 L 220 475 L 195 470 L 175 445 Z',
    'M 225 455 L 280 450 L 295 470 L 290 495 L 265 505 L 240 500 L 220 475 Z',
    'M 235 495 L 290 490 L 305 510 L 300 535 L 275 545 L 250 540 L 230 515 Z',
    'M 265 535 L 320 530 L 335 550 L 330 575 L 305 585 L 280 580 L 260 555 Z',
    'M 275 490 L 340 485 L 360 510 L 355 540 L 325 555 L 295 545 L 270 515 Z',
    'M 290 460 L 345 455 L 360 475 L 355 500 L 330 510 L 305 505 L 285 480 Z',
    'M 335 445 L 390 440 L 405 460 L 400 485 L 375 495 L 350 490 L 330 465 Z',
    'M 380 440 L 435 435 L 450 455 L 445 480 L 420 490 L 395 485 L 375 460 Z',
    'M 420 425 L 475 420 L 490 440 L 485 465 L 460 475 L 435 470 L 415 445 Z',
    'M 455 440 L 520 435 L 540 460 L 535 490 L 505 505 L 475 495 L 450 465 Z',
    'M 415 470 L 485 465 L 505 495 L 500 530 L 465 550 L 435 540 L 410 505 Z',
    'M 425 540 L 495 535 L 520 570 L 515 605 L 475 625 L 440 610 L 415 570 Z',
    'M 465 615 L 520 610 L 540 635 L 535 665 L 505 680 L 475 670 L 460 640 Z',
    'M 335 555 L 415 550 L 440 590 L 435 630 L 390 650 L 350 635 L 325 590 Z',
    'M 275 575 L 350 570 L 375 610 L 370 650 L 330 670 L 290 655 L 265 610 Z',
    'M 300 610 L 340 605 L 355 625 L 350 650 L 325 660 L 300 650 Z',
    'M 360 595 L 435 590 L 460 630 L 455 670 L 415 690 L 375 675 L 350 630 Z',
    'M 310 630 L 360 625 L 375 650 L 370 680 L 340 695 L 310 680 Z',
    'M 355 640 L 405 635 L 420 660 L 415 690 L 385 705 L 355 690 Z',
    'M 390 655 L 435 650 L 450 675 L 445 705 L 415 720 L 390 705 Z',
    'M 420 670 L 455 665 L 470 685 L 465 710 L 445 720 L 420 710 Z',
    'M 440 670 L 495 665 L 515 695 L 510 730 L 475 750 L 445 735 L 425 700 Z',
    'M 480 675 L 550 670 L 575 710 L 570 750 L 530 775 L 490 755 L 465 710 Z',
    'M 475 550 L 540 545 L 560 575 L 555 610 L 520 630 L 490 620 L 470 585 Z',
    'M 275 280 L 360 275 L 385 305 L 380 340 L 340 360 L 300 350 L 270 315 Z',
    'M 290 190 L 460 180 L 495 215 L 490 265 L 440 295 L 385 285 L 340 260 L 285 235 Z',
    'M 455 175 L 550 170 L 575 195 L 570 230 L 530 250 L 480 235 L 450 205 Z',
    'M 475 255 L 600 245 L 635 285 L 630 335 L 580 365 L 525 345 L 485 310 L 470 280 Z',
    'M 565 355 L 660 345 L 690 385 L 685 430 L 635 460 L 585 440 L 555 400 Z',
    'M 425 365 L 520 355 L 545 390 L 540 430 L 495 455 L 450 440 L 420 400 Z',
    'M 520 390 L 590 380 L 610 410 L 605 445 L 565 465 L 530 455 L 515 420 Z',
    'M 440 395 L 505 390 L 525 415 L 520 445 L 485 460 L 455 455 L 435 425 Z',
    'M 445 420 L 500 415 L 520 440 L 515 470 L 480 485 L 450 480 L 440 450 Z',
    'M 485 420 L 570 410 L 600 455 L 595 500 L 545 525 L 500 510 L 475 465 Z',
    'M 555 440 L 650 430 L 685 485 L 680 540 L 620 575 L 565 550 L 540 500 Z',
    'M 575 515 L 660 505 L 690 555 L 685 605 L 630 635 L 580 620 L 565 570 Z',
    'M 620 450 L 700 440 L 725 480 L 720 525 L 675 555 L 625 540 L 605 490 Z',
    'M 625 395 L 700 385 L 725 420 L 720 460 L 680 485 L 630 475 L 615 430 Z',
    'M 645 360 L 740 350 L 770 395 L 765 445 L 710 480 L 660 465 L 635 415 Z',
    'M 685 295 L 830 280 L 870 335 L 865 400 L 790 445 L 725 420 L 675 370 Z',
    'M 715 175 L 870 160 L 910 215 L 905 285 L 840 325 L 770 300 L 710 245 Z',
    'M 755 290 L 880 275 L 915 330 L 910 390 L 845 430 L 780 405 L 745 350 Z',
    'M 825 395 L 950 380 L 980 430 L 975 485 L 910 520 L 850 500 L 815 445 Z',
    'M 775 425 L 870 410 L 900 455 L 895 505 L 840 535 L 790 520 L 765 470 Z',
    'M 845 480 L 950 465 L 980 515 L 975 570 L 910 605 L 860 585 L 835 530 Z',
    'M 825 535 L 930 520 L 960 570 L 955 625 L 895 660 L 845 640 L 820 585 Z',
    'M 885 600 L 955 590 L 980 630 L 975 680 L 930 710 L 890 695 L 870 645 Z',
    'M 895 500 L 990 485 L 1020 535 L 1015 590 L 960 625 L 910 605 L 885 550 Z',
    'M 935 255 L 1150 235 L 1200 310 L 1195 415 L 1120 480 L 1045 465 L 985 410 L 925 350 Z',
    'M 975 515 L 1060 500 L 1085 545 L 1080 595 L 1030 625 L 985 610 L 965 560 Z',
    'M 1015 575 L 1105 560 L 1135 610 L 1130 665 L 1075 700 L 1025 680 L 1005 625 Z',
    'M 1105 415 L 1250 395 L 1290 460 L 1285 535 L 1215 585 L 1150 565 L 1095 505 Z',
    'M 1200 500 L 1315 480 L 1350 540 L 1345 605 L 1280 645 L 1215 625 L 1185 565 Z',
    'M 1265 465 L 1400 445 L 1440 515 L 1435 590 L 1360 640 L 1285 615 L 1250 550 Z',
    'M 1345 535 L 1480 515 L 1525 585 L 1520 660 L 1440 710 L 1370 685 L 1335 620 Z',
    'M 1425 600 L 1510 585 L 1535 630 L 1530 675 L 1485 700 L 1435 685 L 1415 640 Z',
    'M 1465 495 L 1600 475 L 1650 550 L 1645 635 L 1560 690 L 1490 665 L 1455 600 Z',
    'M 1495 635 L 1600 620 L 1640 685 L 1635 750 L 1570 790 L 1510 770 L 1485 710 Z',
    'M 1615 375 L 1740 360 L 1780 420 L 1775 490 L 1705 535 L 1640 515 L 1605 455 Z',
    'M 1730 435 L 1830 420 L 1865 485 L 1860 555 L 1795 595 L 1745 575 L 1720 515 Z',
    'M 1675 585 L 1760 575 L 1790 630 L 1785 695 L 1730 730 L 1685 715 L 1665 660 Z',
    'M 1745 215 L 1860 205 L 1895 260 L 1890 325 L 1830 365 L 1770 350 L 1735 295 Z',
    'M 1175 195 L 1530 165 L 1635 245 L 1695 340 L 1665 440 L 1570 500 L 1460 485 L 1360 445 L 1270 395 L 1195 345 L 1145 280 Z',
    'M 215 215 L 350 205 L 385 250 L 380 295 L 320 325 L 265 315 L 210 270 Z',
    'M 205 265 L 320 255 L 350 295 L 345 340 L 290 365 L 235 355 L 200 310 Z',
  ];

  return (
    <svg viewBox="0 0 1400 820" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <filter id="shadow">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
        </filter>
      </defs>
      
      <rect width="1400" height="820" fill="#ffffff" />
      
      <image
        href="https://cdn.poehali.dev/files/4ca8c9a3-3b8c-4686-8633-bb2858785e61.png"
        x="0"
        y="0"
        width="1400"
        height="820"
        preserveAspectRatio="xMidYMid meet"
        opacity="0.95"
      />
      
      {objects.map((obj) => {
        const color = getMarkerColor(obj.type);
        const isHovered = hoveredObject === obj.id;
        const nearbyCount = objects.filter(o => 
          Math.abs(o.x - obj.x) < 50 && Math.abs(o.y - obj.y) < 50
        ).length;
        
        return (
          <g
            key={obj.id}
            transform={`translate(${obj.x}, ${obj.y})`}
            onMouseEnter={() => onObjectHover(obj.id)}
            onMouseLeave={() => onObjectHover(null)}
            style={{ cursor: 'pointer', transition: 'all 0.2s' }}
          >
            <circle
              r={isHovered ? 28 : 20}
              fill={color}
              stroke="white"
              strokeWidth={isHovered ? 4 : 3}
              opacity={isHovered ? 1 : 0.95}
              filter="url(#shadow)"
              style={{ transition: 'all 0.2s' }}
            />
            <text
              y="6"
              fontSize={isHovered ? 18 : 14}
              fontWeight="bold"
              fill="white"
              textAnchor="middle"
              style={{ 
                pointerEvents: 'none',
                transition: 'all 0.2s',
                userSelect: 'none'
              }}
            >
              {nearbyCount > 1 ? nearbyCount : '•'}
            </text>
            {isHovered && (
              <g>
                <rect
                  x="-80"
                  y="35"
                  width="160"
                  height="32"
                  rx="6"
                  fill="white"
                  stroke={color}
                  strokeWidth="2"
                  filter="url(#shadow)"
                />
                <text
                  y="56"
                  fontSize={13}
                  fontWeight="600"
                  fill="#1e293b"
                  textAnchor="middle"
                  style={{ pointerEvents: 'none', userSelect: 'none' }}
                >
                  {obj.name}
                </text>
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
};

export default RussiaMapSVG;
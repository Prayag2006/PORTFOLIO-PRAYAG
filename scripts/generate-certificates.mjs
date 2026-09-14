import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const DIR = "public/images";
const WIDTH = 1600;
const HEIGHT = 1200;

// Helper to generate elegant rosette guilloche security pattern
function generateGuillochePattern(cx, cy, r, count = 36) {
  let paths = "";
  for (let i = 0; i < count; i++) {
    const angle = (i * 360) / count;
    const rad = (angle * Math.PI) / 180;
    const x1 = cx + Math.cos(rad) * (r * 0.45);
    const y1 = cy + Math.sin(rad) * (r * 0.45);
    const x2 = cx + Math.cos(rad + 0.4) * r;
    const y2 = cy + Math.sin(rad + 0.4) * r;
    const x3 = cx + Math.cos(rad - 0.4) * r;
    const y3 = cy + Math.sin(rad - 0.4) * r;
    paths += `<path d="M ${cx},${cy} Q ${x1},${y1} ${x2},${y2} Q ${x3},${y3} ${cx},${cy}" fill="none" stroke="currentColor" opacity="0.12" />`;
  }
  return `<g>${paths}</g>`;
}

// 1. Red & White Full Stack Web Development Certificate
function createFullstackSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1200" width="1600" height="1200">
  <defs>
    <radialGradient id="paper-bg" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#FFFDF8" />
      <stop offset="70%" stop-color="#F8F3E8" />
      <stop offset="100%" stop-color="#EBE2D0" />
    </radialGradient>

    <linearGradient id="gold-foil" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#D4AF37" />
      <stop offset="25%" stop-color="#FFF3C4" />
      <stop offset="50%" stop-color="#AA771C" />
      <stop offset="75%" stop-color="#FDF6C7" />
      <stop offset="100%" stop-color="#8B6508" />
    </linearGradient>

    <linearGradient id="red-ribbon" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#B91C1C" />
      <stop offset="50%" stop-color="#991B1B" />
      <stop offset="100%" stop-color="#7F1D1D" />
    </linearGradient>

    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#171717" flood-opacity="0.15" />
    </filter>
  </defs>

  <!-- Textured Parchment Base -->
  <rect width="1600" height="1200" fill="url(#paper-bg)" />

  <!-- Security Guilloche Pattern -->
  <g color="#D4AF37">
    ${generateGuillochePattern(800, 600, 360, 36)}
    ${generateGuillochePattern(800, 600, 520, 48)}
  </g>

  <!-- Certificate Outer Border -->
  <rect x="44" y="44" width="1512" height="1112" fill="none" stroke="url(#gold-foil)" stroke-width="8" rx="4" />
  <rect x="62" y="62" width="1476" height="1076" fill="none" stroke="#991B1B" stroke-width="2.5" />
  <rect x="70" y="70" width="1460" height="1060" fill="none" stroke="url(#gold-foil)" stroke-width="1.5" stroke-dasharray="8 4" />
  <rect x="78" y="78" width="1444" height="1044" fill="none" stroke="#991B1B" stroke-width="0.75" />

  <!-- Corner Ornaments -->
  <g fill="url(#gold-foil)">
    <path d="M 44,44 L 134,44 C 134,74 104,74 104,104 C 104,134 74,134 44,134 Z" />
    <circle cx="114" cy="114" r="9" stroke="#991B1B" stroke-width="2" />

    <path d="M 1556,44 L 1466,44 C 1466,74 1496,74 1496,104 C 1496,134 1526,134 1556,134 Z" />
    <circle cx="1486" cy="114" r="9" stroke="#991B1B" stroke-width="2" />

    <path d="M 44,1156 L 134,1156 C 134,1126 104,1126 104,1096 C 104,1066 74,1066 44,1066 Z" />
    <circle cx="114" cy="1086" r="9" stroke="#991B1B" stroke-width="2" />

    <path d="M 1556,1156 L 1466,1156 C 1466,1126 1496,1126 1496,1096 C 1496,1066 1526,1066 1556,1066 Z" />
    <circle cx="1486" cy="1086" r="9" stroke="#991B1B" stroke-width="2" />
  </g>

  <!-- Header Section -->
  <g text-anchor="middle">
    <!-- Emblem -->
    <g transform="translate(800, 150)" filter="url(#shadow)">
      <circle cx="0" cy="0" r="38" fill="url(#gold-foil)" />
      <circle cx="0" cy="0" r="32" fill="#991B1B" />
      <polygon points="0,-22 20,14 -20,14" fill="url(#gold-foil)" />
      <polygon points="0,22 20,-14 -20,-14" fill="#FFFDF8" opacity="0.85" />
      <circle cx="0" cy="0" r="8" fill="#991B1B" />
    </g>

    <text x="800" y="225" font-family="'Cinzel', Georgia, serif" font-size="22" font-weight="700" letter-spacing="6" fill="#991B1B">
      RED &amp; WHITE MULTIMEDIA EDUCATION
    </text>
    <text x="800" y="252" font-family="Arial, sans-serif" font-size="12" letter-spacing="4" fill="#554433">
      ACCREDITED CENTER FOR ADVANCED SOFTWARE ENGINEERING
    </text>

    <line x1="480" y1="275" x2="1120" y2="275" stroke="url(#gold-foil)" stroke-width="2" />

    <!-- Main Title -->
    <text x="800" y="345" font-family="'Playfair Display', Georgia, serif" font-size="46" font-weight="700" font-style="italic" fill="#1C1917" filter="url(#shadow)">
      Certificate of Completion
    </text>

    <text x="800" y="410" font-family="Georgia, serif" font-size="15" letter-spacing="4" fill="#78716C">
      THIS CERTIFICATE IS PROUDLY PRESENTED TO
    </text>

    <!-- Candidate Name -->
    <text x="800" y="490" font-family="'Playfair Display', Georgia, serif" font-size="56" font-weight="800" fill="#991B1B" letter-spacing="3">
      PRAYAG KANSARA
    </text>
    <line x1="380" y1="515" x2="1220" y2="515" stroke="url(#gold-foil)" stroke-width="2" />

    <!-- Course Info -->
    <text x="800" y="570" font-family="Georgia, serif" font-size="18" fill="#292524">
      for successfully completing the professional certification program in
    </text>

    <text x="800" y="635" font-family="'Arial Black', Gadget, sans-serif" font-size="36" font-weight="900" fill="#1C1917" letter-spacing="2">
      FULL STACK WEB DEVELOPMENT
    </text>

    <text x="800" y="690" font-family="Georgia, serif" font-size="16" fill="#57534E">
      Demonstrating high proficiency in React.js, Next.js, Node.js, Express, MongoDB, REST APIs,
    </text>
    <text x="800" y="716" font-family="Georgia, serif" font-size="16" fill="#57534E">
      Microservices Architecture, Database Design &amp; Modern Web Engineering Principles.
    </text>
  </g>

  <!-- Gold Ribbon Medal Seal (Bottom Right) -->
  <g transform="translate(1280, 890)" filter="url(#shadow)">
    <path d="M -25,45 L -55,150 L -20,130 L 15,150 L -5,45 Z" fill="url(#red-ribbon)" />
    <path d="M 5,45 L 25,150 L 60,130 L 95,150 L 45,45 Z" fill="#991B1B" />

    <circle cx="0" cy="0" r="88" fill="url(#gold-foil)" />
    <circle cx="0" cy="0" r="74" fill="#991B1B" />
    <circle cx="0" cy="0" r="66" fill="url(#gold-foil)" />
    <circle cx="0" cy="0" r="60" fill="#FFFDF8" stroke="#991B1B" stroke-width="2" />
    
    <text x="0" y="-20" font-family="'Cinzel', Georgia, serif" font-size="10" font-weight="700" letter-spacing="2" fill="#991B1B" text-anchor="middle">VERIFIED</text>
    <text x="0" y="4" font-family="'Playfair Display', serif" font-size="22" font-weight="900" fill="#1C1917" text-anchor="middle">SEAL</text>
    <text x="0" y="24" font-family="'Cinzel', Georgia, serif" font-size="9" font-weight="700" letter-spacing="1" fill="#991B1B" text-anchor="middle">EXCELLENCE</text>
    <polygon points="0,32 6,42 -6,42" fill="url(#gold-foil)" />
  </g>

  <!-- Left Bottom Registration Details -->
  <g transform="translate(240, 890)">
    <rect x="-110" y="-35" width="220" height="70" fill="#FFFDF8" stroke="url(#gold-foil)" stroke-width="2" rx="6" />
    <text x="0" y="-12" font-family="Arial, sans-serif" font-size="11" font-weight="700" fill="#991B1B" text-anchor="middle" letter-spacing="1">CERTIFICATE NO.</text>
    <text x="0" y="12" font-family="'Courier New', monospace" font-size="15" font-weight="700" fill="#1C1917" text-anchor="middle">RW/2024/FSWD/0492</text>
    <text x="0" y="55" font-family="Georgia, serif" font-size="13" fill="#57534E" text-anchor="middle">Issue Date: March 15, 2024</text>
  </g>

  <!-- Signatures -->
  <g transform="translate(0, 940)">
    <g transform="translate(560, 0)">
      <path d="M -80,-20 Q -40,-60 0,-10 T 60,-30 T 100,-15" stroke="#1E3A8A" stroke-width="3" fill="none" />
      <line x1="-120" y1="15" x2="120" y2="15" stroke="#1C1917" stroke-width="1" />
      <text x="0" y="35" font-family="Georgia, serif" font-size="15" font-weight="700" fill="#1C1917" text-anchor="middle">Dr. R. K. Mehta</text>
      <text x="0" y="55" font-family="Arial, sans-serif" font-size="12" fill="#57534E" text-anchor="middle">Director of Academics</text>
    </g>

    <g transform="translate(940, 0)">
      <path d="M -70,-15 Q -20,-50 20,-5 T 80,-40 T 110,-10" stroke="#1E3A8A" stroke-width="3" fill="none" />
      <line x1="-120" y1="15" x2="120" y2="15" stroke="#1C1917" stroke-width="1" />
      <text x="0" y="35" font-family="Georgia, serif" font-size="15" font-weight="700" fill="#1C1917" text-anchor="middle">Suresh Sharma</text>
      <text x="0" y="55" font-family="Arial, sans-serif" font-size="12" fill="#57534E" text-anchor="middle">Head of Web Technology</text>
    </g>
  </g>
</svg>`;
}

// 2. NPTEL / IIT Madras Python Certificate
function createPythonSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1200" width="1600" height="1200">
  <defs>
    <linearGradient id="nptel-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#F1F5F9" />
    </linearGradient>

    <linearGradient id="navy-header" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0F172A" />
      <stop offset="50%" stop-color="#1E3A8A" />
      <stop offset="100%" stop-color="#0F172A" />
    </linearGradient>

    <linearGradient id="gold-shine" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="50%" stop-color="#FDE047" />
      <stop offset="100%" stop-color="#D97706" />
    </linearGradient>

    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="6" stdDeviation="8" flood-color="#0F172A" flood-opacity="0.15" />
    </filter>
  </defs>

  <rect width="1600" height="1200" fill="url(#nptel-bg)" />

  <!-- Top Blue Banner -->
  <rect x="0" y="0" width="1600" height="135" fill="url(#navy-header)" />
  <rect x="0" y="135" width="1600" height="10" fill="url(#gold-shine)" />

  <text x="800" y="75" font-family="'Trebuchet MS', sans-serif" font-size="34" font-weight="800" letter-spacing="4" fill="#FFFFFF" text-anchor="middle">
    NPTEL ONLINE CERTIFICATION
  </text>
  <text x="800" y="108" font-family="Arial, sans-serif" font-size="14" letter-spacing="3" fill="#93C5FD" text-anchor="middle">
    FUNDED BY THE MINISTRY OF EDUCATION, GOVERNMENT OF INDIA
  </text>

  <!-- Frame -->
  <rect x="36" y="175" width="1528" height="965" fill="none" stroke="#0F172A" stroke-width="5" />
  <rect x="50" y="189" width="1500" height="937" fill="none" stroke="url(#gold-shine)" stroke-width="2" />

  <!-- Logos -->
  <g transform="translate(180, 255)">
    <circle cx="0" cy="0" r="48" fill="#0F172A" filter="url(#shadow)" />
    <polygon points="0,-32 26,20 -26,20" fill="url(#gold-shine)" />
    <text x="0" y="72" font-family="Arial, sans-serif" font-size="13" font-weight="800" fill="#0F172A" text-anchor="middle">IIT MADRAS</text>
  </g>

  <g transform="translate(1420, 255)">
    <circle cx="0" cy="0" r="48" fill="url(#gold-shine)" filter="url(#shadow)" />
    <circle cx="0" cy="0" r="40" fill="#0F172A" />
    <text x="0" y="7" font-family="'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#FFFFFF" text-anchor="middle">NPTEL</text>
    <text x="0" y="72" font-family="Arial, sans-serif" font-size="13" font-weight="800" fill="#0F172A" text-anchor="middle">SWAYAM</text>
  </g>

  <!-- Main Text -->
  <g text-anchor="middle">
    <text x="800" y="255" font-family="Georgia, serif" font-size="22" font-weight="700" letter-spacing="4" fill="#0F172A">
      INDIAN INSTITUTE OF TECHNOLOGY MADRAS
    </text>
    <text x="800" y="285" font-family="Arial, sans-serif" font-size="14" fill="#64748B">
      This certificate is computer generated and verified online at nptel.ac.in/noc
    </text>

    <text x="800" y="375" font-family="'Playfair Display', Georgia, serif" font-size="48" font-weight="700" font-style="italic" fill="#0F172A">
      Certificate of Achievement
    </text>

    <text x="800" y="435" font-family="Arial, sans-serif" font-size="15" letter-spacing="3" fill="#475569">
      THIS IS TO CERTIFY THAT
    </text>

    <!-- Recipient Name -->
    <text x="800" y="505" font-family="Georgia, serif" font-size="54" font-weight="800" fill="#0F172A" letter-spacing="2">
      PRAYAG KANSARA
    </text>
    <line x1="420" y1="530" x2="1180" y2="530" stroke="url(#gold-shine)" stroke-width="2" />

    <text x="800" y="580" font-family="Georgia, serif" font-size="18" fill="#334155">
      has successfully completed the 12-week national certification course
    </text>

    <!-- Course Title -->
    <text x="800" y="645" font-family="'Arial Black', sans-serif" font-size="32" font-weight="900" fill="#0F172A" letter-spacing="1">
      PROGRAMMING, DATA STRUCTURES &amp; ALGORITHMS
    </text>
    <text x="800" y="685" font-family="'Arial Black', sans-serif" font-size="30" font-weight="900" fill="#D97706" letter-spacing="2">
      USING PYTHON
    </text>

    <text x="800" y="745" font-family="Georgia, serif" font-size="18" fill="#334155">
      with a consolidated score of <tspan font-weight="800" fill="#0F172A">92%</tspan> (Online Assignments 24.17/25, Proctored Exam 68.25/75)
    </text>
  </g>

  <!-- Elite + Gold Distinction Badge -->
  <g transform="translate(800, 855)" filter="url(#shadow)">
    <rect x="-150" y="-38" width="300" height="76" rx="38" fill="url(#gold-shine)" stroke="#0F172A" stroke-width="2" />
    <text x="0" y="-4" font-family="'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#0F172A" text-anchor="middle" letter-spacing="2">ELITE + GOLD</text>
    <text x="0" y="20" font-family="Arial, sans-serif" font-size="13" font-weight="800" fill="#0F172A" text-anchor="middle" letter-spacing="1">TOP 1% CANDIDATE</text>
  </g>

  <!-- Roll No & QR Box (Left) -->
  <g transform="translate(180, 935)">
    <rect x="0" y="0" width="95" height="95" fill="#FFFFFF" stroke="#0F172A" stroke-width="2" rx="4" />
    <rect x="10" y="10" width="28" height="28" fill="#0F172A" />
    <rect x="57" y="10" width="28" height="28" fill="#0F172A" />
    <rect x="10" y="57" width="28" height="28" fill="#0F172A" />
    <rect x="45" y="45" width="16" height="16" fill="#D97706" />
    <rect x="68" y="68" width="16" height="16" fill="#0F172A" />

    <text x="115" y="28" font-family="Arial, sans-serif" font-size="13" font-weight="800" fill="#0F172A">Roll No: NPTEL24CS89S1048</text>
    <text x="115" y="52" font-family="Arial, sans-serif" font-size="12" fill="#64748B">To verify: nptel.ac.in/noc</text>
    <text x="115" y="74" font-family="Arial, sans-serif" font-size="12" fill="#64748B">Session: Jan - Apr 2024</text>
  </g>

  <!-- Signatures (Right) -->
  <g transform="translate(1100, 970)">
    <path d="M -50,-20 Q -10,-50 30,-10 T 70,-30" stroke="#0F172A" stroke-width="3" fill="none" />
    <line x1="-80" y1="10" x2="120" y2="10" stroke="#0F172A" stroke-width="1" />
    <text x="20" y="32" font-family="Georgia, serif" font-size="15" font-weight="700" fill="#0F172A" text-anchor="middle">Prof. Andrew Thangaraj</text>
    <text x="20" y="52" font-family="Arial, sans-serif" font-size="12" fill="#64748B" text-anchor="middle">NPTEL Coordinator, IIT Madras</text>
  </g>
</svg>`;
}

// 3. Infosys Springboard DSA Certificate
function createInfosysSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1200" width="1600" height="1200">
  <defs>
    <linearGradient id="infosys-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0B132B" />
      <stop offset="50%" stop-color="#1C2541" />
      <stop offset="100%" stop-color="#0B132B" />
    </linearGradient>

    <linearGradient id="cyan-glow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38BDF8" />
      <stop offset="50%" stop-color="#2DD4BF" />
      <stop offset="100%" stop-color="#0284C7" />
    </linearGradient>

    <linearGradient id="silver-hologram" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F1F5F9" />
      <stop offset="30%" stop-color="#CBD5E1" />
      <stop offset="70%" stop-color="#64748B" />
      <stop offset="100%" stop-color="#334155" />
    </linearGradient>

    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="0" stdDeviation="12" flood-color="#38BDF8" flood-opacity="0.3" />
    </filter>
  </defs>

  <rect width="1600" height="1200" fill="url(#infosys-bg)" />

  <!-- Outer Frame -->
  <rect x="50" y="50" width="1500" height="1100" fill="none" stroke="url(#cyan-glow)" stroke-width="3" rx="16" filter="url(#glow)" />
  <rect x="68" y="68" width="1464" height="1064" fill="none" stroke="#334155" stroke-width="1.5" rx="12" />

  <!-- Corner Brackets -->
  <g stroke="url(#cyan-glow)" stroke-width="6" fill="none">
    <path d="M 50,140 L 50,50 L 140,50" />
    <path d="M 1550,140 L 1550,50 L 1460,50" />
    <path d="M 50,1060 L 50,1150 L 140,1150" />
    <path d="M 1550,1060 L 1550,1150 L 1460,1150" />
  </g>

  <!-- Top Banner -->
  <g transform="translate(800, 160)" text-anchor="middle">
    <rect x="-180" y="-32" width="360" height="64" rx="8" fill="#1C2541" stroke="url(#cyan-glow)" stroke-width="2" filter="url(#glow)" />
    <text x="0" y="10" font-family="'Space Grotesk', sans-serif, Arial" font-size="24" font-weight="900" fill="#FFFFFF" letter-spacing="3">
      INFOSYS <tspan fill="#38BDF8">SPRINGBOARD</tspan>
    </text>
  </g>

  <!-- Main Text -->
  <g text-anchor="middle">
    <text x="800" y="270" font-family="Arial, sans-serif" font-size="14" font-weight="700" letter-spacing="6" fill="#94A3B8">
      GLOBAL TECHNICAL ACCREDITATION
    </text>

    <text x="800" y="350" font-family="'Playfair Display', Georgia, serif" font-size="48" font-style="italic" fill="#F8FAFC">
      Certificate of Competency
    </text>

    <text x="800" y="415" font-family="Arial, sans-serif" font-size="14" letter-spacing="3" fill="#64748B">
      THIS CERTIFIES THAT
    </text>

    <!-- Candidate Name -->
    <text x="800" y="490" font-family="'Space Grotesk', Arial, sans-serif" font-size="54" font-weight="900" fill="#38BDF8" letter-spacing="3" filter="url(#glow)">
      PRAYAG KANSARA
    </text>
    <line x1="450" y1="515" x2="1150" y2="515" stroke="url(#cyan-glow)" stroke-width="2" />

    <text x="800" y="565" font-family="Georgia, serif" font-size="18" fill="#94A3B8">
      has successfully completed the advanced engineering curriculum in
    </text>

    <!-- Course Title -->
    <text x="800" y="635" font-family="'Arial Black', sans-serif" font-size="34" font-weight="900" fill="#FFFFFF" letter-spacing="2">
      DATA STRUCTURES &amp; ALGORITHMS
    </text>
    <text x="800" y="675" font-family="'Arial Black', sans-serif" font-size="28" font-weight="900" fill="#2DD4BF" letter-spacing="4">
      WITH C++
    </text>

    <text x="800" y="735" font-family="Georgia, serif" font-size="15" fill="#94A3B8">
      Accredited Competencies: Graph Theory, Dynamic Programming, Memory Optimization &amp; Time Complexity Analysis
    </text>
  </g>

  <!-- Security Hologram Badge (Right) -->
  <g transform="translate(1300, 900)">
    <circle cx="0" cy="0" r="68" fill="url(#silver-hologram)" opacity="0.9" />
    <circle cx="0" cy="0" r="56" fill="#0B132B" stroke="url(#cyan-glow)" stroke-width="2" />
    <text x="0" y="-12" font-family="Arial, sans-serif" font-size="11" font-weight="900" fill="#38BDF8" text-anchor="middle" letter-spacing="1">VERIFIED</text>
    <text x="0" y="10" font-family="'Arial Black', sans-serif" font-size="18" font-weight="900" fill="#FFFFFF" text-anchor="middle">PASSED</text>
    <text x="0" y="28" font-family="Arial, sans-serif" font-size="10" font-weight="700" fill="#2DD4BF" text-anchor="middle">SCORE: 95%</text>
  </g>

  <!-- Accreditation Details (Left) -->
  <g transform="translate(240, 920)">
    <text x="0" y="0" font-family="'Courier New', monospace" font-size="14" font-weight="700" fill="#38BDF8">CREDENTIAL ID: INF-SPB-2024-88391</text>
    <text x="0" y="24" font-family="Arial, sans-serif" font-size="13" fill="#64748B">Date of Issue: February 20, 2024</text>
    <text x="0" y="44" font-family="Arial, sans-serif" font-size="13" fill="#64748B">Credential Status: Active &amp; Verified</text>
  </g>

  <!-- Signatures -->
  <g transform="translate(800, 950)">
    <path d="M -60,-25 Q -10,-55 30,-15 T 70,-35" stroke="#38BDF8" stroke-width="3" fill="none" />
    <line x1="-120" y1="5" x2="120" y2="5" stroke="#334155" stroke-width="1" />
    <text x="0" y="28" font-family="Georgia, serif" font-size="15" font-weight="700" fill="#F8FAFC" text-anchor="middle">Thirumala Arohi</text>
    <text x="0" y="46" font-family="Arial, sans-serif" font-size="12" fill="#64748B" text-anchor="middle">Senior Vice President &amp; Head - Education, Infosys</text>
  </g>
</svg>`;
}

// 4. Red & White Hackathon Winner Certificate
function createHackathonSVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1200" width="1600" height="1200">
  <defs>
    <linearGradient id="dark-luxury" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#121212" />
      <stop offset="50%" stop-color="#1E1E1E" />
      <stop offset="100%" stop-color="#0A0A0A" />
    </linearGradient>

    <linearGradient id="gold-pure" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FDE047" />
      <stop offset="50%" stop-color="#EAB308" />
      <stop offset="100%" stop-color="#854D0E" />
    </linearGradient>

    <filter id="gold-shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#EAB308" flood-opacity="0.3" />
    </filter>
  </defs>

  <rect width="1600" height="1200" fill="url(#dark-luxury)" />

  <rect x="50" y="50" width="1500" height="1100" fill="none" stroke="url(#gold-pure)" stroke-width="5" />
  <rect x="66" y="66" width="1468" height="1068" fill="none" stroke="#DC2626" stroke-width="1.5" />
  <rect x="74" y="74" width="1452" height="1052" fill="none" stroke="url(#gold-pure)" stroke-width="1" stroke-dasharray="8 6" />

  <g transform="translate(800, 160)" text-anchor="middle">
    <circle cx="0" cy="0" r="42" fill="#DC2626" stroke="url(#gold-pure)" stroke-width="2" filter="url(#gold-shadow)" />
    <text x="0" y="8" font-family="'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#FFFFFF">R&amp;W</text>

    <text x="0" y="75" font-family="'Cinzel', Georgia, serif" font-size="22" font-weight="700" letter-spacing="6" fill="#FDE047">
      RED &amp; WHITE INSTITUTE INNOVATION HACKATHON
    </text>
    <text x="0" y="100" font-family="Arial, sans-serif" font-size="13" letter-spacing="4" fill="#A1A1AA">
      ANNUAL STATE-WIDE SOFTWARE ENGINEERING COMPETITION
    </text>
  </g>

  <g text-anchor="middle">
    <text x="800" y="340" font-family="Georgia, serif" font-size="18" font-weight="700" letter-spacing="4" fill="#A1A1AA">
      THIS CERTIFICATE IS HONOURABLY PRESENTED TO
    </text>

    <!-- Candidate Name -->
    <text x="800" y="425" font-family="'Playfair Display', Georgia, serif" font-size="58" font-weight="800" fill="#FFFFFF" letter-spacing="2">
      PRAYAG KANSARA
    </text>
    <line x1="450" y1="455" x2="1150" y2="455" stroke="url(#gold-pure)" stroke-width="2" />

    <text x="800" y="510" font-family="Georgia, serif" font-size="20" font-style="italic" fill="#E4E4E7">
      for achieving outstanding technical victory and being awarded
    </text>

    <!-- Award Banner -->
    <g transform="translate(800, 600)" filter="url(#gold-shadow)">
      <rect x="-330" y="-45" width="660" height="90" rx="10" fill="url(#gold-pure)" />
      <text x="0" y="14" font-family="'Arial Black', sans-serif" font-size="42" font-weight="900" fill="#121212" letter-spacing="3">
        SECOND PRIZE WINNER
      </text>
    </g>

    <text x="800" y="720" font-family="Georgia, serif" font-size="19" fill="#A1A1AA">
      Project Entry: <tspan font-weight="700" fill="#FDE047">Next-Gen Intelligent Web Application</tspan>
    </text>
    <text x="800" y="750" font-family="Georgia, serif" font-size="15" fill="#71717A">
      Evaluated on System Architecture, UI/UX Polish, Innovation &amp; Live Demo Execution.
    </text>
  </g>

  <!-- Trophy Medal Left -->
  <g transform="translate(240, 920)" filter="url(#gold-shadow)">
    <circle cx="0" cy="0" r="72" fill="url(#gold-pure)" />
    <circle cx="0" cy="0" r="60" fill="#121212" stroke="url(#gold-pure)" stroke-width="2" />
    <text x="0" y="-12" font-family="'Arial Black', sans-serif" font-size="34" font-weight="900" fill="#FDE047" text-anchor="middle">2nd</text>
    <text x="0" y="15" font-family="Arial, sans-serif" font-size="12" font-weight="800" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">PLACE</text>
    <text x="0" y="32" font-family="Georgia, serif" font-size="10" fill="#A1A1AA" text-anchor="middle">WINNER 2024</text>
  </g>

  <!-- Right Side Info -->
  <g transform="translate(1360, 920)">
    <text x="0" y="-10" font-family="'Courier New', monospace" font-size="14" font-weight="700" fill="#FDE047" text-anchor="end">NO: RWI/HACK/2024/WIN-02</text>
    <text x="0" y="15" font-family="Arial, sans-serif" font-size="13" fill="#A1A1AA" text-anchor="end">Issue Date: January 28, 2024</text>
    <text x="0" y="35" font-family="Arial, sans-serif" font-size="13" fill="#A1A1AA" text-anchor="end">Category: Innovation &amp; Code</text>
  </g>

  <!-- Signature -->
  <g transform="translate(800, 950)">
    <path d="M -60,-25 Q -10,-55 30,-15 T 70,-35" stroke="#FDE047" stroke-width="3" fill="none" />
    <line x1="-120" y1="5" x2="120" y2="5" stroke="#3F3F46" stroke-width="1" />
    <text x="0" y="28" font-family="Georgia, serif" font-size="15" font-weight="700" fill="#FFFFFF" text-anchor="middle">Prof. H. V. Patel</text>
    <text x="0" y="46" font-family="Arial, sans-serif" font-size="12" fill="#A1A1AA" text-anchor="middle">Chief Hackathon Jury</text>
  </g>
</svg>`;
}

// 5. Advanced HTML5 & CSS3 Web Engineering Certificate
function createHtml5Css3SVG() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1200" width="1600" height="1200">
  <defs>
    <linearGradient id="warm-bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F5F1E8" />
      <stop offset="100%" stop-color="#EBE4D5" />
    </linearGradient>

    <linearGradient id="copper-main" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#B85C3A" />
      <stop offset="100%" stop-color="#8C3F23" />
    </linearGradient>

    <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#171717" flood-opacity="0.1" />
    </filter>
  </defs>

  <rect width="1600" height="1200" fill="url(#warm-bg)" />

  <rect x="50" y="50" width="1500" height="1100" fill="none" stroke="#171717" stroke-width="4" />
  <rect x="66" y="66" width="1468" height="1068" fill="none" stroke="url(#copper-main)" stroke-width="2" />

  <g transform="translate(800, 160)" text-anchor="middle">
    <polygon points="-26,-26 26,-26 20,26 0,34 -20,26" fill="url(#copper-main)" filter="url(#soft-shadow)" />
    <text x="0" y="10" font-family="'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#FFFFFF">53</text>

    <text x="0" y="75" font-family="'Space Grotesk', Arial, sans-serif" font-size="18" font-weight="800" letter-spacing="6" fill="#171717">
      WEB ENGINEERING STANDARDS COUNCIL
    </text>
    <text x="0" y="98" font-family="Arial, sans-serif" font-size="12" letter-spacing="4" fill="#55504A">
      INTERNATIONAL FRONTEND ARCHITECTURE ACCREDITATION
    </text>
  </g>

  <g text-anchor="middle">
    <text x="800" y="340" font-family="'Playfair Display', Georgia, serif" font-size="46" font-style="italic" fill="#171717">
      Technical Certification of Mastery
    </text>

    <text x="800" y="405" font-family="Arial, sans-serif" font-size="14" letter-spacing="3" fill="#55504A">
      PROUDLY AWARDED TO
    </text>

    <!-- Candidate Name -->
    <text x="800" y="485" font-family="'Playfair Display', Georgia, serif" font-size="54" font-weight="800" fill="#B85C3A" letter-spacing="2">
      PRAYAG KANSARA
    </text>
    <line x1="450" y1="510" x2="1150" y2="510" stroke="#171717" stroke-width="1.5" />

    <text x="800" y="560" font-family="Georgia, serif" font-size="18" fill="#333333">
      for demonstrating professional technical mastery in modern web standards
    </text>

    <!-- Course Title -->
    <text x="800" y="630" font-family="'Space Grotesk', Arial, sans-serif" font-size="32" font-weight="800" fill="#171717" letter-spacing="1">
      ADVANCED HTML5 &amp; CSS3 WEB ENGINEERING
    </text>

    <text x="800" y="685" font-family="Georgia, serif" font-size="16" fill="#55504A">
      Accredited Competencies: Responsive Layout Architecture, CSS Grid System, Flexbox Engine,
    </text>
    <text x="800" y="712" font-family="Georgia, serif" font-size="16" fill="#55504A">
      WAI-ARIA Accessibility Compliance &amp; UI Render Performance Optimization.
    </text>
  </g>

  <!-- W3C Seal Right -->
  <g transform="translate(1300, 910)" filter="url(#soft-shadow)">
    <circle cx="0" cy="0" r="70" fill="url(#copper-main)" />
    <circle cx="0" cy="0" r="58" fill="#F5F1E8" stroke="#171717" stroke-width="2" />
    <text x="0" y="-12" font-family="Arial, sans-serif" font-size="10" font-weight="800" fill="#B85C3A" text-anchor="middle" letter-spacing="1">STANDARDS</text>
    <text x="0" y="10" font-family="Georgia, serif" font-size="22" font-weight="800" fill="#171717" text-anchor="middle">W3C</text>
    <text x="0" y="28" font-family="Arial, sans-serif" font-size="9" font-weight="800" fill="#B85C3A" text-anchor="middle">COMPLIANT</text>
  </g>

  <!-- Left Side Badge -->
  <g transform="translate(240, 910)">
    <text x="0" y="0" font-family="'Courier New', monospace" font-size="14" font-weight="700" fill="#B85C3A">REG: WES-2024-HTML5-9921</text>
    <text x="0" y="24" font-family="Georgia, serif" font-size="13" fill="#55504A">Issue Date: April 10, 2024</text>
    <text x="0" y="44" font-family="Georgia, serif" font-size="13" fill="#55504A">Status: Verified &amp; Active</text>
  </g>

  <!-- Signature -->
  <g transform="translate(800, 950)">
    <path d="M -70,-20 Q -20,-55 20,-10 T 80,-30" stroke="#171717" stroke-width="3" fill="none" />
    <line x1="-120" y1="10" x2="120" y2="10" stroke="#171717" stroke-width="1" />
    <text x="0" y="32" font-family="Georgia, serif" font-size="15" font-weight="700" fill="#171717" text-anchor="middle">Marcus Vance</text>
    <text x="0" y="50" font-family="Arial, sans-serif" font-size="12" fill="#55504A" text-anchor="middle">Chairman, Web Standards Board</text>
  </g>
</svg>`;
}

const certs = [
  { name: "cert-fullstack.jpg", svgFn: createFullstackSVG },
  { name: "cert-python.jpg", svgFn: createPythonSVG },
  { name: "cert-infosys.jpg", svgFn: createInfosysSVG },
  { name: "cert-hackathon.jpg", svgFn: createHackathonSVG },
  { name: "cert-html5-css3.jpg", svgFn: createHtml5Css3SVG },
];

for (const { name, svgFn } of certs) {
  const svg = svgFn();
  const filePath = join(DIR, name);
  
  await sharp(Buffer.from(svg))
    .resize(WIDTH, HEIGHT)
    .jpeg({ quality: 95, mozjpeg: true })
    .toFile(filePath);
    
  console.log(`Generated authentic certificate ${name} (${WIDTH}x${HEIGHT}) for Prayag Kansara successfully.`);
}

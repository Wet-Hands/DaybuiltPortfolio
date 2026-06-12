/* ═══════════════════════════════════════════════════════════════════════════
   data.js  —  All portfolio content lives here.
   Edit this file to update your portfolio. The HTML reads everything
   automatically. Never edit portfolio-win95.html for content changes.
   ═══════════════════════════════════════════════════════════════════════════

   SLIDE TYPES (used in `slides` arrays for projects, certs, and experience):
     { img:   'path/to/photo.jpg', caption: 'Label' }   ← photo (lightbox-clickable)
     { emoji: '🖼', bg: '#1a1a2e', caption: 'Label' }   ← colour placeholder
     { pdf:   'path/to/file.pdf',  caption: 'Label' }   ← inline PDF + open button

   MODAL (optional on certs and experience — same format as project modals):
     modal: {
       about:  'Longer description shown in popup.',
       tags:   ['Tag1', 'Tag2'],
       url:    'https://verify-or-visit-link.com',   // '' to hide the button
       slides: [ ... ]
     }
   ═══════════════════════════════════════════════════════════════════════════ */


// ── SKILLS ──────────────────────────────────────────────────────────────────
// Bars show how many projects each skill appears in — no self-rating needed.
// Update totalProjects when you add or remove projects below.
const totalProjects = 9;

const skillCategories = [
  {
    label: '🖥 Programming',
    skills: [
      { name: 'C / C++',  projects: ['Rotary Cube Sorter', 'DD Terminal'] },
      { name: 'Python',   projects: ['Rotary Cube Sorter'] },
      { name: 'gdScript', projects: ['Dungeon Doom', 'Jimmy Rings', 'DinoLand'] },
    ]
  },
  {
    label: '⚙ CAD',
    skills: [
      { name: 'SolidWorks', projects: ['CoGRU', 'Quadcopter', 'Rotary Cube Sorter'] },
      { name: 'AutoCAD',    projects: ['Homework Machine'] },
    ]
  },
  {
    label: '🔧 Tools',
    skills: [
      { name: 'Git', projects: ['Jimmy Rings', 'DinoLand', 'DD Terminal'] },
    ]
  },
];


// ── PROJECTS ────────────────────────────────────────────────────────────────
// Each project opens the shared modal popup. No HTML changes needed to add one.
const projects = [
  {
    icon: '📦',
    name: 'Rotary Cube Sorter',
    desc: 'Final project for Intro to Engineering.',
    modal: {
      about: 'Our team automated the quality assurance of 2-inch wood blocks. The sorter identifies and bins cubes that fail size or color specs, then sorts passing cubes by color (green, yellow, or orange). Built around a rotating base with three main components: the frame, sensor subassembly, and sorting bins.',
      tags: ['Arduino', 'C', 'SolidWorks', 'Project Management', 'Project Documentation'],
      url: 'pdfs/rotary.pdf',
      slides: [
        { img: 'photos/projects/rotary1.png', caption: 'Full machine assembly' },
      ]
    }
  },
  {
    icon: '>_',
    name: 'Dungeon Doom Terminal',
    desc: 'Intro to Engineering Programming Concepts final project.',
    modal: {
      about: 'A terminal-based dungeon crawler written in C. Navigate procedural rooms, fight enemies, and manage limited stamina entirely through the command line.',
      tags: ['C', 'Terminal / CLI'],
      url: 'https://wethands.itch.io/dungeon-doom-terminal-demake',
      slides: [
        { img: 'photos/projects/ddt1.png', caption: 'Title Screen' },
        { img: 'photos/projects/ddt2.png', caption: 'Level 1 Gameplay' },
      ]
    }
  },
  {
    icon: '🔋',
    name: 'EV Car Battery Box',
    desc: 'Constructed a battery enclosure for an electric vehicle platform.',
    modal: {
      about: 'Constructed and documented a battery enclosure for an Electric Vehicle platform. Focused on safety clearances and thermal management considerations.',
      tags: ['Project Documentation', 'Multimeter'],
      url: 'https://sites.google.com/smcps.org/switch-ev-24-25/electrical-build-1-balancing-the-pack/balancing-the-pack',
      slides: [
        { img: 'photos/projects/batterybox1.jpg', caption: 'My teammate Matthew and I' },
        { img: 'photos/projects/batterybox2.jpg', caption: 'Batteries inside the EV that I installed' },
      ]
    }
  },
  {
    icon: '🚀',
    name: 'CoGRU',
    desc: 'Center of Gravity Redirection Unit — my first engineering project.',
    modal: {
      about: 'The Center of Gravity Redirection Unit (CoGRU) was my first engineering project. The concept: control which direction a rocket faces during cargo drops by actively shifting its center of gravity, maintaining balance without traditional fins.',
      tags: ['Arduino', 'C', 'SolidWorks', 'Project Documentation'],
      url: '',
      slides: [
        { img: 'photos/projects/cogru1.jpg', caption: 'CoGRU prototype' },
      ]
    }
  },
  {
    icon: '📝',
    name: 'Homework Machine',
    desc: 'CNC pen plotter that solves and handwrites homework answers via LLM.',
    modal: {
      about: 'A prototype CNC machine that drives a pen to mimic handwriting. The user inputs a homework question; an LLM generates the answer; the machine writes it out. Combines mechanical CNC control with an LLM API integration.',
      tags: ['gdScript', 'Python', 'LLM API'],
      url: '',
      slides: [
        { img: 'photos/projects/hw-1.png', caption: 'Virtual Prototype built in Godot' },
      ]
    }
  },
  {
    icon: '🚁',
    name: 'Quadcopter Drop Mechanism',
    desc: 'Mechanical drop system for a drone, 3 bottles on 3 targets.',
    modal: {
      about: 'Designed, fabricated, and field-tested a mechanical release system mounted to a quadcopter. Drops three water bottles sequentially onto three ground targets.',
      tags: ['SolidWorks', 'Mechanical Design'],
      url: 'https://sites.google.com/view/salty-dogs-drones25/home',
      slides: [
        { img: 'photos/projects/drone1.jpg', caption: 'Group Photo with Drone' },
        { img: 'photos/projects/drone2.png', caption: 'Mounting Plate for Dropping Mechanism' },
        { img: 'photos/projects/drone3.jpg', caption: 'Landing Gear Installed on Drone' },
      ]
    }
  },
  {
    icon: '🗡️',
    name: 'Dungeon Doom',
    desc: 'Retro-styled dungeon crawler. SkillsUSA 2024 submission.',
    modal: {
      about: 'A retro-styled top-down dungeon crawler made in Godot. Submitted for SkillsUSA Maryland 2024. Collect 1–3 keys to escape each locked dungeon floor while fighting skeletons and goblins.',
      tags: ['Godot', 'gdScript', 'Krita'],
      url: 'https://wethands.itch.io/dungeon-doom-alpha',
      slides: [
        { img: 'photos/projects/dungeondoom1.png', caption: 'Game Art' },
      ]
    }
  },
  {
    icon: '👽',
    name: 'Jimmy Rings',
    desc: 'Half-Life inspired multiplayer shooter. SkillsUSA 2025 submission.',
    modal: {
      about: 'A Half-Life inspired multiplayer FPS built in Godot for SkillsUSA Maryland 2025. Features networked multiplayer, custom weapon mechanics, and classic level design.',
      tags: ['Godot', 'gdScript', 'Git', 'Multiplayer Networking', 'Blender'],
      url: 'https://wethands.itch.io/jimmy-rings-indev',
      slides: [
        { img: 'photos/projects/jr1.png', caption: 'Game Art' },
      ]
    }
  },
  {
    icon: '🦖',
    name: 'Maintenance at DinoLand',
    desc: 'Retro-styled sit-and-survive horror. Godot Wild Jam submission.',
    modal: {
      about: 'A retro-styled "sit and survive" horror game for the Godot Wild Jam. Contracted to investigate a power outage at DinoLand, the player must restore power using slow facility software before time runs out.',
      tags: ['Godot', 'gdScript', 'Git', 'Blender'],
      url: 'https://wethands.itch.io/dinoland',
      slides: [
        { img: 'photos/projects/dino1.png',  caption: 'Game Art' },
        { img: 'photos/projects/dino2.png',  caption: 'In-game computer mini-game' },
        { img: 'photos/projects/dino3.png',  caption: 'Dinosaur peeking around the corner!' },
      ]
    }
  },
];


// ── EXPERIENCE / EDUCATION ───────────────────────────────────────────────────
// modal is optional. Add one (same format as project modals) to make an
// entry clickable and show a popup with slides, description, and tags.
// Example PDF slide: { pdf: 'docs/transcript.pdf', caption: 'Transcript' }
const experience = [
  {
    company: 'College of Southern Maryland',
    role: 'Associates of Science in Electrical Engineering',
    dates: '2025 – Present',
    desc: 'At CSM I have been going for my Associates in Electrical Engineering. After about 3 years, I plan on transferring to the University of Maryland via the USMSM Transfer plan and taking classes here in Southern Maryland.',
    tags: ['C', 'C++', 'MatLab', 'SolidWorks', 'Project Documentation'],
    // modal: { about: '...', tags: [...], url: '', slides: [...] }
  },
  {
    company: 'James A. Forrest Career & Technology Center',
    role: 'Certificate of Achievement in Engineering | Cybersecurity Elective',
    dates: '2023 – 2025',
    desc: 'The tech center strongly defined my secondary education. I applied in sophomore year for the Engineering program and was accepted. At the end of my first year, the IT teacher personally invited me into her Cybersecurity elective — giving me the best of both worlds.',
    tags: ['C', 'Python', 'Soldering', 'Hand Drafting', 'AutoCAD', 'SolidWorks', 'Manufacturing', 'Inventory Management', 'Networking'],
    // modal: { about: '...', tags: [...], url: '', slides: [...] }
  },
  {
    company: 'Leonardtown High School',
    role: 'CTE Pathway | Diploma',
    dates: '2021 – 2025',
    desc: 'Took Computer Science classes, founded the Party Game Club, and ran Raidercraft — the school Minecraft server — through six seasons. Also ran an informal study group teaching peers basic programming and game development.',
    tags: ['JavaScript', 'Java', 'Server Administration', 'Project Management'],
    // modal: { about: '...', tags: [...], url: '', slides: [...] }
  },
];


// ── CERTIFICATIONS & AWARDS ──────────────────────────────────────────────────
// img:   path to badge/photo — falls back to emoji if missing or fails to load
// modal: optional — add to make the card clickable with a popup
//        url in modal = verification/credential link (shown as "🔗 Verify" button)
const certifications = [
  {
    emoji: '🥈',
    title: 'SkillsUSA State Silver Medal - Interactive Application and Game Design',
    issuer: 'SkillsUSA Maryland',
    date: 'March 2025',
    desc: 'Second place in the Game Design competition at the Maryland SkillsUSA State Leadership & Skills Conference.',
    modal: {
      about: 'Submitted Jimmy Rings, a Half-Life inspired multiplayer FPS built in Godot, for SkillsUSA Maryland 2025. Competition was very fierce this year, placing second in the state.',
      tags: ['Game Design', 'Godot', 'gdScript', 'Blender', 'Multiplayer Networking'],
      url: '',
      slides: [
        { img: 'photos/awards/skills25-1.jpg', caption: 'Vincent Churilla and I standing infront of our poster' },
        // { pdf: 'certs/skillsusa-silver-2025.pdf', caption: 'Certificate PDF' },
      ]
    }
  },
  {
    img: 'photos/awards/hardwarebasics.png',
    title: 'Cisco Networking Academy - Computer Hardware Basics',
    issuer: 'Cisco',
    date: 'October 2024',
    desc: 'Fundamentals of computers and mobile devices, component installation, building and repairing PCs, and basic troubleshooting.',
    modal: {
      about: 'Cisco verifies successful completion of the Computer Hardware Basics course. Covers fundamentals of computers and mobile devices, component installation, building and repairing personal computers, and basic troubleshooting tools and techniques.',
      tags: ['Computer Hardware', 'Troubleshooting', 'PC Building'],
      url: 'https://www.credly.com/earner/earned/badge/4b90ca94-2a40-462c-859d-e191ec99354d',
      slides: [
        { img: 'photos/awards/hardwarebasics.png', caption: 'Cisco badge' },
      ]
    }
  },
  {
    emoji: '🇺🇸',
    title: 'SkillsUSA Statesmen Award',
    issuer: 'SkillsUSA Maryland',
    date: 'October 2025',
    desc: 'The SkillsUSA Statesman Award is the highest individual honor a member can earn at the state level.',
    modal: {
      about: 'The SkillsUSA Statesman Award is the highest individual honor a member can earn at the state level. It recognizes students who demonstrate exceptional civic awareness, mastery of SkillsUSA knowledge, and the ability to articulate their Career and Technical Education (CTE) experiences.',      
      tags: ['Project Management', 'Leadership', 'Teamwork', 'Marshmallow Toothpick Tower Construction'],
      url: '',
      slides: [
        { img: 'photos/awards/skillsflc.jpg', caption: 'We stopped at Crackerbarrel on the way to Ocean City' },
        // { pdf: 'certs/skillsusa-silver-2025.pdf', caption: 'Certificate PDF' },
      ]
    }
  },
  {
    img: 'photos/awards/multimeter.png',
    title: 'Snap-On Multimeter Certification',
    issuer: 'Dr. James A. Forrest Career & Technology Center',
    date: 'September 2024',
    desc: 'Problem-solving with Snap-on digital multimeters — from basic applications to advanced circuit troubleshooting using professional-grade tools.',
    modal: {
      about: 'Training on the problem-solving capabilities of Snap-on® digital multimeters — the same technology used by professionals. Ranges from basic voltage/current measurement to advanced circuit troubleshooting techniques.',
      tags: ['Multimeter', 'Electrical Measurement', 'Troubleshooting', 'DC/AC Circuits'],
      url: 'pdfs/meter-cert.pdf',
      slides: [
        { img: 'photos/awards/multimeter.png', caption: 'Snap-On multimeter certification badge' },
        //{ pdf: 'pdfs/meter-cert.pdf', caption: 'Certificate PDF' },
      ]
    }
  },
  {
    emoji: '🥇',
    title: 'SkillsUSA State Gold Medal - Interactive Application and Game Design',
    issuer: 'SkillsUSA Maryland',
    date: 'April 2024',
    desc: 'First place in the Game Design competition at the Maryland SkillsUSA State Leadership & Skills Conference.',
    modal: {
      about: 'Submitted Dungeon Doom, a retro top-down dungeon crawler built in Godot, for SkillsUSA Maryland 2024, placing first in the state. I later went on to compete at SkillsUSA National Leadership & Skills Conference',
      tags: ['Game Design', 'Godot', 'gdScript', 'Krita'],
      url: '',
      slides: [
        { img: 'photos/awards/skills24-1.jpg', caption: 'All the Competitors Together, with Dave the Skeleton' },
        { img: 'photos/examples/skills24nat.jpg', caption: 'Photo with my friends in Atlanta repping our state.' },
        // { pdf: 'certs/skillsusa-gold-2024.pdf', caption: 'Certificate PDF' }, Test Push
      ]
    }
  },
  {
    img: 'photos/awards/autocadcert.png',
    title: 'Autodesk AutoCAD Certified User',
    issuer: 'Certiport — A Pearson VUE Business',
    date: 'March 2024',
    desc: 'Foundational AutoCAD skills: creating and plotting drawings, editing objects, working with layouts, and annotation.',
    modal: {
      about: 'The Autodesk AutoCAD Certified User credential confirms foundational skills in AutoCAD. Topics include creating and plotting drawings, editing objects, working with layouts, dimensioning, and annotation.',
      tags: ['AutoCAD', 'CAD', '2D Drafting', 'Technical Drawing'],
      url: 'https://www.credly.com/badges/f874e741-cef4-484d-a8b1-18554e603ade/public_url',
      slides: [
        { img: 'photos/awards/autocadcert.png', caption: 'AutoCAD Certified User badge' },
        { img: 'photos/examples/TrekCAD.PNG', caption: 'Example of using AutoCAD, this was sent to a CNC Plasma Cutter' },
      ]
    }
  },
  {
    img: 'photos/awards/PMI_2.png',
    title: 'Precision Measurement Instruments - Caliper Measurement Certification',
    issuer: 'Dr. James A. Forrest Career & Technology Center',
    date: 'December 2023',
    desc: 'The Slide Caliper Measurement Module specifically certifies the ability to handle, calibrate, and read both dial and digital calipers with accuracy.',
    modal: {
      about: 'The Snap-on Precision Measuring Instruments Certification enables graduates to demonstrate a solid understanding of thefundamentals of working with precision measurement instruments.',
      tags: ['Caliper', 'Precision Measurement', 'Troubleshooting'],
      url: 'pdfs/caliper-cert.pdf',
      slides: [
        { img: 'photos/awards/PMI_2.png', caption: 'PMI Caliper Measurement Certification badge' },
      ]
    }
  },
];

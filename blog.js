/* ═══════════════════════════════════════════════════════════════════════════
   blog.js — All blog posts live here.
   Add a new post by adding an object to the top of the blogPosts array.
   Posts are displayed newest-first automatically.

   POST FORMAT:
   {
     id:      'unique-slug',          // used for URL anchors — no spaces
     title:   'Post Title',
     date:    '2025-06-01',           // YYYY-MM-DD — used for sorting & display
     tags:    ['tag1', 'tag2'],
     summary: 'One or two sentences shown in the post list.',
     content: `                       // Full post — plain HTML is fine
       <p>Your content here.</p>
       <p>You can use any HTML tags.</p>
     `,
   }
   ═══════════════════════════════════════════════════════════════════════════ */

const blogPosts = [

  {
    id:      'factorio-1',
    title:   'Been getting into Factorio',
    date:    '2026-05-24',
    tags:    ['gaming', 'logistics'],
    summary: 'Having fun with a logistics game.',
    content: `
      <p>I had some Steam Credit stored up from christmas and decided to take the plunge and purchase Factorio. After playing Minecraft: Create for roughly 400+ hours I figured I'd try the game that inspired it.</p>
    `,
  },
  {
    id:      'libre-games1',
    title:   'LibreGames Ideas',
    date:    '2026-05-14',
    tags:    ['gaming', 'game-dev', 'godot', 'project-management'],
    summary: 'Having fun with a logistics game.',
    content: `
      <p>The goal of LibreGames is for people interested in any aspect of game development or software project management to come together to create great games for everyone to enjoy. Very small group right now, but Fall Semester 2026 we plan on inviting many college programming clubs to join.</p>
      <p>I have a few ideas for projects I personally would like to lead development on.</p>
      <ul>
        <li>LibreDivers - Inspired by Arrowhead Studios' hit release, <a href="https://store.steampowered.com/app/553850/HELLDIVERS_2/">Helldivers: II</a>. The main idea would be that players could choose between different self-hosted galactic wars.</li>
        <li>LibreSurvivors - Inspired by the Survivors genre, popularized by games like <a href="https://store.steampowered.com/app/1794680/Vampire_Survivors/">Vampire Survivors</a> and <a href="https://store.steampowered.com/app/3405340/Megabonk/">Megabonk</a>. The heroes and enemy selection would be taken from the Public Domain; Featuring characters such as Thor, Winnie the Pooh, and the <a href="https://pdsh.fandom.com/wiki/Iron_Ace">Iron Ace</a>. </li>
        <li>LibreFighters - In actuality, I believe my friend Vincent Churilla would like to lead development, but I would like to help out. A data-driven platform fighting game; Featuring Public Domain characters like in the previously mentioned 'LibreSurvivors'.</li>
      </ul>
      <p>All of these games would be built using FOSS such as the Godot Engine, Blender, Krita, Aseprite, and others. The only money gained would be from donations, whether that's individuals, organizations, and/or colleges. The money would go towards optional Official Servers and publishing fees. </p>
      `,
  },
  {
    id:      'dinoland-1',
    title:   'Released Maintainence at DinoLand for the Godot Wild Jam',
    date:    '2025-07-20',
    tags:    ['game-dev', 'godot'],
    summary: 'A recap of building DinoLand for the Godot Wild Jam #83.',
    content: `
      <p>This month I submitted <strong>Maintainence at DinoLand</strong>, a sit and survive horror survival game, to the 83rd Godot Wild Jam competition.</p>
      <p>We didn't start on Day One so I only had 6 days to complete the full game. The Dinosaur's movement system was very easy for me since I had made something similar in the past. However the in-game computer was entirely 2D, which is a facet of Godot I haven't properly worked with before.</p>
      <p>I was inspired to make a dinosaur horror game after watching Jurrassic World: Rebirth, as it always bothered me that they never did a legitimate horror film. The main gameplay was inspired by the Five Nights at Freddys series of games, specifically this one minigame in Help Wanted where Mangle is coming at your from four sides while you're trying to repair the A/C system.</p>
    `,
  },
  {
    id:      'skillsusa-2025',
    title:   'SkillsUSA 2025 — Silver Medal with Jimmy Rings',
    date:    '2025-04-10',
    tags:    ['game-dev', 'skills-usa', 'godot'],
    summary: 'A recap of building Jimmy Rings for the SkillsUSA 2025 Interactive Application and Game Design competition.',
    content: `
      <p>This year I submitted <strong>Jimmy Rings</strong>, a Half-Life inspired multiplayer FPS built in Godot 4, to the SkillsUSA Maryland state competition. We placed second.</p>
      <p>The biggest challenge was getting stable multiplayer working within the competition timeline. Godot's high-level multiplayer API helped a lot, but syncing player positions and hit detection across clients still took most of our debug time.</p>
      <p>Compared to last year's Dungeon Doom, the scope was much larger: 3D levels built in era accurate level building software Trenchbroom, custom weapon models, a lobby system, and swarms of multiplayer synced enemies. I'm happy with how far the project came in the time we had.</p>
    `,
  },

  {
    id:      'ev-battery-build',
    title:   'Building the EV Battery Box',
    date:    '2025-02-20',
    tags:    ['electrical', 'engineering', 'ev'],
    summary: 'Notes from working on the SWITCH EV battery enclosure project at JAF CTC.',
    content: `
      <p>One of the more hands-on projects from my time at the tech center was helping build and wire the battery enclosure for the school's electric vehicle platform.</p>
      <p>My teammate Matthew Yelverton and I were responsible for installing the cells, balancing the pack, and documenting the build for the SWITCH EV program website.</p>
      <p>Working with high-capacity lithium cells for the first time made the importance of safety clearances very real. One mistake in the wiring order and you're dealing with a short across the full pack voltage, not something you want.</p>
      <p>The Snap-On multimeter certification I completed earlier that year turned out to be directly applicable here. Measuring cell voltages before and after balancing gave me a much better intuition for how battery packs behave in practice versus theory.</p>
    `,
  },
  {
    id:      'skills-nlsc',
    title:   'SkillsUSA National Leadership & Skills Conference',
    date:    '2024-06-29',
    tags:    ['skills-usa', 'game-dev', 'personal'],
    summary: 'My time at Nationals Competition',
    content: `
      <img src="photos/blog/nationals/group.jpg" alt="My Friends and I repping our state hat." width="200" height="150"
      onclick="openLightbox(this.src, this.alt)"
       style="max-width:100%; cursor:zoom-in; display:block; margin:8px 0;
              border-top:2px solid #404040; border-left:2px solid #404040;
              border-right:2px solid #fff; border-bottom:2px solid #fff;">
      <p>Nationals was probably one of, if not the, coolest experience of my life. Being able to meet so many fellow students also into programming and game develop was so exciting. SkillsUSA really does feel like one big club.</p>
    `,
  },

  {
    id:      'hello-world',
    title:   'Hello World',
    date:    '2006-10-21',
    tags:    ['personal', 'meta'],
    summary: 'First post. A brief introduction to what this blog will be.',
    content: `
      <p>Welcome to my blog. I'm Ian, electrical engineering student, game developer, and tinkerer.</p>
      <p>I'll use this space to write about projects I'm working on, things I've learned, and the occasional post-mortem on a competition or game jam entry.</p>
      <p>Posts won't follow a schedule. They'll appear when I have something worth writing down.</p>
      <p>Today is the day I was born.</p>
    `,
  },

];

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
    id:      'unfinished',
    title:   'Behind the Scenes: My Unfinished Projects',
    date:    '2026-08-13',
    tags:    ['game-dev', 'project-management'],
    summary: 'My Unfinished Projects',
    content: `
    <p>This is a collection of some of my unfinished games and visual tests I've developed over the past 3 years of making games.</p>

    <img src="photos/blog/unfinished-games/image04.png" alt="Rotary sorter"
    onclick="openLightbox(this.src, this.alt)"
    style="float:left; width:45%; margin:0 0 8px 12px; cursor:zoom-in;
    border-top:2px solid #404040; border-left:2px solid #404040;
    border-right:2px solid #fff; border-bottom:2px solid #fff;">

    <p>Every year or so I like to attempt to re-create Minecraft within the Godot Game Engine. This was my 2025 attempt, I used C# instead of using gdScript to try and save on performance. This was definetly my best attempt so far. I'm hoping my 2026 attempt will reach infinite terrain generation.</p>

    <div style="clear:both;"></div>



    <div style="display:flex; gap:8px; margin:8px 0;">
      <img src="photos/blog/unfinished-games/image02.png" alt="Front view"
        onclick="openLightbox(this.src, this.alt)"
        style="width:50%; cursor:zoom-in;
          border-top:2px solid #404040; border-left:2px solid #404040;
          border-right:2px solid #fff; border-bottom:2px solid #fff;">
      <img src="photos/blog/unfinished-games/image01.png" alt="Side view"
        onclick="openLightbox(this.src, this.alt)"
        style="width:50%; cursor:zoom-in;
          border-top:2px solid #404040; border-left:2px solid #404040;
          border-right:2px solid #fff; border-bottom:2px solid #fff;">
    </div>

    <p>These images come from me testing out visual styles for a video game adaptation of my story "Project: Snowglobe". I still would love to tell the story of this alternate future, however I currently cannot decide the gameplay.</p>



    <img src="photos/blog/unfinished-games/image03.png" alt="Rotary sorter"
    onclick="openLightbox(this.src, this.alt)"
    style="float:left; width:45%; margin:0 0 8px 12px; cursor:zoom-in;
    border-top:2px solid #404040; border-left:2px solid #404040;
    border-right:2px solid #fff; border-bottom:2px solid #fff;">

    <p>This was an early prototype written in gdScript for the final project of 'Intermediate Programming Concepts for Engineers'. Very simple noise-based isometric terrain generation.</p>
    <p>The plan was to rewrite this in C++, however the Godot Engine and C++ are not natively compatible, so too many issues came up and I pivoted to another project.</p>

    <div style="clear:both;"></div>
    `,
  },
  {
    id:      'td1',
    title:   'Interplanetary Tower Defense',
    date:    '2026-07-11',
    tags:    ['game-dev', 'project-management'],
    summary: 'Having fun with a logistics game.',
    content: `
    <img src="photos/blog/td1.e4jPG1" alt="Visual of 3D Pixel Art look"
    onclick="openLightbox(this.src, this.alt)"
    style="float:left; width:45%; margin:0 0 8px 12px; cursor:zoom-in;
    border-top:2px solid #404040; border-left:2px solid #404040;
    border-right:2px solid #fff; border-bottom:2px solid #fff;">
    <p>I've started development on my newest video game. I think I want to use this as the first game of the LibreGames Foundation. I do not know yet how I will find new members, my hope is once I start posting about the game online, people will take interest.</p>
    <p>The main idea so far is the player must defend research probes from waves of aliens. We have been working on a 3D pixel art style inspired by the work of <a href="https://www.youtube.com/@t3ssel8r">t3ssel8r</a>.</p>
    `,
  },
  {
    id:      'factorio-1',
    title:   'Been getting into Factorio',
    date:    '2026-05-24',
    tags:    ['gaming', 'logistics'],
    summary: 'Having fun with a logistics game.',
    content: `
      <p>I had some Steam Credit stored up from christmas and decided to take the plunge and purchase <a href="https://store.steampowered.com/app/427520/Factorio/">Factorio</a>. After playing <a href="https://modrinth.com/mod/create">Minecraft: Create</a> for roughly 400+ hours I figured I'd try the game that inspired it.</p>
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
        <li>LibreFighters - In actuality, I believe my friend <a href="https://www.linkedin.com/in/vincent-churilla-9aaa65397/">Vincent Churilla</a> would like to lead development, but I would like to help out. A data-driven platform fighting game; Featuring Public Domain characters like in the previously mentioned 'LibreSurvivors'.</li>
        <li>LibreBR - My friends and I used to play Fortnite quite regularly, however, between Epic Games' questionable decision making and my switching to Linux (an unsupported platform) we haven't played in a long time. So creating an open source alternative would be an interesting project.</li>
      </ul>
      <p>All of these games would be built using FOSS such as the Godot Engine, Blender, Krita, Aseprite, and others. The only money gained would be from donations, whether that's individuals, organizations, and/or colleges. The money would go towards optional Official Servers and publishing fees. </p>
      `,
  },
  {
    id:      'egr1150',
    title:   'Intro. to Engineering Final',
    date:    '2025-12-12',
    tags:    ['arduino', 'c', 'data', 'project-management', 'project-documentation'],
    summary: 'A recap of the final project.',
    content: `
      <p>For my Introduction to Engineering class, we were put into groups and given the same engineering problem to solve. We had roughly two months to design a solution, implement the solution, and document the process in great detail. My team consisted of Austin Balcom, William Bowling, <a href="https://www.linkedin.com/in/mia-iampieri/">Mia Iampieri</a>, and I.</p>
      <p>Our team was presented with the need to automate the quality assurance of 2-inch wood blocks they produce. The following requirements for the sorting process identifies and bins cubes that do not meet the size specification, identifies and bins cubes that meet the size specification but not the color specification, sorts and bins cubes that meet both specifications by color. Also providing the following cube specifications, a cube measurement of 2.00” ± 0.10” and that the cube color is green, yellow, or orange.</p>
      <p>To accomplish this task, our team presented an automated cube sorting machine based on a rotating base design. Made of three main components: the frame, sensor subassembly, and sorting bins mounted on a rotating base.</p>
      <p>It was my job to wire the all of the electrical components and program the logic via the Arduino in C. What made programming this very challenging was the low quality of the sensors, it wouldn't be uncommon to get a random spike in a certain color value. So what I did is I sampled the color value of the cube 10 times, then if a large majority were the same color it would choose that color. After that problem was solved, it came down to finding ways to speed up this process, as there was a four minute time limit that usually isn't a problem. </p>
      <p>The extra care I put into data sanitization paid off big, not only did we ace the demo, but we were the only group to complete a demo without error. And amazingly during our demo, the machine worked at double the usual speed, interrupting me as I was explaining to the class how it worked.</p>
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
  id:      'egr-pc',
  title:   'Legendary Find from IT Networking',
  date:    '2025-05-11',
  tags:    ['computer-hardware'],
  summary: 'Having fun with a logistics game.',
  content: `
  <img src="photos/blog/engineeringpc.png" alt="Cool Computer"
  onclick="openLightbox(this.src, this.alt)"
  style="float:left; width:45%; margin:0 0 8px 12px; cursor:zoom-in;
  border-top:2px solid #404040; border-left:2px solid #404040;
  border-right:2px solid #fff; border-bottom:2px solid #fff;">

  <p>We found this "portable" computer in the Engineering room and brought it to IT Networking to try and get it running.</p>
  <p>UPDATE 1: The computer's CPU capacitors are fried, luckily it uses a standard ATX motherboard, so we can replace it.</p>
  <p>UPDATE 2: The computer is now at my house and it's insides were replaced and it works!</p>
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
      <img src="photos/blog/nationals/group.jpg" alt="My Friends and I repping our state hat."
      onclick="openLightbox(this.src, this.alt)"
      style="float:left; width:45%; margin:0 0 8px 12px; cursor:zoom-in;
      border-top:2px solid #404040; border-left:2px solid #404040;
      border-right:2px solid #fff; border-bottom:2px solid #fff;">

      <p>Nationals was probably one of, if not the, coolest experience of my life. Being able to meet so many fellow students also into programming and game develop was so exciting. SkillsUSA really does feel like one big club.</p>
      <p>I must thank <a href="https://n-s-i.us/">N-S-I</a> for covering half the cost towards this trip to the SkillsUSA NLSC. Without their generosity I would've been eating ramen and white rice the whole trip.</p>
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

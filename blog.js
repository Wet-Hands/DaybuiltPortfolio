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
    id:      'skillsusa-2025',
    title:   'SkillsUSA 2025 — Silver Medal with Jimmy Rings',
    date:    '2025-04-10',
    tags:    ['game-dev', 'skillsusa', 'godot'],
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
      <p>Working with high-capacity lithium cells for the first time made the importance of safety clearances very real. One mistake in the wiring order and you're dealing with a short across the full pack voltage — not something you want.</p>
      <p>The Snap-On multimeter certification I completed earlier that year turned out to be directly applicable here. Measuring cell voltages before and after balancing gave me a much better intuition for how battery packs behave in practice versus theory.</p>
    `,
  },

  {
    id:      'hello-world',
    title:   'Hello World',
    date:    '2025-01-01',
    tags:    ['personal', 'meta'],
    summary: 'First post. A brief introduction to what this blog will be.',
    content: `
      <p>Welcome to my blog. I'm Ian, electrical engineering student, game developer, and tinkerer.</p>
      <p>I'll use this space to write about projects I'm working on, things I've learned, and the occasional post-mortem on a competition or game jam entry.</p>
      <p>Posts won't follow a schedule. They'll appear when I have something worth writing down.</p>
    `,
  },

];

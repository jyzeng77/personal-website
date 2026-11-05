---
title: Personal Website — Creative Direction and Conversation Record
document_type: design_brief
version: '1.2'
last_updated: '2026-11-05'
status: exploratory_direction_not_final_spec
format_notes: 'Plain Markdown with YAML front matter; designed for both human reading and straightforward machine parsing.'
source: 'Collaborative website-aesthetic discussion, user-provided Pinterest screenshots, and three generated concept drafts.'
---

# Personal Website: Comprehensive Creative Brief

## 0. How to use this document

This records the original discussion of the website's *aesthetic, emotional direction, interaction philosophy, and portfolio priorities*. Later choices, including the two preferred concepts and implementation stack, are recorded in [current direction](direction.md). It preserves the way the idea evolved, including corrections and tensions that should **not** be flattened into a generic style guide.

**Evidence labels used below:**
- **[CONFIRMED]** — Directly expressed, chosen, or clarified by the site owner.
- **[DIRECTION]** — An interpretation or synthesis that fits the owner's responses, but is not an irrevocable decision.
- **[PROPOSED]** — An idea introduced in discussion that has not been explicitly adopted.
- **[REJECTED / LIMITED]** — Explicitly unwanted, or acceptable only within stated boundaries.
- **[OPEN]** — Not decided; do not invent certainty.

At the end of the original aesthetic discussion, the owner had not approved a final layout, palette, font, site name, photo collection, or implementation architecture. The current-direction document supersedes this record where later decisions have been made. The sample copy, fictional projects, and other contents of the concept drafts are **illustrative placeholders, not biographical facts**.

**Reference-package review (2026-11-05):** The original ZIP’s eight Pinterest crops were misaligned with their captions. Use the six complete screenshots and full-resolution generated mockup in the [reviewed gallery](../reference-gallery.md), with [source records](../references/manifest.json). The creative direction remains exploratory; the asset review does not approve any concept as final. See the [review record](../archive/reference-package-review.md) for scope and limitations.

## 1. Executive creative direction

**[DIRECTION] Working concept:** A **lived-in digital archive**: a contemporary, personal portfolio that feels like peeking into the browser tabs, open apps, folders, files, curiosities, and little discoveries on someone's well-used laptop, without literally recreating a desktop operating system.

**[DIRECTION] Working emotional shorthand:** *Intimate nostalgia; a summer memory experienced from a cozy bedroom; the curious and social internet of roughly 2015–2016; fast, tactile digital interactions; visual warmth without performative quirkiness.*

**[DIRECTION] Working creative titles, not chosen names:** "Open Tabs at Dusk"; "A Lived-In Digital Archive"; "Soft-spoken, but curious."

**[CONFIRMED] Core experience:** The visitor should feel they have stumbled upon a fascinating, unmistakably personal corner of the internet. They should learn what the owner builds and also encounter small, genuine hints about the person behind the work. On leaving, the visitor should feel warm and familiar, almost as though they have known the owner for a while, and carry a small impression of the owner's interests with them.

**[CONFIRMED] Core practical objective:** It is first and foremost a personal **portfolio** for applications to **software engineering** and **data science** roles, with **UI/UX** a possible but secondary direction. The personality enriches the work; it must not obscure the work.

**[CONFIRMED] The balance:** A visually experimental site (roughly **4/5** on the owner's weirdness/experimentation scale), with immediately noticeable character, but ordinary portfolio tasks and navigation still easy to understand. It should be visually interesting on arrival, **not bare**, and also **not visually overwhelming**.

**One-sentence synthesis:** *A warm, curious, artfully layered digital home where real projects are easy to find, everything feels touched by a person, and the interface retains the playful responsiveness of the mid-2010s web without looking like a period replica.*

## 2. What the website is for and whom it serves

### 2.1 Primary and secondary goals

- **[CONFIRMED] Primary:** Showcase projects and work for job applications. Technical competence, credibility, and navigability are necessary.
- **[CONFIRMED] Secondary:** Offer a portal into the owner's personality, interests, and small pleasures in life, so the visitor does not see a flat professional persona.
- **[CONFIRMED] Current priority:** Portfolio and projects come first. A richer personal archive may grow later; do not assume the owner already has extensive material prepared for it.
- **[DIRECTION] Experience for general visitors:** Exploration and small discoveries should be rewarding rather than requiring a linear, résumé-like read.
- **[DIRECTION] Experience for recruiters:** A fast, conventional route to projects, skills, experience, résumé, and contact information. Project details should communicate the problem, personal contribution, approach, technologies, and results without creative framing getting in the way.

### 2.2 Recruiter/Quick View

- **[CONFIRMED]** The owner has seen personal websites with a distinct recruiter mode or recruiter-friendly version and likes that compromise as an idea.
- **[PROPOSED]** A persistent **Quick View** or similarly direct path could expose concise, structured career information while the main site retains its expressive presentation.
- **[OPEN]** Whether this is a true second mode, an overlay, a simplified page, or merely a dedicated navigation path. It should **not** be described as a settled feature.
- **[DIRECTION]** A recruiter should not need to discover an Easter egg, learn an unusual navigation system, or wait for an animation to find the work.

## 3. Emotional and autobiographical foundation

### 3.1 The internet the owner remembers

**[CONFIRMED]** The motivating nostalgia is more about the *feeling* of the internet than its old visual chrome. The owner describes the mid-2010s, especially **2015–2016**, as a personal "golden age of the internet": full of curiosity, human connection, fun, and random knowledge, before feeds seemed dominated by algorithms and influencers.

Specific memories and what they imply:

- **Instagram:** It once felt possible to finish seeing what friends posted; the feed had an end. Stories felt like informal updates about what friends actually did that day. The owner misses intimacy and genuine connection more than any particular Instagram UI.
- **Google Hangouts:** A space for talking with friends. Social tools felt personal and oriented toward people one knew.
- **YouTube:** Clickbait-titled videos and casual vlogs were part of the fun. Seeing an old vlog from around 2015 recently evoked a particularly pleasant, warm memory. This is about spontaneous, unserious internet culture, not necessarily imitating a YouTube interface.
- **Rabbit holes:** The owner briefly loved conspiracy theories and the internet puzzle commonly known as *Cicada 3301* (the owner recalled it approximately as "cicada 101 or whatever"). Wikipedia became a source of endless knowledge and discovery, including when parental controls limited access to other content.
- **The feeling:** Being "bathed in a sea of infinite random and cool knowledge," with the ability to follow curiosity without everything feeling strategically optimized for attention.

**Design implication [DIRECTION]:** Discovery, personal traces, curiosity, and an invitation into someone's world are more important than any faithful reconstruction of 2015 graphics. The site's surprises should feel found, not pushed at the visitor.

### 3.2 The emotional setting

- **[CONFIRMED]** A "slightly messy bedroom with different things to discover" is the strongest physical metaphor.
- **[CONFIRMED]** Another useful metaphor: opening the owner's laptop and wandering through their apps, browser tabs, and files. This is a *feeling*, not permission to recreate macOS literally.
- **[CONFIRMED]** **Intimate nostalgia** is favored over a purely sunny, airy summer nostalgia.
- **[CONFIRMED]** The observation that many saved references evoke **summer memories** resonated strongly. Preserve that quality alongside the bedroom-like intimacy.
- **[DIRECTION]** Quiet, cozy, familiar, reflective, slightly dreamy or wistful, and sometimes faintly melancholic; still warm and hopeful, not gloomy. Images might feel like a remembered summer rather than an advertisement for summer.
- **[CONFIRMED]** The owner wants people to leave feeling human warmth, not the chill of a corporate portfolio.

### 3.3 Authenticity is a constraint, not a decoration

- **[CONFIRMED]** Authenticity matters more than performing a carefully manufactured "interesting person" aesthetic.
- **[CONFIRMED]** The owner likes visible, personal imperfections and the possibility of candid photos, but does **not** want forced anecdotes or fake habits. For example, labeling every project with the exact song listened to while building it would be contrived because the owner does not naturally keep such records.
- **[CONFIRMED]** The owner likes visual scraps, virtual stickers, and playful touches, but strongly does not want the look to resemble a self-conscious or overperformed "performative male" aesthetic.
- **[CONFIRMED]** The owner does not consider themselves highly artistic; the site should not implicitly require constant hand-drawn illustrations or intricate design artifacts to maintain its identity.
- **[DIRECTION]** Genuine, ordinary content can be more personal than conspicuous quirky content: real projects, actual interests, occasional candid images, a few distinctive links, and things discovered naturally.

## 4. Digital design and interaction references

### 4.1 Precise historical preference: an important correction

- **Initial statement:** The owner liked 2010s operating systems, especially macOS and iOS, and the original Google Material Design language.
- **Correction [CONFIRMED]:** This did **not** mean early skeuomorphic iOS (leather textures, glossy old app icons, pre-iOS-7 appearance). The owner explicitly **does not** want that era of iOS.
- **[CONFIRMED]** The owner identifies with iOS **after its original flat redesign** and associates that period with childhood nostalgia.
- **[CONFIRMED]** They also remember and feel nostalgic toward the **pre-Material Google homepage**, including the black bar across the top and grey buttons.
- **[CONFIRMED]** They love the idea of **Google's original Material Design** making interface elements behave like **sheets of paper**, and especially love **ripple feedback on buttons**.
- **Important nuance [CONFIRMED]:** A direct recreation of the interactions and general look of a 2014 Google app, by itself, would feel too sterile or boring. The owner likes **selected interaction principles**, not the whole design language or its default visual cleanliness.

### 4.2 Interaction priorities and limits

| Interaction / behavior | Owner's position | Design interpretation |
| --- | --- | --- |
| Ripple effects on click/tap | **Strongly positive**; a favorite interaction | A signature microinteraction, handled tastefully rather than on every pixel |
| Paper-like layering and depth | **Positive, qualified** | Thin elevations, sheets, subtle shadows, responsive surfaces, not exaggerated realism |
| Unfolding/expanding cards | **Positive if fast** | Physical logic and animation are welcome, but never slow or laborious |
| Window interactions | **Positive** | Expand, focus, move, or rearrange certain components without a full OS imitation |
| macOS dock magnification | **Strongly positive** | Responsive hover scaling can inspire a small cluster of controls/objects |
| macOS Genie minimizing effect | **Emotionally positive, practically qualified** | Loves its personality but finds the actual Mac animation slow enough not to use it; speed matters more than literal fidelity |
| Hidden discoveries | **Very strongly positive ("100%")** | Little optional surprises, playful navigation rewards, personal corners |
| Handmade details | **Positive in moderation** | Small stickers, sketches, annotations, irregularities; not hand-drawn art everywhere |
| Cinematic transitions | **Selective approval** | Use where they support a moment, not as site-wide spectacle |
| Highly realistic folding/motion | **Limited** | Too heavy/slow for the intended experience |

**[DIRECTION] Motion principle:** The interface should be playful, tactile, and *rapid*. It should respond at once; a visitor shouldn't feel they are waiting for a performance. Physical metaphors can be subtle and contemporary. Preserve usability for touch, keyboard, and reduced-motion users.

**[DIRECTION] Information hierarchy:** Exploration and Easter eggs add delight, but primary calls to action remain visible and conventional. A major work link must not depend on a hidden interaction.

## 5. Visual influences from music and Pinterest

### 5.1 Music taste: mood more than branding

**[CONFIRMED]** The owner listens to **1990s Asian pop, K-pop, and indie**, and specifically mentioned:

- **m-flo**, recently discovered and enjoyed.
- **NewJeans**, whose broader visual identity they admire.
- **TUIDE — "SUN KISS"** music video, which they enjoy visually.
- **LOONA** and **Red Velvet**, both in frequent rotation; Red Velvet's album covers can be particularly interesting.
- **Sabrina Carpenter**, whose album art the owner somewhat likes.

**Important limit [CONFIRMED]:** The owner cares a great deal about the *vibe* conveyed by music, but does **not** consistently pay close attention to album artwork. This site should **not** become a music-themed portfolio, a fake music player, or an album-cover showcase by default.

**Historical reference caveat [CONFIRMED]:** CD booklets and vintage magazines are visually interesting suggestions but were **not** central objects in the owner's own childhood. Avoid building the whole creative concept around an invented personal connection to them. They can inform composition without becoming the literal story.

### 5.2 What the owner shared from Pinterest

The owner supplied a Pinterest shortlink, `https://pin.it/69QxN7ZEQ`, followed by **six screenshots** of its visible contents. The following is a visual reading of those screenshots, not a claim to have accessed every pin or the entire board.

**Recurring motifs observed [DIRECTION]:**

1. **Summer and sky:** Grey-blue seas, waves, beach photography, airy blue skies, sunlight on water, hazy seaside scenes, and youthful summer imagery.
2. **Intimate photography:** Soft exposure, candid-feeling scenes, dusk light, windows, city/street images, warm reflections, and casual environments.
3. **Illustrated figures:** Many anime/manga-inspired drawings, often contemporary and casual rather than fantastical: relaxed poses, loose clothing, headphones, soft lighting, contemplative expressions, cool/dusty colouring.
4. **Playful small objects:** Tiny pixel/sprout characters, cute mascots, cats, rabbits, Snoopy/Peanuts, little stars, doodles, stickers, and whimsical mini-icons.
5. **Editorial and graphic composition:** NewJeans designs (including *Supernatural* imagery), Japanese-style print/editorial layouts, layered text, posters, halftones, grain, cutouts, blue typography, printed advertisements, irregular collage, clipped photos, grid paper, stamps, and varied typographic scales.
6. **Physical-media traces:** CDs, cassette tapes, printed-paper textures, magazine clippings, compact devices, stickers, and photographed objects. These are visual textures, not necessarily personal nostalgia objects.
7. **Blue as an emotional colour:** The screenshots show a range from very pale icy blue and grey-blue to saturated cobalt, often balanced with warm cream or subdued grey.
8. **Range of intensity:** Some pins are densely composed and graphic-heavy, others very quiet, atmospheric, and minimal. The board is *not* uniformly pastel, cute, sunny, or scrapbook-like; there are darker, wintery, moody illustrations too.

**Examples visible:** NewJeans imagery, a bright blue Pocari Sweat graphic, a blue Japanese magazine cover, Peanuts print material, anime-inspired character art, seaside photography, cassette/CD arrangements, tiny pixel sprites, and blue sticker collages.

**[CONFIRMED] Relationship to illustration:** Anime-inspired illustration is genuinely appealing but **must not dominate the identity**. The site should communicate the owner's other sides too. The *qualities* of these illustrations—relaxed framing, thoughtful negative space, cool colour, casual intimacy, softened lighting—can be adopted **without literally placing anime characters on the website**.

**[DIRECTION] Caution:** Do not use random Japanese or Korean writing, stock art, anime cutouts, faux stamps, or decorative music assets simply to signal an aesthetic. The visual character should grow from genuine content and thoughtful composition, not borrowed cultural signifiers out of context.

### 5.3 Photography and graphic design are complementary

- **[CONFIRMED]** When asked to choose photography-led versus graphics-led, the owner **could not and did not want to choose**; both appeal.
- **[CONFIRMED]** The owner is willing to take or find photos but expects that doing so might be cumbersome.
- **[CONFIRMED]** They particularly like layers, expressive compositions, shapes, and experimental layouts.
- **[DIRECTION]** A useful division of labour is: **photography creates emotional atmosphere; graphic design creates visual personality; typography grounds everything.** This is a proposed synthesis, not a rigid ratio.
- **[DIRECTION]** Personal photos should feel like small windows into lived experience, not huge interchangeable stock-photo hero banners. Graphics should organize and animate the material, not merely fill empty areas.

## 6. Colour, typography, and visual density

### 6.1 Colour decision history

The user was offered four rough colour families. They were most attracted to:

- **Palette C: "Restrained with surprises"** — quiet, structured, clean neutrals with occasional accents. The owner explicitly suggested this as the **baseline**.
- **Palette B: "Soft and nostalgic"** — muted, faded, airy, sentimental colours. The owner wanted this to **fill in the blanks** of C.

The user's Pinterest then reinforced soft blues, blue-greys, cream, charcoal/ink, and occasional stronger blue. A palette proposed later included the following **unapproved exploratory tokens**, useful as starting points, **not final brand colours**:

| Role (proposed) | Hex (exploratory) | Intended use |
| --- | --- | --- |
| Warm paper | `#F4F1EB` | Primary light background |
| Blue haze | `#CFDCE2` | Quiet secondary surfaces |
| Dusty blue | `#8AA7C0` | Supporting accent and calm depth |
| Soft ink | `#344557` | Readable dark text and structure |
| Faded warmth | `#D9C8B9` | Beige/taupe counterbalance |

**[CONFIRMED]** The target is neither colourless minimalism nor uniformly cheerful candy-colour Material Design. **[DIRECTION]** Warmer neutral structure + restrained nostalgic colours + selective moments of stronger saturation.

**[OPEN]** Exact colour values, light/dark behaviour, accessibility contrast, whether blue is the main signature colour, and how much colour individual project pages inherit from their projects.

### 6.2 Typography

- **[CONFIRMED]** When shown two sample typographic styles, the owner clearly chose the **first**: quiet, contemporary, friendly, understated sans-serif lettering.
- **[CONFIRMED]** The owner enjoys expressive typography as part of visual design, but does not want the *default type system* to be conspicuously loud, overtly editorial, or constantly experimental.
- **[DIRECTION]** Experiment primarily through layout, scale, spacing, positioning, unexpected cropping, surfaces, and interactions. Let the base font be approachable and easy to read.
- **[DIRECTION]** Occasional typographic contrast is fine where meaningful, but a mixed-font collage or aggressively display-oriented headline system would likely overpower the desired intimacy.
- **[OPEN]** Actual typefaces, casing rules, weights, use of monospace (if any), and sizes.

### 6.3 Visual density and scrappiness

- **[CONFIRMED]** The owner wants **visual scraps**: stickers, playful placement, small imperfections, maybe photo scraps, some layering, and a little unconventional structure.
- **[CONFIRMED]** The site should be **visually interesting right away**, not a plain centered headline and two perfectly uniform cards.
- **[CONFIRMED]** It must also avoid overdoing the visual artifacts or broadcasting "look how quirky and tasteful I am."
- **[DIRECTION]** Aim for **curated visual density**: rich enough to explore, with enough breathing room and hierarchy to avoid becoming a chaotic scrapbook. Not every section should look like the same template or component.
- **[DIRECTION]** The most fitting design character may be **selectively expressive rather than constantly expressive**. Visual quiet makes individual discoveries, photographs, and playful details more impactful.

## 7. Interface metaphor and layout direction

### 7.1 Literal desktop vs desktop-inspired composition

During a three-way framing exercise, the owner chose **B: a desktop-inspired personal archive**, not **A: an actual operating-system desktop** and not exclusively **C: a conventional website with tiny digital-life references**.

- **[REJECTED / LIMITED]** Full fake desktop with draggable windows, Mac dock, taskbar, and Finder imitation as the whole site. The owner views that genre of portfolio as **overdone**.
- **[CONFIRMED]** The interface should feel inspired by digital design **without pretending to be an actual laptop**.
- **[DIRECTION]** Borrow the grammar of tabs, document stacks, panels, floating layers, folders, files, saved fragments, and responsive window actions as *compositional tools*.
- **[DIRECTION]** Individual parts can reference software differently: a project may live in a document-like panel, a collection in an archive, and a small curiosity in a floating card. Avoid forcing every content area into an identical mock window.

### 7.2 Possible homepage arrangement (not approved)

**[PROPOSED]** A homepage with:

- An expressive but readable introduction, perhaps asymmetrically placed rather than dead center.
- An immediately visible, substantial **featured project** or work preview. Professional content should dominate the functional hierarchy.
- A smaller atmospheric image, snapshot, or other personal fragment as a contrast to the project.
- A compact cluster of file/tab/bookmark-like links or small curiosity cards implying there is more to discover.
- Slightly overlapping or differently proportioned surfaces that evoke active digital space without recreating OS windows.
- One immediate, satisfying interaction that demonstrates personality.
- Clear work, about, and direct/recruiter-oriented navigation.

**Crucial correction [CONFIRMED]:** A preliminary assistant mockup made from a heading and two simple cards was **too bare and simple**, even as a rough concept. Increase compositional interest, density, and visual specificity while retaining hierarchy.

### 7.3 Work pages versus optional personal corners

- **[DIRECTION]** Professional work pages need structure and substance; technical depth cannot be hidden under purely mood-driven design.
- **[DIRECTION]** Personal sections can feel exploratory: photographs, things enjoyed, links, music, places, small curiosities, or occasional notes, if they reflect actual interests.
- **[CONFIRMED]** Do not require the owner to maintain faux-detailed diary entries, exhaustive memory annotations, or "what I listened to while coding" notes.
- **[OPEN]** Exact sections, amount of photography available, archive taxonomy, visual assets, real project names, and content-writing approach.

## 8. Three generated visual draft concepts (not yet selected)

After this discussion, three **visual homepage concepts** were generated together for comparison. No subsequent owner response selected one or approved them as final. Their text and project labels were **illustrative**.

**Important:** These A/B/C labels are different from the earlier metaphor question in §7.1. In the earlier question, "B" meant *desktop-inspired archive*. Here, "B" means *Photographic Journal*.

### Draft A — Interface Collage

- **Appearance:** Off-white page with browser-like top framing, muted blue accents, several overlapping floating windows/panels, a folder navigation area, project image preview, a note-like "currently" area, small sticker/character, and a Polaroid-style image.
- **Strength:** Captures the digital interaction nostalgia, lively layering, and discoverable personality while keeping work visible.
- **Risk:** It could become too literal an imitation of old browser/desktop chrome, the very trend the owner wants to avoid. Doodads and retro software references must be edited carefully.
- **Take forward:** Tactility, differing panel sizes, responsive surfaces, playful but organized overlaps.

### Draft B — Photographic Journal

- **Appearance:** Atmospheric dusk-lit bedroom or window photograph as a major hero; calm, understated sans-serif introduction; selected project thumbnails below; a lower personal-photo section and small "beyond work" area.
- **Strength:** Strongest expression of intimate nostalgia, warmth, remembered evenings, and summer-memory photography.
- **Risk:** If too dominant, the photo hero could crowd out work or feel too minimal, generic, or like a lifestyle portfolio. It also requires real, fitting imagery.
- **Take forward:** Emotional atmosphere, warm lighting, candid visual fragments, simple type.

### Draft C — Personal Archive

- **Appearance:** Warm grid-paper background, file/folder imagery, paper scraps, tape, clouds, tiny hand-drawn symbols, photo tiles, CD imagery, a miniature music-player widget, scrapbook-like layering.
- **Strength:** Immediately playful and exploratory; dense with little discoveries and a highly personal visual structure.
- **Risk:** Most vulnerable to feeling overdone, manufactured, overly cute, or like a Pinterest scrapbook. The CD/music-player visual risks turning a broad personality into a music trope.
- **Take forward:** The sense of collection, imperfect placement, small graphical surprises, and archive-based organisation; reduce literal props.

**[DIRECTION] Best synthesis to test next:** The richer layering and navigable project focus of A, the intimacy and photographic restraint of B, and just a measured amount of the curiosity and texture of C. This is a proposed synthesis; the owner has **not** chosen it yet.

## 9. Important revisions, corrections, and non-contradictions

The discussion developed over multiple passes. These points are essential when briefing someone who hasn't seen it:

| Earlier statement or interpretation | Later clarification | What to preserve |
| --- | --- | --- |
| "I like 2010s OS, macOS and iOS" might mean old glossy/skeuomorphic iOS. | Owner explicitly means **post-flat-redesign iOS**, not pre-iOS-7 skeuomorphism. | Flat-era nostalgia and responsive material logic, **not leather/gloss clones**. |
| The original Material look could form the whole design. | The owner finds a direct 2014 Google-app recreation sterile; loves ripple and paper metaphors specifically. | Transfer the interactions, not the whole default Material aesthetic. |
| Retro aesthetic might be the goal. | The owner prefers a **contemporary** website carrying the *spirit* of 2015–2016. | Evoke the era emotionally, not through visual cosplay. |
| A "laptop" metaphor might mean a fake desktop UI. | Owner calls literal desktop portfolios overdone; prefers abstract/digital inspiration. | Digital-world composition without a literal OS. |
| A scrapbook might be the look. | Owner likes stickers and visually scrappy details but rejects excessive, performative decoration. | Personal traces, not decorative saturation. |
| Music could suggest a CD booklet or vintage magazine concept. | Those objects were not central in the owner's childhood; music's atmosphere matters more than album art. | Editorial/physical-media influences can be secondary, not a false personal narrative. |
| Pinterest suggests lots of anime illustrations. | Owner enjoys that art but does not want literal anime to dominate the site. | Borrow palette, framing, softness, compositional mood. |
| Summer images could imply an airy beach/summer site. | Owner chose **intimate nostalgia** over purely sunlit nostalgia, while affirming the summer-memory insight. | Cozy bedroom/dusk atmosphere with traces of summer light. |
| Could choose photography-led or graphics-led. | Owner did **not** choose one and likes both. | Let photography and graphic design do complementary work. |
| Owner likes expressive graphics, so typography should be loud. | Owner explicitly selected the **quieter** typographic sample. | Keep type understated; make the *arrangement* expressive. |
| A very clean minimalist homepage might balance experiments. | Owner said the rough sketch was too bare and simple. | Make the first screen visually interesting immediately, but not overwhelming. |
| Personal project notes could establish authenticity. | Owner dislikes fabricated-seeming fine-grained personal notes and doesn't track details that way. | Don't invent habits or over-curate a persona. |
| Paper unfolding and Genie animations sound delightful. | Owner dislikes their slowness in practice. | Short, responsive tactile movement, not long animations. |
| A separate recruiter mode could solve the usability problem. | Liked as an idea, but not fully designed or confirmed as feature. | Preserve recruiter accessibility, keep implementation open. |
| Three generated draft images appear to be design proposals. | They were produced for exploration; no winner has been selected. | Treat as visual experiments, not a frozen spec. |

**The main productive tension:** The owner wants both **immediate visual richness** and **authentic, unforced restraint**. Solving that tension is central to the final design, not a contradiction to eliminate by choosing an extreme.

## 10. What to avoid

### Explicitly rejected or strongly discouraged

- A generic, templated, corporate, cold developer portfolio.
- A bare minimal landing page that could belong to anyone.
- A fully simulated macOS/Windows desktop with draggable icons as the site's central gimmick.
- Pre-flat-redesign skeuomorphic iOS visuals as the foundational style.
- A sterile recreation of a 2014 Google Material Design app.
- Gratuitous, slow, full-page animations or sluggish unfolding effects.
- Obvious retro cosplay that looks immediately like a copy of the 2010s.
- Maximalist sticker spam, gratuitous tape, doodles, foreign-language type, or other "aesthetic" artifacts without meaning.
- A music player, cassette, anime figure, or CD becoming the defining identity just because it appears in the mood board.
- Generic stock imagery that pretends to be personally meaningful.
- Faux-personal project anecdotes, meticulously curated memories, or details the owner doesn't genuinely record.
- Personal features that make it difficult to find work, technical evidence, or contact details.

### Qualifiers, not bans

- **Window interfaces:** welcome when selectively used, not as an OS clone.
- **Stickers and handwritten marks:** welcome as occasional accents, not omnipresent decoration.
- **Printed-media styling:** welcome compositionally, not as the whole site's nostalgic justification.
- **Anime-inspired aesthetics:** welcome in colour/framing/feeling, not as dominant character art.
- **Blue:** a major cue in the screenshots, but exact amount and shade remain open.
- **Cinematic motion:** allowed in meaningful moments if fast and never blocking core tasks.
- **Photography:** appealing, but upkeep and sourcing should be realistic.

## 11. Design decision hierarchy for future collaborators

When a visual or interaction idea conflicts with the brief, prioritize in this order:

1. **Actual projects and usability** — visitors can reliably see what the owner built and how to contact them.
2. **Authenticity** — don't imply habits, history, or interests solely because they look stylish.
3. **Warmth and curiosity** — browsing feels personal, discovered, and memorable.
4. **Immediate but selective visual richness** — expressive arrangement rather than every element shouting.
5. **Responsive digital tactility** — ripples, layers, motion, surprises; speed over simulation.
6. **Contemporary coherence** — nostalgia as undertone, not a replica.
7. **Maintainability** — the site remains personal even when the owner doesn't continually create elaborate illustrations or photo essays.

**Practical quality check:** If removing the stickers and gimmicks leaves a clean but generic portfolio, the concept is insufficiently personal. If removing the work leaves an elaborate, beautiful but uninformative collage, the concept is insufficiently useful. The final design needs to pass both tests.

## 12. Open decisions; do not assume answers

- **Overall visual composition:** No final concept selected among the three generated drafts, and no actual page mockup approved.
- **Site identity:** "Open Tabs at Dusk" and related names are working creative shorthand, not the website's name.
- **Exact colour system:** C-style restrained baseline + B-style soft nostalgia are confirmed preferences; specific hex codes are exploratory.
- **Typography:** Understated style confirmed; exact font family/weights not selected.
- **Photography:** No final images, shoots, subjects, rights-cleared assets, or recurring photo-upload workflow selected.
- **Personal archive:** Content categories and amount of writing/images/music/links not chosen. Avoid forcing a section before real material exists.
- **Recruiter mode:** Intention is plausible, implementation undecided.
- **Motion:** Favourite interaction types are known; exact animation timings, technical behaviours, and accessibility implementations are not yet defined.
- **Navigation:** Work must be easy to access, but precise page map and menu system aren't finalized.
- **Projects:** The actual projects, technical stacks, achievements, and case-study copy have not been supplied. All project names and descriptions shown in mockups were illustrative.
- **Site voice:** Warm, human, not overly corporate or performatively quirky is clear; final page copy remains to be written from genuine facts.
- **Illustration:** Anime-inspired visual cues are welcome, but no illustrator, character system, mascot, or commissioned artwork has been chosen.

## 13. Short handoff for a designer or coding assistant

Design a contemporary, experimental-but-usable personal portfolio for someone applying to software engineering and data-science roles, perhaps UI/UX later. Its emotional centre is the intimate curiosity of the 2015–2016 internet: friends' updates, personal browsing, Wikipedia rabbit holes, old vlogs, and the feeling of having an infinite world to explore. Picture a slightly messy bedroom at dusk and the warmth of opening a friend's well-used laptop to discover their projects, tabs, files, images, and interests. **Do not literally recreate an OS.**

Use a calm, warm-neutral foundation with muted blue-grey and occasional faded-colour accents, contemporary understated sans-serif typography, and visually expressive but edited layering. Mix small atmospheric photographs with unusual, graphic arrangements and subtle collage/print influences. The first screen must already be visually intriguing and feature real work prominently; do not make it a bare minimalist page. Interactions should feel thoughtfully crafted and immediate: ripple feedback, quick paper-like elevation, some responsive window behaviours, optional dock-inspired hover, and hidden discoveries. Avoid heavy realism, slow transitions, exaggerated scrapbook props, and forced personal anecdotes. Let visitors find authentic fragments of the person without sacrificing clear recruiter access to projects, technical depth, résumé, and contact information.

**The defining test:** It should feel like **a warm, curious person's corner of the internet**, not an aesthetic template, a corporate portfolio, an anime fan site, a CD booklet, a fake Mac desktop, or a nostalgic product demo.

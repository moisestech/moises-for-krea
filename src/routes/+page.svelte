<script lang="ts">
  import {
    CONTACT_LABEL,
    CONTACT_MAIL,
    FIELD_STUDIO,
    FIELD_STUDIO_REPO,
    HERO_ART,
    evidenceCards,
    loopSteps
  } from '$lib/content';
</script>

<section class="hero">
  <div>
    <p class="kicker">Moises Sanabria × Krea</p>
    <h1>I build creative-production systems at the edge of models, media, and human judgment.</h1>
    <p class="support">
      Founding AI product engineer, artist, and technical director. I can work across engineering,
      film workflows, product feedback, demos, and the messy last mile between model capability and
      what creative teams can actually ship.
    </p>
    <p class="ctas">
      <a class="primary" href="{FIELD_STUDIO}/replay">Explore the engineering prototype</a>
      <a class="ghost" href={FIELD_STUDIO_REPO} rel="noreferrer" target="_blank">Inspect the source</a>
    </p>
  </div>
  <figure class="hero-media">
    <img src={HERO_ART} alt="Price of Existence by Moises Sanabria installed in a gallery" />
    <figcaption>Artist-owned source material · not presented as Krea-generated output</figcaption>
  </figure>
</section>

<section>
  <p class="claim">one workflow · five responsibilities</p>
  <h2>From creative brief to inspectable evidence</h2>
  <ol class="loop">
    {#each loopSteps as step, i}
      <li>
        <span class="n">0{i + 1}</span>
        <h3>{step.title}</h3>
        <p>{step.body}</p>
      </li>
    {/each}
  </ol>
</section>

<section class="studio">
  <div>
    <p class="claim">replay · public fixture · no credentials</p>
    <h2>Field Studio</h2>
    <p>
      An approval-gated creative-production prototype: six directions, exact asynchronous states,
      human selection, bounded refinement, a proposal board, and an operator-authored field note.
    </p>
    <p>
      The public replay proves orchestration and interaction design. Its SVG boards are fixtures—not
      Krea output. The server-side provider contract is implemented; a real Krea capture remains an
      explicit asset gate.
    </p>
    <p>
      <a class="primary" href="/field-studio">Read the case study</a>
      <a class="ghost" href="{FIELD_STUDIO}/replay">Launch replay</a>
    </p>
  </div>
  <iframe
    class="embed"
    title="Krea Field Studio replay"
    src="{FIELD_STUDIO}/replay"
    loading="lazy"
  ></iframe>
</section>

<section>
  <p class="claim">selected proof</p>
  <h2>Work that connects the role</h2>
  <div class="cards">
    {#each evidenceCards as card}
      <a class="card" href={card.href} {...card.external ? { rel: 'noreferrer', target: '_blank' } : {}}>
        <img src={card.image} alt={card.alt} />
        <p class="claim">{card.claim}</p>
        <h3>{card.title}</h3>
        <p>{card.story}</p>
        <p class="proof">{card.proof}</p>
      </a>
    {/each}
  </div>
</section>

<section class="close">
  <p class="claim">next step</p>
  <h2>Let’s examine the engineering and creative decisions together.</h2>
  <p>
    I can walk through the state model, provider boundary, failure handling, and how the workflow
    changes once we have a real Krea run and a filmmaker’s brief.
  </p>
  <a class="primary" href={CONTACT_MAIL}>{CONTACT_LABEL}</a>
</section>

<style>
  .hero { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 2rem; align-items: end; padding-bottom: 2rem; }
  .kicker, .claim { font-family: var(--mono); letter-spacing: 0.06em; }
  .kicker { margin-bottom: 0.4rem; }
  .claim { font-size: 0.75rem; color: #555; text-transform: uppercase; }
  h1 { font-family: var(--serif); font-weight: 400; font-size: clamp(2.1rem, 5vw, 3.5rem); line-height: 1.05; max-width: 17ch; margin: 0 0 1rem; }
  h2 { font-family: var(--serif); font-weight: 400; font-size: 2rem; margin-top: 0.35rem; }
  .support { max-width: 42rem; font-size: 1.08rem; }
  .ctas, .close { margin-top: 1.25rem; }
  .primary, .ghost { display: inline-block; padding: 0.75rem 1.05rem; margin: 0 0.5rem 0.5rem 0; text-decoration: none; border: 1px solid var(--ink); }
  .primary { background: var(--ink); color: var(--paper); }
  .hero-media { margin: 0; }
  .hero-media img { width: 100%; min-height: 360px; object-fit: cover; display: block; }
  figcaption { font-family: var(--mono); font-size: 0.72rem; margin-top: 0.4rem; }
  .loop, .cards { display: grid; gap: 1rem; padding: 0; list-style: none; }
  .loop { grid-template-columns: repeat(5, 1fr); }
  .cards { grid-template-columns: repeat(2, 1fr); }
  .n { font-family: var(--mono); color: var(--coral); }
  .studio { display: grid; grid-template-columns: minmax(240px, 0.65fr) minmax(420px, 1.35fr); gap: 1.5rem; align-items: start; }
  .card { text-decoration: none; border: 1px solid var(--line); padding: 0 0 1rem; }
  .card img { width: 100%; height: 180px; object-fit: cover; display: block; }
  .card h3, .card p { margin: 0.35rem 1rem; }
  .proof { font-family: var(--mono); font-size: 0.75rem; }
  .embed { width: 100%; min-height: 640px; border: 1px solid var(--line); background: var(--paper); }
  @media (max-width: 900px) {
    .hero, .studio, .loop, .cards { grid-template-columns: 1fr; }
    .hero-media { order: -1; }
  }
</style>

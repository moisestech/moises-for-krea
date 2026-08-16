<script lang="ts">
  import {
    CONTACT_LABEL,
    CONTACT_MAIL,
    FIELD_STUDIO,
    evidenceCards,
    loopSteps,
    reelTranscript,
    thirtyDays
  } from '$lib/content';

  const frames = [
    'Brief',
    'Three lanes',
    'Approve',
    'Jobs',
    'Compare',
    'Field note'
  ];
</script>

<section class="hero">
  <p class="kicker">Moises Sanabria × Krea</p>
  <h1>I turn frontier creative AI into workflows people can trust, learn, and ship with.</h1>
  <p class="support">
    Artist, founding AI product engineer, and technical director. I lead the demo, map the production
    constraints, build the workflow, teach the team, and return field learning to product.
  </p>
  <p class="ctas">
    <a class="primary" href="{FIELD_STUDIO}/replay">Run the 90-second workflow</a>
    <a class="ghost" href="/evidence">See the evidence map</a>
  </p>
</section>

<section class="reel" aria-labelledby="reel-title">
  <h2 id="reel-title">Workflow reel</h2>
  <p class="claim">replay · interactive storyboard (recorded 60–90s clip: planned)</p>
  <div class="frames" aria-hidden="true">
    {#each frames as frame, i}
      <span style="animation-delay: {i * 0.5}s">{frame}</span>
    {/each}
  </div>
  <details>
    <summary>Transcript</summary>
    <pre>{reelTranscript}</pre>
  </details>
</section>

<section>
  <h2>Client-to-product loop</h2>
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

<section>
  <h2>Field Studio</h2>
  <p class="claim">replay · public default · no credentials</p>
  <p>
    Exhibition previz for <em>Price of Existence</em>: six directions, human approval, inspectable Krea
    job states, proposal board, operator field note.
  </p>
  <p>
    <a class="primary" href="/field-studio">Open the case study</a>
    <a class="ghost" href="{FIELD_STUDIO}/replay">Launch replay</a>
  </p>
  <iframe
    class="embed"
    title="Krea Field Studio replay"
    src="{FIELD_STUDIO}/replay"
    loading="lazy"
  ></iframe>
</section>

<section>
  <h2>Evidence</h2>
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

<section>
  <h2>First 30 days — hypotheses, not promises</h2>
  <div class="days">
    {#each Object.entries(thirtyDays) as [range, items]}
      <article>
        <h3>Days {range}</h3>
        <ul>
          {#each items as item}<li>{item}</li>{/each}
        </ul>
      </article>
    {/each}
  </div>
</section>

<section class="close">
  <h2>Direct conversation</h2>
  <p>Not “hire me.” A concrete next step: run a client workflow together.</p>
  <a class="primary" href={CONTACT_MAIL}>{CONTACT_LABEL}</a>
</section>

<style>
  .hero { padding-bottom: 2rem; }
  .kicker { font-family: var(--mono); letter-spacing: 0.06em; margin-bottom: 0.4rem; }
  h1 {
    font-family: var(--serif);
    font-weight: 400;
    font-size: clamp(2.1rem, 5vw, 3.5rem);
    line-height: 1.05;
    max-width: 16ch;
    margin: 0 0 1rem;
  }
  .support { max-width: 40rem; font-size: 1.08rem; }
  .ctas, .close { margin-top: 1.25rem; }
  .primary, .ghost {
    display: inline-block;
    padding: 0.75rem 1.05rem;
    margin: 0 0.5rem 0.5rem 0;
    text-decoration: none;
    border: 1px solid var(--ink);
  }
  .primary { background: var(--ink); color: var(--paper); }
  .claim { font-family: var(--mono); font-size: 0.75rem; letter-spacing: 0.06em; color: #555; text-transform: uppercase; }
  .frames { display: flex; flex-wrap: wrap; gap: 0.45rem; margin: 1rem 0; }
  .frames span {
    font-family: var(--mono); font-size: 0.78rem;
    border: 1px solid var(--line); padding: 0.3rem 0.55rem;
    animation: pulse 3s ease-in-out infinite;
  }
  @keyframes pulse { 0%,100% { background: transparent; } 35% { background: var(--mint); } }
  pre { white-space: pre-wrap; font-family: var(--mono); font-size: 0.82rem; }
  .loop, .cards, .days { display: grid; gap: 1rem; padding: 0; list-style: none; }
  .loop { grid-template-columns: repeat(5, 1fr); }
  .cards { grid-template-columns: repeat(2, 1fr); }
  .days { grid-template-columns: repeat(3, 1fr); }
  .n { font-family: var(--mono); color: var(--coral); }
  .card { text-decoration: none; border: 1px solid var(--line); padding: 0 0 1rem; }
  .card img { width: 100%; height: 180px; object-fit: cover; display: block; }
  .card h3, .card p { margin: 0.35rem 1rem; }
  .proof { font-family: var(--mono); font-size: 0.75rem; }
  .embed { width: 100%; min-height: 640px; border: 1px solid var(--line); background: var(--paper); }
  h2 { font-family: var(--serif); font-weight: 400; font-size: 2rem; margin-top: 3rem; }
  @media (max-width: 900px) {
    .loop, .cards, .days { grid-template-columns: 1fr; }
  }
</style>

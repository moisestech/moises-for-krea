<script lang="ts">
  import ProofSheet from '$lib/components/ProofSheet.svelte';
  import {
    AEP_REPO,
    CONTACT_LABEL,
    CONTACT_MAIL,
    FIELD_STUDIO_CI,
    FIELD_STUDIO_REPLAY,
    FIELD_STUDIO_REPO,
    evidenceCards,
    loopSteps,
    proofSheet,
    reelTranscript,
    thirtyDays
  } from '$lib/content';
</script>

<svelte:head>
  <title>Moises Sanabria × Krea — Creative Lead</title>
</svelte:head>

<section class="hero">
  <div class="copy">
    <p class="kicker">Creative Lead application · Moises Sanabria × Krea</p>
    <h1>I turn frontier creative AI into workflows people can trust, learn, and ship with.</h1>
    <p class="support">
      Artist, founding AI product engineer, and technical director. I lead the demo, map production
      constraints, build the workflow, teach the team, and return field learning to product.
    </p>
    <p class="ctas">
      <a class="primary" href={FIELD_STUDIO_REPLAY}>Run the 90-second replay</a>
      <a class="ghost" href="/field-studio">Read the one-page case</a>
    </p>
  </div>
  <ProofSheet sheet={proofSheet} />
</section>

<p class="strip" aria-label="Workflow counts, not performance metrics">
  01 workflow prototype · 06 directions · 01 approval gate · 00 anonymous paid jobs
</p>
<details>
  <summary>Workflow transcript</summary>
  <pre>{reelTranscript}</pre>
</details>

<section>
  <h2>The job is the loop, not the prompt.</h2>
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

<section class="flagship">
  <p class="claim">replay · unofficial proof of work</p>
  <h2>Krea Field Studio</h2>
  <p>
    A curator needs to see how <em>Price of Existence</em> could sit in a white-cube bay before a site visit.
    Field Studio turns that brief into six controlled directions, a human-approved refinement, a proposal board,
    and a reproducible product field note.
  </p>
  <div class="frames">
    <figure>
      <img src="/proof/site-gallery.svg" alt="Synthetic gallery drawing paired with owned artwork in the brief step." />
      <figcaption>Brief: owned artwork + synthetic site, with preserve/change constraints.</figcaption>
    </figure>
    <figure>
      <img src="/proof/faithful-1.svg" alt="Replay compare still labeled REPLAY, not a live Krea output." />
      <figcaption>Compare: six directions with exact job status and no automated ranking.</figcaption>
    </figure>
    <figure>
      <img src="/proof/material-1.svg" alt="Replay proposal still labeled REPLAY." />
      <figcaption>Handoff: proposal limitations + operator-authored field note.</figcaption>
    </figure>
  </div>
  <p class="ctas">
    <a class="primary" href={FIELD_STUDIO_REPLAY}>Run replay</a>
    <a class="ghost" href="/field-studio">Read the case</a>
    <a class="ghost" href={FIELD_STUDIO_REPO}>Inspect source + CI</a>
  </p>
</section>

<section>
  <h2>Evidence matched to the role</h2>
  <div class="cards">
    {#each evidenceCards as card}
      <a class="card" href={card.href} {...card.external ? { rel: 'noreferrer', target: '_blank' } : {}}>
        <img src={card.image} alt={card.alt} />
        <p class="claim">{card.id === 'aep' ? 'live source' : card.claim}</p>
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
  <h2>Let’s run a real client workflow together.</h2>
  <p>I’m based in Miami and prepared to relocate to San Francisco for this role.</p>
  <a class="primary" href={CONTACT_MAIL}>{CONTACT_LABEL}</a>
  <p class="fine"><a href={AEP_REPO}>Agentic Evidence Pipeline</a> · <a href={FIELD_STUDIO_CI}>Field Studio CI</a></p>
</section>

<style>
  .hero {
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
    gap: 1.5rem;
    align-items: start;
    padding-bottom: 1rem;
  }
  .kicker { font-family: var(--mono); letter-spacing: 0.06em; margin-bottom: 0.4rem; }
  h1 {
    font-family: var(--serif);
    font-weight: 400;
    font-size: clamp(2rem, 4.6vw, 3.3rem);
    line-height: 1.05;
    max-width: 16ch;
    margin: 0 0 1rem;
  }
  .support { max-width: 40rem; font-size: 1.08rem; }
  .ctas { margin-top: 1.1rem; }
  .primary, .ghost {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 0.55rem 1.05rem;
    margin: 0 0.5rem 0.5rem 0;
    text-decoration: none;
    border: 1px solid var(--ink);
  }
  .primary { background: var(--ink); color: var(--paper); }
  .claim { font-family: var(--mono); font-size: 0.75rem; letter-spacing: 0.06em; color: #555; text-transform: uppercase; }
  .strip {
    font-family: var(--mono);
    font-size: 0.82rem;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    padding: 0.85rem 0;
    margin: 1.5rem 0;
  }
  pre { white-space: pre-wrap; font-family: var(--mono); font-size: 0.82rem; }
  .loop, .cards, .days, .frames { display: grid; gap: 1rem; padding: 0; list-style: none; }
  .loop { grid-template-columns: repeat(5, 1fr); }
  .cards { grid-template-columns: repeat(2, 1fr); }
  .days, .frames { grid-template-columns: repeat(3, 1fr); }
  .n { font-family: var(--mono); color: var(--coral); }
  .card { text-decoration: none; border: 1px solid var(--line); padding: 0 0 1rem; }
  .card img { width: 100%; height: 180px; object-fit: cover; display: block; }
  .card h3, .card p { margin: 0.35rem 1rem; }
  .proof { font-family: var(--mono); font-size: 0.75rem; }
  .frames figure { margin: 0; }
  .frames img { width: 100%; display: block; border: 1px solid var(--line); background: #fff; }
  .frames figcaption { font-family: var(--mono); font-size: 0.75rem; margin-top: 0.4rem; }
  h2 { font-family: var(--serif); font-weight: 400; font-size: 2rem; margin-top: 3rem; }
  .fine { font-size: 0.88rem; }
  @media (max-width: 900px) {
    .hero, .loop, .cards, .days, .frames { grid-template-columns: 1fr; }
    .hero { display: flex; flex-direction: column; }
  }
</style>

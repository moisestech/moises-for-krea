<script lang="ts">
  import ProofSheet from '$lib/components/ProofSheet.svelte';
  import StickyCta from '$lib/components/StickyCta.svelte';
  import {
    FIELD_STUDIO,
    FIELD_STUDIO_CI,
    FIELD_STUDIO_REPLAY,
    FIELD_STUDIO_REPO,
    filmstrip,
    proofSheet,
    realVersusReplay
  } from '$lib/content';
</script>

<svelte:head>
  <title>Krea Field Studio — case study</title>
</svelte:head>

<p class="claim">REPLAY · UNOFFICIAL PROOF OF WORK</p>
<h1>From curator brief to an approved proposal—and back to a product field note.</h1>
<p class="lede">
  Field Studio is a Krea-integrated workflow prototype for exhibition previsualization. It keeps the human
  in charge of constraints, taste, approval, and spend while making asynchronous generation inspectable.
</p>
<p class="ctas">
  <a class="primary" href={FIELD_STUDIO_REPLAY}>Run replay</a>
  <a class="ghost" href={FIELD_STUDIO_REPO}>Source / README</a>
</p>

<ProofSheet sheet={proofSheet} large />
<StickyCta extra={{ href: FIELD_STUDIO_REPO, label: 'Source + CI' }} />

<section>
  <h2>Problem → intervention → evidence</h2>
  <div class="tri">
    <article>
      <h3>Problem</h3>
      <p>Generations become an unranked folder. Constraints and decisions disappear.</p>
    </article>
    <article>
      <h3>Intervention</h3>
      <p>Preservation constraints travel from brief to payload to comparison and handoff.</p>
    </article>
    <article>
      <h3>Evidence</h3>
      <p>Replay, provider boundary, exact Krea states, failure path, proposal, trace, field note.</p>
    </article>
  </div>
</section>

<section>
  <h2>The 90-second run</h2>
  <ol class="film">
    {#each filmstrip as frame, i}
      <li>
        <a href={FIELD_STUDIO_REPLAY}>
          <img src={frame.src} alt={`${frame.title}. Replay fixture, not a live Krea output.`} />
          <span class="n">0{i + 1}</span>
          <strong>{frame.title}</strong>
          <p>{frame.body}</p>
        </a>
      </li>
    {/each}
  </ol>
</section>

<section>
  <h2>What is real</h2>
  <div class="table-wrap">
    <table>
      <thead>
        <tr><th>Surface</th><th>State</th><th>Evidence</th></tr>
      </thead>
      <tbody>
        {#each realVersusReplay as row}
          <tr>
            <td>{row.surface}</td>
            <td class="mono">{row.state}</td>
            <td>{row.evidence}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>

<section>
  <h2>Customer friction → product signal</h2>
  <pre class="diagram">{`client brief
    ↓
preserve/change constraints
    ↓
approved Krea request plan
    ↓
job states + human review
    ↓
proposal decision
    ↓
field note: friction / reproduction / opportunity
    ↺ product + enablement`}</pre>
  <p>
    The product insight is not “use better prompts.” It is that constraints and decisions need a durable
    path through the workflow.
  </p>
</section>

<section>
  <h2>Architecture and failure</h2>
  <ul>
    <li>Server-only key. No anonymous inference.</li>
    <li>Fixture / Krea provider boundary.</li>
    <li>Polling for the recorded local run; webhook exists but the replay ledger is in-memory.</li>
    <li>Job-ID correlation and duplicate delivery idempotency.</li>
    <li>Cancellation while allowed; partial completion remains reviewable.</li>
  </ul>
</section>

<p class="ctas">
  <a class="primary" href={FIELD_STUDIO_REPLAY}>Run the 90-second replay</a>
  <a class="ghost" href={FIELD_STUDIO_CI}>Source + CI</a>
  <a class="ghost" href="{FIELD_STUDIO}/trace/replay-price-of-existence">Inspect run trace</a>
</p>

<style>
  .claim { font-family: var(--mono); font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; color: #555; }
  h1 { font-family: var(--serif); font-weight: 400; font-size: clamp(2rem, 4vw, 3rem); max-width: 18ch; }
  .lede { max-width: 42rem; font-size: 1.08rem; }
  .primary, .ghost {
    display: inline-flex; align-items: center; min-height: 44px; margin: 0 0.6rem 0.6rem 0;
    padding: 0.55rem 1rem; text-decoration: none; border: 1px solid var(--ink);
  }
  .primary { background: var(--ink); color: var(--paper); }
  h2 { font-family: var(--serif); font-weight: 400; font-size: 1.8rem; margin-top: 2.5rem; }
  .tri, .film { display: grid; gap: 1rem; padding: 0; list-style: none; }
  .tri { grid-template-columns: repeat(3, 1fr); }
  .film { grid-template-columns: repeat(4, 1fr); }
  .film a { text-decoration: none; display: block; border: 1px solid var(--line); padding: 0 0 0.75rem; min-height: 100%; }
  .film img { width: 100%; aspect-ratio: 16/10; object-fit: cover; display: block; background: #fff; }
  .film strong, .film p, .n { display: block; margin: 0.25rem 0.7rem 0; }
  .n { font-family: var(--mono); color: var(--coral); }
  .table-wrap { overflow-x: auto; }
  table { width: 100%; border-collapse: collapse; }
  th, td { text-align: left; padding: 0.65rem 0.5rem 0.65rem 0; border-bottom: 1px solid var(--line); vertical-align: top; }
  .mono { font-family: var(--mono); font-size: 0.78rem; }
  .diagram { font-family: var(--mono); font-size: 0.85rem; background: #fff; padding: 1rem; border: 1px solid var(--line); }
  @media (max-width: 900px) {
    .tri, .film { grid-template-columns: 1fr; }
  }
</style>

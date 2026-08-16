<script lang="ts">
  import { FIELD_STUDIO } from '$lib/content';
</script>

<p class="claim">replay · case study</p>
<h1>Krea Field Studio</h1>
<p class="lede">
  Unofficial proof of work: turn a curator brief and owned assets into controlled visual directions,
  a human-approved refinement, a proposal board, and a product field note.
</p>

<h2>Client problem</h2>
<p>
  A curator needs to see how <em>Price of Existence</em> could sit in a white-cube bay before a site visit.
  The conversation usually dies in a folder of unranked generations.
</p>

<h2>Current workflow friction</h2>
<p>
  Model capability is ahead of team adoption. People can get images. They cannot tell what was meant to be
  preserved, what was allowed to change, or which still is a decision versus a mood.
</p>

<h2>Why Krea</h2>
<p>
  Krea 2 Medium exposes control the job actually needs: aspect, img2img strength, style references, creativity.
  Jobs are asynchronous with inspectable states. That is the Creative Lead surface — not a prompt screenshot.
</p>

<h2>Designed workflow</h2>
<ol>
  <li>Brief + owned assets</li>
  <li>Three lanes (faithful / material / surprise) with reasons</li>
  <li>Explicit approval before spend</li>
  <li>Six async jobs, exact Krea states</li>
  <li>Compare — keyboard, no auto-rank</li>
  <li>Up to three refinements + optional 5s motion</li>
  <li>Proposal board with limitations</li>
  <li>Operator-authored field note</li>
</ol>

<h2>Real versus replay</h2>
<p>
  Public default is <strong>replay</strong>: deterministic fixtures, no credentials, no variable cost.
  <code>KreaGenerationProvider</code> is implemented against documented OpenAPI. A recorded live run waits on
  API balance (a separate USD wallet from app compute units).
</p>

<h2>Failure and limitation notes</h2>
<ul>
  <li>Not CAD, scale, structure, or permitting.</li>
  <li>Mock failure mode shows a failed job, cancel, and duplicate webhook no-op.</li>
  <li>Replay stills are labeled REPLAY until a funded live run replaces them.</li>
</ul>

<h2>What the exercise taught us about the product</h2>
<p>
  Preservation constraints need to travel from brief → generation payload → comparison annotations.
  If they only live in a prompt paragraph, the client cannot audit them.
</p>

<p>
  <a class="primary" href="{FIELD_STUDIO}/replay">Run replay</a>
  <a href="{FIELD_STUDIO}">Source / README</a>
  <a href="/technical-notes">Technical notes</a>
</p>

<style>
  .claim { font-family: var(--mono); font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; color: #555; }
  h1 { font-family: var(--serif); font-weight: 400; font-size: clamp(2rem, 4vw, 3rem); max-width: 16ch; }
  .lede { max-width: 40rem; font-size: 1.08rem; }
  .primary {
    display: inline-block; margin-right: 0.6rem; padding: 0.7rem 1rem;
    background: var(--ink); color: var(--paper); text-decoration: none; border: 1px solid var(--ink);
  }
</style>

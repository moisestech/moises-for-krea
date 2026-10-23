<script lang="ts">
  import { FIELD_STUDIO, FIELD_STUDIO_REPO } from '$lib/content';
</script>

<p class="claim">replay · engineering case study</p>
<h1>Krea Field Studio</h1>
<p class="lede">
  Unofficial proof of work for the engineering around creative production: turn a brief and owned
  assets into controlled directions, approval-gated jobs, a human decision, bounded refinements,
  a proposal board, and an operator field note.
</p>

<h2>The production problem</h2>
<p>
  A curator needs to discuss how <em>Price of Existence</em> could sit in a white-cube bay before a
  site visit. A folder of untracked generations is not a decision system: the team needs to know
  what had to remain stable, what could change, which run produced each output, and who approved it.
</p>

<h2>What is implemented</h2>
<ol>
  <li>Typed provider boundary for deterministic fixtures and the server-side Krea REST client</li>
  <li>Strict request validation for the checked-in model contracts</li>
  <li>Explicit approval before the six-job batch and a separate approval for optional motion</li>
  <li>Inspectable asynchronous states with monotonic transitions and terminal webhook idempotency</li>
  <li>Human selection only after a completed review set; no automated taste ranking</li>
  <li>Isolated replay sessions, bounded in-memory state, reset behavior, and a full-path browser test</li>
</ol>

<h2>Why this is relevant to Krea now</h2>
<p>
  The prototype is deliberately narrow. It demonstrates how I reason about model APIs, creative
  constraints, failure, spend, review, and provenance. The same approach can extend into newer Krea
  surfaces—models, Agent, Nodes, MCP, and CLI—after validating their current contracts and choosing
  a real user workflow.
</p>

<h2>Real versus replay</h2>
<p>
  The public demo is <strong>replay</strong>: deterministic, locally authored SVG fixtures with no
  credentials or variable cost. They prove orchestration, not Krea image quality. A Krea provider is
  implemented server-side, but public live execution, real generated results, and a recorded
  walkthrough are not claimed.
</p>

<h2>Limits</h2>
<ul>
  <li>Replay state is ephemeral memory, not durable database persistence.</li>
  <li>The workflow is creative previsualization—not CAD, scale, structure, feasibility, or permitting.</li>
  <li>Model contracts must be revalidated before a paid live run.</li>
</ul>

<p>
  <a class="primary" href="{FIELD_STUDIO}/replay">Run replay</a>
  <a href={FIELD_STUDIO_REPO} rel="noreferrer" target="_blank">Inspect source</a>
  <a href="/technical-notes">Technical notes</a>
</p>

<style>
  .claim { font-family: var(--mono); font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; color: #555; }
  h1 { font-family: var(--serif); font-weight: 400; font-size: clamp(2rem, 4vw, 3rem); max-width: 16ch; }
  .lede { max-width: 44rem; font-size: 1.08rem; }
  .primary { display: inline-block; margin-right: 0.6rem; padding: 0.7rem 1rem; background: var(--ink); color: var(--paper); text-decoration: none; border: 1px solid var(--ink); }
  p a { margin-right: 0.8rem; }
</style>

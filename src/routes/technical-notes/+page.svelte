<script lang="ts">
  import { AEP_REPO, FIELD_STUDIO_REPO } from '$lib/content';
</script>

<p class="claim">implementation notes · honest boundaries</p>
<h1>Technical notes</h1>
<p>For reviewers who want the engineering claims separated from the creative narrative.</p>

<h2>Provider boundary</h2>
<ul>
  <li>The client never receives a Krea token.</li>
  <li>The checked-in image contract targets <code>POST /generate/image/krea/krea-2/medium</code>.</li>
  <li>The optional motion contract targets <code>POST /generate/video/kling/kling-2.5</code>.</li>
  <li>Request schemas reject undocumented fields.</li>
  <li>The contracts were copied from public OpenAPI on 2026-08-16 and must be revalidated before live use.</li>
</ul>

<h2>Public execution boundary</h2>
<ul>
  <li>The public site creates an isolated fixture session per page load.</li>
  <li>Session state is process memory, capped and ephemeral; no durable persistence is claimed.</li>
  <li>Paid live execution is intentionally unavailable from public routes.</li>
  <li>The fixture provider returns authored SVG boards. They are not represented as Krea output.</li>
</ul>

<h2>State and failure behavior</h2>
<ul>
  <li>Exact provider states remain visible while the interface groups them for scanning.</li>
  <li>Polling is serial at two-second intervals, stops on terminal states, and is cleaned up on navigation.</li>
  <li>Directions cannot be selected until the associated job is completed and review is ready.</li>
  <li>Refinement and motion both require an approved completed still; motion has a separate approval.</li>
  <li>Webhooks accept known job IDs and terminal callbacks only. Duplicate or conflicting terminal callbacks are recorded as no-ops.</li>
  <li>No webhook signature validation is claimed because the checked source contract does not document one.</li>
</ul>

<h2>Related systems evidence</h2>
<p>
  <a href={AEP_REPO}>Agentic Evidence Pipeline</a> demonstrates the durable version of the same
  concerns: jobs, human approval, retries, idempotency, and an audit trail.
</p>

<h2>Asset gates before founder outreach</h2>
<ul>
  <li>Run the workflow once against current Krea APIs with a funded account.</li>
  <li>Replace or supplement fixture boards with clearly labeled real outputs.</li>
  <li>Record a 60–90 second walkthrough using only the verified live run.</li>
</ul>

<p><a href={FIELD_STUDIO_REPO} rel="noreferrer" target="_blank">Field Studio source</a></p>

<style>
  .claim { font-family: var(--mono); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; }
  h1 { font-family: var(--serif); font-weight: 400; font-size: 2.6rem; }
  code { font-family: var(--mono); font-size: 0.88em; }
</style>

<script lang="ts">
  import { AEP_REPO, FIELD_STUDIO } from '$lib/content';
</script>

<p class="claim">live · replay · planned</p>
<h1>Technical notes</h1>
<p>For engineering reviewers. Creative reviewers can skip this page.</p>

<h2>Krea API integration</h2>
<ul>
  <li>Server-only token. Client never sees <code>KREA_API_KEY</code>.</li>
  <li>Image: <code>POST /generate/image/krea/krea-2/medium</code> — prompt, aspect_ratio, resolution required.</li>
  <li>Video: <code>POST /generate/video/kling/kling-2.5</code> — prompt required; start_image + duration 5 for motion.</li>
  <li>Contracts copied from public OpenAPI (2026-08-16). Krea MCP was not connected in the authoring session.</li>
  <li>Request schemas are <code>additionalProperties: false</code> — extra fields fail closed.</li>
</ul>

<h2>Job lifecycle and webhooks</h2>
<ul>
  <li>Persisted states match Krea: backlogged → … → intermediate-complete → completed | failed | cancelled.</li>
  <li>Webhook: correlate <code>job_id</code>, 2xx fast, idempotency key = provider + job + terminal status + payload hash.</li>
  <li>No signature validation is claimed; Krea does not document one.</li>
  <li>Polling every 2–5s only when a public webhook is unavailable. Stop on terminal states.</li>
</ul>

<h2>Fixture-provider contract</h2>
<p>
  <code>GenerationProvider</code> is implemented twice: fixture (deterministic timings + local SVG outputs)
  and Krea (official REST). Tests run the same boundary. UI never holds a provider object.
</p>

<h2>Selected AEP and Infra24 evidence</h2>
<ul>
  <li>
    <a href={AEP_REPO}>agentic-evidence-pipeline</a> — durable jobs, state machines, human approval, retries, audit trail.
    Technical leverage for Creative Lead, not a parallel Backend application.
  </li>
  <li>
    Infra24 — field/product evidence for physical-digital workshop systems. README repair is in
    <code>docs/github-audit/</code> on this repo until the public README is updated.
  </li>
</ul>

<h2>Limitations</h2>
<ul>
  <li>Replay stills are authored fixtures until one funded live run is recorded.</li>
  <li>API balance is a separate USD wallet; HTTP 402 if empty. Failed/cancelled jobs are not billed.</li>
  <li>Not CAD. Not Krea-endorsed. Agentic Ops remains <strong>building</strong> if the GitHub pin still points at an uninspectable repo.</li>
</ul>

<p><a href="{FIELD_STUDIO}">Field Studio source</a></p>

<style>
  .claim { font-family: var(--mono); font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; }
  h1 { font-family: var(--serif); font-weight: 400; font-size: 2.6rem; }
  code { font-family: var(--mono); font-size: 0.88em; }
</style>

<script lang="ts">
  import { CONTACT_LABEL, CONTACT_MAIL, FIELD_STUDIO_REPLAY } from '$lib/content';

  let {
    replayHref = FIELD_STUDIO_REPLAY,
    extra
  }: {
    replayHref?: string;
    extra?: { href: string; label: string };
  } = $props();
</script>

<div class="bar">
  <a class="primary" href={replayHref}>Run replay</a>
  {#if extra}<a class="ghost" href={extra.href}>{extra.label}</a>{/if}
  <a class="ghost" href={CONTACT_MAIL}>{CONTACT_LABEL}</a>
</div>

<style>
  .bar {
    position: sticky;
    top: 0;
    z-index: 8;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 0.65rem 0;
    margin: 0 0 1.5rem;
    background: var(--paper);
    border-bottom: 1px solid var(--line);
  }
  .primary, .ghost {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    padding: 0.45rem 1rem;
    text-decoration: none;
    border: 1px solid var(--ink);
  }
  .primary { background: var(--ink); color: var(--paper); }
</style>

<script lang="ts">
  import { UNOFFICIAL } from '$lib/content';
  let { children } = $props();
</script>

<svelte:head>
  <title>Moises Sanabria × Krea</title>
  <meta name="description" content="Creative Lead application: I turn frontier creative AI into workflows people can trust, learn, and ship with." />
  <meta name="robots" content="index,follow" />
</svelte:head>

<div class="shell">
  <header>
    <a class="mark" href="/">Moises Sanabria × Krea</a>
    <nav>
      <a href="/field-studio">Field Studio</a>
      <a href="/evidence">Evidence</a>
      <a href="/technical-notes">Technical notes</a>
    </nav>
  </header>
  {@render children()}
  <footer>
    <p>{UNOFFICIAL}</p>
    <p>Miami-based. Prepared to relocate to San Francisco for this role.</p>
  </footer>
</div>

<style>
  .shell { max-width: 1080px; margin: 0 auto; padding: 1.25rem 1.4rem 4rem; }
  header {
    display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap;
    border-bottom: 1px solid var(--line); padding-bottom: 1rem; margin-bottom: 2.5rem;
    align-items: baseline;
  }
  .mark { font-family: var(--serif); font-size: 1.45rem; text-decoration: none; }
  nav { display: flex; gap: 1rem; font-size: 0.92rem; }
  nav a { text-decoration: none; }
  nav a:hover { border-bottom: 1px solid var(--ink); }
  footer { margin-top: 4rem; padding-top: 1rem; border-top: 1px solid var(--line); color: #444; font-size: 0.88rem; }
</style>

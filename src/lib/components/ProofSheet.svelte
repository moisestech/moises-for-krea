<script lang="ts">
  import type { ProofSheetData } from '$lib/content';

  let {
    sheet,
    large = false
  }: {
    sheet: ProofSheetData;
    large?: boolean;
  } = $props();
</script>

<figure class="sheet" class:large data-kind={sheet.kind}>
  <p class="stamp">{sheet.stamp}</p>
  <div class="grid">
    {#each sheet.cells as cell}
      <figure>
        <img src={cell.src} alt={cell.alt} />
        <figcaption>{cell.caption}</figcaption>
      </figure>
    {/each}
  </div>
  <figcaption class="caption">{sheet.caption}</figcaption>
</figure>

<style>
  .sheet {
    margin: 0;
    border: 1px solid var(--line);
    background: #fff;
    padding: 0.75rem;
  }
  .stamp {
    font-family: var(--mono);
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin: 0 0 0.75rem;
    color: var(--coral);
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
  .sheet figure { margin: 0; }
  img {
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    display: block;
    background: #ddd;
  }
  figcaption, .caption {
    font-family: var(--mono);
    font-size: 0.72rem;
    margin-top: 0.35rem;
  }
  .caption { margin: 0.75rem 0 0; }
  .large { padding: 1rem; }
  @media (max-width: 700px) {
    .grid { grid-template-columns: 1fr 1fr; }
  }
  @media (prefers-reduced-motion: reduce) {
    .sheet { animation: none; }
  }
</style>

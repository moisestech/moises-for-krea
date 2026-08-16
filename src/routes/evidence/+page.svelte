<script lang="ts">
  import { evidenceRows } from '$lib/content';
</script>

<h1>Evidence map</h1>
<p>Each Creative Lead responsibility maps to one inspectable proof. Claims are labeled.</p>

<div class="table-wrap">
  <table>
    <thead>
      <tr>
        <th>Role need</th>
        <th>Proof</th>
        <th>Claim</th>
      </tr>
    </thead>
    <tbody>
      {#each evidenceRows as row}
        <tr>
          <td>{row.roleNeed}</td>
          <td><a href={row.href}>{row.proof}</a></td>
          <td class="mono">{row.claim}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  h1 { font-family: var(--serif); font-weight: 400; font-size: 2.6rem; }
  .table-wrap { overflow-x: auto; }
  table { width: 100%; border-collapse: collapse; }
  th, td { text-align: left; padding: 0.7rem 0.6rem 0.7rem 0; border-bottom: 1px solid var(--line); vertical-align: top; }
  .mono { font-family: var(--mono); font-size: 0.78rem; text-transform: uppercase; }
</style>

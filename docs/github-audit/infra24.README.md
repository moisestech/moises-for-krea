# Infra24

Physical-digital workshop infrastructure: how a room, tools, and a curriculum become a program other people can run without the original operator standing in the doorway.

**2026.** Related: [Oolite Digital Lab](https://www.moises.tech/oolite-arts) · [AI24](https://www.ai24.live)

Infra24 is the software side of that field practice — workshops, lab operations, artist-facing tools, and a small set of Applied AI pilots (Memory Agent, network readiness). It is not a generic multi-tenant SaaS pitch.

## What a visitor should understand in 30 seconds

1. This came out of running a real digital lab and teaching artists, not out of a template.
2. Some retrieval/agent paths are shipped in app code; pgvector RAG and eval scoreboards are labeled honestly (see `docs/career-evidence/REPO_TRUTH_AUDIT.md`).
3. Demo paths: `/memory-agent`, `/applied-ai` (noindex), `/network/agent` (approval-gated).

## Quick start

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Verify without production secrets: `npm run verify:career`.

## Status labels

| Surface | Claim |
| --- | --- |
| Memory Agent hybrid retrieval | Shipped in app code |
| pgvector indexed RAG | Code present; live only after migration + sync + eval |
| Eval harness | Present; green scoreboard not claimed |

No placeholder screenshots. No “your name here.” Current year is 2026.

# GitHub signal repair

Krea will open the GitHub profile. Repair these before submit.

## Verified 2026-08-16

- `AI24-app` README on `main` is still the Supabase “Next.js Auth & User Management Starter” example. Replacement draft: `AI24-app.README.md`.
- `modern-runwayml` exists (`master`, description “Modern RunwayML Notes”) and has **no README** (raw 404). Draft: `modern-runwayml.README.md`. Archive or add the draft before Krea reviews the profile.
- `infra24` README is technically dense and install-led. Human-story rewrite: `infra24.README.md`.
- `agentic-evidence-pipeline` is public. Pin it. Do not pin `agentic-ops` until that repo is visible on the connected account.

1. `krea-field-studio` (this sprint)
2. `agentic-evidence-pipeline` — durable jobs, approval, audit trail
3. `comfyui-output-provenance` — already public creative-tech engineering
4. Do **not** pin `agentic-ops` until the repo is actually visible on the connected account

## AI24-app

If the README still reads like a Create Next App starter, replace the top with:

```md
# AI24-app

Studio and program surface for AI24 (education, tools, cultural R&D).

This repository is an application codebase, not a template.

- Live: https://www.ai24.live
- Context: https://www.moises.tech/ai24

If this checkout is stale or archival, say so in the first paragraph instead of leaving `npx create-next-app` instructions as the hero.
```

## modern-runwayml

Same rule. If it is a Runway starter clone:

- Rename the H1 to the actual experiment
- One paragraph: what it generated, when, what is still a tutorial leftover
- Or archive the repository and unpin it

## infra24

Replace placeholders and old dates. Lead with the human story:

```md
# Infra24

Physical-digital workshop infrastructure: how a room, tools, and curriculum become a program people can run without the original operator in the room.

- Current year: 2026
- Related: Oolite Digital Lab case study (https://www.moises.tech/oolite-arts)
- Related: AI24 (https://www.ai24.live)

Remove lorem, TODO screenshots, and “your name here” before a hiring manager lands.
```

## Profile README

Lead with Creative Lead proof (Field Studio + museum practice), then engineering leverage (AEP). Do not lead with a missing flagship.

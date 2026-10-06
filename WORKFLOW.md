# WORKFLOW

This file documents how work actually gets done on this repository — git conventions, verification steps, deployment, and how Victor and AI agents coordinate on the same `main` branch. `AGENTS.md` says *what* the rules are; this file says *how* changes get made in practice.

**This file must be kept current.** When the process changes — a new convention, a new recurring failure mode, a new document added to the repo — update this file in the same change, the same way `AGENTS.md` already asks for project-level decisions to be recorded.

## Who works on this repo

- **Victor** pushes directly to `main` — sometimes through git, sometimes via GitHub's web upload ("Add files via upload" commits). These can land at any time, including while an agent is mid-task.
- **AI agents** (multiple Claude Code sessions over time, not one continuous session) also work directly on `main`. A pull request was used once (`#1`) for a large batch of changes; day-to-day work happens as direct commits.

**Consequence: assume drift.** No agent session has continuous knowledge of the repo. `main` can and does move between one action and the next within the same task. Never trust an earlier `git status`/`git log` from more than a few minutes ago — re-check before committing.

## Standard loop for a non-trivial change

1. **Sync first.** `git fetch origin main` and compare against local before starting. If behind, pull/merge before making changes.
2. **Read the relevant docs** per `AGENTS.md`'s precedence order before touching structure, design or content — not just the ones that seem obviously relevant, since this repo's practice and its site keep evolving together.
3. **Audit before acting on ambiguous or structural requests.** When a request could be read multiple ways, or touches architecture/design/content decisions, report findings and a plan first; wait for explicit validation before implementing. This has been the working pattern for every non-trivial change in this repo's history (design direction, editorial rewrites, new sections) and it holds.
4. **Implement directly, without re-confirming, when the request is already concretely scoped** (an exact wording change, an exact file to add, an exact nav edit). Don't manufacture a planning step the request didn't ask for.
5. **Never invent facts.** Dates, credits, titles, biography, production status: mark unknowns as `TO VERIFY` / `TO ADD`, or ask, per `AGENTS.md`'s core rule. If something is missing to do a task well, say so explicitly rather than filling the gap.

## Verification before every commit

- `npm run typecheck`
- `npm run lint`
- `npm run build`

For anything touching layout, typography, or a new component: run `npm start -- -p <port>` locally and check it in an actual browser (Playwright/Chromium is available in this environment) at a desktop width (~1280px) and a mobile width (~390px). Confirm no horizontal overflow (`document.documentElement.scrollWidth === clientWidth` at both widths) before pushing anything that touches grid, position, or width rules.

Don't report a change as done on the strength of the build passing alone — the build does not catch a visual regression.

## Git conventions

- Work on `main` directly for normal changes. A branch + PR is fine for a large, reviewable batch, but isn't required for routine work.
- Before pushing: `git status` / `git fetch`. If `push` is rejected as non-fast-forward, **do not force-push**. Fetch, check whether the diverging commits touch the same files (`git diff --stat <local-base>..origin/main`), and:
  - no overlap → `git merge origin/main` (merge commit, not rebase — keeps everyone's history intact), re-run verification, then push;
  - real overlap → read both sides before merging; ask if resolving it would lose either side's intent.
- Never rewrite shared history (no `rebase`/`amend`/force-push on commits already pushed to `main`).
- Commit messages: a descriptive body explaining *why*, not just what. AI-authored commits end with:
  ```
  Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>
  Claude-Session: https://claude.ai/code/session_<id>
  ```

## Deployment

`.github/workflows/pages.yml` runs on every push to `main`: builds a static export (`GITHUB_PAGES=true`) and deploys to GitHub Pages. No manual deploy step exists or is needed — a successful push is a deploy.

**Known transient failure**: the deploy step can fail with `Failed to get ID Token... Request timeout` from GitHub's own OIDC service. This is infrastructure flakiness, not a code problem — the fix is to re-run the failed job (`rerun_failed_jobs` on the run), not to change anything in the repo. Confirm the re-run actually turns green before telling anyone the site is updated.

After any push, check the corresponding workflow run rather than assuming success — this repo's primary hosting decision is still open (see `next.config.ts`'s comment), and GitHub Pages here is explicitly a parallel preview path, not a guaranteed production target.

## Documentation map

Kept here so no single doc's "read first" list has to be the only place this is accurate. If you add a document to the repo, add it here in the same change.

| File | Governs |
|---|---|
| `AGENTS.md` | Operating rules for AI agents; source-of-truth precedence |
| `WORKFLOW.md` (this file) | How changes actually get made: git, verification, deploy, coordination |
| `PROJECT.md` | Architecture, navigation, scope, phase decisions |
| `DESIGN_SYSTEM.md` | Visual direction, interaction rules, the validated accident log |
| `CONTENT.md` | Factual artwork/biography content intended for or being prepared for the public site |
| `MEDIA_STATUS.md` | What media actually exists and its curation status |
| `ROADMAP.md` | Execution order only |
| `MANIFESTO.md` | Artistic operating principle — 90% order / 10% accident, non-explanation |
| `ARTISTIC_PROCESS.md` | Working method behind the manifesto: circulation, resonance protocol |
| `PROTOCOL_CIRCULATION.md` | Artistic protocol for garments circulating outside the studio |
| `CIRCULATION_CARD.md` | Operational paperwork template for a single circulation loan |
| `ARCHIVE_SYSTEM.md` | Physical/digital studio archive system (numbering, boxes, index) |
| `CREATION_CARD.md` | Per-creation archive card template used by `ARCHIVE_SYSTEM.md` |
| `README.md` | Repository entry point; must list the same read order as `AGENTS.md` |
| `biography/VICTOR_LE_MASTER_BIOGRAPHY.md` | Private/interpretive biographical source material — **never** publish from this directly; `CONTENT.md` is the source of truth for what's public |
| `l3xl3-film/L3XL3_FILM_SEQUENCE_00_COCOIT_GOURMET.md` | L3XL3 film working document: opening Cocoït Gourmet ritual and folding-bed deployment before the factory |
| `l3xl3-film/L3XL3_FILM_SEQUENCE_01_USINE.md` | L3XL3 film working document: detailed shot-by-shot opening factory sequence |
| `l3xl3-film/L3XL3_USINE_REFERENCES_VISUELLES.md` | L3XL3 film working visual-direction reference for the bandeau factory |
| `l3xl3-film/L3XL3_REFERENCES_CINEMA_ET_SPECTATEUR.md` | L3XL3 film references and spectator-engagement principle, including Beau Is Afraid |
| `l3xl3-film/L3XL3_PERSONNAGE_PIANISTE_RITUEL_DU_TEMPS.md` | L3XL3 pianist character development: timed daily ritual, piano practice, old-band collecting and encounter with the conductor |
| `l3xl3-film/L3XL3_PERSONNAGE_CHEF_CORPS_RITUEL.md` | L3XL3 conductor character development: body, beauty and hair rituals, ageing, old-band collecting and mirror with the pianist |

The last five (`PROTOCOL_CIRCULATION.md`, `CIRCULATION_CARD.md`, `ARCHIVE_SYSTEM.md`, `CREATION_CARD.md`, `biography/`) are studio-practice documents, not website specs — they matter for factual grounding (e.g. confirming a garment's real trajectory before writing copy about it) but don't drive site architecture or design.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Pharma Intelligence workflow

For development requests, follow `docs/workflow/README.md`. Astra Light
(`gpt-6-astra`, reasoning `low`) coordinates, plans, and reviews. Delegate research
to the five Luna High roles in `.codex/agents/` (`gpt-5.6-luna`, reasoning `high`).
The Development role also implements the resulting plan. Do not silently substitute models.
These instructions authorize subagent delegation for this workflow.

Read `docs/project/DATA-SOURCES.md` before every task and include its relevant
entries in every agent brief. User-specified data, sources, and APIs are binding.
Record new user instructions there before delegation. Where none are specified,
use clearly labeled synthetic mock data; never choose a live provider implicitly.

Persist requirements, briefs, final research, plans, implementation reports, and
reviews in `docs/workflow/runs/<task-id>/`. Consume completed reports only; do not
poll agents, inspect live transcripts, or read partial reports. Wait for completion
notifications. Follow runtime concurrency limits and reuse completed agents for
remaining roles if slots are retained. Do not drop any of the five research roles.

Research agents may write only their assigned reports. Only the Development
agent edits application code after Astra has saved the implementation plan.
Subagents must not recursively delegate. Astra reviews the final implementation
report and targeted diff/evidence as needed, then delegates corrections to Luna.
Never declare a task complete while required checks or acceptance criteria fail.

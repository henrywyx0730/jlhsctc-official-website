<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Codex Working Rules

- Always run `git status` before making changes.
- Explain the plan before editing files.
- Only modify files related to the task.
- Do not delete files unless explicitly asked.
- Do not commit automatically.
- Do not reset git history.
- Do not run destructive commands.
- If you need to install dependencies, run database migrations, delete files, kill processes, or change environment/config files, ask for approval first.
- After editing, list changed files and show the diff.
- Prefer minimal changes.
- Preserve existing functionality unless the task explicitly asks otherwise.

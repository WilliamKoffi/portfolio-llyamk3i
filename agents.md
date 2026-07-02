# Agent Notes

## Runtime

- Default runtime: `bun`
- Prefer `bun install`, `bun run <script>`, and `bunx <tool>`

## CLI Tools

Use these tools by default when they are available:

- `rg` for text search
- `fd` for file discovery
- `bat` for readable file output
- `jq` for JSON inspection
- `git` for diff, status, and history

## Working Style

- Prefer `rg --files` over slower file walkers
- Prefer `fd <name>` when locating files by pattern
- Prefer `bat --style=plain <file>` when reading files in the terminal
- Use `bun run lint`, `bun run build`, and other package scripts for verification

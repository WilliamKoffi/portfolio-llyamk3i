#!/usr/bin/env bash
set -euo pipefail

SRC="${PWD}/.devcontainer/keybindings.json"

TARGETS=(
  "$HOME/.vscode-remote/data/User/keybindings.json"
  "$HOME/.vscode-server/data/User/keybindings.json"
)

for TARGET in "${TARGETS[@]}"; do
  DIR="$(dirname "$TARGET")"
  mkdir -p "$DIR"

  if [ -f "$TARGET" ]; then
    cp "$TARGET" "$TARGET.backup"
  fi

  cp "$SRC" "$TARGET"
done

echo "Keybindings copied. Reload VS Code/Codespace if needed."

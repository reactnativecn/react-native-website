#!/usr/bin/env bash
set -euo pipefail

# Enhanced translation sync script that checks timing.
# If the upstream docs file is newer than the translated doc, it must be queued
# for re-translation and cannot be skipped.

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

PROGRESS_FILE="$REPO_ROOT/scripts/translate-progress.json"

# Ensure upstream exists
if ! git remote get-url upstream >/dev/null 2>&1; then
  echo "ERROR: missing upstream remote" >&2
  exit 2
fi

git fetch upstream --quiet

collect_targets() {
  if [ -d "$REPO_ROOT/cndocs" ]; then
    find "$REPO_ROOT/cndocs" -type f -name '*.md' -print | sed "s#^$REPO_ROOT/##"
  fi

  if [ -f "$PROGRESS_FILE" ]; then
    python3 -c "
import json
with open('$PROGRESS_FILE') as f:
    data = json.load(f)
for item in data.get('merged', []):
    print(item)
" 2>/dev/null || true
  fi

  changed_docs=$(git diff --name-only production..upstream/main -- 'docs/*.md' || true)
  if [ -n "${changed_docs}" ]; then
    while IFS= read -r source; do
      [ -z "$source" ] && continue
      target="cndocs/${source#docs/}"
      [ -f "$target" ] && echo "$target"
    done <<< "$changed_docs"
  fi
}

needs_update_count=0

while IFS= read -r target; do
  [ -z "$target" ] && continue

  source="docs/${target#cndocs/}"
  upstream_timestamp=$(git log -1 --format="%ct" upstream/main -- "$source" 2>/dev/null || echo 0)
  translation_timestamp=$(git log -1 --format="%ct" production -- "$target" 2>/dev/null || echo 0)

  if [ "$translation_timestamp" -eq 0 ] 2>/dev/null; then
    translation_timestamp=$(git log -1 --format="%ct" -- "$target" 2>/dev/null || echo 0)
  fi

  if [ "$upstream_timestamp" -gt "$translation_timestamp" ] 2>/dev/null; then
    echo "$target"
    needs_update_count=$((needs_update_count + 1))

    upstream_date=$(git log -1 --format="%cd" upstream/main -- "$source" 2>/dev/null || echo "N/A")
    translation_date=$(git log -1 --format="%cd" production -- "$target" 2>/dev/null || echo "N/A")
    if [ "$translation_date" = "N/A" ]; then
      translation_date=$(git log -1 --format="%cd" -- "$target" 2>/dev/null || echo "N/A")
    fi
    echo "# DEBUG: $target - Upstream: $upstream_date, Translation: $translation_date" >&2
  fi
done < <(collect_targets | sort -u)

if [ $needs_update_count -gt 0 ]; then
  echo "# Found $needs_update_count files needing translation update" >&2
else
  echo "# All translations are up to date" >&2
fi

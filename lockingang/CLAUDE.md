# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development (Vite dev server + Electron, concurrent)
npm run dev

# Production build (Vite + electron-builder)
npm run build

# Start packaged app
npm start
```

No test or lint scripts are currently configured.

## Architecture

**lockingang** is an AI-powered spaced-repetition desktop app (Electron + React frontend, Python backend). It models per-topic knowledge decay in real time and drives adaptive quizzing and scheduling.

### Three-Layer Stack

```
Electron (main process)          src/main/main.js
  └── React SPA (renderer)       src/renderer/   (Vite, port 5173)
        └── Python backend       src/backend/    (called via IPC / FastAPI)
```

The Electron main process loads the Vite dev server in development or `dist/index.html` in production. Context isolation is enabled; node integration is disabled. The preload script (`src/main/preload.js`) is currently a stub — no IPC bridge is implemented yet.

### Frontend (`src/renderer/`)

- **Router:** `index.jsx` uses `HashRouter` with 6 routes. Three routes (`/focus-tunnel`, `/templates`, `/calendar`) render `NotFoundScreen` — not yet implemented.
- **Screens:** `DashboardScreen`, `VectorGraphScreen` (knowledge graph), `ChatbotScreen`, `QuizScreen`, `ZenModeTimer`
- **Sidebar:** `components/Sidebar/Sidebar.jsx` — navigation between the 6 tabs
- **State:** `nodeStore.js` — lightweight reactive store for graph state (no Redux/Zustand)
- **Styling:** Tailwind CSS with a custom dark vector theme (`#0D0221` bg, `#7DF9FF` cyan), custom fonts "Press Start 2P" and "VT323"

### Python Backend (`src/backend/node_logic/`)

All backend state lives in a single module-level `_tree` instance of `KnowledgeTree`.

| File | Role |
|---|---|
| `node.py` | Atomic learning unit: mastery score, decay rate, quiz history, FAISS index per concept |
| `KnowledgeTree.py` | Directed graph: BFS traversal, wall detection, bridge generation, forgetting forecast |
| `main.py` | Public API (~50 functions) — the only file the frontend/IPC layer should call |

**Decay formula:** `live_score = stored_score × (1 − decay_rate) ^ days_elapsed`

**Node status thresholds:** blue > 0.7, yellow 0.3–0.7, red < 0.3

**Quiz answer scoring:** correct → mastery = 1.0, incorrect → mastery = 0.2

**Adaptive logic (Wall Detection):** 3+ fails on a child node while parent mastery > 0.7 → auto-generate bridge node → if bridge already exists, trigger grandparent reset (mastery → 0.0).

### Key External Integrations (planned)

- **SQLite + WAL mode** — persistence for nodes/edges (`data/lockingang.db`)
- **FAISS** — per-node local vector index (`data/faiss/<safe_title>.faiss`)
- **Pinecone** — cloud vector store for RAG chatbot
- **OpenAI API** — quiz generation, content analysis, summaries
- **Google Calendar API** — auto-schedule review blocks
- **Todoist API** — task sync
- **Transformers.js** (Web Worker) — local 768-float embeddings

### Implementation Status

**Backend `main.py`** — API surface is fully defined; these are stub `pass` bodies awaiting implementation:
- `startup()` / `shutdown()` — SQLite connect, node/edge hydration, FAISS reload
- `_persist_node()`, `_delete_node_from_db()`, `_persist_edge()`, `_delete_edge_from_db()` — all SQLite writes
- `run_decay_cycle()` — hourly background job + Google Calendar sync
- `rename_node()`, `delete_note()` — node mutation helpers
- Google Calendar event push/update/delete in `reschedule_quiz()` and `clear_scheduled_quiz()`

**Frontend** — screens are wireframed; the IPC/API bridge connecting React to the Python backend is not yet built.

## Docs

- `docs/PRD.md` — full product spec (authoritative source for feature requirements)
- `docs/techstack.md` — tech stack table
- `docs/design.md` — 6 design principles

`Week_4_RAG_Bot_site/` in the repo root is a separate standalone FastAPI/Flask RAG prototype, not part of the Electron app.

# XCSF Spec — X Clean Search Filter (MVP)

> Product: X Clean Search Filter (XCSF)  
> Goal: On X search results pages, visually dim accounts I already follow (or pending), so I can focus on new accounts to follow.  
> Platform: Chrome / Edge Extension (Manifest V3)  
> Stack: Plasmo + React + TypeScript  
> Built by: @Dylanning127199  
> Status: MVP v1

---

## 0) North Star

**When user browses X search results, followed (or pending) accounts are automatically dimmed.**  
No auto-follow. No hiding. No API dependence.

---

## 1) In-Scope / Out-of-Scope

### 1.1 In-Scope (MVP v1)
- Runs on:
  - `https://x.com/search*`
  - `https://twitter.com/search*` (compat)
- Dims followed/pending users in the search stream (opacity only).
- Works with infinite scroll.
- Works with SPA navigation (no reload).
- Adds a small, non-intrusive UI:
  - status + branding
  - toggle on/off (instant)

### 1.2 Out-of-Scope (explicitly NOT in v1)
- Auto follow / bulk actions / clicking buttons automatically
- “Follow back” detection
- Account analytics, exports, cloud sync, login, payment
- Mobile app support

---

## 2) UX / UI Spec

### 2.1 Dimming Rule
- For "followed" or "pending" user cells:
  - Apply `opacity: 0.30`
  - Optional: `filter: grayscale(1)`
- Constraints:
  - ❌ DO NOT use `display: none`
  - ❌ DO NOT set background colors
  - ✅ Opacity-based dimming only (Dark Mode safe)

### 2.2 Branding + Control UI
Preferred placement:
- **Right Sidebar (Search filters / trending column bottom)**  
  or  
- **Bottom-left toast (small, fixed, dismissible)**

UI content:
- Text: `XCSF Active · Built by @Dylanning127199`
- Toggle: ON/OFF dimming instantly
- Optional dismiss button (persist via storage)

---

## 3) X DOM Strategy (Stability Rules)

### 3.1 Golden Rules
- Prefer `data-testid`
- Prefer `aria-label`
- Never rely on X CSS class names
- Avoid `innerText` as sole signal

### 3.2 Candidate Containers
Primary:
- `[data-testid="UserCell"]`

Fallback:
- `div[data-testid="cellInnerDiv"]`
- `article[data-testid="tweet"]` (only if needed)

### 3.3 Follow State Detection (Priority)
1. Button with `data-testid$="-unfollow"` or similar
2. Button `aria-label` indicating following/pending
3. Structural/icon fallback (last resort)

### 3.4 Processed Marker
- `data-xcsf-processed="1"`
- `data-xcsf-state="followed|pending|not_followed"`

---

## 4) SPA Routing Patch (CRITICAL)

X is a Single Page Application.

### Required:
- Listen to:
  - `history.pushState`
  - `history.replaceState`
  - `popstate`
- Detect `window.location.href` change
- Re-run logic when entering `/search`

---

## 5) Performance & Infinite Scroll

- Use `MutationObserver`
- Batch processing:
  - Max ~50 nodes per cycle
  - Throttle via `requestAnimationFrame` or 100–200ms timer
- Avoid layout collapse

---

## 6) Storage (Minimal)

Use `chrome.storage.local` or Plasmo storage.

- `enabled: boolean` (default true)
- `showUi: boolean` (default true)

---

## 7) Acceptance Criteria

### Functional
- On X search results:
  - Followed/pending accounts are dimmed
  - Others unchanged
- Infinite scroll works correctly

### SPA
- Navigating from home → search (no reload) activates plugin
- Leaving search stops heavy processing

### UX
- No white screen
- Toggle works instantly
- Works in Light / Dim / Lights Out

---

## 8) Milestones

### M0 — Scaffold
- Init Plasmo project
- MV3 config + permissions
- Content script entry

### M1 — SPA Trigger
- URL change listener
- Start/stop on `/search`

### M2 — DOM Scan
- Detect UserCell
- Detect follow state
- Mark processed nodes

### M3 — Dimming
- Apply opacity-only dimming

### M4 — Infinite Scroll
- MutationObserver
- Throttle & batch

### M5 — UI
- Branding + toggle
- Storage

### M6 — Release
- README
- Package build

---

## 9) Guardrails

- No private API usage
- No auto actions
- No CSS classname dependency
- Keep MVP small

---

Built by **@Dylanning127199**

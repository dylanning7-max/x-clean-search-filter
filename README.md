# X Clean Search Filter

X Clean Search Filter (XCSF) is a lightweight Chrome/Edge extension that improves the X/Twitter search experience by visually dimming accounts you already follow or have pending follow status.

The goal is simple: when browsing X search results, XCSF helps you focus on discovering new accounts, projects, and ideas without hiding content or performing any automated actions.

> Status: MVP v1
> Platform: Chrome / Edge Extension, Manifest V3
> Stack: Plasmo + React + TypeScript

---

## Why this exists

X search is often used by developers, founders, creators, researchers, and community builders to discover new people and conversations.

However, search results can quickly become noisy when many accounts are already followed or already pending. XCSF reduces that noise by applying a subtle visual dimming effect to followed or pending accounts, while leaving everything else untouched.

This makes it easier to:

* discover new accounts to follow
* review search results more efficiently
* avoid repeatedly checking the same already-followed accounts
* keep the search flow lightweight and privacy-friendly

---

## Features

* Dims followed or pending accounts on X search result pages
* Supports `x.com/search*`
* Supports `twitter.com/search*` for compatibility
* Works with X’s single-page app navigation
* Works with infinite scroll
* Adds a small non-intrusive status UI
* Includes an instant ON/OFF toggle
* Uses opacity-based dimming only

---

## Privacy and Safety

XCSF is designed to be small, transparent, and safe.

It does **not**:

* use the X API
* auto-follow accounts
* auto-click buttons
* hide or delete content
* scrape private data
* sync data to a cloud server
* require login to any third-party service
* include analytics, tracking, or payment features

The extension only applies local visual changes on supported X/Twitter search pages.

---

## What it does not do

XCSF is intentionally limited in scope.

It does not provide:

* bulk follow/unfollow actions
* follow-back detection
* account analytics
* exports
* mobile app support
* cloud sync
* paid features

Keeping the scope small makes the extension easier to audit, maintain, and trust.

---

## Installation for development

Clone the repository:

```bash
git clone https://github.com/dylanning7-max/x-clean-search-filter.git
cd x-clean-search-filter
```

Install dependencies:

```bash
pnpm install
```

Start the development build:

```bash
pnpm dev
```

Then open your browser extension page:

* Chrome: `chrome://extensions`
* Edge: `edge://extensions`

Enable **Developer mode**, choose **Load unpacked**, and select the generated Plasmo build folder under `build/`.

---

## Build

Create a production build:

```bash
pnpm build
```

Package the extension:

```bash
pnpm package
```

---

## Development scripts

```bash
pnpm dev
```

Run the extension in development mode.

```bash
pnpm build
```

Create a production build.

```bash
pnpm package
```

Package the extension for distribution.

---

## Technical approach

XCSF runs as a browser extension content script on X/Twitter search pages.

The extension follows these principles:

* prefer stable DOM signals such as `data-testid` and `aria-label`
* avoid relying on unstable X CSS class names
* avoid destructive UI changes
* use opacity-based dimming only
* support SPA route changes
* support infinite scroll through batched DOM observation
* keep browser storage minimal

---

## Roadmap

Planned improvements:

* improve detection reliability as X DOM changes
* support more search result layouts, including tweet-stream search views
* refine the status panel UI
* add clearer debug information for maintainers
* add regression checks for DOM changes
* improve documentation and release notes

---

## Contributing

Contributions are welcome.

Good areas to help with:

* bug reports when X changes its DOM
* detection improvements for followed or pending accounts
* browser compatibility testing
* UI polish
* documentation improvements
* security and permission review

Please keep contributions aligned with the project’s safety rules:

* no auto-follow
* no bulk actions
* no private API usage
* no tracking
* no unnecessary permissions

---

## Disclaimer

This project is an independent open-source browser extension. It is not affiliated with, endorsed by, or sponsored by X Corp. or Twitter.

---

## License

ISC

---
title: Cutover Changelog
---

## 2025-03

### Improvements

- **Scan results** — Clearer breakdown of missing pages, redirect chains, and performance metrics. CSV export now includes Core Web Vitals.
- **UI** — Faster loading states and better handling of large result sets.

### Fixes

- Redirect validation no longer flags valid same-site redirects as broken.
- TTFB and LCP calculations corrected for edge cases when the target is slow to respond.

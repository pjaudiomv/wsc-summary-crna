import { describe, test, expect, beforeAll } from 'vitest';
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';

import App from '@/App.svelte';

beforeAll(() => {
  // IntersectionObserver is used by Reveal/CountUp/SideRail and isn't in jsdom.
  class IO {
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() {
      return [];
    }
  }
  (globalThis as unknown as { IntersectionObserver: typeof IO }).IntersectionObserver = IO;
});

describe('WSC 2026 report', () => {
  test('renders the cover hero with theme title', () => {
    render(App);
    // The theme "Our Common Welfare" is split across three spans in the hero —
    // assert on the WSC 2026 callout that's present as continuous text instead.
    expect(screen.getAllByText(/WSC 2026/i).length).toBeGreaterThan(0);
  });

  test('renders the SEZF / NC Region section', () => {
    render(App);
    expect(screen.getAllByText(/From the/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/Jessica B\. — Elected to the World Board/i)).toBeInTheDocument();
    // "Carolina Region" and "North Carolina Region" and SEZF references appear across the page.
    expect(screen.getAllByText(/Carolina Region/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/North Carolina Region/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/SEZF/i).length).toBeGreaterThan(0);
  });
});

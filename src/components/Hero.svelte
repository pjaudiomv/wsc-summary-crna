<script lang="ts">
  // Cover spread — Our Common Welfare hero.
  const spokes = [0, 1, 2, 3, 4, 5, 6, 7];
</script>

<section id="cover" class="relative isolate min-h-[100svh] overflow-hidden">
  <!-- diagonal rainbow stripes left margin -->
  <div class="absolute -top-12 -left-32 h-[140%] w-[28rem] origin-top-left rotate-[28deg]" aria-hidden="true">
    <div class="rainbow-band h-full w-full opacity-90"></div>
  </div>

  <!-- giant world map watermark -->
  <div class="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.08]" aria-hidden="true">
    <svg viewBox="0 0 1000 500" class="h-[80vh] w-auto">
      <circle cx="500" cy="250" r="220" fill="none" stroke="currentColor" stroke-width="1.5" />
      <ellipse cx="500" cy="250" rx="220" ry="80" fill="none" stroke="currentColor" stroke-width="1" />
      <ellipse cx="500" cy="250" rx="80" ry="220" fill="none" stroke="currentColor" stroke-width="1" />
      {#each spokes as i (i)}
        <line
          x1={500 - 220 * Math.cos((i * Math.PI) / 8)}
          y1={250 - 220 * Math.sin((i * Math.PI) / 8)}
          x2={500 + 220 * Math.cos((i * Math.PI) / 8)}
          y2={250 + 220 * Math.sin((i * Math.PI) / 8)}
          stroke="currentColor"
          stroke-width="0.6"
        />
      {/each}
    </svg>
  </div>

  <div class="relative z-10 flex min-h-[100svh] flex-col justify-between px-6 py-10 sm:px-12 sm:py-14 lg:px-20 lg:pt-20 lg:pb-12 lg:pl-12">
    <!-- Eyebrow -->
    <div class="rise flex flex-wrap items-baseline justify-between gap-4" style="animation-delay:0.05s">
      <div class="flex items-center gap-4">
        <span class="bg-ink inline-block h-px w-12"></span>
        <span class="text-ink font-mono text-[11px] tracking-[0.32em] uppercase">World Service Conference</span>
        <span class="bg-ink inline-block h-px w-12"></span>
      </div>
      <div class="text-ink/70 font-mono text-[11px] tracking-[0.28em] uppercase">2 May — 9 May · 2026</div>
    </div>

    <!-- Main display -->
    <div class="mt-10 lg:mt-8">
      <div class="rise relative" style="animation-delay:0.15s">
        <h1 class="font-groove stack-shadow text-[clamp(3.5rem,11vw,9rem)] leading-[0.85] tracking-tight">
          <span class="block italic">Our</span>
          <span class="block pl-[1.2em]">Common</span>
          <span class="block pl-[0.6em] italic">Welfare</span>
        </h1>
        <div class="absolute -top-6 right-2 hidden rotate-[8deg] sm:block">
          <div class="ticket wobble px-3 py-1 font-mono text-[10px] tracking-widest uppercase">DRAFT · v 2.0</div>
        </div>
      </div>

      <div class="rise mt-10 grid gap-8 lg:grid-cols-12" style="animation-delay:0.35s">
        <div class="lg:col-span-7">
          <div class="font-display text-ink text-3xl leading-tight sm:text-4xl">
            <span class="text-burgundy">WSC 2026</span> · Day-by-day decisions, surveys, motions and elections — <em class="text-teal">written up</em> for the Carolina Region members back home.
          </div>
          <p class="font-body text-ink-soft mt-6 max-w-xl text-lg leading-relaxed">
            148 voting members. 47 countries. 31 languages. 78,945 weekly meetings. A new strategic plan, two newly seated regions, and — for our neighbors next door in the North Carolina Region — a
            delegate elected to the World Board. This page collects what mattered and why.
          </p>
        </div>
        <div class="lg:col-span-5 lg:pt-2">
          <div class="ticket ticket-dashed inline-block px-5 py-4">
            <div class="text-ink/60 font-mono text-[10px] tracking-[0.22em] uppercase">a report from</div>
            <div class="mt-2 grid gap-2">
              <div>
                <div class="font-display text-burgundy text-2xl italic">Patrick J.</div>
                <div class="text-ink-soft font-mono text-[10px] tracking-[0.18em] uppercase">Regional Delegate · RD</div>
              </div>
              <div class="border-ink/15 border-t border-dashed pt-2">
                <div class="font-display text-burgundy text-2xl italic">Jody T.</div>
                <div class="text-ink-soft font-mono text-[10px] tracking-[0.18em] uppercase">Alternate Delegate · AD</div>
              </div>
            </div>
            <div class="text-tangerine border-ink/15 mt-3 flex items-center gap-2 border-t pt-3">
              <span class="bg-tangerine inline-block h-2 w-2 rounded-full"></span>
              <span class="font-mono text-[10px] tracking-widest uppercase">for the Carolina Region</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer pillars -->
    <div class="border-ink/20 rise mt-12 grid grid-cols-3 gap-6 border-t pt-6 lg:mt-0" style="animation-delay:0.55s">
      {#each [{ label: 'Recovery', tag: 'I.', color: 'text-tangerine' }, { label: 'Unity', tag: 'II.', color: 'text-teal' }, { label: 'Service', tag: 'III.', color: 'text-burgundy' }] as p (p.label)}
        <div>
          <div class="text-ink/50 font-mono text-[10px] tracking-widest uppercase">{p.tag}</div>
          <div class="font-display mt-1 text-2xl font-semibold {p.color}">{p.label}</div>
        </div>
      {/each}
    </div>

    <div class="border-ink/15 text-ink/60 mt-8 flex items-center justify-between border-t pt-4 font-mono text-[10px] tracking-widest uppercase">
      <span>50 years of the WSC · 1976 – 2026</span>
      <a href="#glance" class="group text-ink hover:text-burgundy inline-flex items-center gap-2">
        scroll <span class="transition-transform group-hover:translate-y-1">↓</span>
      </a>
    </div>
  </div>
</section>

<script lang="ts">
  import { onMount } from 'svelte';
  import { sections } from '@lib/data';

  let active = $state('cover');
  let mobileOpen = $state(false);

  onMount(() => {
    const observers: IntersectionObserver[] = [];
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (!el) continue;
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (e.isIntersecting && e.intersectionRatio > 0.18) active = s.id;
          }
        },
        { threshold: [0.18, 0.4, 0.6], rootMargin: '-25% 0px -45% 0px' }
      );
      io.observe(el);
      observers.push(io);
    }
    return () => observers.forEach((o) => o.disconnect());
  });

  function jump(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    mobileOpen = false;
  }
</script>

<!-- Desktop side rail -->
<aside class="border-ink/15 bg-paper-warm/60 fixed top-0 left-0 z-30 hidden h-screen w-[18rem] flex-col justify-between border-r px-7 py-8 backdrop-blur-sm lg:flex">
  <div>
    <a
      href="#cover"
      onclick={(e) => {
        e.preventDefault();
        jump('cover');
      }}
      class="block"
    >
      <div class="font-groove text-ink text-[1.6rem] leading-none tracking-tight">WSC <span class="text-tangerine">2026</span></div>
      <div class="text-ink-soft mt-2 font-mono text-[10px] tracking-[0.22em] uppercase">A Carolina Region Report</div>
      <div class="font-display text-burgundy mt-1 text-xs italic">by Patrick J., RD <span class="text-ink/60 not-italic">+</span> Jody T., AD</div>
    </a>
    <div class="mt-9 mb-3 flex items-center gap-2">
      <div class="bg-ink/30 h-px flex-1"></div>
      <span class="text-ink/60 font-mono text-[9px] tracking-[0.22em] uppercase">Contents</span>
      <div class="bg-ink/30 h-px flex-1"></div>
    </div>
    <nav>
      <ul class="space-y-[2px]">
        {#each sections as s (s.id)}
          <li>
            <button
              onclick={() => jump(s.id)}
              class="group flex w-full items-baseline gap-3 py-1.5 text-left transition-colors"
              class:text-burgundy={active === s.id}
              class:text-ink-soft={active !== s.id}
            >
              <span class="w-7 font-mono text-[10px] tracking-widest opacity-70">{s.short}</span>
              <span class="font-display text-[0.95rem] leading-tight transition-all" class:italic={active === s.id} class:font-semibold={active === s.id}>
                {s.label}
              </span>
              {#if active === s.id}
                <span class="text-tangerine ml-auto">●</span>
              {/if}
            </button>
          </li>
        {/each}
      </ul>
    </nav>
  </div>
  <div>
    <div class="rainbow-band h-1.5 w-full"></div>
    <div class="text-ink/60 mt-4 flex items-center justify-between font-mono text-[10px] tracking-widest uppercase">
      <span>1976</span>
      <span class="text-marigold">★</span>
      <span>50 yrs</span>
      <span class="text-marigold">★</span>
      <span>2026</span>
    </div>
    <div class="font-display text-ink/60 mt-2 text-[0.7rem] italic">One fellowship. One purpose.</div>
  </div>
</aside>

<!-- Mobile top bar -->
<header class="border-ink/15 bg-paper-warm/95 fixed top-0 right-0 left-0 z-40 flex items-center justify-between border-b px-5 py-3 backdrop-blur lg:hidden">
  <a
    href="#cover"
    onclick={(e) => {
      e.preventDefault();
      jump('cover');
    }}
    class="font-groove text-xl leading-none tracking-tight">WSC <span class="text-tangerine">2026</span></a
  >
  <button onclick={() => (mobileOpen = !mobileOpen)} class="font-mono text-[11px] tracking-widest uppercase">
    {mobileOpen ? 'Close' : 'Index'}
  </button>
</header>

{#if mobileOpen}
  <div class="bg-paper-warm/98 fixed inset-0 z-30 overflow-y-auto px-6 pt-20 pb-10 backdrop-blur lg:hidden">
    <ul class="space-y-1">
      {#each sections as s (s.id)}
        <li>
          <button onclick={() => jump(s.id)} class="flex w-full items-baseline gap-3 py-2 text-left">
            <span class="text-ink/60 w-7 font-mono text-[10px] tracking-widest">{s.short}</span>
            <span class="font-display text-lg" class:italic={active === s.id} class:text-burgundy={active === s.id}>{s.label}</span>
          </button>
        </li>
      {/each}
    </ul>
  </div>
{/if}

<script lang="ts">
  import Reveal from '@components/Reveal.svelte';
  import { failedMotions } from '@lib/data';

  function pctNum(s?: string) {
    if (!s) return 0;
    return parseFloat(s.replace('%', '')) || 0;
  }
</script>

<section id="failed" class="relative px-6 py-28 sm:px-12 lg:px-20 lg:pl-12">
  <div class="grid items-end gap-6 lg:grid-cols-12">
    <div class="lg:col-span-7">
      <Reveal>
        <div class="text-ink/60 font-mono text-[11px] tracking-[0.32em] uppercase">§ 06 · Failed & withdrawn</div>
        <h2 class="font-display text-ink mt-3 text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
          <span class="italic">What didn't</span> <span class="text-burgundy">pass.</span>
        </h2>
      </Reveal>
    </div>
    <div class="lg:col-span-5">
      <Reveal delay={120}>
        <p class="font-body text-ink-soft text-lg leading-relaxed">
          One CAR motion — <em class="text-burgundy">#5, AI Interpretation</em> — did not move forward. The body also withdrew one Moving Forward motion (auto-final at 80%) to be revisited at the Interim
          WSC. The discussions were as instructive as the votes.
        </p>
      </Reveal>
    </div>
  </div>

  <div class="mt-12 grid gap-6 lg:grid-cols-2">
    {#each failedMotions as m, i (m.id)}
      <Reveal delay={i * 120}>
        <article class="border-burgundy/60 bg-paper-warm/40 relative h-full overflow-hidden border-2 p-7">
          <div class="absolute top-3 right-3 rotate-[6deg]">
            <div class="border-burgundy bg-cream text-burgundy border-2 px-2 py-1 font-mono text-[10px] tracking-widest uppercase">
              {m.outcome === 'withdrawn' ? 'Withdrawn' : 'Not Adopted'}
            </div>
          </div>
          <div class="flex items-baseline gap-3">
            <span class="font-groove text-burgundy text-3xl leading-none">#{m.number}</span>
            <span class="text-ink/60 font-mono text-[10px] tracking-widest uppercase">{m.source}</span>
          </div>
          <h3 class="font-display text-ink mt-4 text-2xl leading-tight">{m.topic}</h3>
          <p class="font-body text-ink-soft mt-3 text-[15px] leading-relaxed">{m.motion}</p>
          {#if m.intent}
            <p class="border-burgundy font-display text-burgundy mt-3 border-l-2 pl-3 text-[14px] italic">{m.intent}</p>
          {/if}
          <div class="mt-5 space-y-1 font-mono text-[11px] tracking-widest uppercase">
            <div class="text-ink/70 flex items-baseline justify-between">
              <span>Initial Straw Poll</span>
              <span class="text-burgundy">{m.initialStraw} · {m.initialPct}</span>
            </div>
            <div class="bar-track relative mt-1 h-2 overflow-hidden">
              <div class="bg-burgundy/70 absolute inset-y-0 left-0" style="width:{pctNum(m.initialPct)}%"></div>
            </div>
            <div class="text-ink/60 text-[9px] tracking-normal normal-case">{m.initialNote}</div>
          </div>
        </article>
      </Reveal>
    {/each}
  </div>

  <Reveal delay={300} class="mt-12">
    <div class="border-ink/15 grid gap-6 border-t pt-8 lg:grid-cols-12">
      <div class="lg:col-span-5">
        <h3 class="font-display text-ink text-2xl"><em>The AI interpretation question.</em></h3>
      </div>
      <div class="lg:col-span-7">
        <p class="font-body text-ink-soft text-base leading-relaxed">
          Motion #5 — replace human live language interpretation with AI — failed at the Initial Straw Poll with only 18.32% support. The body then voted <em class="text-ink">not</em> to proceed to amendments
          (challenged by 92–37; the cofacilitator decision stood at 70.23%). Two amendments had been prepared — Arkansas et al. would have made it a research/pilot for CP webinars only, and Brazil Region
          would have made it a feasibility study supporting interpreters at future conferences. Neither was heard.
        </p>
      </div>
    </div>
  </Reveal>
</section>

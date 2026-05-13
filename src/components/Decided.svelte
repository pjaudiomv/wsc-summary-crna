<script lang="ts">
  import Reveal from '@components/Reveal.svelte';
  import { adoptedMotions, motion3Amendments } from '@lib/data';
  import type { Motion } from '@lib/data';

  let filter = $state<'all' | 'car' | 'cat' | 'mf'>('all');
  const filtered = $derived(filter === 'all' ? adoptedMotions : adoptedMotions.filter((m) => m.tag === filter));

  const tagLabel = (t?: Motion['tag']) => (t === 'car' ? 'CAR' : t === 'cat' ? 'CAT' : 'MF');
  const tagColor = (t?: Motion['tag']) => (t === 'car' ? 'border-burgundy text-burgundy' : t === 'cat' ? 'border-teal-deep text-teal-deep' : 'border-plum text-plum');

  function pctNum(s?: string) {
    if (!s) return 0;
    return parseFloat(s.replace('%', '')) || 0;
  }
</script>

<section id="decided" class="relative px-6 py-28 sm:px-12 lg:px-20 lg:pl-12">
  <div class="grid items-end gap-6 lg:grid-cols-12">
    <div class="lg:col-span-7">
      <Reveal>
        <div class="text-ink/60 font-mono text-[11px] tracking-[0.32em] uppercase">§ 05 · Adopted motions</div>
        <h2 class="font-display text-ink mt-3 text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
          <span class="italic">What we</span> <span class="scribble">decided</span><span class="text-burgundy">.</span>
        </h2>
      </Reveal>
    </div>
    <div class="lg:col-span-5">
      <Reveal delay={120}>
        <p class="font-body text-ink-soft text-lg leading-relaxed">
          22 motions adopted across CAR (Conference Agenda Report) and CAT (Conference Approval Track), most with the results of the initial straw poll alone. Two more from <em>Moving Forward</em>.
          Below — every adopted motion, in full, with the consensus or final vote that put it through.
        </p>
      </Reveal>
    </div>
  </div>

  <Reveal delay={200}>
    <div class="border-ink/20 mt-10 flex flex-wrap items-center justify-between gap-4 border-y py-4">
      <div class="flex flex-wrap gap-1.5">
        {#each [{ v: 'all', label: 'All adopted', count: adoptedMotions.length }, { v: 'car', label: 'CAR', count: adoptedMotions.filter((m) => m.tag === 'car').length }, { v: 'cat', label: 'CAT · project plans + policy', count: adoptedMotions.filter((m) => m.tag === 'cat').length }, { v: 'mf', label: 'Moving Forward', count: adoptedMotions.filter((m) => m.tag === 'mf').length }] as f (f.v)}
          <button
            onclick={() => (filter = f.v as typeof filter)}
            class="group flex items-baseline gap-2 border px-3 py-1.5 font-mono text-[11px] tracking-widest uppercase transition-all"
            class:bg-ink={filter === f.v}
            class:text-cream={filter === f.v}
            class:border-ink={filter === f.v}
            class:bg-paper={filter !== f.v}
            class:text-ink={filter !== f.v}
          >
            {f.label}
            <span class="text-[10px] opacity-70">({f.count})</span>
          </button>
        {/each}
      </div>
      <div class="text-ink/50 font-mono text-[10px] tracking-widest uppercase">consensus ≥ 80% · strong support ≥ 66%</div>
    </div>
  </Reveal>

  <div class="mt-10 grid gap-5 md:grid-cols-2">
    {#each filtered as m, i (m.id)}
      <Reveal delay={Math.min(i * 35, 400)}>
        <article class="ticket relative h-full px-6 py-5">
          <div class="border-ink/30 flex items-baseline justify-between border-b border-dashed pb-3">
            <div class="flex items-baseline gap-3">
              <span class="font-groove text-tangerine text-[1.6rem] leading-none">#{m.number}</span>
              <span class="inline-block border {tagColor(m.tag)} px-1.5 py-0.5 font-mono text-[9px] tracking-widest uppercase">{tagLabel(m.tag)}</span>
            </div>
            <div class="text-ink/50 text-right font-mono text-[10px] tracking-widest uppercase">{m.source}</div>
          </div>
          <h3 class="font-display text-ink mt-3 text-xl leading-snug">{m.topic}</h3>
          <p class="font-body text-ink-soft mt-2 text-[14px] leading-relaxed">{m.motion}</p>
          {#if m.intent}
            <p class="border-marigold font-display text-ink-soft mt-3 border-l-2 pl-3 text-[14px] italic">
              <strong class="text-burgundy not-italic">Intent.</strong>
              {m.intent}
            </p>
          {/if}

          <!-- Vote bar -->
          <div class="mt-4 space-y-2 font-mono text-[10px] tracking-widest uppercase">
            {#if m.initialStraw}
              <div>
                <div class="text-ink/70 flex items-baseline justify-between">
                  <span>Initial Straw Poll</span>
                  <span class="text-ink">{m.initialStraw} · {m.initialPct}</span>
                </div>
                <div class="bar-track relative mt-1 h-2 overflow-hidden">
                  <div class="bg-teal-deep absolute inset-y-0 left-0" style="width:{pctNum(m.initialPct)}%"></div>
                </div>
                <div class="text-ink/50 mt-1 text-[9px]">{m.initialNote}</div>
              </div>
            {/if}
            {#if m.finalVote}
              <div>
                <div class="text-ink/70 flex items-baseline justify-between">
                  <span>Final Vote</span>
                  <span class="text-burgundy">{m.finalVote} · {m.finalPct}</span>
                </div>
                <div class="bar-track relative mt-1 h-2 overflow-hidden">
                  <div class="bg-burgundy absolute inset-y-0 left-0" style="width:{pctNum(m.finalPct)}%"></div>
                </div>
                <div class="text-burgundy mt-1 text-[9px]">{m.finalNote}</div>
              </div>
            {/if}
          </div>
        </article>
      </Reveal>
    {/each}
  </div>

  <!-- Motion 3 amendments side-story -->
  <Reveal delay={200} class="mt-16">
    <div class="bg-paper-warm/60 relative overflow-hidden px-6 py-8 sm:px-10">
      <div class="rainbow-band absolute -top-2 right-0 left-0 h-1.5 opacity-90"></div>
      <div class="grid gap-6 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <div class="text-ink/60 font-mono text-[10px] tracking-widest uppercase">Side-bar · the closest fight of the week</div>
          <h3 class="font-display text-ink mt-2 text-3xl"><span class="italic">Four amendments</span> to Motion #3.</h3>
          <p class="font-body text-ink-soft mt-3 text-[15px] leading-relaxed">
            WCNA every 5 years passed — but four different amendments tried to change the cycle, set the location, or move to a zonal bidding process. None reached strong support. Here's what was
            tried, by whom, and where the vote landed.
          </p>
        </div>
        <div class="lg:col-span-7">
          <ul class="divide-ink/15 divide-y">
            {#each motion3Amendments as a (a.id)}
              <li class="grid gap-2 py-4 lg:grid-cols-12">
                <div class="text-burgundy font-mono text-[10px] tracking-widest uppercase lg:col-span-3">{a.id} · {a.maker.split(' (')[0]}</div>
                <div class="font-body text-ink text-[14px] leading-relaxed lg:col-span-7">{a.summary}</div>
                <div class="text-ink/70 font-mono text-[11px] lg:col-span-2 lg:text-right">
                  <div class="text-ink">{a.finalPct}</div>
                  <div class="text-ink/50">{a.outcome}</div>
                </div>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </Reveal>
</section>

<script lang="ts">
  import Reveal from '@components/Reveal.svelte';
  import { carSurveyResults } from '@lib/data';

  type Row = { label: string; delegate: number; member: number; recommended?: boolean };
  const groups: { id: string; title: string; sub: string; rows: Row[] }[] = [
    { id: 'newLit', title: 'New Recovery Literature', sub: 'Choose up to 2', rows: carSurveyResults.newLit },
    { id: 'revisedLit', title: 'Revised Recovery Literature', sub: 'Choose up to 2', rows: carSurveyResults.revisedLit },
    { id: 'newService', title: 'New Service Material', sub: 'Choose up to 2', rows: carSurveyResults.newService },
    { id: 'revisedService', title: 'Revised Service Material', sub: 'Choose up to 2', rows: carSurveyResults.revisedService },
    { id: 'idts', title: 'Issue Discussion Topics', sub: 'Choose up to 2', rows: carSurveyResults.idts }
  ];

  let active = $state('newLit');
  const current = $derived(groups.find((g) => g.id === active)!);
</script>

<section id="survey" class="relative px-6 py-28 sm:px-12 lg:px-20 lg:pl-12">
  <div class="grid items-end gap-6 lg:grid-cols-12">
    <div class="lg:col-span-7">
      <Reveal>
        <div class="text-ink/60 font-mono text-[11px] tracking-[0.32em] uppercase">§ 07 · CAR survey results</div>
        <h2 class="font-display text-ink mt-3 text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
          <span class="italic">What members</span> <span class="scribble">prioritized</span><span class="text-burgundy">.</span>
        </h2>
      </Reveal>
    </div>
    <div class="lg:col-span-5">
      <Reveal delay={120}>
        <p class="font-body text-ink-soft text-lg leading-relaxed">
          <strong class="text-ink">9,188</strong> member responses in <strong class="text-ink">15 languages</strong>, plus <strong class="text-ink">53</strong> delegate responses. These two lines — delegate
          and member — set the priorities for every project plan that followed.
        </p>
      </Reveal>
    </div>
  </div>

  <Reveal delay={200}>
    <div class="border-ink/20 mt-10 flex flex-wrap gap-1.5 border-y py-4">
      {#each groups as g (g.id)}
        <button
          onclick={() => (active = g.id)}
          class="border px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase transition-all"
          class:bg-ink={active === g.id}
          class:text-cream={active === g.id}
          class:border-ink={true}
          class:bg-paper={active !== g.id}
          class:text-ink={active !== g.id}
        >
          {g.title}
        </button>
      {/each}
    </div>
  </Reveal>

  <Reveal delay={250} class="mt-10">
    <div class="grid gap-8 lg:grid-cols-12">
      <div class="lg:col-span-3">
        <div class="font-display text-burgundy text-3xl italic">{current.title}</div>
        <div class="text-ink/60 mt-2 font-mono text-[10px] tracking-widest uppercase">{current.sub}</div>
        <div class="mt-5 flex items-center gap-3 font-mono text-[10px] tracking-widest uppercase">
          <span class="inline-flex items-center gap-1.5"><span class="bg-teal-deep inline-block h-2 w-4"></span>delegates</span>
          <span class="inline-flex items-center gap-1.5"><span class="bg-tangerine inline-block h-2 w-4"></span>members</span>
        </div>
        <div class="border-marigold/60 bg-marigold/20 text-ink mt-4 inline-block border px-3 py-1.5 font-mono text-[10px] tracking-widest uppercase">▢ wb recommended</div>
      </div>
      <div class="lg:col-span-9">
        <ul class="space-y-3">
          {#each current.rows as r (r.label)}
            <li class="grid grid-cols-[1fr_auto] items-center gap-4">
              <div>
                <div class="flex items-baseline gap-2">
                  <span class="font-display text-ink text-[15px]">{r.label}</span>
                  {#if r.recommended}
                    <span class="border-marigold bg-marigold/30 text-ink border px-1.5 py-0.5 font-mono text-[8px] tracking-widest uppercase">WB rec</span>
                  {/if}
                </div>
                <div class="mt-1.5 space-y-1">
                  <div class="bar-track relative h-2 overflow-hidden">
                    <div class="bg-teal-deep absolute inset-y-0 left-0 transition-[width] duration-700" style="width:{r.delegate * 1.8}%"></div>
                  </div>
                  <div class="bar-track relative h-2 overflow-hidden">
                    <div class="bg-tangerine absolute inset-y-0 left-0 transition-[width] duration-700" style="width:{r.member * 1.8}%"></div>
                  </div>
                </div>
              </div>
              <div class="text-ink/70 font-mono text-[11px] tracking-widest">
                <div class="text-teal-deep">{r.delegate}%</div>
                <div class="text-tangerine">{r.member}%</div>
              </div>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </Reveal>
</section>

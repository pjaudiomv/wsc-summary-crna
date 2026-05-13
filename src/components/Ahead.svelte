<script lang="ts">
  import Reveal from '@components/Reveal.svelte';

  const projects = [
    { name: 'Fellowship Awareness & PR', tag: 'PR', pri: 'High', votes: '95H · 38M · 5L' },
    { name: 'Three-Year Conference Cycle', tag: 'Process', pri: 'High', votes: '97H · 25M · 20L' },
    { name: 'Raising Public Awareness of NA', tag: 'PR', pri: 'High', votes: '88H · 40M · 10L' },
    { name: 'Safety & Gender-Neutral Language', tag: 'Literature', pri: 'High', votes: '81H · 35M · 24L' },
    { name: 'DRT/MAT — Helping Members Take Root', tag: 'Recovery', pri: 'Medium', votes: '68H · 45M · 26L' },
    { name: 'Issue Discussion Topics', tag: 'Service', pri: 'Medium', votes: '65H · 53M · 22L' },
    { name: 'New & Revised Service Tools', tag: 'Service', pri: 'Medium', votes: '62H · 51M · 25L' },
    { name: 'Revising Existing Recovery IPs', tag: 'Literature', pri: 'Medium', votes: '56H · 57M · 26L' },
    { name: 'Generational & Cultural Diversity', tag: 'Service', pri: 'Medium', votes: '48H · 52M · 38L' },
    { name: 'New Recovery Informational Pamphlets', tag: 'Literature', pri: 'Medium', votes: '46H · 45M · 48L' }
  ];

  const tagColor = (t: string) =>
    t === 'PR'
      ? 'border-tangerine text-tangerine'
      : t === 'Literature'
        ? 'border-burgundy text-burgundy'
        : t === 'Service'
          ? 'border-teal-deep text-teal-deep'
          : t === 'Recovery'
            ? 'border-plum text-plum'
            : 'border-ink text-ink';
</script>

<section id="ahead" class="relative px-6 py-28 sm:px-12 lg:px-20 lg:pl-12">
  <div class="grid items-end gap-6 lg:grid-cols-12">
    <div class="lg:col-span-7">
      <Reveal>
        <div class="text-ink/60 font-mono text-[11px] tracking-[0.32em] uppercase">§ 11 · Strategic plan & focus areas</div>
        <h2 class="font-display text-ink mt-3 text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
          <span class="italic">The road</span> <span class="text-burgundy">ahead.</span>
        </h2>
      </Reveal>
    </div>
    <div class="lg:col-span-5">
      <Reveal delay={120}>
        <p class="font-body text-ink-soft text-lg leading-relaxed">
          Ten project plans were prioritized for the 2026–2029 cycle. The collaborative planning process behind them was the most-praised part of the conference: <em class="text-burgundy"
            >“This is the most transparency I've seen.”</em
          >
        </p>
      </Reveal>
    </div>
  </div>

  <Reveal delay={200} class="mt-12">
    <div class="grid gap-2">
      {#each projects as p, i (p.name)}
        <article class="border-ink/10 grid items-center gap-3 border-b py-3 md:grid-cols-[2.2rem_1.2fr_8rem_5rem_1fr]">
          <span class="text-ink/40 font-mono text-[10px] tracking-widest uppercase">{String(i + 1).padStart(2, '0')}</span>
          <span class="font-display text-ink text-lg">{p.name}</span>
          <span class="inline-block w-fit border {tagColor(p.tag)} px-2 py-0.5 font-mono text-[9px] tracking-widest uppercase">{p.tag}</span>
          <span class="font-mono text-[10px] tracking-widest uppercase" class:text-tangerine={p.pri === 'High'} class:text-ink-soft={p.pri !== 'High'}>{p.pri} priority</span>
          <span class="text-ink-soft font-mono text-[10px] tracking-widest uppercase">{p.votes}</span>
        </article>
      {/each}
    </div>
  </Reveal>

  <Reveal delay={300} class="mt-16">
    <div class="border-ink/15 grid gap-8 border-t pt-10 lg:grid-cols-12">
      <div class="lg:col-span-5">
        <h3 class="font-display text-ink text-3xl"><em>Future focus areas.</em></h3>
        <p class="font-body text-ink-soft mt-3 text-base leading-relaxed">
          Beyond the funded project plans, the World Board signaled five themes as ongoing focus for the cycle. Expect IDTs, webinars, and CAR Survey items on each of these between now and WSC 2029.
        </p>
      </div>
      <div class="grid gap-3 sm:grid-cols-2 lg:col-span-7">
        {#each [{ t: 'Mentorship in Service', d: 'How do we welcome, mentor, and develop new trusted servants?' }, { t: 'Welcoming Newcomers', d: 'How do we move from theory to action at the group level?' }, { t: 'Virtual Meetings & Resources', d: 'Where do virtual groups fit in the NA service structure?' }, { t: 'Group & Area Service Support', d: 'Modernize The Group Booklet and the Guide to Local Services.' }, { t: 'Safety, Belonging & Respect', d: 'Make NA literature and communications welcoming to every member.' }] as f (f.t)}
          <div class="border-marigold border-l-2 pl-4">
            <div class="font-display text-ink text-lg font-semibold">{f.t}</div>
            <p class="font-body text-ink-soft mt-1 text-[14px] leading-relaxed">{f.d}</p>
          </div>
        {/each}
      </div>
    </div>
  </Reveal>
</section>

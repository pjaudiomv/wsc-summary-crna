<script lang="ts">
  import Reveal from '@components/Reveal.svelte';
  import { discussionSummaries, newIdeaTop } from '@lib/data';

  const stripes = ['bg-tangerine', 'bg-teal', 'bg-burgundy', 'bg-plum'];
</script>

<section id="discussions" class="relative px-6 py-28 sm:px-12 lg:px-20 lg:pl-12">
  <div class="grid items-end gap-6 lg:grid-cols-12">
    <div class="lg:col-span-7">
      <Reveal>
        <div class="text-ink/60 font-mono text-[11px] tracking-[0.32em] uppercase">§ 08 · New Idea discussions</div>
        <h2 class="font-display text-ink mt-3 text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
          <span class="italic">New</span> <span class="text-burgundy">conversations.</span>
        </h2>
      </Reveal>
    </div>
    <div class="lg:col-span-5">
      <Reveal delay={120}>
        <p class="font-body text-ink-soft text-lg leading-relaxed">
          Friday afternoon was given to the four highest-prioritized New Idea topics. None of them produced a vote — they were dialogue, on purpose. The themes will shape what shows up on the next CAR
          Survey.
        </p>
      </Reveal>
    </div>
  </div>

  <div class="mt-12 grid gap-6 md:grid-cols-2">
    {#each discussionSummaries as d, i (d.title)}
      <Reveal delay={i * 100}>
        <article class="bg-cream/80 relative h-full px-7 py-6">
          <div class="absolute top-0 left-0 h-1 w-full {stripes[i]}"></div>
          <div class="text-ink/60 font-mono text-[10px] tracking-widest uppercase">Topic 0{i + 1}</div>
          <h3 class="font-display text-ink mt-2 text-2xl leading-tight italic">{d.title}</h3>
          <div class="border-ink/30 mt-4 border-t border-dashed pt-3">
            <div class="text-ink/60 font-mono text-[9px] tracking-widest uppercase">Questions asked</div>
            <ul class="font-body text-ink mt-2 list-disc space-y-1 pl-5 text-[14px] leading-relaxed">
              {#each d.questions as q (q)}
                <li>{q}</li>
              {/each}
            </ul>
          </div>
          <p class="font-body text-ink-soft mt-4 text-[15px] leading-relaxed">{d.body}</p>
          <p class="border-tangerine font-display text-burgundy mt-4 border-l-2 pl-3 text-[15px] italic">{d.quote}</p>
        </article>
      </Reveal>
    {/each}
  </div>

  <Reveal delay={300} class="mt-16">
    <div class="border-ink/15 border-t pt-10">
      <div class="grid items-end gap-6 lg:grid-cols-12">
        <div class="lg:col-span-7">
          <h3 class="font-display text-ink text-3xl"><em>The top of the New Idea ballot.</em></h3>
          <p class="font-body text-ink-soft mt-3 max-w-2xl text-base leading-relaxed">
            55+ proposals were submitted; participants prioritized them by Yes/No on whether they wanted to discuss Friday. Below — the highest-ranked ideas. Yes votes lead the bar; the rest were
            committed to future cycles.
          </p>
        </div>
      </div>
      <div class="mt-8 grid gap-3">
        {#each newIdeaTop as p, i (p.proposal)}
          <Reveal delay={i * 40}>
            <div class="border-ink/15 bg-paper/80 grid items-center gap-3 border px-4 py-3 md:grid-cols-[3rem_10rem_1fr_8rem]">
              <div class="text-tangerine font-mono text-[10px] tracking-widest uppercase">#{String(i + 1).padStart(2, '0')}</div>
              <div class="text-ink/60 font-mono text-[10px] tracking-widest uppercase">{p.maker} · {p.topic}</div>
              <div class="font-body text-ink text-[14px] leading-snug">{p.proposal}</div>
              <div class="flex items-center gap-2 font-mono text-[10px] tracking-widest">
                <div class="bar-track relative h-3 w-20 overflow-hidden">
                  <div class="bg-teal-deep absolute inset-y-0 left-0" style="width:{(p.yes / (p.yes + p.no)) * 100}%"></div>
                </div>
                <span class="text-teal-deep">{p.yes}</span><span class="text-ink/30">·</span><span class="text-burgundy">{p.no}</span>
              </div>
            </div>
          </Reveal>
        {/each}
      </div>
    </div>
  </Reveal>
</section>

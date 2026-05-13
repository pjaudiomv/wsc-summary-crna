<script lang="ts">
  import Reveal from '@components/Reveal.svelte';
  import CountUp from '@components/CountUp.svelte';
  import { budget, meetingsByRegion } from '@lib/data';

  const palette: Record<string, string> = {
    'Literature Production & Distribution': 'bg-burgundy',
    'Fellowship Development': 'bg-teal-deep',
    'World Service Conference Support': 'bg-tangerine',
    Events: 'bg-marigold'
  };

  const maxCount = $derived(Math.max(...meetingsByRegion.map((r) => r.count)));
</script>

<section id="budget" class="relative px-6 py-28 sm:px-12 lg:px-20 lg:pl-12">
  <div class="grid items-end gap-6 lg:grid-cols-12">
    <div class="lg:col-span-7">
      <Reveal>
        <div class="text-ink/60 font-mono text-[11px] tracking-[0.32em] uppercase">§ 10 · Budget & numbers</div>
        <h2 class="font-display text-ink mt-3 text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
          <span class="italic">The</span> <span class="scribble">numbers</span><span class="text-burgundy">.</span>
        </h2>
      </Reveal>
    </div>
    <div class="lg:col-span-5">
      <Reveal delay={120}>
        <p class="font-body text-ink-soft text-lg leading-relaxed">
          NA World Services proposed a $26.8M three-year expense budget against $25.8M income — a planned <strong class="text-burgundy">-$1.07M</strong>. Adopted Motion #16 with 86% consensus support.
          The honest story is that <em class="text-ink">literature funds three-quarters of world services</em> and that math is getting harder.
        </p>
      </Reveal>
    </div>
  </div>

  <div class="mt-12 grid gap-6 lg:grid-cols-3">
    {#each [{ label: 'Total operating income · 2029', value: budget.totalIncome, color: 'text-teal-deep' }, { label: 'Total expenses · 2029', value: budget.totalExpenses, color: 'text-burgundy' }, { label: 'Excess revenue (expense)', value: budget.excessRevenue, color: 'text-tangerine' }] as c (c.label)}
      <Reveal>
        <div class="border-ink/15 bg-cream/60 border p-7">
          <div class="text-ink/60 font-mono text-[10px] tracking-widest uppercase">{c.label}</div>
          <div class="font-groove mt-2 text-5xl leading-none {c.color}">{c.value}</div>
        </div>
      </Reveal>
    {/each}
  </div>

  <div class="mt-10 grid gap-10 lg:grid-cols-12">
    <Reveal class="lg:col-span-7">
      <h3 class="font-display text-ink text-2xl">Where the money goes.</h3>
      <p class="font-body text-ink-soft mt-2 text-[15px]">3-year projections, July 2026 – June 2029.</p>
      <ul class="mt-5 space-y-4">
        {#each budget.expensesBreakdown as e (e.area)}
          <li>
            <div class="flex items-baseline justify-between font-mono text-[11px] tracking-widest uppercase">
              <span class="text-ink">{e.area}</span>
              <span class="text-ink/70">{e.total} · {e.pct}%</span>
            </div>
            <div class="bar-track relative mt-1.5 h-3 overflow-hidden">
              <div class="absolute inset-y-0 left-0 {palette[e.area]} transition-[width] duration-700" style="width:{e.pct}%"></div>
            </div>
          </li>
        {/each}
      </ul>
    </Reveal>

    <Reveal delay={120} class="lg:col-span-5">
      <div class="bg-ink text-cream p-8">
        <div class="text-marigold font-mono text-[10px] tracking-widest uppercase">Seventh tradition · in action</div>
        <h3 class="font-display mt-2 text-3xl italic">Fellowship contributions</h3>
        <div class="mt-6 grid grid-cols-2 gap-5">
          <div>
            <div class="font-groove text-marigold text-4xl leading-none">$2.09<span class="text-marigold/70 text-2xl">M</span></div>
            <div class="text-cream/70 mt-1 font-mono text-[10px] tracking-widest uppercase">FY 2025</div>
          </div>
          <div>
            <div class="font-groove text-marigold text-4xl leading-none">$15.4<span class="text-marigold/70 text-2xl">M</span></div>
            <div class="text-cream/70 mt-1 font-mono text-[10px] tracking-widest uppercase">10-year total</div>
          </div>
          <div>
            <div class="font-groove text-marigold text-4xl leading-none"><CountUp to={budget.recurringContributors} /></div>
            <div class="text-cream/70 mt-1 font-mono text-[10px] tracking-widest uppercase">Recurring contributors</div>
          </div>
          <div>
            <div class="font-groove text-marigold text-4xl leading-none"><CountUp to={budget.groupsContributed} /></div>
            <div class="text-cream/70 mt-1 font-mono text-[10px] tracking-widest uppercase">Groups contributed</div>
          </div>
        </div>
        <div class="border-cream/15 font-display text-cream/85 mt-6 border-t pt-4 text-base italic">“If 20,000 members gave $25/month, we come close to being truly self-sustaining.”</div>
        <div class="text-cream/60 mt-3 font-mono text-[10px] tracking-widest uppercase">
          Cost per meeting / year: <span class="text-marigold">{budget.costPerMeetingYear}</span>
        </div>
      </div>
    </Reveal>
  </div>

  <Reveal delay={200} class="mt-16">
    <div class="border-ink/15 border-t pt-10">
      <div class="grid gap-6 lg:grid-cols-12">
        <div class="lg:col-span-4">
          <h3 class="font-display text-ink text-3xl"><em>NA meetings around the world.</em></h3>
          <p class="font-body text-ink-soft mt-3 text-base leading-relaxed">
            78,945 weekly meetings worldwide, up 9% from 2023. The single largest year-over-year gain came from <strong class="text-burgundy">Africa</strong> (+38%) and
            <strong class="text-burgundy">Eastern Europe</strong> (+36%). USA was flat at +1%.
          </p>
        </div>
        <div class="lg:col-span-8">
          <ul class="grid gap-2">
            {#each meetingsByRegion as r (r.region)}
              <li class="grid items-center gap-3 md:grid-cols-[8rem_1fr_5rem_4rem]">
                <div class="font-display text-ink text-sm">{r.region}</div>
                <div class="bar-track relative h-3 overflow-hidden">
                  <div class="bg-teal-deep absolute inset-y-0 left-0 transition-[width] duration-700" style="width:{(r.count / maxCount) * 100}%"></div>
                </div>
                <div class="text-ink/70 font-mono text-[11px] tracking-widest">{r.count.toLocaleString()}</div>
                <div class="font-mono text-[10px] tracking-widest uppercase" class:text-teal-deep={r.growth.startsWith('+')} class:text-burgundy={r.growth.startsWith('-')}>
                  {r.growth}
                </div>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </div>
  </Reveal>
</section>

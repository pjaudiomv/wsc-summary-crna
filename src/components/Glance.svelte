<script lang="ts">
  import CountUp from '@components/CountUp.svelte';
  import Reveal from '@components/Reveal.svelte';
  import { participation } from '@lib/data';
</script>

<section id="glance" class="relative px-6 py-24 sm:px-12 lg:px-20 lg:pl-12">
  <div class="grid items-end gap-6 lg:grid-cols-12">
    <div class="lg:col-span-7">
      <Reveal>
        <div class="text-ink/60 font-mono text-[11px] tracking-[0.32em] uppercase">§ 02 · The body, in numbers</div>
        <h2 class="font-display text-ink mt-3 text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
          <span class="italic">At a</span> <span class="scribble">glance</span><span class="text-burgundy">.</span>
        </h2>
      </Reveal>
    </div>
    <div class="lg:col-span-5">
      <Reveal delay={120}>
        <p class="font-body text-ink-soft text-lg leading-relaxed">
          The 2026 World Service Conference celebrated 50 years of the WSC. It was the largest, most-translated, most-globally-distributed conference in our history — and the first to seat regions
          from <em class="text-burgundy">Brazil Central, Iran Region #1, Nordeste Brazil, Rio Grande do Sul, and Thailand</em>.
        </p>
      </Reveal>
    </div>
  </div>

  <div class="border-ink/15 bg-ink/15 mt-16 grid grid-cols-2 gap-[1px] border lg:grid-cols-4">
    {#each [{ num: participation.voting, suffix: '', label: 'Voting members', sub: '133 RDs/ZDs · 15 World Board' }, { num: participation.countries, suffix: '', label: 'Countries represented', sub: '31 spoken or signed languages' }, { num: participation.remote, suffix: '', label: 'Joined remotely', sub: '14 voting · 29 alternates' }, { num: participation.meetings, suffix: '', label: 'Weekly meetings worldwide', sub: '+9% since 2023' }] as s, i (s.label)}
      <Reveal delay={i * 90} class="bg-paper px-6 py-7">
        <div class="text-ink/50 font-mono text-[10px] tracking-widest uppercase">{String(i + 1).padStart(2, '0')}</div>
        <div class="font-display text-ink mt-2 text-5xl leading-none font-semibold">
          <CountUp to={s.num} />
        </div>
        <div class="font-display text-burgundy mt-3 text-base font-medium">{s.label}</div>
        <div class="font-body text-ink-soft mt-1 text-sm">{s.sub}</div>
      </Reveal>
    {/each}
  </div>

  <div class="mt-14 grid gap-10 lg:grid-cols-12">
    <Reveal class="lg:col-span-7">
      <h3 class="font-display text-ink text-2xl">Who came to the floor.</h3>
      <p class="font-body text-ink-soft mt-3 text-base leading-relaxed">
        Of 128 seated regions, 127 RDs participated. Of 6 seated zones, all 6 ZDs. Of the 134 RDs and ZDs participating, <strong class="text-ink">66 from the US</strong>, 5 from Canada, and
        <strong class="text-ink">63 from outside the US and Canada</strong> — for the first time, more delegates came from outside the US than from within. Gender on the floor: 183 men · 81 women · 2 non-binary.
        El Salvador was the only seated region not registered to attend.
      </p>
      <p class="font-display text-burgundy mt-4 text-xl italic">
        “This was the first WSC that <em>Brazil Central, Iran Region #1, Nordeste Brazil, Rio Grande do Sul, and Thailand</em> participated as seated members.”
      </p>
    </Reveal>
    <Reveal delay={120} class="lg:col-span-5">
      <div class="ticket px-6 py-5">
        <div class="border-ink/15 flex items-baseline justify-between border-b pb-3">
          <span class="text-ink/60 font-mono text-[10px] tracking-[0.22em] uppercase">Newly seated this conference</span>
          <span class="text-tangerine font-mono text-[10px]">★</span>
        </div>
        <ul class="mt-3 space-y-2">
          {#each participation.newlySeated as r (r)}
            <li class="flex items-baseline gap-3">
              <span class="text-tangerine">✓</span>
              <span class="font-display text-ink text-xl">{r}</span>
            </li>
          {/each}
        </ul>
        <div class="border-ink/30 font-display text-ink-soft mt-5 border-t border-dashed pt-3 text-xs italic">
          + 5 regions first-time seated this cycle: Brazil Central, Iran #1, Nordeste Brazil, Rio Grande do Sul, Thailand.
        </div>
      </div>
    </Reveal>
  </div>
</section>

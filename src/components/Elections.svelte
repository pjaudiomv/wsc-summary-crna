<script lang="ts">
  import Reveal from '@components/Reveal.svelte';
  import { elected } from '@lib/data';
</script>

<section id="elections" class="relative px-6 py-28 sm:px-12 lg:px-20 lg:pl-12">
  <div class="grid items-end gap-6 lg:grid-cols-12">
    <div class="lg:col-span-7">
      <Reveal>
        <div class="text-ink/60 font-mono text-[11px] tracking-[0.32em] uppercase">§ 09 · Election results</div>
        <h2 class="font-display text-ink mt-3 text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
          <span class="italic">Trusted</span> <span class="text-burgundy">servants.</span>
        </h2>
      </Reveal>
    </div>
    <div class="lg:col-span-5">
      <Reveal delay={120}>
        <p class="font-body text-ink-soft text-lg leading-relaxed">
          Ten trusted servants elected to the World Board, three to the Human Resource Panel, one to Cofacilitator. The neighboring <em class="text-burgundy">North Carolina Region</em> had two members
          stand for service this cycle — <em class="text-burgundy">Jessica B.</em> elected to the World Board, and NC's RD <em class="text-burgundy">Jacob S.</em> stood for Cofacilitator.
        </p>
      </Reveal>
    </div>
  </div>

  <div class="mt-12 grid gap-8 lg:grid-cols-12">
    <Reveal class="lg:col-span-7">
      <div class="border-ink/15 bg-cream/60 border p-7">
        <div class="border-ink/15 flex items-baseline justify-between border-b pb-4">
          <div class="font-display text-ink text-2xl italic">World Board</div>
          <div class="text-ink/60 font-mono text-[10px] tracking-widest uppercase">10 seats filled</div>
        </div>
        <ul class="divide-ink/10 mt-4 divide-y">
          {#each elected.worldBoard as p, i (p.name)}
            <li class="grid items-baseline gap-3 py-3 md:grid-cols-[3rem_1fr_1fr]">
              <span class="text-ink/40 font-mono text-[10px] tracking-widest uppercase">0{i + 1}</span>
              <span class="font-display text-ink text-xl" class:text-burgundy={p.ncRegion}>
                {p.name}
                {#if p.ncRegion}<span class="border-burgundy bg-burgundy/10 text-burgundy ml-2 inline-block border px-2 py-0.5 font-mono text-[9px] tracking-widest uppercase"
                    >★ Neighbor · NC Region</span
                  >{/if}
              </span>
              <span class="text-ink-soft font-mono text-[10px] tracking-widest uppercase">{p.region}</span>
            </li>
          {/each}
        </ul>
      </div>
    </Reveal>

    <div class="space-y-6 lg:col-span-5">
      <Reveal delay={120}>
        <div class="border-ink/15 bg-cream/60 border p-7">
          <div class="font-display text-ink text-2xl italic">Human Resource Panel</div>
          <div class="text-ink/60 font-mono text-[10px] tracking-widest uppercase">3 seats</div>
          <ul class="divide-ink/10 mt-3 divide-y">
            {#each elected.hrp as p, i (p.name)}
              <li class="grid items-baseline gap-3 py-2 md:grid-cols-[2rem_1fr_1fr]">
                <span class="text-ink/40 font-mono text-[10px] tracking-widest uppercase">0{i + 1}</span>
                <span class="font-display text-ink text-lg">{p.name}</span>
                <span class="text-ink-soft font-mono text-[10px] tracking-widest uppercase">{p.region}</span>
              </li>
            {/each}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div class="border-ink/15 bg-cream/60 border p-7">
          <div class="font-display text-ink text-2xl italic">Cofacilitator</div>
          <div class="text-ink/60 font-mono text-[10px] tracking-widest uppercase">1 seat</div>
          <ul class="mt-3">
            {#each elected.cofacilitator as p (p.name)}
              <li class="grid items-baseline gap-3 py-2 md:grid-cols-[2rem_1fr_1fr]">
                <span class="text-ink/40 font-mono text-[10px] tracking-widest uppercase">01</span>
                <span class="font-display text-ink text-lg">{p.name}</span>
                <span class="text-ink-soft font-mono text-[10px] tracking-widest uppercase">{p.region}</span>
              </li>
            {/each}
          </ul>
          <div class="border-ink/30 font-body text-ink-soft mt-3 border-t border-dashed pt-3 text-[13px] italic">
            <em class="text-burgundy not-italic">Jacob S., NC Region RD</em>, also stood for service in this position.
          </div>
        </div>
      </Reveal>
    </div>
  </div>

  <Reveal delay={300} class="mt-14">
    <div class="bg-paper-warm/60 p-8">
      <div class="grid gap-8 lg:grid-cols-12">
        <div class="lg:col-span-5">
          <h3 class="font-display text-ink text-3xl"><em>Leadership in NA is service in action.</em></h3>
          <p class="font-body text-ink-soft mt-3 text-base leading-relaxed">
            Of the 13 World Board / HRP seats, more than half are filled by trusted servants from outside the United States — Brazil, Kuwait, Colombia, Israel, Australia. That mirrors the broader
            story of this WSC: a larger, more global body than ever before.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:col-span-7">
          {#each [{ label: 'World Board', value: '10' }, { label: 'HRP', value: '3' }, { label: 'Cofacilitator', value: '1' }, { label: 'Regions / countries represented among new servants', value: '10+' }] as s (s.label)}
            <div class="border-tangerine border-l pl-4">
              <div class="font-display text-ink text-4xl leading-none font-semibold">{s.value}</div>
              <div class="text-ink-soft mt-2 font-mono text-[10px] tracking-widest uppercase">{s.label}</div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </Reveal>
</section>

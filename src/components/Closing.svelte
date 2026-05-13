<script lang="ts">
  import Reveal from '@components/Reveal.svelte';
</script>

<section id="closing" class="bg-ink text-cream relative isolate overflow-hidden px-6 py-28 sm:px-12 lg:px-20 lg:pl-12">
  <div class="rainbow-band absolute inset-x-0 top-0 h-2"></div>
  <div class="pointer-events-none absolute inset-0 opacity-[0.06]">
    <div class="halftone text-cream h-full w-full"></div>
  </div>

  <div class="relative grid items-end gap-10 lg:grid-cols-12">
    <Reveal class="lg:col-span-7">
      <div class="text-marigold font-mono text-[11px] tracking-[0.32em] uppercase">§ 12 · Closing</div>
      <h2 class="font-groove stack-shadow-sm mt-3 text-[clamp(3rem,8vw,7rem)] leading-[0.85]">
        <span class="italic">Together,</span><br />we carry the message.
      </h2>
    </Reveal>
    <Reveal delay={150} class="lg:col-span-5">
      <p class="font-body text-cream/85 text-lg leading-relaxed">
        That phrase showed up on the cover of every printed summary handed out this week. It's not decoration — it's a job description. Thank you for the trust you placed in us as your RD and AD.
        Whatever shape the next three years of Carolina Region service takes, we want to be in it with you.
      </p>
    </Reveal>
  </div>

  <Reveal delay={300} class="border-cream/15 mt-16 grid gap-6 border-t pt-10 sm:grid-cols-3">
    {#each [{ label: 'Conference Theme', value: 'Our Common Welfare' }, { label: 'Dates', value: '2 May — 9 May 2026' }, { label: 'Carolina Region delegation', value: 'Patrick J., RD · Jody T., AD' }] as f (f.label)}
      <div>
        <div class="text-marigold font-mono text-[10px] tracking-widest uppercase">{f.label}</div>
        <div class="font-display text-cream mt-2 text-lg">{f.value}</div>
      </div>
    {/each}
  </Reveal>

  <Reveal delay={400} class="border-cream/15 text-cream/60 mt-12 flex flex-wrap items-center justify-between gap-4 border-t pt-6 font-mono text-[10px] tracking-widest uppercase">
    <span>One fellowship. One purpose.</span>
    <span>· 1976 — 2026 ·</span>
    <span>50 years of the WSC</span>
  </Reveal>

  <div class="rainbow-band mt-10 h-2 w-full opacity-90"></div>
</section>

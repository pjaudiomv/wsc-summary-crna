<script lang="ts">
  import Reveal from '@components/Reveal.svelte';
  import poster from '@assets/wsc-50yrs-patrick.jpeg';
</script>

<section id="theme" class="relative isolate overflow-hidden px-6 py-28 sm:px-12 lg:px-20 lg:pl-12">
  <div class="absolute -top-20 -right-32 -z-10 h-[40rem] w-[40rem] opacity-[0.07]" aria-hidden="true">
    <div class="halftone h-full w-full"></div>
  </div>
  <div class="grid gap-12 lg:grid-cols-12">
    <div class="lg:col-span-5">
      <Reveal>
        <div class="text-ink/60 font-mono text-[11px] tracking-[0.32em] uppercase">§ 03 · Theme</div>
        <h2 class="font-display text-ink mt-3 text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.95]">
          <span class="italic">Our Common</span><br />
          <span class="stack-shadow-sm font-groove">Welfare</span>
        </h2>
        <div class="text-ink/60 mt-6 grid grid-cols-3 gap-3 font-mono text-[10px] tracking-widest uppercase">
          <div class="border-ink/40 border-t pt-2"><span class="text-burgundy">★</span> 1976</div>
          <div class="border-ink/40 border-t pt-2 text-center">↔</div>
          <div class="border-ink/40 border-t pt-2 text-right"><span class="text-burgundy">★</span> 2026</div>
        </div>
        <div class="font-display text-ink-soft mt-4 text-base italic">50 years of the World Service Conference.</div>
      </Reveal>

      <Reveal delay={220} class="mt-10">
        <figure class="bg-cream relative inline-block max-w-sm rotate-[-2.5deg] p-3 pb-12 shadow-[6px_6px_0_var(--color-ink)]">
          <img src={poster} alt="Patrick standing in front of the 50 Years of WSC commemorative poster" width="1164" height="1400" loading="lazy" decoding="async" class="block h-auto w-full" />
          <figcaption class="text-ink/70 font-display absolute right-0 bottom-2 left-0 px-3 text-center text-sm italic">
            Patrick at the <span class="text-burgundy">50 Years of WSC</span> poster · 1976 — 2026
          </figcaption>
        </figure>
      </Reveal>
    </div>
    <div class="lg:col-span-7">
      <Reveal delay={120}>
        <p class="dropcap font-body text-ink text-xl leading-relaxed">
          The WSC's mission is to unify NA worldwide by providing an event at which the Fellowship can be of one voice. The theme for 2026 — <em class="text-burgundy">Our Common Welfare</em> — is
          borrowed directly from the First Tradition, and it set the tone for nearly every decision made on the floor. Whether we were talking about the next IP, the future of the World Convention,
          gender-neutral language, the strategic plan, or where the money goes — the question kept coming back to:
          <em class="text-teal-deep font-semibold not-italic">whose welfare are we serving, and how does this strengthen our unity?</em>
        </p>
      </Reveal>
      <div class="mt-10 grid gap-6 sm:grid-cols-2">
        {#each [{ tag: 'Unity', body: 'Participants propose and gain Fellowship consensus on initiatives that further the Vision for NA Service.', color: 'border-tangerine text-tangerine' }, { tag: 'Fellowship', body: 'Through an exchange of experience, strength, and hope, the Fellowship collectively expresses itself on matters affecting NA as a whole.', color: 'border-teal text-teal-deep' }, { tag: 'Guidance', body: 'NA groups have a mechanism to guide and direct the activities of NA World Services.', color: 'border-burgundy text-burgundy' }, { tag: 'Responsibility', body: 'Participants ensure that the various elements of NA World Services are ultimately responsible to the groups they serve.', color: 'border-plum text-plum' }] as p, i (p.tag)}
          <Reveal delay={i * 80}>
            <div class="border-l-4 {p.color} pl-4">
              <div class="font-display text-lg font-semibold {p.color.split(' ')[1]}">{p.tag}</div>
              <p class="font-body text-ink-soft mt-1 text-[15px] leading-relaxed">{p.body}</p>
            </div>
          </Reveal>
        {/each}
      </div>
      <Reveal delay={400} class="mt-10">
        <div class="rainbow-band h-3 w-full opacity-90"></div>
        <p class="font-display text-burgundy mt-4 text-2xl italic">
          “Personal recovery depends on NA unity.” <span class="text-ink/60 font-mono text-xs tracking-widest uppercase not-italic">— Our First Tradition</span>
        </p>
      </Reveal>
    </div>
  </div>
</section>

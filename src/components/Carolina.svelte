<script lang="ts">
  import Reveal from '@components/Reveal.svelte';
  import { carolinasItems } from '@lib/data';

  const palette = ['bg-tangerine', 'bg-teal', 'bg-burgundy'];
  const ink = ['text-cream', 'text-cream', 'text-cream'];
</script>

<section id="carolina" class="relative isolate overflow-hidden px-0 py-24 sm:py-28">
  <!-- Full bleed dark band -->
  <div class="bg-ink text-cream relative">
    <div class="rainbow-band absolute inset-x-0 top-0 h-2"></div>
    <div class="rainbow-band absolute inset-x-0 bottom-0 h-2"></div>

    <div class="px-6 py-16 sm:px-12 lg:px-20 lg:pl-12">
      <div class="grid items-end gap-8 lg:grid-cols-12">
        <div class="lg:col-span-8">
          <Reveal>
            <div class="text-marigold font-mono text-[11px] tracking-[0.32em] uppercase">§ 04 · Across the state line</div>
            <h2 class="font-display mt-3 text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
              <span class="text-cream italic">News from</span><br />
              <span class="text-marigold">the North Carolina Region.</span>
            </h2>
          </Reveal>
        </div>
        <div class="lg:col-span-4">
          <Reveal delay={120}>
            <p class="font-body text-cream/80 text-base leading-relaxed">
              Our neighbors had three of this conference's most newsworthy moments — worth flagging because the Carolinas share members, sponsorships, and conventions across the state line.
            </p>
          </Reveal>
        </div>
      </div>

      <div class="mt-12 grid gap-5 md:grid-cols-3">
        {#each carolinasItems as item, i (item.title)}
          <Reveal delay={i * 110}>
            <article class="border-cream/15 bg-ink-soft/40 relative h-full overflow-hidden border p-7 backdrop-blur-sm">
              <div class="flex items-center justify-between">
                <span class="text-cream/60 font-mono text-[10px] tracking-[0.22em] uppercase">
                  {item.type === 'elected' ? 'Elected · World Board' : item.type === 'nominated' ? 'Nominated · Cofacilitator' : 'New Idea · NC'}
                </span>
                <span class="{palette[i]} {ink[i]} px-2 py-1 font-mono text-[10px] tracking-widest uppercase">NC · 0{i + 1}</span>
              </div>
              <h3 class="font-display mt-5 text-2xl leading-tight">{item.title}</h3>
              <p class="font-body text-cream/80 mt-3 text-[15px] leading-relaxed">{item.detail}</p>
              <div class="border-cream/15 text-cream/50 mt-4 border-t pt-3 font-mono text-[9px] tracking-widest uppercase">
                {item.region}
              </div>
            </article>
          </Reveal>
        {/each}
      </div>

      <Reveal delay={400} class="mt-12">
        <div class="border-cream/15 grid gap-8 border-t pt-10 lg:grid-cols-12">
          <div class="lg:col-span-8">
            <h3 class="font-display text-cream text-3xl italic">What we're bringing back to the Carolina Region.</h3>
            <p class="font-body text-cream/85 mt-3 text-lg leading-relaxed">
              The strategic plan, project plans, and new ideas all land on Carolina Area floors in the next 90 days. Three things our region should know about right now:
            </p>
            <ol class="font-body text-cream/85 mt-5 space-y-3 text-[15px] leading-relaxed">
              <li><span class="text-marigold mr-2 font-mono">01</span> WCNA moves to a <strong class="text-cream">five-year cycle</strong> beginning 2028 — closest vote of the week.</li>
              <li>
                <span class="text-marigold mr-2 font-mono">02</span> Gender-neutral language work continues — IP #1 first, as a <strong class="text-cream">draft for Fellowship review</strong>, not an
                immediate change.
              </li>
              <li><span class="text-marigold mr-2 font-mono">03</span> Group Booklet and Guide to Local Services revisions are coming through <strong class="text-cream">focus groups</strong>.</li>
            </ol>
          </div>
          <div class="lg:col-span-4">
            <div class="border-marigold border-l-2 pl-6">
              <div class="text-marigold font-mono text-[10px] tracking-widest uppercase">A note from your RD &amp; AD</div>
              <p class="font-display text-cream mt-3 text-2xl leading-tight italic">“We need to walk together and not drag people along.”</p>
              <p class="font-body text-cream/70 mt-3 text-sm">
                — heard often on the floor this week. It captures the spirit of nearly every harder conversation, and it's the line we'd both carry back to a Carolina ASC.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </div>
</section>

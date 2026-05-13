<script lang="ts">
  import photo from '@assets/wsc-group-photo.jpg';
</script>

<section aria-label="WSC 2026 group photo" class="bg-ink relative isolate overflow-hidden">
  <div class="rainbow-band absolute inset-x-0 top-0 z-10 h-2"></div>
  <div class="rainbow-band absolute inset-x-0 bottom-0 z-10 h-2"></div>

  <figure class="relative">
    <img
      src={photo}
      alt="WSC 2026 participants gathered together — delegates, alternates, World Board, HRP, cofacilitators and translators"
      width="2560"
      height="1828"
      decoding="async"
      class="block h-auto w-full"
    />

    <!-- gradient veil so caption is legible -->
    <div class="from-ink via-ink/40 pointer-events-none absolute inset-0 bg-gradient-to-t to-transparent"></div>
    <div class="from-ink pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t to-transparent"></div>

    <figcaption class="text-cream absolute right-0 bottom-0 left-0 p-6 sm:p-10 lg:p-14">
      <div class="flex flex-wrap items-end justify-between gap-6">
        <div class="max-w-2xl">
          <div class="text-marigold font-mono text-[10px] tracking-[0.32em] uppercase">§ Interlude · the body</div>
          <div class="font-display mt-2 text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.05] italic">
            “This is what 148 voting members, 113 alternates, 47 countries and 31 languages look like in one room.”
          </div>
        </div>
        <div class="text-cream/70 font-mono text-[10px] tracking-widest uppercase">
          <div>WSC 2026 · Group Photo</div>
          <div class="text-cream/50">2 — 9 May · Our Common Welfare</div>
        </div>
      </div>
    </figcaption>
  </figure>
</section>

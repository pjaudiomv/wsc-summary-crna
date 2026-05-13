<script lang="ts">
  import { onMount } from 'svelte';

  type Props = { to: number; duration?: number; prefix?: string; suffix?: string; class?: string };
  let { to, duration = 1400, prefix = '', suffix = '', class: klass = '' }: Props = $props();

  let el = $state<HTMLSpanElement>();
  let value = $state(0);

  onMount(() => {
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              value = Math.round(to * eased);
              if (t < 1) requestAnimationFrame(tick);
              else value = to;
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  });

  const formatted = $derived(value.toLocaleString());
</script>

<span bind:this={el} class={klass}>{prefix}{formatted}{suffix}</span>

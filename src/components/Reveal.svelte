<script lang="ts">
  import { onMount } from 'svelte';

  type Props = {
    children?: import('svelte').Snippet;
    delay?: number;
    class?: string;
  };
  let { children, delay = 0, class: klass = '' }: Props = $props();

  let el = $state<HTMLDivElement>();
  let visible = $state(false);

  onMount(() => {
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setTimeout(() => (visible = true), delay);
            io.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  });
</script>

<div
  bind:this={el}
  class={klass}
  style="opacity:{visible ? 1 : 0};transform:translateY({visible ? '0' : '18px'});transition:opacity .8s cubic-bezier(.2,.7,.2,1),transform .8s cubic-bezier(.2,.7,.2,1);"
>
  {@render children?.()}
</div>

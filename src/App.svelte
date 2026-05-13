<script lang="ts">
  import './app.css';
  import SideRail from '@components/SideRail.svelte';
  import Hero from '@components/Hero.svelte';
  import Glance from '@components/Glance.svelte';
  import Theme from '@components/Theme.svelte';
  import GroupPhoto from '@components/GroupPhoto.svelte';
  import Carolina from '@components/Carolina.svelte';
  import Decided from '@components/Decided.svelte';
  import Failed from '@components/Failed.svelte';
  import Survey from '@components/Survey.svelte';
  import Discussions from '@components/Discussions.svelte';
  import Elections from '@components/Elections.svelte';
  import Budget from '@components/Budget.svelte';
  import Ahead from '@components/Ahead.svelte';
  import Closing from '@components/Closing.svelte';
</script>

<SideRail />

<main class="relative z-10 pt-14 lg:ml-[18rem] lg:pt-0">
  <Hero />
  <Glance />
  <Theme />
  <GroupPhoto />
  <Carolina />
  <Decided />
  <Failed />
  <Survey />
  <Discussions />
  <Elections />
  <Budget />
  <Ahead />
  <Closing />
</main>

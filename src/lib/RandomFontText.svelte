<script lang="ts" generics="T extends keyof SvelteHTMLElements">
  import type { SvelteHTMLElements } from "svelte/elements";
  import { getRandomFontFamilyFor } from "./fonts";

  type Props = { text: string } & (({ tag: T } & SvelteHTMLElements[T]) | { tag?: undefined });

  const { text, tag, ...rest }: Props = $props();
</script>

{#snippet eachCharWithRandomFont()}
  {#each text as c}
    <span style={getRandomFontFamilyFor(c)}>{c}</span>
  {/each}
{/snippet}

{#if tag}
  <svelte:element this={tag} {...rest}>
    {@render eachCharWithRandomFont()}
  </svelte:element>
{:else}
  {@render eachCharWithRandomFont()}
{/if}

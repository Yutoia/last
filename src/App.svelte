<script lang="ts">
  import { innerHeight, innerWidth } from "svelte/reactivity/window";
  import { getFontImportStyle } from "./lib/fonts";
  import RandomFontText from "./lib/RandomFontText.svelte";

  let mainElement: HTMLElement;
  // svelte-ignore non_reactive_update
  let stickyWrap: HTMLDivElement;
  // svelte-ignore non_reactive_update
  let horizontalScroll: HTMLDivElement;

  let enter = $state(false);

  // Credit: https://and-ha.com/coding/hybrid-scroll/
  function transform(section: HTMLElement) {
    const offsetTop = section.parentElement!.offsetTop;
    let percentage = ((mainElement.scrollTop - offsetTop) / mainElement.offsetHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 300 ? 300 : percentage;
    horizontalScroll.style.translate = `${-percentage}dvw 0`;
  }
</script>

<svelte:head>
  {@html getFontImportStyle()}
</svelte:head>

<main
  class="h-dvh overflow-auto text-center text-3xl backdrop-blur-sm"
  bind:this={mainElement}
  onscroll={() => enter && transform(stickyWrap)}
>
  <section class="grid h-dvh place-content-center place-items-center">
    <RandomFontText tag="h1" class="bg-white p-4 text-5xl" text="私の高校生活3年間について。" />
    <RandomFontText tag="h2" class="mt-4 bg-white p-2" text="by Yutoia" />
  </section>
  {#if !enter}
    <div class="grid h-dvh place-content-center place-items-center">
      <RandomFontText
        tag="p"
        class="bg-white p-2"
        text="私はこの高校に入って、何を作り、何を学んできたのでしょうか。"
      />
      <RandomFontText tag="p" class="mt-4 bg-white p-2" text="今日は、その一部をお見せしようと思います。" />
      <RandomFontText
        tag="button"
        onclick={() => (enter = true)}
        class="mt-12 cursor-pointer bg-white px-4 py-2"
        text="進む"
      />
    </div>
  {:else}
    <section class="h-[400dvh]">
      <div class="sticky top-0 h-dvh overflow-hidden" bind:this={stickyWrap}>
        <div
          class="absolute top-0 flex h-full w-[400dvw] justify-between will-change-transform"
          bind:this={horizontalScroll}
        >
          <div class="grid h-full w-dvw place-content-center place-items-center">
            <RandomFontText
              tag="p"
              class="bg-white p-2"
              text="私はこの高校に入って、何を作り、何を学んできたのでしょうか。"
            />
            <RandomFontText tag="p" class="mt-4 bg-white p-2" text="今日は、その一部をお見せしようと思います。" />
            <RandomFontText
              tag="p"
              onclick={() => (enter = true)}
              class="mt-12 bg-white px-4 py-2 text-green-600"
              text="そのままお進みください！"
            />
          </div>
          <div class="relative grid h-full w-dvw place-content-center place-items-center">
            <RandomFontText
              tag="h3"
              class="absolute top-12 left-12 bg-white p-2"
              text="1年次. ReffectiveMinder (コンテスト提出作品)"
            />
            <iframe
              width={innerWidth.current}
              height={innerHeight.current}
              src="https://www.youtube-nocookie.com/embed/nVIFzZp7UWA?si=wxM-xwYySY-cIJSK"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <RandomFontText
              tag="p"
              class="absolute bottom-28 bg-white p-2"
              text="C++の練習がてら書いた脳トレアプリのようなものです。"
            />
          </div>
          <div class="relative grid h-full w-dvw place-content-center place-items-center">
            <RandomFontText tag="h3" class="absolute top-12 left-12 bg-white p-2" text="2年次. ascii-generator" />
            <img src="ascii.jpg" alt="ascii-generator" class="portrait:w-dvw landscape:h-dvh" />
            <RandomFontText
              tag="p"
              class="absolute bottom-28 bg-white p-2"
              text="沖縄スクーリングの移動の暇な時間に書いたものです。"
            />
          </div>
          <div class="relative grid h-full w-dvw place-content-center place-items-center">
            <RandomFontText tag="h3" class="absolute top-12 left-12 bg-white p-2" text="3年次. Numbers" />
            <iframe
              width={innerWidth.current}
              height={innerHeight.current}
              src="https://www.youtube-nocookie.com/embed/0h8InEPGUwk?si=K2wYZORy6VcTqrhm"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <RandomFontText
              tag="p"
              class="absolute bottom-28 bg-white p-2"
              text="1年かけてルールから作ったボードゲームです。"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="grid h-dvh place-content-center place-items-center">
      <RandomFontText
        tag="p"
        class="bg-white p-2"
        text="私はこの高校を卒業しても、自分の好きな開発を続けていることと思います。"
      />
      <RandomFontText tag="p" class="mt-4 bg-white p-2" text="また、どこかでお会いしましょう。" />
      <p class="mt-12 bg-white p-2">
        <RandomFontText tag="span" class="line-through" text="Yutoia" />
        <RandomFontText tag="span" text="→" />
        <a href="https://github.com/yuto0214w" target="_blank" rel="noopener noreferrer" class="text-indigo-600">
          yuto0214w
        </a>
      </p>
    </section>
  {/if}
</main>

<style>
  :global(body) {
    background-image: url("/bg.jpg");
    background-size: cover;
  }
</style>

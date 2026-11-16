<template>
  <footer class="bg-zinc-950 border-t border-zinc-900" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">{{ $t("footer.footer") }}</h2>
    <div
      class="mx-auto max-w-7xl px-6 py-3 lg:px-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-2"
    >
      <div class="flex items-center gap-x-4">
        <div class="flex items-center gap-x-2">
          <ApplicationLogo aria-hidden="true" class="h-5" />
          <span class="text-blue-400 font-display font-bold text-sm uppercase">X33 App</span>
        </div>
        <SelectorLanguageListbox :show-text="false" :open-up="true" class="w-44" />
      </div>

      <div class="flex items-center gap-x-4 text-xs text-zinc-500">
        <NuxtLink
          to="https://github.com/w33dev-developer/x33-app"
          target="_blank"
          class="hover:text-zinc-300 transition-colors duration-200"
        >
          Source (AGPL-3.0)
        </NuxtLink>
        <span class="text-zinc-700">Based on Drop</span>
        <span class="text-zinc-600 select-none">
          <i18n-t keypath="footer.version" tag="span" scope="global">
            <template #version>
              <span>{{ versionInfo.version }}</span>
            </template>
            <template #gitRef>
              <span>{{ versionInfo.gitRef }}</span>
            </template>
          </i18n-t>
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const versionInfo = await $dropFetch("/api/v1");
</script>

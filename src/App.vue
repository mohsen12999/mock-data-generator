<script setup lang="ts">
import DataCard from "./components/DataCard.vue";
import { version } from "../package.json"; // Import version from package.json
</script>

<template>
  <div>
    <h1 id="main_title">Data for Generate</h1>
    <span>
      <a href="http://github.com/mohsen12999/generate-mock-data" target="_blank" title="GitHub project address">
      version {{ version }}
        <img
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          alt="GitHub logo"
          loading="lazy"
          title="GitHub logo"
          aria-label="GitHub logo"
          id="github-logo"
        />
      </a>
    </span>
  </div>
  <DataCard />
</template>

<style scoped>
#main_title {
  margin-bottom: auto;
}
#github-logo {
  width: 1rem;
}
</style>

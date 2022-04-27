<template>
  <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="form-one flex flex-wrap -mx-1 lg:-mx-4">
          <DataDiri />
          <KolomP1ntu />
      </div>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
          <CardResults />
      </div>
  </div>
</template>

<script>
import DataDiri from "../components/DataDiri.vue";
import KolomP1ntu from "../components/KolomP1ntu.vue";
import CardResults from "../components/CardResults.vue";
export default {
    components: {
      DataDiri,
      KolomP1ntu,
      CardResults,
    }
}
</script>
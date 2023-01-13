<template>
  <div>
    <div v-for="(item, idx) in items" :key="idx">
      <ItemPreview
       v-on:item-change="$emit('reload-list')"
       :item="item" 
       class="item" />
    </div>
  </div>
</template>

<script>
import ItemPreview from "./item-preview.vue";
export default {
  props: ["items"],
  methods: {
   
  },
  components: { ItemPreview },
};
</script>

<style lang="scss">
.item {
  background: #e6e6e6;
  padding: 5px;
  margin-top: 5px;
}
</style>
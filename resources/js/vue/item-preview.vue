<template>
  <div class="item">
    <input type="checkbox" @change="updatecheck()" v-model="item.completed" />
    <span :class="[item.completed ? 'completed' : '', 'item-text']">{{
      item.name
    }}</span>
    <button @click="removeItem()" class="delete">
      <font-awesome-icon icon="trash" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async updatecheck() {
      try {
        await axios.put("api/item/" + this.item.id, { item: this.item });
        this.$emit("item-change");
      } catch (err) {
        console.log("cant update item");
      }
    },
    async removeItem() {
      try {
        await axios.delete("api/item/" + this.item.id);
        this.$emit("item-change");
      } catch (err) {
        console.log("cant delete item");
      }
    },
  },
};
</script>

<style lang="scss">
.item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.completed {
  text-decoration: line-through;
  color: #999999;
}
.item-text {
  width: 100%;
  margin-left: 20px;
  -webkit-text-stroke: thin;
}
.delete {
  background: #e6e6e6;
  border: none;
  color: red;
  outline: none;
  cursor: pointer;

}
</style>
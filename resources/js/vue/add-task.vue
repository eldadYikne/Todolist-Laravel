<template>
  <div>
    <h2>
      <div class="add-item">
        <input class="input-add-task " @change="onType" type="text" v-model="item.name" />
        <font-awesome-icon
          icon="plus-square"
          @click="addItem()"
          :class="[item.name ? 'active' : 'inactive', 'plus']"
        />
      </div>
    </h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {
        name: "",
      },
    };
  },
  methods: {
    onType(event) {
      console.log("event", event.target.value);
    },
    async addItem() {
      if (!this.item.name) return;
      try {
        await axios.post("api/item/store", { item: this.item });
        this.item.name = "";
        this.$emit('reload-list')
      } catch (err) {
        console.log("error to post task");
      }
    },
  },
  computed: {},
};
</script>

<style lang="scss" >
.add-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.input-add-task {
  background: #f7f7f7;
  border: 0px;
  outline: none;
  padding: 5px;
  margin-right: 10px;
  width: 100%;
}
.plus {
  font-size: 28px;
  cursor: pointer;
}
.active {
  color: hsl(131, 100%, 40%);
}
.inactive {
  color: #999999;
}
</style>
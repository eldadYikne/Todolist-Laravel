<template>
  <div class="todo-list-container">
    <div class="head">
      <h2 class="title">Todo List</h2>
      <AddTask v-on:reload-list="getItems()" />
    </div>
    <ListView v-on:reload-list="getItems()" :items="items" />
  </div>
</template>

<script>
import AddTask from "./add-task.vue";
import ListView from "./list-view.vue";
export default {
  data() {
    return {
      message: "Hellasasddo ",
      items: "",
    };
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        const items = await axios.get("api/items");
        this.items = items.data;
      } catch (err) {
        console.log("cant get items");
      }
    },
  },
  components: { AddTask, ListView },
};
</script>

<style lang="scss">
.title {
  text-align: center;
}
.todo-list-container {
  max-width: 450px;
  min-width: 210px;

  margin: auto;
}
.head {
  background: #e6e6e6;
  padding: 10px;
}
body {
  font-family: Arial, Helvetica, sans-serif;
}
</style> >


Vue.createApp({
  data() {
    return {
      valueInput: "",
      needDoList: [],
      completeList: [],
    };
  },
  methods: {
    handleInput(event) {
      this.valueInput = event.target.value;
    },
    addTask() {
      if (this.valueInput === "") {
        return;
      }
      this.needDoList.push({
        title: this.valueInput,
        id: Math.random(),
      });
      localStorage.setItem("tasks", JSON.stringify(this.valueInput));
      this.valueInput = "";
    },
    doCheck(index, type) {
      if (type === "need") {
        const completeMask = this.needDoList.splice(index, 1);
        this.completeList.push(...completeMask);
      } else {
        const noCompleteMask = this.completeList.splice(index, 1);
        this.needDoList.push(...noCompleteMask);
      }
    },
    removeMask(index, type) {
      const toDoList = type === "need" ? this.needDoList : this.completeList;
      toDoList.splice(index, 1);
    },
    mounted() {
      this.needDoList = JSON.parse(localStoarge.getItem("tasks"));
    },
  },
}).mount("#app");

<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <h3>Edit you To Do task</h3>
      </div>
      <hr/>
      <div class="card-text">
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Title</label>
            <input v-model="task.text" type="text" class="form-control" placeholder="Title"/>
          </div>
        </div>
        <div class="row mb-3 align-items-center">
          <div class="col-8">
            <label class="form-label">Your task</label>
            <textarea v-model="task.text" class="form-control" rows="5"></textarea>
          </div>

          <div class="col-4 ">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
               Default radio
              </label>
            </div>
            <div class="form-check">
             <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" >
              <label class="form-check-label" for="flexRadioDefault2">
               Default checked radio
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" >
              <label class="form-check-label" for="flexRadioDefault2">
                Default checked radio
              </label>
            </div>
            <div class="btn-group-vertical" role="group" aria-label="Basic mixed styles example">
              <button type="button" class="btn btn-danger" >To Do</button>
              <button type="button" class="btn btn-warning" >On Going</button>
              <button type="button" class="btn btn-success">Finished</button>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="card-footer">
      <button type="button" @click="send" class="btn float-end btn-primary"><em class="bi-check"/>Save and Post</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditTodo",
  data() {
    return {
      task: {
        //id: null,
        //date: null,
        text: null,
        status: null
      }
    }
  },
  /*computed: {
    formattedDate() {
      return this.task.date ? new Date(this.task.date).toLocaleDateString(): '';
    }
  },

   */
  async mounted() {
    const id = this.$route.params.id;
    this.task = await this.getData(id);
  },
  methods: {
    async getData(id) {
      const res = await fetch(`http://localhost:3000/todos/${id}`, {method: 'GET'});
      return res.json();
    }
  },
  getCheckedToDo(){
    if (this.task.status == 1) return 'checked';
    //if (status == 2) return 'on going';
    //if (status == 3) return 'finished';
  }
}
</script>

<style scoped>

</style>
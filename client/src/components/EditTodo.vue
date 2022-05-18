<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <h3>Edit you To Do task</h3>
      </div>
      <hr/>
      <div class="card-text">

        <div class="row mb-3 align-items-center">
          <div class="col-8">
            <label class="form-label">Your task</label>
            <textarea v-model="task.text" class="form-control" rows="5"></textarea>
          </div>

          <div class="col-4 ">
            <div class="form-check">
              <input class="form-check-input bg-danger border-danger btn-outline-danger" type="radio" name="flexRadioDefault" id="stodo" value=1 v-model="task.status">
              <label class="form-check-label text-danger" for="stodo">
                To do
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input bg-warning border-warning btn-outline-warning" type="radio" name="flexRadioDefault" id="songoing" value=2 v-model="task.status">
              <label class="form-check-label text-warning" for="songoing">
                On going
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input bg-success border-success btn-outline-success" type="radio" name="flexRadioDefault" id="sfinished" value=3 v-model="task.status">
              <label class="form-check-label text-success" for="sfinished">
                Finished
              </label>
            </div>

          </div>
        </div>

      </div>
    </div>
    <div class="card-footer">
      <button type="button" @click="editTodo($route.params.id)" class="btn float-end btn-primary btn-success">Save</button>
      <button type="button" @click="deleteTodo($route.params.id)" class="btn btn-primary btn-danger">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditTodo",
  data() {
    return {
      task: {
        id: null,
        date: null,
        text: null,
        status: null
      }
    }
  },
  async mounted() {
    const id = this.$route.params.id;
    this.task = await this.getData(id);
  },
  methods: {
    async getData(id) {
      const res = await fetch(`http://localhost:3000/todos/${id}`, {method: 'GET'});
      return res.json();
    },
    async editTodo(id) {
      if (this.task.text.length === 0) return;
      else {
        try {
          //console.log(this.newtodo.text);
          await fetch(`http://localhost:3000/todos/${id}`,
              {
                method: 'PATCH',
                body: JSON.stringify(this.task),
                headers: {
                  'Content-type': 'application/json'
                }
              }
          )
          //const res =await fetch('http://localhost:3000/todos', {method: 'GET'});
          //this.newtodo.tasks = await res.json();
          await this.$router.push('/');
          //alert("Saved!");
        } catch (e) {
          alert(e);
        }
        //this.newtodo.text = "";
      }
    },
    async deleteTodo(id) {

        try {
          fetch(`http://localhost:3000/todos/${id}`, {method: 'Delete'});
          await this.$router.push('/');
          //alert("Saved!");
        } catch (e) {
          alert(e);
        }
        //this.newtodo.text = "";
     // }
    }
  },


}
</script>

<style scoped>

</style>
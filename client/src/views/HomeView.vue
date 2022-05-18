<script>
import Tasks from "@/components/Tasks.vue";

export default {
  components: {Tasks},

  data() {
    return {
      shows: 0,
      newtodo: {
        text: "",
        tasks: []
      }
    }
  },
  async created(){
    await this.getData();
    //const res =await fetch('http://localhost:3000/todos', {method: 'GET'});
    //console.log(res);
    //this.newtodo.tasks = await res.json();
  },



  methods: {
    async addTodo() {
      if (this.newtodo.text.length === 0) return;
      else {
        try {
          console.log(this.newtodo.text);
          await fetch('http://localhost:3000/todos/',
              {
                method: 'POST',
                body: JSON.stringify(this.newtodo),
                headers: {
                  'Content-type': 'application/json'
                }
              }
          )
          await this.getData();
          //const res =await fetch('http://localhost:3000/todos', {method: 'GET'});
          //this.newtodo.tasks = await res.json();
          //alert("Saved!");
        } catch (e) {
          alert(e);
        }
        this.newtodo.text = "";
      }
    },
    async getData(){
      const res = await fetch('http://localhost:3000/todos', {method: 'GET'});
      //console.log(res);
      this.newtodo.tasks = await res.json();
    },
    /*
    async getOnlyTodo(status){
      try {
        //console.log(this.newtodo.text);
        this.shows = status;
        const res = await fetch(`http://localhost:3000/todos/${status}`, {method: 'PUT'});
        /*const res = await fetch('http://localhost:3000/todos/',
            {
              method: 'PUT',
              body: status,
              headers: {
                'Content-type': 'application/json'
              }
            }
        )
        this.newtodo.tasks = await res.json();

      } catch (e) {
        alert(e);
      }
    },
     */
  },
};
</script>


<template>

  <div class="container shadow-lg px-5 py-5 rounded-3">
    <h1 class="mb-5">My To Do List</h1>

    <!-- <form> -->
    <div class="d-flex mb-5">
      <input
          v-model="newtodo.text"
          type="text"
          placeholder="Enter To Do"
          class="form-control form-input me-3"
      />
      <button type="submit" class="submit-btn px-3 py-2" @click="addTodo()">
        +
      </button>
    </div>
    <div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2  pb-3 pt-3" v-for="task in newtodo.tasks">
      <Tasks :id="task.id"  :date="task.date" :text="task.text" :status="task.status" @getData="getData"></Tasks>
    </div>
    <!--
    <div class="modal-footer ">
      <div class="form-check">
        <input  @click="getOnlyTodo(1)" class="form-check-input bg-danger border-danger btn-outline-danger" type="radio" name="flexRadioDefault" id="onlytodo" value=1 v-model="shows">
        <label class="form-check-label text-danger" for="onlytodo">
          Show only to do
        </label>
      </div>
      <div class="form-check">
        <input @click="getOnlyTodo(2)" class="form-check-input bg-warning border-warning btn-outline-warning" type="radio" name="flexRadioDefault" id="onlyongoing" value=2 v-model="shows">
        <label class="form-check-label text-warning" for="onlyongoing">
          Show only on going
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input bg-success border-success btn-outline-success" type="radio" name="flexRadioDefault" id="onlyfinished" value=3 v-model="shows">
        <label class="form-check-label text-success" for="onlyfinished">
          Show only finished
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input " type="radio" name="flexRadioDefault" id="all" value=0 v-model="shows">
        <label class="form-check-label" for="all">
          Show all
        </label>
      </div>
    </div>-->
  </div>
</template>



<style scoped>
.form-input {
  border: 1px solid #333;
  border-radius: 50px;
}
.form-control:focus {
  box-shadow: none;
  /* border: none; */
}
.submit-btn {
  background-color: skyblue;
  border-radius: 50%;
  border: none;
  font-size: 20px;
  font-weight: 800;
  color: #333;
}
</style>
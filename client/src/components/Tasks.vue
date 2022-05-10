<template>
  <div class="card">
    <div class="row g-0">



      <div class="col-2">
        <div class="offset-1 d-flex justify-content-start align-items-center ">
          <div
              :class="{
              'status-indicator-todo': status === 1,
              'status-indicator-ongoing': status === 2,
              'status-indicator-finished': status === 3,
            }"
              class="status-indicator mb-1 me-2"
          ></div>
          <div
              class="status-text"
              @click="changeStatus(id)"
              :class="{
              'status-text-todo': status === 1,
              'status-text-ongoing': status === 2,
              'status-text-finished': status === 3,
            }"
          ><h5>{{getStatus(status)}}</h5>
          </div>
        </div>
      </div>



        <div class="col-sm-10"> <!--col-xl-16 col-lg-8-->
          <div class="card-body">
            <h7 class="card-subtitle">{{ formattedDate }}</h7>
            <h6 class="card-title" :class="{ 'todo-finished': status === 3 }">{{ text }}</h6>

            <router-link :to="`/edit/${id}`" class="btn btn-primary">
              Edit
              <em class="bi-play"/>
            </router-link>

          </div>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Tasks",
  /*data() {
    return {
      todo: {
        id: null,
        date: null,
        text: null,
        status: null
      }
    }
  },*/
  props: {
    id: Number,
    date: String,
    text: String,
    status: Number
  },
  computed: {
    formattedDate() {
      return new Date(this.date).toLocaleDateString()
    }
  },
  methods: {
    getStatus(status){
      if (status == 1) return 'to do';
      if (status == 2) return 'on going';
      if (status == 3) return 'finished';
    },
    async changeStatus(id){
      try {
        //console.log(this.newtodo.text)
        this.props.status+=1;
        await fetch(`http://localhost:3000/todos/${id}`,
            {
              method: 'PATCH',
              body: JSON.stringify(this.props),
              params: JSON.stringify(id),
              headers: {
                'Content-type': 'application/json'
              }
            }
        )
        //const res =await fetch('http://localhost:3000/todos/', {method: 'GET'});
        //this.newtodo.tasks = await res.json();
        alert("Saved!");
      } catch (e) {
        alert(e);
      }
    }
  }

}
</script>

<style scoped>
.todo-finished {
  font-style: italic;
  text-decoration: line-through;
}
.status-indicator {
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
.status-text {
  font-weight: bold;
  cursor: pointer;
}
.status-indicator-todo {
  background: red;
}
.status-indicator-ongoing {
  background: yellow;
}
.status-indicator-finished {
  background: green;
}
.status-text-todo {
  color: red;
}
.status-text-ongoing {
  color: yellow;
}
.status-text-finished {
  color: green;
}

</style>
<template>
  <!--<header class="cs-header navbar-expand-lg">--> <!--fixed-top navbar-expand-lg-->
    <!--<div class="container">
      <div class="row">
        <div class="col-12 text-white text-xxl-center">
          <h1 class="content">My Blog</h1>
          <span class="subheading text-center "></span>
        </div>
      </div>
    </div>
  </header>-->

  <div id="header" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#header" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#header" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#header" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" style="background-image: url('https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80')">
        <div class="carousel-caption">
          <p>“Who you are tomorrow begins with what you do today.”– Tim Fargo</p>
        </div>
      </div>
      <div class="carousel-item" style="background-image: url('https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80')">
        <div class="carousel-caption">
          <p>“Always do what you are afraid to do.” – Ralph Waldo Emerson</p>
        </div>
      </div>
      <div class="carousel-item" style="background-image: url('https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')">
        <div class="carousel-caption">
          <p>“If you can dream it, you can do it.” – Walt Disney</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#header" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#header" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

</template>

<script>
export default {
  name: "Header"
}

</script>

<style scoped>

/*.cs-header {
  background-image: url('https://wallpaper.dog/large/5543237.jpg');
  background-repeat: no-repeat;
  background-position: top center;
  height: 500px;

}

.content{
  padding-top: 350px;
  text-align: center;
}*/

.carousel-item {
  height: 65vh;
  min-height: 350px;
  background: no-repeat center center scroll;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>
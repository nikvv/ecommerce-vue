<template>
      <div class="banner-container mt-10">
            <img class="banner object-center" src="https://imgur.com/3zPFYX1.jpg" alt="Banner">
      </div>
</template>

<style scoped>
.banner{
      object-fit: cover;
      width:100%;
      height:600px;
}

.banner-container{
      position: relative;
}
 .banner-container:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  width: 100%;
  height: 600px;
  background-color:#222222;
  opacity: .6;
}
.banner-container:hover:after{
opacity: .5;
}
</style>
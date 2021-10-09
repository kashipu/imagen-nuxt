<template>
  <div>
    <Header />
    <div class="colcha-title">
        <a href="/colcha">
          <img src="~/assets/images/logocolcha.png">
        </a>
    </div>
    <div class="background_video">
      <video autoplay muted loop id="myVideo">
        <source src="~/assets/video/background.mp4" type="video/mp4">
      </video>
    </div>
    <Footer/>
  </div>
</template>

<script>
  export default {
    head: {
      title: "Imagen Latente | Tejido creativo"
    }
  }

</script>

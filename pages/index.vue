<template>
    <div>
        <Header />
        <div class="colcha-title">
            <a href="/colcha">
                <div class="colcha-img">
                    <img alt="Logo, Colcha de retazos" src="~/assets/images/logocolcha.webp" />
                </div>
            </a>
        </div>
        <!-- <div class="background_video">
      <video autoplay muted loop id="myVideo">
        <source src="~/assets/video/background.mp4" type="video/mp4">
      </video>
    </div> -->
        <div class="background-image"></div>
        <Footer />
    </div>
</template>

<script>
export default {
    head: {
        title: 'Imagen Latente | Tejido Artistico',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content:
                    'Somos un tejido artístico, una organización creativa gestora de proyectos audiovisuales. Queremos contribuir al fortalecimiento sociocultural en diferentes regiones y sectores del país. Realizamos proyectos que hacen sinergia entre la producción multimedia y el uso de nuevas tecnologías.',
            },
        ],
    },
}
</script>

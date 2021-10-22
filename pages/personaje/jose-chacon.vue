<template>
    <div>
        <Header />
        <section class="interna__container wrapper">
            <div class="interna__title">
                <h1>José Chacón</h1>
                <p>Viajero del Tiempo - Fundación Niños con Futuro</p>
            </div>
            <section class="interna__fotos">
                <FotosPersonaje
                    carpeta="josechacon"
                    alternativo="Fotografía, Blanca Pineda"
                />
            </section>
            <div class="interna__historia">
                <p>
                    Líder comunitario y cultural del Barrio Bella Flor y
                    Paraíso. Realiza acciones por el territorio a través de la
                    Fundación Niños con Futuro. A través del archivo, José
                    trabaja por rescatar y compartir la memoria de la localidad
                    en fotografías de los primeros habitantes, la arquitectura,
                    los eventos familiares y las transformaciones de los
                    espacios de la localidad. En una de sus actividades de
                    formación, José enseña a niños y jóvenes de la localidad a
                    redescubrir y maravillarse de los lugares a través de la
                    fotografía estenopeica, que es un proceso de tiempo y
                    atención plena en cada fotografía, espacios de formación que
                    son propicios para hablar de la memoria viva y en constante
                    construcción.
                </p>
                <h2>Archivo Fotográfico | viajes a través del tiempo</h2>
                <p>
                    El archivo fotográfico que José Chacón conserva, contiene
                    las fotografías de los primeros habitantes de la localidad.
                    En ellas, las reuniones familiares, los festivales, los
                    juegos de los niños en las cuadres y la arquitectura
                    cambiante son la muestra del paso del tiempo.
                </p>
            </div>
            <VideoPlayer video="https://www.youtube.com/embed/ME9bj87rJV8" />
           <!--  <div class="interna__podcast">
                <h2>Podcast</h2>
            </div> -->
        </section>

        <Footer />
    </div>
</template>

<script>
export default {
    head: {
        title: 'José Chacón | Colcha de Retazos',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Líder comunitario y cultural del Barrio Bella Flor y Paraíso. Realiza acciones por el territorio a través de la Fundación Niños con Futuro.',
            },
        ],
    },
}
</script>

<style></style>

<template>
    <div>
        <Header />
        <div class="container__colcha">
            <div class="colcha__nombres">
                <div class="colcha__title">
                    <h1>Colcha de retazos</h1>
                </div>
                <div class="colcha__enlaces">
                    <h2 v-for="nombre in nombres" :key="nombre.name">
                        <a target="_blank" :href="nombre.url">{{ nombre.name }}</a>
                    </h2>
                </div>
            </div>
            <section class="nosotros__text wrapper-nosotros">
                <h2>Imagen Latente Films</h2>
                <p>
                    Queremos contribuir al fortalecimiento sociocultural en
                    diferentes regiones y sectores del país. Realizamos
                    proyectos que hacen sinergia entre la producción multimedia
                    y el uso de nuevas tecnologías.
                </p>
                <p>
                    Generamos espacios pedagógicos como talleres, laboratorios y
                    cursos alrededor del audiovisual que permiten la discusión y
                    reflexión alrededor del mismo; creando de esta manera,
                    experiencias de comunicación que conectan la mirada
                    particular de cada quien con su comunidad y territorio, para
                    la preservación y construcción de memoria
                </p>
                <p>
                    Además, apoyamos el trabajo desarrollado por entidades que
                    fomentan el desarrollo cultural, social y medioambiental a
                    través de la gestión y ejecución de proyectos.
                </p>
            </section>
        </div>
        <Footer />
    </div>
</template>

<script>
export default {
    data() {
        return {
            nombres: [
                {
                    name: 'Blanca Pineda',
                    img: 'blancapineda.jpg',
                    url: '/personaje/blanca-pineda',
                },
                {
                    name: 'José Chacón',
                    img: 'josechacon.jpg',
                    url: '/personaje/jose-chacon',
                },
                {
                    name: 'Soranny, Mille, Liliana',
                    img: 'sorany.jpg',
                    url: '/personaje/colectivo-raices',
                },
                {
                    name: 'Miguel Ángel Lozano',
                    img: 'angel.jpg',
                    url: '/personaje/miguel-angel',
                },
                {
                    name: 'Videlma Yaima & Mayerli Peña',
                    img: 'videlma.jpg',
                    url: '/personaje/casa-mayor',
                },
                {
                    name: 'Jorge Ariza & Nury Tique',
                    img: 'jorge.jpg',
                    url: '/personaje/jorge-y-nury',
                },
                {
                    name: 'Humberto Oviedo',
                    img: 'humberto.jpg',
                    url: '/personaje/humberto',
                },
                {
                    name: 'Esperanza Bustos',
                    img: 'esperanza.jpg',
                    url: '/personaje/esperanza',
                },
                {
                    name: 'Leidy Salazar & Carlos Solano',
                    img: 'carlos.jpg',
                    url: '/personaje/leidy-y-carlos',
                },
                {
                    name: 'Pablo Gruezo',
                    img: 'pablo.jpg',
                    url: '/personaje/pablo-gruezo',
                },
            ],
        }
    },
}
</script>

<style></style>

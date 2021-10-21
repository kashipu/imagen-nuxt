<template>
    <div>
        <Header />
        <div class="colcha__enlaces">
            <div class="enlaces__box">
                <h2 v-for="nombre in nombres" :key="nombre.name">
                    <a target="_blank" :href="nombre.url">{{ nombre.name }}</a>
                </h2>
            </div>
        </div>
        <section class="nosotros__text wrapper-nosotros">
            <h2>Colcha de Retazos</h2>
            <h3></h3>
            <p>
                Colcha de Retazos es un tejido diverso formado por muchos
                rostros, historias y encuentros inspiradores. A cada una de las
                personas aquí retratadas, agradecemos su trabajo de compartir la
                riqueza y el patrimonio de Ciudad Bolívar.
            </p>
            <p>
                Este proyecto ha sido realizado gracias a la Beca para el
                Reconocimiento y La Activación del Patrimonio Cultural de
                Sectores Sociales 2021 del Instituto Distrital de Patrimonio
                Cultural de Bogotá.
            </p>
        </section>
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
    head: {
        title: 'Colcha de Retazos | Imagen Latente',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Colcha de Retazos es un tejido diverso formado por muchos rostros, historias y encuentros inspiradores. A cada una de las personas aquí retratadas, agradecemos su trabajo de compartir la riqueza y el patrimonio de Ciudad Bolívar.',
            },
            { hid: 'og:image', property: 'og:image', content: '~/assets/images/colchaderetazos.png',}
        ],
    },
}
</script>

<style></style>

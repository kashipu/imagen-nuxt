<template>
    <div>
        <Header />
        <section class="interna__container wrapper">
            <div class="interna__title">
                <h1>Pablo Gruezo</h1>
                <p>Fundación Mizizi Ya mababú</p>
            </div>
            <section class="interna__fotos">
                <FotosPersonaje carpeta="pablo" alternativo="Fotografía, Pablo Gruezo" />
            </section>
            <section class="interna__historia">
                <p>
                    Gestor y Líder cultural y deportivo de la localidad de
                    Ciudad Bolívar. Pablo es poeta, compositor y músico de la
                    agrupación raíces tumaqueñas. Los sonidos y los cantos
                    tradicionales son los medios para compartir el patrimonio
                    cultural del pacifico colombiano en la capital del país. A
                    través de sus actividades de enseñanza musical (cantos),
                    danzas, literatura, artesanías, medicina ancestral, deportes
                    y otras áreas la Fundación Mizizi Ya Mababú, fortalece el
                    conocimiento y las capacidades de niños, jóvenes y adultos
                    del barrio Potosí. Llevar siempre las raíces a donde se vaya
                    es un acto de valor y apropiación por la herencia cultural
                    de los pueblos ancestrales.
                </p>
                <h2>Instrumentos musicales con materiales reciclables</h2>
                <p>
                    Semillas, recipientes vacíos, canecas y botellas son los
                    recursos esenciales para crear melodías como las del
                    currulao y los arrullos. Todo los elementos que están a
                    nuestro alrededor pueden ser artefactos musicales para
                    compartir las tradiciones y el patrimonio cultural de los
                    territorios.
                </p>
            </section>
            <VideoPlayer video="https://www.youtube.com/embed/spPFpRo3wp0" />
            <div class="interna__podcast">
                <h2>Podcast</h2>
            </div>
        </section>

        <Footer />
    </div>
</template>

<script>
export default {
     head: {
        title: 'Pablo Gruezo | Colcha de retazos',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content:
                    'Gestor y Líder cultural y deportivo de la localidad de Ciudad Bolívar. Pablo es poeta, compositor y músico de la agrupación raíces tumaqueñas',
            },
        ],
    },
}
</script>

<style></style>

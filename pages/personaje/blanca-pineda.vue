<template>
    <div>
        <Header />
        <section class="interna__container wrapper">
            <div class="interna__title">
                <h1>Blanca Pineda</h1>
                <p>Mujeres Tierra y Memoria</p>
            </div>
            <section class="interna__fotos">
                <FotosPersonaje alternativo="Fotografía, Blanca Pineda" />
            </section>
            <div class="interna__historia">
                <p>
                    Líder social y cultural, escritora e investigadora, se ha
                    dedicado a la salvaguardia de la memoria y la realización
                    procesos de apropiación del patrimonio cultural de la
                    localidad de Ciudad Bolívar. Blanca es una tejedora de
                    historias y narrativas de la localidad, quien ha promovido
                    iniciativas culturales para fomentar la apropiación por el
                    patrimonio material e inmaterial del territorio. Desde las
                    artes, su colectivo, Mujeres, Tierra y Memoria, ha realizado
                    procesos de memoria del barrio Ismael Perdomo; encuentros
                    para la transmisión de saberes y el diálogo
                    intergeneracional e intersectorial, el fortalecimiento de
                    las redes de mujeres, víctimas y poblaciones étnicas.
                </p>
                <h2>Colcha de mil retazos</h2>
                <p>
                    Uno de los 18 libros que ha escrito Blanca, el cual relata
                    la historia de la vida local, historias que se tejen desde
                    las transformaciones. Como ella explica, son retazos de
                    historias de habitantes del barrio Ismael Perdomo, miles de
                    historias que se juntan y se entrelazan. Miles de
                    pensamientos, sueños y recuerdos. Es así que Colcha de mil
                    retazos es un libro donde el recuerdo es una forma de
                    reencuentro y de perdón para el gran tejido de diversidad
                    que es la localidad.
                </p>
            </div>
            <VideoPlayer video="https://www.youtube.com/embed/LTTaB5Mi4rE" />
            <div class="interna__podcast">
                <h2>Podcast</h2>
                <iframe
                    src="https://open.spotify.com/embed/episode/2yy5RoOy06ZpSujpqWTEwY?utm_source=generator"
                    width="100%"
                    height="232"
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
            </div>
        </section>

        <Footer />
    </div>
</template>

<script>
export default {
    head: {
        title: 'Blanca Pineda | Colcha de Retazos',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content:
                    'Líder social y cultural, escritora e investigadora, se ha dedicado a la salvaguardia de la memoria y la realización procesos de apropiación del patrimonio cultural de la localidad de Ciudad Bolívar.',
            },
        ],
    },
}
</script>

<style></style>

<template>
    <div>
        <Header />
        <section class="interna__container wrapper">
            <div class="interna__title">
                <h1>Miguel Ángel Lozano</h1>
                <p>Sastre & costurero</p>
            </div>
            <section class="interna__fotos">
                <FotosPersonaje
                    carpeta="miguelangel"
                    alternativo="Fotografía, Blanca Pineda"
                />
            </section>
            <section class="interna__historia">
                <p>
                    Miguel Ángel es residente de la localidad desde hace 30 años
                    cuando en el barrio Paraíso en Ciudad Bolívar se empezaban a
                    construir las primeras casas y llegaban los primeros
                    habitantes a la localidad. Nació en Chaparral, Tolima, y
                    desde muy temprana edad aprendió del arte de la costura, ya
                    que había una gran demanda de prendas en su pueblo natal. En
                    su taller de costura se han tejido diversas historias, desde
                    las viejas prendas impregnadas de recuerdos y afecto, como
                    también las nuevas por diseñar en busca de su propio relato.
                    Detrás de estas ropas, permanecen las memorias de adultos,
                    jóvenes, niños y niñas, procedentes de diversos lugares del
                    país. Miguel ha transmitido su conocimiento y les ha
                    enseñado a personas víctimas del conflicto y en procesos de
                    reinserción a coser para de alguna manera hilar nuevas
                    oportunidades.
                </p>
                <h2>Burro de planchado</h2>
                <p>
                    Después de la costura, el vapor de la plancha se extiende
                    sobre un burro de madera y tela remendada, para hacer los
                    terminados de las prendas. Este burro de planchado fue un
                    obsequio y fruto de una amistad muy cercana. Cuando Miguel
                    llegó en busca de oportunidades a Bogotá, el sastre Felipe
                    le abrió sus puertas y compartieron muchos momentos
                    significativos. Antes del fallecimiento, le dejó esta
                    herramienta a Miguel, para que la tuviera en sus recuerdos.
                </p>
            </section>
            <VideoPlayer video="https://www.youtube.com/embed/lFFxGpBCyck" />
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
        title: 'Miguel Ángel Lozano | Colcha de retazos',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content:
                    'Miguel Ángel es residente de la localidad desde hace 30 años cuando en el barrio Paraíso en Ciudad Bolívar se empezaban a construir las primeras casas',
            },
        ],
    },
}
</script>

<style></style>

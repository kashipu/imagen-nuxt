<template>
    <div>
        <Header />
        <section class="interna__container wrapper">
            <div class="interna__title">
                <h1>Leidy Salazar & Carlos Solano</h1>
                <p>Taller de letras Violetta</p>
            </div>
            <section class="interna__fotos">
                <FotosPersonaje
                    carpeta="leidycarlos"
                    alternativo="Fotografía, Leidy Salazar & Carlos Solano"
                />
            </section>
            <div class="interna__historia">
                <p>
                    Taller de letras Violetta, es una organización y biblioteca
                    comunitaria ubicada en el Barrio El Paraíso, proyecto
                    liderado por Leidy Salazar y Carlos Lozano. En este espacio,
                    los procesos de creación y los laboratorios de lectura se
                    convierten en los mecanismos para que las niñas, niños,
                    jóvenes y adultos puedan encontrarse para aprender,
                    compartir sus sueños y explorar sus habilidades. La
                    integración de los idiomas y las artes como la danza, el
                    teatro, las artes plásticas y la literatura son un proceso
                    fundamental para el aprendizaje y el desarrollo de
                    habilidades diversas que invitan a aprender de manera
                    creativa.
                </p>
                <h2>Libros rescatados</h2>
                <p>
                    Detrás de los libros de ficción, historias infantiles,
                    cómics y otros géneros literarios, una de las historias
                    fascinantes en el taller de letras Violetta es la llegada de
                    los primeros libros a la biblioteca, muchos de los libros
                    que aquí se encuentran fueron rescatados de centros de
                    acopio de reciclaje. Aquí, tuvieron una segunda vida, son
                    elementos con su propia historia que dejan una huella
                    especial en todos quienes toman el tiempo para abrir sus
                    páginas.
                </p>
            </div>
            <VideoPlayer video="https://www.youtube.com/embed/TKIf6ukp_ng"/>
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
        title: 'Leidy Salazar & Carlos Solano | Colcha de Retazos',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Taller de letras Violetta, es una organización y biblioteca comunitaria ubicada en el Barrio El Paraíso, proyecto liderado por Leidy Salazar y Carlos Lozano.',
            },
        ],
    },
}
</script>

<style></style>

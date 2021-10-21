<template>
    <div>
        <Header />
        <section class="interna__container wrapper">
            <div class="interna__title">
                <h1>Humberto Oviedo</h1>
            </div>
            <section class="interna__fotos">
                <FotosPersonaje
                    carpeta="humberto"
                    alternativo="Fotografía, Humberto Oviedo"
                />
            </section>
            <div class="interna__historia">
                <p>
                    En altos de la estancia, la historia de Humberto Oviedo
                    resuena por su relación con la tierra, la conservación de
                    los saberes campesinos y la réplica de herramientas para la
                    conservación del medio ambiente en el territorio. Gracias a
                    los proyectos autónomos, la gestión con distintas entidades,
                    colectivos y agentes del sector; la huerta se ha convertido
                    en un lugar donde convergen distintos saberes culturales
                    como la poesía, el arte, los saberes populares, la medicina
                    ancestral, entre otras. Humberto trabaja para compartir con
                    todo aquel que quiera acercarse a la huerta sus
                    conocimientos y experiencias para transformar los espacios
                    de la localidad de Ciudad Bolívar.
                </p>
                <h2>Plantas sembradas en recipientes reciclados</h2>
                <p>
                    La recuperación de objetos para que estos sean transformados
                    y tengan una vida útil prolongada, es una de las actividades
                    que realiza Humberto para continuar desarrollando los
                    procesos productivos de la Huerta. Los recipientes plásticos
                    y de icopor, se convierten en semilleros de plantas que son
                    trasplantadas posteriormente para que sus raíces crezcan
                    ampliamente.
                </p>
            </div>
            <VideoPlayer video="https://www.youtube.com/embed/oasBt5V6YeE" />
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
        title: 'Humberto Oviedo | Colcha de Retazos',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'En altos de la estancia, la historia de Humberto Oviedo resuena por su relación con la tierra, la conservación de los saberes campesinos',
            },
        ],
    },
}
</script>

<style></style>

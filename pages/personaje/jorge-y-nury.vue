<template>
    <div>
        <Header />
        <section class="interna__container wrapper">
            <div class="interna__title">
                <h1>Jorge Ariza & Nury Tique</h1>
                <p>
                    Líderes comunitarios campesinos, desplazados del sur del
                    Tolima.
                </p>
            </div>
            <section class="interna__fotos">
                <FotosPersonaje carpeta="jorgenury" alternativo="Fotografía, Jorge Ariza y Nury Tique" />
            </section>
            <section class="interna__historia">
                <p>
                    Llegaron a Bogotá desde el 2004 y habitan la localidad en
                    uno de los asentamientos cercano al barrio Paraíso. Jorge y
                    Nury reconstruyen el ecosistema a través de acciones para el
                    cuidado del medio ambiente. Los objetos que son desechados
                    por las grandes urbes, en el espacio de Jorge y Nury tienen
                    una segunda vida. Dentro de su vivienda en constante
                    transformación se encuentran objetos reconstruidos,
                    reparados y con una vida útil extendida, así como también la
                    posibilidad de cohabitar con la naturaleza en su huerta
                    autosustentable.
                </p>
                <h2>Taza de Baño- Olla arrocera transformados en Maceta</h2>
                <p>
                    La modernización, los cambios de artefactos hicieron que
                    estos objetos cotidianos se convirtieran en elementos para
                    la siembra de plantas. Como estas materas, hay muchas
                    alrededor de la casa de Jorge y Nury, hechas de elementos
                    inesperados con una segunda oportunidad.
                </p>
            </section>
            <VideoPlayer video="https://www.youtube.com/embed/xrTuAh6ITa0" />
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
        title: 'Jorge Ariza & Nury Tique | Colcha de Retazos',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Llegaron a Bogotá desde el 2004 y habitan la localidad en uno de los asentamientos cercano al barrio Paraíso. Jorge y Nury reconstruyen el ecosistema a través de acciones para el cuidado del medio ambiente.',
            },
        ],
    },
}
</script>

<style></style>

<template>
    <div>
        <Header />
        <section class="interna__container wrapper">
            <div class="interna__title">
                <h1>Mayerli Peña & Videlma Yaima</h1>
                <p>Casa Mayor</p>
            </div>
            <section class="interna__fotos">
                <FotosPersonaje
                    carpeta="casamayor"
                    alternativo="Fotografía, Blanca Pineda"
                />
            </section>
            <div class="interna__historia">
                <p>
                    Mayerli Peña y Videlma son lideresas comunitarias quienes
                    guían el proyecto social que incluyen personas de la tercera
                    edad en diversos procesos sociales y culturales. Desde la
                    transmisión de saberes, actividades de formación, artes
                    plásticas, danzas y acciones de aprovechamiento del
                    reciclaje para que los adultos mayores pertenecientes a la
                    localidad Ciudad Bolívar continúen desarrollando habilidades
                    y aportando a la construcción social. A través de este
                    proyecto, las personas que participan en estos espacios han
                    realizado carnavales y muestras culturales para exhibir las
                    piezas realizadas con material reciclado y para fomentar
                    acciones de respeto y entendimiento hacia la población de
                    tercera edad desde espacios para la transmisión de saberes y
                    encuentros con otras generaciones.
                </p>
                <h2>Faldas en material Polisombra</h2>
                <p>
                    Dentro de las actividades culturales que se realizan en la
                    Casa Mayor, se encuentran los bailes y danzas tradicionales
                    colombianos. Las largas faldas que acompañan los movimientos
                    son hechas a partir de polisombra, un material que se
                    utiliza en las construcciones y que rápidamente es
                    desechado. Aquí las y los adultos mayores se juntan para
                    coser, para darle una segunda vida a estos materiales y así
                    contagiarse de alegría y movimiento sin distinción de la
                    edad.
                </p>
            </div>
            <VideoPlayer video="https://www.youtube.com/embed/-CJW32M0e1E" />
            <div class="interna__podcast">
                <h2>Podcast</h2>
                <iframe
                    src="https://open.spotify.com/embed/episode/7h86MHdhXKOX5qrPixuOCI"
                    width="100%"
                    height="232"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                ></iframe>
            </div>
        </section>

        <Footer />
    </div>
</template>

<script>
export default {}
</script>

<style></style>

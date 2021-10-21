<template>
    <div>
        <Header />
        <section class="interna__container wrapper">
            <div class="interna__title">
                <h1>Esperanza Bustos</h1>
                <p>Los consentidos</p>
            </div>
            <section class="interna__fotos">
                <FotosPersonaje
                    carpeta="raices"
                    alternativo="Fotografía, Blanca Pineda"
                />
            </section>
            <div class="interna__historia">
                <p>
                    Desde 1989 el trabajo de Esperanza se ha centrado en el
                    servicio de la población de la tercera edad. Entre sus
                    archivos fotográficos se navega por sonrisas en medio de
                    viajes, encuentros sociales, graduaciones, bailes y juegos.
                    Aquí las personas de la tercera edad tienen un espacio para
                    ser escuchados, para reir, para recordar la juventud, para
                    viajar y para encontrarse con personas con las cuales pueden
                    compartir intereses. Las artesanías, cuadros, pinturas y los
                    objetos de uso cotidiano son hechos en talleres para la
                    reutilización de materiales como el plástico, semillas,
                    bolsas de paquetes y otros. En la época del confinamiento,
                    “Los Consentidos” siempre están pendientes para el
                    reencuentro.
                </p>
                <h2>Botellas Plásticas y de vidrio artesanías decorativas</h2>
                <p>
                    La recolección y transformación de botellas plásticas en
                    gallinas, es uno de los tantos objetos que las personas del
                    grupo “Los consentidos'' han aprendido a hacer con
                    materiales reciclables. Además de ser estas actividades del
                    aprovechamiento del tiempo, muchos de ellos se convierten en
                    unidades para la venta, siendo un ingreso extra para los
                    abuelos.
                </p>
            </div>
            <VideoPlayer video="https://www.youtube.com/embed/8IEcBBkHCUo" />
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

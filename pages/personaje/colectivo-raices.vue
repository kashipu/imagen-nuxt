<template>
    <div>
        <Header />
        <section class="interna__container wrapper">
            <div class="interna__title">
                <h1>Soranny Vargas - Mille Palomino - Liliana Reyes</h1>
                <p>Colectivo Artístico Raíces</p>
            </div>
            <section class="interna__fotos">
                <FotosPersonaje
                    carpeta="raices"
                    alternativo="Fotografías, Soranny Vargas - Mille Palomino - Liliana Reyes"
                />
            </section>
            <div class="interna__historia">
                <p>
                    Colectivo de tres mujeres gestoras de proyectos sociales,
                    culturales y artísticos con niños y jóvenes de la localidad
                    de Ciudad Bolívar. Soranny, Mille y Liliana son madres, sus
                    hijas e hijo participan activamente en los proyectos y tomas
                    culturales; son ellos el principal motor para cada una de
                    ellas. Son también las semillas en crecimiento de las
                    acciones de cuidado por el medio ambiente, la incursión de
                    las artes plásticas y visuales, la práctica de rutinas
                    circenses y el diálogo a través de cineclubs. Raíces es la
                    búsqueda por conectar con la esencia: Desde lo materno, lo
                    individual, lo colectivo, y lo que se siembra con amor para
                    el futuro, los niños y jóvenes que cultivan sus sueños.
                </p>
                <h2>Planta de Aguacate</h2>
                <p>
                    Esta planta fue sembrada por Soranny e Izel, representa un
                    proyecto de cuidado y crecimiento entre madre e hija. Una
                    manera de echar raíces, ver crecer un tallo fortalecido y
                    admirar la belleza de sus hojas.
                </p>
            </div>
            <VideoPlayer video="https://www.youtube.com/embed/zLRrM7zwE8Y" />
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
export default {
    head: {
        title: 'Soranny Vargas - Mille Palomino - Liliana Reyes | Colcha de Retazos',
        meta: [
            {
                hid: 'description',
                name: 'description',
                content: 'Colectivo de tres mujeres gestoras de proyectos sociales, culturales y artísticos con niños y jóvenes de la localidad de Ciudad Bolívar',
            },
        ],
    },
}
</script>

<style></style>

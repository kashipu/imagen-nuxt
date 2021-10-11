<template>
    <div>
        <Header />
        <div class="nosotros wrapper-nosotros">
            <div class="nosotros__box">
                <h1>
                    Somos un tejido artístico, una organización creativa gestora
                    de proyectos audiovisuales.
                </h1>
            </div>
            <section class="nosotros__text">
                <h2>Imagen Latente Films</h2>
                <p>
                    Queremos contribuir al fortalecimiento sociocultural en
                    diferentes regiones y sectores del país. Realizamos
                    proyectos que hacen sinergia entre la producción multimedia
                    y el uso de nuevas tecnologías.
                </p>
                <p>
                    Generamos espacios pedagógicos como talleres, laboratorios y
                    cursos alrededor del audiovisual que permiten la discusión y
                    reflexión alrededor del mismo; creando de esta manera,
                    experiencias de comunicación que conectan la mirada
                    particular de cada quien con su comunidad y territorio, para
                    la preservación y construcción de memoria
                </p>
                <p>
                    Además, apoyamos el trabajo desarrollado por entidades que
                    fomentan el desarrollo cultural, social y medioambiental a
                    través de la gestión y ejecución de proyectos.
                </p>
            </section>
            <section class="work-team">
                <h2>Equipo de trabajo</h2>
                <div class="work-team-desk">
                    <Member/>
                    <Member/>
                    <Member/>
                    <Member/>
                </div>
            </section>
        </div>
        <Footer />
    </div>
</template>

<script>
import nosotros from './nosotros.vue'
export default {
    components: {
        nosotros,
    },
}
</script>

<style></style>

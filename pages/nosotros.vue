<template>
    <div>
        <Header />
            <div class="nosotros__box">
                <div class="nosotros__title wrapper-nosotros">
                    <h1>
                        Somos un <span>tejido artístico</span>, una organización creativa gestora
                        de proyectos audiovisuales.
                    </h1>
                </div>
            </div>
        <div class="nosotros wrapper-nosotros">
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
            <section class="nosotros__fotos">
                <div class="fotos_container">
                    <img src="https://via.placeholder.com/550x700" alt="" srcset="">
                    <img src="https://via.placeholder.com/550x700" alt="" srcset="">
                    <img src="https://via.placeholder.com/550x700" alt="" srcset="">
                </div>
            </section>
            <section class="work-team">
                <h2>Equipo de trabajo</h2>
                <div class="work-team-desk">
                    <Member 
                    name="Natalia Rodríguez"
                    cargo="Productora de contenidos audiovisuales"
                    summ="Productora de contenidos audiovisuales y fotografía. Especialista en gestión de activos digitales. Administradora financiera en proyectos para cine, televisión y nuevas plataformas."
                    />
                    <Member 
                    name="Solanlli Lozano"
                    cargo="Directora e investigadora."
                    summ="Ha trabajado en el departamento de guión y dirección de obras cinematográficas, así como en el desarrollo de proyectos audiovisuales para organizaciones sociales y tv pública."
                    />
                    <Member 
                    name="Yessenia Vasquez López"
                    cargo="Coordinadora de proyectos Realizadora audiovisual"
                    summ="Cuenta con experiencia en la coordinación y asistencia de proyectos culturales y cinematográficos. Su trabajo se enfoca en la creación desde el dispositivo fotográfico, la gestión cultural y la formación de públicos en cine, fotografía y nuevos medios."
                    />
                    <Member 
                    name="Camilo Andrés Peralta Guzmán"
                    cargo="Realizador y Editor Realizador audiovisual"
                    summ="Realizador y Editor Realizador audiovisual y editor conceptual con experiencia en videos documentales, crónicas y reportajes corporativos, institucionales, videoclips y cortometrajes."
                    />
                    <Member 
                    name="William Moreno Vargas"
                    cargo="Diseñador Gráfico, Webmaster"
                    summ="Diseñador gráfico con experiencia en diseño web y marketing digital, especializado en diseño de interfaces, experiencia de usuario y gestión de proyectos digitales."
                    />
                </div>
            </section>
        </div>
            <SliderLogos/>
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

<style>
h2 {
    color: white;
}
</style>

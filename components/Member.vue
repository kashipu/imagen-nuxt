<template>
        <div class="team-member">
            <div class="member-image">
                <img src="https://via.placeholder.com/300x300" alt="" />
            </div>
            <div class="member-title">
                <h3>Nombre miembro del equipo</h3>
                <p>Cargo del miembro del equipo</p>
            </div>
            <div class="member-body">
                <p>
                    Escribió y dirigió “Los días de la ballena”, su ópera prima.
                    Ha participado en el casting y la preparación de actores de
                    películas nacionales e internacionales.
                </p>
            </div>
        </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Nombre Personaje"
        },
        image: {
            type: String,
            default: "http://via.placeholder.com/400x400"
        },
        url: {
            type: String,
            default: "/"
        }
    }
}
</script>

<style></style>

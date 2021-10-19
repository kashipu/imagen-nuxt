<template>
    <div class="team-member">
        <!--  <div class="member-image">
                <img src="https://via.placeholder.com/300x300" alt="" />
            </div> -->
        <div class="member-title">
            <h3>{{name}}</h3>
            <p>{{cargo}}</p>
        </div>
        <div class="member-body">
            <p>
                {{summ}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'Nombre miembro del equipo',
        },
        cargo: {
            type: String,
            default: 'Cargo del miembro del equipo',
        },
        summ: {
            type: String,
            default:'Escribió y dirigió “Los días de la ballena”, su ópera prima. Ha participado en el casting y la preparación de actores de películas nacionales e internacionales.',
        },
    },
}
</script>

<style></style>

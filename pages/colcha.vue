<template>
    <div>
        <Header/>
        <div class="container__personajes">
            <Personaje v-for="nombre in nombres" :key="nombre.nombres" :title="nombre.name" :image="nombre.img"/>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nombres: [
                {name: "Carlos Montoya", img: "blancapineda.jpg"},
                {name: "Carlos Montoya", img: "carlos.jpg"},
                {name: "Carlos Montoya", img: "esperanza.jpg"},
                {name: "Carlos Montoya", img: "angel.jpg"},
                {name: "Carlos Montoya", img: "angel.jpg"},
                {name: "Carlos Montoya", img: "angel.jpg"},
                {name: "Carlos Montoya", img: "angel.jpg"},
                {name: "Carlos Montoya", img: "angel.jpg"},
                {name: "Carlos Montoya", img: "angel.jpg"},
                {name: "Carlos Montoya", img: "angel.jpg"},
            ],
        }
    }
}
</script>

<style>

</style>
<template>
    <div>
        <Header/>
        <div class="container__personajes wrapper">
            <Personaje v-for="nombre in nombres" :key="nombre.nombres" :title="nombre.name" :image="nombre.img" :url="nombre.url"/>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nombres: [
                {name: "Carlos Montoya", img: "blancapineda.jpg", url:"/personaje/blanca-pineda"},
                {name: "Carlos Montoya", img: "carlos.jpg", url:"/contacto"},
                {name: "Carlos Montoya", img: "esperanza.jpg", url:"/"},
                {name: "Carlos Montoya", img: "angel.jpg", url:"/"},
                {name: "Carlos Montoya", img: "angel.jpg", url:"/"},
                {name: "Carlos Montoya", img: "angel.jpg", url:"/"},
                {name: "Carlos Montoya", img: "angel.jpg", url:"/"},
                {name: "Carlos Montoya", img: "angel.jpg", url:"/"},
                {name: "Carlos Montoya", img: "angel.jpg", url:"/"},
                {name: "Carlos Montoya", img: "angel.jpg", url:"/"},
            ],
        }
    }
}
</script>

<style>

</style>
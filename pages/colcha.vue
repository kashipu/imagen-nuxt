<template>
    <div>
        <Header/>
        <div class="container__personajes wrapper">
            <Personaje v-for="nombre in nombres" :key="nombre.nombres" :title="nombre.name" :image="nombre.img" :url="nombre.url"/>
        </div>
        <Footer/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nombres: [
                {name: "Blanca Pineda", img: "blancapineda.jpg", url:"/personaje/blanca-pineda"},
                {name: "José Chacón", img: "josechacon.jpg", url:"/personaje/jose-chacon"},
                {name: "Soranny Vargas, Mille Palomino, Liliana Reyes", img: "sorany.jpg", url:"/personaje/colectivo-raices"},
                {name: "Miguel Ángel Lozano", img: "angel.jpg", url:"/personaje/miguel-angel"},
                {name: "Videlma Yaima, Mayerli Peña", img: "videlma.jpg", url:"/personaje/casa-mayor"},
                {name: "Jorge Ariza & Nury Tique", img: "jorge.jpg", url:"/personaje/jorge-y-nury"},
                {name: "Humberto Oviedo", img: "humberto.jpg", url:"/personaje/humberto"},
                {name: "Esperanza Bustos", img: "esperanza.jpg", url:"/personaje/esperanza"},
                {name: "Leidy Salazar, Carlos Solano", img: "carlos.jpg", url:"/personaje/leidy-y-carlos"},
                {name: "Pablo Gruezo", img: "pablo.jpg", url:"/personaje/pablo-gruezo"},
            ],
        }
    }
}
</script>

<style>

</style>
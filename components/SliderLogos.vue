<template>
    <div class="slider-logos">
        <ul>
            <li v-for="(image, i) in logos" :key="i">
                <img :src="require(`~/assets/images/logos/${image}`)" alt="" />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            logos: [
                'bibliored.png',
                'cinemateca.png',
                'fuga.png',
                'ach.png',
                'idartes.png',
                'idpc.png',
                'mincultura.png',
                'mintic.png',
                'poli.png'
            ],
        }
    },
}
</script>

<style></style>

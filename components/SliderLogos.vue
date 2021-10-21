<template>
    <div class="slider-logos">
        <div class="logos-container wrapper-nosotros">
            <img
                v-for="(image, i) in logos"
                :key="i"
                :src="require(`~/assets/images/logos/${image}`)"
                alt=""
            />
        </div>
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
                'poli.png',
            ],
        }
    },
}
</script>

<style></style>

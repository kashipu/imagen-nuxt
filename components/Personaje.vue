<template>
<div>
    <div class="personaje">
        <NuxtLink :to="url">
        <div class="personaje__img">
            <img :src="require(`~/assets/images/${image}`)" :alt="title">
        </div>
        <div class="personaje__body">
            <div class="personaje__nombre">
                <h2>{{ title }}</h2>
            </div>
        </div>
        </NuxtLink>
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

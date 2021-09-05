<template>
<div>
    <div class="personaje">
        <NuxtLink to="/">
        <img class="personaje__img" :src="require(`~/assets/images/${image}`)" :alt="title">
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
        }
    }
}
</script>

<style></style>

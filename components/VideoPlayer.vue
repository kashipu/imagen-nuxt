<template>
    <section class="player__container">
        <iframe
            width="100%"
            height="100%"
            :src="video"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            fullscreen
        ></iframe>
    </section>
</template>

<script>
export default {
    props: {
        video: {
            type: String,
            default: 'https://www.youtube.com/embed/EEoq6AgWb_4',
        },
    },
}
</script>

<style></style>

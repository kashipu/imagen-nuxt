<template>
    <div>
        <div class="contenedor__fotos">
            <div class="contenedor__principal">
                <img
                    :src="require(`~/assets/images/personajes/${carpeta}/foto1.jpg`)"
                    :alt="alternativo"
                    srcset=""
                />
            </div>
            <div class="contenedor__secundario">
                <img
                    :src="require(`~/assets/images/personajes/${carpeta}/foto2.jpg`)"
                    :alt="alternativo"
                    srcset=""
                />
                <img
                    :src="require(`~/assets/images/personajes/${carpeta}/foto3.jpg`)"
                    :alt="alternativo"
                    srcset=""
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        carpeta: {
            type: String,
            default: 'blanca',
        },
        alternativo: {
            type: String,
            default: 'Fotografía del personaje',
        },
    },
}
</script>

<style>
</style>

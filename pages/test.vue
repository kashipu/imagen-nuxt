<template>
    <div>
        <div class="contenedor__fotos">
            <div class="contenedor__principal">
            </div>
            <div class="contenedor__secundario">
                <img
                    src="http://via.placeholder.com/740x545"
                    alt=""
                    srcset=""
                />
                <img
                    src="http://via.placeholder.com/740x545"
                    alt=""
                    srcset=""
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style>
.contenedor__fotos {
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
}

.contenedor__secundario {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
}

.contenedor__principal img {
    width: 100%;
}

.contenedor__secundario img {
    width: 100%;
}

@media (max-width: 800px) {
    .contenedor__fotos {
        grid-template-columns: 1fr;
        padding: 2rem;
    }
}
</style>

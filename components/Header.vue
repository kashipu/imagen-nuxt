<template>
    <header class="header">
        <div class="header__container wrapper">
            <div class="header__logo">
                <img src="~/assets/images/logoblanco.svg" alt="" />
            </div>
            <nav class="header__nav">
                <ul>
                    <li><NuxtLink to="/">Home page</NuxtLink></li>
                    <li><NuxtLink to="/nosotros">Nosotros</NuxtLink></li>
                    <li><NuxtLink to="/colcha">Colcha de retazos</NuxtLink></li>
                    <li><NuxtLink to="/contacto">Contacto</NuxtLink></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {}
</script>

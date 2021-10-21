<template>
    <header class="header">
        <div class="header__container wrapper">
            <div class="header__logo">
                <NuxtLink to="/">
                <img src="~/assets/images/logoblanco.svg" alt="" />
                </NuxtLink>
                <div :class="['nav__burguer', { noshow: buttonState }]">
                    <a v-on:click="navMenu" class="burguer__button">
                        <img src="~/assets/images/menu.svg" alt="" />
                    </a>
                </div>
            </div>
            <nav :class="['header__nav', { noshow: navState }]">
                <ul>
                    <li><NuxtLink to="/">Home page</NuxtLink></li>
                    <li><NuxtLink to="/nosotros">Nosotros</NuxtLink></li>
                    <li><NuxtLink to="/colcha">Colcha de retazos</NuxtLink></li>
                    <!-- <li><NuxtLink to="/contacto">Contacto</NuxtLink></li> -->
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            buttonState: true,
            navState: false,
        }
    },
    methods: {
        navMenu: function () {
            this.navState = !this.navState
        },
        onResize(event) {
            if (innerWidth > 800) {
                this.buttonState = true
                this.navState = false
            } else {
                this.buttonState = false
                this.navState = true
            }
        },
    },
    mounted() {
        // Register an event listener when the Vue component is ready
        window.addEventListener('resize', this.onResize)
        this.onResize()
    },

    beforeDestroy() {
        // Unregister the event listener before destroying this Vue instance
        window.removeEventListener('resize', this.onResize)
    },
}
</script>

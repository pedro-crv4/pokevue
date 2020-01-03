<template>
    <div>
        <top-bar/>
        <div class="content container">
            <router-view :url="baseURL"/>
            <div class="bg-overlay" v-show="isVisible" @click="hideOverlay">
                <div class="spinner"></div>
            </div>
        </div>
        
    </div>
</template>

<script>

import TopBar from '@/components/TopBar'

export default {
    name: 'Default',
    components: {TopBar},
    computed: {
        isVisible() {
            return this.$store.state.isVisible
        }
    },
    data() {
        return {
            baseURL: 'https://pokeapi.co/api/v2/'
        }
    },
    methods: {
        showOverlay: function() {
            this.$store.commit('show');
            console.log('showing');
        },
        hideOverlay: function() {
            this.$store.commit('hide');
            console.log('hiding');
        }
    }
}
</script>

<style lang="scss">
    .content {
        padding-top: 40px;
    }
    .bg-overlay {
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        opacity: 0.7;
        background: $black;
        .spinner {
            background: url('../assets/pokeball-transparent.webp') no-repeat center/20%;
            animation: spin 800ms linear infinite;
            width: 100vw;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
        }
    }
</style>
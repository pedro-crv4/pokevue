<template>
    <div>
        <top-bar/>
        <div class="content container">
            <router-view :url="baseURL"/>
        </div>
        
    </div>
</template>

<script>

import TopBar from '@/components/TopBar'

export default {
    name: 'Default',
    components: {TopBar},
    data() {
        return {
            baseURL: 'https://pokeapi.co/api/v2/'
        }
    }
}
</script>

<style lang="scss">
    .content {
        padding-top: 40px;
    }

</style>
<template>
    <div class="container">
        <router-link to="/">
            <div class="holder-logo h-mb40 h-text-center">
                <img src="../assets/pokeball.png" alt="" class="logo pokeball">
                <h1>PokeVue</h1>
            </div>
        </router-link>
        <nav>
            <ul>
                <li><router-link to='/'>Home</router-link></li>
                <li><router-link :to="{name: 'pokemons-list'}">Pokemons</router-link></li>
            </ul>
        </nav>
    </div>
    
</template>

<script>


export default {
    name: 'TopBar'
}
</script>

<style lang="scss">


.holder-logo {
    cursor: pointer;
    .logo {
        @include size(134px, 134px);
        display: inline-block;
        vertical-align: bottom  ;
        margin-right: 10px; 
    }
    h1 {
    font-family: $global-font-family;
    font-size: 124px !important;
    display: inline-block;
    color: $yellow;
    }
}
nav {
    text-align: center;
    ul {
        display: inline-block;
        li {
            display: inline-block;
            a {
                font-size: 22px;
                padding: 5px 10px;
            }
        }
    }
}
</style>
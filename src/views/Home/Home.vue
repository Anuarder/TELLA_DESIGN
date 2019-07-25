<template>
    <div class="home-page tella-page" :class="contentBackground">
        <div class="tella-navigation">
            <tella-navigation></tella-navigation>
        </div>
        <div class="home tella-content">
            <colour-content v-if="randomNumber == 1"></colour-content>
            <shape-content v-if="randomNumber == 2"></shape-content>
            <limit-content v-if="randomNumber == 3"></limit-content>
            <provide-content v-if="randomNumber == 4"></provide-content>
        </div>
        <div class="tella-footer">
            <tella-footer></tella-footer>
        </div>
    </div>
</template>
<script>
import "./home.scss"
export default {
    components: {
        ColourContent: () => import('@/components/HomeContent/Colour'),
        ShapeContent: () => import('@/components/HomeContent/Shape'),
        LimitContent: () => import('@/components/HomeContent/Limit'),
        ProvideContent: () => import('@/components/HomeContent/Provide')
    },  
    data(){
        return {
            randomNumber: 1
        }
    },
    created(){
        this.setRandomNumber();
        this.getUTMParams();
    },
    computed: {
        contentBackground(){
            return {
                'provide-content': this.randomNumber == 3,
                'limits-content': this.randomNumber == 4
            }
        }
    },
    methods: {
        setRandomNumber(){
            this.randomNumber = Math.floor(Math.random() * (5 - 1)) + 1;
        },
        getUTMParams(){
            let utm_params = new URLSearchParams(window.location.search);
            localStorage.setItem('utm_params', utm_params);
        }
    }
}
</script>
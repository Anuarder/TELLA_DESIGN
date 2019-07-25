<template>
    <div id="app">
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
import "@/styles/router_transition.scss";
export default {
    created(){
        this.setLanguage();
    },
    methods: {
        setLanguage(){
            const userLang = navigator.language || navigator.userLanguage;
            if(userLang == "ru-RU"){
                if(localStorage.getItem("lang") == undefined){
                    localStorage.setItem("lang", "ru");
                }
            }else{
                if(localStorage.getItem("lang") == undefined){
                    localStorage.setItem("lang", "en");
                }
            }
        }
    }
};
</script>
<style src="./assets/HelveticaNeue/font.css"></style>
<style>
.tella-page {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}
.tella-content {
    flex: 1;
}
.colored-text {
    color: #24f2ad;
}
.black-text {
    color: #000;
}

@media only screen and (max-device-width: 1024px) {
    .tella-page {
        overflow: auto;
    }
}
body {
    background-color: #000;
}

* {
    font-family: "Helvetica", sans-serif;
    margin: 0;
    padding: 0;
    color: #fff;
}
a {
    text-decoration: none;
    color: inherit;
}
img {
    max-width: 100%;
}
</style>

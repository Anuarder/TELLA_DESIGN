<template>
    <div class="footer-wrap">
        <div class="footer">
            <div class="footer_container">
                <div class="footer_envelope" @click="openRequestPage">
                    <img v-if="!isRequest && !isSidebar" src="@/assets/icon_envelope.svg" alt="envelope">
                </div>
                <div v-if="isContacts" class="footer_links">
                    <router-link to="/home" class="footer_link">
                        {{$t('home')}}
                    </router-link>
                    <router-link to="/about" class="footer_link">
                        {{$t('about')}}
                    </router-link>
                    <router-link to="/team" class="footer_link">
                        {{$t('team')}}
                    </router-link>
                </div>
                <div 
                    class="footer_language-switch"
                    :class="isSidebar ? 'black-text' : ''"
                    @click="switchLanguage()">
                    {{language}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import './footer.scss'
import { mapState } from 'vuex'

//TODO: переключать языков в vuex засунуть

export default {
    props: {
        isRequest: Boolean,
        isSidebar: Boolean,
        isContacts: Boolean
    },
    data(){
        return{
            language_value: localStorage.getItem("lang") || 'ru'
        }
    },
    computed:{
        ...mapState(['language'])
    },
    created() {
        this.switchLanguage(this.language_value);
    },
    methods: {
        switchLanguage(language_value){
            // Переделать не работает норм
            if(language_value == undefined){
                if (this.language_value == "en") {
                    this.language_value = "ru";
                    language_value = "ru";
                    this.$store.dispatch("setLanguage", "English");
                } else {
                    this.language_value = "en";
                    language_value = "en";
                    this.$store.dispatch("setLanguage", "Русский");
                }
            }else{
                let lang = language_value == 'en' ? 'Русский' : 'English';
                this.$store.dispatch("setLanguage", lang);
            }
            import(`@/plugins/languages/${language_value}.json`).then(
                msg => {
                    this.$i18n.setLocaleMessage(language_value, msg);
                    this.$i18n.locale = language_value;
                    localStorage.setItem("lang", language_value);
                }
            );
        },
        openRequestPage(){
            this.$router.push('/request');
        }
    }
}
</script>
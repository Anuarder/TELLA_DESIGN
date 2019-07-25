<template>
    <div class="tella-page">
        <div class="tella-navigation">
            <tella-navigation :isVertical="verticalLogo"></tella-navigation>
        </div>
        <div class="team-slider_controls">
            <button class="team-slider_next-button" @click="nextSlide('left')">
                <img src="@/assets/arrow_next.svg">
            </button>
        </div>
        <div class="team-slider tella-content">
                <div
                    v-touch:swipe="nextSlide"
                    class="team-slider_item"
                    v-for="(item, i) in team"
                    :key="i"
                    :style="nextSlideImage">
                    <div class="team-slider_title">
                        <div class="team-slider_firstname">{{$t(item.firstname)}}</div>
                        <div class="team-slider_lastname colored-text">{{$t(item.lastname)}}</div>
                        <div class="team-slider_position">{{$t(item.position)}}</div>
                    </div>
                    <div class="team-slider_photo">
                        <img :src="item.photo">
                    </div>
                </div>
                <div
                    @click="nextSlide('left')" 
                    :class="shadowActive ? 'shadow' : ''">
                </div>
        </div>
        <div class="team-footer">
            <div class="team-footer_container">
                <div class="team-footer_envelope" @click="openRequestPage">
                    <img src="@/assets/icon_envelope.svg" alt="envelope">
                </div>
                <div 
                    class="team-footer_language-switch"
                    @click="switchLanguage()">
                    {{language}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "./team.scss";
import { mapState } from "vuex";

// TODO: Перенести switch языков

export default {
    data() {
        return {
            currentSlide: 0,
            activeClass: "active-slide",
            nextSlideImg: "",
            shadowActive: true,
            verticalLogo: true,
            team: [
                {
                    firstname: "team_data.yerden",
                    lastname: "team_data.shagirov",
                    position: "team_data.ceo",
                    photo: ""
                },
                {
                    firstname: "team_data.ramil",
                    lastname: "team_data.nasyrov",
                    position: "team_data.deputy",
                    photo: ""
                },
                {
                    firstname: "team_data.agzam",
                    lastname: "team_data.yetekbay",
                    position: "team_data.technical_director",
                    photo: ""
                },
                {
                    firstname: "team_data.tomiris",
                    lastname: "team_data.toleusseitova",
                    position: "team_data.designer",
                    photo: ""
                }
            ],
            language_value: localStorage.getItem("lang") || 'ru'
        };
    },
    created(){
        this.checkSize();
        this.switchLanguage(this.language_value);
    },
    computed: {
        ...mapState(["language"]),
        current() {
            return this.currentSlide;
        },
        nextSlideImage() {
            return this.nextSlideImg;
        }
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
        nextSlide(direction) {
            if (direction === "left") {
                this.slide(1);
            } else if (direction === "right") {
                this.slide(-1);
            }
        },
        slide(value) {
            this.shadowActive = false;
            if (this.currentSlide >= this.team.length - 1) {
                if (value === -1) {
                    this.currentSlide--;
                    this.nextSlideImg = `transform: translateX(${-100 *
                        this.currentSlide +
                        1}%);`;
                } else {
                    this.currentSlide = 0;
                    this.nextSlideImg = `transform: translateX(0);`;
                }
            } else if (this.currentSlide <= 0) {
                if (value === -1) {
                    this.currentSlide = this.team.length - 1;
                    this.nextSlideImg = `transform: translateX(${-100 *
                        this.currentSlide +
                        1}%);`;
                } else if (value === 1) {
                    this.currentSlide += value;
                    this.nextSlideImg = `transform: translateX(${-100 *
                        this.currentSlide +
                        1}%);`;
                }
            } else {
                this.currentSlide += value;
                this.nextSlideImg = `transform: translateX(${-100 *
                    this.currentSlide +
                    1}%);`;
            }
            setTimeout(() => {
                this.shadowActive = true;
            }, 500);
        },
        checkSize() {
            if (window.innerWidth <= 768) {
                this.verticalLogo = false;
            }
        },
        openRequestPage(){
            this.$router.push('/request');
        }
    }
};
</script>

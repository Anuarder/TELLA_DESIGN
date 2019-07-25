<template>
    <transition
        name="sidebar-transition"
        leave-active-class="hide-sidebar">
        <div class="sidebar-page">
            <div class="tella-navigation navigation">
                <div class="navigation_container">
                    <div class="navigation_logo" @click="goLink('/home')">
                        <img src="@/assets/header_logo-black.svg" alt="logo">
                    </div>
                    <div class="navigation_menu">
                        <img @click="closeSidebar" src="@/assets/close-button_black.svg" alt="close_button">
                    </div>
                </div>
            </div>
            <div class="sidebar">
                <div class="sidebar_links">
                        <div 
                            @click="goLink('/about')"
                            class="sidebar_link" 
                            :class="item1 ? 'sidebar_link-animate' : ''">
                            tella?
                        </div>
                        <div
                            @click="goLink('/team')"
                            class="sidebar_link"
                            :class="item2 ? 'sidebar_link-animate' : ''">
                            {{$t('team')}}
                        </div>
                        <div
                            @click="goLink('/contacts')"
                            class="sidebar_link"
                            :class="item3 ? 'sidebar_link-animate' : ''">
                            {{$t('contacts')}}
                        </div>
                    <div 
                        class="sidebar_social-links" 
                        :class="item4 ? 'sidebar_social-links-animate' : ''">
                        <a class="sidebar_social-link" href="https://www.behance.net/tomirisxx" target="blank">behance</a>
                        <a class="sidebar_social-link" href="https://www.facebook.com/tella.design/" target="blank">facebook</a>
                        <a class="sidebar_social-link" href="https://www.instagram.com/tella.design/" target="blank">instagram</a>
                    </div>
                </div>
            </div>
            <div class="tella-footer">
                <tella-footer isSidebar></tella-footer>
            </div>
        </div>
    </transition>
</template>
<script>
import "./sidebar.scss";
export default {
    data() {
        return {
            item1: false,
            item2: false,
            item3: false,
            item4: false,
        };
    },
    mounted() {
        this.setAnimation();
    },
    methods: {
        closeSidebar(){
            this.$emit('close');
        },
        goLink(link){
            this.$emit('to', link);
        },
        setAnimation() {
            this.item1 = true;
            setTimeout(() => {
                this.item2 = true;
            }, 200);
            setTimeout(() => {
                this.item3 = true;
            }, 400);
            setTimeout(() => {
                this.item4 = true;
            }, 600);
        },
    }
};
</script>

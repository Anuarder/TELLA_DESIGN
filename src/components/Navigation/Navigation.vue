<template>
    <div class="navigation">
        <div class="navigation_container">
            <router-link to="/home">
                <div v-if="!isVertical" class="navigation_logo">
                    <img src="@/assets/header_logo.svg" alt="logo">
                </div>
                <div v-else class="navigation_logo-vertical">
                    <img src="@/assets/header-vertical_logo.svg" alt="verticalLogo">
                </div>
            </router-link>
            <div class="navigation_menu">
                <div class="navigation_menu-conversion" v-if="!isRequest">
                    <router-link to="/request" class="phone-image">
                        <img  src="@/assets/phone_button.svg" alt="phone">
                    </router-link>
                    <router-link to="/request" class="phone-button">
                        <span>{{$t('send_request')}}</span>
                    </router-link>
                    <img @click="openSidebar" src="@/assets/menu_button.svg" alt="menu_logo">
                </div>
                <img @click="closeRequestPage" v-else-if="isRequest" src="@/assets/close-button_white.svg" alt="close_button">
            </div>
        </div>
        <tella-sidebar v-if="sidebar" @close="closeSidebar" @to="goLink"></tella-sidebar>
    </div>
</template>
<script>
import "./navigation.scss";
export default {
    props: {
        isVertical: Boolean,
        isRequest: Boolean,
    },
    components:{
        TellaSidebar: () => import('../Sidebar/Sidebar')
    },
    data(){
        return{
            sidebar: false
        }
    },
    methods: {
        openSidebar(){
            this.sidebar = true;
        },
        closeRequestPage(){
            this.$router.go(-1);
        },
        closeSidebar(){
            this.sidebar = false;
        },
        goLink(link){
            this.sidebar = false;
            setTimeout(() => {
                this.$router.push(link)
            }, 400);
        }
    }
};
</script>

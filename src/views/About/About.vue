<template>
    <div class="about-page tella-page">
        <div class="tella-navigation">
            <tella-navigation :isVertical="verticalLogo"></tella-navigation>
        </div>
        <div class="about tella-content">
            <div class="about-links">
                <div class="about-links_indicator">
                    <div class="indicator-container">
                        <div
                            :class="currentComponent == 1 ? 'indicator-container_indicator-active' : ''"
                            class="indicator-container_indicator"
                        ></div>
                        <div
                            :class="currentComponent == 2 ? 'indicator-container_indicator-active' : ''"
                            class="indicator-container_indicator"
                        ></div>
                        <div
                            :class="currentComponent == 3 ? 'indicator-container_indicator-active' : ''"
                            class="indicator-container_indicator"
                        ></div>
                        <div
                            :class="currentComponent == 4 ? 'indicator-container_indicator-active' : ''"
                            class="indicator-container_indicator"
                        ></div>
                    </div>
                </div>
                <div class="about-links_container">
                    <div
                        class="about-links_link"
                        :class="currentComponent == 1 ? 'active-link' : ''"
                        @click="setComponent(1)"
                    >{{$t('web')}}</div>
                    <div
                        class="about-links_link"
                        :class="currentComponent == 2 ? 'active-link' : ''"
                        @click="setComponent(2)"
                    >{{$t('marketing')}}</div>
                    <div
                        class="about-links_link"
                        :class="currentComponent == 3 ? 'active-link' : ''"
                        @click="setComponent(3)"
                    >{{$t('design')}}</div>
                    <div
                        class="about-links_link"
                        :class="currentComponent == 4 ? 'active-link' : ''"
                        @click="setComponent(4)"
                    >{{$t('mobile')}}</div>
                </div>
            </div>
            <div class="about_content" v-touch:swipe="nextSwipe"> 
                <div class="about_component">
                    <div class="about_component-item">
                        <div class="about_component-title">
                            <h1 class="colored-text">
                                {{$t('who_we')}}
                            </h1>
                            <p>{{$t('who_we_text')}}</p>
                        </div>
                        <about-web v-if="currentComponent == 1"></about-web>
                        <about-marketing v-if="currentComponent == 2"></about-marketing>
                        <about-design v-if="currentComponent == 3"></about-design>
                        <about-mobile v-if="currentComponent == 4"></about-mobile>
                    </div>
                </div>
                
            </div>
            <!-- Переделать -->
            <div class="about_next-arrow">
                <img @click="nextComponent(1)" src="../../assets/arrow_next.svg" alt="next">
            </div>
        </div>
        <div class="tella-footer">
            <tella-footer></tella-footer>
        </div>
    </div>
</template>
<script>
import "./about.scss";
export default {
    components: {
        AboutWeb: () => import("@/components/AboutComponents/AboutWeb"),
        AboutMarketing: () =>
            import("@/components/AboutComponents/AboutMarketing"),
        AboutDesign: () => import("@/components/AboutComponents/AboutDesign"),
        AboutMobile: () => import("@/components/AboutComponents/AboutMobile")
    },
    data() {
        return {
            current_component: 1,
            verticalLogo: true
        };
    },
    created() {
        this.checkSize();
    },
    computed: {
        currentComponent() {
            return this.current_component;
        }
    },
    methods: {
        setComponent(index) {
            this.current_component = index;
        },
        nextSwipe(direction) {
            if (direction === "left") {
                this.nextComponent(1);
            } else if (direction === "right") {
                this.nextComponent(-1);
            }
        },
        nextComponent(value) {
            if (this.current_component >= 4) {
                if (value === -1) {
                    this.current_component--;
                } else {
                    this.current_component = 1;
                }
            } else if (this.current_component <= 1) {
                if (value === -1) {
                    this.current_component = 4;
                } else if (value === 1) {
                    this.current_component += value;
                }
            } else {
                this.current_component += value;
            }
        },
        checkSize() {
            if (window.innerWidth <= 768) {
                this.verticalLogo = false;
            }
        }
    }
};
</script>

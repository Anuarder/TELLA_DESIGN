<template>
    <div class="home_content-container">
        <div class="shape home-content">
            <div class="home-content_image">
                <img src="@/assets/main-background_shape.jpg" alt="shape">
            </div>
            <div class="home-content_text">
                <div class="home-content_title">
                    <h1>ideas</h1>
                    <h1 class="colored-text">take shape</h1>
                </div>
                <home-links></home-links>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {
        HomeLinks: () => import("./HomeLinks")
    }
};
</script>

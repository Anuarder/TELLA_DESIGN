<template>
    <div class="home_content-container">
        <div class="colour home-content">
            <div class="home-content_image">
                <img src="@/assets/main-background_colour.jpg" alt="colour">
            </div>
            <div class="home-content_text">
                <div class="home-content_title">
                    <h1>ideas</h1>
                    <h1 class="colored-text">in colour</h1>
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

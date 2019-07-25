<template>
    <div class="home_content-container">
        <div class="limit home-content">
            <div class="home-content_centered-text">
                <div class="home-content_title">
                    <h1>have an idea?</h1>
                    <h1 class="colored-text">
                        we provide the rest
                    </h1>
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

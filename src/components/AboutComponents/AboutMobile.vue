<template>
    <div class="about_component-content about-mobile">
        <h1 class="colored-text">{{$t('mobile')}}</h1>
        <div class="about_component-text-container">
            <p>
                {{$t('mobile_text')}}
            </p>
            <img src="@/assets/about-icon_mobile.svg" alt="image">
        </div>
        <div class="about_component-todos">
            <h2>{{$t('what_we_do')}}</h2>
            <div class="todos-container">
                <div 
                    v-for="(todo, j) in todos"
                    :key="j"
                    class="todos-item">
                    <span>—</span>
                    {{$t(todo)}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            todos: [
                "todo_17",
                "todo_18",
                "todo_19",
                "todo_20"
            ],
        }
    }
}
</script>

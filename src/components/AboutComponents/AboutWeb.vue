<template>
    <div class="about_component-content about-web">
        <h1 class="colored-text">{{$t('web')}}</h1>
        <div class="about_component-text-container">
            <p>
                {{$t('web_text')}}
            </p>
            <img src="@/assets/about-icon_web.svg" alt="image">
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
                "todo_1",
                "todo_2",
                "todo_3",
                "todo_4",
                "todo_5",
                "todo_6"
            ],
        }
    }
}
</script>

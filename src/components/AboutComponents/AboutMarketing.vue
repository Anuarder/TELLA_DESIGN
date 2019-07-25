<template>
    <div class="about_component-content about-marketing">
        <h1 class="colored-text">{{$t('marketing')}}</h1>
        <div class="about_component-text-container">
            <p>
                {{$t('marketing_text')}}
            </p>
            <img src="@/assets/about-icon_marketing.svg" alt="image">
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
                "todo_7",
                "todo_8",
                "todo_9",
                "todo_10"
            ],
        }
    }
}
</script>

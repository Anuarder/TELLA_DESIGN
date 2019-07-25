<template>
    <div class="about_component-content about-design">
        <h1 class="colored-text">{{$t('design')}}</h1>
        <div class="about_component-text-container">
            <p>
                {{$t('design_text')}}
            </p>
            <img src="@/assets/about-icon_design.svg" alt="image">
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
                "todo_11",
                "todo_12",
                "todo_13",
                "todo_14",
                "todo_15",
                "todo_16"
            ],
        }
    }
}
</script>

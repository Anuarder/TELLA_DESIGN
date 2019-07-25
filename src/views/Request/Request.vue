<template>
    <div class="request-page tella-page">
        <div class="tella-navigation">
            <tella-navigation isRequest></tella-navigation>
        </div>
        <div class="request tella-content">
            <div class="request-form" v-if="!request_status">
                <div class="request-form_title">
                    <h1 class="colored-text">{{ $t('request.title') }}</h1>
                    <h2>{{ $t('request.text') }}</h2>
                </div>
                <div class="request-form_form">
                    <form @submit.prevent="sendRequest">
                        <div class="request-form_item request-form_item-1">
                            <input
                                type="text"
                                :placeholder="$t('request.name')"
                                v-model="name"
                                required
                            >
                        </div>
                        <div class="request-form_item request-form_item-2">
                            <input
                                type="tel"
                                v-mask="'# ###-###-##-##'"
                                :placeholder="$t('request.phone')"
                                v-model="phone"
                                required
                            >
                            <input
                                type="email"
                                placeholder="Email"
                                v-model="email"
                                maxlength="30"
                                required
                            >
                        </div>
                        <button type="submit" class="request-form_button" :disabled="isLoading">
                            <span v-if="isLoading">{{$t('request.loading')}}</span>
                            <span v-else>{{$t('request.send')}}</span>
                        </button>
                    </form>
                </div>
            </div>
            <div v-else class="request-success">
                <div class="request-success_title">
                    <h1 class="colored-text">
                        {{$t('request.say_thanks')}}
                    </h1>
                    <h2>
                        {{$t('request.say_status')}}
                    </h2>
                </div>
                <button class="request-success_button" @click="request_status = false">
                    <span>
                        {{$t('request.new_request')}}
                    </span>
                </button>
            </div>
            <div class="request-address">
                <tella-address></tella-address>
            </div>
        </div>
        <div class="tella-footer">
            <tella-footer isRequest></tella-footer>
        </div>
    </div>
</template>
<script>
import "./request.scss";
import axios from 'axios'
export default {
    data() {
        return {
            name: "",
            email: "",
            phone: "",
            errorAlert: false,
            request_status: false,
            isLoading: false
        };
    },
    methods: {
        async sendRequest(){
            this.isLoading = true;
            try{
                let utm_params = new URLSearchParams(localStorage.getItem('utm_params'));
                let data;
                if(utm_params.has('utm_source')){
                    console.log(true)
                    data = {
                        name: this.name,
                        phone: this.phone,
                        email: this.email,
                        utm_params: {
                            utm_source: utm_params.get('utm_source'),
                            utm_medium: utm_params.get('utm_medium'),
                            utm_campaign: utm_params.get('utm_campaign'),
                            utm_content: utm_params.get('utm_content'),
                            utm_term: utm_params.get('utm_term'),
                        }
                    }
                }else{
                    data = {
                        name: this.name,
                        phone: this.phone,
                        email: this.email,
                    }
                }
                
                if(data.phone.length < 15){
                    alert(this.$t('error_input'));
                    this.isLoading = false;
                }else{
                    this.errorAlert = false;
                    let response = await axios.post('', data);
                    if(response.data.status == 'notification_was_sended'){
                        // eslint-disable-next-line
                        dataLayer.push({'event': 'request_success'});
                        this.isLoading = false;
                        this.request_status = true;
                        this.name = '';
                        this.phone = '';
                        this.email = '';
                    }else{
                        this.isLoading = false;
                        alert("Ошибка");
                    }
                }
                
            }catch(err){
                // alert("Ошибка");
                console.log(err);
                this.isLoading = false;
            }
        }
    }
};
</script>

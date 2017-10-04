import "babel-polyfill";
import Vue from 'vue';
import urls from './urls.js';
import axios from 'axios';

(function(){
let app = new Vue({
    el: "#app",
    data: {
        json: ""
    },
    methods: {
        getWordPressPosts : function(url){
            return axios.get(url);
        },
        onload: function(url){
            let wordPressPromise = this.getWordPressPosts(url);
            wordPressPromise.then((success)=>{
                // console.log(success)
                this.json = success.data.posts[0];
            }).catch((error)=>{
                console.log(error);
            });
        }
    }
});
app.onload(urls.apiCall);
})();
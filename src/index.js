import "babel-polyfill";
import Vue from 'vue';

(function(){
let urls = require('./urls');
let app = new Vue({
    el: "#app",
    data: {
        json: ""
    },
    methods: {
        getWordPressPosts : function(url){
            return new Promise((resolve, reject)=>{
                const xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.onload = ()=> resolve(xhr.responseText);
                xhr.onerror = () => reject(xhr.statusText);
                xhr.send();
            });
        },
        onload: function(url){
            let wordPressPromise = this.getWordPressPosts(url);
            wordPressPromise.then((success)=>{
                // console.log(success)
                this.json = JSON.parse(success).posts[0];
            },
            (fail)=>{
                console.log(fail);
            });
        }
    }
});
app.onload(urls.apiCall);
})();
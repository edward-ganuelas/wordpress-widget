import "babel-polyfill";
import Vue from 'vue';

(function(){
let app = new Vue({
    el: "#app",
    data: {
        json: ""
    },
    methods: {
        getWordPressPosts : function(){
            return new Promise((resolve, reject)=>{
                const xhr = new XMLHttpRequest();
                xhr.open('GET', 'https://public-api.wordpress.com/rest/v1.1/sites/edpau.wordpress.com/posts?per_page=1&orderby=date');
                xhr.onload = ()=> resolve(xhr.responseText);
                xhr.onerror = () => reject(xhr.statusText);
                xhr.send();
            });
        },
        onload: function(){
            let wordPressPromise = this.getWordPressPosts();
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
app.onload();
})();
// const lessonList = [];
const vm = new Vue({
    el: '#app',
    data: {
        lessons: [],
    },
    methods: {
        bgImg(item) {
            return { "background-image": `url(${this.lessons[item].img})` };
        }
    },

    mounted() {
        fetch('./data.json')
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response.json();
                } else {
                    var error = new Error(response.statusText)
                    error.response = `傳輸異常，代號：${response}`;
                    throw error
                }
            })
            .then(value => this.lessons.push(...value))
            .catch(e => console.error(e));
    },
})


new Vue({
    el: '#app',
    data: {
        password: '',
    },
    methods: {

    },
    computed: {
        str() {
            let score = this.password.length;
            if (/[A-Z]/.test(this.password)) score *= 1.25;
            if (/[a-z]/.test(this.password)) score *= 1.25;
            if (/\d/.test(this.password)) score *= 1.25;
            if (/[^A-Za-z\d]/.test(this.password)) score *= 1.25;
            console.log(score);
            if (score > 40) return '非常好！'
            else if (score > 20) return '還不錯嘛'
            else if (score > 10) return '挺普通的'
            else return '有點差喔'
        }
    },
    watch: {

    }

});
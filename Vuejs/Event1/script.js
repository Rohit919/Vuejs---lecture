var myapp = new Vue({
    el: '#myapp',
    data: {
        counter : 1
    },
    methods: {
        increment: function (num) {
            this.counter = this.counter + num;
        },

        decrement: function (num) {
            this.counter = this.counter - num;
        }
    }
})

var myapp1 = new Vue({
    el: '#myapp1',
    data: {
        counter : 1
    },
    methods: {
        keypressevent: function (event) {
            console.log('key press .....');
            
        },

        keyupevent: function (event) {
            console.log('key up .....');
            
        },

        keydownevent: function (event) {
            console.log('key down .....');
            
        }
    }
})

var myapp2 = new Vue({
    el: '#myapp2',
    data: {
        text : ''
    },
    methods: {
        twowaydata: function (event) {
            console.log(event.key);
            this.text = this.text + event.key;
        }
    }
})

var myapp3 = new Vue({
    el: '#myapp3',
    data: {
        firstName : '' ,
        lastName : ''
    },
    computed: {
        fullName: function (event) {
            return this.firstName + ' ' + this.lastName;
        }
    }
})
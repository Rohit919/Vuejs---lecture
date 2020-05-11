var app = new Vue({
    el: '#app',
    data: {
        msg: 'Welcome to Vue'
    }
});

var app1 = new Vue({
    el: '#app1',
    data: {
        msg1: 'This is v-text msg'
    }
});

var app2 = new Vue({
    el: '',
    data: {
        msg2: 'This is v-html msg'
    }
})

new Vue({
    el: '#app3',
    data: {
        message: 'Our king is dead!'
    }
})
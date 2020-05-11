var myapp3 = new Vue({
    el: '#myapp3',
    data: {
        firstName : '' ,
        lastName : ''
    },
    computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        }
    }
});
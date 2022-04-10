// To run the project: npm run serve

import Vue from 'vue';
import App from './App';

new Vue({
    render: h => h(App)

    // This is equivilant:
    // el: '#app',
    // render: function(createElement) {
    //     return createElement(App);
    // }

}).$mount('#app');
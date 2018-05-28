// By Kiselev Nikolay
// 2018
// Cheture javascript web lib

// Vue component bundle


Vue.component('card', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
})

Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  })
// JS-triggered resource init
// TODO: bitchin' loading sequence?
window.addEventListener('load', (event) => {
  console.info('assets loaded. welcome to the liverblog! 🥰');
  console.log(event);
});


// Inline vue init
var app = new Vue({
  el: '#app',
  // Local component declaration
  // dependson httpVueLoader
  components: {
    'Colophon': httpVueLoader('./js/components/Colophon.vue'),
    'PlayThis': httpVueLoader('./js/components/PlayThis.vue'),
  },
  data: {
    // sample vue data
    message: 'Welcome to the liverblog!'
  }
})
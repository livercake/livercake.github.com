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
    message: 'Welcome to the liverblog!',
    isLoading: true,
  },
  methods: {
    getVideoGame(id) {
      const API_KEY = '88b3b64891078889ea76b80e9e4027f2';
      window.axios({
        url: "https://api-v3.igdb.com/games",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': API_KEY
        },
      })
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.error(err);
        });
    }
  },
  mounted() {
    // JS-triggered resource init
    // TODO: bitchin' loading sequence?
    const vue = this;
    window.addEventListener('load', (event) => {
      console.info('assets loaded. welcome to the liverblog! 🥰');
      console.log(event);
      window.setTimeout(vue.isLoading = false, 3000);

      vue.getVideoGame();

    });

  }
})
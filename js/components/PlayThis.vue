<template>
  <div class="play-this">
    <h4 class="title">
      <i class="fa fa-music"></i>
      <small>dale, liver,</small>
      tócate un tema!
    </h4>
    <iframe
      :src="`https://open.spotify.com/embed/track/${this.$attrs.embed}`"
      width="300"
      height="380"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media">
    </iframe>
    <div class="disclaimer text-center">
      <i class="fa fa-warning"></i> si no estás logeado al spotify son sólo 30 segundos 😕
    </div>
  </div>
</template>
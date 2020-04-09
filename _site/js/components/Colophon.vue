<template>
  <div class="index-colophon">
    <img class="index-colophon_avatar" :src="this.$attrs.avatar" alt="this is liver">
    <div class="index-colophon_description">
      <small>livercake es</small>
      <h2>{{this.$attrs.bio}}</h2>
      <p>{{this.$attrs.description}}</p>
    </div>
    <!-- <button class="index-colophon_cta">
      Autobombo / Selfpromotion &nbsp; <i class="fa fa-angle-down"></i>
    </button> -->
  </div>
</template>
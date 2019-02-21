<template>
  <div class="image-input-form">
    <form>
      <p class="image-input-text">Image URL</p>
      <input @change="caputreImageURL" placeholder="paste URL here">
      <button @click="sendImageURL">Start Magic</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "InputForm",
  methods: mapActions(["caputreImageURL", "sendImageURL"]),
};
</script>

<style lang="scss" scoped>
.image-input-form {
  font-size: 1.6rem;
}
</style>

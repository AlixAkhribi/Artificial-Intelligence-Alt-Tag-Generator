<template>
  <div class="image-input-form card">
    <form>
      <h1 class="image-inh1ut-text">Image Requirements</h1>
      <ul>
        <li>The image must be presented in JPEG, PNG, GIF, or BMP format</li>
        <li>The file size of the image must be less than 4 megabytes (MB)</li>
        <li>The dimensions of the image must be between 50 x 50 and 4200 x 4200 pixels</li>
      </ul>
      <input @change="caputreImageURL" placeholder="paste URL here">
      <button @click="sendImageURL">Start Magic</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "InputForm",
  methods: mapActions(["caputreImageURL", "sendImageURL"])
};
</script>

<style lang="scss" scoped>
.image-input-form {
  font-size: 1.6rem;
  width: 35%;
  margin: 0 3rem;
  height: 40rem;
}
</style>

<template>
  <div class="image-input-form card">
    <h1 class="card-header">Image Requirements</h1>
    <form>
      <ul class="image-input-requirements">
        <li>The image must be presented in JPEG, PNG, GIF, or BMP format</li>
        <li>The file size of the image must be less than 4 megabytes (MB)</li>
        <li>The dimensions of the image must be between 50 x 50 and 4200 x 4200 pixels</li>
      </ul>
      <div class="image-input">
        <input class="image-input-url" @change="caputreImageURL" placeholder="paste URL here">
        <button class="image-input-button" @click="sendImageURL">Analyze image</button>
      </div>
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

form {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
}

.image-input-requirements {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
  height: 45%;
}

.image-input-url {
  display: flex;
  background: #4b4471;
  border: 0;
  width: 90%;
  margin: auto;
  padding: 1rem 0.5rem;
  color: white;
  box-shadow: 0.1rem 0.2rem .4rem black;

  &::placeholder {
    color: rgba(255, 255, 255, 0.678);
  }

  &:focus {
    outline: none;
  }
}

.image-input-button {
  display: flex;
  margin: 1.5rem auto;
  background: #4b4471;
  color: white;
  border: 0;
  padding: 1rem 3rem;
  font-size: 1.6rem;
  box-shadow: 0.1rem 0.2rem 1.4rem black;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: 0.3s ease-in-out;
    transform: translateY(-0.2rem);
    box-shadow: 0.1rem 0.8rem 1.4rem black;
  }
}
</style>

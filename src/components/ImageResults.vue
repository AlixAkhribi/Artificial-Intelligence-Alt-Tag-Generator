<template>
  <div class="image-results card">
    <h1 class="header">Image Response</h1>
    <div class="image-results-wrapper">
      <div class="image-results-title"></div>
      <div class="image-results-photo">
        <img :src="allImageData.imageURL" :alt="allImageData.imageDescription">
      </div>
      <div class="image-results-description">
        <p>{{allImageData.imageDescription}}</p>
      </div>
      <div class="image-results-image">
        <img src alt>
      </div>
      <div class="image-results-description"></div>
      <div class="image-results-tags">
        <p>{{allImageData.imageTags}}</p>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters } from "vuex";

export default {
  name: "Image-Results",
  computed: mapGetters(["allImageData"])
};
</script>

<style lang="scss" scoped>
.image-results {
  font-size: 1.6rem;
  height: 60rem;
  width: 50%;

  .header {
    display: flex;
    justify-content: center;
  }
}

.image-results-wrapper {
  padding: 5px 15px;
  margin: 5px 20px;
}

.image-results-photo {
  text-align: center;

  img {
    height: 35rem;
  }
}

.image-results-description{
  text-align: center
}
</style>

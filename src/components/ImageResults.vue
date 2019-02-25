<template>
  <div class="image-results card">
    <h1 class="card-header">Image Response</h1>
    <div class="image-results-wrapper">
      <div class="image-results-photo">
        <img :src="allImageData.imageURL" :alt="allImageData.imageDescription">
      </div>
      <div class="image-results-tabs-wrapper">
        <ul class="tabs-title">
          <li name="image-results-description" class="tab-title">Description</li>
        </ul>
        <div class="image-results-tags tab-child">
          <p>{{allImageData.imageDescription}}</p>
        </div>
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
}

.image-results-wrapper {
  position: absolute;
  display: flex;
  width: 90%;
  flex-direction: column;
  padding: 5px 15px;
  margin: 5px 20px;
  height: 85%;
  justify-content: space-evenly;
}

.image-results-photo {
  text-align: center;

  img {
    height: 37rem;
  }
}

.image-results-tabs-wrapper {
  text-align: center;
  font-size: 1.6rem;
  background: #4b4471;
  box-shadow: 0.1rem 0.2rem 1.4rem black;
}

.image-results-description {
  text-align: center;
}

.image-results-tabs {
  display: flex;
}

.tab-title {
  list-style: none;
  padding: 0;
}
</style>

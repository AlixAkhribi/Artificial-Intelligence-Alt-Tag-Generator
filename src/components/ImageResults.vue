<template>
  <div class="image-results card">
    <md-card>
      <md-card-header>
        <div class="md-title">Image Results</div>
      </md-card-header>
      <md-divider></md-divider>

      <div class="image-results-info" v-if="allImageData.imageDescription">
        <div class="image-results-photo">
          <img :src="allImageData.imageURL" :alt="allImageData.imageDescription">
        </div>

        <md-tabs class="md-primary" md-sync-route>
          <md-tab id="tab-posts active-tab-button" md-label="Description">
            <p class="tab-content">{{allImageData.imageDescription}}</p>
          </md-tab>

          <md-tab id="tab-posts" md-label="Image Tags">
            <p class="tab-content">{{allImageData.imageTags}}</p>
          </md-tab>
        </md-tabs>
      </div>

      <div v-else class="no-image-results">
        <md-empty-state
          md-icon="image"
          md-label="No Image"
          md-description="Use the form Image form to display the analyzed results here"
        ></md-empty-state>
      </div>
      
    </md-card>
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
.md-card {
  height: 800px;
}

.image-results {
  margin: 2.5rem;
  margin-left: 1.25rem;
}

.image-results-photo {
  text-align: center;

  img {
    height: 37rem;
  }
}

.image-results-info {
  height: 90%;
}

.image-results-photo {
  margin: 3rem;

  img {
    height: 50rem;
  }
}

.no-image-results {
  height: 90%;
}

.md-empty-state {
  height: 90%;
}
</style>

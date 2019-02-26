<template>
  <div class="image-input-form card">
    <md-card>
      <md-card-header class="">
        <div class="md-title">Image</div>
      </md-card-header>
      <md-divider></md-divider>
      <md-card-content>
        <div class="md-subhead">Requirements</div>
        <ul class="image-input-requirements">
          <li>The image must be presented in JPEG, PNG, GIF, or BMP format</li>
          <li>The file size of the image must be less than 4 megabytes (MB)</li>
          <li>The dimensions of the image must be between 50 x 50 and 4200 x 4200 pixels</li>
        </ul>
      </md-card-content>

      <md-card-content>
        <div class="md-subhead">Image URL</div>
        <div class="image-input-url">
          <div class="input-field col s12">
            <input @change="caputreImageURL" id="first_name" type="text" class="validate">
          </div>
          <md-button class="z-depth-3" @click="sendImageURL">Analyze image</md-button>
        </div>
      </md-card-content>
    </md-card>
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
.card {
  height: 55rem;
}

.md-subhead {
  padding: 0.9rem 0;
}

.md-card {
  height: 100%;
}



.image-input-requirements {
  padding-left: 2rem;
  font-size: 1.8rem;

  li {
    padding: 0.7rem 0;
  }
}



.image-input-form {
  margin: 2.5rem;
  margin-right: 1.25rem;
}

.image-input-url {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.md-card-actions {
  flex-direction: column;
}
</style>

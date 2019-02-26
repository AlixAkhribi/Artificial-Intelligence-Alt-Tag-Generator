<template>
  <div id="app-wrapper">
    <div class="row">
      <div class="col s4">
        <InputForm/>
      </div>
      <div class="col s7">
        <ImageResults/>
      </div>
    </div>
  </div>
</template>

<script>
import ImageResults from "./components/ImageResults";
import InputForm from "./components/InputForm";

export default {
  name: "app",
  components: {
    ImageResults,
    InputForm
  }
};
</script>

<style lang="scss">
:root {
  font-size: 62.5%;
}

// Materialize Global Overides //

.md-card-header{
  background-color: #0000001e
}

.md-subhead {
  font-size: 2.3rem !important;
}

.md-button-content {
  font-size: 1.6rem;
  letter-spacing: 0.1rem !important;
}

.md-button {
  background: none !important;

  &:hover{
    background: #4db6acd2 !important;
  }
}

.md-tabs-navigation{
  background: none !important;
}

.md-divider {
  background-color: #4db6ac !important;
}

.md-ripple {
  color: white !important;
}

.md-tabs-content {
  height: 118px !important;
  background: #0000001e !important;
  font-size: 2rem !important;
  letter-spacing: .02rem !important
}

input {
  color: white;
}


</style>


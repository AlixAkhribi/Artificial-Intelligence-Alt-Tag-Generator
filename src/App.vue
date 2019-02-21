<template>
  <div id="app">
    <ImageResults/>
    <InputForm/>
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
</style>


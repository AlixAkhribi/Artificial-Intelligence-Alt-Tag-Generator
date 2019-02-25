<template>
  <div id="app-wrapper">
    <InputForm/>
    <ImageResults/>
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

html {
  font-family: "Cabin", Sans-Serif;
  font-size: 1.6rem;
  color: #eeeeee;
}

h1 {
  font-family: "Roboto Condensed", Sans-Serif;
  font-size: 3.6rem;
}

body {
  background: #1d2031;
}

#app-wrapper {
  display: flex;
  margin-top: 4rem;
}

.card {
  background: #242630;

  box-shadow: 0.1rem 0.2rem 1.4rem black;
  position: relative;
}

.card-header {
  display: flex;
  justify-content: center;
  background: #4b4471;
  box-shadow: 0rem 0.3rem 0.7rem 0.1rem black;
  margin: 0;
  padding: 0.8rem;
}
</style>


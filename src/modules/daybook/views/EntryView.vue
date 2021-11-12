<template>
  <div class="entry-title d-flex justify-content-between">
    <div>
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fs-6 fw-light">2021 jueves</span>
    </div>
  </div>
  <div>
    <button class="btn btn-danger mx-2">
      Borrar
      <i class="fa fa-trash-alt"></i>
    </button>
    <button class="btn btn-primary">
      Subir Foto
      <i class="fa fa-upload"></i>
    </button>
  </div>
  <hr />
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Qué sucedio hoy?"></textarea>
  </div>
  <Fab icon="fa-save" />
  <img
    class="img-thumbnail"
    src="https://picsum.photos/500/500"
    alt="entry-picture"
  />
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  components: {
    Fab: defineAsyncComponent(() => import("../components/Fab.vue")),
  },
};
</script>

<style lang="scss" scoped>
textarea {
  border: none;
  font-size: 20px;
  height: 100%;
  &:focus {
    outline: none;
  }
}

img {
  width: 200px;
  position: fixed;
  right: 20px;
  bottom: 120px;
  box-shadow: 0px 5px 10px rgba($color: #0000, $alpha: 0.2);
}
</style>
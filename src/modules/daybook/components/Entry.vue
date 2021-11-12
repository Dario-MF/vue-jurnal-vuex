<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fs-6 fw-light">2021 jueves</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni culpa
      aliquid consectetur autem. Et dolor hic consequuntur minus rem voluptas,
      nulla eius excepturi, perferendis possimus, dolore rerum accusamus itaque.
      Rerum.
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.3s all ease-in;
  &:hover {
    background-color: lighten($color: gray, $amount: 35);
  }
  .entry-description {
    font-size: 0.8em;
  }
}
</style>
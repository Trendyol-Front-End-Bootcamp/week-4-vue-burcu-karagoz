<template>
  <div class="buttons-container">
    <button
      v-if="pagination.previous"
      @click="$emit('get-page', pagination.previous)"
    >
      PREV
    </button>
    <button v-if="pagination.next" @click="$emit('get-page', pagination.next)">
      NEXT
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: { pagination: Object },
};
</script>

<style lang="scss" scoped>
.buttons-container {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  padding-right: 60px;
  margin-bottom: 60px;

  button {
    background-color: #000000;
    border: 1px solid #fce854;
    color: #fce854;
    padding: 15px 32px;
    text-align: center;
    margin: 4px 2px;
    border-radius: 8px;
  }
}
</style>

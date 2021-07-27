<template>
  <div class="buttons-container">
    <button v-if="pagination.previous" @click="$emit('get-page', pagination.previous)">GERİ</button>
    <button v-if="pagination.next" @click="$emit('get-page', pagination.next)">İLERİ</button>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: { pagination: Object }
}
</script>

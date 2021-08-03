<template>
  <div class="no-result">
    <img src="../assets/img/no-result.png" width="250" />
    <p class="">SORRY, NO RESULT...</p>
  </div>
</template>

<script>
export default {
  name: "NoResult",
};
</script>

<style lang="scss" scoped>
.no-result {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 80px;
  margin: 30px 80px;
  border: 1px solid #fce854;
  border-radius: 8px;

  p {
    font-size: 24px;
    border-bottom: 2px solid #fce854;
  }
}
</style>

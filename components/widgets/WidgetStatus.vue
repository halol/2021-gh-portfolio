<template>
  <div class="artwork-status">
    <template v-if="status === 'Available' && price != null">
      <span class="status-available"> {{ status }} for €{{ price }} </span>
    </template>
    <template v-if="status === 'Available' && price === null">
      <span class="status-available">
        {{ status }}
      </span>
    </template>
    <template v-if="status === 'Reserved'">
      <span class="status-reserved">
        {{ status }}
      </span>
    </template>
    <template v-if="status === 'Sold'">
      <span class="status-sold"> {{ status }} for €{{ price }} </span>
    </template>
  </div>
</template>

<script>
export default {
  props: ["price", "status"]
};
</script>

<style></style>

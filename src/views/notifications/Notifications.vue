<template>
  <div>
    <v-tabs v-model="tab" grow>
      <v-tabs-slider color="#c82525"></v-tabs-slider>

      <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <Notification />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Notification from './Notification'
export default {
  components: {
    Notification
  },
  data () {
    return {
      tab: null,
      items: ['全部', '優惠訊息', '帳務通知', '個人訊息'],
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style lang="scss">
.v-tabs__item--active {
  color: #c82525;
}
</style>

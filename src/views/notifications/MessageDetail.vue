<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-toolbar flat>
        <v-btn icon @click="navBack">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        <v-toolbar-title>訊息通知</v-toolbar-title>
      </v-toolbar>
      <p>內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容</p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  methods: {
    navBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

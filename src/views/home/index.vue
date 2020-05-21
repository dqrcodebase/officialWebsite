<template>
  <div style="height:1000px">
    home
  </div>
</template>
<script>
import {statisticalData} from '@/api/index.js'

export default {
  created() {
    statisticalData()
  }
}
</script>

<template>
  <div>
    <div class="qrcodejs2" ref="qrcodejs2"></div>
  </div>
</template>

<script>
import QRcode from 'qrcodejs2';
export default {
  name: 'QRcode',
  components: {},
  props: ['content'],
  data() {
    return {
      options: {
        text: this.content, // 二維碼的內容
        width: 150,
        height: 150,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRcode.CorrectLevel.H
      }
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.qrcode();
  },
  methods: {
    qrcode() {
      this.$refs.qrcodejs2.innerHTML = '';
      new QRcode(this.$refs.qrcodejs2, this.options);
    }
  }
};
</script>

<style scoped lang="scss"></style>

<style lang="scss"></style>

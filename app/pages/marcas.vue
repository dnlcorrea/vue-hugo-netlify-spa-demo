<template>
  <div style="min-height: 80vh" class="d-flex justify-center align-center">
    <div class="text-center">
      <p class="font-600 c-secondary--text">
        Você será redirecionado ao Google Drive em {{ time }} segundos
      </p>
      <div class="lds-grid">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p v-if="time === 0">
        <small
          >Caso não seja redirecionado
          <a
            href="https://drive.google.com/drive/folders/1LHRpIJ5YeRCd2CvGfl85UZajkjtGZf1A?usp=sharing"
            >clique aqui.</a
          ></small
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: 3,
    }
  },
  mounted() {
    let int = setInterval(() => {
      this.time--
      if (this.time === 0) {
        clearInterval(int)
        open(
          'https://drive.google.com/drive/folders/1LHRpIJ5YeRCd2CvGfl85UZajkjtGZf1A?usp=sharing',
          '_self'
        )
      }
    }, 1000)
  },
}
</script>
<style lang='scss'>
.lds-grid {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-grid div {
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #2d386d;
  animation: lds-grid 1.2s linear infinite;
}
.lds-grid div:nth-child(1) {
  top: 8px;
  left: 8px;
  animation-delay: 0s;
}
.lds-grid div:nth-child(2) {
  top: 8px;
  left: 32px;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(3) {
  top: 8px;
  left: 56px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(4) {
  top: 32px;
  left: 8px;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(5) {
  top: 32px;
  left: 32px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(6) {
  top: 32px;
  left: 56px;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(7) {
  top: 56px;
  left: 8px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(8) {
  top: 56px;
  left: 32px;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(9) {
  top: 56px;
  left: 56px;
  animation-delay: -1.6s;
}
@keyframes lds-grid {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
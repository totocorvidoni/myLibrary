<template>
  <div class="status">
    <div class="status-show" v-bind:class="{ read: isRead }"></div>
    <div v-if="isRead" class="status-message">FINISHED</div>
    <div v-else class="status-message not-read">TO READ</div>
  </div>
</template>

<script>
export default {
  props: {
    isRead: Boolean
  }
};
</script>

<style>
.status > * {
  transition: all 300ms cubic-bezier(0.41, 1.29, 0.55, 1.24);
}

.status-show {
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border-bottom: 25px solid transparent;
  border-left: 25px solid transparent;
  border-top: 25px solid hsla(214, 11%, 68%, 1);
  border-right: 25px solid hsla(214, 11%, 55%, 1);
  border-top-right-radius: 0.5em;
  z-index: 50;
}

.read {
  border-top: 25px solid hsla(100, 88%, 60%, 1);
  border-right: 25px solid hsla(155, 100%, 35%, 1);
}

.status-message {
  background: hsla(155, 100%, 35%, 1);
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 0.5em;
  color: #fff;
  font-weight: 700;
  padding: 4px 8px 20px 8px;
  z-index: -10;
}

.book:hover .status-message {
  transform: translateY(-50px);
}
.not-read {
  background: hsla(214, 11%, 68%, 1);
}
</style>

<template>
  <button class="delete" @click="$emit('delete')">+</button>
</template>

<script>
export default {};
</script>

<style>
.delete {
  position: absolute;
  top: -40px;
  right: 5px;
  background: rgb(220, 20, 60);
  border: 3px solid #fff;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  font-size: 1.8em;
  font-weight: 700;
  width: 1.3em;
  height: 1.3em;
  transform: translateY(50px);
  transition: all 300ms cubic-bezier(0.41, 1.29, 0.55, 1.24);
  z-index: -10;
}

.book-area:hover .delete,
.delete:hover {
  transform: translateY(0) scale(1) rotate(135deg);
  z-index: 10;
}
.delete:hover {
  transform: scale(1.1);
  box-shadow: 0 0 5px rgba(220, 20, 60, 0.7);
}
</style>

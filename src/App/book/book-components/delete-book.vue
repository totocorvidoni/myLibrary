<template>
  <button class="delete">+</button>
</template>

<script>
export default {};
</script>

<style>
.delete {
  position: absolute;
  top: -10px;
  right: -10px;
  background: crimson;
  border: 3px solid #fff;
  border-radius: 50%;
  color: #fff;
  font-size: 3em;
  font-weight: 700;
  width: 1.3em;
  height: 1.3em;
  transform: scale(0.1);
  transition: all 300ms cubic-bezier(0.41, 1.29, 0.55, 1.24);
  z-index: 10;
}

.book-area:hover .delete,
.delete:hover {
  transform: translate(35px, -35px) scale(1) rotate(135deg);
}
</style>

export default defineNuxtPlugin(() => {
  const { initRegion } = useRegion();
  initRegion();
});

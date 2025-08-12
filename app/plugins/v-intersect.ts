export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("intersect", {
    mounted(el: any, binding: any) {
      // Only run on client side
      if (process.client) {
        const options = {
          rootMargin: "0px",
          threshold: binding.value?.threshold || 0.2,
        };

        const observer = new IntersectionObserver((entries) => {
          const entry = entries[0];
          if (entry && entry.isIntersecting) {
            el.classList.add("visible");
            observer.unobserve(el);
          }
        }, options);

        observer.observe(el);
      }
    },
    getSSRProps() {
      return {};
    }
  });
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("intersect", {
    mounted(el: any, binding: any) {
      const options = {
        rootMargin: "0px",
        threshold: binding.value?.threshold || 0.2,
      };

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      }, options);

      observer.observe(el);
    },
  });
});

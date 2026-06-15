<template>
  <div class="region-switcher">
    <p class="region-switcher__label">Browse by region</p>
    <div
      class="region-switcher__track"
      role="group"
      aria-label="Choose site region"
    >
      <button
        type="button"
        class="region-switcher__option"
        :class="{ 'region-switcher__option--active': !isLocal }"
        :aria-pressed="!isLocal"
        @click="setRegion('international')"
      >
        <Icon name="heroicons:globe-alt" class="w-4 h-4 shrink-0" aria-hidden="true" />
        <span>Global</span>
      </button>
      <button
        type="button"
        class="region-switcher__option"
        :class="{ 'region-switcher__option--active': isLocal }"
        :aria-pressed="isLocal"
        @click="setRegion('local')"
      >
        <Icon name="heroicons:map-pin" class="w-4 h-4 shrink-0" aria-hidden="true" />
        <span>Nigeria</span>
      </button>
    </div>
  </div>
</template>

<script setup>
const { isLocal, setRegion } = useRegion();
</script>

<style scoped>
.region-switcher {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.625rem;
}

.region-switcher__label {
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgb(107 114 128);
}

.region-switcher__track {
  display: inline-flex;
  padding: 0.25rem;
  border-radius: 9999px;
  background: rgb(17 24 39);
  border: 1px solid rgb(31 41 55);
  box-shadow: inset 0 1px 0 rgb(255 255 255 / 0.04);
}

.region-switcher__option {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  color: rgb(156 163 175);
  transition:
    color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;
}

.region-switcher__option:hover:not(.region-switcher__option--active) {
  color: rgb(229 231 235);
}

.region-switcher__option--active {
  color: white;
  background: linear-gradient(
    135deg,
    var(--color-jade-600) 0%,
    var(--color-jade-500) 100%
  );
  box-shadow: 0 4px 14px rgb(31 154 255 / 0.22);
}
</style>

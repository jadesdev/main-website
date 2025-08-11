<script setup>
import { ref } from 'vue';

const props = defineProps({
    faqs: {
        type: Array,
        required: true
    }
});

const localFaqs = ref(
    props.faqs.map(faq => ({ ...faq, open: false }))
);

function toggleFaq(selectedIndex) {
    localFaqs.value.forEach((faq, index) => {
        if (index === selectedIndex) {
            faq.open = !faq.open;
        } else {
            faq.open = false;
        }
    });
}
</script>

<template>
    <div class="space-y-4">
        <FaqItem v-for="(faq, index) in localFaqs" :key="index" :faq="faq" @toggle="toggleFaq(index)" />
    </div>
</template>
type FaqItem = {
  question: string;
  answer: string;
  answerInternational?: string;
  open?: boolean;
};

export function useRegionalFaqs(faqs: FaqItem[] | Ref<FaqItem[]>) {
  const { isLocal } = useRegion();

  return computed(() => {
    const list = unref(faqs);
    return list.map((faq) => ({
      ...faq,
      answer:
        !isLocal.value && faq.answerInternational
          ? faq.answerInternational
          : faq.answer,
    }));
  });
}

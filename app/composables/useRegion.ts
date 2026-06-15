export type Region = "local" | "international";

export const REGION_COOKIE = "jadesdev_region";
export const LOCAL_COUNTRY_CODE = "NG";
export const MAINTENANCE_SERVICE_SLUG = "security-maintenance";

const GEO_API_URL = "https://ipapi.co/json/";

export function useRegion() {
  const route = useRoute();
  const regionCookie = useCookie<Region | null>(REGION_COOKIE, {
    maxAge: 60 * 60 * 24 * 30,
    sameSite: "lax",
  });

  const region = computed<Region>(
    () => regionCookie.value ?? "international",
  );
  const isLocal = computed(() => region.value === "local");
  const isResolving = useState("region-resolving", () => false);
  const initialized = useState("region-initialized", () => false);

  function setRegion(next: Region) {
    regionCookie.value = next;
    isResolving.value = false;
  }

  function regionFromQuery(): Region | null {
    const q = route.query.region;
    if (q === "ng" || q === "local") return "local";
    if (q === "international" || q === "int") return "international";
    return null;
  }

  async function initRegion() {
    if (!import.meta.client) return;
    if (initialized.value) return;
    initialized.value = true;

    const fromQuery = regionFromQuery();
    if (fromQuery) {
      setRegion(fromQuery);
      return;
    }

    if (regionCookie.value) {
      isResolving.value = false;
      return;
    }

    isResolving.value = true;
    try {
      const data = await $fetch<{ country_code?: string }>(GEO_API_URL);
      setRegion(
        data.country_code === LOCAL_COUNTRY_CODE ? "local" : "international",
      );
    } catch {
      setRegion("international");
    }
  }

  watch(
    () => route.query.region,
    () => {
      const fromQuery = regionFromQuery();
      if (fromQuery) setRegion(fromQuery);
    },
  );

  return {
    region,
    isLocal,
    isResolving,
    setRegion,
    initRegion,
  };
}

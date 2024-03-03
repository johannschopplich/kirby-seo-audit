import PlaygroundBlueprintCodeField from "./components/Playground/BlueprintCode.vue";
import SeoAuditSection from "./components/SeoAudit.vue";
import "./index.css";

window.panel.plugin("johannschopplich/seo-audit", {
  sections: {
    "seo-audit": SeoAuditSection,
    // eslint-disable-next-line no-undef
    ...(__PLAYGROUND__ && {
      "playground-blueprint-code": PlaygroundBlueprintCodeField,
    }),
  },
  icons: {
    // i-ri:seo-line
    "seo-audit-analyze":
      '<path d="M8 3a7 7 0 0 0 0 14h1.07a7.06 7.06 0 0 1 0-2H8A5 5 0 0 1 8 5h8a5 5 0 0 1 4.9 6a7.021 7.021 0 0 1 1.426 2A7 7 0 0 0 16 3zm8 10a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 9.172 2.757l2.535 2.536l-1.414 1.414l-2.536-2.535A5 5 0 0 1 11 16" />',
  },
});

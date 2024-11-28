import { _ as _sfc_main$1 } from "./NuxtImg-C3-gXZBr.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "destr";
import "klona";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-10 text-white bg-black" }, _attrs))}><div class="container subpage-content"><h2 class="pb-4 uppercase text-[32px] font-extrabold font-shoulders"> MIRŐL SZÓL A SYMBOL GYM ÉRZÉS? </h2><p class="max-w-3xl pb-10 text-sm"> A Symbol Gym egy különleges hely, ahol a tested és a lelked is erőre kap. Itt nem csupán az edzőterembe jársz – egy támogató és inspiráló közösség részévé válsz, ahol az egyéni céljaid elérése mellett közös sikerekben is osztozhatsz. Az edzések során olyan légkört teremtünk, ahol mindenki a saját határait feszegetheti, miközben egymást ösztönözzük és támogatjuk. Nálunk a fejlődés nemcsak az izmokról szól: megtanulod leküzdeni a nehézségeket, új szintekre lépsz, és magabiztosságot építesz. </p><p class="max-w-3xl pb-10 text-sm"> A Symbol Gym-ben elkötelezettek vagyunk amellett, hogy minden egyes vendégünk a lehető legtöbbet hozza ki magából – legyen szó kezdőkről vagy tapasztalt sportolókról. Edzőink nem csupán szakértelmükkel segítenek, hanem melletted állnak a kihívások során, és megünneplik veled minden apró győzelmedet. Ez a hely nem csupán egy edzőterem; egy otthon, ahol fejlődés, küzdelem és közös tapasztalatok teszik gazdagabbá a mindennapokat. Lépj be hozzánk, és éld át, hogyan válhat a sportolás igazi élettapasztalattá – együtt, közösségben, határokat nem ismerve. </p>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/team.webp",
    class: "w-[832px]",
    alt: "Team",
    width: "832",
    height: "478",
    format: "webp",
    quality: "90",
    sizes: "(max-width: 768px) 100vw, 832px"
  }, null, _parent));
  _push(`</div></section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/rolunk.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rolunk = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  rolunk as default
};
//# sourceMappingURL=rolunk-BgFDzgX9.js.map

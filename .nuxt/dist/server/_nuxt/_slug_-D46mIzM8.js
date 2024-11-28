import { _ as _sfc_main$1 } from "./NuxtImg-C3-gXZBr.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-i6fWWU6y.js";
import { defineComponent, withAsyncContext, unref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { a as useRoute, b as useRuntimeConfig } from "../server.mjs";
import { u as useAsyncData } from "./asyncData-3SaHMhLB.js";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "ufo";
import "h3";
import "hookable";
import "ofetch";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const route = useRoute();
    const { data: post, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "post",
      () => $fetch(`${config.public.apiBaseUrl}/json-posts/${route.params.slug}`)
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(error)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>Hiba történt: ${ssrInterpolate(unref(error).message)}</div>`);
      } else if (!unref(post)) {
        _push(`<div${ssrRenderAttrs(_attrs)}>Betöltés...</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}><section><div class="subpage-content blog container"><h2 class="slug-blog__h2 text-white text-2xl text-white uppercase font-teko">${ssrInterpolate(unref(post).title)}</h2>`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          class: "slug-blog__img",
          src: `${unref(config).public.apiBaseUrl}/storage/${unref(post).image}`,
          alt: unref(post).title
        }, null, _parent));
        _push(`<div class="text-white blog-text-content">${unref(post).body ?? ""}</div>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "go-back-button"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="go-back-button__icon"${_scopeId}>←</span><span class="go-back-button__text"${_scopeId}>Vissza a főoldalra</span>`);
            } else {
              return [
                createVNode("span", { class: "go-back-button__icon" }, "←"),
                createVNode("span", { class: "go-back-button__text" }, "Vissza a főoldalra")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></section></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-D46mIzM8.js.map

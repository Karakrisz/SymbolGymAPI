import { _ as __nuxt_component_0 } from './nuxt-link-BlVikBv5.mjs';
import { _ as _sfc_main$1 } from './NuxtImg-D0iih4Mq.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/vue/server-renderer/index.mjs';
import { f as fetchPosts, t as truncateContent } from './utils-K1Cg4Kyp.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/h3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/devalue/index.js';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/destr/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/hookable/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/klona/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/scule/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/defu/dist/defu.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/ohash/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/unstorage/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/pathe/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/nodemailer/lib/nodemailer.js';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/@dword-design/functions/dist/index.js';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/ipx/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/unhead/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/unctx/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/vue-router/dist/vue-router.node.mjs';
import './asyncData-3SaHMhLB.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const itemsPost = ([__temp, __restore] = withAsyncContext(() => fetchPosts()), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-10 text-white bg-black" }, _attrs))}><div class="container flex flex-col"><h2 class="max-w-3xl pb-4 uppercase text-[32px] font-extrabold font-shoulders"> Blog </h2><div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(itemsPost), (post) => {
        _push(`<div class="page-information-content__blog-content__gBox__iTextBox">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "blog-box__link-box__Nuxtlink",
          to: `/posts/${post.slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a;
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                height: "100%",
                loading: "lazy",
                class: "page-information-content__blog-content__gBox__iTextBox__img",
                src: `${_ctx.$config.public.apiBaseUrl}/storage/${post.image}`,
                alt: "{{ post.title }}"
              }, null, _parent2, _scopeId));
              _push2(`<div class="page-information-content__blog-content__gBox__iTextBox__tBox"${_scopeId}><h4 class="page-information-content__blog-content__gBox__iTextBox__tBox__h4 text-2xl text-white uppercase font-teko"${_scopeId}>${ssrInterpolate(post.title)}</h4><p class="page-information-content__blog-content__gBox__iTextBox__tBox__p"${_scopeId}>${(_a = unref(truncateContent)(post.body, 230)) != null ? _a : ""}</p></div>`);
            } else {
              return [
                createVNode(_component_NuxtImg, {
                  height: "100%",
                  loading: "lazy",
                  class: "page-information-content__blog-content__gBox__iTextBox__img",
                  src: `${_ctx.$config.public.apiBaseUrl}/storage/${post.image}`,
                  alt: "{{ post.title }}"
                }, null, 8, ["src"]),
                createVNode("div", { class: "page-information-content__blog-content__gBox__iTextBox__tBox" }, [
                  createVNode("h4", { class: "page-information-content__blog-content__gBox__iTextBox__tBox__h4 text-2xl text-white uppercase font-teko" }, toDisplayString(post.title), 1),
                  createVNode("p", {
                    class: "page-information-content__blog-content__gBox__iTextBox__tBox__p",
                    innerHTML: unref(truncateContent)(post.body, 230)
                  }, null, 8, ["innerHTML"])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/posts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B9AA-jD-.mjs.map

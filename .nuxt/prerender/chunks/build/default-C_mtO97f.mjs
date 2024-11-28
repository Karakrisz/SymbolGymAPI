import { _ as __nuxt_component_0$1 } from './nuxt-link-i6fWWU6y.mjs';
import { _ as _sfc_main$3 } from './NuxtImg-C3-gXZBr.mjs';
import { useSSRContext, defineComponent, ref, withCtx, createTextVNode, watch, createVNode, toDisplayString } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/h3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/destr/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/hookable/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/klona/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/defu/dist/defu.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/scule/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/unstorage/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/radix3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/unctx/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/unenv/runtime/npm/consola.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/pathe/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/nodemailer/lib/nodemailer.js';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/@dword-design/functions/dist/index.js';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/ipx/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/ohash/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/unhead/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main$2 = {
  __name: "AppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      { label: "Kezd\u0151lap", href: "/" },
      { label: "R\xF3lunk", href: "/rolunk" },
      { label: "Gal\xE9ria", href: "/galeria" },
      { label: "Szolg\xE1ltat\xE1sok", href: "/szolgaltatasok" },
      // { label: 'Árlista', href: '#arlista' },
      // { label: 'Blog', href: '#blog' },
      { label: "Kapcsolat", href: "/kapcsolat" }
    ];
    const mobileNavOpen = ref(false);
    const closeMobileNav = () => {
      mobileNavOpen.value = false;
    };
    watch(mobileNavOpen, (isOpen) => {
      if (isOpen) {
        (void 0).body.style.overflow = "hidden";
      } else {
        (void 0).body.style.overflow = "";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_NuxtImg = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-8b5658d0><header class="fixed top-0 left-0 right-0 z-50 py-4 bg-black bg-opacity-75" data-v-8b5658d0><div class="container flex items-center justify-between px-4 mx-auto" data-v-8b5658d0>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtImg, {
              src: "/img/logo.png",
              alt: "Logo",
              class: "logo-img transition-transform hover:scale-110"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtImg, {
                src: "/img/logo.png",
                alt: "Logo",
                class: "logo-img transition-transform hover:scale-110"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden space-x-6 md:flex" data-v-8b5658d0><!--[-->`);
      ssrRenderList(links, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.href,
          to: link.href,
          class: "relative overflow-hidden tracking-widest text-white uppercase transition-colors duration-300 font-teko hover:text-gray-300 group"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)} <span class="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" data-v-8b5658d0${_scopeId}></span>`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label) + " ", 1),
                createVNode("span", { class: "absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" })
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><button class="z-50 text-white md:hidden focus:outline-none" data-v-8b5658d0>`);
      if (!mobileNavOpen.value) {
        _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-8b5658d0><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" data-v-8b5658d0></path></svg>`);
      } else {
        _push(`<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-v-8b5658d0><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" data-v-8b5658d0></path></svg>`);
      }
      _push(`</button></div></header>`);
      if (mobileNavOpen.value) {
        _push(`<div class="fixed inset-0 z-40 bg-black bg-opacity-90 md:hidden" data-v-8b5658d0><nav class="flex flex-col items-center justify-center h-full" data-v-8b5658d0><!--[-->`);
        ssrRenderList(links, (link) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: link.href,
            to: link.href,
            onClick: closeMobileNav,
            class: "py-4 text-2xl tracking-widest text-white uppercase transition-colors duration-300 font-teko hover:text-gray-300"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(link.label)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(link.label), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></nav></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8b5658d0"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const form = ref({
      name: "",
      email: "",
      phonenumber: "",
      subject: ""
    });
    const isSent = ref(false);
    ref(false);
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$3;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[--><section class="relative flex items-center justify-center bg-black">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/form-bg.webp",
        alt: "Background",
        class: "absolute inset-0 object-cover w-full h-full max-w-6xl"
      }, null, _parent));
      _push(`<div class="container relative z-10 flex flex-col items-end justify-end bg-black bg-opacity-75 md:bg-opacity-0"><div class="py-20 md:w-1/2"><h2 class="mb-2 text-4xl font-extrabold text-right text-primary font-shoulders"> EDDZ VEL\xDCNK! </h2><p class="mb-6 text-sm text-right text-white"> Jelentkezz az al\xE1bbi \u0171rlapon \xE9s l\xE9pj be a Symbol Gym \xE9rz\xE9sbe! </p><form class="flex flex-col items-end"><div class="w-full mb-4"><input type="text" placeholder="N\xC9V" id="name"${ssrRenderAttr("value", form.value.name)} required class="w-full py-2 text-white bg-transparent border-b border-gray-600 focus:outline-none focus:border-primary"></div><div class="w-full mb-4"><input type="email" placeholder="E-MAIL C\xCDM" id="email"${ssrRenderAttr("value", form.value.email)} required class="w-full py-2 text-white bg-transparent border-b border-gray-600 focus:outline-none focus:border-primary"></div><div class="w-full mb-4"><input type="tel" id="phonenumber"${ssrRenderAttr("value", form.value.phonenumber)} required placeholder="TELEFONSZ\xC1M" class="w-full py-2 text-white bg-transparent border-b border-gray-600 focus:outline-none focus:border-primary"></div><div class="w-full mb-6"><input type="number" placeholder="MIBEN SEG\xCDTHETEK ?" id="subject"${ssrRenderAttr("value", form.value.subject)} required class="w-full py-2 text-white bg-transparent border-b border-gray-600 focus:outline-none focus:border-primary"></div>`);
      if (!isSent.value) {
        _push(`<div class="contact-form__link-box__text-box text-end"><button type="submit" aria-label="submit" class="px-[39px] py-[17px] font-extrabold text-xl text-white transition duration-300 bg-primary font-shoulders hover:bg-red-700 cursor"> JELENTKEZEM </button><p class="mt-4 text-xs text-right text-gray-400"> A JELENTKEZEM GOMBRA KATTINTVA ELFOGADOM AZ ADATV\xC9DELMI NYILATKOZATOT. </p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isSent.value) {
        _push(`<div class="confirmation-message bg-color-w"><p class="confirmation-message__p text-white f-600"> K\xF6sz\xF6nj\xFCk az \xFCzenet\xE9t, hamarosan felvessz\xFCk \xD6nnel a kapcsolatot. </p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div></section><footer class="text-white bg-black font-teko"><div class="flex flex-col items-center justify-between ml-10 sm:gap-12 sm:items-start md:flex-row"><div class="flex items-center gap-8 my-8">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/logo_white.svg",
        alt: "Symbol Gym",
        class: "w-32 h-32"
      }, null, _parent));
      _push(`<nav class="space-y-2">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/galeria",
        class: "block tracking-widest hover:text-gray-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`GAL\xC9RIA`);
          } else {
            return [
              createTextVNode("GAL\xC9RIA")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/rolunk",
        class: "block tracking-widest hover:text-gray-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`R\xD3LUNK`);
          } else {
            return [
              createTextVNode("R\xD3LUNK")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/szolgaltatasok",
        class: "block tracking-widest hover:text-gray-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`SZOLG\xC1LTAT\xC1SOK`);
          } else {
            return [
              createTextVNode("SZOLG\xC1LTAT\xC1SOK")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/kapcsolat",
        class: "block tracking-widest hover:text-gray-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`KAPCSOLAT`);
          } else {
            return [
              createTextVNode("KAPCSOLAT")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div><div class="flex flex-col items-center mx-auto sm:items-start sm:mx-0 sm:my-8"><nav class="mb-4 space-y-2 opacity-50">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "adatvedelmi-tajekoztato",
        class: "block tracking-widest hover:text-gray-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ADATV\xC9DELMI NYILATKOZAT`);
          } else {
            return [
              createTextVNode("ADATV\xC9DELMI NYILATKOZAT")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="flex space-x-4"><a target="_blank" href="https://www.facebook.com/p/Symbol-Gym-100057306825568" class="hover:opacity-75">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/FacebookLogo.svg",
        alt: "Facebook",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</a><a target="_blank" href="https://www.instagram.com/symbolgym" class="hover:opacity-75">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/InstagramLogo.svg",
        alt: "Instagram",
        class: "w-6 h-6"
      }, null, _parent));
      _push(`</a></div>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/DigitalSeedLogo.svg",
        alt: "Digital Studio",
        class: "w-20 pb-4 pt-7 sm:pb-0"
      }, null, _parent));
      _push(`</div><div class="relative hidden w-full h-[250px] max-w-6xl overflow-hidden md:w-1/2 lg:w-3/5 md:flex"><iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2742.861822055165!2d20.651532376375744!3d46.57019777111364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47443f501104d1bf%3A0x28afc28132a08eed!2sSymbol%20Gym%20Crosstraining%20Funkcion%C3%A1lis%20edz%C5%91terem!5e0!3m2!1shu!2shu!4v1730730305084!5m2!1shu!2shu" style="${ssrRenderStyle({ "border": "0" })}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div></div></footer><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_AppHeader = __nuxt_component_0;
  const _component_AppFooter = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_AppHeader, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_AppFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-C_mtO97f.mjs.map

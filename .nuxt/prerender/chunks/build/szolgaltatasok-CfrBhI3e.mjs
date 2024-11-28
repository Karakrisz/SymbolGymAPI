import { _ as __nuxt_component_0 } from './nuxt-link-BlVikBv5.mjs';
import { _ as _sfc_main$1 } from './NuxtImg-D0iih4Mq.mjs';
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/vue/server-renderer/index.mjs';
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

const _sfc_main = {
  __name: "szolgaltatasok",
  __ssrInlineRender: true,
  setup(__props) {
    const servicesCards = [
      {
        id: 1,
        title: "SAJ\xC1T TESTS\xDALLYAL V\xC9GZETT GYAKORLATOK",
        icon: "01_sajat_testsuly.svg",
        link: "/testsulygyakorlatok"
      },
      {
        id: 2,
        title: "KETTLEBELL GYAKORLATOK",
        icon: "02_kettleball.svg",
        link: "/kettlebell"
      },
      {
        id: 3,
        title: "ERGOM\xC9TERES G\xC9PEKEN V\xC9GZETT GYAKORLATOK",
        icon: "03_ergometeres.svg",
        link: "/ergometergyakorlatok"
      },
      {
        id: 4,
        title: "ER\u0150EMEL\u0150 ELEMEK",
        icon: "04_eroemelo.svg",
        link: "/eroemeles"
      },
      {
        id: 5,
        title: "MOBILIZ\xC1CI\xD3S GYAKORLATOK",
        icon: "05_mobilizacios.svg",
        link: "/mobilizacio"
      },
      {
        id: 6,
        title: "CORE IZMOK ER\u0150S\xCDT\xC9SE",
        icon: "06_core_izmok.svg",
        link: "/coreerosites"
      },
      {
        id: 7,
        title: "EGYEDI EDZ\xC9STERV",
        icon: "07_egyedi_edzesterv.svg",
        link: "/szemelyesedzesterv"
      },
      // {
      //   id: 8,
      //   title: 'EGYÉNI ÉTREND',
      //   icon: '08_egyeni_etrend.svg',
      //   link: '/szemelyreszabottetrend',
      // },
      {
        id: 8,
        title: "GYEREK EDZ\xC9SEK",
        icon: "gyermek.svg",
        link: "/gyerekedzesek"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-10 text-white bg-black" }, _attrs))}><div class="container flex flex-col items-end subpage-content"><h2 class="max-w-3xl pb-4 uppercase text-[32px] font-extrabold font-shoulders"> Szolg\xE1ltat\xE1saink </h2><p class="max-w-3xl pb-10 text-sm text-right"> A Symbol Gym egyed\xFCl\xE1ll\xF3 \xE9lm\xE9nyt k\xEDn\xE1l: itt nem csup\xE1n a testedet form\xE1lhatod, hanem egy olyan t\xE1mogat\xF3 k\xF6z\xF6ss\xE9g r\xE9sz\xE9v\xE9 v\xE1lhatsz, amely mindig melletted \xE1ll. C\xE9lunk, hogy a mozg\xE1s ne csak egy k\xF6telezetts\xE9g legyen, hanem egy \xE9lm\xE9ny, amelyet sz\xEDvesen \xE9lsz \xE1t \xFAjra \xE9s \xFAjra. N\xE1lunk a csal\xE1dias hangulat \xE9s az egym\xE1s ir\xE1nti bizalom teremti meg azt a l\xE9gk\xF6rt, amelyben mindenki fejl\u0151dhet. Az edz\xE9sek sor\xE1n nemcsak izmaidat er\u0151s\xEDtj\xFCk, hanem bar\xE1ts\xE1gokat \xE9p\xEDt\xFCnk, \xE9s k\xF6z\xF6s sikereket \xE9r\xFCnk el. Hisz\xFCnk abban, hogy a k\xF6z\xF6s c\xE9lok\xE9rt val\xF3 k\xFCzdelem \xE9s az egym\xE1s ir\xE1nti t\xE1mogat\xE1s sokkal t\xF6bbet ad, mint amit b\xE1rmelyik edz\u0151terem ny\xFAjtani tud. A Symbol Gym-ben minden l\xE9p\xE9sed sz\xE1m\xEDt. Ak\xE1r a kezd\u0151 l\xE9p\xE9sekn\xE9l tartasz, ak\xE1r a k\xF6vetkez\u0151 nagy kih\xEDv\xE1sodra k\xE9sz\xFClsz, mi itt vagyunk, hogy seg\xEDts\xFCnk. Csatlakozz hozz\xE1nk, \xE9s \xE9ld \xE1t, milyen \xE9rz\xE9s, amikor egy k\xF6z\xF6ss\xE9g veled egy\xFCtt halad az \xFAton, mindig a legjobbat kihozva bel\u0151led! </p><div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"><!--[-->`);
      ssrRenderList(servicesCards, (card) => {
        _push(`<div class="p-4 text-center bg-black border border-white">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: card.link,
          class: "block"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="mb-4 text-red-500"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: `/img/szolgaltatasok/${card.icon}`,
                alt: card.title,
                class: "w-32 h-32 mx-auto",
                loading: "lazy"
              }, null, _parent2, _scopeId));
              _push2(`</div><h3 class="text-2xl text-white uppercase font-teko"${_scopeId}>${ssrInterpolate(card.title)}</h3>`);
            } else {
              return [
                createVNode("div", { class: "mb-4 text-red-500" }, [
                  createVNode(_component_NuxtImg, {
                    src: `/img/szolgaltatasok/${card.icon}`,
                    alt: card.title,
                    class: "w-32 h-32 mx-auto",
                    loading: "lazy"
                  }, null, 8, ["src", "alt"])
                ]),
                createVNode("h3", { class: "text-2xl text-white uppercase font-teko" }, toDisplayString(card.title), 1)
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
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/szolgaltatasok.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=szolgaltatasok-CfrBhI3e.mjs.map

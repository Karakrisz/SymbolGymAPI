import { _ as __nuxt_component_0 } from "./nuxt-link-i6fWWU6y.js";
import { _ as _sfc_main$1 } from "./NuxtImg-C3-gXZBr.js";
import { mergeProps, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "destr";
import "klona";
const _sfc_main = {
  __name: "szolgaltatasok",
  __ssrInlineRender: true,
  setup(__props) {
    const servicesCards = [
      {
        id: 1,
        title: "SAJÁT TESTSÚLLYAL VÉGZETT GYAKORLATOK",
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
        title: "ERGOMÉTERES GÉPEKEN VÉGZETT GYAKORLATOK",
        icon: "03_ergometeres.svg",
        link: "/ergometergyakorlatok"
      },
      {
        id: 4,
        title: "ERŐEMELŐ ELEMEK",
        icon: "04_eroemelo.svg",
        link: "/eroemeles"
      },
      {
        id: 5,
        title: "MOBILIZÁCIÓS GYAKORLATOK",
        icon: "05_mobilizacios.svg",
        link: "/mobilizacio"
      },
      {
        id: 6,
        title: "CORE IZMOK ERŐSÍTÉSE",
        icon: "06_core_izmok.svg",
        link: "/coreerosites"
      },
      {
        id: 7,
        title: "EGYEDI EDZÉSTERV",
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
        title: "GYEREK EDZÉSEK",
        icon: "gyermek.svg",
        link: "/gyerekedzesek"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-10 text-white bg-black" }, _attrs))}><div class="container flex flex-col items-end subpage-content"><h2 class="max-w-3xl pb-4 uppercase text-[32px] font-extrabold font-shoulders"> Szolgáltatásaink </h2><p class="max-w-3xl pb-10 text-sm text-right"> A Symbol Gym egyedülálló élményt kínál: itt nem csupán a testedet formálhatod, hanem egy olyan támogató közösség részévé válhatsz, amely mindig melletted áll. Célunk, hogy a mozgás ne csak egy kötelezettség legyen, hanem egy élmény, amelyet szívesen élsz át újra és újra. Nálunk a családias hangulat és az egymás iránti bizalom teremti meg azt a légkört, amelyben mindenki fejlődhet. Az edzések során nemcsak izmaidat erősítjük, hanem barátságokat építünk, és közös sikereket érünk el. Hiszünk abban, hogy a közös célokért való küzdelem és az egymás iránti támogatás sokkal többet ad, mint amit bármelyik edzőterem nyújtani tud. A Symbol Gym-ben minden lépésed számít. Akár a kezdő lépéseknél tartasz, akár a következő nagy kihívásodra készülsz, mi itt vagyunk, hogy segítsünk. Csatlakozz hozzánk, és éld át, milyen érzés, amikor egy közösség veled együtt halad az úton, mindig a legjobbat kihozva belőled! </p><div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"><!--[-->`);
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
export {
  _sfc_main as default
};
//# sourceMappingURL=szolgaltatasok-C-O9NAUx.js.map

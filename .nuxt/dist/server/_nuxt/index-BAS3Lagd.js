import { _ as _sfc_main$1 } from "./NuxtImg-D0iih4Mq.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BlVikBv5.js";
import { withAsyncContext, withCtx, createVNode, toDisplayString, unref, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { f as fetchPosts, t as truncateContent } from "./utils-K1Cg4Kyp.js";
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
import "devalue";
import "./asyncData-3SaHMhLB.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const itemsPost = ([__temp, __restore] = withAsyncContext(() => fetchPosts()), __temp = await __temp, __restore(), __temp);
    const latestPosts = ((_a = itemsPost.value) == null ? void 0 : _a.slice(-3)) || [];
    const heroList = [
      {
        label: "Erősítés",
        img: "01_erosites.svg"
      },
      {
        label: "Személyi edzők",
        img: "02_szemelyi_edzok.svg"
      },
      {
        label: "Különleges edzéstervek",
        img: "03_edzestervek.svg"
      },
      {
        label: "Egyéni étrend tanácsadás",
        img: "04_egyeni_etrend_tervezes.svg"
      },
      {
        label: "Kiemelkedő eszközpark",
        img: "05_kiemelkedo_edzopark.svg"
      }
    ];
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
    const target = [
      {
        title: "Kezdőknek: ",
        description: "Akik most lépnek be a crosstraining világába, és szeretnének egy támogató közösségben fejlődni."
      },
      {
        title: "Tapasztalt sportolóknak: ",
        description: "Akik új kihívásokat keresnek, és tovább szeretnék fejleszteni erőnlétüket és teljesítményüket."
      },
      {
        title: "Közösségre vágyóknak: ",
        description: "Akik egy összetartó, motiváló társaság részei szeretnének lenni, ahol minden edzés közös élmény."
      },
      {
        title: "Fittségüket növelni vágyóknak: ",
        description: "Akik szeretnének fittebbé válni, és a legjobb formájukat hozni."
      },
      {
        title: "Mentális erőt fejleszteni kívánóknak: ",
        description: "Akik nem csak a testüket, de a mentális erejüket is új szintre szeretnék emelni."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="h-[670px] relative overflow-hidden"><div class="container flex items-center justify-end h-full"><div class="max-w-[500px] relative z-10 pt-[100px]"><div class="z-10 p-10 bg-white"><h1 class="pb-5 text-4xl font-extrabold uppercase font-shoulders"> Építsd fel a legjobb önmagad a Symbol Gym-ben! </h1><p> A Symbol Gym-ben a fejlődés nemcsak cél, hanem életstílus. Modern eszközparkunkkal és tapasztalt edzőinkkel segítünk, hogy elérd a kitűzött céljaidat, legyen az erőnövelés, állóképesség-fejlesztés vagy egy egészségesebb életmód kialakítása. Lépj be hozzánk, és tapasztald meg, mit jelent igazán hatékonyan edzeni! </p></div><div class="bg-primary h-1.5"></div></div></div>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/hero-bg.webp",
        class: "absolute inset-0 object-cover w-full h-full",
        alt: "Hero background",
        width: "1536",
        height: "670",
        format: "webp",
        quality: "90",
        loading: "eager",
        fetchpriority: "high"
      }, null, _parent));
      _push(`</section><section class="bg-black"><div class="container flex flex-wrap justify-around py-8 gap-x-20 gap-y-10"><!--[-->`);
      ssrRenderList(heroList, (item) => {
        _push(`<div class="flex flex-col items-center w-20"><div class="h-16 pb-3">`);
        _push(ssrRenderComponent(_component_NuxtImg, {
          src: "/img/hero-icons/" + item.img,
          class: "h-full",
          alt: item.label
        }, null, _parent));
        _push(`</div><span class="text-center text-white uppercase font-teko">${ssrInterpolate(item.label)}</span></div>`);
      });
      _push(`<!--]--></div></section><section class="sm:h-[570px] relative overflow-hidden flex items-center"><div class="container z-10 mix-blend-overlay"><p class="font-shoulders text-white text-4xl sm:text-[170px] opacity-10 font-black uppercase leading-[182px] max-w-4xl"> Sosem késő elkezdeni </p></div>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/red-bg.webp",
        class: "absolute inset-0 object-cover w-full h-full"
      }, null, _parent));
      _push(`</section><section class="py-10 text-white bg-black"><div class="container"><h2 class="pb-4 uppercase text-[32px] font-extrabold font-shoulders"> MIRŐL SZÓL A SYMBOL GYM ÉRZÉS? </h2><p class="max-w-3xl pb-10 text-sm"> A Symbol Gym érzés többről szól, mint egyszerű edzésről. Itt egy közösség része lehetsz, ahol a családias hangulat és a támogató társaság minden alkalommal motivál. A Symbol Gym-ben együtt dolgozunk, együtt fejlődünk, és együtt érjük el a céljainkat. Ez az érzés a közös küzdelmekből, a megosztott sikerekből és a folyamatos támogatásból fakad. Nálunk nem csak erősebbé válsz, hanem igazi közösségre találsz, amely minden lépésedet támogatja az úton. </p>`);
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
      _push(`</div></section><section class="py-10 text-white bg-black"><div class="container flex flex-col items-end"><h2 class="max-w-3xl pb-4 uppercase text-[32px] font-extrabold font-shoulders"> Szolgáltatásaink </h2><p class="max-w-3xl pb-10 text-sm text-right"> A Symbol Gym érzés többről szól, mint egyszerű edzésről. Itt egy közösség része lehetsz, ahol a családias hangulat és a támogató társaság minden alkalommal motivál. A Symbol Gym-ben együtt dolgozunk, együtt fejlődünk, és együtt érjük el a céljainkat. Ez az érzés a közös küzdelmekből, a megosztott sikerekből és a folyamatos támogatásból fakad. Nálunk nem csak erősebbé válsz, hanem igazi közösségre találsz, amely minden lépésedet támogatja az úton. </p><div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"><!--[-->`);
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
      _push(`<!--]--></div></div></section><section class="py-10 text-white bg-black"><div class="container flex flex-col"><h2 class="max-w-3xl pb-4 uppercase text-[32px] font-extrabold font-shoulders"> Blog </h2><div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(latestPosts), (post) => {
        _push(`<div class="page-information-content__blog-content__gBox__iTextBox">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "blog-box__link-box__Nuxtlink",
          to: `/posts/${post.slug}`
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                height: "100%",
                loading: "lazy",
                class: "page-information-content__blog-content__gBox__iTextBox__img",
                src: `${_ctx.$config.public.apiBaseUrl}/storage/${post.image}`,
                alt: "{{ post.title }}"
              }, null, _parent2, _scopeId));
              _push2(`<div class="page-information-content__blog-content__gBox__iTextBox__tBox"${_scopeId}><h4 class="page-information-content__blog-content__gBox__iTextBox__tBox__h4 text-2xl text-white uppercase font-teko"${_scopeId}>${ssrInterpolate(post.title)}</h4><p class="page-information-content__blog-content__gBox__iTextBox__tBox__p"${_scopeId}>${unref(truncateContent)(post.body, 230) ?? ""}</p></div>`);
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
      _push(`<!--]--></div></div></section><section class="container py-20"><h3 class="mb-6 text-4xl font-extrabold font-shoulders text-white"> KINEK VALÓ A SYMBOL GYM? </h3><ul class="space-y-4"><!--[-->`);
      ssrRenderList(target, (item, index) => {
        _push(`<li class="flex items-start text-white"><div class="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-black rounded-full"></div><div><span class="font-semibold text-white">${ssrInterpolate(item.title)}</span> ${ssrInterpolate(item.description)}</div></li>`);
      });
      _push(`<!--]--></ul></section><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BAS3Lagd.js.map

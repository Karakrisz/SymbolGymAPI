import { _ as _sfc_main$1 } from './NuxtImg-D0iih4Mq.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BlVikBv5.mjs';
import { withAsyncContext, withCtx, createVNode, toDisplayString, unref, useSSRContext } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/vue/server-renderer/index.mjs';
import { f as fetchPosts, t as truncateContent } from './utils-K1Cg4Kyp.mjs';
import './server.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/h3/dist/index.mjs';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/devalue/index.js';
import 'file:///Applications/XAMPP/xamppfiles/htdocs/SymbolGymAPI/node_modules/ufo/dist/index.mjs';
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
        label: "Er\u0151s\xEDt\xE9s",
        img: "01_erosites.svg"
      },
      {
        label: "Szem\xE9lyi edz\u0151k",
        img: "02_szemelyi_edzok.svg"
      },
      {
        label: "K\xFCl\xF6nleges edz\xE9stervek",
        img: "03_edzestervek.svg"
      },
      {
        label: "Egy\xE9ni \xE9trend tan\xE1csad\xE1s",
        img: "04_egyeni_etrend_tervezes.svg"
      },
      {
        label: "Kiemelked\u0151 eszk\xF6zpark",
        img: "05_kiemelkedo_edzopark.svg"
      }
    ];
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
    const target = [
      {
        title: "Kezd\u0151knek: ",
        description: "Akik most l\xE9pnek be a crosstraining vil\xE1g\xE1ba, \xE9s szeretn\xE9nek egy t\xE1mogat\xF3 k\xF6z\xF6ss\xE9gben fejl\u0151dni."
      },
      {
        title: "Tapasztalt sportol\xF3knak: ",
        description: "Akik \xFAj kih\xEDv\xE1sokat keresnek, \xE9s tov\xE1bb szeretn\xE9k fejleszteni er\u0151nl\xE9t\xFCket \xE9s teljes\xEDtm\xE9ny\xFCket."
      },
      {
        title: "K\xF6z\xF6ss\xE9gre v\xE1gy\xF3knak: ",
        description: "Akik egy \xF6sszetart\xF3, motiv\xE1l\xF3 t\xE1rsas\xE1g r\xE9szei szeretn\xE9nek lenni, ahol minden edz\xE9s k\xF6z\xF6s \xE9lm\xE9ny."
      },
      {
        title: "Fitts\xE9g\xFCket n\xF6velni v\xE1gy\xF3knak: ",
        description: "Akik szeretn\xE9nek fittebb\xE9 v\xE1lni, \xE9s a legjobb form\xE1jukat hozni."
      },
      {
        title: "Ment\xE1lis er\u0151t fejleszteni k\xEDv\xE1n\xF3knak: ",
        description: "Akik nem csak a test\xFCket, de a ment\xE1lis erej\xFCket is \xFAj szintre szeretn\xE9k emelni."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[--><section class="h-[670px] relative overflow-hidden"><div class="container flex items-center justify-end h-full"><div class="max-w-[500px] relative z-10 pt-[100px]"><div class="z-10 p-10 bg-white"><h1 class="pb-5 text-4xl font-extrabold uppercase font-shoulders"> \xC9p\xEDtsd fel a legjobb \xF6nmagad a Symbol Gym-ben! </h1><p> A Symbol Gym-ben a fejl\u0151d\xE9s nemcsak c\xE9l, hanem \xE9letst\xEDlus. Modern eszk\xF6zparkunkkal \xE9s tapasztalt edz\u0151inkkel seg\xEDt\xFCnk, hogy el\xE9rd a kit\u0171z\xF6tt c\xE9ljaidat, legyen az er\u0151n\xF6vel\xE9s, \xE1ll\xF3k\xE9pess\xE9g-fejleszt\xE9s vagy egy eg\xE9szs\xE9gesebb \xE9letm\xF3d kialak\xEDt\xE1sa. L\xE9pj be hozz\xE1nk, \xE9s tapasztald meg, mit jelent igaz\xE1n hat\xE9konyan edzeni! </p></div><div class="bg-primary h-1.5"></div></div></div>`);
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
      _push(`<!--]--></div></section><section class="sm:h-[570px] relative overflow-hidden flex items-center"><div class="container z-10 mix-blend-overlay"><p class="font-shoulders text-white text-4xl sm:text-[170px] opacity-10 font-black uppercase leading-[182px] max-w-4xl"> Sosem k\xE9s\u0151 elkezdeni </p></div>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/red-bg.webp",
        class: "absolute inset-0 object-cover w-full h-full"
      }, null, _parent));
      _push(`</section><section class="py-10 text-white bg-black"><div class="container"><h2 class="pb-4 uppercase text-[32px] font-extrabold font-shoulders"> MIR\u0150L SZ\xD3L A SYMBOL GYM \xC9RZ\xC9S? </h2><p class="max-w-3xl pb-10 text-sm"> A Symbol Gym \xE9rz\xE9s t\xF6bbr\u0151l sz\xF3l, mint egyszer\u0171 edz\xE9sr\u0151l. Itt egy k\xF6z\xF6ss\xE9g r\xE9sze lehetsz, ahol a csal\xE1dias hangulat \xE9s a t\xE1mogat\xF3 t\xE1rsas\xE1g minden alkalommal motiv\xE1l. A Symbol Gym-ben egy\xFCtt dolgozunk, egy\xFCtt fejl\u0151d\xFCnk, \xE9s egy\xFCtt \xE9rj\xFCk el a c\xE9ljainkat. Ez az \xE9rz\xE9s a k\xF6z\xF6s k\xFCzdelmekb\u0151l, a megosztott sikerekb\u0151l \xE9s a folyamatos t\xE1mogat\xE1sb\xF3l fakad. N\xE1lunk nem csak er\u0151sebb\xE9 v\xE1lsz, hanem igazi k\xF6z\xF6ss\xE9gre tal\xE1lsz, amely minden l\xE9p\xE9sedet t\xE1mogatja az \xFAton. </p>`);
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
      _push(`</div></section><section class="py-10 text-white bg-black"><div class="container flex flex-col items-end"><h2 class="max-w-3xl pb-4 uppercase text-[32px] font-extrabold font-shoulders"> Szolg\xE1ltat\xE1saink </h2><p class="max-w-3xl pb-10 text-sm text-right"> A Symbol Gym \xE9rz\xE9s t\xF6bbr\u0151l sz\xF3l, mint egyszer\u0171 edz\xE9sr\u0151l. Itt egy k\xF6z\xF6ss\xE9g r\xE9sze lehetsz, ahol a csal\xE1dias hangulat \xE9s a t\xE1mogat\xF3 t\xE1rsas\xE1g minden alkalommal motiv\xE1l. A Symbol Gym-ben egy\xFCtt dolgozunk, egy\xFCtt fejl\u0151d\xFCnk, \xE9s egy\xFCtt \xE9rj\xFCk el a c\xE9ljainkat. Ez az \xE9rz\xE9s a k\xF6z\xF6s k\xFCzdelmekb\u0151l, a megosztott sikerekb\u0151l \xE9s a folyamatos t\xE1mogat\xE1sb\xF3l fakad. N\xE1lunk nem csak er\u0151sebb\xE9 v\xE1lsz, hanem igazi k\xF6z\xF6ss\xE9gre tal\xE1lsz, amely minden l\xE9p\xE9sedet t\xE1mogatja az \xFAton. </p><div class="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"><!--[-->`);
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
            var _a2;
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                height: "100%",
                loading: "lazy",
                class: "page-information-content__blog-content__gBox__iTextBox__img",
                src: `${_ctx.$config.public.apiBaseUrl}/storage/${post.image}`,
                alt: "{{ post.title }}"
              }, null, _parent2, _scopeId));
              _push2(`<div class="page-information-content__blog-content__gBox__iTextBox__tBox"${_scopeId}><h4 class="page-information-content__blog-content__gBox__iTextBox__tBox__h4 text-2xl text-white uppercase font-teko"${_scopeId}>${ssrInterpolate(post.title)}</h4><p class="page-information-content__blog-content__gBox__iTextBox__tBox__p"${_scopeId}>${(_a2 = unref(truncateContent)(post.body, 230)) != null ? _a2 : ""}</p></div>`);
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
      _push(`<!--]--></div></div></section><section class="container py-20"><h3 class="mb-6 text-4xl font-extrabold font-shoulders text-white"> KINEK VAL\xD3 A SYMBOL GYM? </h3><ul class="space-y-4"><!--[-->`);
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

export { _sfc_main as default };
//# sourceMappingURL=index-BAS3Lagd.mjs.map

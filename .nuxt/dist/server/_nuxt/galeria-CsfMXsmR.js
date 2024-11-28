import { _ as _sfc_main$1 } from "./NuxtImg-D0iih4Mq.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BlVikBv5.js";
import { defineComponent, inject, computed, openBlock, createElementBlock, mergeProps, renderSlot, createCommentVNode, createElementVNode, ref, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderTeleport } from "vue/server-renderer";
import { u as useHead } from "../server.mjs";
import "defu";
import "ufo";
import "h3";
import "destr";
import "klona";
import "devalue";
import "#internal/nuxt/paths";
import "hookable";
import "ofetch";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
const v = ["width", "height", "fill", "transform"], V$3 = { key: 0 }, H$3 = /* @__PURE__ */ createElementVNode("path", { d: "M140,32V64a12,12,0,0,1-24,0V32a12,12,0,0,1,24,0Zm33.25,62.75a12,12,0,0,0,8.49-3.52L204.37,68.6a12,12,0,0,0-17-17L164.77,74.26a12,12,0,0,0,8.48,20.49ZM224,116H192a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Zm-42.26,48.77a12,12,0,1,0-17,17l22.63,22.63a12,12,0,0,0,17-17ZM128,180a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V192A12,12,0,0,0,128,180ZM74.26,164.77,51.63,187.4a12,12,0,0,0,17,17l22.63-22.63a12,12,0,1,0-17-17ZM76,128a12,12,0,0,0-12-12H32a12,12,0,0,0,0,24H64A12,12,0,0,0,76,128ZM68.6,51.63a12,12,0,1,0-17,17L74.26,91.23a12,12,0,0,0,17-17Z" }, null, -1), y = [
  H$3
], L$2 = { key: 1 }, f$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
  opacity: "0.2"
}, null, -1), w$3 = /* @__PURE__ */ createElementVNode("path", { d: "M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.25,58.75a8,8,0,0,0,5.66-2.35l22.63-22.62a8,8,0,0,0-11.32-11.32L167.6,77.09a8,8,0,0,0,5.65,13.66ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z" }, null, -1), k$3 = [
  f$1,
  w$3
], S$3 = { key: 2 }, x$3 = /* @__PURE__ */ createElementVNode("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm33.94,58.75,17-17a8,8,0,0,1,11.32,11.32l-17,17a8,8,0,0,1-11.31-11.31ZM48,136a8,8,0,0,1,0-16H72a8,8,0,0,1,0,16Zm46.06,37.25-17,17a8,8,0,0,1-11.32-11.32l17-17a8,8,0,0,1,11.31,11.31Zm0-79.19a8,8,0,0,1-11.31,0l-17-17A8,8,0,0,1,77.09,65.77l17,17A8,8,0,0,1,94.06,94.06ZM136,208a8,8,0,0,1-16,0V184a8,8,0,0,1,16,0Zm0-136a8,8,0,0,1-16,0V48a8,8,0,0,1,16,0Zm54.23,118.23a8,8,0,0,1-11.32,0l-17-17a8,8,0,0,1,11.31-11.31l17,17A8,8,0,0,1,190.23,190.23ZM208,136H184a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Z" }, null, -1), z$3 = [
  x$3
], C$3 = { key: 3 }, B$3 = /* @__PURE__ */ createElementVNode("path", { d: "M134,32V64a6,6,0,0,1-12,0V32a6,6,0,0,1,12,0Zm39.25,56.75A6,6,0,0,0,177.5,87l22.62-22.63a6,6,0,0,0-8.48-8.48L169,78.5a6,6,0,0,0,4.24,10.25ZM224,122H192a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm-46.5,47A6,6,0,0,0,169,177.5l22.63,22.62a6,6,0,0,0,8.48-8.48ZM128,186a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V192A6,6,0,0,0,128,186ZM78.5,169,55.88,191.64a6,6,0,1,0,8.48,8.48L87,177.5A6,6,0,1,0,78.5,169ZM70,128a6,6,0,0,0-6-6H32a6,6,0,0,0,0,12H64A6,6,0,0,0,70,128ZM64.36,55.88a6,6,0,0,0-8.48,8.48L78.5,87A6,6,0,1,0,87,78.5Z" }, null, -1), N$3 = [
  B$3
], b$3 = { key: 4 }, E$3 = /* @__PURE__ */ createElementVNode("path", { d: "M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.25,58.75a8,8,0,0,0,5.66-2.35l22.63-22.62a8,8,0,0,0-11.32-11.32L167.6,77.09a8,8,0,0,0,5.65,13.66ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z" }, null, -1), P$3 = [
  E$3
], W$3 = { key: 5 }, $$3 = /* @__PURE__ */ createElementVNode("path", { d: "M132,32V64a4,4,0,0,1-8,0V32a4,4,0,0,1,8,0Zm41.25,54.75a4,4,0,0,0,2.83-1.18L198.71,63a4,4,0,0,0-5.66-5.66L170.43,79.92a4,4,0,0,0,2.82,6.83ZM224,124H192a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8Zm-47.92,46.43a4,4,0,1,0-5.65,5.65l22.62,22.63a4,4,0,0,0,5.66-5.66ZM128,188a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V192A4,4,0,0,0,128,188ZM79.92,170.43,57.29,193.05A4,4,0,0,0,63,198.71l22.62-22.63a4,4,0,1,0-5.65-5.65ZM68,128a4,4,0,0,0-4-4H32a4,4,0,0,0,0,8H64A4,4,0,0,0,68,128ZM63,57.29A4,4,0,0,0,57.29,63L79.92,85.57a4,4,0,1,0,5.65-5.65Z" }, null, -1), j$3 = [
  $$3
], q$1 = {
  name: "PhSpinner"
}, G$1 = /* @__PURE__ */ defineComponent({
  ...q$1,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(d) {
    const s = d, c = inject("weight", "regular"), Z2 = inject("size", "1em"), h = inject("color", "currentColor"), _ = inject("mirrored", false), o = computed(() => s.weight ?? c), i = computed(() => s.size ?? Z2), M2 = computed(() => s.color ?? h), m = computed(() => s.mirrored !== void 0 ? s.mirrored ? "scale(-1, 1)" : void 0 : _ ? "scale(-1, 1)" : void 0);
    return (r, D) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: M2.value,
      transform: m.value
    }, r.$attrs), [
      renderSlot(r.$slots, "default"),
      o.value === "bold" ? (openBlock(), createElementBlock("g", V$3, y)) : o.value === "duotone" ? (openBlock(), createElementBlock("g", L$2, k$3)) : o.value === "fill" ? (openBlock(), createElementBlock("g", S$3, z$3)) : o.value === "light" ? (openBlock(), createElementBlock("g", C$3, N$3)) : o.value === "regular" ? (openBlock(), createElementBlock("g", b$3, P$3)) : o.value === "thin" ? (openBlock(), createElementBlock("g", W$3, j$3)) : createCommentVNode("", true)
    ], 16, v));
  }
});
const w$2 = ["width", "height", "fill", "transform"], H$2 = { key: 0 }, M$2 = /* @__PURE__ */ createElementVNode("path", { d: "M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z" }, null, -1), k$2 = [
  M$2
], A$2 = { key: 1 }, Z$2 = /* @__PURE__ */ createElementVNode("path", {
  d: "M112,56V200L40,128Z",
  opacity: "0.2"
}, null, -1), x$2 = /* @__PURE__ */ createElementVNode("path", { d: "M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z" }, null, -1), L$1 = [
  Z$2,
  x$2
], S$2 = { key: 2 }, z$2 = /* @__PURE__ */ createElementVNode("path", { d: "M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z" }, null, -1), C$2 = [
  z$2
], V$2 = { key: 3 }, B$2 = /* @__PURE__ */ createElementVNode("path", { d: "M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z" }, null, -1), N$2 = [
  B$2
], b$2 = { key: 4 }, E$2 = /* @__PURE__ */ createElementVNode("path", { d: "M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" }, null, -1), P$2 = [
  E$2
], W$2 = { key: 5 }, $$2 = /* @__PURE__ */ createElementVNode("path", { d: "M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z" }, null, -1), j$2 = [
  $$2
], q = {
  name: "PhArrowLeft"
}, G = /* @__PURE__ */ defineComponent({
  ...q,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(d) {
    const l = d, c = inject("weight", "regular"), _ = inject("size", "1em"), h = inject("color", "currentColor"), u = inject("mirrored", false), s = computed(() => l.weight ?? c), i = computed(() => l.size ?? _), p = computed(() => l.color ?? h), g = computed(() => l.mirrored !== void 0 ? l.mirrored ? "scale(-1, 1)" : void 0 : u ? "scale(-1, 1)" : void 0);
    return (r, D) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: p.value,
      transform: g.value
    }, r.$attrs), [
      renderSlot(r.$slots, "default"),
      s.value === "bold" ? (openBlock(), createElementBlock("g", H$2, k$2)) : s.value === "duotone" ? (openBlock(), createElementBlock("g", A$2, L$1)) : s.value === "fill" ? (openBlock(), createElementBlock("g", S$2, C$2)) : s.value === "light" ? (openBlock(), createElementBlock("g", V$2, N$2)) : s.value === "regular" ? (openBlock(), createElementBlock("g", b$2, P$2)) : s.value === "thin" ? (openBlock(), createElementBlock("g", W$2, j$2)) : createCommentVNode("", true)
    ], 16, w$2));
  }
});
const w$1 = ["width", "height", "fill", "transform"], H$1 = { key: 0 }, M$1 = /* @__PURE__ */ createElementVNode("path", { d: "M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" }, null, -1), A$1 = [
  M$1
], L = { key: 1 }, k$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M216,128l-72,72V56Z",
  opacity: "0.2"
}, null, -1), Z$1 = /* @__PURE__ */ createElementVNode("path", { d: "M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z" }, null, -1), x$1 = [
  k$1,
  Z$1
], S$1 = { key: 2 }, V$1 = /* @__PURE__ */ createElementVNode("path", { d: "M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z" }, null, -1), z$1 = [
  V$1
], C$1 = { key: 3 }, B$1 = /* @__PURE__ */ createElementVNode("path", { d: "M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z" }, null, -1), N$1 = [
  B$1
], b$1 = { key: 4 }, E$1 = /* @__PURE__ */ createElementVNode("path", { d: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" }, null, -1), P$1 = [
  E$1
], W$1 = { key: 5 }, $$1 = /* @__PURE__ */ createElementVNode("path", { d: "M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z" }, null, -1), j$1 = [
  $$1
], R = {
  name: "PhArrowRight"
}, F$1 = /* @__PURE__ */ defineComponent({
  ...R,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(d) {
    const l = d, c = inject("weight", "regular"), h = inject("size", "1em"), _ = inject("color", "currentColor"), u = inject("mirrored", false), s = computed(() => l.weight ?? c), r = computed(() => l.size ?? h), p = computed(() => l.color ?? _), g = computed(() => l.mirrored !== void 0 ? l.mirrored ? "scale(-1, 1)" : void 0 : u ? "scale(-1, 1)" : void 0);
    return (a, q2) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: r.value,
      height: r.value,
      fill: p.value,
      transform: g.value
    }, a.$attrs), [
      renderSlot(a.$slots, "default"),
      s.value === "bold" ? (openBlock(), createElementBlock("g", H$1, A$1)) : s.value === "duotone" ? (openBlock(), createElementBlock("g", L, x$1)) : s.value === "fill" ? (openBlock(), createElementBlock("g", S$1, z$1)) : s.value === "light" ? (openBlock(), createElementBlock("g", C$1, N$1)) : s.value === "regular" ? (openBlock(), createElementBlock("g", b$1, P$1)) : s.value === "thin" ? (openBlock(), createElementBlock("g", W$1, j$1)) : createCommentVNode("", true)
    ], 16, w$1));
  }
});
const f = ["width", "height", "fill", "transform"], w = { key: 0 }, M = /* @__PURE__ */ createElementVNode("path", { d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" }, null, -1), k = [
  M
], Z = { key: 1 }, A = /* @__PURE__ */ createElementVNode("path", {
  d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
  opacity: "0.2"
}, null, -1), x = /* @__PURE__ */ createElementVNode("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), S = [
  A,
  x
], V = { key: 2 }, z = /* @__PURE__ */ createElementVNode("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), C = [
  z
], B = { key: 3 }, H = /* @__PURE__ */ createElementVNode("path", { d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z" }, null, -1), N = [
  H
], b = { key: 4 }, E = /* @__PURE__ */ createElementVNode("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }, null, -1), P = [
  E
], W = { key: 5 }, $ = /* @__PURE__ */ createElementVNode("path", { d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z" }, null, -1), j = [
  $
], X = {
  name: "PhX"
}, F = /* @__PURE__ */ defineComponent({
  ...X,
  props: {
    weight: {
      type: String
    },
    size: {
      type: [String, Number]
    },
    color: {
      type: String
    },
    mirrored: {
      type: Boolean
    }
  },
  setup(d) {
    const a = d, c = inject("weight", "regular"), _ = inject("size", "1em"), h = inject("color", "currentColor"), u = inject("mirrored", false), s = computed(() => a.weight ?? c), i = computed(() => a.size ?? _), p = computed(() => a.color ?? h), L2 = computed(() => a.mirrored !== void 0 ? a.mirrored ? "scale(-1, 1)" : void 0 : u ? "scale(-1, 1)" : void 0);
    return (r, q2) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: i.value,
      height: i.value,
      fill: p.value,
      transform: L2.value
    }, r.$attrs), [
      renderSlot(r.$slots, "default"),
      s.value === "bold" ? (openBlock(), createElementBlock("g", w, k)) : s.value === "duotone" ? (openBlock(), createElementBlock("g", Z, S)) : s.value === "fill" ? (openBlock(), createElementBlock("g", V, C)) : s.value === "light" ? (openBlock(), createElementBlock("g", B, N)) : s.value === "regular" ? (openBlock(), createElementBlock("g", b, P)) : s.value === "thin" ? (openBlock(), createElementBlock("g", W, j)) : createCommentVNode("", true)
    ], 16, f));
  }
});
const _sfc_main = {
  __name: "galeria",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Galéria"
    });
    const galleryImages = ref([]);
    const currentImageIndex = ref(0);
    const isLightboxOpen = ref(false);
    const isImageLoading = ref(false);
    const currentImage = computed(
      () => galleryImages.value[currentImageIndex.value]
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_PhosphorIconSpinner = G$1;
      const _component_PhosphorIconArrowLeft = G;
      const _component_PhosphorIconArrowRight = F$1;
      const _component_PhosphorIconX = F;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "gallery-content bg-black" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: "/img/team.webp",
        alt: "Beautiful garden path",
        class: "object-cover w-full h-screen"
      }, null, _parent));
      _push(`<div class="container my-16"><h2 class="mb-8 text-white text-3xl uppercase font-teko text-white"> GALÉRIA </h2><div class="leading-loose"><p class="pb-6 text-white"> A Symbol Gym Orosháza több mint egy egyszerű edzőterem – ez egy olyan közösségi tér, ahol az emberek inspirációt és támogatást találnak az egészségesebb, erősebb élet felé vezető úton. Itt mindenki megtapasztalhatja, mit jelent túllépni a saját határain, legyen szó fizikai vagy mentális kihívásokról. Edzéseink nemcsak a testet formálják, hanem a lelket is erősítik, hogy kitartással és elszántsággal nézhess szembe a mindennapok próbáival. Az itt megszerzett erő és kitartás az élet minden területén érezteti hatását. </p><p class="pb-6 text-white"> Az edzéseink során a legújabb technológiákat és módszereket alkalmazzuk, hogy a fejlődésed minden szempontból optimális legyen. A Symbol Gym falai között minden perc értékes, és minden egyes gyakorlat közelebb visz a kitűzött célokhoz. A fejlesztésre szánt figyelem és az elért eredmények öröme egyaránt hozzájárulnak ahhoz, hogy az edzés ne csak kötelezettség, hanem valódi életmód legyen. </p><p class="text-white"> Várunk téged is a Symbol Gym Orosházában, ahol egy családias közösségben, támogató légkörben dolgozhatsz önmagad legjobb változatának megteremtésén. Éld át a változást, érezd az erőt és találd meg azt az önbizalmat, ami valóban megváltoztatja az életedet! Légy részese ennek az inspiráló utazásnak, ahol nemcsak tested, hanem lelked is új szintre emelkedik. Csatlakozz hozzánk, és tapasztald meg, mit jelent az igazi csapat, ahol együtt érünk el csodálatos eredményeket! </p></div><div class="grid grid-cols-1 gap-4 pt-10 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(galleryImages.value, (image, index) => {
        _push(`<div class="relative group"><div><div class="relative w-full h-64 mb-4 overflow-hidden transition-shadow duration-300 cursor-pointer group-hover:shadow-xl"><img${ssrRenderAttr("src", image.src)}${ssrRenderAttr("alt", image.alt)} class="object-cover w-full h-full" loading="lazy"><div class="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-0 cursor-pointer group-hover:bg-opacity-20"><span class="text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">Megtekintés</span></div></div></div></div>`);
      });
      _push(`<!--]--></div>`);
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
      _push(`</div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (isLightboxOpen.value) {
          _push2(`<div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 lightbox-container"><div class="relative max-w-4xl max-h-full">`);
          if (isImageLoading.value) {
            _push2(`<div class="absolute inset-0 flex items-center justify-center">`);
            _push2(ssrRenderComponent(_component_PhosphorIconSpinner, { class: "w-8 h-8 text-white animate-spin" }, null, _parent));
            _push2(`</div>`);
          } else {
            _push2(`<!---->`);
          }
          if (currentImage.value) {
            _push2(`<img${ssrRenderAttr("src", currentImage.value.src)}${ssrRenderAttr("alt", currentImage.value.alt)} class="object-contain max-w-full max-h-[80vh]">`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<button class="absolute p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full left-4 top-1/2 hover:bg-opacity-75">`);
          _push2(ssrRenderComponent(_component_PhosphorIconArrowLeft, { size: 24 }, null, _parent));
          _push2(`</button><button class="absolute p-2 text-white transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full right-4 top-1/2 hover:bg-opacity-75">`);
          _push2(ssrRenderComponent(_component_PhosphorIconArrowRight, { size: 24 }, null, _parent));
          _push2(`</button><button class="absolute p-2 text-white bg-black bg-opacity-50 rounded-full top-4 right-4 hover:bg-opacity-75">`);
          _push2(ssrRenderComponent(_component_PhosphorIconX, { size: 24 }, null, _parent));
          _push2(`</button></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/galeria.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=galeria-CsfMXsmR.js.map

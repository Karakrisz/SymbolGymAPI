import { defineComponent, inject, computed, openBlock, createElementBlock, mergeProps, renderSlot, createCommentVNode, createElementVNode, ref, watch, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const w = ["width", "height", "fill", "transform"], M = { key: 0 }, k = /* @__PURE__ */ createElementVNode("path", { d: "M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z" }, null, -1), Z = [
  k
], A = { key: 1 }, x = /* @__PURE__ */ createElementVNode("path", {
  d: "M208,160H48l80-80Z",
  opacity: "0.2"
}, null, -1), C = /* @__PURE__ */ createElementVNode("path", { d: "M213.66,154.34l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,168H208a8,8,0,0,0,5.66-13.66ZM67.31,152,128,91.31,188.69,152Z" }, null, -1), S = [
  x,
  C
], z = { key: 2 }, B = /* @__PURE__ */ createElementVNode("path", { d: "M215.39,163.06A8,8,0,0,1,208,168H48a8,8,0,0,1-5.66-13.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,215.39,163.06Z" }, null, -1), L = [
  B
], H = { key: 3 }, N = /* @__PURE__ */ createElementVNode("path", { d: "M212.24,164.24a6,6,0,0,1-8.48,0L128,88.49,52.24,164.24a6,6,0,0,1-8.48-8.48l80-80a6,6,0,0,1,8.48,0l80,80A6,6,0,0,1,212.24,164.24Z" }, null, -1), b = [
  N
], E = { key: 4 }, P = /* @__PURE__ */ createElementVNode("path", { d: "M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z" }, null, -1), V = [
  P
], W = { key: 5 }, $ = /* @__PURE__ */ createElementVNode("path", { d: "M210.83,162.83a4,4,0,0,1-5.66,0L128,85.66,50.83,162.83a4,4,0,0,1-5.66-5.66l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,210.83,162.83Z" }, null, -1), j = [
  $
], U = {
  name: "PhCaretUp"
}, F = /* @__PURE__ */ defineComponent({
  ...U,
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
    const l = d, c = inject("weight", "regular"), _ = inject("size", "1em"), h = inject("color", "currentColor"), u = inject("mirrored", false), s = computed(() => l.weight ?? c), a = computed(() => l.size ?? _), p = computed(() => l.color ?? h), g = computed(() => l.mirrored !== void 0 ? l.mirrored ? "scale(-1, 1)" : void 0 : u ? "scale(-1, 1)" : void 0);
    return (r, q) => (openBlock(), createElementBlock("svg", mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 256 256",
      width: a.value,
      height: a.value,
      fill: p.value,
      transform: g.value
    }, r.$attrs), [
      renderSlot(r.$slots, "default"),
      s.value === "bold" ? (openBlock(), createElementBlock("g", M, Z)) : s.value === "duotone" ? (openBlock(), createElementBlock("g", A, S)) : s.value === "fill" ? (openBlock(), createElementBlock("g", z, L)) : s.value === "light" ? (openBlock(), createElementBlock("g", H, b)) : s.value === "regular" ? (openBlock(), createElementBlock("g", E, V)) : s.value === "thin" ? (openBlock(), createElementBlock("g", W, j)) : createCommentVNode("", true)
    ], 16, w));
  }
});
const _sfc_main = /* @__PURE__ */ Object.assign({
  name: "DisclosureItem"
}, {
  __name: "DisclosureItem",
  __ssrInlineRender: true,
  props: {
    id: {
      type: String,
      required: true
    },
    modelValue: {
      type: Boolean,
      default: void 0
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const { openStates, toggleItem, registerItem } = inject("disclosure");
    ref(null);
    const contentHeight = ref(0);
    const isOpen = computed({
      get: () => props.modelValue !== void 0 ? props.modelValue : openStates[props.id],
      set: (value) => {
        if (props.modelValue !== void 0) {
          emit("update:modelValue", value);
        } else {
          toggleItem(props.id);
        }
      }
    });
    watch(() => props.modelValue, (newValue) => {
      if (newValue !== void 0) {
        openStates[props.id] = newValue;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PhosphorIconCaretUp = F;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-2" }, _attrs))} data-v-abe75901><button class="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75" data-v-abe75901>`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_PhosphorIconCaretUp, {
        class: [unref(isOpen) ? "rotate-180 transform" : "", "w-5 h-5 text-purple-500"]
      }, null, _parent));
      _push(`</button><div class="overflow-hidden transition-max-height" style="${ssrRenderStyle({ maxHeight: unref(isOpen) ? `${contentHeight.value}px` : "0" })}" data-v-abe75901><div class="px-4 pt-4 pb-2 text-sm text-gray-500" data-v-abe75901>`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/DisclosureItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DisclosureItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-abe75901"]]);
export {
  DisclosureItem as default
};
//# sourceMappingURL=DisclosureItem-OSCxzren.js.map

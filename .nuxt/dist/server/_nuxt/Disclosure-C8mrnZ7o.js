import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { reactive, provide, useSSRContext } from "vue";
const _sfc_main = /* @__PURE__ */ Object.assign({
  name: "Disclosure"
}, {
  __name: "Disclosure",
  __ssrInlineRender: true,
  props: {
    singleOpen: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const openStates = reactive({});
    const toggleItem = (id) => {
      if (props.singleOpen) {
        for (const key in openStates) {
          openStates[key] = key === id ? !openStates[key] : false;
        }
      } else {
        openStates[id] = !openStates[id];
      }
    };
    const registerItem = (id, initialState = false) => {
      if (!(id in openStates)) {
        openStates[id] = initialState;
      }
    };
    provide("disclosure", {
      openStates,
      toggleItem,
      registerItem
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/Disclosure.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Disclosure-C8mrnZ7o.js.map

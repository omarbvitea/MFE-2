import { importShared } from './__federation_fn_import-1Ztatw5a.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

const {toDisplayString:_toDisplayString,createElementVNode:_createElementVNode,renderSlot:_renderSlot,createTextVNode:_createTextVNode,openBlock:_openBlock,createElementBlock:_createElementBlock,createCommentVNode:_createCommentVNode} = await importShared('vue');


const _hoisted_1 = { class: "card" };
const _hoisted_2 = { class: "card-header" };
const _hoisted_3 = { class: "card-body" };
const _hoisted_4 = {
  key: 0,
  class: "card-footer"
};




const _sfc_main = {
  __name: 'Card',
  props: {
  title: {
    type: String,
    default: 'Card from Microfrontend 2'
  }
},
  setup(__props) {



return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("h3", null, _toDisplayString(__props.title), 1)
    ]),
    _createElementVNode("div", _hoisted_3, [
      _renderSlot(_ctx.$slots, "default", {}, () => [
        _cache[0] || (_cache[0] = _createTextVNode("Card content goes here", -1))
      ], true)
    ]),
    (_ctx.$slots.footer)
      ? (_openBlock(), _createElementBlock("div", _hoisted_4, [
          _renderSlot(_ctx.$slots, "footer", {}, undefined, true)
        ]))
      : _createCommentVNode("", true)
  ]))
}
}

};
const Card = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-f046808f"]]);

export { Card as default };

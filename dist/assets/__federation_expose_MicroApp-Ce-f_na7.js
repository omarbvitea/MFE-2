import { importShared } from './__federation_fn_import-1Ztatw5a.js';
import Card from './__federation_expose_Card-lg8x3-VN.js';
import { _ as _export_sfc } from './_plugin-vue_export-helper-pcqpp-6-.js';

const {createElementVNode:_createElementVNode,createTextVNode:_createTextVNode,toDisplayString:_toDisplayString,withCtx:_withCtx,createVNode:_createVNode,createStaticVNode:_createStaticVNode,openBlock:_openBlock,createElementBlock:_createElementBlock} = await importShared('vue');


const _hoisted_1 = { class: "micro-app-2" };
const _hoisted_2 = { class: "content" };
const _hoisted_3 = { class: "demo-section" };
const _hoisted_4 = { class: "card-grid" };

const {ref} = await importShared('vue');


const _sfc_main = {
  __name: 'MicroApp',
  setup(__props) {

const currentDate = ref(new Date().toLocaleDateString());

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _cache[10] || (_cache[10] = _createElementVNode("div", { class: "header" }, [
      _createElementVNode("h2", null, "Microfrontend 2"),
      _createElementVNode("p", null, "Dynamic Card Components")
    ], -1)),
    _createElementVNode("div", _hoisted_2, [
      _createElementVNode("div", _hoisted_3, [
        _cache[8] || (_cache[8] = _createElementVNode("h3", null, "Card Gallery", -1)),
        _createElementVNode("div", _hoisted_4, [
          _createVNode(Card, { title: "Feature Card 1" }, {
            footer: _withCtx(() => [
              _createElementVNode("small", null, "Created: " + _toDisplayString(currentDate.value), 1)
            ]),
            default: _withCtx(() => [
              _cache[0] || (_cache[0] = _createElementVNode("p", null, "This card demonstrates the reusable card component from Microfrontend 2.", -1)),
              _cache[1] || (_cache[1] = _createElementVNode("p", null, [
                _createElementVNode("strong", null, "Features:"),
                _createTextVNode(" Customizable title, slots for content and footer.")
              ], -1))
            ]),
            _: 1
          }),
          _createVNode(Card, { title: "Feature Card 2" }, {
            footer: _withCtx(() => [...(_cache[2] || (_cache[2] = [
              _createElementVNode("small", null, "Status: Active", -1)
            ]))]),
            default: _withCtx(() => [
              _cache[3] || (_cache[3] = _createElementVNode("p", null, "Cards can display any content you want.", -1)),
              _cache[4] || (_cache[4] = _createElementVNode("ul", null, [
                _createElementVNode("li", null, "Flexible layouts"),
                _createElementVNode("li", null, "Responsive design"),
                _createElementVNode("li", null, "Modern styling")
              ], -1))
            ]),
            _: 1
          }),
          _createVNode(Card, { title: "Feature Card 3" }, {
            footer: _withCtx(() => [...(_cache[5] || (_cache[5] = [
              _createElementVNode("small", null, "Version: 1.0.0", -1)
            ]))]),
            default: _withCtx(() => [
              _cache[6] || (_cache[6] = _createElementVNode("p", null, "Perfect for displaying information in a structured way.", -1)),
              _cache[7] || (_cache[7] = _createElementVNode("p", null, "Module Federation makes it easy to share these components across applications.", -1))
            ]),
            _: 1
          })
        ])
      ]),
      _cache[9] || (_cache[9] = _createStaticVNode("<div class=\"info-section\" data-v-086a1071><h3 data-v-086a1071>About This Microfrontend</h3><p data-v-086a1071> This is Microfrontend 2, which provides reusable card components. Cards are perfect for displaying content in an organized and visually appealing way. </p><div class=\"stats\" data-v-086a1071><div class=\"stat-card\" data-v-086a1071><span class=\"stat-value\" data-v-086a1071>3</span><span class=\"stat-label\" data-v-086a1071>Active Cards</span></div><div class=\"stat-card\" data-v-086a1071><span class=\"stat-value\" data-v-086a1071>100%</span><span class=\"stat-label\" data-v-086a1071>Responsive</span></div></div></div>", 1))
    ])
  ]))
}
}

};
const MicroApp = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-086a1071"]]);

export { MicroApp as default };

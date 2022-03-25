exports.ids = [2];
exports.modules = {

/***/ 33:
/***/ (function(module) {

module.exports = JSON.parse("[{\"actuID\":1,\"fr\":{\"title\":\"Laissez brûler le parpaing - captation\",\"description\":\"Kub- Introduction... blablabla\"},\"en\":{\"title\":\"Let te cinder block burn - recording\",\"description\":\"Kub- Introduction... blablabla\"},\"images\":[],\"media\":[]},{\"actuID\":2,\"fr\":{\"title\":\"Sortie de Kub- Introduction\",\"description\":\"Kub- Introduction... blablabla\"},\"en\":{\"title\":\"Releasing Kub- intro\",\"description\":\"Kub- Introduction... blablabla\"},\"images\":[],\"media\":[]}]");

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/actus.vue?vue&type=template&id=99fbfb76&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"content-part\">"+((_vm.lang === 'fr')?("<h2>Actualités</h2>"):("<h2>News</h2>"))+" "+(_vm._ssrList((_vm.actus),function(actu,index){return ("<div><h2>"+_vm._ssrEscape(_vm._s(actu[_vm.lang].title))+"</h2> <p>"+_vm._ssrEscape("\n                "+_vm._s(actu[_vm.lang].description)+"\n            ")+"</p></div>")}))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/actus.vue?vue&type=template&id=99fbfb76&

// EXTERNAL MODULE: ./data/actus.json
var actus = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/actus.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var actusvue_type_script_lang_js_ = ({
  data() {
    return {
      actus: actus.reverse()
    };
  },

  computed: {
    lang() {
      return this.$store.state.lang;
    }

  }
});
// CONCATENATED MODULE: ./pages/actus.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_actusvue_type_script_lang_js_ = (actusvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/actus.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_actusvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "72a0d264"
  
)

/* harmony default export */ var pages_actus = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=actus.js.map
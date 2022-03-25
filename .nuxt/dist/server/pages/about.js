exports.ids = [1];
exports.modules = {

/***/ 35:
/***/ (function(module) {

module.exports = JSON.parse("[{\"fr\":\"Rozier & Grégore est un duo d'artistes\",\"en\":\"Rozier & Grégore is Arthur Kuhn & Paul Cottet-Dumoulin\"}]");

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=3ee72acf&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"content-part\">"+((_vm.lang === 'fr')?("<h2>À propos</h2>"):("<h2>About</h2>"))+" <div>"+_vm._ssrEscape("\n            "+_vm._s(_vm.about[_vm.lang])+"\n        ")+"</div> "+(_vm._ssrList((_vm.contacts.links),function(link){return ("<div><p><a"+(_vm._ssrAttr("href",link.link))+">"+_vm._ssrEscape(_vm._s(link.name))+"</a></p></div>")}))+"</div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=3ee72acf&

// EXTERNAL MODULE: ./data/about.json
var about = __webpack_require__(35);

// EXTERNAL MODULE: ./data/contacts.json
var contacts = __webpack_require__(12);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js&
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
//


/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  data() {
    return {
      about: about[0],
      contacts: contacts[0]
    };
  },

  computed: {
    lang() {
      return this.$store.state.lang;
    }

  }
});
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/about.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "565d592b"
  
)

/* harmony default export */ var pages_about = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about.js.map
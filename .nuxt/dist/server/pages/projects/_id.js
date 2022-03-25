exports.ids = [4];
exports.modules = {

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/projects/_id.vue?vue&type=template&id=56ffb608&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"content-part\"><h1 class=\"text-center\">"+_vm._ssrEscape(_vm._s(_vm.project[_vm.lang].title))+"</h1> <div>"+(_vm._s(_vm.project.media[0]))+"</div> <p>"+_vm._ssrEscape(" "+_vm._s(_vm.project[_vm.lang].description)+" ")+"</p></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/projects/_id.vue?vue&type=template&id=56ffb608&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/projects/_id.vue?vue&type=script&lang=js&
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
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  head() {},

  async asyncData({
    params,
    $dataApi,
    error
  }) {
    const projectData = await Promise.all([$dataApi.getProject(params.id)]);
    const badResponse = projectData.find(response => !response.ok);
    if (badResponse) return error({
      statusCode: badResponse.status,
      message: badResponse.statusText
    });
    return {
      project: projectData[0].json
    };
  },

  computed: {
    lang() {
      return this.$store.state.lang;
    }

  },
  methods: {}
});
// CONCATENATED MODULE: ./pages/projects/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var projects_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/projects/_id.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  projects_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "479a3e77"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index1_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index2_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);




//import {Clipboard} from 'clipboard';

var searchInitialList = ["Jojos Bizarre Adventure Funny", "Cats funny", "gaming", "gifs"];

__WEBPACK_IMPORTED_MODULE_2_vue___default.a.component('gif-card', 
{
  props: ['gifData'],
  template: "<div class=\"gif-card mdl-card mdl-shadow--4dp\">"+
              "<div class=\"mdl-card__actions gif-card-bottom\">" +
                "<span class=\"\">{{ getSize }}</span>" +
                "<div class=\"mdl-layout-spacer\"></div>" +
                "<button class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon\" v-bind:data-clipboard-text=\"gifData.images.original.url\" >" +
                  "<i class=\"material-icons\">content_copy</i>" +
                "</button>" +
              "</div>" +
            "</div>",
  mounted: function()
  {
    this.$el.style.backgroundImage = "url("+this.gifData.images.downsized.url+")";
  },
  computed:
  {
    getSize: function()
    {
      var bytes = Number(this.gifData.images.original.size);
      var size = "";
      if(bytes < 1024 * 1024) size = (bytes/1024).toFixed(2) + "kb";
      else size = (bytes/(1024*1024)).toFixed(2) + "mb";
      
      return size;
    }
  }
});

// our Vue instance
var vm = new __WEBPACK_IMPORTED_MODULE_2_vue___default.a(
{
  el: "#root",
  data: 
  {
    gifs: [],
    message: "apenas um teste",
    gifSearchTerm: ""
  }
});

__WEBPACK_IMPORTED_MODULE_3_jquery___default.a(document).ready(function()
{
  vm.gifSearchTerm = searchInitialList[parseInt(Math.random()*searchInitialList.length)];
  
  requestGifs(vm.gifSearchTerm);
  
  function requestGifs(searchTerm)
  {
    var currentSeach = encodeURIComponent(searchTerm.toLowerCase());
    
    // clears the array
    vm.gifs = [];
    
    __WEBPACK_IMPORTED_MODULE_3_jquery___default.a.ajax(
    {
      url:"http://api.giphy.com/v1/gifs/search?q="+currentSeach+"&api_key=c3ecdb6e5b8a45908f1101982b4505f0&limit=10",
      header: 
      {
        "Accept" : "image/*"
      },
      method: "GET",
      success: onGetGifs
    });
  }

  function onGetGifs(response)
  {
    console.log("success got data", response); 
    
    // re-populates the array
    var giphyGifs = response.data;
    for(var i = 0; i < giphyGifs.length; i++) 
    {
      vm.gifs.push(giphyGifs[i]);
    }
  }
  
  __WEBPACK_IMPORTED_MODULE_3_jquery___default.a(document.getElementById("searchGifInput")).keypress(function(e)
  {
    if( (e.keyCode ? e.keyCode : e.which) == 13)
    {
      //$(this).trigger("click");
      requestGifs(vm.gifSearchTerm);
    }
  });
  
});



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export a */
var a = 10;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export b */
var b = 3;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })
/******/ ]);
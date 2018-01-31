webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.img-wrap{\r\n    height: 500px;\r\n    width: 500px;\r\n    position: absolute;\r\n    top: 50%; left: 50%;\r\n    text-align: center;\r\n    -webkit-transform: translateY(-50%) translateX(-50%);\r\n    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.2);\r\n            box-shadow: 0 1px 3px rgba(0,0,0,0.2);\r\n  }\r\n\r\n  .img-wrap img{\r\n    height: 100%;\r\n  }\r\n\r\n  .controls {\r\n    float: left;\r\n    display: -webkit-box !important;\r\n}\r\n\r\n  .controls > div {\r\n   border: 0px solid grey;\r\n    margin-bottom: 5px;\r\n    overflow: hidden;\r\n    padding: 5px;\r\n    min-width: 30px;\r\n    width: 7rem;\r\n    display: inline-block; \r\n    \r\n}\r\n\r\n  .controls {\r\n    top:0;\r\n    left: 0;\r\n    color:white;\r\n    position:absolute;\r\n    z-index: 9999;\r\n}\r\n\r\n  .controls > div span {\r\n    background-color: #ffffff;\r\n    border: 1px solid #ffffff;\r\n    color: #666;\r\n    float: left;\r\n    font-size: 14px;\r\n    height: 40px;\r\n    width: 120px;\r\n    margin-left: 6px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    \r\n}\r\n\r\n  .hidden{\r\n    background-color: rgba(255,0, 0, 0.4)\r\n}\r\n\r\n  .item-block {\r\n    min-height: 2.2em !important;\r\n}\r\n\r\n  .toolbar-title {\r\n    display: block;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    margin-right: auto;\r\n    margin-left: 45%;\r\n}\r\n\r\n  .centered {\r\n    position: fixed;\r\n    \r\n  }\r\n\r\n  li {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    padding: 0.5em;\r\n    text-align: center;\r\n}\r\n\r\n  p {\r\n    font-size: 1.3em;\r\n    font-weight: 700;\r\n    margin: 0;\r\n}\r\n\r\n  section {\r\n    background-color: whitesmoke;\r\n    height: 400px;\r\n    max-width: 100%;\r\n    overflow: hidden;\r\n    padding: 20px;\r\n    width: 800px;\r\n}\r\n\r\n  small {\r\n    font-weight: 500;\r\n}\r\n\r\n  ul {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    list-style: none;\r\n    padding: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!--The content below is only a placeholder and can be replaced.-->\n<section class=\"section\">\n        <div class=\"container\">\n<div class=\"controls\">\n        <table style=\"width:100%\">\n          <tr style=\"background-color: rgb(255,0,0)\">\n            <th>R:</th>\n            <td style=\"min-width:24px;\">{{red}}</td>\n          </tr>\n          <tr style=\"background-color: rgb(0,255,0)\">\n            <th>G:</th>\n            <td style=\"min-width:24px;\">{{green}}</td>\n          </tr>\n          <tr style=\"background-color: rgb(0,0,255)\">\n            <th>B:</th>\n            <td style=\"min-width:24px;\">{{blue}}</td>\n          </tr>\n        </table>\n      </div>\n<div class=\"app\" >\n     \n            \n    <canvas class=\"raster1s\" id=\"fullSize\" #fullsize [style.width.px]=\"width\" [style.height.px]=\"height\"></canvas>\n\n    \n    \n    <!--<canvas  #videoResult  [style.width.px]=\"width\" [style.height.px]=\"height\" style=\"visibility:hidden;\"></canvas>-->\n    <canvas  #thumbnail  [style.width.px]=\"width\" [style.height.px]=\"height\"></canvas>\n    \n   <!-- <div  [ngStyle]=\"{'height': height*0.25 + 'px', 'width':width*0.15 + 'px', 'border':'2px solid red', 'top':height * 0.010 + 'px', 'left': width * 0.025 + 'px', 'background-color': 'rgba(' + red + ',' + green + ',' + blue + ', 1)'}\"></div>\n\n   -->\n\n\n  \n</div>\n        </div>\n</section>\n<footer class=\"footer\">\n        <div class=\"container\">\n          <div class=\"content has-text-centered\">\n                <a class=\"button is-primary\" id=\"play\" (click)=\"play()\" [ngStyle]=\"{ 'background-color': 'rgba(' + red + ',' + green + ',' + blue + ', 1)'}\">Play</a>\n                <a class=\"button is-primary\" id=\"switch\" (click)=\"switch()\">Switch</a>\n                    <a class=\"button is-primary\" id=\"stop\" (click)=\"stop()\">Stop</a>\n                        <a class=\"button is-primary\" id=\"torch\">Torch</a>\n \n          </div>\n        </div>\n      </footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.flash = false;
        this.position = 'back';
        this.width = window.screen.width * window.devicePixelRatio;
        this.height = window.screen.height * window.devicePixelRatio;
        this.red = 0;
        this.green = 255;
        this.blue = 0;
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        if (window['plugin'].CanvasCamera) {
            window['plugin'].CanvasCamera.initialize({
                fullsize: this.fullSize.nativeElement
            });
        }
        console.log(this.width);
    };
    AppComponent.prototype.play = function () {
        /*  var permissions = cordova.plugins.permissions;
          permissions.requestPermission(permissions.CAMERA, success, error);
       
      function error() {
        console.warn('Camera permission is not turned on');
      }
       
      function success( status ) {
        if( !status.hasPermission ) error();
      }*/ var _this = this;
        console.log('play');
        if (window['plugin'].CanvasCamera) {
            var options = {
                use: 'file',
                fps: 30,
                flashMode: this.flash,
                hasThumbnail: false,
                thumbnailRatio: 1 / 6,
                cameraFacing: this.position,
                onBeforeDraw: function (frame) {
                    // do something before drawing a frame
                    var canvas = _this.fullSize.nativeElement;
                    var ctx = canvas.getContext('2d');
                },
                onAfterDraw: function (frame) {
                    // do something after drawing a frame
                    console.log('hi there', frame.renderer.context.canvas);
                    var canvas = document.getElementById('fullSize');
                    var ctx = canvas.getContext('2d');
                    var imageData = ctx.getImageData(0, 0, 100, 100);
                    var data = imageData.data;
                    var result = _this.generateData(data);
                    console.log('howdy colors', result);
                    ctx.fillStyle = "red";
                    ctx.rect(10, 10, 100, 100);
                    ctx.fill();
                }
            };
            window['plugin'].CanvasCamera.start(options, function (error) {
                console.log('[CanvasCamera start]', 'error', error);
            }, function (data) {
                console.log('[CanvasCamera start]', 'data', data);
                /* var imageObj = new Image();
                 imageObj.onload = function(){
                     context.drawImage(imageObj, 0, 0);
                    
                 };
                 imageObj.src = data.output.images.fullsize.file;
               
                 var imageData = context.getImageData(0,0,50,
                  50)
                   context.putImageData(imageData,0,0)
                 var data = imageData.data;
                var result = _this.generateData(data)
       
                console.log(result)
              */
            });
        }
    };
    AppComponent.prototype.generateData = function (data) {
        for (var i = 0, n = data.length; i < n; i += 4) {
            this.red = data[i];
            this.green = data[i + 1];
            this.blue = data[i + 2];
            var alpha = data[i + 3];
            var JSONS = {
                red: this.red,
                green: this.green,
                blue: this.blue
            };
        }
        return JSONS;
    };
    AppComponent.prototype.stop = function () {
        window['plugin'].CanvasCamera.stop();
    };
    AppComponent.prototype.switch = function () {
        console.log('switch');
        if (window['plugin'].CanvasCamera) {
            this.position = (this.position === 'front') ? 'back' : 'front';
            window['plugin'].CanvasCamera.cameraPosition(this.position, function (error) {
                console.log('[CanvasCamera cameraPosition]', error);
            }, function (data) {
                console.log('[CanvasCamera cameraPosition]', 'data', data);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('fullsize'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */])
    ], AppComponent.prototype, "fullSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('videoResult'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */])
    ], AppComponent.prototype, "videoR", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('thumbnail'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ElementRef */])
    ], AppComponent.prototype, "thumbnail", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_wizi_bulma__ = __webpack_require__("../../../../ng-wizi-bulma/esm5/ng-wizi-bulma.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ng_wizi_bulma__["a" /* NwbModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
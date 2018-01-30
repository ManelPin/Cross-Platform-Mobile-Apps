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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"app\">\n    <canvas class=\"raster\" #fullsize></canvas>\n    <canvas class=\"raster\" #thumbnail></canvas>\n    <canvas class=\"raster\" #videoBuffer width=\"200\" height=\"200\"></canvas>\n    <canvas class=\"raster\" #videoResult [ngStyle]=\"{'height': height*0.25 + 'px', 'width':width*0.35 + 'px', 'border':'2px solid red', 'top':height * 0.010 + 'px', 'left': width * 0.025 + 'px', 'background-color': 'rgba(' + red + ',' + green + ',' + blue + ', 1)'}\"></canvas>\n    <div class=\"actions\">\n        <div class=\"action play\" id=\"play\" (click)=\"play()\">Play</div>\n        <div class=\"action switch\" id=\"switch\" (click)=\"switch()\">Switch</div>\n        <div class=\"action stop\" id=\"stop\" (click)=\"stop()\">Stop</div>\n        <div class=\"action torch\" id=\"torch\">Torch</div>\n \n</div>\n\n\n\n  \n</div>\n     "

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
        this.position = 'front';
        this.colorsR = [];
        this.colorsB = [];
        this.colorsG = [];
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        window['plugins'].screensize.get(successCallback);
        var _this = this;
        function successCallback(result) {
            console.log(result);
            _this.width = result.width;
            _this.height = result.height;
        }
        if (window['plugin'].CanvasCamera) {
            window['plugin'].CanvasCamera.initialize({
                fullsize: this.fullSize.nativeElement,
                thumbnail: this.thumbnail.nativeElement
            });
            var options = {
                width: 352, height: 288,
                canvas: {
                    width: 640,
                    height: 480
                },
                capture: {
                    width: 640,
                    height: 480
                },
                use: 'file',
                fps: 30,
                flashMode: false,
                thumbnailRatio: 1 / 6,
                cameraPosition: 'back',
                onAfterDraw: function (frame) {
                    // do something with each frame
                    console.log(frame);
                }
            };
            window['plugin'].CanvasCamera.start(options);
        }
    };
    AppComponent.prototype.play = function () {
        var permissions = cordova.plugins.permissions;
        permissions.requestPermission(permissions.CAMERA, success, error);
        function error() {
            console.warn('Camera permission is not turned on');
        }
        function success(status) {
            if (!status.hasPermission)
                error();
        }
        console.log('play');
        if (window['plugin'].CanvasCamera) {
            var options = {
                canvas: {
                    width: 640,
                    height: 480
                },
                capture: {
                    width: 640,
                    height: 480
                },
                use: 'file',
                fps: 30,
                flashMode: this.flash,
                hasThumbnail: true,
                thumbnailRatio: 1 / 6,
                cameraFacing: this.position
            };
            var _this = this;
            window['plugin'].CanvasCamera.start(options, function (error) {
                console.log('[CanvasCamera start]', 'error', error);
            }, function (data) {
                console.log('[CanvasCamera start]', 'data', data);
                var canvas = _this.videoR.nativeElement;
                var context = canvas.getContext("2d");
                var imageObj = new Image();
                imageObj.onload = function () {
                    context.drawImage(imageObj, 0, 0);
                };
                imageObj.src = data.output.images.fullsize.file;
                var imageData = context.getImageData(0, 0, 400, 400);
                var data = imageData.data;
                var colorsR = [], colorsG = [], colorsB = [], red, green, blue;
                // iterate over all pixels
                for (var i = 0, n = data.length; i < n; i += 4) {
                    var r = data[i];
                    var g = data[i + 1];
                    var b = data[i + 2];
                    var alpha = data[i + 3];
                    _this.blue = b;
                    _this.red = r;
                    _this.green = g;
                }
                console.log(r);
                /*   for (var ij = 0; ij < colorsR.length; ij++) {
                     red[colorsR[ij]] = (red[colorsR[ij]]|| 0) + 1;
                     
            
                  }
                  
        
                  for (var j = 0; j < colorsG.length; j++) {
                    green[colorsG[j]] = (green[colorsG[j]] || 0) + 1;
                 }
                 //console.log(JSON.stringify(green))
                 for (var t = 0, k = colorsB.length; t < k; t++) {
                  blue[colorsB[t]] = (blue[colorsB[t]] || 0) + 1;
               }
               _this.blue = _this.generateData(red);
               _this.red = _this.generateData(red)
               _this.green = _this.generateData(green) */
            });
        }
    };
    /* private generateData(data) {
       var tempArray = [];
   
       for (let k in data){
        if(parseInt(k) > 0){
            tempArray.push({index: k, value:data[k]})
        }
         
       }
       //console.log(JSON.stringify(tempArray))
       var max = _.max( tempArray, function(elti) { return elti.value;  });
       console.log(JSON.stringify(max))
        var tArray = [];
        for(var i = 0; i < tempArray.length; i++){
           tArray.push(tempArray[i]);
         
            
            
        }
        for(var il= 0; il < tArray.length; il++){
          if(tArray[il].value === max.value){
             var result = tArray[il].index
            }
          }
       
              return result;
             
           
        
    }*/
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('fullsize'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], AppComponent.prototype, "fullSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('thumbnail'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], AppComponent.prototype, "thumbnail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('videoBuffer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], AppComponent.prototype, "video", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* ViewChild */])('videoResult'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ElementRef */])
    ], AppComponent.prototype, "videoR", void 0);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* enableProdMode */])();
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
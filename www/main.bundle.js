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
exports.push([module.i, "\r\n\r\n  .controls {\r\n    float: left;\r\n    display: -webkit-box !important;\r\n}\r\n.controls > div {\r\n   border: 0px solid grey;\r\n    margin-bottom: 5px;\r\n    overflow: hidden;\r\n    padding: 5px;\r\n    min-width: 30px;\r\n    width: 7rem;\r\n    display: inline-block; \r\n    \r\n}\r\n.controls {\r\n  \r\n    color:white;\r\n\r\n    z-index: 9999;\r\n}\r\n.controls > div span {\r\n    background-color: #ffffff;\r\n    border: 1px solid #ffffff;\r\n    color: #666;\r\n    float: left;\r\n    font-size: 14px;\r\n    height: 40px;\r\n    width: 120px;\r\n    margin-left: 6px;\r\n    text-align: left;\r\n    text-transform: uppercase;\r\n    \r\n}\r\n.hidden{\r\n    background-color: rgba(255,0, 0, 0.4)\r\n}\r\n.item-block {\r\n    min-height: 2.2em !important;\r\n}\r\n.toolbar-title {\r\n    display: block;\r\n    overflow: hidden;\r\n    width: 100%;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    margin-right: auto;\r\n    margin-left: 45%;\r\n}\r\n.centered {\r\n    position: fixed;\r\n    \r\n  }\r\nli {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    padding: 0.5em;\r\n    text-align: center;\r\n}\r\np {\r\n    font-size: 1.3em;\r\n    font-weight: 700;\r\n    margin: 0;\r\n}\r\nsection {\r\n    background-color: whitesmoke;\r\n    height: 400px;\r\n    max-width: 100%;\r\n    overflow: hidden;\r\n    padding: 20px;\r\n    width: 800px;\r\n}\r\nsmall {\r\n    font-weight: 500;\r\n}\r\nul {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    list-style: none;\r\n    padding: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"1\" rowHeight=\"{{height}}\">\n    <mat-grid-tile  [style.background]=\"title\" [style.height.%]=\"'100'\">\n    <span class=\"done-t\">\n       <div class=\"controls\">\n          <table style=\"width:100%\">\n             <tr style=\"background-color: rgb(255,0,0)\">\n                <th>R:</th>\n                <td style=\"width:26px;\">{{red}}</td>\n             </tr>\n             <tr style=\"background-color: rgb(0,255,0)\">\n                <th>G:</th>\n                <td style=\"width:26px;\">{{green}}</td>\n             </tr>\n             <tr style=\"background-color: rgb(0,0,255)\">\n                <th>B:</th>\n                <td style=\"width:26px;\">{{blue}}</td>\n             </tr>\n          </table>\n       </div>\n    </span>\n    <span class=\"done-t-r\">\n        <button mat-icon-button (click)=\"torch()\">\n            <mat-icon>flash_on</mat-icon>   \n         </button>\n    </span>\n    <canvas class=\"raster1s\" id=\"fullSize\" #fullsize [style.height.%]=\"'100'\"></canvas>\n    <span [ngStyle]=\"setStyles()\"></span>\n    <span [ngStyle]=\"setPreview()\"></span>\n    <span class=\"done\">\n       <button mat-fab color=\"warn\"  (click)=\"play()\" aria-label=\"play video\">\n       <mat-icon *ngIf=\"onPlay\" >play_arrow</mat-icon>\n       <mat-icon *ngIf=\"onStop\">stop</mat-icon>\n       </button>\n    </span>\n    <span class=\"done-b\">\n        <mat-toolbar color=\"warn\" layout-align=\"space-between center\" >\n           <button mat-icon-button>\n              <mat-icon>camera</mat-icon>\n           </button>\n           <span class=\"example-fill-remaining-space\"></span>\n           <button mat-icon-button>\n              <mat-icon>color_lens</mat-icon>\n           </button>\n           <span class=\"example-fill-remaining-space\"></span>\n           <button mat-icon-button>\n              <mat-icon>insert_photo</mat-icon>\n           </button>\n           <span class=\"example-fill-remaining-space\"></span>\n           <button mat-icon-button>\n              <mat-icon>bluetooth</mat-icon>   \n           </button>\n           \n        </mat-toolbar>\n     </span>\n    </mat-grid-tile>\n\n      \n\n </mat-grid-list>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
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
        this.onStop = false;
        this.onPlay = true;
        this.toogle = true;
        this.title = '#444';
        this.flash = true;
        this.position = 'back';
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.red = 0;
        this.green = 0;
        this.blue = 0;
        var _this = this;
        window['plugins'].screensize.get(successCallback, errorCallback);
        function successCallback(result) {
            console.log(result);
            _this.height = window.innerHeight;
            _this.width = window.innerWidth;
        }
        function errorCallback(err) {
            console.log(err);
        }
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        if (window['plugin'].CanvasCamera) {
            window['plugin'].CanvasCamera.initialize({
                fullsize: this.fullSize.nativeElement
            });
        }
    };
    AppComponent.prototype.setStyles = function () {
        var centerOfWindow = { x: this.width / 2, y: this.height / 2 };
        var rectW = 200;
        var rectH = 200;
        var styles = {
            'border': '2px solid red',
            'left': centerOfWindow.x - (rectW / 2),
            'top': centerOfWindow.y - (rectH / 2),
            'position': 'absolute',
            'width': rectW + 'px',
            'height': rectH + 'px'
        };
        return styles;
    };
    AppComponent.prototype.setPreview = function () {
        var styles = {
            'height': '45px',
            'width': '65px',
            'position': 'absolute',
            'top': '0px',
            'z-index': '99999',
            'margin-left': 'auto',
            'margin-right': 'auto',
            'display': ' block',
            'border': '1px solid #8c8c8c',
            'background-color': 'rgba(' + this.red + ',' + this.green + ',' + this.blue + ', 1)'
        };
        return styles;
    };
    AppComponent.prototype.play = function () {
        this.toogle = !this.toogle;
        var _this = this;
        console.log('play');
        this.onPlay = false;
        this.onStop = true;
        if (this.toogle) {
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
                        console.log('hi there', frame.renderer.context);
                        var canvas = document.getElementById('fullSize');
                        var centerOfWindow = { x: frame.renderer.context.canvas.attributes.width.value / 2, y: frame.renderer.context.canvas.attributes.height.value / 2 };
                        var rectW = 200;
                        var rectH = 200;
                        var ctx = canvas.getContext('2d');
                        var imageData = ctx.getImageData(centerOfWindow.x - (rectW / 2), centerOfWindow.y - (rectH / 2), rectW, rectH);
                        var data = imageData.data;
                        var widthH = imageData.width;
                        var heightV = imageData.height;
                        _this.generateData(data, widthH, heightV);
                        console.log('howdy colors', widthH);
                    }
                };
                window['plugin'].CanvasCamera.start(options, function (error) {
                    console.log('[CanvasCamera start]', 'error', error);
                }, function (data) {
                    console.log('[CanvasCamera start]', 'data', data);
                });
            }
        }
        else {
            this.stop();
        }
    };
    AppComponent.prototype.generateData = function (data, widthH, heightV) {
        var colorsR = [], colorsG = [], colorsB = [], red = {}, green = {}, blue = {};
        for (var y = 0; y < widthH; y++) {
            for (var x = 0; x < heightV; x++) {
                var index = (x + y * widthH) * 4;
                var colors = {
                    r: data[index],
                    g: data[index + 1],
                    b: data[index + 2],
                    a: data[index + 3]
                };
                colorsR.push(colors.r);
                colorsG.push(colors.g);
                colorsB.push(colors.b);
            }
        }
        for (var ij = 0; ij < colorsR.length; ij++) {
            red[colorsR[ij]] = (red[colorsR[ij]] || 0) + 1;
        }
        for (var j = 0; j < colorsG.length; j++) {
            green[colorsG[j]] = (green[colorsG[j]] || 0) + 1;
        }
        //console.log(JSON.stringify(green))
        for (var t = 0, k = colorsB.length; t < k; t++) {
            blue[colorsB[t]] = (blue[colorsB[t]] || 0) + 1;
        }
        this.blue = this.generateColor(blue);
        this.red = this.generateColor(red);
        this.green = this.generateColor(green);
        this.clear(blue);
        this.clear(red);
        this.clear(green);
    };
    AppComponent.prototype.clear = function (obj) {
        for (var key in obj) {
            // this check can be safely omitted in modern JS engines
            // if (obj.hasOwnProperty(key))
            delete obj[key];
        }
    };
    AppComponent.prototype.generateColor = function (data) {
        var tempArray = [];
        for (var k in data) {
            if (parseInt(k) > 0) {
                tempArray.push({ index: k, value: data[k] });
            }
        }
        //console.log(JSON.stringify(tempArray))
        var max = __WEBPACK_IMPORTED_MODULE_1_underscore__["max"](tempArray, function (elti) { return elti.value; });
        console.log(JSON.stringify(max));
        var tArray = [];
        for (var i = 0; i < tempArray.length; i++) {
            tArray.push(tempArray[i]);
        }
        for (var il = 0; il < tArray.length; il++) {
            if (tArray[il].value === max.value) {
                var result = tArray[il].index;
            }
        }
        return result;
    };
    AppComponent.prototype.stop = function () {
        this.onStop = false;
        this.onPlay = true;
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
    AppComponent.prototype.torch = function () {
        console.log('switch');
        if (window['plugin'].CanvasCamera) {
            this.flash = (this.flash) ? false : true;
            window['plugin'].CanvasCamera.flashMode(this.flash, function (error) {
                console.log('[CanvasCamera flashMode]', 'error', error);
            }, function (data) {
                console.log('[CanvasCamera flashMode]', 'data', data);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('fullsize'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AppComponent.prototype, "fullSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('videoResult'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AppComponent.prototype, "videoR", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* ViewChild */])('thumbnail'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["E" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MatStepperModule */]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
document.addEventListener("deviceready", function () {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
        .catch(function (err) { return console.log(err); });
});


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
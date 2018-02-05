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

module.exports = "<router-outlet></router-outlet>\n<span class=\"done-b\">\n    <mat-toolbar color=\"warn\" layout-align=\"space-between center\" >\n       <button mat-icon-button routerLink=\"first\">\n          <mat-icon>camera</mat-icon>\n       </button>\n       <span class=\"example-fill-remaining-space\"></span>\n       <button mat-icon-button routerLink=\"second\">\n          <mat-icon>color_lens</mat-icon>\n       </button>\n       <span class=\"example-fill-remaining-space\"></span>\n       <button mat-icon-button>\n          <mat-icon>insert_photo</mat-icon>\n       </button>\n       <span class=\"example-fill-remaining-space\"></span>\n       <button mat-icon-button routerLink=\"third\">\n          <mat-icon>bluetooth</mat-icon>   \n       </button>\n       \n    </mat-toolbar>\n </span>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ledsprovider_service__ = __webpack_require__("../../../../../src/app/ledsprovider.service.ts");
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
    function AppComponent(led) {
        this.led = led;
        led.discover();
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ledsprovider_service__["a" /* LedsproviderService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_home_home_component__ = __webpack_require__("../../../../../src/app/page/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page_wheel_wheel_component__ = __webpack_require__("../../../../../src/app/page/wheel/wheel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_devices_devices_component__ = __webpack_require__("../../../../../src/app/page/devices/devices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ledsprovider_service__ = __webpack_require__("../../../../../src/app/ledsprovider.service.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__page_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__page_wheel_wheel_component__["a" /* WheelComponent */],
                __WEBPACK_IMPORTED_MODULE_8__page_devices_devices_component__["a" /* DevicesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["E" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["A" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_router__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__ledsprovider_service__["a" /* LedsproviderService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* unused harmony export routingComponents */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_home_home_component__ = __webpack_require__("../../../../../src/app/page/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_wheel_wheel_component__ = __webpack_require__("../../../../../src/app/page/wheel/wheel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page_devices_devices_component__ = __webpack_require__("../../../../../src/app/page/devices/devices.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: "", pathMatch: "full", redirectTo: "first" },
    { path: "first", component: __WEBPACK_IMPORTED_MODULE_2__page_home_home_component__["a" /* HomeComponent */] },
    { path: "second", component: __WEBPACK_IMPORTED_MODULE_3__page_wheel_wheel_component__["a" /* WheelComponent */] },
    { path: "third", component: __WEBPACK_IMPORTED_MODULE_4__page_devices_devices_component__["a" /* DevicesComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [__WEBPACK_IMPORTED_MODULE_2__page_home_home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_3__page_wheel_wheel_component__["a" /* WheelComponent */]];


/***/ }),

/***/ "../../../../../src/app/ledsprovider.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LedsproviderService; });
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

var LedsproviderService = /** @class */ (function () {
    function LedsproviderService() {
        this.enable = false;
        this.device = {};
        this.dispositivos = new Array(0);
        this.buffer = new ArrayBuffer(10);
        this.bufferCON = new ArrayBuffer(10);
        this.array = new Int8Array(this.buffer);
        this.freq = new Int16Array(this.buffer, 6, 1);
        this.primeiro = 0;
    }
    LedsproviderService.prototype.emparelhar = function (dispositivo) {
        var _this = this;
        console.log(dispositivo);
        this.macStrip = dispositivo;
        this.primeiro = 0;
        setTimeout(function () {
            ble.stopScan(function () {
                ble.connect(dispositivo, function (dados) {
                    ble.startNotification(dispositivo, 'aabb', 'fff2', function (tty) {
                        if (_this.buffer != _this.bufferCON) {
                            _this.write();
                            console.log("Mudou");
                            _this.bufferCON = _this.buffer;
                        }
                        else {
                            _this.primeiro = 0;
                            console.log("tora");
                        }
                    }, function () { return console.log('desligado', dados); });
                }, function () { return console.log('bummer'); });
            }, function () { return console.log('bummer'); }), 3000;
        });
        this.enable = true;
    };
    LedsproviderService.prototype.discover = function () {
        var _this = this;
        console.log('start');
        ble.enable(function () { return console.log('success'); }, function () { return console.log('error'); });
        ble.startScanWithOptions([], { reportDuplicates: false }, function (device) {
            _this.dispositivos = _this.dispositivos || [];
            if (device.name) {
                _this.device = device;
                _this.devices = _this.devices || [];
                _this.dispositivos.push(_this.device);
                localStorage.setItem('dispositivos', JSON.stringify(_this.dispositivos));
            }
        });
        console.log(JSON.stringify(this.dispositivos));
    };
    LedsproviderService.prototype.inicio = function () {
        var _this = this;
        //console.log('Hello LedsProvider Provider');
        //console.log("Scanning Started");
        ble.enable(function () { return console.log('success'); }, function () { return console.log('error'); });
        this.devices = [];
        ble.startScan([], function (device) {
            _this.devices.push(device);
            //localStorage.setItem('devices', JSON.stringify(this.devices))
            //console.log('devices'+JSON.stringify(this.devices));
        });
        var dispositivo = this.macStrip;
        this.primeiro = 0;
        setTimeout(function () {
            ble.stopScan(function () {
                ble.connect(dispositivo, function (dados) {
                    ble.startNotification(dispositivo, 'aabb', 'fff2', function (tty) {
                        if (_this.buffer != _this.bufferCON) {
                            _this.write();
                            console.log("Mudou");
                            _this.bufferCON = _this.buffer;
                        }
                        else {
                            _this.primeiro = 0;
                            console.log("tora");
                        }
                    }, function () { return console.log('desligado', dados); });
                }, function () { return console.log('bummer'); });
            }, function () { return console.log('bummer'); }), 3000;
        });
        this.enable = true;
    };
    LedsproviderService.prototype.liga = function (r, g, b, i, f) {
        this.array[0] = 65;
        this.array[1] = 66;
        this.array[2] = r;
        this.array[3] = g;
        this.array[4] = b;
        this.array[5] = i;
        this.freq[0] = f;
        this.array[8] = 67;
        this.array[9] = 68;
        console.log(this.bytesToString(this.array));
        if (this.primeiro == 0) {
            ble.write(this.macStrip, 'aabb', 'ccdd', this.buffer);
            this.primeiro = 1;
        }
    };
    LedsproviderService.prototype.bytesToString = function (buffer) {
        return String.fromCharCode.apply(null, new Uint8Array(buffer));
    };
    LedsproviderService.prototype.boticia = function () {
        console.log("Notification");
        /*this.ble.startNotification(this.macStrip,'aabb','fff2').subscribe(buffer => {
               console.log("Mudou",buffer);
             });*/
    };
    LedsproviderService.prototype.noBoticia = function () {
        console.log("NAO");
        //var gg=this.ble.stopNotification(device.id,'aabb','fff2');
    };
    LedsproviderService.prototype.write = function () {
        this.boticia();
        console.log(this.bytesToString(this.buffer));
        ble.write(this.macStrip, 'aabb', 'ccdd', this.buffer);
        this.primeiro = 1;
        this.noBoticia();
    };
    LedsproviderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LedsproviderService);
    return LedsproviderService;
}());



/***/ }),

/***/ "../../../../../src/app/page/devices/devices.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"1\" rowHeight=\"600\">\n  <mat-grid-tile  [style.height.%]=\"'100'\">\n     \n      \n     \n      <mat-list>\n          <mat-list-item *ngFor=\"let mark of led.dispositivos, let i = index\">\n              <mat-icon matListIconc color=\"warn\">bluetooth</mat-icon>\n            <h3 matLine> {{mark.name}}{{mark.id}} </h3>\n            <p matLine>\n                <button *ngIf=\"!mark.show\" mat-button color=\"warn\" (click)=\"start(i,mark.id)\" >Connect to Device</button>\n                <button *ngIf=\"mark.show\"  mat-button color=\"warn\"  (click)=\"disconnect(i,mark.id)\" >Disconnect Device</button>\n            </p>\n          </mat-list-item>\n        </mat-list>\n  </mat-grid-tile>\n</mat-grid-list>"

/***/ }),

/***/ "../../../../../src/app/page/devices/devices.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/devices/devices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DevicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ledsprovider_service__ = __webpack_require__("../../../../../src/app/ledsprovider.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DevicesComponent = /** @class */ (function () {
    function DevicesComponent(led) {
        this.led = led;
        this.emparelhado = false;
        this.enabled = false;
        this.show = false;
        this.prevClicked = -1;
        console.log('seetiings');
    }
    DevicesComponent.prototype.ngAfterViewInit = function () {
        this.discover();
        var dispositiv = JSON.parse(localStorage.getItem('dispositivos'));
        var inputName = "Clever Lighting";
        console.log(dispositiv);
        if (dispositiv != null) {
            for (var i = 0; i < dispositiv.length; i++) {
                if (inputName !== dispositiv[i].name) {
                    dispositiv[i] += this.led.device; //add two
                    break; //exit loop since you found the person
                }
            }
            localStorage.setItem("dispositivos", JSON.stringify(dispositiv));
        }
    };
    DevicesComponent.prototype.start = function (index, id) {
        if (this.led.dispositivos[this.prevClicked] && this.prevClicked != index) {
            this.led.dispositivos[this.prevClicked].show = false;
        }
        this.led.dispositivos[index].show = !this.led.dispositivos[index].show;
        this.prevClicked = index;
        this.led.emparelhar(id);
        console.log(id);
    };
    DevicesComponent.prototype.isConneted = function () {
        var _this = this;
        setTimeout(function () {
            for (var i = 0; i < _this.dispositivos.length; i++) {
                ble.isConnected(_this.dispositivos[i].id, function () {
                    return true;
                }, function () {
                    return false;
                });
            }
        }, 3000);
    };
    DevicesComponent.prototype.disconnect = function (index, id) {
        if (this.led.dispositivos[this.prevClicked] && this.prevClicked != index) {
            this.led.dispositivos[this.prevClicked].show = false;
        }
        this.led.dispositivos[index].show = !this.led.dispositivos[index].show;
        this.prevClicked = index;
        ble.isConnected(id, function () {
            ble.disconnect(id);
        });
    };
    DevicesComponent.prototype.discover = function () {
        var _this = this;
        console.log('start');
        ble.enable(function () { return console.log('success'); }, function () { return console.log('error'); });
        ble.startScanWithOptions([], { reportDuplicates: false }, function (device) {
            _this.dispositivos = _this.dispositivos || [];
            if (device.name) {
                _this.device = device;
                _this.devices = _this.devices || [];
                _this.dispositivos.push(_this.device);
            }
        });
        console.log(JSON.stringify(this.dispositivos));
    };
    DevicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-devices',
            template: __webpack_require__("../../../../../src/app/page/devices/devices.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page/devices/devices.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ledsprovider_service__["a" /* LedsproviderService */]])
    ], DevicesComponent);
    return DevicesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"1\" rowHeight=\"{{height}}\">\n  <mat-grid-tile  [style.background]=\"title\" [style.height.%]=\"'100'\">\n  <span class=\"done-t\">\n     <div class=\"controls\">\n        <table style=\"width:100%\">\n           <tr style=\"background-color: rgb(255,0,0)\">\n              <th>R:</th>\n              <td style=\"width:26px;\">{{red}}</td>\n           </tr>\n           <tr style=\"background-color: rgb(0,255,0)\">\n              <th>G:</th>\n              <td style=\"width:26px;\">{{green}}</td>\n           </tr>\n           <tr style=\"background-color: rgb(0,0,255)\">\n              <th>B:</th>\n              <td style=\"width:26px;\">{{blue}}</td>\n           </tr>\n        </table>\n     </div>\n  </span>\n  <span class=\"done-t-r\">\n      <button mat-icon-button (click)=\"torch()\">\n          <mat-icon>flash_on</mat-icon>   \n       </button>\n  </span>\n  <canvas class=\"raster1s\" id=\"fullSize\" #fullsize [style.height.%]=\"'100'\"></canvas>\n  <span [ngStyle]=\"setStyles()\"></span>\n  <span [ngStyle]=\"setPreview()\"></span>\n  <span class=\"done\">\n     <button mat-fab color=\"warn\"  (click)=\"play()\" aria-label=\"play video\">\n     <mat-icon *ngIf=\"onPlay\" >play_arrow</mat-icon>\n     <mat-icon *ngIf=\"onStop\">stop</mat-icon>\n     </button>\n  </span>\n\n  </mat-grid-tile>\n\n    \n\n</mat-grid-list>"

/***/ }),

/***/ "../../../../../src/app/page/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ledsprovider_service__ = __webpack_require__("../../../../../src/app/ledsprovider.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(led) {
        this.led = led;
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
    HomeComponent.prototype.ngAfterViewInit = function () {
        if (window['plugin'].CanvasCamera) {
            window['plugin'].CanvasCamera.initialize({
                fullsize: this.fullSize.nativeElement
            });
        }
    };
    HomeComponent.prototype.setStyles = function () {
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
    HomeComponent.prototype.setPreview = function () {
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
    HomeComponent.prototype.play = function () {
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
    HomeComponent.prototype.generateData = function (data, widthH, heightV) {
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
        this.led.liga(this.red, this.green, this.blue, 100, 0);
    };
    HomeComponent.prototype.clear = function (obj) {
        for (var key in obj) {
            // this check can be safely omitted in modern JS engines
            // if (obj.hasOwnProperty(key))
            delete obj[key];
        }
    };
    HomeComponent.prototype.generateColor = function (data) {
        var tempArray = [];
        for (var k in data) {
            if (parseInt(k) > 0) {
                tempArray.push({ index: k, value: data[k] });
            }
        }
        //console.log(JSON.stringify(tempArray))
        var max = __WEBPACK_IMPORTED_MODULE_2_underscore__["max"](tempArray, function (elti) { return elti.value; });
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
    HomeComponent.prototype.stop = function () {
        this.onStop = false;
        this.onPlay = true;
        window['plugin'].CanvasCamera.stop();
    };
    HomeComponent.prototype.switch = function () {
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
    HomeComponent.prototype.torch = function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('fullsize'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], HomeComponent.prototype, "fullSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('videoResult'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], HomeComponent.prototype, "videoR", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('thumbnail'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], HomeComponent.prototype, "thumbnail", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/page/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ledsprovider_service__["a" /* LedsproviderService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page/wheel/wheel.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"1\" rowHeight=\"{{height}}\">\n  <mat-grid-tile  [style.height.%]=\"'100'\">\n      <span class=\"done-t\">\n          <div class=\"controls\">\n             <table style=\"width:100%\">\n                <tr style=\"background-color: rgb(255,0,0)\">\n                   <th>R:</th>\n                   <td style=\"width:26px;\">{{rx}}</td>\n                </tr>\n                <tr style=\"background-color: rgb(0,255,0)\">\n                   <th>G:</th>\n                   <td style=\"width:26px;\">{{gx}}</td>\n                </tr>\n                <tr style=\"background-color: rgb(0,0,255)\">\n                   <th>B:</th>\n                   <td style=\"width:26px;\">{{bx}}</td>\n                </tr>\n             </table>\n          </div>\n       </span>\n       <span [ngStyle]=\"setPreview()\"></span>\n       <span class=\"done-t-r\" [style.top]=\"'12px'\" (click)=\"powerOff()\">\n         <button mat-fab color=\"warn\"  >\n           <mat-icon>power_settings_new</mat-icon>\n         </button>\n       </span>\n    <canvas #canvasT [width]=\"width*0.8\" [height]=\"height\" (pan)=\"mousemove($event)\" [style.position]=\"'absolute'\" [ngStyle]=\"{'top':'-50px'}\"></canvas>\n  \n    <span class=\"done-b\" [style.bottom]=\"'120px'\">\n        <label for=\"vol-slider\">\n            <mat-icon aria-hidden color=\"warn\">flash_on</mat-icon>\n            <span class=\"cdk-visually-hidden\">Flash</span>\n          </label>\n          <mat-slider aria-label=\"Volume\" id=\"vol-slider\" min=\"0\" max=\"50\" [style.width]=\"width*0.8 + 'px'\" thumbLabel color=\"warn\" value=\"0\" (input)='changeMatsliderFreq($event)'></mat-slider>\n          <label for=\"vol-slider\">\n              <mat-icon aria-hidden color=\"warn\">flash_on</mat-icon>\n              <span class=\"cdk-visually-hidden\">Flash</span>\n            </label>\n    </span>\n    <span class=\"done-b\" [style.bottom]=\"'70px'\">\n      <label for=\"vol-slider\">\n          <mat-icon aria-hidden color=\"warn\">lightbulb_outline</mat-icon>\n          <span class=\"cdk-visually-hidden\">Light</span>\n        </label>\n        <mat-slider aria-label=\"Volume\" id=\"vol-slider\" min=\"0\" max=\"100\" [style.width]=\"width*0.8 + 'px'\" thumbLabel color=\"warn\" value=\"100\" (input)='changeMatsliderLight($event)'></mat-slider>\n        <label for=\"vol-slider\">\n            <mat-icon aria-hidden color=\"warn\">lightbulb_outline</mat-icon>\n            <span class=\"cdk-visually-hidden\">Light</span>\n          </label>\n  </span>\n  \n  </mat-grid-tile>\n\n</mat-grid-list>\n\n"

/***/ }),

/***/ "../../../../../src/app/page/wheel/wheel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/wheel/wheel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WheelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ledsprovider_service__ = __webpack_require__("../../../../../src/app/ledsprovider.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WheelComponent = /** @class */ (function () {
    function WheelComponent(led) {
        this.led = led;
        this.rgb = 0;
        this.dColor = 0;
        this.count = 0;
        this.brightness = 100;
        this.frequency = 0;
        this.rx = 0;
        this.gx = 0;
        this.bx = 0;
        this.hexVal = 0;
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.mapColor = false;
        this.disabled = false;
    }
    WheelComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var chng = changes[propName];
            var cur = JSON.stringify(chng.currentValue);
            var prev = JSON.stringify(chng.previousValue);
            this.changeLog.push(propName + ": currentValue = " + cur + ", previousValue = " + prev);
            console.log(this.changeLog);
        }
    };
    WheelComponent.prototype.ngAfterViewInit = function () {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
        var pixelColor = "rgb(" + this.rx + ", " + this.gx + ", " + this.bx + ")";
        // console.log(this.location)
        // create canvas and context objects
        this.canvas = this.pickerCanvas.nativeElement;
        this.initialiseCanvas();
        this.drawCircle();
    };
    WheelComponent.prototype.initialiseCanvas = function () {
        if (this.canvas.getContext) {
            this.setupCanvas();
        }
    };
    WheelComponent.prototype.setupCanvas = function () {
        this.ctx = this.canvas.getContext("2d");
    };
    WheelComponent.prototype.drawCircle = function () {
        var ctx = this.ctx;
        // drawing active image
        var x = this.canvas.width / 2;
        var y = this.canvas.height / 2;
        var radius = x;
        var counterClockwise = false;
        for (var angle = 0; angle <= 360; angle += 1) {
            var startAngle = (angle - 1) * Math.PI / 180;
            var endAngle = angle * Math.PI / 180;
            this.ctx.beginPath();
            this.ctx.moveTo(x, y);
            this.ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
            this.ctx.closePath();
            this.ctx.fillStyle = 'hsl(' + angle + ', 90%, 50%)';
            this.ctx.fill();
        }
    };
    WheelComponent.prototype.clearCanvas = function () {
        this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);
        this.setupCanvas();
    };
    WheelComponent.prototype.ionViewDidLeave = function () {
        this.clearCanvas();
        this.drawCircle();
    };
    WheelComponent.prototype.mousemove = function (event) {
        console.log('evento', event);
        var ctx = this.ctx;
        // get coordinates of current position
        var canvasOffset = this.findPos(this.pickerCanvas.nativeElement);
        var canvasX = Math.floor(event.center.x - canvasOffset[0]);
        var canvasY = Math.floor(event.center.y - canvasOffset[1]);
        // get current pixel
        var imageData = ctx.getImageData(canvasX, canvasY, 1, 1);
        var pixel = imageData.data;
        this.dColor = pixel[2] + 256 * pixel[1] + 65536 * pixel[0];
        this.rgb = pixel[0] + pixel[1] + pixel[2];
        this.hexVal = '#' + ('0000' + this.dColor.toString(16)).substr(-6);
        this.rx = pixel[0];
        this.gx = pixel[1];
        this.bx = pixel[2];
        this.ligarLed();
    };
    WheelComponent.prototype.findPos = function (obj) {
        var curleft = 0;
        var curtop = 0;
        if (obj.offsetParent) {
            do {
                curleft += obj.offsetLeft;
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
            return [curleft, curtop];
        }
    };
    WheelComponent.prototype.ligarLed = function () {
        this.led.liga(this.rx, this.gx, this.bx, this.brightness, this.frequency);
    };
    WheelComponent.prototype.powerOff = function () {
        this.disabled = !this.disabled;
        if (this.disabled === false) {
            var cores = JSON.parse(localStorage.getItem('cor'));
            console.log(JSON.stringify(cores));
            this.brightness = cores.i;
            this.rx = cores.r;
            this.bx = cores.b;
            this.gx = cores.g;
            this.frequency = cores.f;
            this.hexVal = '#F00';
            var pixelColor = "rgb(" + this.rx + ", " + this.gx + ", " + this.bx + ")";
            // $('.preview').css('backgroundColor', pixelColor); 
            this.ligarLed();
        }
        else if (this.disabled === true) {
            var cor = { r: this.rx, b: this.bx, g: this.gx, i: this.brightness, f: this.frequency };
            localStorage.setItem('cor', JSON.stringify(cor));
            this.brightness = 0;
            this.rx = 0;
            this.bx = 0;
            this.gx = 0;
            this.frequency = 0;
            this.hexVal = '#000000';
            var pixelColor = "rgb(" + this.rx + ", " + this.gx + ", " + this.bx + ")";
            //  $('.preview').css('backgroundColor', pixelColor); 
            this.ligarLed();
        }
    };
    WheelComponent.prototype.isDisabled = function () {
        return !this.disabled;
    };
    WheelComponent.prototype.setColor = function () {
        this.disabled = !this.disabled;
        if (this.disabled === true) {
            this.location.color = { colorR: this.rx, colorB: this.bx, colorG: this.gx, brightness: this.brightness, frequency: this.frequency };
            //this.navCtrl.setRoot(MarkerComponent, {location: this.location})
        }
    };
    WheelComponent.prototype.sColor = function (r, g, b, f) {
        this.rx = r;
        this.gx = g;
        this.bx = b;
        this.frequency = f;
        this.brightness = 100;
        var pixelColor = "rgb(" + this.rx + ", " + this.gx + ", " + this.bx + ")";
        //  $('.preview').css('backgroundColor', pixelColor); 
        this.ligarLed();
    };
    WheelComponent.prototype.setPreview = function () {
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
            'background-color': 'rgba(' + this.rx + ',' + this.gx + ',' + this.bx + ', 1)'
        };
        return styles;
    };
    WheelComponent.prototype.changeMatsliderLight = function (slider) {
        this.brightness = slider.value;
        this.ligarLed();
    };
    WheelComponent.prototype.changeMatsliderFreq = function (slider) {
        this.frequency = slider.value;
        console.log(this.frequency);
        this.ligarLed();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])("canvasT"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], WheelComponent.prototype, "pickerCanvas", void 0);
    WheelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-wheel',
            template: __webpack_require__("../../../../../src/app/page/wheel/wheel.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page/wheel/wheel.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ledsprovider_service__["a" /* LedsproviderService */]])
    ], WheelComponent);
    return WheelComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
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
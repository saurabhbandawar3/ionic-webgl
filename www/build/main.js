webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.initialiseWebGL();
        this.animation();
    };
    HomePage.prototype.initialiseWebGL = function () {
        this.element = this.canvasEl.nativeElement;
        this.scene = new __WEBPACK_IMPORTED_MODULE_2_three__["g" /* Scene */]();
        this.camera = new __WEBPACK_IMPORTED_MODULE_2_three__["e" /* PerspectiveCamera */](75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 5;
        //this.geometry 			= new THREE.BoxGeometry( 1, 1, 1 );
        var pattern1 = new __WEBPACK_IMPORTED_MODULE_2_three__["f" /* PlaneGeometry */](1, 1, 1);
        var f1 = __WEBPACK_IMPORTED_MODULE_2_three__["b" /* ImageUtils */].loadTexture("../assets/imgs/fish.png");
        var map1 = new __WEBPACK_IMPORTED_MODULE_2_three__["d" /* MeshBasicMaterial */]({ map: f1 });
        this.fish1 = new __WEBPACK_IMPORTED_MODULE_2_three__["c" /* Mesh */](pattern1, map1);
        this.fish1.position.x = -1;
        this.fish1.position.y = 1;
        this.scene.add(this.fish1);
        var pattern2 = new __WEBPACK_IMPORTED_MODULE_2_three__["f" /* PlaneGeometry */](1, 1, 1);
        var f2 = __WEBPACK_IMPORTED_MODULE_2_three__["b" /* ImageUtils */].loadTexture("../assets/imgs/fish1.png");
        var map2 = new __WEBPACK_IMPORTED_MODULE_2_three__["d" /* MeshBasicMaterial */]({ map: f2 });
        this.fish2 = new __WEBPACK_IMPORTED_MODULE_2_three__["c" /* Mesh */](pattern2, map2);
        this.fish2.position.x = -1.5;
        this.fish2.position.y = -1;
        this.scene.add(this.fish2);
        var pattern3 = new __WEBPACK_IMPORTED_MODULE_2_three__["f" /* PlaneGeometry */](1, 1, 1);
        var f3 = __WEBPACK_IMPORTED_MODULE_2_three__["b" /* ImageUtils */].loadTexture("../assets/imgs/fish3.png");
        var map3 = new __WEBPACK_IMPORTED_MODULE_2_three__["d" /* MeshBasicMaterial */]({ map: f3 });
        this.fish3 = new __WEBPACK_IMPORTED_MODULE_2_three__["c" /* Mesh */](pattern3, map3);
        this.fish3.position.x = 1.5;
        this.fish3.position.y = 2.5;
        this.scene.add(this.fish3);
        var pattern5 = new __WEBPACK_IMPORTED_MODULE_2_three__["f" /* PlaneGeometry */](1, 1, 1);
        var f5 = __WEBPACK_IMPORTED_MODULE_2_three__["b" /* ImageUtils */].loadTexture("../assets/imgs/fish5.png");
        var map5 = new __WEBPACK_IMPORTED_MODULE_2_three__["d" /* MeshBasicMaterial */]({ map: f5 });
        this.fish5 = new __WEBPACK_IMPORTED_MODULE_2_three__["c" /* Mesh */](pattern5, map5);
        this.fish5.position.x = -1;
        this.fish5.position.y = 1;
        this.scene.add(this.fish5);
        var pattern6 = new __WEBPACK_IMPORTED_MODULE_2_three__["a" /* BoxGeometry */](1, 1, 1);
        var f6 = __WEBPACK_IMPORTED_MODULE_2_three__["b" /* ImageUtils */].loadTexture("../assets/imgs/fish6.png");
        var map6 = new __WEBPACK_IMPORTED_MODULE_2_three__["d" /* MeshBasicMaterial */]({ map: f6 });
        this.fish6 = new __WEBPACK_IMPORTED_MODULE_2_three__["c" /* Mesh */](pattern6, map6);
        //this.fish6.position.x=10;
        //this.fish6.position.y=-1;
        this.scene.add(this.fish6);
        //fish flock
        var patternf = new __WEBPACK_IMPORTED_MODULE_2_three__["f" /* PlaneGeometry */](1, 1, 1);
        var ffg = __WEBPACK_IMPORTED_MODULE_2_three__["b" /* ImageUtils */].loadTexture("../assets/imgs/ffg.png");
        var mapf = new __WEBPACK_IMPORTED_MODULE_2_three__["d" /* MeshBasicMaterial */]({ map: ffg });
        this.fishf = new __WEBPACK_IMPORTED_MODULE_2_three__["c" /* Mesh */](patternf, mapf);
        this.fishf.position.x = 1;
        this.scene.add(this.fishf);
        this.renderer = new __WEBPACK_IMPORTED_MODULE_2_three__["h" /* WebGLRenderer */]({ alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.element.appendChild(this.renderer.domElement);
    };
    HomePage.prototype.animation = function () {
        var _this = this;
        requestAnimationFrame(function () {
            _this.animation();
        });
        this.fish1.translateX(0.015);
        this.fish1.translateY(-0.015);
        this.fish2.translateY(0.004);
        //this.fish2.rotation.z +=(0.04);
        this.fish3.translateY(-0.004);
        this.fish5.translateX(0.015);
        this.fish6.translateX(0.015);
        this.fish6.translateY(0.004);
        this.fish6.rotation.y += (0.04);
        this.fishf.translateY(0.012);
        this.fishf.rotation.z += (0.012);
        this.renderer.render(this.scene, this.camera);
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('Obj'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "canvasEl", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/saurabh/XcodeProjects/iAapp3/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      WEBGL \n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="main">\n  <div #Obj class="container"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/saurabh/XcodeProjects/iAapp3/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/saurabh/XcodeProjects/iAapp3/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/saurabh/XcodeProjects/iAapp3/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map
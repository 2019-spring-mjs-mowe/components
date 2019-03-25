(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout='column' fxLayoutGap='20px' fxLayoutAlign='space-evenly'>\r\n  <pizza-toppings></pizza-toppings>\r\n  <app-tjs-addition></app-tjs-addition>\r\n  <app-tjs-subtract></app-tjs-subtract>\r\n  <dancing-man></dancing-man>\r\n  <app-something></app-something>\r\n  <app-avue-mulitplying></app-avue-mulitplying>\r\n  <app-sjs-addition></app-sjs-addition>\r\n  <prefixer></prefixer>\r\n  <app-awesome-component></app-awesome-component>\r\n  <app-math></app-math>\r\n  <timespan-calculator></timespan-calculator>  \r\n  <mwh-does-athing></mwh-does-athing>\r\n  <app-worst></app-worst>\r\n  <app-dfs-subtract></app-dfs-subtract>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'components';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pizza_pizza_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pizza/pizza.component */ "./src/app/pizza/pizza.component.ts");
/* harmony import */ var _worst_worst_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./worst/worst.component */ "./src/app/worst/worst.component.ts");
/* harmony import */ var _mwh_does_athing_mwh_does_athing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mwh-does-athing/mwh-does-athing.component */ "./src/app/mwh-does-athing/mwh-does-athing.component.ts");
/* harmony import */ var _timespan_timespan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timespan/timespan.component */ "./src/app/timespan/timespan.component.ts");
/* harmony import */ var _math_math_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./math/math.component */ "./src/app/math/math.component.ts");
/* harmony import */ var _awesome_component_awesome_component_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./awesome-component/awesome-component.component */ "./src/app/awesome-component/awesome-component.component.ts");
/* harmony import */ var _prefixer_prefixer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./prefixer/prefixer.component */ "./src/app/prefixer/prefixer.component.ts");
/* harmony import */ var _sjs_addition_sjs_addition_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sjs-addition/sjs-addition.component */ "./src/app/sjs-addition/sjs-addition.component.ts");
/* harmony import */ var _avue_multiplying_avue_mulitplying_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./avue-multiplying/avue-mulitplying.component */ "./src/app/avue-multiplying/avue-mulitplying.component.ts");
/* harmony import */ var _something_something_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./something/something.component */ "./src/app/something/something.component.ts");
/* harmony import */ var _dancing_man_dancing_man_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dancing-man/dancing-man.component */ "./src/app/dancing-man/dancing-man.component.ts");
/* harmony import */ var _tjs_subtract_tjs_subtract_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tjs-subtract/tjs-subtract.component */ "./src/app/tjs-subtract/tjs-subtract.component.ts");
/* harmony import */ var _tjs_addition_tjs_addition_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tjs-addition/tjs-addition.component */ "./src/app/tjs-addition/tjs-addition.component.ts");
/* harmony import */ var _dfs_subtract_dfs_subtract_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dfs-subtract/dfs-subtract.component */ "./src/app/dfs-subtract/dfs-subtract.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pizza_pizza_component__WEBPACK_IMPORTED_MODULE_5__["PizzaComponent"],
                _tjs_addition_tjs_addition_component__WEBPACK_IMPORTED_MODULE_17__["TjsAdditionComponent"],
                _dfs_subtract_dfs_subtract_component__WEBPACK_IMPORTED_MODULE_18__["DfsSubtractComponent"],
                _worst_worst_component__WEBPACK_IMPORTED_MODULE_6__["WorstComponent"],
                _mwh_does_athing_mwh_does_athing_component__WEBPACK_IMPORTED_MODULE_7__["MwhDoesAThingComponent"],
                _timespan_timespan_component__WEBPACK_IMPORTED_MODULE_8__["TimespanComponent"],
                _math_math_component__WEBPACK_IMPORTED_MODULE_9__["MathComponent"],
                _awesome_component_awesome_component_component__WEBPACK_IMPORTED_MODULE_10__["AwesomeComponentComponent"],
                _prefixer_prefixer_component__WEBPACK_IMPORTED_MODULE_11__["PrefixerComponent"],
                _sjs_addition_sjs_addition_component__WEBPACK_IMPORTED_MODULE_12__["SjsAdditionComponent"],
                _avue_multiplying_avue_mulitplying_component__WEBPACK_IMPORTED_MODULE_13__["AvueMultiplyingComponent"],
                _something_something_component__WEBPACK_IMPORTED_MODULE_14__["SomethingComponent"],
                _dancing_man_dancing_man_component__WEBPACK_IMPORTED_MODULE_15__["DancingManComponent"],
                _tjs_subtract_tjs_subtract_component__WEBPACK_IMPORTED_MODULE_16__["TjsSubtractComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_20__["MatSelectModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/avue-multiplying/avue-mulitplying.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/avue-multiplying/avue-mulitplying.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F2dWUtbXVsdGlwbHlpbmcvYXZ1ZS1tdWxpdHBseWluZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/avue-multiplying/avue-mulitplying.component.html":
/*!******************************************************************!*\
  !*** ./src/app/avue-multiplying/avue-mulitplying.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h3>Ace's Multiplying Component</h3>\r\n  <input type=\"number\" [(ngModel)]='numberOne'>\r\n  &nbsp; * &nbsp;\r\n  <input type=\"number\" [(ngModel)]='numberTwo'>\r\n  &nbsp;\r\n  <button (click) = 'subtractNumbers()'>=</button>\r\n  &nbsp;\r\n  {{answer}}\r\n</div>"

/***/ }),

/***/ "./src/app/avue-multiplying/avue-mulitplying.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/avue-multiplying/avue-mulitplying.component.ts ***!
  \****************************************************************/
/*! exports provided: AvueMultiplyingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvueMultiplyingComponent", function() { return AvueMultiplyingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AvueMultiplyingComponent = /** @class */ (function () {
    function AvueMultiplyingComponent() {
        var _this = this;
        this.subtractNumbers = function () {
            _this.answer = _this.numberOne * _this.numberTwo;
        };
    }
    AvueMultiplyingComponent.prototype.ngOnInit = function () {
    };
    AvueMultiplyingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-avue-mulitplying',
            template: __webpack_require__(/*! ./avue-mulitplying.component.html */ "./src/app/avue-multiplying/avue-mulitplying.component.html"),
            styles: [__webpack_require__(/*! ./avue-mulitplying.component.css */ "./src/app/avue-multiplying/avue-mulitplying.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AvueMultiplyingComponent);
    return AvueMultiplyingComponent;
}());



/***/ }),

/***/ "./src/app/awesome-component/awesome-component.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/awesome-component/awesome-component.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F3ZXNvbWUtY29tcG9uZW50L2F3ZXNvbWUtY29tcG9uZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/awesome-component/awesome-component.component.html":
/*!********************************************************************!*\
  !*** ./src/app/awesome-component/awesome-component.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n<mat-card-title>Just the most awesomest component ever. nbd.</mat-card-title>\r\n  <button mat-button (click)='generateMessage()'>Push</button>\r\n  <h1>{{ message }}</h1>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/awesome-component/awesome-component.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/awesome-component/awesome-component.component.ts ***!
  \******************************************************************/
/*! exports provided: AwesomeComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwesomeComponentComponent", function() { return AwesomeComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AwesomeComponentComponent = /** @class */ (function () {
    function AwesomeComponentComponent() {
        var _this = this;
        this.message = "";
        this.generateMessage = function () {
            _this.message = 'Ow!';
            _this.reset();
        };
        this.reset = function () {
            _this.removeMessage();
        };
        this.removeMessage = function () {
            setTimeout(function () { _this.message = ""; }, 1500);
        };
    }
    AwesomeComponentComponent.prototype.ngOnInit = function () {
    };
    AwesomeComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-awesome-component',
            template: __webpack_require__(/*! ./awesome-component.component.html */ "./src/app/awesome-component/awesome-component.component.html"),
            styles: [__webpack_require__(/*! ./awesome-component.component.css */ "./src/app/awesome-component/awesome-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AwesomeComponentComponent);
    return AwesomeComponentComponent;
}());



/***/ }),

/***/ "./src/app/dancing-man/dancing-man.component.css":
/*!*******************************************************!*\
  !*** ./src/app/dancing-man/dancing-man.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RhbmNpbmctbWFuL2RhbmNpbmctbWFuLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dancing-man/dancing-man.component.html":
/*!********************************************************!*\
  !*** ./src/app/dancing-man/dancing-man.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n<mat-card-title>Dancing Man feels the beat different for evens and odds</mat-card-title>\r\n\r\n<div>\r\n<mat-form-field>\r\n    <input matInput type=\"number\" placeholder=\"Number 1\" [(ngModel)]='inputOne'><br/>\r\n</mat-form-field>\r\n<br/>\r\n+<br/>\r\n<mat-form-field>\r\n    <input matInput type=\"number\" placeholder=\"Number 2\" [(ngModel)]='inputTwo'>\r\n</mat-form-field>\r\n<br/>\r\n<mat-card-content>\r\n{{answer}}\r\n</mat-card-content>\r\n\r\n<button  mat-raised-button color=\"primary\" (click)='makeDance()'>Make Dance</button>\r\n</div>\r\n\r\n<p *ngIf=\"(answer % 2) == 0\">\r\n    (•_•)<br/>\r\n    <)&nbsp;)╯<br/>\r\n    &nbsp;/    \\<br/>\r\n    <br/>\r\n</p>\r\n<p *ngIf=\"(answer % 2 != 0 && answer != null)\">\r\n    \\(•_•)<br/>\r\n    (&nbsp;(> <br/>\r\n    &nbsp;/    \\<br/>\r\n    <br/>\r\n</p>\r\n<p *ngIf=\"(answer == null)\">\r\n    (•_•)<br/>\r\n   <)&nbsp;)><br/>\r\n   /&nbsp; \\<br/>\r\n</p>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/dancing-man/dancing-man.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dancing-man/dancing-man.component.ts ***!
  \******************************************************/
/*! exports provided: DancingManComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DancingManComponent", function() { return DancingManComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DancingManComponent = /** @class */ (function () {
    function DancingManComponent() {
        var _this = this;
        this.makeDance = function () {
            _this.answer = _this.inputOne + _this.inputTwo;
        };
    }
    DancingManComponent.prototype.ngOnInit = function () {
    };
    DancingManComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dancing-man',
            template: __webpack_require__(/*! ./dancing-man.component.html */ "./src/app/dancing-man/dancing-man.component.html"),
            styles: [__webpack_require__(/*! ./dancing-man.component.css */ "./src/app/dancing-man/dancing-man.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DancingManComponent);
    return DancingManComponent;
}());



/***/ }),

/***/ "./src/app/dfs-subtract/dfs-subtract.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dfs-subtract/dfs-subtract.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rmcy1zdWJ0cmFjdC9kZnMtc3VidHJhY3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dfs-subtract/dfs-subtract.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dfs-subtract/dfs-subtract.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>Derek's Subtraction Component</mat-card-title>\r\n  <mat-form-field>\r\n    <input matInput type=\"number\" [(ngModel)]='numberOne'>\r\n  </mat-form-field>\r\n  -\r\n  <mat-form-field>\r\n    <input matInput type=\"number\" [(ngModel)]='numberTwo'>\r\n  </mat-form-field>\r\n  <button (click)='subtractNumbers()'>=</button>\r\n  {{ answer }}\r\n</mat-card>"

/***/ }),

/***/ "./src/app/dfs-subtract/dfs-subtract.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dfs-subtract/dfs-subtract.component.ts ***!
  \********************************************************/
/*! exports provided: DfsSubtractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DfsSubtractComponent", function() { return DfsSubtractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DfsSubtractComponent = /** @class */ (function () {
    function DfsSubtractComponent() {
        var _this = this;
        this.numberOne = 10;
        this.numberTwo = 5;
        this.answer = 5;
        this.subtractNumbers = function () {
            _this.answer = _this.numberOne - _this.numberTwo;
        };
    }
    DfsSubtractComponent.prototype.ngOnInit = function () {
    };
    DfsSubtractComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dfs-subtract',
            template: __webpack_require__(/*! ./dfs-subtract.component.html */ "./src/app/dfs-subtract/dfs-subtract.component.html"),
            styles: [__webpack_require__(/*! ./dfs-subtract.component.css */ "./src/app/dfs-subtract/dfs-subtract.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DfsSubtractComponent);
    return DfsSubtractComponent;
}());



/***/ }),

/***/ "./src/app/math/math.component.css":
/*!*****************************************!*\
  !*** ./src/app/math/math.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGgvbWF0aC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/math/math.component.html":
/*!******************************************!*\
  !*** ./src/app/math/math.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"background:grey\">\r\n    <h2 style=\"color:turquoise\">This is Math!</h2>\r\n    <!-- <p *ngFor='let v of addEqual'> -->\r\n        <input type=\"number\" [(ngModel)]='numberOne'> + \r\n        <input type=\"number\" [(ngModel)]='numberTwo'> \r\n        <button (click)='addEqual()'>=</button> \r\n        <span>{{ totalNumbers }}</span>\r\n    <!-- </p> [(ngModel)]='totalNumbers' -->\r\n    <br>\r\n    <input type=\"number\" [(ngModel)]='squNumber'> √2\r\n        <!-- <input type=\"number\" [(ngModel)]='numberTwo'>  -->\r\n        <button (click)='squareEqual()'>=</button> \r\n        <span>{{ squTotal }}</span>\r\n    <br>\r\n    <input type=\"number\" [(ngModel)]='powOne'> ^\r\n        <input type=\"number\" [(ngModel)]='powTwo'> \r\n        <button (click)='powerEqual()'>=</button> \r\n        <span>{{ powTotal }}</span>\r\n</div>"

/***/ }),

/***/ "./src/app/math/math.component.ts":
/*!****************************************!*\
  !*** ./src/app/math/math.component.ts ***!
  \****************************************/
/*! exports provided: MathComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathComponent", function() { return MathComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// interface NumbersToDisplay {
//   numberOne: number;
//   numberTwo: number;
// }
var MathComponent = /** @class */ (function () {
    function MathComponent() {
        var _this = this;
        // twoSetOfNumbers: NumbersToDisplay[];
        this.numberOne = 2;
        this.numberTwo = 3;
        this.totalNumbers = 0;
        this.squNumber = 0;
        this.squTotal = 0;
        this.powOne = 0;
        this.powTwo = 0;
        this.powTotal = 0;
        this.addEqual = function () {
            _this.totalNumbers = _this.numberOne + _this.numberTwo;
        };
        this.squareEqual = function () {
            _this.squTotal = Math.sqrt(_this.squNumber);
        };
        this.powerEqual = function () {
            _this.powTotal = Math.pow(_this.powOne, _this.powTwo);
        };
    }
    MathComponent.prototype.ngOnInit = function () {
    };
    MathComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-math',
            template: __webpack_require__(/*! ./math.component.html */ "./src/app/math/math.component.html"),
            styles: [__webpack_require__(/*! ./math.component.css */ "./src/app/math/math.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MathComponent);
    return MathComponent;
}());



/***/ }),

/***/ "./src/app/mwh-does-athing/mwh-does-athing.component.css":
/*!***************************************************************!*\
  !*** ./src/app/mwh-does-athing/mwh-does-athing.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL213aC1kb2VzLWF0aGluZy9td2gtZG9lcy1hdGhpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mwh-does-athing/mwh-does-athing.component.html":
/*!****************************************************************!*\
  !*** ./src/app/mwh-does-athing/mwh-does-athing.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>\r\n    Cast some spells wizard!\r\n  </mat-card-title>\r\n  \r\n  <mat-card-content>\r\n    <mat-form-field>\r\n      <mat-select [(ngModel)]=\"spellCasted\">\r\n        <mat-option *ngFor='let s of spellBook' value=\"{{s.name}}\">{{ s.name }}</mat-option>\r\n      </mat-select>  \r\n    </mat-form-field>\r\n     \r\n    <mat-form-field>\r\n        <input matInput type=\"Number\" placeholder=\"enter caster level\" [(ngModel)]=\"casterLevel\">\r\n    </mat-form-field>\r\n    \r\n    <mat-form-field>\r\n       <input matInput type=\"Number\" placeholder=\"enter spell modifer\" id=\"modifier\" [(ngModel)]=\"modifier\">\r\n    </mat-form-field>\r\n    \r\n    <button mat-raised-button  (click)='magicDisplay();'>Magic?</button>\r\n    \r\n    <br/><br/>\r\n    To Hit: {{spellToHit}}\r\n    <br/>\r\n    Spell Save: {{spellSave}}\r\n  \r\n  </mat-card-content>\r\n  \r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/mwh-does-athing/mwh-does-athing.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/mwh-does-athing/mwh-does-athing.component.ts ***!
  \**************************************************************/
/*! exports provided: MwhDoesAThingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MwhDoesAThingComponent", function() { return MwhDoesAThingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _spell_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../spell-book.service */ "./src/app/spell-book.service.ts");



var MwhDoesAThingComponent = /** @class */ (function () {
    function MwhDoesAThingComponent(spellSvc) {
        var _this = this;
        this.spellSvc = spellSvc;
        this.magicDisplay = function () {
            // this.spellSave = (10 + this.level + s.spellLevel);
            console.log(_this.spellCasted);
            // this.spellLevel = this.spellCasted.spellLevel;
            _this.spellLevel = _this.spellBook
                .filter(function (x) { return x.name == _this.spellCasted; })
                .reduce(function (acc, x) { return acc + x.spellLevel; }, 0);
            console.log(_this.spellLevel);
            _this.spellToHit = (_this.modifier);
            _this.spellSave = (10 + (_this.casterLevel / 2) + _this.spellLevel);
        };
    }
    MwhDoesAThingComponent.prototype.ngOnInit = function () {
        this.spellBook = this.spellSvc.loadSpellBook();
    };
    MwhDoesAThingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mwh-does-athing',
            template: __webpack_require__(/*! ./mwh-does-athing.component.html */ "./src/app/mwh-does-athing/mwh-does-athing.component.html"),
            styles: [__webpack_require__(/*! ./mwh-does-athing.component.css */ "./src/app/mwh-does-athing/mwh-does-athing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_spell_book_service__WEBPACK_IMPORTED_MODULE_2__["SpellBookService"]])
    ], MwhDoesAThingComponent);
    return MwhDoesAThingComponent;
}());



/***/ }),

/***/ "./src/app/pizza.service.ts":
/*!**********************************!*\
  !*** ./src/app/pizza.service.ts ***!
  \**********************************/
/*! exports provided: PizzaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaService", function() { return PizzaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PizzaService = /** @class */ (function () {
    function PizzaService() {
    }
    PizzaService.prototype.loadPizzaToppings = function () {
        var pizzaToppingsFromWebService = [
            { name: 'Pepperoni', price: 1.50 },
            { name: 'Olives', price: 3.50 }
        ];
        return pizzaToppingsFromWebService.map(function (x) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, x, { checked: false })); });
    };
    PizzaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PizzaService);
    return PizzaService;
}());



/***/ }),

/***/ "./src/app/pizza/pizza.component.css":
/*!*******************************************!*\
  !*** ./src/app/pizza/pizza.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BpenphL3BpenphLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pizza/pizza.component.html":
/*!********************************************!*\
  !*** ./src/app/pizza/pizza.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>\r\n    Pizza Toppings\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n      <button mat-button (click)='checkAll()'>All</button> | <button mat-button (click)='uncheckAll()'>None</button>\r\n      <p *ngFor='let t of availablePizzaToppings'>\r\n        <mat-checkbox [(ngModel)]='t.checked' (change)='recalculateTotal()'>\r\n          {{ t.name }} ({{ t.price | currency }})\r\n        </mat-checkbox> \r\n      </p>\r\n      <p>\r\n        <button *ngIf='false' (click)='calculateTotal()'>Calculate Total</button>\r\n      </p>\r\n      <h3>\r\n        Total: {{ total | currency}} \r\n        <span *ngIf='showWarning' style='color: red; font-size: 0.7em'>(Don't forget to choose your toppings)</span>\r\n      </h3> \r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/pizza/pizza.component.ts":
/*!******************************************!*\
  !*** ./src/app/pizza/pizza.component.ts ***!
  \******************************************/
/*! exports provided: PizzaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaComponent", function() { return PizzaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pizza_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pizza.service */ "./src/app/pizza.service.ts");



var PizzaComponent = /** @class */ (function () {
    // DI (dependency inject) the pizza service.
    function PizzaComponent(pizzaSvc) {
        var _this = this;
        this.pizzaSvc = pizzaSvc;
        this.total = 0;
        this.allChecked = false;
        this.checkMessage = "Check all";
        this.calculateTotal = function () {
            _this.total = _this.availablePizzaToppings
                .filter(function (x) { return x.checked; })
                .reduce(function (acc, x) { return acc + x.price; }, 0);
        };
        this.recalculateTotal = function () {
            _this.calculateTotal();
        };
        this.checkAll = function () {
            _this.availablePizzaToppings = _this.availablePizzaToppings.map(function (x) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, x, { checked: true })); });
            _this.recalculateTotal();
        };
        this.uncheckAll = function () {
            _this.availablePizzaToppings = _this.availablePizzaToppings.map(function (x) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, x, { checked: false })); });
            _this.recalculateTotal();
        };
    }
    Object.defineProperty(PizzaComponent.prototype, "showWarning", {
        // TypeScript getter property (or readonly)
        get: function () {
            //return this.availablePizzaToppings.filter(x => x.checked).length === 0;
            return !this.availablePizzaToppings.some(function (x) { return x.checked; });
        },
        enumerable: true,
        configurable: true
    });
    PizzaComponent.prototype.ngOnInit = function () {
        // Use pizza service to load the available pizza toppings.
        // var svc = new PizzaService() : - (
        this.availablePizzaToppings = this.pizzaSvc.loadPizzaToppings();
    };
    PizzaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'pizza-toppings',
            template: __webpack_require__(/*! ./pizza.component.html */ "./src/app/pizza/pizza.component.html"),
            styles: [__webpack_require__(/*! ./pizza.component.css */ "./src/app/pizza/pizza.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pizza_service__WEBPACK_IMPORTED_MODULE_2__["PizzaService"]])
    ], PizzaComponent);
    return PizzaComponent;
}());



/***/ }),

/***/ "./src/app/prefixer/prefixer.component.css":
/*!*************************************************!*\
  !*** ./src/app/prefixer/prefixer.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZWZpeGVyL3ByZWZpeGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/prefixer/prefixer.component.html":
/*!**************************************************!*\
  !*** ./src/app/prefixer/prefixer.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>Lucas' Messaging</mat-card-title>\r\n  <mat-card-content>\r\n    <form (ngSubmit)=\"prefix()\">\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\">\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field>\r\n        <input matInput type=\"text\" [(ngModel)]=\"message\" name=\"message\" placeholder=\"Message\">\r\n      </mat-form-field>\r\n      <br>\r\n      <button mat-button>Send</button>\r\n      <br><br>\r\n      <span [innerHTML]=\"prefixed\"></span>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/prefixer/prefixer.component.ts":
/*!************************************************!*\
  !*** ./src/app/prefixer/prefixer.component.ts ***!
  \************************************************/
/*! exports provided: PrefixerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrefixerComponent", function() { return PrefixerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PrefixerComponent = /** @class */ (function () {
    function PrefixerComponent() {
        var _this = this;
        this.name = "";
        this.message = "";
        this.prefixed = "";
        this.prefix = function () {
            _this.prefixed = "<strong>" + _this.name + " says:</strong> " + _this.message;
        };
    }
    PrefixerComponent.prototype.ngOnInit = function () {
    };
    PrefixerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'prefixer',
            template: __webpack_require__(/*! ./prefixer.component.html */ "./src/app/prefixer/prefixer.component.html"),
            styles: [__webpack_require__(/*! ./prefixer.component.css */ "./src/app/prefixer/prefixer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PrefixerComponent);
    return PrefixerComponent;
}());



/***/ }),

/***/ "./src/app/sjs-addition/sjs-addition.component.css":
/*!*********************************************************!*\
  !*** ./src/app/sjs-addition/sjs-addition.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nqcy1hZGRpdGlvbi9zanMtYWRkaXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/sjs-addition/sjs-addition.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sjs-addition/sjs-addition.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n    <mat-card-title>Sung's Average Component</mat-card-title>\r\n    <label for=\"\">(</label>\r\n    <mat-form-field>\r\n    <input matInput placeholder='First Number' type=\"number\" [(ngModel)]='firstNumber'>\r\n    </mat-form-field>\r\n    +\r\n    <mat-form-field>\r\n    <input matInput placeholder='Second Number' type=\"number\" [(ngModel)]='secondNumber'>\r\n    </mat-form-field>\r\n    <label for=\"\">)</label>\r\n    /\r\n    <mat-form-field>\r\n    <input matInput placeholder='Third Number' type=\"number\" [(ngModel)]='thirdNumber'>\r\n    </mat-form-field>\r\n    &nbsp;\r\n    <button mat-fab (click)='addNumbers()'>Click!</button>\r\n    &nbsp;\r\n    {{ answer }}\r\n</mat-card>"

/***/ }),

/***/ "./src/app/sjs-addition/sjs-addition.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sjs-addition/sjs-addition.component.ts ***!
  \********************************************************/
/*! exports provided: SjsAdditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SjsAdditionComponent", function() { return SjsAdditionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SjsAdditionComponent = /** @class */ (function () {
    function SjsAdditionComponent() {
        var _this = this;
        this.addNumbers = function () {
            _this.answer = (_this.firstNumber + _this.secondNumber) / _this.thirdNumber;
        };
    }
    SjsAdditionComponent.prototype.ngOnInit = function () {
    };
    SjsAdditionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sjs-addition',
            template: __webpack_require__(/*! ./sjs-addition.component.html */ "./src/app/sjs-addition/sjs-addition.component.html"),
            styles: [__webpack_require__(/*! ./sjs-addition.component.css */ "./src/app/sjs-addition/sjs-addition.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SjsAdditionComponent);
    return SjsAdditionComponent;
}());



/***/ }),

/***/ "./src/app/something/something.component.css":
/*!***************************************************!*\
  !*** ./src/app/something/something.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NvbWV0aGluZy9zb21ldGhpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/something/something.component.html":
/*!****************************************************!*\
  !*** ./src/app/something/something.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>Adding with Colors</mat-card-title>\r\n  <mat-card-content>\r\n    <h3 class=\"mt-3\">Adding</h3>\r\n    <mat-form-field>\r\n      <input matInput type=\"number\" [(ngModel)]='firstNumber'>\r\n    </mat-form-field>\r\n    plus\r\n    <mat-form-field>\r\n      <input matInput type=\"number\" [(ngModel)]='secondNumber'>\r\n    </mat-form-field>\r\n    <button mat-fab (click)='addNumbers()' class=\"btn btn-success ml-2\">=</button>\r\n    {{ result }}\r\n    <br /><br />\r\n      <h3 class=\"mt-2\">Adding Colors</h3>\r\n      <p *ngFor='let t of colors'>\r\n      <label ng-repeat='t in colors'>\r\n        <mat-checkbox [(ngModel)]='t.checked'> \r\n        {{ t.name }}\r\n        </mat-checkbox>\r\n      </label>\r\n      </p>\r\n      <button mat-stroked-button (click)='findColor()' class=\"btn btn-outline-info\">Add Colors</button>\r\n      <p class=\"mt-2\">{{ foundColor }}</p>\r\n  </mat-card-content>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/something/something.component.ts":
/*!**************************************************!*\
  !*** ./src/app/something/something.component.ts ***!
  \**************************************************/
/*! exports provided: SomethingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SomethingComponent", function() { return SomethingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SomethingComponent = /** @class */ (function () {
    function SomethingComponent() {
        var _this = this;
        this.colors = [
            { name: "red", checked: true },
            { name: "yellow", checked: true },
            { name: "blue", checked: false }
        ];
        this.foundColor = "";
        this.firstNumber = 100;
        this.secondNumber = 20;
        this.result = 120;
        this.addNumbers = function () {
            _this.result = _this.firstNumber + _this.secondNumber;
        };
        this.findColor = function () {
            _this.foundColor = "";
            _this.findChecked().forEach(function (element) {
                _this.foundColor += element.name;
            });
            if (_this.foundColor == "yellow") {
                _this.foundColor = "yellow";
            }
            else if (_this.foundColor == "red") {
                _this.foundColor = "red";
            }
            else if (_this.foundColor == "blue") {
                _this.foundColor = "blue";
            }
            else if (_this.foundColor.includes("y") && _this.foundColor.includes("r") && !_this.foundColor.includes("b")) {
                _this.foundColor = "orange";
            }
            else if (_this.foundColor.includes("y") && _this.foundColor.includes("b") && !_this.foundColor.includes("r")) {
                _this.foundColor = "green";
            }
            else if (_this.foundColor.includes("r") && _this.foundColor.includes("b") && !_this.foundColor.includes("y")) {
                _this.foundColor = "purple";
            }
            else {
                _this.foundColor = "brown";
            }
        };
        this.findChecked = function () {
            // console.log(this.colors.filter( function (x) { return x.checked == true;}));
            var checkedColors = _this.colors.filter(function (x) { return x.checked == true; });
            return checkedColors;
        };
    }
    SomethingComponent.prototype.ngOnInit = function () {
    };
    SomethingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-something',
            template: __webpack_require__(/*! ./something.component.html */ "./src/app/something/something.component.html"),
            styles: [__webpack_require__(/*! ./something.component.css */ "./src/app/something/something.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SomethingComponent);
    return SomethingComponent;
}());



/***/ }),

/***/ "./src/app/spell-book.service.ts":
/*!***************************************!*\
  !*** ./src/app/spell-book.service.ts ***!
  \***************************************/
/*! exports provided: SpellBookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpellBookService", function() { return SpellBookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SpellBookService = /** @class */ (function () {
    function SpellBookService() {
    }
    SpellBookService.prototype.loadSpellBook = function () {
        var spellBookFromWeb = [
            { name: 'Create Pit', spellLevel: 2 },
            { name: 'Color Spray', spellLevel: 1 },
            { name: 'Presdidigitation', spellLevel: 0 }
        ];
        return spellBookFromWeb;
    };
    SpellBookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SpellBookService);
    return SpellBookService;
}());



/***/ }),

/***/ "./src/app/timespan/timespan.component.css":
/*!*************************************************!*\
  !*** ./src/app/timespan/timespan.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpbWVzcGFuL3RpbWVzcGFuLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/timespan/timespan.component.html":
/*!**************************************************!*\
  !*** ./src/app/timespan/timespan.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <h2>Tiresa's Age Calculator</h2>\r\n    <div>Starting Date<input type=\"date\" [(ngModel)]=\"startingDate\"></div>\r\n    <div>Ending Date<input type=\"date\" [(ngModel)]=\"endingDate\"></div>\r\n    <button type=\"button\" (click)=\"calculateAge()\">Calculate Age</button>\r\n    <div>Outcome: {{age}}</div>\r\n</div>"

/***/ }),

/***/ "./src/app/timespan/timespan.component.ts":
/*!************************************************!*\
  !*** ./src/app/timespan/timespan.component.ts ***!
  \************************************************/
/*! exports provided: TimespanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimespanComponent", function() { return TimespanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimespanComponent = /** @class */ (function () {
    function TimespanComponent() {
        var _this = this;
        this.calculateAge = function () {
            var dateOne = new Date(_this.startingDate);
            console.log(dateOne);
            var dateTwo = new Date(_this.endingDate);
            console.log(dateTwo);
            _this.age = dateTwo.getFullYear() - dateOne.getFullYear();
            console.log(_this.age);
            var months = dateTwo.getMonth() - dateOne.getMonth();
            if (months < 0 || (months === 0 && dateTwo.getDate() < dateOne.getDate())) {
                _this.age--;
            }
        };
    }
    TimespanComponent.prototype.ngOnInit = function () {
    };
    TimespanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'timespan-calculator',
            template: __webpack_require__(/*! ./timespan.component.html */ "./src/app/timespan/timespan.component.html"),
            styles: [__webpack_require__(/*! ./timespan.component.css */ "./src/app/timespan/timespan.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimespanComponent);
    return TimespanComponent;
}());



/***/ }),

/***/ "./src/app/tjs-addition/tjs-addition.component.css":
/*!*********************************************************!*\
  !*** ./src/app/tjs-addition/tjs-addition.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rqcy1hZGRpdGlvbi90anMtYWRkaXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/tjs-addition/tjs-addition.component.html":
/*!**********************************************************!*\
  !*** ./src/app/tjs-addition/tjs-addition.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>Tom's Addition Component</mat-card-title>\r\n  <mat-form-field>\r\n      <input matInput placeholder='Number 1' type=\"number\" [(ngModel)]='numberOne'>\r\n  </mat-form-field>\r\n  +\r\n  <mat-form-field>\r\n      <input matInput placeholder='Number 2' type=\"number\" [(ngModel)]='numberTwo'>\r\n  </mat-form-field>\r\n  &nbsp;\r\n  <button mat-raised-button (click)='addNumbers()'>=</button>\r\n  &nbsp;\r\n  {{ answer }}\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/tjs-addition/tjs-addition.component.ts":
/*!********************************************************!*\
  !*** ./src/app/tjs-addition/tjs-addition.component.ts ***!
  \********************************************************/
/*! exports provided: TjsAdditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TjsAdditionComponent", function() { return TjsAdditionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TjsAdditionComponent = /** @class */ (function () {
    function TjsAdditionComponent() {
        var _this = this;
        this.numberOne = 2;
        this.numberTwo = 2;
        this.answer = 4;
        this.addNumbers = function () {
            _this.answer = _this.numberOne + _this.numberTwo;
        };
    }
    TjsAdditionComponent.prototype.ngOnInit = function () {
    };
    TjsAdditionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tjs-addition',
            template: __webpack_require__(/*! ./tjs-addition.component.html */ "./src/app/tjs-addition/tjs-addition.component.html"),
            styles: [__webpack_require__(/*! ./tjs-addition.component.css */ "./src/app/tjs-addition/tjs-addition.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TjsAdditionComponent);
    return TjsAdditionComponent;
}());



/***/ }),

/***/ "./src/app/tjs-subtract/tjs-subtract.component.css":
/*!*********************************************************!*\
  !*** ./src/app/tjs-subtract/tjs-subtract.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rqcy1zdWJ0cmFjdC90anMtc3VidHJhY3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/tjs-subtract/tjs-subtract.component.html":
/*!**********************************************************!*\
  !*** ./src/app/tjs-subtract/tjs-subtract.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-title>Tom's Subtraction Component</mat-card-title>\r\n  <mat-form-field>\r\n      <input matInput placeholder='Number 1' type=\"number\" [(ngModel)]='numberOne'>\r\n  </mat-form-field>\r\n  -\r\n  <mat-form-field>\r\n      <input matInput placeholder='Number 2' type=\"number\" [(ngModel)]='numberTwo'>\r\n  </mat-form-field>\r\n  &nbsp;\r\n  <button mat-raised-button (click)='subtractNumbers()'>=</button>\r\n  &nbsp;\r\n  {{ answer }}\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/tjs-subtract/tjs-subtract.component.ts":
/*!********************************************************!*\
  !*** ./src/app/tjs-subtract/tjs-subtract.component.ts ***!
  \********************************************************/
/*! exports provided: TjsSubtractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TjsSubtractComponent", function() { return TjsSubtractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TjsSubtractComponent = /** @class */ (function () {
    function TjsSubtractComponent() {
        var _this = this;
        this.numberOne = 10;
        this.numberTwo = 5;
        this.answer = 5;
        this.subtractNumbers = function () {
            _this.answer = _this.numberOne - _this.numberTwo;
        };
    }
    TjsSubtractComponent.prototype.ngOnInit = function () {
    };
    TjsSubtractComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tjs-subtract',
            template: __webpack_require__(/*! ./tjs-subtract.component.html */ "./src/app/tjs-subtract/tjs-subtract.component.html"),
            styles: [__webpack_require__(/*! ./tjs-subtract.component.css */ "./src/app/tjs-subtract/tjs-subtract.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TjsSubtractComponent);
    return TjsSubtractComponent;
}());



/***/ }),

/***/ "./src/app/worst/worst.component.css":
/*!*******************************************!*\
  !*** ./src/app/worst/worst.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcnN0L3dvcnN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/worst/worst.component.html":
/*!********************************************!*\
  !*** ./src/app/worst/worst.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Worst Component</h4>\r\n<input type='text' name='firstNum' placeholder='First Number' [(ngModel)]='numberOne' /> x <input type='text' name='secondNum' placeholder=\"Second Number\" [(ngModel)]='numberTwo' />\r\n<button (click)='calculateNumbers()'>/ 2 =</button>\r\n{{answer}}"

/***/ }),

/***/ "./src/app/worst/worst.component.ts":
/*!******************************************!*\
  !*** ./src/app/worst/worst.component.ts ***!
  \******************************************/
/*! exports provided: WorstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorstComponent", function() { return WorstComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorstComponent = /** @class */ (function () {
    function WorstComponent() {
    }
    WorstComponent.prototype.ngOnInit = function () {
    };
    WorstComponent.prototype.calculateNumbers = function () {
        this.answer = (this.numberOne * this.numberTwo) / 2;
    };
    WorstComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-worst',
            template: __webpack_require__(/*! ./worst.component.html */ "./src/app/worst/worst.component.html"),
            styles: [__webpack_require__(/*! ./worst.component.css */ "./src/app/worst/worst.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorstComponent);
    return WorstComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\student\Documents\GitHub\components\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
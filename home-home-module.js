(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content style=\"--background: #FFF5F5;\">\n\n  <img src=\"https://rastrar.com/assets/img/bg/1.jpg\" class=\"bg\" style=\"width: 100%;\n  height: 100%;\" alt=\"\">\n\n  <div style=\"background: linear-gradient(\n    -47deg, #eb656e 0%, #bf3942 100%);height: 100%;width: 100%;opacity: 0.94;position: absolute;\">\n  </div>\n\n\n  <div style=\"    color: #fff!important;position: absolute;\n  width: 580px;\n  right: 15%;\n  top: 12%;font-size: 15px;\">\n    <h1 style=\"visibility: visible;\n    animation-delay: 0.15s;\n    animation-name: fadeInUp;font-size: 2.6em;\n    font-weight: 700;\n    line-height: 1.2;\">Plataforma Blockchain para asegurar la trazabilidad digital.</h1>\n    <p style=\"margin-bottom: 1.5rem!important;margin-top: 1.5rem!important;\">Rastreamos el recorrido de un producto para\n      consumo humano a través de toda la cadena de suministro: producción,\n      procesamiento, distribución y comercialización.</p>\n\n    <b class=\"text-white\" style=\"font-weight: 700;\">Caracteristicas:</b>\n    <ul class=\"text-white list-use\" style=\"display: block;\n    list-style-type: disc;\n    margin-block-start: 1em;\n    margin-block-end: 1em;\n    margin-inline-start: 0px;\n    margin-inline-end: 0px;\n    padding-inline-start: 40px;    margin: 0;\n    padding: 0;    padding-left: 1em;\">\n      <li style=\"list-style: circle;\">Alineado al ISO22005:2008.</li>\n      <li style=\"list-style: circle;\">Utilizamos certificación digital acreditada basadas en credenciales verifiables,\n        NFTs y certificación\n        Blockchain</li>\n      <li style=\"list-style: circle;\">Rastreo de personas, mercaderías, medicamentos, productos agricolas o ganaderos.\n      </li>\n    </ul>\n\n  </div>\n\n\n  <svg style=\"position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\" viewBox=\"0 0 1920 310\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n    xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"svg replaced-svg\">\n    <defs></defs>\n    <g id=\"shapeHome\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n      <g id=\"shapeHome\" transform=\"translate(0.000000, -554.000000)\" fill=\"#FFFFFF\">\n        <path\n          d=\"M-3,551 C186.257589,757.321118 319.044414,856.322454 395.360475,848.004007 C509.834566,835.526337 561.525143,796.329212 637.731734,765.961549 C713.938325,735.593886 816.980646,681.910577 1035.72208,733.065469 C1254.46351,784.220361 1511.54925,678.92359 1539.40808,662.398665 C1567.2669,645.87374 1660.9143,591.478574 1773.19378,597.641868 C1848.04677,601.75073 1901.75645,588.357675 1934.32284,557.462704 L1934.32284,863.183395 L-3,863.183395\"\n          id=\"shapeHome\"></path>\n      </g>\n    </g>\n  </svg>\n\n  <div class=\"slides01\" style=\"box-shadow: var(--shadow-black-200);padding:  0;\">\n\n    <ion-slides #slidesPadre pager=\"false\" [options]=\"slideOptsOnboarding\" style=\"height: 100%;\">\n\n      <!-- Iniciar sesion-->\n      <ion-slide *ngIf=\"slideLogin\" class=\"ion-no-padding\" style=\"display: block;\">\n\n        <!-- Header -->\n        <div style=\"position: relative;\n      text-align: center;\n      padding: 0 25px;\n      margin-top: 30px;\">\n          <img src=\"../../assets/images/logo-color.svg\" alt=\"\" style=\"height: 50px;\">\n        </div>\n\n        <div style=\"\n      color: #2F3435;\n      padding: 0 30px;\n      padding-bottom: 50px;\n      padding-top: 30px;\n      width: 100%;position: relative;\">\n\n          <!--    <p class=\"title-gradient\">¡Bienvenido/a! </p> -->\n          <p style=\" text-align: left;\n      font-size: 13px;\n      color: #9f9e9e;\">Complete los siguientes datos para iniciar tu cuenta.<br>Si aún no no tiene una, puede crear una\n            desde el botón inferior\n            <b>Crear cuenta</b>.\n          </p>\n\n          <form [formGroup]=\"loginForm\" style=\"margin-top: 20px;\">\n\n            <ion-item class=\"item-input\" lines=\"none\">\n              <ion-label position=\"fixed\">\n                <ion-icon name=\"mail\"></ion-icon>\n              </ion-label>\n              <ion-input lines=\"none\" formControlName=\"email\" type=\"email\" placeholder=\"Correo electrónico\">\n              </ion-input>\n            </ion-item>\n            <app-control-messages [control]=\"loginForm.controls['email']\"></app-control-messages>\n\n            <ion-item class=\"item-input\" lines=\"none\" style=\"    margin-top: 15px;\">\n              <ion-label position=\"fixed\">\n                <ion-icon name=\"lock-closed\"></ion-icon>\n              </ion-label>\n              <ion-input lines=\"none\" [type]=\"tipo\" formControlName=\"pass\" placeholder=\"Ingrese clave\">\n              </ion-input>\n              <span class=\"btn-view\" (click)=\"mostrar()\">\n                <ion-icon name=\"eye\" *ngIf=\"viewPass\" style=\"font-size: 23px;color: #b3b3b3;\"></ion-icon>\n                <ion-icon name=\"eye-off\" *ngIf=\"!viewPass\" style=\"font-size: 23px;color: #b3b3b3;\"></ion-icon>\n              </span>\n            </ion-item>\n            <app-control-messages [control]=\"loginForm.controls['pass']\"></app-control-messages>\n\n          </form>\n\n          <div style=\"text-align: center;margin-top: 25px;\">\n            <a href=\"javascript:void(0)\"\n              (click)=\"(loginForm.controls['pass'].value!='' && loginForm.controls['email'].value!='')?validateFormLogin():null\"\n              class=\"btn-3\"\n              [ngClass]=\"(loginForm.controls['pass'].value!='' && loginForm.controls['email'].value!='')?'btn-3':'btn-disable'\">\n              Continuar</a>\n          </div>\n\n          <div style=\"\n      font-size: 14px;\n      margin-top: 20px;\n      bottom: 0;\n      text-align: center;\n      font-weight: 600;\n      color: #888484;\">\n            ¿Eres nuevo en Rastrar? <span class=\"font-grd\" style=\"cursor: pointer;\"\n              (click)=\"slideNewAccount=true;nextSlidePadre()\"> Crear\n              cuenta</span>\n          </div>\n\n        </div>\n      </ion-slide>\n\n      <!-- Crear cuenta -->\n      <ion-slide *ngIf=\"slideNewAccount\" class=\"ion-no-padding\" style=\"display: block; \">\n\n        <!-- Header -->\n        <div style=\"position: relative;    text-align: left;    padding: 10px;\">\n          <ion-icon name=\"arrow-back-outline\" (click)=\"backSlidePadre();\"\n            style=\"cursor: pointer;  font-size: 20px;padding: 15px;position: absolute;    top: 10px;\n            left: 10px; color: var(--tertiary);\">\n          </ion-icon> <span class=\"title-gradient\" style=\"margin-left: 50px;\n        margin-top: 8px;\n        display: inline-block;\n        font-size: 22px;\">Nueva cuenta </span>\n\n        </div>\n\n\n        <div style=\"\n      color: #2F3435;\n      padding: 0 30px;\n      padding-bottom: 50px;\n      width: 100%;position: relative;\">\n\n          <!--         <p class=\"title-gradient\">Nueva cuenta </p> -->\n          <p style=\"  text-align: left;\n      font-size: 13px;\n      color: #9f9e9e;\">Complete los siguientes datos para continuar con la creación de su cuenta\n          </p>\n\n          <form [formGroup]=\"accountForm\" style=\"margin-top: 20px;\">\n\n            <ion-item class=\"item-input\" lines=\"none\">\n              <ion-label position=\"fixed\">\n                <ion-icon name=\"person\"></ion-icon>\n              </ion-label>\n              <ion-input lines=\"none\" formControlName=\"name\" placeholder=\"Ingrese su nombre o razón social\">\n              </ion-input>\n            </ion-item>\n            <app-control-messages [control]=\"accountForm.controls['name']\"></app-control-messages>\n\n            <ion-item class=\"item-input\" lines=\"none\">\n              <ion-label position=\"fixed\">\n                <ion-icon name=\"shield-checkmark\"></ion-icon>\n              </ion-label>\n              <ion-input lines=\"none\" formControlName=\"dni\" type=\"text\" placeholder=\"Ingrese DNI o RUC\">\n              </ion-input>\n            </ion-item>\n            <app-control-messages [control]=\"accountForm.controls['dni']\"></app-control-messages>\n\n            <ion-item class=\"item-input\" lines=\"none\">\n              <ion-label position=\"fixed\">\n                <ion-icon name=\"mail\"></ion-icon>\n              </ion-label>\n              <ion-input lines=\"none\" formControlName=\"email\" type=\"email\" placeholder=\"Ingrese correo electrónico\">\n              </ion-input>\n            </ion-item>\n            <app-control-messages [control]=\"accountForm.controls['email']\"></app-control-messages>\n\n\n            <ion-item class=\"item-input\" lines=\"none\">\n              <ion-label position=\"fixed\">\n                <ion-icon name=\"lock-closed\"></ion-icon>\n              </ion-label>\n              <ion-input lines=\"none\" formControlName=\"pass\" type=\"text\" placeholder=\"Ingrese una clave\">\n              </ion-input>\n            </ion-item>\n            <app-control-messages [control]=\"accountForm.controls['pass']\"></app-control-messages>\n\n\n          </form>\n\n\n\n\n\n          <ion-item lines=\"none\" class=\"check-terms\">\n            <ion-label>Acepto <a href=\"javascript:void(0)\">términos y condiciones</a> </ion-label>\n            <ion-checkbox slot=\"start\" value=\"acepto\" (ionChange)=\"checkboxClick($event)\">\n            </ion-checkbox>\n          </ion-item>\n\n\n\n          <div style=\"text-align: center;margin-top: 18px;\">\n            <a href=\"javascript:void(0)\" (click)=\"ter?validateForm():null\" class=\"btn-3\"\n              [ngClass]=\"ter?'btn-3':'btn-disable'\">\n              Continuar</a>\n          </div>\n\n        </div>\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/components.module */ "j1ZV");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg {\n  position: absolute;\n  top: 0;\n  right: 0;\n  object-fit: cover;\n}\n\n.slides01 {\n  height: 650px;\n  max-height: 78%;\n  width: 400px;\n  min-width: 25%;\n  background: #fff;\n  margin-top: 5%;\n  border-radius: 30px;\n  position: absolute;\n  left: 10%;\n}\n\n.menu-header-bg {\n  top: 30%;\n  position: absolute;\n  height: 50%;\n  width: 480px;\n  background: linear-gradient(-47deg, #eb656e 0%, #bf3942 100%);\n  box-shadow: 0px 1px 20px rgba(94, 94, 94, 0.25);\n  transform: rotate(-40deg);\n  border-radius: 16%;\n  margin-left: -320px;\n  margin-bottom: 25px;\n  z-index: 1;\n}\n\n.menu-header-bg div {\n  width: 100%;\n  height: 100%;\n}\n\n.menu-header-bg div img {\n  width: 132px;\n  position: absolute;\n  right: 25px;\n  bottom: 70px;\n  transform: rotate(40deg);\n}\n\n@media screen and (max-width: 1200px) {\n  .slides01 {\n    left: 20%;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .title {\n    font-size: 25px;\n  }\n\n  .subtitle {\n    font-weight: 500;\n  }\n\n  .slides01 {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    left: 0;\n    border-radius: 0px;\n    max-height: 100%;\n  }\n\n  .img-left {\n    display: none !important;\n  }\n}\n\n.item-input {\n  --background: transparent;\n  padding: 0px 0;\n  border: 2px solid #e1e1e1b8;\n  border-radius: 5px;\n}\n\n.item-input ion-label {\n  flex: 0 0 100px;\n  min-width: 40px;\n  max-width: 40px;\n  text-align: center;\n}\n\n.item-input ion-label ion-icon {\n  font-size: 16px;\n  color: #c3c3c3;\n  transform: translateY(2px);\n}\n\n.item-input ion-input {\n  color: var(--black-400);\n  font-size: 13px;\n}\n\n.btn-3 {\n  display: inline-block;\n  text-decoration: none;\n  background-image: linear-gradient(to right, #da5d67, #d75a64, #d45861, #d1555f, #ce525c, #cc5059, #c94d57, #c74b54, #c44951, #c1464f, #bf444c, #bc414a);\n  padding: 15px 70px;\n  border: none;\n  border-radius: 30px;\n  color: #ffffffdc;\n  font-size: 13px;\n  box-shadow: var(--shadow-black-200);\n  font-weight: 500;\n}\n\n.btn-3 ion-icon {\n  font-size: 16px;\n  transform: translateY(5px);\n  margin-right: 3px;\n  margin-top: -8px;\n}\n\n.btn-3:hover {\n  color: #fff;\n  text-decoration: none;\n}\n\n.btn-2 {\n  display: inline-block;\n  text-decoration: none;\n  background: #ffffff8a;\n  padding: 15px 70px;\n  border-radius: 30px;\n  border: 1px solid #959595c7;\n  font-size: 12px;\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);\n  font-weight: 600;\n  color: #484848eb;\n}\n\n.btn-2:hover {\n  text-decoration: none;\n  color: #0052ffad;\n}\n\n.check-terms {\n  --background: transparent;\n}\n\n.check-terms ion-label {\n  font-size: 12px !important;\n  color: #787777 !important;\n}\n\n.check-terms ion-label a {\n  color: #787777;\n  text-decoration: underline;\n  font-weight: 700;\n}\n\n.check-terms ion-checkbox {\n  margin-right: 12px;\n  --background-checked: var(--tertiary);\n  --border-color-checked: var(--tertiary);\n  --border-color: #d3d3d3;\n}\n\n.btn-disable {\n  background: linear-gradient(90deg, #e3c9c9 10%, #e3b5b5 100%);\n  color: #fff;\n  box-shadow: var(--shadow-black-100);\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNkRBQUE7RUFDQSwrQ0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDSTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFDTjs7QUFJQTtFQUNFO0lBQ0UsU0FBQTtFQURGO0FBQ0Y7O0FBSUE7RUFDRTtJQUNFLGVBQUE7RUFGRjs7RUFLQTtJQUNFLGdCQUFBO0VBRkY7O0VBS0E7SUFDRSxZQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxPQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQkFBQTtFQUZGOztFQUtBO0lBQ0Usd0JBQUE7RUFGRjtBQUNGOztBQUtBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQUtFO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFJSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7QUFGTjs7QUFNRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtBQUpKOztBQVFBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVKQUFBO0VBZUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQ0FBQTtFQUNBLGdCQUFBO0FBbkJGOztBQXNCRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFwQko7O0FBd0JBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FBckJGOztBQXdCQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFyQkY7O0FBd0JBO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtBQXJCRjs7QUF3QkE7RUFDRSx5QkFBQTtBQXJCRjs7QUFzQkU7RUFDRSwwQkFBQTtFQUNBLHlCQUFBO0FBcEJKOztBQXFCSTtFQUNFLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBbkJOOztBQXNCRTtFQUNFLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHVCQUFBO0FBcEJKOztBQXdCQTtFQUNFLDZEQUFBO0VBQ0EsV0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0JBQUE7QUFyQkYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uc2xpZGVzMDEge1xuICBoZWlnaHQ6IDY1MHB4O1xuICBtYXgtaGVpZ2h0OiA3OCU7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWluLXdpZHRoOiAyNSU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwJTtcbn1cblxuLm1lbnUtaGVhZGVyLWJnIHtcbiAgdG9wOiAzMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiA0ODBweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KC00N2RlZywgI2ViNjU2ZSAwJSwgI2JmMzk0MiAxMDAlKTtcbiAgYm94LXNoYWRvdzogMHB4IDFweCAyMHB4IHJnYig5NCA5NCA5NCAvIDI1JSk7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00MGRlZyk7XG4gIGJvcmRlci1yYWRpdXM6IDE2JTtcbiAgbWFyZ2luLWxlZnQ6IC0zMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgei1pbmRleDogMTtcblxuICBkaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMTMycHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMjVweDtcbiAgICAgIGJvdHRvbTogNzBweDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQwZGVnKTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5zbGlkZXMwMSB7XG4gICAgbGVmdDogMjAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG5cbiAgLnN1YnRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgLnNsaWRlczAxIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuaW1nLWxlZnQge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uaXRlbS1pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDBweCAwO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZTFlMWUxYjg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICBpb24tbGFiZWwge1xuICAgIGZsZXg6IDAgMCAxMDBweDtcbiAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgbWF4LXdpZHRoOiA0MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBpb24taWNvbiB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogI2MzYzNjMztcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgycHgpO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1pbnB1dCB7XG4gICAgY29sb3I6IHZhcigtLWJsYWNrLTQwMCk7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICB9XG59XG5cbi5idG4tMyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgdG8gcmlnaHQsXG4gICAgI2RhNWQ2NyxcbiAgICAjZDc1YTY0LFxuICAgICNkNDU4NjEsXG4gICAgI2QxNTU1ZixcbiAgICAjY2U1MjVjLFxuICAgICNjYzUwNTksXG4gICAgI2M5NGQ1NyxcbiAgICAjYzc0YjU0LFxuICAgICNjNDQ5NTEsXG4gICAgI2MxNDY0ZixcbiAgICAjYmY0NDRjLFxuICAgICNiYzQxNGFcbiAgKTtcbiAgcGFkZGluZzogMTVweCA3MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGNvbG9yOiAjZmZmZmZmZGM7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWJsYWNrLTIwMCk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG5cblxuICBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgIG1hcmdpbi10b3A6IC04cHg7XG4gIH1cbn1cblxuLmJ0bi0zOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJ0bi0yIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY4YTtcbiAgcGFkZGluZzogMTVweCA3MHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTU5NTk1Yzc7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm94LXNoYWRvdzogMCAzcHggOHB4IHJnYigwIDAgMCAvIDUlKTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM0ODQ4NDhlYjtcbn1cblxuLmJ0bi0yOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogIzAwNTJmZmFkO1xufVxuXG4uY2hlY2stdGVybXMge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjNzg3Nzc3ICFpbXBvcnRhbnQ7XG4gICAgYSB7XG4gICAgICBjb2xvcjogIzc4Nzc3NztcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG4gIH1cbiAgaW9uLWNoZWNrYm94IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLXRlcnRpYXJ5KTtcbiAgICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB2YXIoLS10ZXJ0aWFyeSk7XG4gICAgLS1ib3JkZXItY29sb3I6ICNkM2QzZDM7XG4gIH1cbn1cblxuLmJ0bi1kaXNhYmxlIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZTNjOWM5IDEwJSwgI2UzYjViNSAxMDAlKTtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1ibGFjay0xMDApO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuIl19 */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_ionic_components_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ionic-components.service */ "L8EE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/storage.service */ "n90K");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _services_apiMongo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/apiMongo.service */ "GtMO");
/* harmony import */ var _compartido_funciones__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../compartido/funciones */ "3Djf");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../services/auth.service */ "lGQG");








/* import { User, Screen } from '../interface/interfaces';
import { Web3jsService } from '../services/web3js.service'; */






const { Geolocation, Network } = _capacitor_core__WEBPACK_IMPORTED_MODULE_12__["Plugins"];
let HomePage = class HomePage {
    constructor(_auth, appComp, _fun, _apiMongo, _storage, router, formBuilder, _comp) {
        this._auth = _auth;
        this.appComp = appComp;
        this._fun = _fun;
        this._apiMongo = _apiMongo;
        this._storage = _storage;
        this.router = router;
        this.formBuilder = formBuilder;
        this._comp = _comp;
        this.load = true;
        this.indexSlide = 0;
        this.initEnd = false;
        this.viewPass = false;
        this.tipo = "password";
        this.slideNewAccount = false;
        this.slideLogin = true;
        this.methodNewAccount = false;
        this.submitAttempt = false;
        this.dataUserDB = {
            publicKey: '',
            privateKey: ''
        };
        this.dataScreensDB = [];
        this.slideOpts = {
            initialSlide: 0,
            slidesPerView: 1,
            speed: 700,
            autoplay: {
                delay: 2500,
            },
        };
        this.slideOptsOnboarding = {
            allowSlideNext: false,
            allowSlidePrev: false,
            slidesPerView: 1,
            initialSlide: 0,
            speed: 400
        };
        this.ter = false;
        this.initForm();
    }
    getLocation() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.getCurrentPosition = yield Geolocation.getCurrentPosition();
            console.log('Current position:', this.getCurrentPosition);
        });
    }
    connetionStatus() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let connection = yield Network.getStatus();
        });
    }
    ngOnInit() {
        this.connetionStatus();
        this.getLocation();
    }
    tiggerFields(form) {
        Object.keys(form.controls).forEach(field => {
            let _control = form.get(field);
            if (_control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"])
                _control.markAsTouched({ onlySelf: true });
        });
    }
    validateForm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.tiggerFields(this.accountForm);
            if (this.accountForm.valid)
                this.createAccount();
        });
    }
    validateFormLogin() {
        this.slideNewAccount = false;
        this.tiggerFields(this.loginForm);
        if (this.loginForm.valid)
            this.login();
    }
    checkboxClick(e) {
        console.log(e);
        this.ter = e.detail.checked;
    }
    initForm() {
        this.accountForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dni: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.loginForm = this.formBuilder.group({
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required] /* ,
            secreto1: ['', Validators.required], */
        });
    }
    setParamas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /*     let updateParams = await this.storage.getLocalStorage('updateParams');
                if (!this._fun.isVarInvalid(updateParams)) return;
            
                this._apiMongo._get(env.COLLECTION.general, env.TABLE_SIS.tables, 'items').subscribe(async (res: any) => {
            
                  let tablas = res.result[0].tables;
            
                  for (let index = 0; index < tablas.length; index++) {
                    const tabla = tablas[index];
                    let createTable = await this.db.createTable(tabla.key, 'default');
                    console.log('createTable', createTable);
                    if (!createTable) {
                      await this.storage.setLocalStorage('updateParams', false);
                      return;
                    }
            
                    this._apiMongo._get(env.COLLECTION.general, tabla.key, 'items').subscribe(async (data_i: any) => {
                      let items = data_i.result[0][tabla.key];
                      console.log('items DB', items);
                      items = this._fun.patchValueJsonStrArry({ data: '', key: '', name: '', status: '' }, items)
                      console.log('items', items);
                      let savedItems = await this.db.addData(items, tabla.key);
                      console.log('savedItems', savedItems);
                      let listParams = await this.db.getData(null, tabla.key) || [];
                      console.log('listParams', listParams);
                      if (!savedItems) {
                        await this.storage.setLocalStorage('updateParams', false);
                        return;
                      }
                    });
            
                    if (index == (tablas.length - 1)) {
                      await this.storage.setLocalStorage('updateParams', true);
                      console.log('PARAMTROS ACTUALIZADOS');
            
                    }
                  }
            
                }) */
        });
    }
    access(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (!user.status) {
                    this._comp.presentToast('Usuario esta deshabilitado', 'danger', 1500);
                    return;
                }
                if (user.data.idens[0].number == '') {
                    yield this._fun.alertError('El usuario no tiene una identificación asociada, debe solicitar actualizar su información');
                    return;
                }
                //VALIDAR ROL DE USUARIO
                /*       const res_role: any = await this._apiMongo.get(env.COLLECTION.general, env.TABLE_SIS.role, user.data.role.key);
                      console.log('res_role', res_role);
                
                      if (this._fun.isEmpty(res_role.result)) {
                        this._comp.presentToast('Rol no existe', 'danger', 1500);
                        return;
                      }
                
                      let role = res_role.result[0][env.TABLE_SIS.role][0];
                      console.log('role', role);
                
                      if (!role.data.acc_app) {
                        this._comp.presentToast('Usuario no tiene permisos de acceso', 'danger', 1500);
                        return;
                      }
                 */
                //AGREGAR PANTALLAS DE USUARIO
                console.log('user', user);
                yield this.updateListScreen(user);
                this._auth.currentUser.next(user);
                yield this._storage.set(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].TOKEN_KEY, user.key);
                this.router.navigate(['list-qr']);
            }
            catch (error) {
                yield this._fun.alertError(error);
            }
        });
    }
    updateListScreen(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                let DNI_USER = /* '72930779' */ user.data.idens[0].number;
                const res = yield this._apiMongo.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].COLLECTION.screenUser, DNI_USER, 'items');
                console.log('res_list', res);
                if (this._fun.isEmpty(res.result)) {
                    /* this.load = false; */
                    yield this._storage.set('screenUser', []);
                    resolve(false);
                    return;
                }
                let listScreen = [];
                for (let index = 0; index < res.result[0][DNI_USER].length; index++) {
                    let screen = res.result[0][DNI_USER][index].data;
                    screen.key = res.result[0][DNI_USER][index].key;
                    listScreen.push(screen);
                    if (index == (res.result[0][DNI_USER].length - 1)) {
                        yield this._storage.set('screenUser', listScreen);
                        resolve(true);
                    }
                }
            }));
        });
    }
    createAccount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let loading = yield this._comp.presentLoading();
            console.log('CREAR 1');
            this.dataUserDB.publicKey = '';
            this.dataUserDB.privateKey = '';
            console.log('this.dataUserDB', this.dataUserDB);
            let user_data_db = {
                idens: [
                    {
                        number: this.accountForm.controls['dni'].value,
                        type: 'DNI',
                        type_name: 'DNI'
                    }
                ],
                group: {
                    "collection": "general",
                    "table": "g_prod",
                    "key": "C4",
                    "value": "Otras funciones"
                },
                documents: [],
                email: this.accountForm.controls['email'].value,
                phone: "",
                password: this.accountForm.controls['pass'].value,
                properties: "{}",
                role: {
                    collection: "general",
                    key: "ADM_USER",
                    table: "role",
                    value: "Administrador"
                },
                dids: [
                    {
                        "txType": 1,
                        "hashTransaction": "",
                        "address": ''
                    }
                ],
                status: true,
                key: this._fun.makeid(5),
                table: "employee",
                name: this.accountForm.controls['name'].value,
                grupo: {
                    "collection": "general",
                    "table": "g_prod",
                    "key": "C4",
                    "value": "Otras funciones"
                }
            };
            let saved_us = yield this._apiMongo.create(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].COLLECTION.party, 'employee', user_data_db.key, user_data_db, false);
            console.log('saved_us', saved_us.result);
            if (this._fun.isVarInvalid(saved_us.result)) {
                yield this._fun.alertError(saved_us.message);
                loading.dismiss();
                return;
            }
            this._auth.currentUser.next(saved_us.result);
            yield this._storage.set(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].TOKEN_KEY, saved_us.result.key);
            loading.dismiss();
            this.router.navigate(['list-qr']);
        });
    }
    ionViewDidEnter() {
        this.backSlidePadre();
        this.backSlidePadre();
        this.backSlidePadre();
        this.backSlidePadre();
        this.slidesPadre.update(); //REFRESCAR AL USAR MODAL 
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let connection = yield Network.getStatus();
            if (!connection.connected) {
                yield this._fun.alertError('No se encuentra con conexión a internet');
                return;
            }
            let loading = yield this._comp.presentLoading();
            const res = yield this._apiMongo.filter(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].COLLECTION.party, src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].TABLE_SIS.employee, { 'data.email': this.loginForm.value.email, 'data.password': this.loginForm.value.pass });
            console.log('res', res);
            loading.dismiss();
            if (this._fun.isEmpty(res.result)) {
                yield this._fun.alertError('Usuario no existe');
                return;
            }
            const user = res.result[0][src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].TABLE_SIS.employee][0];
            console.log('user', user);
            /*     return; */
            this.submitAttempt = true;
            if (this.loginForm.valid) {
                this.load = true;
                this.access(user);
            }
        });
    }
    verSlide() {
        this.slidesDatos.getActiveIndex().then(res => {
            if (!this.initEnd)
                this.indexSlide = res;
            this.initEnd = false;
        });
    }
    mostrar() {
        if (this.viewPass) {
            this.tipo = "password";
            this.viewPass = false;
        }
        else {
            this.tipo = "text";
            this.viewPass = true;
        }
    }
    endSlide() {
        this.initEnd = true;
        this.indexSlide = 2;
    }
    nextSlideDatos() {
        this.slidesDatos.slideNext();
    }
    nextSlidePadre() {
        this.slidesPadre.lockSwipeToNext(false);
        this.slidesPadre.slideNext();
        this.slidesPadre.lockSwipeToNext(true);
    }
    backSlidePadre() {
        this.slidesPadre.lockSwipeToPrev(false);
        this.slidesPadre.slidePrev();
        this.slidesPadre.lockSwipeToPrev(true);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"] },
    { type: _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"] },
    { type: _compartido_funciones__WEBPACK_IMPORTED_MODULE_10__["Funciones"] },
    { type: _services_apiMongo_service__WEBPACK_IMPORTED_MODULE_9__["ApiMongoService"] },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_ionic_components_service__WEBPACK_IMPORTED_MODULE_5__["IonicComponentsService"] }
];
HomePage.propDecorators = {
    slidesPadre: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slidesPadre', { static: false },] }],
    slidesDatos: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slidesDatos', { static: false },] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map
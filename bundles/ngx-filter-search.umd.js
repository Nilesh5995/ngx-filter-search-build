(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('lodash'), require('@angular/common'), require('@angular/forms'), require('@syncfusion/ej2-angular-inputs'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('ngx-filter-search', ['exports', '@angular/core', 'lodash', '@angular/common', '@angular/forms', '@syncfusion/ej2-angular-inputs', '@angular/platform-browser'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-filter-search'] = {}, global.ng.core, global._, global.ng.common, global.ng.forms, global.i3, global.ng.platformBrowser));
}(this, (function (exports, i0, _, i1, i2, i3, platformBrowser) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var ___namespace = /*#__PURE__*/_interopNamespace(_);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);
    var i3__namespace = /*#__PURE__*/_interopNamespace(i3);

    var NgxFilterSearchService = /** @class */ (function () {
        function NgxFilterSearchService() {
        }
        return NgxFilterSearchService;
    }());
    NgxFilterSearchService.ɵfac = function NgxFilterSearchService_Factory(t) { return new (t || NgxFilterSearchService)(); };
    NgxFilterSearchService.ɵprov = i0__namespace.ɵɵdefineInjectable({ token: NgxFilterSearchService, factory: NgxFilterSearchService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NgxFilterSearchService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || from);
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    function NgxFilterSearchComponent_div_0_div_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 8);
            i0__namespace.ɵɵelementStart(1, "strong", 9);
            i0__namespace.ɵɵtext(2, "Search");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(3, "div", 10);
            i0__namespace.ɵɵelementStart(4, "div", 11);
            i0__namespace.ɵɵelementStart(5, "input", 12);
            i0__namespace.ɵɵlistener("ngModelChange", function NgxFilterSearchComponent_div_0_div_7_Template_input_ngModelChange_5_listener($event) { i0__namespace.ɵɵrestoreView(_r4_1); var ctx_r3 = i0__namespace.ɵɵnextContext(2); return ctx_r3.searchText = $event; })("keyup", function NgxFilterSearchComponent_div_0_div_7_Template_input_keyup_5_listener() { i0__namespace.ɵɵrestoreView(_r4_1); var ctx_r5 = i0__namespace.ɵɵnextContext(2); return ctx_r5.applyFilter(); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(5);
            i0__namespace.ɵɵproperty("ngModel", ctx_r1.searchText);
        }
    }
    function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r16_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 3);
            i0__namespace.ɵɵelementStart(1, "div", 15);
            i0__namespace.ɵɵelementStart(2, "strong", 16);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "div", 17);
            i0__namespace.ɵɵelementStart(5, "h6", 18);
            i0__namespace.ɵɵlistener("click", function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_1_Template_h6_click_5_listener() { i0__namespace.ɵɵrestoreView(_r16_1); var config_r7 = i0__namespace.ɵɵnextContext(2).$implicit; var ctx_r15 = i0__namespace.ɵɵnextContext(3); return ctx_r15.clearSingleFilters(ctx_r15.tempFilter[config_r7.filterBy].filterBy, ctx_r15.tempFilter[config_r7.filterBy].filterType); });
            i0__namespace.ɵɵtext(6, "Clear");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var config_r7 = i0__namespace.ɵɵnextContext(2).$implicit;
            var ctx_r11 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate(ctx_r11.tempFilter[config_r7.filterBy] == null ? null : ctx_r11.tempFilter[config_r7.filterBy].filterTitle);
        }
    }
    function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r25_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 20);
            i0__namespace.ɵɵelementStart(1, "input", 21);
            i0__namespace.ɵɵlistener("ngModelChange", function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_1_Template_input_ngModelChange_1_listener($event) { var filter_r21 = ctx.$implicit; return filter_r21.isChecked = $event; })("change", function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_1_Template_input_change_1_listener() { i0__namespace.ɵɵrestoreView(_r25_1); var ctx_r24 = i0__namespace.ɵɵnextContext(6); return ctx_r24.applyFilter(); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(2, "span", 22);
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var filter_r21 = ctx.$implicit;
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("id", filter_r21.fieldName)("name", filter_r21.fieldName)("value", filter_r21.fieldValue)("ngModel", filter_r21.isChecked);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵtextInterpolate1(" ", filter_r21.fieldName, " ");
        }
    }
    function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_3_h6_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r29_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "h6", 24);
            i0__namespace.ɵɵlistener("click", function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_3_h6_1_Template_h6_click_0_listener() { i0__namespace.ɵɵrestoreView(_r29_1); var config_r7 = i0__namespace.ɵɵnextContext(4).$implicit; var ctx_r28 = i0__namespace.ɵɵnextContext(3); return ctx_r28.showMoreItems(ctx_r28.tempFilter[config_r7.filterBy].filterBy, true); });
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var config_r7 = i0__namespace.ɵɵnextContext(4).$implicit;
            var ctx_r26 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx_r26.tempFilter[config_r7.filterBy].length - config_r7.filterCheckBoxLimit, " More ");
        }
    }
    function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_3_h6_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r33_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "h6", 24);
            i0__namespace.ɵɵlistener("click", function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_3_h6_2_Template_h6_click_0_listener() { i0__namespace.ɵɵrestoreView(_r33_1); var config_r7 = i0__namespace.ɵɵnextContext(4).$implicit; var ctx_r32 = i0__namespace.ɵɵnextContext(3); return ctx_r32.showMoreItems(ctx_r32.tempFilter[config_r7.filterBy].filterBy, false); });
            i0__namespace.ɵɵtext(1, " Show Less ");
            i0__namespace.ɵɵelementEnd();
        }
    }
    function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_3_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵtemplate(1, NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_3_h6_1_Template, 2, 1, "h6", 23);
            i0__namespace.ɵɵtemplate(2, NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_3_h6_2_Template, 2, 0, "h6", 23);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var config_r7 = i0__namespace.ɵɵnextContext(3).$implicit;
            var ctx_r20 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !ctx_r20.tempFilter[config_r7.filterBy].isShowMore);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", ctx_r20.tempFilter[config_r7.filterBy].isShowMore);
        }
    }
    function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵtemplate(1, NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_1_Template, 4, 5, "div", 19);
            i0__namespace.ɵɵpipe(2, "slice");
            i0__namespace.ɵɵtemplate(3, NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_3_Template, 3, 2, "div", 7);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var config_r7 = i0__namespace.ɵɵnextContext(2).$implicit;
            var ctx_r12 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", i0__namespace.ɵɵpipeBind3(2, 2, ctx_r12.tempFilter[config_r7.filterBy], 0, !ctx_r12.tempFilter[config_r7.filterBy].isShowMore ? config_r7.filterCheckBoxLimit : ctx_r12.tempFilter[config_r7.filterBy].filterCheckBoxLimit));
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", ctx_r12.tempFilter[config_r7.filterBy].length > (config_r7 == null ? null : config_r7.filterCheckBoxLimit));
        }
    }
    function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r38_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵelementStart(1, "span", 25);
            i0__namespace.ɵɵelementStart(2, "span");
            i0__namespace.ɵɵtext(3);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementStart(4, "ejs-slider", 26);
            i0__namespace.ɵɵlistener("valueChange", function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_3_Template_ejs_slider_valueChange_4_listener($event) { i0__namespace.ɵɵrestoreView(_r38_1); var config_r7 = i0__namespace.ɵɵnextContext(2).$implicit; var ctx_r37 = i0__namespace.ɵɵnextContext(3); return ctx_r37.tempFilter[config_r7.filterBy].rangeValue = $event; })("change", function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_3_Template_ejs_slider_change_4_listener() { i0__namespace.ɵɵrestoreView(_r38_1); var config_r7 = i0__namespace.ɵɵnextContext(2).$implicit; var ctx_r40 = i0__namespace.ɵɵnextContext(3); return ctx_r40.sliderChange(ctx_r40.tempFilter[config_r7 == null ? null : config_r7.filterBy]); })("changed", function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_3_Template_ejs_slider_changed_4_listener() { i0__namespace.ɵɵrestoreView(_r38_1); var ctx_r42 = i0__namespace.ɵɵnextContext(5); return ctx_r42.applyFilter(); });
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var config_r7 = i0__namespace.ɵɵnextContext(2).$implicit;
            var ctx_r13 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵadvance(3);
            i0__namespace.ɵɵtextInterpolate2(" ", ctx_r13.tempFilter[config_r7.filterBy].rangeValue[0], " - ", ctx_r13.tempFilter[config_r7.filterBy].rangeValue[1], " ");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("value", ctx_r13.tempFilter[config_r7.filterBy].rangeValue)("min", ctx_r13.tempFilter[config_r7.filterBy].minValue)("max", ctx_r13.tempFilter[config_r7.filterBy].maxValue)("step", ctx_r13.tempFilter[config_r7.filterBy].rangeStep)("type", "Range");
        }
    }
    function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_hr_4_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelement(0, "hr");
        }
    }
    function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵtemplate(1, NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_1_Template, 7, 1, "div", 14);
            i0__namespace.ɵɵtemplate(2, NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_Template, 4, 6, "div", 7);
            i0__namespace.ɵɵtemplate(3, NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_3_Template, 5, 7, "div", 7);
            i0__namespace.ɵɵtemplate(4, NgxFilterSearchComponent_div_0_div_9_div_1_div_1_hr_4_Template, 1, 0, "hr", 7);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r44 = i0__namespace.ɵɵnextContext();
            var config_r7 = ctx_r44.$implicit;
            var last_r9 = ctx_r44.last;
            var ctx_r10 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !(config_r7 == null ? null : config_r7.minimumShowLimit) && ctx_r10.tempFilter[config_r7.filterBy].length > 0 || ctx_r10.tempFilter[config_r7.filterBy].length > (config_r7 == null ? null : config_r7.minimumShowLimit) && (config_r7 == null ? null : config_r7.isShowFilter) && (config_r7 == null ? null : config_r7.filterType) == "checkBoxes" && ctx_r10.tempFilter[config_r7.filterBy].length > 0 || (config_r7 == null ? null : config_r7.filterType) == "range_slider" && ctx_r10.tempFilter[config_r7.filterBy].maxValue > 0);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", (config_r7 == null ? null : config_r7.isShowFilter) && (config_r7 == null ? null : config_r7.filterType) == "checkBoxes" && (!(config_r7 == null ? null : config_r7.minimumShowLimit) || ctx_r10.tempFilter[config_r7.filterBy].length > (config_r7 == null ? null : config_r7.minimumShowLimit)));
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", (config_r7 == null ? null : config_r7.isShowFilter) && (config_r7 == null ? null : config_r7.filterType) == "range_slider" && ctx_r10.tempFilter[config_r7.filterBy].maxValue > 0);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", !last_r9 && (!(config_r7 == null ? null : config_r7.minimumShowLimit) || ctx_r10.tempFilter[config_r7.filterBy].length > (config_r7 == null ? null : config_r7.minimumShowLimit) && (config_r7 == null ? null : config_r7.isShowFilter) && (config_r7 == null ? null : config_r7.filterType) == "checkBoxes" || (config_r7 == null ? null : config_r7.filterType) == "range_slider"));
        }
    }
    function NgxFilterSearchComponent_div_0_div_9_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵtemplate(1, NgxFilterSearchComponent_div_0_div_9_div_1_div_1_Template, 5, 4, "div", 7);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var config_r7 = ctx.$implicit;
            var ctx_r6 = i0__namespace.ɵɵnextContext(3);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngIf", (config_r7 == null ? null : config_r7.isShowFilter) && ctx_r6.tempFilter[config_r7.filterBy]);
        }
    }
    function NgxFilterSearchComponent_div_0_div_9_Template(rf, ctx) {
        if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div");
            i0__namespace.ɵɵtemplate(1, NgxFilterSearchComponent_div_0_div_9_div_1_Template, 2, 1, "div", 13);
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0__namespace.ɵɵnextContext(2);
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵproperty("ngForOf", ctx_r2.config.filter.filterParameter);
        }
    }
    function NgxFilterSearchComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r46_1 = i0__namespace.ɵɵgetCurrentView();
            i0__namespace.ɵɵelementStart(0, "div", 1);
            i0__namespace.ɵɵelementStart(1, "div", 2);
            i0__namespace.ɵɵelementStart(2, "div", 3);
            i0__namespace.ɵɵelement(3, "div", 4);
            i0__namespace.ɵɵelementStart(4, "div", 4);
            i0__namespace.ɵɵelementStart(5, "h6", 5);
            i0__namespace.ɵɵlistener("click", function NgxFilterSearchComponent_div_0_Template_h6_click_5_listener() { i0__namespace.ɵɵrestoreView(_r46_1); var ctx_r45 = i0__namespace.ɵɵnextContext(); return ctx_r45.clearAllFilters(); });
            i0__namespace.ɵɵtext(6, "Clear All");
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵtemplate(7, NgxFilterSearchComponent_div_0_div_7_Template, 6, 1, "div", 6);
            i0__namespace.ɵɵelement(8, "hr");
            i0__namespace.ɵɵtemplate(9, NgxFilterSearchComponent_div_0_div_9_Template, 2, 1, "div", 7);
            i0__namespace.ɵɵelementEnd();
            i0__namespace.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0__namespace.ɵɵnextContext();
            i0__namespace.ɵɵadvance(7);
            i0__namespace.ɵɵproperty("ngIf", ctx_r0.config == null ? null : ctx_r0.config.search == null ? null : ctx_r0.config.search.isSearchShow);
            i0__namespace.ɵɵadvance(2);
            i0__namespace.ɵɵproperty("ngIf", (ctx_r0.config == null ? null : ctx_r0.config.filter == null ? null : ctx_r0.config.filter.isShowFilter) && ctx_r0.tempFilter);
        }
    }
    var NgxFilterSearchComponent = /** @class */ (function () {
        function NgxFilterSearchComponent() {
            this.filteredData = new i0.EventEmitter();
            this.tempFilter = {};
            this.allSelectedFilters = [];
            this.filter = 'all';
            this.sort = 'lot_number_low';
            this.isSorted = false;
            this.defaultFilter = 'all';
            this.defaultSort = 'lot_number_low';
            this.defaultSearch = '';
            this.value = 30;
            this.tooltip = { placement: 'Before', isVisible: true, showOn: 'Always' };
            this.ticks = { placement: 'After', largeStep: 20, smallStep: 10, showSmallTicks: true };
            this.step = 50;
        }
        NgxFilterSearchComponent.prototype.ngOnInit = function () {
            if (this.data && this.config) {
                this.setFilterConfig(this.data);
                this.filterData = this.data;
            }
            else {
                console.log('please Add the data and config');
            }
        };
        NgxFilterSearchComponent.prototype.setFilterConfig = function (data) {
            for (var i = data.length - 1; i >= 0; i--) {
                var statusName = void 0;
                data[i]['statusName'] = statusName;
                // Create the key for the custom fields.... Add the custom_ before each custom filed name...
                if (data[i].customFields && !___namespace.isEmpty(data[i].customFields)) {
                    var customFields = data[i].customFields;
                    for (var item in customFields) {
                        if (customFields[item].showFilter) {
                            // Create the unique key for the custom fields.
                            var key = 'custom_' + item;
                            // Change the config for the the display name want to show different.
                            var c = ___namespace.get(this.config.fieldsConfigCustomChanges, key);
                            if (c) {
                                // Code for adding the empty data as the not dated lots....
                                var value = customFields[item].value == c.value ? c.replaceValue : customFields[item].value;
                                var name = customFields[item].value == c.value ? c.displayName : customFields[item].value;
                                data[i]['custom_' + customFields[item].name] = value;
                                data[i]['custom_display_' + customFields[item].name] = name;
                            }
                            else {
                                data[i]['custom_' + customFields[item].name] = customFields[item].value;
                            }
                        }
                    }
                }
                this.setCheckBoxFilter(data[i]);
            }
            this.sortCheckBoxesFilter();
        };
        NgxFilterSearchComponent.prototype.setCheckBoxFilter = function (data) {
            // Checked the filter parameter
            if (this.config.filter && this.config.filter.filterParameter) {
                var _loop_1 = function (j) {
                    configIndex = this_1.config.filter.filterParameter[j];
                    // var fieldType = this.config.filter.filterParameter[j].fieldType;
                    if (configIndex.isShowFilter) {
                        key = configIndex.filterBy;
                        isRangeFilterWithDiffValue = false;
                        //data.hasOwnProperty(configIndex.lowValueFieldName) &&  data.hasOwnProperty(configIndex.highValueFieldName)
                        if (data.hasOwnProperty(configIndex.lowValueFieldValue) && data.hasOwnProperty(configIndex.highValueFieldValue)) {
                            isRangeFilterWithDiffValue = true;
                        }
                        else {
                            isRangeFilterWithDiffValue = false;
                        }
                        if (data.hasOwnProperty(key) || isRangeFilterWithDiffValue) {
                            if (this_1.tempFilter.hasOwnProperty(key)) {
                                if ((data[configIndex.fieldName] && data[configIndex.fieldValue]) || (isRangeFilterWithDiffValue)) {
                                    var obj = {};
                                    if (configIndex.filterType == 'checkBoxes') {
                                        obj['filterBy'] = key;
                                        obj['fieldName'] = data[configIndex.fieldName];
                                        obj['fieldValue'] = configIndex.dataType == Number ? Number(data[configIndex.fieldValue]) : data[configIndex.fieldValue];
                                        obj['isChecked'] = false;
                                        //console.log( obj['fieldValue'], 'OBJ FIELDS VALUE')
                                        self = this_1;
                                        isPresent = this_1.tempFilter[key].some(function (el) { return el['fieldValue'] == data[self.config.filter.filterParameter[j].fieldValue]; });
                                        if (!isPresent) {
                                            self.tempFilter[self.config.filter.filterParameter[j].filterBy].push(obj);
                                        }
                                    }
                                    else if (configIndex.filterType == 'range_slider') {
                                        var previousMin = this_1.tempFilter[key].minValue;
                                        var previousMax = this_1.tempFilter[key].maxValue;
                                        var currentMinValue = Number(data[configIndex.lowValueFieldValue]);
                                        var currentMaxValue = Number(data[configIndex.highValueFieldValue]);
                                        var min = previousMin < currentMinValue ? previousMin : currentMinValue;
                                        var max = previousMax > currentMaxValue ? previousMax : currentMaxValue;
                                        this_1.tempFilter[key]['minValue'] = min;
                                        this_1.tempFilter[key]['maxValue'] = max;
                                        this_1.tempFilter[key]['rangeValue'] = [];
                                        this_1.tempFilter[key]['defaultRangeValue'] = [];
                                        this_1.tempFilter[key]['dropDownRangeValues'] = [];
                                        this_1.tempFilter[key]['rangeValue'].push(min);
                                        this_1.tempFilter[key]['rangeValue'].push(max);
                                        var smallStep = configIndex.step ? (configIndex.step * 2) : 100;
                                        var largeStep = configIndex.step || 50;
                                        var diff = max - min;
                                        this_1.tempFilter[key]['smallStep'] = diff / smallStep;
                                        this_1.tempFilter[key]['largeStep'] = diff / largeStep;
                                        this_1.tempFilter[key]['ticks'] = { placement: 'After', largeStep: diff / largeStep, smallStep: diff / smallStep, showSmallTicks: true, showLargeTicks: false };
                                        this_1.tempFilter[key]['defaultRangeValue'].push(min);
                                        this_1.tempFilter[key]['defaultRangeValue'].push(max);
                                        this_1.tempFilter[key]['dropDownRangeValues'].push(min);
                                        this_1.tempFilter[key]['dropDownRangeValues'].push(max);
                                        this_1.tempFilter[key]['rangeStep'] = smallStep; //diff / smallStep;
                                        //   filterArrayRangeFilter
                                        // showOn: 'Always'
                                        this_1.tempFilter[key]['dropdown'] = [];
                                        var dropdownValue = min;
                                        for (var k = 0; k <= smallStep; k++) {
                                            this_1.tempFilter[key]['dropdown'].push(dropdownValue);
                                            dropdownValue = (diff / smallStep) + dropdownValue;
                                        }
                                        this_1.tempFilter[key]['dropdown'] = ___namespace.uniq(this_1.tempFilter[key]['dropdown']);
                                    }
                                }
                            }
                            else {
                                var obj = {};
                                if (configIndex.isShowFilter) {
                                    if ((data[configIndex.fieldName] && data[configIndex.fieldValue]) || (isRangeFilterWithDiffValue)) {
                                        this_1.tempFilter[key] = [];
                                        this_1.tempFilter[key]['filterTitle'] = configIndex.filterTitle;
                                        this_1.tempFilter[key]['isShowFilter'] = configIndex.isShowFilter;
                                        this_1.tempFilter[key]['filterBy'] = key;
                                        this_1.tempFilter[key]['filterValuesSorting'] = configIndex.filterValuesSorting;
                                        this_1.tempFilter[key]['filterSortDirection'] = configIndex.filterSortDirection;
                                        this_1.tempFilter[key]['isShowMore'] = false;
                                        this_1.tempFilter[key]['filterCheckBoxLimit'] = configIndex.filterCheckBoxLimit;
                                        this_1.tempFilter[key]['filterType'] = configIndex.filterType;
                                        if (configIndex.filterType == 'checkBoxes') {
                                            obj['filterBy'] = key;
                                            obj['fieldName'] = data[configIndex.fieldName];
                                            obj['fieldValue'] = configIndex.dataType == Number ? Number(data[configIndex.fieldValue]) : data[configIndex.fieldValue];
                                            obj['isChecked'] = false;
                                            this_1.tempFilter[key].push(obj);
                                        }
                                        else if (configIndex.filterType == 'range_slider') {
                                            this_1.tempFilter[key]['filterByLowValue'] = configIndex.filterByLowValue;
                                            this_1.tempFilter[key]['filterByHighValue'] = configIndex.filterByHighValue;
                                            this_1.tempFilter[key]['rangeValue'] = [];
                                            this_1.tempFilter[key]['defaultRangeValue'] = [];
                                            this_1.tempFilter[key]['dropDownRangeValues'] = [];
                                            var min = Number(data[configIndex.lowValueFieldValue]);
                                            var max = Number(data[configIndex.highValueFieldValue]);
                                            this_1.tempFilter[key]['minValue'] = min;
                                            this_1.tempFilter[key]['maxValue'] = max;
                                            this_1.tempFilter[key]['rangeValue'].push(min);
                                            this_1.tempFilter[key]['rangeValue'].push(max);
                                            this_1.tempFilter[key]['defaultRangeValue'].push(min);
                                            this_1.tempFilter[key]['defaultRangeValue'].push(max);
                                            this_1.tempFilter[key]['dropDownRangeValues'].push(min);
                                            this_1.tempFilter[key]['dropDownRangeValues'].push(max);
                                            var step = configIndex.step || 100;
                                            this_1.tempFilter[key]['dropdown'] = [];
                                            this_1.tempFilter[key]['rangeStep'] = configIndex.step * 2; //(min + max) / step;
                                        }
                                    }
                                }
                            }
                        }
                    }
                };
                var this_1 = this, configIndex, key, isRangeFilterWithDiffValue, self, isPresent;
                for (var j = this.config.filter.filterParameter.length - 1; j >= 0; j--) {
                    _loop_1(j);
                }
            }
        };
        NgxFilterSearchComponent.prototype.sortCheckBoxesFilter = function () {
            for (var j = this.config.filter.filterParameter.length - 1; j >= 0; j--) {
                if (this.config.filter.filterParameter[j].isShowFilter) {
                    if (this.tempFilter.hasOwnProperty(this.config.filter.filterParameter[j].filterBy)) {
                        if (this.tempFilter[this.config.filter.filterParameter[j].filterBy].filterValuesSorting
                            && this.tempFilter[this.config.filter.filterParameter[j].filterBy].filterSortDirection
                            && this.tempFilter[this.config.filter.filterParameter[j].filterBy].filterType == 'checkBoxes') {
                            var sortDirection = ___namespace.lowerCase(this.tempFilter[this.config.filter.filterParameter[j].filterBy].filterSortDirection);
                            sortDirection = sortDirection == 'asc' ? sortDirection : 'desc';
                            var direction = [];
                            direction.push(sortDirection);
                            var pickArray = ___namespace.pick(this.tempFilter[this.config.filter.filterParameter[j].filterBy], ['filterTitle', 'isShowFilter', 'filterBy', 'filterValuesSorting',
                                'filterSortDirection', 'isShowMore', 'filterCheckBoxLimit', 'filterType']);
                            var sorted = ___namespace.orderBy(this.tempFilter[this.config.filter.filterParameter[j].filterBy], ['fieldValue'], direction);
                            this.tempFilter[this.config.filter.filterParameter[j].filterBy] = sorted;
                            this.tempFilter[this.config.filter.filterParameter[j].filterBy]['filterTitle'] = pickArray.filterTitle;
                            this.tempFilter[this.config.filter.filterParameter[j].filterBy]['isShowFilter'] = pickArray.isShowFilter;
                            this.tempFilter[this.config.filter.filterParameter[j].filterBy]['filterBy'] = pickArray.filterBy;
                            this.tempFilter[this.config.filter.filterParameter[j].filterBy]['filterValuesSorting'] = pickArray.filterValuesSorting;
                            this.tempFilter[this.config.filter.filterParameter[j].filterBy]['filterSortDirection'] = pickArray.filterSortDirection;
                            this.tempFilter[this.config.filter.filterParameter[j].filterBy]['isShowMore'] = false;
                            this.tempFilter[this.config.filter.filterParameter[j].filterBy]['filterCheckBoxLimit'] = pickArray.filterCheckBoxLimit;
                            this.tempFilter[this.config.filter.filterParameter[j].filterBy]['filterType'] = pickArray.filterType;
                        }
                    }
                }
            }
        };
        NgxFilterSearchComponent.prototype.applyFilter = function () {
            var _this = this;
            // Assign the original array without any filter to the newLots
            var newLots = this.data;
            // Check the searchText is not undefined and then search the by provided fields.
            if (this.searchText !== undefined) {
                this.searchText = this.searchText.toLocaleLowerCase();
                var mainSearchArray = [];
                var _loop_2 = function (j) {
                    var searchArray = [];
                    searchArray = this_2.data.filter(function (it) {
                        if (it[_this.config.search.searchParameter[j].searchBy] != null && it[_this.config.search.searchParameter[j].searchBy] != undefined) {
                            return it[_this.config.search.searchParameter[j].searchBy].toLocaleLowerCase().includes(_this.searchText);
                        }
                    });
                    // Push the each search result...
                    if (searchArray.length > 0) {
                        mainSearchArray.push.apply(mainSearchArray, __spread(searchArray));
                    }
                    // Assign the searched Array to the lots Array.
                    newLots = mainSearchArray;
                };
                var this_2 = this;
                // Search In the all fields given in the config of the search.
                for (var j = this.config.search.searchParameter.length - 1; j >= 0; j--) {
                    _loop_2(j);
                }
            }
            var allSelectedCheckBoxesArray = [];
            var allSelectedRangeFilterArray = [];
            // Check the config for the filter....
            for (var j = this.config.filter.filterParameter.length - 1; j >= 0; j--) {
                // Check the status of the filter
                if (this.config.filter.filterParameter[j].isShowFilter) {
                    if (this.tempFilter.hasOwnProperty(this.config.filter.filterParameter[j].filterBy) && this.tempFilter[this.config.filter.filterParameter[j].filterBy].filterType == 'checkBoxes') {
                        // Filter the checked Values
                        this.selectedLotStatusFilter = this.tempFilter[this.config.filter.filterParameter[j].filterBy].filter(function (value, index) {
                            return value.isChecked;
                        });
                        // Push the all checked values in same array
                        allSelectedCheckBoxesArray.push(this.selectedLotStatusFilter);
                    }
                    else if (this.tempFilter.hasOwnProperty(this.config.filter.filterParameter[j].filterBy) && this.tempFilter[this.config.filter.filterParameter[j].filterBy].filterType == 'range_slider') {
                        // If filter type is the Range filter then push the data in the range filter.
                        allSelectedRangeFilterArray.push(this.tempFilter[this.config.filter.filterParameter[j].filterBy]);
                    }
                }
            }
            var singleTypeFilterArray = [];
            this.allSelectedFilters = allSelectedCheckBoxesArray;
            //Filter the data based on checkboxes
            if (allSelectedCheckBoxesArray.length > 0) {
                // Filter the each array at a time, In config multiple filters.
                singleTypeFilterArray = this.filterSingle(newLots, allSelectedCheckBoxesArray);
                newLots = singleTypeFilterArray;
            }
            else {
                newLots = newLots;
            }
            var singleRangeSliderFilter = [];
            // Filter the data based on the range filter.
            if (allSelectedRangeFilterArray.length > 0) {
                // Filter the each array at a time, In config multiple filters.
                singleRangeSliderFilter = this.filterSingleRangeFilter(newLots, allSelectedRangeFilterArray);
                newLots = singleRangeSliderFilter;
            }
            else {
                newLots = newLots;
            }
            this.filterData = [];
            this.filterData = newLots;
            // Check the Sorting is applied if Yes then sort the array after filter.
            if (this.isSorted) {
                //this.sortLots();
            }
            else {
                this.filteredData.emit(this.filterData);
            }
            // Emit the value to the parent component
            //this.addFilterToRoute()
        };
        NgxFilterSearchComponent.prototype.filterSingle = function (data, selectedCheckBoxesArrays) {
            for (var k = selectedCheckBoxesArrays.length - 1; k >= 0; k--) {
                var newData = [];
                if (selectedCheckBoxesArrays[k].length > 0) {
                    data = this.filterArrayBasedOnCheckBoxes(data, selectedCheckBoxesArrays[k]);
                    if (data.length > 0) {
                        newData.push.apply(newData, __spread(data));
                        data = newData;
                    }
                    else {
                        data = [];
                    }
                }
            }
            return this.uniqueValuesInArray(data);
        };
        NgxFilterSearchComponent.prototype.filterSingleRangeFilter = function (data, selectedRangeFilterArrays) {
            for (var k = selectedRangeFilterArrays.length - 1; k >= 0; k--) {
                var newData = [];
                if (___namespace.isObject(selectedRangeFilterArrays[k])) {
                    data = this.filterArrayRangeFilter(data, selectedRangeFilterArrays[k]);
                    if (data.length > 0) {
                        newData.push.apply(newData, __spread(data));
                        data = newData;
                    }
                    else {
                        data = [];
                    }
                }
            }
            return this.uniqueValuesInArray(data);
        };
        NgxFilterSearchComponent.prototype.filterArrayBasedOnCheckBoxes = function (lotsArray, selectedCheckBoxesArrays) {
            var filtered = [];
            for (var lots in lotsArray) {
                if (selectedCheckBoxesArrays.length > 0) {
                    selectedCheckBoxesArrays.forEach(function (element) {
                        if (lotsArray[lots][element.filterBy] == element.fieldValue) {
                            if (filtered.length > 0) {
                                filtered.push(lotsArray[lots]);
                            }
                            else {
                                filtered.push(lotsArray[lots]);
                            }
                        }
                    });
                }
            }
            return this.uniqueValuesInArray(filtered);
        };
        NgxFilterSearchComponent.prototype.uniqueValuesInArray = function (data) {
            var _this = this;
            var uniqueValues = data.filter(function (element, index) { return data.findIndex(function (obj) { return obj[_this.config.filter.uniqueColumn] == element[_this.config.filter.uniqueColumn]; }) == index; });
            return uniqueValues;
        };
        NgxFilterSearchComponent.prototype.filterArrayRangeFilter = function (lotsArray, rangeFilterArrays) {
            var filtered = [];
            for (var lots in lotsArray) {
                var min = rangeFilterArrays.rangeValue[0];
                var max = rangeFilterArrays.rangeValue[1];
                var minValueIndex = Number(lotsArray[lots][rangeFilterArrays.filterByLowValue]);
                var maxValueIndex = Number(lotsArray[lots][rangeFilterArrays.filterByHighValue]);
                if ((minValueIndex >= min && minValueIndex <= max && maxValueIndex >= min && maxValueIndex <= max)) {
                    filtered.push(lotsArray[lots]);
                }
            }
            //rangeFilterArrays.dropDownRangeValues = rangeFilterArrays.rangeValue;
            return this.uniqueValuesInArray(filtered);
        };
        NgxFilterSearchComponent.prototype.clearSingleFilters = function (filterBy, filterType) {
            if (filterBy && filterType == 'checkBoxes') {
                this.unCheckedCheckBoxes(this.tempFilter[filterBy]);
            }
            else if (filterBy && filterType == 'range_slider') {
                this.clearRangeSliderFilter(this.tempFilter[filterBy]);
            }
            this.applyFilter();
        };
        NgxFilterSearchComponent.prototype.clearAllFilters = function () {
            this.filterData = [];
            this.sort = this.defaultSort;
            this.searchText = this.defaultSearch;
            for (var j = this.config.filter.filterParameter.length - 1; j >= 0; j--) {
                if (this.config.filter.filterParameter[j].isShowFilter) {
                    if ((this.tempFilter.hasOwnProperty(this.config.filter.filterParameter[j].filterBy) &&
                        (this.tempFilter[this.config.filter.filterParameter[j].filterBy].filterType === 'checkBoxes'))) {
                        this.unCheckedCheckBoxes(this.tempFilter[this.config.filter.filterParameter[j].filterBy]);
                    }
                    else if ((this.tempFilter.hasOwnProperty(this.config.filter.filterParameter[j].filterBy) &&
                        (this.tempFilter[this.config.filter.filterParameter[j].filterBy].filterType === 'range_slider'))) {
                        this.clearRangeSliderFilter(this.tempFilter[this.config.filter.filterParameter[j].filterBy]);
                    }
                }
            }
            this.filterData = this.data;
            this.filteredData.emit(this.filterData);
        };
        NgxFilterSearchComponent.prototype.unCheckedCheckBoxes = function (data) {
            data.forEach(function (element) {
                element.isChecked = false;
            });
        };
        NgxFilterSearchComponent.prototype.clearRangeSliderFilter = function (data) {
            data.rangeValue = data.defaultRangeValue;
            data.dropDownRangeValues = [];
            data.dropDownRangeValues = data.defaultRangeValue;
        };
        NgxFilterSearchComponent.prototype.showMoreItems = function (filterBy, showStatus) {
            if (showStatus) {
                this.tempFilter[filterBy]['filterCheckBoxLimit'] = this.tempFilter[filterBy].length;
                this.tempFilter[filterBy]['isShowMore'] = true;
            }
            else if (!showStatus) {
                this.tempFilter[filterBy]['isShowMore'] = false;
            }
        };
        NgxFilterSearchComponent.prototype.rangeDropDownOnChange = function (data) {
            data.rangeValue = data.dropDownRangeValues;
            this.applyFilter();
        };
        NgxFilterSearchComponent.prototype.sliderChange = function (data) {
            data.dropDownRangeValues = data.rangeValue;
        };
        return NgxFilterSearchComponent;
    }());
    NgxFilterSearchComponent.ɵfac = function NgxFilterSearchComponent_Factory(t) { return new (t || NgxFilterSearchComponent)(); };
    NgxFilterSearchComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: NgxFilterSearchComponent, selectors: [["ngx-filter-search"]], inputs: { data: "data", config: "config" }, outputs: { filteredData: "filteredData" }, decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-sm-12"], [1, "row", "pt-1", "pb-1"], [1, "col-sm-6"], [1, "float-right", "cursor-pointer", "text-primary", 3, "click"], ["class", "pt-1 pb-1", 4, "ngIf"], [4, "ngIf"], [1, "pt-1", "pb-1"], [1, "pt-2", "pb-2", "font-weight-bold", "text-capitalize"], [1, "input-group", "pt-1"], [1, "form-outline"], ["type", "text", "id", "form1", "placeholder", "Search Keyword...", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [4, "ngFor", "ngForOf"], ["class", "row pt-1 pb-1", 4, "ngIf"], [1, "col-sm-8", "float-left"], [1, "font-weight-bold"], [1, "col-sm-4"], [1, "float-right", "cursor-pointer", "text-primary", "clear", 3, "click"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], ["type", "checkbox", 3, "id", "name", "value", "ngModel", "ngModelChange", "change"], [1, "pl-2", "font-small"], ["class", "cursor-pointer text-primary pt-1", 3, "click", 4, "ngIf"], [1, "cursor-pointer", "text-primary", "pt-1", 3, "click"], [1, "min"], ["id", "range", 3, "value", "min", "max", "step", "type", "valueChange", "change", "changed"]], template: function NgxFilterSearchComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵtemplate(0, NgxFilterSearchComponent_div_0_Template, 10, 2, "div", 0);
            }
            if (rf & 2) {
                i0__namespace.ɵɵproperty("ngIf", ctx.data && ctx.config);
            }
        }, directives: [i1__namespace.NgIf, i2__namespace.DefaultValueAccessor, i2__namespace.NgControlStatus, i2__namespace.NgModel, i1__namespace.NgForOf, i2__namespace.CheckboxControlValueAccessor, i3__namespace.SliderComponent], pipes: [i1__namespace.SlicePipe], styles: ["@import \"node_modules/@syncfusion/ej2-angular-inputs/styles/material.css\";@import \"node_modules/@syncfusion/ej2-base/styles/material.css\";@import \"node_modules/@syncfusion/ej2-buttons/styles/material.css\";@import \"node_modules/@syncfusion/ej2-popups/styles/material.css\";"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NgxFilterSearchComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ngx-filter-search',
                        styleUrls: ['./ngx-filter-search.component.scss'],
                        templateUrl: './ngx-filter-search.component.html',
                    }]
            }], function () { return []; }, { data: [{
                    type: i0.Input
                }], config: [{
                    type: i0.Input
                }], filteredData: [{
                    type: i0.Output
                }] });
    })();

    var NgxFilterSearchModule = /** @class */ (function () {
        function NgxFilterSearchModule() {
        }
        return NgxFilterSearchModule;
    }());
    NgxFilterSearchModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: NgxFilterSearchModule });
    NgxFilterSearchModule.ɵinj = i0__namespace.ɵɵdefineInjector({ factory: function NgxFilterSearchModule_Factory(t) { return new (t || NgxFilterSearchModule)(); }, imports: [[
                platformBrowser.BrowserModule,
                i1.CommonModule,
                i3.SliderModule,
                i2.FormsModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(NgxFilterSearchModule, { declarations: [NgxFilterSearchComponent], imports: [platformBrowser.BrowserModule,
                i1.CommonModule,
                i3.SliderModule,
                i2.FormsModule], exports: [NgxFilterSearchComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(NgxFilterSearchModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [NgxFilterSearchComponent],
                        imports: [
                            platformBrowser.BrowserModule,
                            i1.CommonModule,
                            i3.SliderModule,
                            i2.FormsModule,
                        ],
                        exports: [NgxFilterSearchComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of ngx-filter-search
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgxFilterSearchComponent = NgxFilterSearchComponent;
    exports.NgxFilterSearchModule = NgxFilterSearchModule;
    exports.NgxFilterSearchService = NgxFilterSearchService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-filter-search.umd.js.map

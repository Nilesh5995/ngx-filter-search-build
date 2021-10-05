import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as _ from 'lodash';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/forms';
import { FormsModule } from '@angular/forms';
import * as i3 from '@syncfusion/ej2-angular-inputs';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';
import { BrowserModule } from '@angular/platform-browser';

class NgxFilterSearchService {
    constructor() { }
}
NgxFilterSearchService.ɵfac = function NgxFilterSearchService_Factory(t) { return new (t || NgxFilterSearchService)(); };
NgxFilterSearchService.ɵprov = i0.ɵɵdefineInjectable({ token: NgxFilterSearchService, factory: NgxFilterSearchService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxFilterSearchService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

function NgxFilterSearchComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "strong", 9);
    i0.ɵɵtext(2, "Search");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 10);
    i0.ɵɵelementStart(4, "div", 11);
    i0.ɵɵelementStart(5, "input", 12);
    i0.ɵɵlistener("ngModelChange", function NgxFilterSearchComponent_div_0_div_7_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(2); return ctx_r3.searchText = $event; })("keyup", function NgxFilterSearchComponent_div_0_div_7_Template_input_keyup_5_listener() { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.applyFilter(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngModel", ctx_r1.searchText);
} }
function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "div", 15);
    i0.ɵɵelementStart(2, "strong", 16);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 17);
    i0.ɵɵelementStart(5, "h6", 18);
    i0.ɵɵlistener("click", function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_1_Template_h6_click_5_listener() { i0.ɵɵrestoreView(_r16); const config_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r15 = i0.ɵɵnextContext(3); return ctx_r15.clearSingleFilters(ctx_r15.tempFilter[config_r7.filterBy].filterBy, ctx_r15.tempFilter[config_r7.filterBy].filterType); });
    i0.ɵɵtext(6, "Clear");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const config_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r11 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r11.tempFilter[config_r7.filterBy] == null ? null : ctx_r11.tempFilter[config_r7.filterBy].filterTitle);
} }
function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵelementStart(1, "input", 21);
    i0.ɵɵlistener("ngModelChange", function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_1_Template_input_ngModelChange_1_listener($event) { const filter_r21 = ctx.$implicit; return filter_r21.isChecked = $event; })("change", function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_1_Template_input_change_1_listener() { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(6); return ctx_r24.applyFilter(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 22);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const filter_r21 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", filter_r21.fieldName)("name", filter_r21.fieldName)("value", filter_r21.fieldValue)("ngModel", filter_r21.isChecked);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", filter_r21.fieldName, " ");
} }
function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_3_h6_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "h6", 24);
    i0.ɵɵlistener("click", function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_3_h6_1_Template_h6_click_0_listener() { i0.ɵɵrestoreView(_r29); const config_r7 = i0.ɵɵnextContext(4).$implicit; const ctx_r28 = i0.ɵɵnextContext(3); return ctx_r28.showMoreItems(ctx_r28.tempFilter[config_r7.filterBy].filterBy, true); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const config_r7 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r26 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r26.tempFilter[config_r7.filterBy].length - config_r7.filterCheckBoxLimit, " More ");
} }
function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_3_h6_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "h6", 24);
    i0.ɵɵlistener("click", function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_3_h6_2_Template_h6_click_0_listener() { i0.ɵɵrestoreView(_r33); const config_r7 = i0.ɵɵnextContext(4).$implicit; const ctx_r32 = i0.ɵɵnextContext(3); return ctx_r32.showMoreItems(ctx_r32.tempFilter[config_r7.filterBy].filterBy, false); });
    i0.ɵɵtext(1, " Show Less ");
    i0.ɵɵelementEnd();
} }
function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_3_h6_1_Template, 2, 1, "h6", 23);
    i0.ɵɵtemplate(2, NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_3_h6_2_Template, 2, 0, "h6", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const config_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r20 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r20.tempFilter[config_r7.filterBy].isShowMore);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.tempFilter[config_r7.filterBy].isShowMore);
} }
function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_1_Template, 4, 5, "div", 19);
    i0.ɵɵpipe(2, "slice");
    i0.ɵɵtemplate(3, NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_div_3_Template, 3, 2, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const config_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r12 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind3(2, 2, ctx_r12.tempFilter[config_r7.filterBy], 0, !ctx_r12.tempFilter[config_r7.filterBy].isShowMore ? config_r7.filterCheckBoxLimit : ctx_r12.tempFilter[config_r7.filterBy].filterCheckBoxLimit));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r12.tempFilter[config_r7.filterBy].length > (config_r7 == null ? null : config_r7.filterCheckBoxLimit));
} }
function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "span", 25);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "ejs-slider", 26);
    i0.ɵɵlistener("valueChange", function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_3_Template_ejs_slider_valueChange_4_listener($event) { i0.ɵɵrestoreView(_r38); const config_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r37 = i0.ɵɵnextContext(3); return ctx_r37.tempFilter[config_r7.filterBy].rangeValue = $event; })("change", function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_3_Template_ejs_slider_change_4_listener() { i0.ɵɵrestoreView(_r38); const config_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r40 = i0.ɵɵnextContext(3); return ctx_r40.sliderChange(ctx_r40.tempFilter[config_r7 == null ? null : config_r7.filterBy]); })("changed", function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_3_Template_ejs_slider_changed_4_listener() { i0.ɵɵrestoreView(_r38); const ctx_r42 = i0.ɵɵnextContext(5); return ctx_r42.applyFilter(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const config_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r13 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", ctx_r13.tempFilter[config_r7.filterBy].rangeValue[0], " - ", ctx_r13.tempFilter[config_r7.filterBy].rangeValue[1], " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r13.tempFilter[config_r7.filterBy].rangeValue)("min", ctx_r13.tempFilter[config_r7.filterBy].minValue)("max", ctx_r13.tempFilter[config_r7.filterBy].maxValue)("step", ctx_r13.tempFilter[config_r7.filterBy].rangeStep)("type", "Range");
} }
function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_hr_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr");
} }
function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_1_Template, 7, 1, "div", 14);
    i0.ɵɵtemplate(2, NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_Template, 4, 6, "div", 7);
    i0.ɵɵtemplate(3, NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_3_Template, 5, 7, "div", 7);
    i0.ɵɵtemplate(4, NgxFilterSearchComponent_div_0_div_9_div_1_div_1_hr_4_Template, 1, 0, "hr", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r44 = i0.ɵɵnextContext();
    const config_r7 = ctx_r44.$implicit;
    const last_r9 = ctx_r44.last;
    const ctx_r10 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !(config_r7 == null ? null : config_r7.minimumShowLimit) && ctx_r10.tempFilter[config_r7.filterBy].length > 0 || ctx_r10.tempFilter[config_r7.filterBy].length > (config_r7 == null ? null : config_r7.minimumShowLimit) && (config_r7 == null ? null : config_r7.isShowFilter) && (config_r7 == null ? null : config_r7.filterType) == "checkBoxes" && ctx_r10.tempFilter[config_r7.filterBy].length > 0 || (config_r7 == null ? null : config_r7.filterType) == "range_slider" && ctx_r10.tempFilter[config_r7.filterBy].maxValue > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (config_r7 == null ? null : config_r7.isShowFilter) && (config_r7 == null ? null : config_r7.filterType) == "checkBoxes" && (!(config_r7 == null ? null : config_r7.minimumShowLimit) || ctx_r10.tempFilter[config_r7.filterBy].length > (config_r7 == null ? null : config_r7.minimumShowLimit)));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (config_r7 == null ? null : config_r7.isShowFilter) && (config_r7 == null ? null : config_r7.filterType) == "range_slider" && ctx_r10.tempFilter[config_r7.filterBy].maxValue > 0);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !last_r9 && (!(config_r7 == null ? null : config_r7.minimumShowLimit) || ctx_r10.tempFilter[config_r7.filterBy].length > (config_r7 == null ? null : config_r7.minimumShowLimit) && (config_r7 == null ? null : config_r7.isShowFilter) && (config_r7 == null ? null : config_r7.filterType) == "checkBoxes" || (config_r7 == null ? null : config_r7.filterType) == "range_slider"));
} }
function NgxFilterSearchComponent_div_0_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, NgxFilterSearchComponent_div_0_div_9_div_1_div_1_Template, 5, 4, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const config_r7 = ctx.$implicit;
    const ctx_r6 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (config_r7 == null ? null : config_r7.isShowFilter) && ctx_r6.tempFilter[config_r7.filterBy]);
} }
function NgxFilterSearchComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, NgxFilterSearchComponent_div_0_div_9_div_1_Template, 2, 1, "div", 13);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.config.filter.filterParameter);
} }
function NgxFilterSearchComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵelement(3, "div", 4);
    i0.ɵɵelementStart(4, "div", 4);
    i0.ɵɵelementStart(5, "h6", 5);
    i0.ɵɵlistener("click", function NgxFilterSearchComponent_div_0_Template_h6_click_5_listener() { i0.ɵɵrestoreView(_r46); const ctx_r45 = i0.ɵɵnextContext(); return ctx_r45.clearAllFilters(); });
    i0.ɵɵtext(6, "Clear All");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, NgxFilterSearchComponent_div_0_div_7_Template, 6, 1, "div", 6);
    i0.ɵɵelement(8, "hr");
    i0.ɵɵtemplate(9, NgxFilterSearchComponent_div_0_div_9_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(7);
    i0.ɵɵproperty("ngIf", ctx_r0.config == null ? null : ctx_r0.config.search == null ? null : ctx_r0.config.search.isSearchShow);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (ctx_r0.config == null ? null : ctx_r0.config.filter == null ? null : ctx_r0.config.filter.isShowFilter) && ctx_r0.tempFilter);
} }
class NgxFilterSearchComponent {
    constructor() {
        this.filteredData = new EventEmitter();
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
    ngOnInit() {
        if (this.data && this.config) {
            this.setFilterConfig(this.data);
            this.filterData = this.data;
        }
        else {
            console.log('please Add the data and config');
        }
    }
    setFilterConfig(data) {
        for (let i = data.length - 1; i >= 0; i--) {
            let statusName;
            data[i]['statusName'] = statusName;
            // Create the key for the custom fields.... Add the custom_ before each custom filed name...
            if (data[i].customFields && !_.isEmpty(data[i].customFields)) {
                const customFields = data[i].customFields;
                for (const item in customFields) {
                    if (customFields[item].showFilter) {
                        // Create the unique key for the custom fields.
                        let key = 'custom_' + item;
                        // Change the config for the the display name want to show different.
                        const c = _.get(this.config.fieldsConfigCustomChanges, key);
                        if (c) {
                            // Code for adding the empty data as the not dated lots....
                            const value = customFields[item].value == c.value ? c.replaceValue : customFields[item].value;
                            const name = customFields[item].value == c.value ? c.displayName : customFields[item].value;
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
    }
    setCheckBoxFilter(data) {
        // Checked the filter parameter
        if (this.config.filter && this.config.filter.filterParameter) {
            for (let j = this.config.filter.filterParameter.length - 1; j >= 0; j--) {
                var configIndex = this.config.filter.filterParameter[j];
                if (configIndex.isShowFilter) {
                    var key = configIndex.filterBy;
                    var isRangeFilterWithDiffValue = false;
                    if (data.hasOwnProperty(configIndex.lowValueFieldValue) && data.hasOwnProperty(configIndex.highValueFieldValue)) {
                        isRangeFilterWithDiffValue = true;
                    }
                    else {
                        isRangeFilterWithDiffValue = false;
                    }
                    if (data.hasOwnProperty(key) || isRangeFilterWithDiffValue) {
                        if (this.tempFilter.hasOwnProperty(key)) {
                            if ((data[configIndex.fieldName] && data[configIndex.fieldValue]) || (isRangeFilterWithDiffValue)) {
                                let obj = {};
                                if (configIndex.filterType == 'checkBoxes') {
                                    obj['filterBy'] = key;
                                    obj['fieldName'] = data[configIndex.fieldName];
                                    obj['fieldValue'] = configIndex.dataType == Number ? Number(data[configIndex.fieldValue]) : data[configIndex.fieldValue];
                                    obj['isChecked'] = false;
                                    //console.log( obj['fieldValue'], 'OBJ FIELDS VALUE')
                                    var self = this;
                                    var isPresent = this.tempFilter[key].some(function (el) { return el['fieldValue'] == data[self.config.filter.filterParameter[j].fieldValue]; });
                                    if (!isPresent) {
                                        self.tempFilter[self.config.filter.filterParameter[j].filterBy].push(obj);
                                    }
                                }
                                else if (configIndex.filterType == 'range_slider') {
                                    let previousMin = this.tempFilter[key].minValue;
                                    let previousMax = this.tempFilter[key].maxValue;
                                    let currentMinValue = Number(data[configIndex.lowValueFieldValue]);
                                    let currentMaxValue = Number(data[configIndex.highValueFieldValue]);
                                    let min = previousMin < currentMinValue ? previousMin : currentMinValue;
                                    let max = previousMax > currentMaxValue ? previousMax : currentMaxValue;
                                    this.tempFilter[key]['minValue'] = min;
                                    this.tempFilter[key]['maxValue'] = max;
                                    this.tempFilter[key]['rangeValue'] = [];
                                    this.tempFilter[key]['defaultRangeValue'] = [];
                                    this.tempFilter[key]['dropDownRangeValues'] = [];
                                    this.tempFilter[key]['rangeValue'].push(min);
                                    this.tempFilter[key]['rangeValue'].push(max);
                                    let smallStep = configIndex.step ? (configIndex.step * 2) : 100;
                                    let largeStep = configIndex.step || 50;
                                    let diff = max - min;
                                    this.tempFilter[key]['smallStep'] = diff / smallStep;
                                    this.tempFilter[key]['largeStep'] = diff / largeStep;
                                    this.tempFilter[key]['ticks'] = { placement: 'After', largeStep: diff / largeStep, smallStep: diff / smallStep, showSmallTicks: true, showLargeTicks: false };
                                    this.tempFilter[key]['defaultRangeValue'].push(min);
                                    this.tempFilter[key]['defaultRangeValue'].push(max);
                                    this.tempFilter[key]['dropDownRangeValues'].push(min);
                                    this.tempFilter[key]['dropDownRangeValues'].push(max);
                                    this.tempFilter[key]['rangeStep'] = smallStep; //diff / smallStep;
                                    //   filterArrayRangeFilter
                                    // showOn: 'Always'
                                    this.tempFilter[key]['dropdown'] = [];
                                    let dropdownValue = min;
                                    for (let k = 0; k <= smallStep; k++) {
                                        this.tempFilter[key]['dropdown'].push(dropdownValue);
                                        dropdownValue = (diff / smallStep) + dropdownValue;
                                    }
                                    this.tempFilter[key]['dropdown'] = _.uniq(this.tempFilter[key]['dropdown']);
                                }
                            }
                        }
                        else {
                            let obj = {};
                            if (configIndex.isShowFilter) {
                                if ((data[configIndex.fieldName] && data[configIndex.fieldValue]) || (isRangeFilterWithDiffValue)) {
                                    this.tempFilter[key] = [];
                                    this.tempFilter[key]['filterTitle'] = configIndex.filterTitle;
                                    this.tempFilter[key]['isShowFilter'] = configIndex.isShowFilter;
                                    this.tempFilter[key]['filterBy'] = key;
                                    this.tempFilter[key]['filterValuesSorting'] = configIndex.filterValuesSorting;
                                    this.tempFilter[key]['filterSortDirection'] = configIndex.filterSortDirection;
                                    this.tempFilter[key]['isShowMore'] = false;
                                    this.tempFilter[key]['filterCheckBoxLimit'] = configIndex.filterCheckBoxLimit;
                                    this.tempFilter[key]['filterType'] = configIndex.filterType;
                                    if (configIndex.filterType == 'checkBoxes') {
                                        obj['filterBy'] = key;
                                        obj['fieldName'] = data[configIndex.fieldName];
                                        obj['fieldValue'] = configIndex.dataType == Number ? Number(data[configIndex.fieldValue]) : data[configIndex.fieldValue];
                                        obj['isChecked'] = false;
                                        this.tempFilter[key].push(obj);
                                    }
                                    else if (configIndex.filterType == 'range_slider') {
                                        this.tempFilter[key]['filterByLowValue'] = configIndex.filterByLowValue;
                                        this.tempFilter[key]['filterByHighValue'] = configIndex.filterByHighValue;
                                        this.tempFilter[key]['rangeValue'] = [];
                                        this.tempFilter[key]['defaultRangeValue'] = [];
                                        this.tempFilter[key]['dropDownRangeValues'] = [];
                                        let min = Number(data[configIndex.lowValueFieldValue]);
                                        let max = Number(data[configIndex.highValueFieldValue]);
                                        this.tempFilter[key]['minValue'] = min;
                                        this.tempFilter[key]['maxValue'] = max;
                                        this.tempFilter[key]['rangeValue'].push(min);
                                        this.tempFilter[key]['rangeValue'].push(max);
                                        this.tempFilter[key]['defaultRangeValue'].push(min);
                                        this.tempFilter[key]['defaultRangeValue'].push(max);
                                        this.tempFilter[key]['dropDownRangeValues'].push(min);
                                        this.tempFilter[key]['dropDownRangeValues'].push(max);
                                        let step = configIndex.step || 100;
                                        this.tempFilter[key]['dropdown'] = [];
                                        this.tempFilter[key]['rangeStep'] = configIndex.step * 2; //(min + max) / step;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    sortCheckBoxesFilter() {
        for (let j = this.config.filter.filterParameter.length - 1; j >= 0; j--) {
            if (this.config.filter.filterParameter[j].isShowFilter) {
                if (this.tempFilter.hasOwnProperty(this.config.filter.filterParameter[j].filterBy)) {
                    if (this.tempFilter[this.config.filter.filterParameter[j].filterBy].filterValuesSorting
                        && this.tempFilter[this.config.filter.filterParameter[j].filterBy].filterSortDirection
                        && this.tempFilter[this.config.filter.filterParameter[j].filterBy].filterType == 'checkBoxes') {
                        let sortDirection = _.lowerCase(this.tempFilter[this.config.filter.filterParameter[j].filterBy].filterSortDirection);
                        sortDirection = sortDirection == 'asc' ? sortDirection : 'desc';
                        let direction = [];
                        direction.push(sortDirection);
                        let pickArray = _.pick(this.tempFilter[this.config.filter.filterParameter[j].filterBy], ['filterTitle', 'isShowFilter', 'filterBy', 'filterValuesSorting',
                            'filterSortDirection', 'isShowMore', 'filterCheckBoxLimit', 'filterType']);
                        const sorted = _.orderBy(this.tempFilter[this.config.filter.filterParameter[j].filterBy], ['fieldValue'], direction);
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
    }
    applyFilter() {
        // Assign the original array without any filter to the newLots
        var newLots = this.data;
        // Check the searchText is not undefined and then search the by provided fields.
        if (this.searchText !== undefined) {
            this.searchText = this.searchText.toLocaleLowerCase();
            var mainSearchArray = [];
            // Search In the all fields given in the config of the search.
            for (let j = this.config.search.searchParameter.length - 1; j >= 0; j--) {
                let searchArray = [];
                searchArray = this.data.filter((it) => {
                    if (it[this.config.search.searchParameter[j].searchBy] != null && it[this.config.search.searchParameter[j].searchBy] != undefined) {
                        return it[this.config.search.searchParameter[j].searchBy].toLocaleLowerCase().includes(this.searchText);
                    }
                });
                // Push the each search result...
                if (searchArray.length > 0) {
                    mainSearchArray.push(...searchArray);
                }
                // Assign the searched Array to the lots Array.
                newLots = mainSearchArray;
            }
        }
        var allSelectedCheckBoxesArray = [];
        var allSelectedRangeFilterArray = [];
        // Check the config for the filter....
        for (let j = this.config.filter.filterParameter.length - 1; j >= 0; j--) {
            // Check the status of the filter
            if (this.config.filter.filterParameter[j].isShowFilter) {
                if (this.tempFilter.hasOwnProperty(this.config.filter.filterParameter[j].filterBy) && this.tempFilter[this.config.filter.filterParameter[j].filterBy].filterType == 'checkBoxes') {
                    // Filter the checked Values
                    this.selectedLotStatusFilter = this.tempFilter[this.config.filter.filterParameter[j].filterBy].filter((value, index) => {
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
        let singleTypeFilterArray = [];
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
        let singleRangeSliderFilter = [];
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
    }
    filterSingle(data, selectedCheckBoxesArrays) {
        for (let k = selectedCheckBoxesArrays.length - 1; k >= 0; k--) {
            var newData = [];
            if (selectedCheckBoxesArrays[k].length > 0) {
                data = this.filterArrayBasedOnCheckBoxes(data, selectedCheckBoxesArrays[k]);
                if (data.length > 0) {
                    newData.push(...data);
                    data = newData;
                }
                else {
                    data = [];
                }
            }
        }
        return this.uniqueValuesInArray(data);
    }
    filterSingleRangeFilter(data, selectedRangeFilterArrays) {
        for (let k = selectedRangeFilterArrays.length - 1; k >= 0; k--) {
            var newData = [];
            if (_.isObject(selectedRangeFilterArrays[k])) {
                data = this.filterArrayRangeFilter(data, selectedRangeFilterArrays[k]);
                if (data.length > 0) {
                    newData.push(...data);
                    data = newData;
                }
                else {
                    data = [];
                }
            }
        }
        return this.uniqueValuesInArray(data);
    }
    filterArrayBasedOnCheckBoxes(lotsArray, selectedCheckBoxesArrays) {
        var filtered = [];
        for (var lots in lotsArray) {
            if (selectedCheckBoxesArrays.length > 0) {
                selectedCheckBoxesArrays.forEach((element) => {
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
    }
    uniqueValuesInArray(data) {
        const uniqueValues = data.filter((element, index) => data.findIndex((obj) => obj[this.config.filter.uniqueColumn] == element[this.config.filter.uniqueColumn]) == index);
        return uniqueValues;
    }
    filterArrayRangeFilter(lotsArray, rangeFilterArrays) {
        var filtered = [];
        for (var lots in lotsArray) {
            let min = rangeFilterArrays.rangeValue[0];
            let max = rangeFilterArrays.rangeValue[1];
            let minValueIndex = Number(lotsArray[lots][rangeFilterArrays.filterByLowValue]);
            let maxValueIndex = Number(lotsArray[lots][rangeFilterArrays.filterByHighValue]);
            if ((minValueIndex >= min && minValueIndex <= max && maxValueIndex >= min && maxValueIndex <= max)) {
                filtered.push(lotsArray[lots]);
            }
        }
        return this.uniqueValuesInArray(filtered);
    }
    clearSingleFilters(filterBy, filterType) {
        if (filterBy && filterType == 'checkBoxes') {
            this.unCheckedCheckBoxes(this.tempFilter[filterBy]);
        }
        else if (filterBy && filterType == 'range_slider') {
            this.clearRangeSliderFilter(this.tempFilter[filterBy]);
        }
        this.applyFilter();
    }
    clearAllFilters() {
        this.filterData = [];
        this.sort = this.defaultSort;
        this.searchText = this.defaultSearch;
        for (let j = this.config.filter.filterParameter.length - 1; j >= 0; j--) {
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
    }
    unCheckedCheckBoxes(data) {
        data.forEach((element) => {
            element.isChecked = false;
        });
    }
    clearRangeSliderFilter(data) {
        data.rangeValue = data.defaultRangeValue;
        data.dropDownRangeValues = [];
        data.dropDownRangeValues = data.defaultRangeValue;
    }
    showMoreItems(filterBy, showStatus) {
        if (showStatus) {
            this.tempFilter[filterBy]['filterCheckBoxLimit'] = this.tempFilter[filterBy].length;
            this.tempFilter[filterBy]['isShowMore'] = true;
        }
        else if (!showStatus) {
            this.tempFilter[filterBy]['isShowMore'] = false;
        }
    }
    rangeDropDownOnChange(data) {
        data.rangeValue = data.dropDownRangeValues;
        this.applyFilter();
    }
    sliderChange(data) {
        data.dropDownRangeValues = data.rangeValue;
    }
}
NgxFilterSearchComponent.ɵfac = function NgxFilterSearchComponent_Factory(t) { return new (t || NgxFilterSearchComponent)(); };
NgxFilterSearchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgxFilterSearchComponent, selectors: [["ngx-filter-search"]], inputs: { data: "data", config: "config" }, outputs: { filteredData: "filteredData" }, decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-sm-12"], [1, "row", "pt-1", "pb-1"], [1, "col-sm-6"], [1, "float-right", "cursor-pointer", "text-primary", 3, "click"], ["class", "pt-1 pb-1", 4, "ngIf"], [4, "ngIf"], [1, "pt-1", "pb-1"], [1, "pt-2", "pb-2", "font-weight-bold", "text-capitalize"], [1, "input-group", "pt-1"], [1, "form-outline"], ["type", "text", "id", "form1", "placeholder", "Search Keyword...", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [4, "ngFor", "ngForOf"], ["class", "row pt-1 pb-1", 4, "ngIf"], [1, "col-sm-8", "float-left"], [1, "font-weight-bold"], [1, "col-sm-4"], [1, "float-right", "cursor-pointer", "text-primary", "clear", 3, "click"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], ["type", "checkbox", 3, "id", "name", "value", "ngModel", "ngModelChange", "change"], [1, "pl-2", "font-small"], ["class", "cursor-pointer text-primary pt-1", 3, "click", 4, "ngIf"], [1, "cursor-pointer", "text-primary", "pt-1", 3, "click"], [1, "min"], ["id", "range", 3, "value", "min", "max", "step", "type", "valueChange", "change", "changed"]], template: function NgxFilterSearchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NgxFilterSearchComponent_div_0_Template, 10, 2, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.data && ctx.config);
    } }, directives: [i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i1.NgForOf, i2.CheckboxControlValueAccessor, i3.SliderComponent], pipes: [i1.SlicePipe], styles: ["@import \"node_modules/@syncfusion/ej2-angular-inputs/styles/material.css\";@import \"node_modules/@syncfusion/ej2-base/styles/material.css\";@import \"node_modules/@syncfusion/ej2-buttons/styles/material.css\";@import \"node_modules/@syncfusion/ej2-popups/styles/material.css\";"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxFilterSearchComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-filter-search',
                styleUrls: ['./ngx-filter-search.component.scss'],
                templateUrl: './ngx-filter-search.component.html',
            }]
    }], function () { return []; }, { data: [{
            type: Input
        }], config: [{
            type: Input
        }], filteredData: [{
            type: Output
        }] }); })();

class NgxFilterSearchModule {
}
NgxFilterSearchModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxFilterSearchModule });
NgxFilterSearchModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxFilterSearchModule_Factory(t) { return new (t || NgxFilterSearchModule)(); }, imports: [[
            BrowserModule,
            CommonModule,
            SliderModule,
            FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxFilterSearchModule, { declarations: [NgxFilterSearchComponent], imports: [BrowserModule,
        CommonModule,
        SliderModule,
        FormsModule], exports: [NgxFilterSearchComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxFilterSearchModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxFilterSearchComponent],
                imports: [
                    BrowserModule,
                    CommonModule,
                    SliderModule,
                    FormsModule,
                ],
                exports: [NgxFilterSearchComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-filter-search
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxFilterSearchComponent, NgxFilterSearchModule, NgxFilterSearchService };
//# sourceMappingURL=ngx-filter-search.js.map

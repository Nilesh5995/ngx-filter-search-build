import { Component, Input, EventEmitter, Output } from '@angular/core';
import * as _ from 'lodash';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "@syncfusion/ej2-angular-inputs";
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
export class NgxFilterSearchComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZpbHRlci1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpbHRlci1zZWFyY2gvc3JjL2xpYi9uZ3gtZmlsdGVyLXNlYXJjaC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmlsdGVyLXNlYXJjaC9zcmMvbGliL25neC1maWx0ZXItc2VhcmNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7SUNTdEIsOEJBQTREO0lBQzFELGlDQUEyRDtJQUFBLHNCQUFNO0lBQUEsaUJBQVM7SUFDeEUsK0JBQThCO0lBQzVCLCtCQUEwQjtJQUN4QixpQ0FBcUk7SUFBbEYsK05BQXdCLHNMQUFBO0lBQTNFLGlCQUFxSTtJQUN2SSxpQkFBTTtJQUNSLGlCQUFNO0lBQ1YsaUJBQU07OztJQUhxRCxlQUF3QjtJQUF4QiwyQ0FBd0I7Ozs7SUFRM0UsOEJBQStXO0lBQzdXLCtCQUFpQztJQUMvQixrQ0FBaUM7SUFBQSxZQUE2QztJQUFBLGlCQUFTO0lBQ3pGLGlCQUFNO0lBQ04sK0JBQXNCO0lBQ3BCLDhCQUFvSztJQUExRywrV0FBeUc7SUFBQyxxQkFBSztJQUFBLGlCQUFLO0lBQ2hMLGlCQUFNO0lBQ1IsaUJBQU07Ozs7SUFMK0IsZUFBNkM7SUFBN0MsZ0lBQTZDOzs7O0lBT2hGLCtCQUFxTjtJQUNuTixpQ0FBNko7SUFBeEQsaU9BQThCLG1OQUFBO0lBQW5JLGlCQUE2SjtJQUM3SixnQ0FBOEI7SUFDNUIsWUFDRjtJQUFBLGlCQUFPO0lBQ1QsaUJBQU07OztJQUptQixlQUF1QjtJQUF2Qix5Q0FBdUIsOEJBQUEsZ0NBQUEsaUNBQUE7SUFF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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1maWx0ZXItc2VhcmNoJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWZpbHRlci1zZWFyY2guY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1maWx0ZXItc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcbn0pXG5cbmV4cG9ydCBjbGFzcyBOZ3hGaWx0ZXJTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpIGNvbmZpZzogYW55O1xuICBAT3V0cHV0KCkgZmlsdGVyZWREYXRhOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIHRlbXBGaWx0ZXI6IGFueSA9IHt9O1xuICBwdWJsaWMgc2VhcmNoVGV4dDogYW55O1xuICBwdWJsaWMgZmlsdGVyRGF0YTogYW55O1xuICBwdWJsaWMgYWxsU2VsZWN0ZWRGaWx0ZXJzOiBhbnkgPSBbXTtcbiAgcHVibGljIGZpbHRlciA9ICdhbGwnO1xuICBwdWJsaWMgc29ydCA9ICdsb3RfbnVtYmVyX2xvdyc7XG4gIHB1YmxpYyBpc1NvcnRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZGVmYXVsdEZpbHRlciA9ICdhbGwnO1xuICBwdWJsaWMgZGVmYXVsdFNvcnQgPSAnbG90X251bWJlcl9sb3cnO1xuICBwdWJsaWMgZGVmYXVsdFNlYXJjaCA9ICcnO1xuICBwdWJsaWMgc2VsZWN0ZWRMb3RTdGF0dXNGaWx0ZXI6IGFueTtcblxuICBwdWJsaWMgdmFsdWU6IG51bWJlciA9IDMwO1xuICBwdWJsaWMgdG9vbHRpcDogT2JqZWN0ID0geyBwbGFjZW1lbnQ6ICdCZWZvcmUnLCBpc1Zpc2libGU6IHRydWUsIHNob3dPbjogJ0Fsd2F5cycgfTtcbiAgcHVibGljIHRpY2tzOiBPYmplY3QgPSB7IHBsYWNlbWVudDogJ0FmdGVyJywgbGFyZ2VTdGVwOiAyMCwgc21hbGxTdGVwOiAxMCwgc2hvd1NtYWxsVGlja3M6IHRydWUgfTtcbiAgcHVibGljIHN0ZXA6IG51bWJlciA9IDUwO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmKHRoaXMuZGF0YSAmJiB0aGlzLmNvbmZpZykge1xuICAgICAgdGhpcy5zZXRGaWx0ZXJDb25maWcodGhpcy5kYXRhKTtcbiAgICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ3BsZWFzZSBBZGQgdGhlIGRhdGEgYW5kIGNvbmZpZycpXG4gICAgfVxuICB9XG5cbiAgc2V0RmlsdGVyQ29uZmlnKGRhdGE6IGFueSkge1xuICAgIGZvciAobGV0IGkgPSBkYXRhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgc3RhdHVzTmFtZTtcbiAgICAgIGRhdGFbaV1bJ3N0YXR1c05hbWUnXSA9IHN0YXR1c05hbWU7XG4gICAgICAvLyBDcmVhdGUgdGhlIGtleSBmb3IgdGhlIGN1c3RvbSBmaWVsZHMuLi4uIEFkZCB0aGUgY3VzdG9tXyBiZWZvcmUgZWFjaCBjdXN0b20gZmlsZWQgbmFtZS4uLlxuICAgICAgaWYgKGRhdGFbaV0uY3VzdG9tRmllbGRzICYmICFfLmlzRW1wdHkoZGF0YVtpXS5jdXN0b21GaWVsZHMpKSB7XG4gICAgICAgIGNvbnN0IGN1c3RvbUZpZWxkcyA9IGRhdGFbaV0uY3VzdG9tRmllbGRzO1xuICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBpbiBjdXN0b21GaWVsZHMpIHtcbiAgICAgICAgICAgIGlmIChjdXN0b21GaWVsZHNbaXRlbV0uc2hvd0ZpbHRlcikge1xuICAgICAgICAgICAgICAvLyBDcmVhdGUgdGhlIHVuaXF1ZSBrZXkgZm9yIHRoZSBjdXN0b20gZmllbGRzLlxuICAgICAgICAgICAgIGxldCBrZXkgPSAnY3VzdG9tXycraXRlbTtcbiAgICAgICAgICAgICAvLyBDaGFuZ2UgdGhlIGNvbmZpZyBmb3IgdGhlIHRoZSBkaXNwbGF5IG5hbWUgd2FudCB0byBzaG93IGRpZmZlcmVudC5cbiAgICAgICAgICAgICAgY29uc3QgYyA9IF8uZ2V0KHRoaXMuY29uZmlnLmZpZWxkc0NvbmZpZ0N1c3RvbUNoYW5nZXMsIGtleSlcbiAgICAgICAgICAgICAgaWYoYykge1xuICAgICAgICAgICAgICAgIC8vIENvZGUgZm9yIGFkZGluZyB0aGUgZW1wdHkgZGF0YSBhcyB0aGUgbm90IGRhdGVkIGxvdHMuLi4uXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjdXN0b21GaWVsZHNbaXRlbV0udmFsdWUgPT0gYy52YWx1ZSA/IGMucmVwbGFjZVZhbHVlIDogY3VzdG9tRmllbGRzW2l0ZW1dLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSAgY3VzdG9tRmllbGRzW2l0ZW1dLnZhbHVlID09IGMudmFsdWUgPyBjLmRpc3BsYXlOYW1lIDogY3VzdG9tRmllbGRzW2l0ZW1dLnZhbHVlO1xuICAgICAgICAgICAgICAgIGRhdGFbaV1bJ2N1c3RvbV8nK2N1c3RvbUZpZWxkc1tpdGVtXS5uYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGRhdGFbaV1bJ2N1c3RvbV9kaXNwbGF5XycrY3VzdG9tRmllbGRzW2l0ZW1dLm5hbWVdID0gbmFtZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhW2ldWydjdXN0b21fJytjdXN0b21GaWVsZHNbaXRlbV0ubmFtZV0gPSBjdXN0b21GaWVsZHNbaXRlbV0udmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0Q2hlY2tCb3hGaWx0ZXIoZGF0YVtpXSk7XG4gICAgfVxuICAgIHRoaXMuc29ydENoZWNrQm94ZXNGaWx0ZXIoKTtcbiAgfVxuICBzZXRDaGVja0JveEZpbHRlcihkYXRhOiBhbnkpIHtcbiAgICAvLyBDaGVja2VkIHRoZSBmaWx0ZXIgcGFyYW1ldGVyXG4gICAgaWYodGhpcy5jb25maWcuZmlsdGVyICYmIHRoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXIgKSB7XG4gICAgICBmb3IobGV0IGogPSB0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyLmxlbmd0aCAtMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgdmFyIGNvbmZpZ0luZGV4ID0gdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXTtcbiAgICAgICAgaWYgKGNvbmZpZ0luZGV4LmlzU2hvd0ZpbHRlcikge1xuICAgICAgICAgIHZhciBrZXkgPSBjb25maWdJbmRleC5maWx0ZXJCeTtcbiAgICAgICAgICB2YXIgaXNSYW5nZUZpbHRlcldpdGhEaWZmVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShjb25maWdJbmRleC5sb3dWYWx1ZUZpZWxkVmFsdWUpICYmICBkYXRhLmhhc093blByb3BlcnR5KGNvbmZpZ0luZGV4LmhpZ2hWYWx1ZUZpZWxkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaXNSYW5nZUZpbHRlcldpdGhEaWZmVmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpc1JhbmdlRmlsdGVyV2l0aERpZmZWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IGlzUmFuZ2VGaWx0ZXJXaXRoRGlmZlZhbHVlKSB7XG4gICAgICAgICAgICAgaWYgKHRoaXMudGVtcEZpbHRlci5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICBpZiAoKGRhdGFbY29uZmlnSW5kZXguZmllbGROYW1lXSAmJiBkYXRhW2NvbmZpZ0luZGV4LmZpZWxkVmFsdWVdKSB8fCAoaXNSYW5nZUZpbHRlcldpdGhEaWZmVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9iajogYW55ID0ge307XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZ0luZGV4LmZpbHRlclR5cGUgPT0gJ2NoZWNrQm94ZXMnKSB7XG4gICAgICAgICAgICAgICAgICBvYmpbJ2ZpbHRlckJ5J10gPSBrZXk7XG4gICAgICAgICAgICAgICAgICBvYmpbJ2ZpZWxkTmFtZSddID0gZGF0YVtjb25maWdJbmRleC5maWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgICAgb2JqWydmaWVsZFZhbHVlJ10gPSAgY29uZmlnSW5kZXguZGF0YVR5cGUgPT0gTnVtYmVyID8gIE51bWJlcihkYXRhW2NvbmZpZ0luZGV4LmZpZWxkVmFsdWVdKTogZGF0YVtjb25maWdJbmRleC5maWVsZFZhbHVlXTtcbiAgICAgICAgICAgICAgICAgIG9ialsnaXNDaGVja2VkJ10gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coIG9ialsnZmllbGRWYWx1ZSddLCAnT0JKIEZJRUxEUyBWQUxVRScpXG4gICAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICB2YXIgaXNQcmVzZW50ID0gdGhpcy50ZW1wRmlsdGVyW2tleV0uc29tZShmdW5jdGlvbihlbDogYW55KXsgcmV0dXJuIGVsWydmaWVsZFZhbHVlJ10gPT0gZGF0YVtzZWxmLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpZWxkVmFsdWVdfSk7XG4gICAgICAgICAgICAgICAgICBpZiAoIWlzUHJlc2VudCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnRlbXBGaWx0ZXJbc2VsZi5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0ucHVzaChvYmopO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjb25maWdJbmRleC5maWx0ZXJUeXBlID09ICdyYW5nZV9zbGlkZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmV2aW91c01pbiA9IHRoaXMudGVtcEZpbHRlcltrZXldLm1pblZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldmlvdXNNYXggPSB0aGlzLnRlbXBGaWx0ZXJba2V5XS5tYXhWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRNaW5WYWx1ZSA9ICBOdW1iZXIoZGF0YVtjb25maWdJbmRleC5sb3dWYWx1ZUZpZWxkVmFsdWVdKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRNYXhWYWx1ZSA9ICBOdW1iZXIoZGF0YVtjb25maWdJbmRleC5oaWdoVmFsdWVGaWVsZFZhbHVlXSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtaW4gPSBwcmV2aW91c01pbiA8IGN1cnJlbnRNaW5WYWx1ZSA/IHByZXZpb3VzTWluIDogY3VycmVudE1pblZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWF4ID0gcHJldmlvdXNNYXggPiBjdXJyZW50TWF4VmFsdWUgPyBwcmV2aW91c01heCA6IGN1cnJlbnRNYXhWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ21pblZhbHVlJ10gPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydtYXhWYWx1ZSddID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsncmFuZ2VWYWx1ZSddID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkZWZhdWx0UmFuZ2VWYWx1ZSddID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkcm9wRG93blJhbmdlVmFsdWVzJ10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ3JhbmdlVmFsdWUnXS5wdXNoKG1pbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydyYW5nZVZhbHVlJ10ucHVzaChtYXgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc21hbGxTdGVwID0gY29uZmlnSW5kZXguc3RlcCA/IChjb25maWdJbmRleC5zdGVwICogMikgOiAxMDBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhcmdlU3RlcCA9IGNvbmZpZ0luZGV4LnN0ZXAgfHwgNTA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkaWZmID0gbWF4IC0gbWluO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnc21hbGxTdGVwJ10gPSBkaWZmIC8gc21hbGxTdGVwIDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2xhcmdlU3RlcCddID0gZGlmZiAvIGxhcmdlU3RlcCA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWyd0aWNrcyddID0geyBwbGFjZW1lbnQ6ICdBZnRlcicsIGxhcmdlU3RlcDogZGlmZiAvIGxhcmdlU3RlcCAgLCBzbWFsbFN0ZXA6IGRpZmYgLyBzbWFsbFN0ZXAsIHNob3dTbWFsbFRpY2tzOiB0cnVlLCBzaG93TGFyZ2VUaWNrczogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2RlZmF1bHRSYW5nZVZhbHVlJ10ucHVzaChtaW4pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZGVmYXVsdFJhbmdlVmFsdWUnXS5wdXNoKG1heCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkcm9wRG93blJhbmdlVmFsdWVzJ10ucHVzaChtaW4pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZHJvcERvd25SYW5nZVZhbHVlcyddLnB1c2gobWF4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ3JhbmdlU3RlcCddID0gc21hbGxTdGVwIC8vZGlmZiAvIHNtYWxsU3RlcDtcbiAgICAgICAgICAgICAgICAgIC8vICAgZmlsdGVyQXJyYXlSYW5nZUZpbHRlclxuICAgICAgICAgICAgICAgICAgLy8gc2hvd09uOiAnQWx3YXlzJ1xuICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2Ryb3Bkb3duJ10gPSBbXTtcbiAgICAgICAgICAgICAgICAgIGxldCBkcm9wZG93blZhbHVlID0gbWluO1xuICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDw9IHNtYWxsU3RlcDsgayArKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZHJvcGRvd24nXS5wdXNoKGRyb3Bkb3duVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25WYWx1ZSA9IChkaWZmIC8gc21hbGxTdGVwKSArIGRyb3Bkb3duVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkcm9wZG93biddID0gXy4gdW5pcSh0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZHJvcGRvd24nXSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBvYmo6IGFueSA9IHt9O1xuICAgICAgICAgICAgICAgIGlmIChjb25maWdJbmRleC5pc1Nob3dGaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgoZGF0YVtjb25maWdJbmRleC5maWVsZE5hbWVdICYmIGRhdGFbY29uZmlnSW5kZXguZmllbGRWYWx1ZV0pIHx8IChpc1JhbmdlRmlsdGVyV2l0aERpZmZWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2ZpbHRlclRpdGxlJ10gPSBjb25maWdJbmRleC5maWx0ZXJUaXRsZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2lzU2hvd0ZpbHRlciddID0gY29uZmlnSW5kZXguaXNTaG93RmlsdGVyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZmlsdGVyQnknXSA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2ZpbHRlclZhbHVlc1NvcnRpbmcnXSA9IGNvbmZpZ0luZGV4LmZpbHRlclZhbHVlc1NvcnRpbmc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydmaWx0ZXJTb3J0RGlyZWN0aW9uJ10gPSBjb25maWdJbmRleC5maWx0ZXJTb3J0RGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnaXNTaG93TW9yZSddID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydmaWx0ZXJDaGVja0JveExpbWl0J10gPSBjb25maWdJbmRleC5maWx0ZXJDaGVja0JveExpbWl0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZmlsdGVyVHlwZSddID0gY29uZmlnSW5kZXguZmlsdGVyVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZ0luZGV4LmZpbHRlclR5cGUgPT0gJ2NoZWNrQm94ZXMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgb2JqWydmaWx0ZXJCeSddID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICAgIG9ialsnZmllbGROYW1lJ10gPSBkYXRhW2NvbmZpZ0luZGV4LmZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgb2JqWydmaWVsZFZhbHVlJ10gPSAgY29uZmlnSW5kZXguZGF0YVR5cGUgPT0gTnVtYmVyID8gIE51bWJlcihkYXRhW2NvbmZpZ0luZGV4LmZpZWxkVmFsdWVdKTogZGF0YVtjb25maWdJbmRleC5maWVsZFZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgICBvYmpbJ2lzQ2hlY2tlZCddID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV0ucHVzaChvYmopO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY29uZmlnSW5kZXguZmlsdGVyVHlwZSA9PSAncmFuZ2Vfc2xpZGVyJykge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydmaWx0ZXJCeUxvd1ZhbHVlJ10gPSBjb25maWdJbmRleC5maWx0ZXJCeUxvd1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydmaWx0ZXJCeUhpZ2hWYWx1ZSddID0gY29uZmlnSW5kZXguZmlsdGVyQnlIaWdoVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ3JhbmdlVmFsdWUnXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkZWZhdWx0UmFuZ2VWYWx1ZSddID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2Ryb3BEb3duUmFuZ2VWYWx1ZXMnXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgIGxldCBtaW4gPSBOdW1iZXIoZGF0YVtjb25maWdJbmRleC5sb3dWYWx1ZUZpZWxkVmFsdWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4ID0gTnVtYmVyKGRhdGFbY29uZmlnSW5kZXguaGlnaFZhbHVlRmllbGRWYWx1ZV0pO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydtaW5WYWx1ZSddID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydtYXhWYWx1ZSddID0gbWF4XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ3JhbmdlVmFsdWUnXS5wdXNoKG1pbik7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ3JhbmdlVmFsdWUnXS5wdXNoKG1heCk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2RlZmF1bHRSYW5nZVZhbHVlJ10ucHVzaChtaW4pO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkZWZhdWx0UmFuZ2VWYWx1ZSddLnB1c2gobWF4KTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZHJvcERvd25SYW5nZVZhbHVlcyddLnB1c2gobWluKTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZHJvcERvd25SYW5nZVZhbHVlcyddLnB1c2gobWF4KTtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RlcCA9IGNvbmZpZ0luZGV4LnN0ZXAgfHwgMTAwO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkcm9wZG93biddID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ3JhbmdlU3RlcCddID0gIGNvbmZpZ0luZGV4LnN0ZXAgKiAyOy8vKG1pbiArIG1heCkgLyBzdGVwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzb3J0Q2hlY2tCb3hlc0ZpbHRlcigpIHtcbiAgICBmb3IobGV0IGogPSB0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyLmxlbmd0aCAtMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmlzU2hvd0ZpbHRlcikge1xuICAgICAgICAgICBpZiAodGhpcy50ZW1wRmlsdGVyLmhhc093blByb3BlcnR5KHRoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnkpKSB7XG4gICAgICAgICAgICAgaWYgKHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XS5maWx0ZXJWYWx1ZXNTb3J0aW5nXG4gICAgICAgICAgICAgICYmIHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XS5maWx0ZXJTb3J0RGlyZWN0aW9uXG4gICAgICAgICAgICAgICYmIHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XS5maWx0ZXJUeXBlID09ICdjaGVja0JveGVzJ1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgbGV0IHNvcnREaXJlY3Rpb24gPSBfLmxvd2VyQ2FzZSh0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0uZmlsdGVyU29ydERpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgIHNvcnREaXJlY3Rpb24gPSBzb3J0RGlyZWN0aW9uID09ICdhc2MnICA/IHNvcnREaXJlY3Rpb24gOiAnZGVzYyc7XG4gICAgICAgICAgICAgICAgIGxldCBkaXJlY3Rpb246IGFueSA9IFtdO1xuICAgICAgICAgICAgICAgICBkaXJlY3Rpb24ucHVzaChzb3J0RGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgbGV0IHBpY2tBcnJheSA9IF8ucGljayh0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0sIFsnZmlsdGVyVGl0bGUnLCAnaXNTaG93RmlsdGVyJywgJ2ZpbHRlckJ5JywgJ2ZpbHRlclZhbHVlc1NvcnRpbmcnLFxuICAgICAgICAgICAgICAgICAnZmlsdGVyU29ydERpcmVjdGlvbicsICdpc1Nob3dNb3JlJywgJ2ZpbHRlckNoZWNrQm94TGltaXQnLCAnZmlsdGVyVHlwZSddKTtcbiAgICAgICAgICAgICAgICAgY29uc3Qgc29ydGVkID0gXy5vcmRlckJ5KHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XSAsIFsnZmllbGRWYWx1ZSddLCBkaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0gPSBzb3J0ZWQ7XG4gICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XVsnZmlsdGVyVGl0bGUnXSA9IHBpY2tBcnJheS5maWx0ZXJUaXRsZTtcbiAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldWydpc1Nob3dGaWx0ZXInXSA9IHBpY2tBcnJheS5pc1Nob3dGaWx0ZXI7XG4gICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XVsnZmlsdGVyQnknXSA9cGlja0FycmF5LmZpbHRlckJ5O1xuICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV1bJ2ZpbHRlclZhbHVlc1NvcnRpbmcnXSA9IHBpY2tBcnJheS5maWx0ZXJWYWx1ZXNTb3J0aW5nO1xuICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV1bJ2ZpbHRlclNvcnREaXJlY3Rpb24nXSA9IHBpY2tBcnJheS5maWx0ZXJTb3J0RGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV1bJ2lzU2hvd01vcmUnXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV1bJ2ZpbHRlckNoZWNrQm94TGltaXQnXSA9IHBpY2tBcnJheS5maWx0ZXJDaGVja0JveExpbWl0O1xuICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV1bJ2ZpbHRlclR5cGUnXSA9IHBpY2tBcnJheS5maWx0ZXJUeXBlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuXG4gIGFwcGx5RmlsdGVyKCkge1xuICAgIC8vIEFzc2lnbiB0aGUgb3JpZ2luYWwgYXJyYXkgd2l0aG91dCBhbnkgZmlsdGVyIHRvIHRoZSBuZXdMb3RzXG4gICAgdmFyIG5ld0xvdHMgPSB0aGlzLmRhdGE7XG4gICAgICAvLyBDaGVjayB0aGUgc2VhcmNoVGV4dCBpcyBub3QgdW5kZWZpbmVkIGFuZCB0aGVuIHNlYXJjaCB0aGUgYnkgcHJvdmlkZWQgZmllbGRzLlxuICAgICAgaWYgKHRoaXMuc2VhcmNoVGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IHRoaXMuc2VhcmNoVGV4dC50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgbWFpblNlYXJjaEFycmF5ID0gW107XG4gICAgICAgICAgLy8gU2VhcmNoIEluIHRoZSBhbGwgZmllbGRzIGdpdmVuIGluIHRoZSBjb25maWcgb2YgdGhlIHNlYXJjaC5cbiAgICAgICAgICBmb3IgKGxldCBqID0gdGhpcy5jb25maWcuc2VhcmNoLnNlYXJjaFBhcmFtZXRlci5sZW5ndGggLTE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgICBsZXQgc2VhcmNoQXJyYXkgPSBbXVxuICAgICAgICAgICAgc2VhcmNoQXJyYXkgPSAgdGhpcy5kYXRhLmZpbHRlcigoaXQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaXRbdGhpcy5jb25maWcuc2VhcmNoLnNlYXJjaFBhcmFtZXRlcltqXS5zZWFyY2hCeV0gIT0gbnVsbCAmJiBpdFt0aGlzLmNvbmZpZy5zZWFyY2guc2VhcmNoUGFyYW1ldGVyW2pdLnNlYXJjaEJ5XSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRbdGhpcy5jb25maWcuc2VhcmNoLnNlYXJjaFBhcmFtZXRlcltqXS5zZWFyY2hCeV0udG9Mb2NhbGVMb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnNlYXJjaFRleHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBQdXNoIHRoZSBlYWNoIHNlYXJjaCByZXN1bHQuLi5cbiAgICAgICAgICBpZiAoc2VhcmNoQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbWFpblNlYXJjaEFycmF5LnB1c2goLi4uc2VhcmNoQXJyYXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBBc3NpZ24gdGhlIHNlYXJjaGVkIEFycmF5IHRvIHRoZSBsb3RzIEFycmF5LlxuICAgICAgICAgIG5ld0xvdHMgPSBtYWluU2VhcmNoQXJyYXk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGFsbFNlbGVjdGVkQ2hlY2tCb3hlc0FycmF5ID0gW107XG4gICAgICB2YXIgYWxsU2VsZWN0ZWRSYW5nZUZpbHRlckFycmF5ID0gW107XG4gICAgICAvLyBDaGVjayB0aGUgY29uZmlnIGZvciB0aGUgZmlsdGVyLi4uLlxuICAgICAgZm9yKGxldCBqID0gdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlci5sZW5ndGggLTE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgIC8vIENoZWNrIHRoZSBzdGF0dXMgb2YgdGhlIGZpbHRlclxuICAgICAgICBpZiAodGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5pc1Nob3dGaWx0ZXIpIHtcbiAgICAgICAgICBpZiAodGhpcy50ZW1wRmlsdGVyLmhhc093blByb3BlcnR5KHRoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnkpICYmIHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XS5maWx0ZXJUeXBlID09ICdjaGVja0JveGVzJykge1xuICAgICAgICAgICAgLy8gRmlsdGVyIHRoZSBjaGVja2VkIFZhbHVlc1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZExvdFN0YXR1c0ZpbHRlciA9ICB0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0uZmlsdGVyKCh2YWx1ZTogYW55LCBpbmRleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmlzQ2hlY2tlZFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFB1c2ggdGhlIGFsbCBjaGVja2VkIHZhbHVlcyBpbiBzYW1lIGFycmF5XG4gICAgICAgICAgICBhbGxTZWxlY3RlZENoZWNrQm94ZXNBcnJheS5wdXNoKHRoaXMuc2VsZWN0ZWRMb3RTdGF0dXNGaWx0ZXIpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnRlbXBGaWx0ZXIuaGFzT3duUHJvcGVydHkodGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeSkgJiYgdGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldLmZpbHRlclR5cGUgPT0gJ3JhbmdlX3NsaWRlcicpIHtcbiAgICAgICAgICAgIC8vIElmIGZpbHRlciB0eXBlIGlzIHRoZSBSYW5nZSBmaWx0ZXIgdGhlbiBwdXNoIHRoZSBkYXRhIGluIHRoZSByYW5nZSBmaWx0ZXIuXG4gICAgICAgICAgICBhbGxTZWxlY3RlZFJhbmdlRmlsdGVyQXJyYXkucHVzaCh0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgc2luZ2xlVHlwZUZpbHRlckFycmF5ID0gW107XG4gICAgICB0aGlzLmFsbFNlbGVjdGVkRmlsdGVycyA9IGFsbFNlbGVjdGVkQ2hlY2tCb3hlc0FycmF5O1xuICAgICAgLy9GaWx0ZXIgdGhlIGRhdGEgYmFzZWQgb24gY2hlY2tib3hlc1xuICAgICAgaWYgKGFsbFNlbGVjdGVkQ2hlY2tCb3hlc0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIEZpbHRlciB0aGUgZWFjaCBhcnJheSBhdCBhIHRpbWUsIEluIGNvbmZpZyBtdWx0aXBsZSBmaWx0ZXJzLlxuICAgICAgIHNpbmdsZVR5cGVGaWx0ZXJBcnJheSA9IHRoaXMuZmlsdGVyU2luZ2xlKG5ld0xvdHMgLGFsbFNlbGVjdGVkQ2hlY2tCb3hlc0FycmF5KTtcbiAgICAgICBuZXdMb3RzID0gc2luZ2xlVHlwZUZpbHRlckFycmF5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3TG90cyA9IG5ld0xvdHM7XG4gICAgICB9XG5cbiAgICAgIGxldCBzaW5nbGVSYW5nZVNsaWRlckZpbHRlciA9IFtdO1xuICAgICAgLy8gRmlsdGVyIHRoZSBkYXRhIGJhc2VkIG9uIHRoZSByYW5nZSBmaWx0ZXIuXG4gICAgICBpZiAoYWxsU2VsZWN0ZWRSYW5nZUZpbHRlckFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIEZpbHRlciB0aGUgZWFjaCBhcnJheSBhdCBhIHRpbWUsIEluIGNvbmZpZyBtdWx0aXBsZSBmaWx0ZXJzLlxuICAgICAgIHNpbmdsZVJhbmdlU2xpZGVyRmlsdGVyID0gdGhpcy5maWx0ZXJTaW5nbGVSYW5nZUZpbHRlcihuZXdMb3RzICwgYWxsU2VsZWN0ZWRSYW5nZUZpbHRlckFycmF5KTtcbiAgICAgICAgbmV3TG90cyA9IHNpbmdsZVJhbmdlU2xpZGVyRmlsdGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3TG90cyA9IG5ld0xvdHM7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmlsdGVyRGF0YSA9IFtdO1xuICAgICAgdGhpcy5maWx0ZXJEYXRhID0gbmV3TG90cztcblxuICAgICAgLy8gQ2hlY2sgdGhlIFNvcnRpbmcgaXMgYXBwbGllZCBpZiBZZXMgdGhlbiBzb3J0IHRoZSBhcnJheSBhZnRlciBmaWx0ZXIuXG4gICAgICBpZiAodGhpcy5pc1NvcnRlZCkge1xuICAgICAgICAvL3RoaXMuc29ydExvdHMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmlsdGVyZWREYXRhLmVtaXQodGhpcy5maWx0ZXJEYXRhKTtcbiAgICAgIH1cbiAgfVxuXG4gIGZpbHRlclNpbmdsZShkYXRhOiBhbnksIHNlbGVjdGVkQ2hlY2tCb3hlc0FycmF5czogYW55ICkge1xuICAgIGZvciAobGV0IGsgPSBzZWxlY3RlZENoZWNrQm94ZXNBcnJheXMubGVuZ3RoIC0xOyBrID49IDA7IGstLSkge1xuICAgICAgdmFyIG5ld0RhdGEgPSBbXTtcbiAgICAgIGlmIChzZWxlY3RlZENoZWNrQm94ZXNBcnJheXNba10ubGVuZ3RoID4gMCkge1xuICAgICAgICBkYXRhID0gdGhpcy5maWx0ZXJBcnJheUJhc2VkT25DaGVja0JveGVzKGRhdGEsIHNlbGVjdGVkQ2hlY2tCb3hlc0FycmF5c1trXSlcbiAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBuZXdEYXRhLnB1c2goLi4uZGF0YSk7XG4gICAgICAgICAgZGF0YSA9IG5ld0RhdGE7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgIGRhdGEgPSBbXTtcbiAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVuaXF1ZVZhbHVlc0luQXJyYXkoZGF0YSk7XG4gIH1cblxuXG4gIGZpbHRlclNpbmdsZVJhbmdlRmlsdGVyKGRhdGE6IGFueSwgc2VsZWN0ZWRSYW5nZUZpbHRlckFycmF5czogYW55ICkge1xuICAgIGZvciAobGV0IGsgPSBzZWxlY3RlZFJhbmdlRmlsdGVyQXJyYXlzLmxlbmd0aCAtMTsgayA+PSAwOyBrLS0pe1xuICAgICAgdmFyIG5ld0RhdGEgPSBbXTtcbiAgICAgIGlmIChfLmlzT2JqZWN0KHNlbGVjdGVkUmFuZ2VGaWx0ZXJBcnJheXNba10pKSB7XG4gICAgICAgIGRhdGEgPSB0aGlzLmZpbHRlckFycmF5UmFuZ2VGaWx0ZXIoZGF0YSwgc2VsZWN0ZWRSYW5nZUZpbHRlckFycmF5c1trXSk7XG4gICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbmV3RGF0YS5wdXNoKC4uLmRhdGEpO1xuICAgICAgICAgIGRhdGEgPSBuZXdEYXRhO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhID0gW107XG4gICAgICAgICAgfVxuICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudW5pcXVlVmFsdWVzSW5BcnJheShkYXRhKTtcbiAgfVxuXG4gIGZpbHRlckFycmF5QmFzZWRPbkNoZWNrQm94ZXMgKGxvdHNBcnJheTogYW55LCBzZWxlY3RlZENoZWNrQm94ZXNBcnJheXM6IGFueSkge1xuICAgIHZhciBmaWx0ZXJlZDogYW55ID0gW107XG4gICAgZm9yICh2YXIgbG90cyBpbiBsb3RzQXJyYXkpIHtcbiAgICAgIGlmIChzZWxlY3RlZENoZWNrQm94ZXNBcnJheXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNlbGVjdGVkQ2hlY2tCb3hlc0FycmF5cy5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChsb3RzQXJyYXlbbG90c11bZWxlbWVudC5maWx0ZXJCeV0gPT0gZWxlbWVudC5maWVsZFZhbHVlICl7XG4gICAgICAgICAgICAgIGlmIChmaWx0ZXJlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXJlZC5wdXNoKGxvdHNBcnJheVtsb3RzXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWQucHVzaChsb3RzQXJyYXlbbG90c10pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy51bmlxdWVWYWx1ZXNJbkFycmF5KGZpbHRlcmVkKTtcbiAgfVxuXG4gIHVuaXF1ZVZhbHVlc0luQXJyYXkoZGF0YTogYW55ICkge1xuICAgIGNvbnN0IHVuaXF1ZVZhbHVlcyA9IGRhdGEuZmlsdGVyKChlbGVtZW50OiBhbnksIGluZGV4OiBudW1iZXIpID0+XG4gICAgZGF0YS5maW5kSW5kZXgoIChvYmo6IGFueSkgPT4gb2JqW3RoaXMuY29uZmlnLmZpbHRlci51bmlxdWVDb2x1bW5dID09IGVsZW1lbnRbdGhpcy5jb25maWcuZmlsdGVyLnVuaXF1ZUNvbHVtbl0pID09IGluZGV4KTtcbiAgICByZXR1cm4gdW5pcXVlVmFsdWVzO1xuICB9XG5cblxuXG4gIGZpbHRlckFycmF5UmFuZ2VGaWx0ZXIgKGxvdHNBcnJheTogYW55LCByYW5nZUZpbHRlckFycmF5czogYW55KSB7XG4gICAgdmFyIGZpbHRlcmVkID0gW107XG4gICAgZm9yICh2YXIgbG90cyBpbiBsb3RzQXJyYXkpIHtcbiAgICAgIGxldCBtaW4gPSByYW5nZUZpbHRlckFycmF5cy5yYW5nZVZhbHVlWzBdO1xuICAgICAgbGV0IG1heCA9IHJhbmdlRmlsdGVyQXJyYXlzLnJhbmdlVmFsdWVbMV07XG4gICAgICBsZXQgbWluVmFsdWVJbmRleCA9IE51bWJlcihsb3RzQXJyYXlbbG90c11bcmFuZ2VGaWx0ZXJBcnJheXMuZmlsdGVyQnlMb3dWYWx1ZV0pO1xuICAgICAgbGV0IG1heFZhbHVlSW5kZXggPSBOdW1iZXIobG90c0FycmF5W2xvdHNdW3JhbmdlRmlsdGVyQXJyYXlzLmZpbHRlckJ5SGlnaFZhbHVlXSk7XG4gICAgICBpZiAoKG1pblZhbHVlSW5kZXggPj0gbWluICYmIG1pblZhbHVlSW5kZXggPD0gbWF4ICYmIG1heFZhbHVlSW5kZXggPj0gbWluICYmIG1heFZhbHVlSW5kZXggPD0gbWF4KSl7XG4gICAgICAgICAgZmlsdGVyZWQucHVzaChsb3RzQXJyYXlbbG90c10pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy51bmlxdWVWYWx1ZXNJbkFycmF5KGZpbHRlcmVkKTtcbiAgfVxuXG4gIGNsZWFyU2luZ2xlRmlsdGVycyhmaWx0ZXJCeTogc3RyaW5nICwgZmlsdGVyVHlwZT86IGFueSkge1xuICAgIGlmIChmaWx0ZXJCeSAmJiBmaWx0ZXJUeXBlID09ICdjaGVja0JveGVzJykge1xuICAgICAgdGhpcy51bkNoZWNrZWRDaGVja0JveGVzKHRoaXMudGVtcEZpbHRlcltmaWx0ZXJCeV0pXG4gICAgfSBlbHNlIGlmIChmaWx0ZXJCeSAmJiBmaWx0ZXJUeXBlID09ICdyYW5nZV9zbGlkZXInKSB7XG4gICAgICB0aGlzLmNsZWFyUmFuZ2VTbGlkZXJGaWx0ZXIodGhpcy50ZW1wRmlsdGVyW2ZpbHRlckJ5XSk7XG4gICAgfVxuICAgIHRoaXMuYXBwbHlGaWx0ZXIoKTtcbiAgfVxuXG4gIGNsZWFyQWxsRmlsdGVycygpIHtcbiAgICB0aGlzLmZpbHRlckRhdGEgPSBbXTtcbiAgICB0aGlzLnNvcnQgPSB0aGlzLmRlZmF1bHRTb3J0O1xuICAgIHRoaXMuc2VhcmNoVGV4dCA9IHRoaXMuZGVmYXVsdFNlYXJjaDtcbiAgICBmb3IobGV0IGogPSB0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyLmxlbmd0aCAtMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmlzU2hvd0ZpbHRlcikge1xuICAgICAgICAgICBpZiAoKHRoaXMudGVtcEZpbHRlci5oYXNPd25Qcm9wZXJ0eSh0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5KSAmJlxuICAgICAgICAgICAodGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldLmZpbHRlclR5cGUgPT09ICdjaGVja0JveGVzJykpKSB7XG4gICAgICAgICAgICB0aGlzLnVuQ2hlY2tlZENoZWNrQm94ZXModGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCh0aGlzLnRlbXBGaWx0ZXIuaGFzT3duUHJvcGVydHkodGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeSkgJiZcbiAgICAgICAgICAgKHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XS5maWx0ZXJUeXBlID09PSAncmFuZ2Vfc2xpZGVyJykpKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyUmFuZ2VTbGlkZXJGaWx0ZXIodGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldKVxuICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB0aGlzLmZpbHRlckRhdGEgPSB0aGlzLmRhdGE7XG4gICAgdGhpcy5maWx0ZXJlZERhdGEuZW1pdCh0aGlzLmZpbHRlckRhdGEpO1xuICB9XG5cbiAgdW5DaGVja2VkQ2hlY2tCb3hlcyhkYXRhOiBhbnkpIHtcbiAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xuICAgICAgZWxlbWVudC5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICB9KVxuICB9XG5cbiAgY2xlYXJSYW5nZVNsaWRlckZpbHRlcihkYXRhOiBhbnkpIHtcbiAgICBkYXRhLnJhbmdlVmFsdWUgPSBkYXRhLmRlZmF1bHRSYW5nZVZhbHVlO1xuICAgIGRhdGEuZHJvcERvd25SYW5nZVZhbHVlcyA9IFtdO1xuICAgIGRhdGEuZHJvcERvd25SYW5nZVZhbHVlcyA9IGRhdGEuZGVmYXVsdFJhbmdlVmFsdWU7XG4gIH1cblxuICBzaG93TW9yZUl0ZW1zKGZpbHRlckJ5OiBzdHJpbmcsc2hvd1N0YXR1czogYm9vbGVhbikge1xuICAgIGlmKHNob3dTdGF0dXMpIHtcbiAgICAgIHRoaXMudGVtcEZpbHRlcltmaWx0ZXJCeV1bJ2ZpbHRlckNoZWNrQm94TGltaXQnXSA9IHRoaXMudGVtcEZpbHRlcltmaWx0ZXJCeV0ubGVuZ3RoO1xuICAgICAgdGhpcy50ZW1wRmlsdGVyW2ZpbHRlckJ5XVsnaXNTaG93TW9yZSddID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYoIXNob3dTdGF0dXMpIHtcbiAgICAgIHRoaXMudGVtcEZpbHRlcltmaWx0ZXJCeV1bJ2lzU2hvd01vcmUnXSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG5cbiAgcmFuZ2VEcm9wRG93bk9uQ2hhbmdlKGRhdGE6IGFueSkge1xuICAgIGRhdGEucmFuZ2VWYWx1ZSA9IGRhdGEuZHJvcERvd25SYW5nZVZhbHVlcztcbiAgICB0aGlzLmFwcGx5RmlsdGVyKCk7XG4gIH1cblxuICBzbGlkZXJDaGFuZ2UoZGF0YTogYW55IHwgdW5kZWZpbmVkKSB7XG4gICAgZGF0YS5kcm9wRG93blJhbmdlVmFsdWVzID0gZGF0YS5yYW5nZVZhbHVlXG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cImRhdGEgJiYgY29uZmlnXCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgPGRpdiBjbGFzcz1cInJvdyBwdC0xIHBiLTFcIj5cbiAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cblxuICAgICAgIDwvZGl2PlxuICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICAgPGg2IGNsYXNzPVwiZmxvYXQtcmlnaHQgY3Vyc29yLXBvaW50ZXIgdGV4dC1wcmltYXJ5XCIgKGNsaWNrKT1cImNsZWFyQWxsRmlsdGVycygpXCI+Q2xlYXIgQWxsPC9oNj5cbiAgICAgICA8L2Rpdj5cbiAgICAgPC9kaXY+XG4gICAgICA8ZGl2ICpuZ0lmPVwiY29uZmlnPy5zZWFyY2g/LmlzU2VhcmNoU2hvd1wiIGNsYXNzPVwicHQtMSBwYi0xXCI+XG4gICAgICAgIDxzdHJvbmcgY2xhc3M9XCJwdC0yIHBiLTIgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWNhcGl0YWxpemVcIj5TZWFyY2g8L3N0cm9uZz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgcHQtMVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tb3V0bGluZVwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZvcm0xXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbKG5nTW9kZWwpXT1cInNlYXJjaFRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBLZXl3b3JkLi4uXCIgKGtleXVwKT1cImFwcGx5RmlsdGVyKClcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGhyPlxuICAgICAgPGRpdiAqbmdJZj1cImNvbmZpZz8uZmlsdGVyPy5pc1Nob3dGaWx0ZXIgJiYgdGVtcEZpbHRlclwiPlxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjb25maWcgb2YgY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXI7IGxldCBpID0gaW5kZXg7bGV0IGxhc3QgPSBsYXN0O1wiPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNvbmZpZz8uaXNTaG93RmlsdGVyICYmIHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHB0LTEgcGItMVwiICpuZ0lmPVwiKCgoIWNvbmZpZz8ubWluaW11bVNob3dMaW1pdCAmJiB0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ubGVuZ3RoID4gMCkgfHwgKHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5sZW5ndGggPiBjb25maWc/Lm1pbmltdW1TaG93TGltaXQgJiYgY29uZmlnPy5pc1Nob3dGaWx0ZXIgJiYgY29uZmlnPy5maWx0ZXJUeXBlID09ICdjaGVja0JveGVzJyAmJiB0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ubGVuZ3RoID4gMCkpIHx8IChjb25maWc/LmZpbHRlclR5cGUgPT0gJ3JhbmdlX3NsaWRlcicgJiYgdGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLm1heFZhbHVlID4gMCApKVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOCBmbG9hdC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPnt7IHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XT8uZmlsdGVyVGl0bGV9fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwiZmxvYXQtcmlnaHQgY3Vyc29yLXBvaW50ZXIgdGV4dC1wcmltYXJ5IGNsZWFyXCIgKGNsaWNrKT1cImNsZWFyU2luZ2xlRmlsdGVycyh0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0uZmlsdGVyQnksdGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmZpbHRlclR5cGUpXCI+Q2xlYXI8L2g2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIihjb25maWc/LmlzU2hvd0ZpbHRlciAmJiBjb25maWc/LmZpbHRlclR5cGUgPT0gJ2NoZWNrQm94ZXMnICYmICghY29uZmlnPy5taW5pbXVtU2hvd0xpbWl0IHx8ICh0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ubGVuZ3RoID4gY29uZmlnPy5taW5pbXVtU2hvd0xpbWl0KSkpIFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIiAqbmdGb3I9XCJsZXQgZmlsdGVyIG9mIHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XSB8IHNsaWNlIDogMDooIXRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5pc1Nob3dNb3JlID8gY29uZmlnLmZpbHRlckNoZWNrQm94TGltaXQgOiB0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0uZmlsdGVyQ2hlY2tCb3hMaW1pdCk7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbaWRdPVwiZmlsdGVyLmZpZWxkTmFtZVwiIFtuYW1lXT1cImZpbHRlci5maWVsZE5hbWVcIiBbdmFsdWVdPVwiZmlsdGVyLmZpZWxkVmFsdWVcIiBbKG5nTW9kZWwpXT1cImZpbHRlci5pc0NoZWNrZWRcIiAoY2hhbmdlKT1cImFwcGx5RmlsdGVyKClcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGwtMiBmb250LXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZmlsdGVyLmZpZWxkTmFtZX19XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5sZW5ndGggPiBjb25maWc/LmZpbHRlckNoZWNrQm94TGltaXQgXCI+XG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LXByaW1hcnkgcHQtMVwiICpuZ0lmID1cIiF0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0uaXNTaG93TW9yZVwiIChjbGljayk9XCJzaG93TW9yZUl0ZW1zKHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5maWx0ZXJCeSx0cnVlKVwiPlxuICAgICAgICAgICAgICAgICAge3sgdGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmxlbmd0aCAtIGNvbmZpZy5maWx0ZXJDaGVja0JveExpbWl0IH19IE1vcmVcbiAgICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LXByaW1hcnkgcHQtMVwiICpuZ0lmID1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5pc1Nob3dNb3JlXCIgKGNsaWNrKT1cInNob3dNb3JlSXRlbXModGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmZpbHRlckJ5LCBmYWxzZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgU2hvdyBMZXNzXG4gICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29uZmlnPy5pc1Nob3dGaWx0ZXIgJiYgY29uZmlnPy5maWx0ZXJUeXBlID09ICdyYW5nZV9zbGlkZXInICYmIHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5tYXhWYWx1ZSA+IDBcIj5cbiAgICAgICAgICAgICAgPCEtLSAoY2hhbmdlKT1cImxvYW5DaGFuZ2UoJGV2ZW50KVwiIFxuICAgICAgICAgICAgICAgW3RpY2tzXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS50aWNrc1wiIFxuICAgICAgICAgICAgICAgW3RpY2tzXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS50aWNrc1wiXG4gICAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgICA8IS0tIHt7dGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLnRpY2tzIHwganNvbn19IC0tPlxuICAgICAgICAgICAgICA8IS0tIHt7dGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldICB8IGpzb259fSAtLT5cbiAgICAgICAgICAgICAgPCEtLSB7e3RlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5taW5WYWx1ZX19IC0tPlxuICAgICAgICAgICAgICA8IS0tIHt7dGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnkgfCBqc29ufX0gLS0+XG4gICAgICAgICAgICAgIDwhLS0gW3RpY2tzXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS50aWNrc1wiIFxuICAgICAgICAgICAgICAgIFt0b29sdGlwXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS50b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgW3RpY2tzXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS50aWNrc1wiXG4gICAgICAgICAgICAgICAgIFt0b29sdGlwXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS50b29sdGlwXCJcbiAgICAgICAgICAgICAgLS0+IFxuICAgICAgICAgICAgICA8IS0tIFt0aWNrc109XCJ0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0udGlja3NcIiAtLT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtaW5cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIHt7dGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLnJhbmdlVmFsdWVbMF19fSAtIHt7dGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLnJhbmdlVmFsdWVbMV19fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8ZWpzLXNsaWRlclxuICAgICAgICAgICAgICAgIGlkPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgIFsodmFsdWUpXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5yYW5nZVZhbHVlXCJcbiAgICAgICAgICAgICAgICBbbWluXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5taW5WYWx1ZVwiXG4gICAgICAgICAgICAgICAgW21heF09XCJ0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ubWF4VmFsdWVcIlxuICAgICAgICAgICAgICAgIFtzdGVwXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5yYW5nZVN0ZXBcIlxuICAgICAgICAgICAgICAgIFt0eXBlXT1cIidSYW5nZSdcIlxuICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwic2xpZGVyQ2hhbmdlKHRlbXBGaWx0ZXJbY29uZmlnPy5maWx0ZXJCeV0pXCJcbiAgICAgICAgICAgICAgICAoY2hhbmdlZCk9XCJhcHBseUZpbHRlcigpXCI+XG4gICAgICAgICAgICAgICAgPC9lanMtc2xpZGVyPlxuICAgICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsb2F0LWxlZnQgbWluXCI+4oK5IHt7dGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLm1pblZhbHVlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsb2F0LXJpZ2h0IG1pblwiPuKCuSB7e3RlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5tYXhWYWx1ZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cbiAgICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5kcm9wZG93bi5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJicm93c2VyLWRlZmF1bHQgY3VzdG9tLXNlbGVjdCBmbG9hdC1yaWdodCByYW5nZS1zZWxlY3RcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5kcm9wRG93blJhbmdlVmFsdWVzWzBdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInJhbmdlRHJvcERvd25PbkNoYW5nZSh0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCB2YWx1ZSBvZiB0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0uZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmFsdWUgfCBjdXJyZW5jeUxvY2FsOidJTlInfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJicm93c2VyLWRlZmF1bHQgY3VzdG9tLXNlbGVjdCBmbG9hdC1yaWdodCByYW5nZS1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5kcm9wRG93blJhbmdlVmFsdWVzWzFdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJyYW5nZURyb3BEb3duT25DaGFuZ2UodGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgdmFsdWUgb2YgdGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nVmFsdWVdPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2YWx1ZSB8IGN1cnJlbmN5TG9jYWw6J0lOUid9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyICpuZ0lmPVwiKCFsYXN0ICYmICgoIWNvbmZpZz8ubWluaW11bVNob3dMaW1pdCB8fCAodGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmxlbmd0aCA+IGNvbmZpZz8ubWluaW11bVNob3dMaW1pdCAmJiBjb25maWc/LmlzU2hvd0ZpbHRlciAmJiBjb25maWc/LmZpbHRlclR5cGUgPT0gJ2NoZWNrQm94ZXMnKSkgfHwgKGNvbmZpZz8uZmlsdGVyVHlwZSA9PSAncmFuZ2Vfc2xpZGVyJykpKVwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19
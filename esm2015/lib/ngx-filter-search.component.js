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
    i0.ɵɵproperty("ngIf", !last_r9 && (!(config_r7 == null ? null : config_r7.minimumShowLimit) || ctx_r10.tempFilter[config_r7.filterBy].length > (config_r7 == null ? null : config_r7.minimumShowLimit) && (config_r7 == null ? null : config_r7.isShowFilter) && (config_r7 == null ? null : config_r7.filterType) == "checkBoxes" || (config_r7 == null ? null : config_r7.filterType) == "range_slider") && (config_r7 == null ? null : config_r7.showBottomBar));
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
                // var fieldType = this.config.filter.filterParameter[j].fieldType;
                if (configIndex.isShowFilter) {
                    var key = configIndex.filterBy;
                    var isRangeFilterWithDiffValue = false;
                    //data.hasOwnProperty(configIndex.lowValueFieldName) &&  data.hasOwnProperty(configIndex.highValueFieldName)
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
        // Emit the value to the parent component
        //this.addFilterToRoute()
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
        //rangeFilterArrays.dropDownRangeValues = rangeFilterArrays.rangeValue;
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
                // template: `
                //   <p>
                //     ngx-filter-search works!
                //   </p>
                // `,
                styleUrls: ['./ngx-filter-search.component.scss'],
                templateUrl: './ngx-filter-search.component.html',
                styles: []
            }]
    }], function () { return []; }, { data: [{
            type: Input
        }], config: [{
            type: Input
        }], filteredData: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZpbHRlci1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpbHRlci1zZWFyY2gvc3JjL2xpYi9uZ3gtZmlsdGVyLXNlYXJjaC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmlsdGVyLXNlYXJjaC9zcmMvbGliL25neC1maWx0ZXItc2VhcmNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7O0lDU3RCLDhCQUE0RDtJQUMxRCxpQ0FBMkQ7SUFBQSxzQkFBTTtJQUFBLGlCQUFTO0lBQ3hFLCtCQUE4QjtJQUM1QiwrQkFBMEI7SUFDeEIsaUNBQXFJO0lBQWxGLCtOQUF3QixzTEFBQTtJQUEzRSxpQkFBcUk7SUFDdkksaUJBQU07SUFDUixpQkFBTTtJQUNWLGlCQUFNOzs7SUFIcUQsZUFBd0I7SUFBeEIsMkNBQXdCOzs7O0lBUTNFLDhCQUErVztJQUM3VywrQkFBaUM7SUFDL0Isa0NBQWlDO0lBQUEsWUFBNkM7SUFBQSxpQkFBUztJQUN6RixpQkFBTTtJQUNOLCtCQUFzQjtJQUNwQiw4QkFBb0s7SUFBMUcsK1dBQXlHO0lBQUMscUJBQUs7SUFBQSxpQkFBSztJQUNoTCxpQkFBTTtJQUNSLGlCQUFNOzs7O0lBTCtCLGVBQTZDO0lBQTdDLGdJQUE2Qzs7OztJQU9oRiwrQkFBcU47SUFDbk4saUNBQTZKO0lBQXhELGlPQUE4QixtTkFBQTtJQUFuSSxpQkFBNko7SUFDN0osZ0NBQThCO0lBQzVCLFlBQ0Y7SUFBQSxpQkFBTztJQUNULGlCQUFNOzs7SUFKbUIsZUFBdUI7SUFBdkIseUNBQXVCLDhCQUFBLGdDQUFBLGlDQUFBO0lB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Z0JBQ0wsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7Z0JBQ2pELFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELE1BQU0sRUFBRSxFQUNQO2FBQ0Y7c0NBR1UsSUFBSTtrQkFBWixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0ksWUFBWTtrQkFBckIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IENoYW5nZUV2ZW50QXJncyB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1pbnB1dHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZmlsdGVyLXNlYXJjaCcsXG4gIC8vIHRlbXBsYXRlOiBgXG4gIC8vICAgPHA+XG4gIC8vICAgICBuZ3gtZmlsdGVyLXNlYXJjaCB3b3JrcyFcbiAgLy8gICA8L3A+XG4gIC8vIGAsXG4gIHN0eWxlVXJsczogWycuL25neC1maWx0ZXItc2VhcmNoLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZmlsdGVyLXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgTmd4RmlsdGVyU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGF0YTogYW55O1xuICBASW5wdXQoKSBjb25maWc6IGFueTtcbiAgQE91dHB1dCgpIGZpbHRlcmVkRGF0YTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHB1YmxpYyB0ZW1wRmlsdGVyOiBhbnkgPSB7fTtcbiAgcHVibGljIHNlYXJjaFRleHQ6IGFueTtcbiAgcHVibGljIGZpbHRlckRhdGE6IGFueTtcbiAgcHVibGljIGFsbFNlbGVjdGVkRmlsdGVyczogYW55ID0gW107XG4gIHB1YmxpYyBmaWx0ZXIgPSAnYWxsJztcbiAgcHVibGljIHNvcnQgPSAnbG90X251bWJlcl9sb3cnO1xuICBwdWJsaWMgaXNTb3J0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGRlZmF1bHRGaWx0ZXIgPSAnYWxsJztcbiAgcHVibGljIGRlZmF1bHRTb3J0ID0gJ2xvdF9udW1iZXJfbG93JztcbiAgcHVibGljIGRlZmF1bHRTZWFyY2ggPSAnJztcbiAgcHVibGljIHNlbGVjdGVkTG90U3RhdHVzRmlsdGVyOiBhbnk7XG5cbiAgcHVibGljIHZhbHVlOiBudW1iZXIgPSAzMDtcbiAgcHVibGljIHRvb2x0aXA6IE9iamVjdCA9IHsgcGxhY2VtZW50OiAnQmVmb3JlJywgaXNWaXNpYmxlOiB0cnVlLCBzaG93T246ICdBbHdheXMnIH07XG4gIHB1YmxpYyB0aWNrczogT2JqZWN0ID0geyBwbGFjZW1lbnQ6ICdBZnRlcicsIGxhcmdlU3RlcDogMjAsIHNtYWxsU3RlcDogMTAsIHNob3dTbWFsbFRpY2tzOiB0cnVlIH07XG4gIHB1YmxpYyBzdGVwOiBudW1iZXIgPSA1MDtcblxuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgaWYodGhpcy5kYXRhICYmIHRoaXMuY29uZmlnKSB7XG4gICAgICB0aGlzLnNldEZpbHRlckNvbmZpZyh0aGlzLmRhdGEpO1xuICAgICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5kYXRhO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygncGxlYXNlIEFkZCB0aGUgZGF0YSBhbmQgY29uZmlnJylcbiAgICB9XG4gIH1cblxuICBzZXRGaWx0ZXJDb25maWcoZGF0YTogYW55KSB7XG4gICAgZm9yIChsZXQgaSA9IGRhdGEubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGxldCBzdGF0dXNOYW1lO1xuICAgICAgZGF0YVtpXVsnc3RhdHVzTmFtZSddID0gc3RhdHVzTmFtZTtcbiAgICAgIC8vIENyZWF0ZSB0aGUga2V5IGZvciB0aGUgY3VzdG9tIGZpZWxkcy4uLi4gQWRkIHRoZSBjdXN0b21fIGJlZm9yZSBlYWNoIGN1c3RvbSBmaWxlZCBuYW1lLi4uXG4gICAgICBpZiAoZGF0YVtpXS5jdXN0b21GaWVsZHMgJiYgIV8uaXNFbXB0eShkYXRhW2ldLmN1c3RvbUZpZWxkcykpIHtcbiAgICAgICAgY29uc3QgY3VzdG9tRmllbGRzID0gZGF0YVtpXS5jdXN0b21GaWVsZHM7XG4gICAgICAgICAgZm9yIChjb25zdCBpdGVtIGluIGN1c3RvbUZpZWxkcykge1xuICAgICAgICAgICAgaWYgKGN1c3RvbUZpZWxkc1tpdGVtXS5zaG93RmlsdGVyKSB7XG4gICAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgdW5pcXVlIGtleSBmb3IgdGhlIGN1c3RvbSBmaWVsZHMuXG4gICAgICAgICAgICAgbGV0IGtleSA9ICdjdXN0b21fJytpdGVtO1xuICAgICAgICAgICAgIC8vIENoYW5nZSB0aGUgY29uZmlnIGZvciB0aGUgdGhlIGRpc3BsYXkgbmFtZSB3YW50IHRvIHNob3cgZGlmZmVyZW50LlxuICAgICAgICAgICAgICBjb25zdCBjID0gXy5nZXQodGhpcy5jb25maWcuZmllbGRzQ29uZmlnQ3VzdG9tQ2hhbmdlcywga2V5KVxuICAgICAgICAgICAgICBpZihjKSB7XG4gICAgICAgICAgICAgICAgLy8gQ29kZSBmb3IgYWRkaW5nIHRoZSBlbXB0eSBkYXRhIGFzIHRoZSBub3QgZGF0ZWQgbG90cy4uLi5cbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGN1c3RvbUZpZWxkc1tpdGVtXS52YWx1ZSA9PSBjLnZhbHVlID8gYy5yZXBsYWNlVmFsdWUgOiBjdXN0b21GaWVsZHNbaXRlbV0udmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9ICBjdXN0b21GaWVsZHNbaXRlbV0udmFsdWUgPT0gYy52YWx1ZSA/IGMuZGlzcGxheU5hbWUgOiBjdXN0b21GaWVsZHNbaXRlbV0udmFsdWU7XG4gICAgICAgICAgICAgICAgZGF0YVtpXVsnY3VzdG9tXycrY3VzdG9tRmllbGRzW2l0ZW1dLm5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgZGF0YVtpXVsnY3VzdG9tX2Rpc3BsYXlfJytjdXN0b21GaWVsZHNbaXRlbV0ubmFtZV0gPSBuYW1lO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGFbaV1bJ2N1c3RvbV8nK2N1c3RvbUZpZWxkc1tpdGVtXS5uYW1lXSA9IGN1c3RvbUZpZWxkc1tpdGVtXS52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zZXRDaGVja0JveEZpbHRlcihkYXRhW2ldKTtcbiAgICB9XG4gICAgdGhpcy5zb3J0Q2hlY2tCb3hlc0ZpbHRlcigpO1xuICB9XG4gIHNldENoZWNrQm94RmlsdGVyKGRhdGE6IGFueSkge1xuICAgIC8vIENoZWNrZWQgdGhlIGZpbHRlciBwYXJhbWV0ZXJcbiAgICBpZih0aGlzLmNvbmZpZy5maWx0ZXIgJiYgdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlciApIHtcbiAgICAgIGZvcihsZXQgaiA9IHRoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXIubGVuZ3RoIC0xOyBqID49IDA7IGotLSkge1xuICAgICAgICB2YXIgY29uZmlnSW5kZXggPSB0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdO1xuICAgICAgIC8vIHZhciBmaWVsZFR5cGUgPSB0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpZWxkVHlwZTtcbiAgICAgICAgaWYgKGNvbmZpZ0luZGV4LmlzU2hvd0ZpbHRlcikge1xuICAgICAgICAgIHZhciBrZXkgPSBjb25maWdJbmRleC5maWx0ZXJCeTtcbiAgICAgICAgICB2YXIgaXNSYW5nZUZpbHRlcldpdGhEaWZmVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAvL2RhdGEuaGFzT3duUHJvcGVydHkoY29uZmlnSW5kZXgubG93VmFsdWVGaWVsZE5hbWUpICYmICBkYXRhLmhhc093blByb3BlcnR5KGNvbmZpZ0luZGV4LmhpZ2hWYWx1ZUZpZWxkTmFtZSlcbiAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShjb25maWdJbmRleC5sb3dWYWx1ZUZpZWxkVmFsdWUpICYmICBkYXRhLmhhc093blByb3BlcnR5KGNvbmZpZ0luZGV4LmhpZ2hWYWx1ZUZpZWxkVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaXNSYW5nZUZpbHRlcldpdGhEaWZmVmFsdWUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBpc1JhbmdlRmlsdGVyV2l0aERpZmZWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8IGlzUmFuZ2VGaWx0ZXJXaXRoRGlmZlZhbHVlKSB7XG4gICAgICAgICAgICAgaWYgKHRoaXMudGVtcEZpbHRlci5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICBpZiAoKGRhdGFbY29uZmlnSW5kZXguZmllbGROYW1lXSAmJiBkYXRhW2NvbmZpZ0luZGV4LmZpZWxkVmFsdWVdKSB8fCAoaXNSYW5nZUZpbHRlcldpdGhEaWZmVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgbGV0IG9iajogYW55ID0ge307XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZ0luZGV4LmZpbHRlclR5cGUgPT0gJ2NoZWNrQm94ZXMnKSB7XG4gICAgICAgICAgICAgICAgICBvYmpbJ2ZpbHRlckJ5J10gPSBrZXk7XG4gICAgICAgICAgICAgICAgICBvYmpbJ2ZpZWxkTmFtZSddID0gZGF0YVtjb25maWdJbmRleC5maWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgICAgb2JqWydmaWVsZFZhbHVlJ10gPSAgY29uZmlnSW5kZXguZGF0YVR5cGUgPT0gTnVtYmVyID8gIE51bWJlcihkYXRhW2NvbmZpZ0luZGV4LmZpZWxkVmFsdWVdKTogZGF0YVtjb25maWdJbmRleC5maWVsZFZhbHVlXTtcbiAgICAgICAgICAgICAgICAgIG9ialsnaXNDaGVja2VkJ10gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coIG9ialsnZmllbGRWYWx1ZSddLCAnT0JKIEZJRUxEUyBWQUxVRScpXG4gICAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICB2YXIgaXNQcmVzZW50ID0gdGhpcy50ZW1wRmlsdGVyW2tleV0uc29tZShmdW5jdGlvbihlbDogYW55KXsgcmV0dXJuIGVsWydmaWVsZFZhbHVlJ10gPT0gZGF0YVtzZWxmLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpZWxkVmFsdWVdfSk7XG4gICAgICAgICAgICAgICAgICBpZiAoIWlzUHJlc2VudCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnRlbXBGaWx0ZXJbc2VsZi5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0ucHVzaChvYmopO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjb25maWdJbmRleC5maWx0ZXJUeXBlID09ICdyYW5nZV9zbGlkZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmV2aW91c01pbiA9IHRoaXMudGVtcEZpbHRlcltrZXldLm1pblZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldmlvdXNNYXggPSB0aGlzLnRlbXBGaWx0ZXJba2V5XS5tYXhWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRNaW5WYWx1ZSA9ICBOdW1iZXIoZGF0YVtjb25maWdJbmRleC5sb3dWYWx1ZUZpZWxkVmFsdWVdKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRNYXhWYWx1ZSA9ICBOdW1iZXIoZGF0YVtjb25maWdJbmRleC5oaWdoVmFsdWVGaWVsZFZhbHVlXSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtaW4gPSBwcmV2aW91c01pbiA8IGN1cnJlbnRNaW5WYWx1ZSA/IHByZXZpb3VzTWluIDogY3VycmVudE1pblZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWF4ID0gcHJldmlvdXNNYXggPiBjdXJyZW50TWF4VmFsdWUgPyBwcmV2aW91c01heCA6IGN1cnJlbnRNYXhWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ21pblZhbHVlJ10gPSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydtYXhWYWx1ZSddID0gbWF4O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsncmFuZ2VWYWx1ZSddID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkZWZhdWx0UmFuZ2VWYWx1ZSddID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkcm9wRG93blJhbmdlVmFsdWVzJ10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ3JhbmdlVmFsdWUnXS5wdXNoKG1pbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydyYW5nZVZhbHVlJ10ucHVzaChtYXgpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc21hbGxTdGVwID0gY29uZmlnSW5kZXguc3RlcCA/IChjb25maWdJbmRleC5zdGVwICogMikgOiAxMDBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhcmdlU3RlcCA9IGNvbmZpZ0luZGV4LnN0ZXAgfHwgNTA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBkaWZmID0gbWF4IC0gbWluO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnc21hbGxTdGVwJ10gPSBkaWZmIC8gc21hbGxTdGVwIDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2xhcmdlU3RlcCddID0gZGlmZiAvIGxhcmdlU3RlcCA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWyd0aWNrcyddID0geyBwbGFjZW1lbnQ6ICdBZnRlcicsIGxhcmdlU3RlcDogZGlmZiAvIGxhcmdlU3RlcCAgLCBzbWFsbFN0ZXA6IGRpZmYgLyBzbWFsbFN0ZXAsIHNob3dTbWFsbFRpY2tzOiB0cnVlLCBzaG93TGFyZ2VUaWNrczogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2RlZmF1bHRSYW5nZVZhbHVlJ10ucHVzaChtaW4pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZGVmYXVsdFJhbmdlVmFsdWUnXS5wdXNoKG1heCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkcm9wRG93blJhbmdlVmFsdWVzJ10ucHVzaChtaW4pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZHJvcERvd25SYW5nZVZhbHVlcyddLnB1c2gobWF4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ3JhbmdlU3RlcCddID0gc21hbGxTdGVwIC8vZGlmZiAvIHNtYWxsU3RlcDtcbiAgICAgICAgICAgICAgICAgIC8vICAgZmlsdGVyQXJyYXlSYW5nZUZpbHRlclxuICAgICAgICAgICAgICAgICAgLy8gc2hvd09uOiAnQWx3YXlzJ1xuICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2Ryb3Bkb3duJ10gPSBbXTtcbiAgICAgICAgICAgICAgICAgIGxldCBkcm9wZG93blZhbHVlID0gbWluO1xuICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDw9IHNtYWxsU3RlcDsgayArKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZHJvcGRvd24nXS5wdXNoKGRyb3Bkb3duVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgZHJvcGRvd25WYWx1ZSA9IChkaWZmIC8gc21hbGxTdGVwKSArIGRyb3Bkb3duVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkcm9wZG93biddID0gXy4gdW5pcSh0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZHJvcGRvd24nXSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBvYmo6IGFueSA9IHt9O1xuICAgICAgICAgICAgICAgIGlmIChjb25maWdJbmRleC5pc1Nob3dGaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgoZGF0YVtjb25maWdJbmRleC5maWVsZE5hbWVdICYmIGRhdGFbY29uZmlnSW5kZXguZmllbGRWYWx1ZV0pIHx8IChpc1JhbmdlRmlsdGVyV2l0aERpZmZWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV0gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2ZpbHRlclRpdGxlJ10gPSBjb25maWdJbmRleC5maWx0ZXJUaXRsZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2lzU2hvd0ZpbHRlciddID0gY29uZmlnSW5kZXguaXNTaG93RmlsdGVyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZmlsdGVyQnknXSA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2ZpbHRlclZhbHVlc1NvcnRpbmcnXSA9IGNvbmZpZ0luZGV4LmZpbHRlclZhbHVlc1NvcnRpbmc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydmaWx0ZXJTb3J0RGlyZWN0aW9uJ10gPSBjb25maWdJbmRleC5maWx0ZXJTb3J0RGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnaXNTaG93TW9yZSddID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydmaWx0ZXJDaGVja0JveExpbWl0J10gPSBjb25maWdJbmRleC5maWx0ZXJDaGVja0JveExpbWl0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZmlsdGVyVHlwZSddID0gY29uZmlnSW5kZXguZmlsdGVyVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZ0luZGV4LmZpbHRlclR5cGUgPT0gJ2NoZWNrQm94ZXMnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgb2JqWydmaWx0ZXJCeSddID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICAgIG9ialsnZmllbGROYW1lJ10gPSBkYXRhW2NvbmZpZ0luZGV4LmZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgb2JqWydmaWVsZFZhbHVlJ10gPSAgY29uZmlnSW5kZXguZGF0YVR5cGUgPT0gTnVtYmVyID8gIE51bWJlcihkYXRhW2NvbmZpZ0luZGV4LmZpZWxkVmFsdWVdKTogZGF0YVtjb25maWdJbmRleC5maWVsZFZhbHVlXTtcbiAgICAgICAgICAgICAgICAgICAgICBvYmpbJ2lzQ2hlY2tlZCddID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV0ucHVzaChvYmopO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY29uZmlnSW5kZXguZmlsdGVyVHlwZSA9PSAncmFuZ2Vfc2xpZGVyJykge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydmaWx0ZXJCeUxvd1ZhbHVlJ10gPSBjb25maWdJbmRleC5maWx0ZXJCeUxvd1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydmaWx0ZXJCeUhpZ2hWYWx1ZSddID0gY29uZmlnSW5kZXguZmlsdGVyQnlIaWdoVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ3JhbmdlVmFsdWUnXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkZWZhdWx0UmFuZ2VWYWx1ZSddID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2Ryb3BEb3duUmFuZ2VWYWx1ZXMnXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgIGxldCBtaW4gPSBOdW1iZXIoZGF0YVtjb25maWdJbmRleC5sb3dWYWx1ZUZpZWxkVmFsdWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4ID0gTnVtYmVyKGRhdGFbY29uZmlnSW5kZXguaGlnaFZhbHVlRmllbGRWYWx1ZV0pO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydtaW5WYWx1ZSddID0gbWluO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydtYXhWYWx1ZSddID0gbWF4XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ3JhbmdlVmFsdWUnXS5wdXNoKG1pbik7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ3JhbmdlVmFsdWUnXS5wdXNoKG1heCk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2RlZmF1bHRSYW5nZVZhbHVlJ10ucHVzaChtaW4pO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkZWZhdWx0UmFuZ2VWYWx1ZSddLnB1c2gobWF4KTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZHJvcERvd25SYW5nZVZhbHVlcyddLnB1c2gobWluKTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZHJvcERvd25SYW5nZVZhbHVlcyddLnB1c2gobWF4KTtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgc3RlcCA9IGNvbmZpZ0luZGV4LnN0ZXAgfHwgMTAwO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkcm9wZG93biddID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ3JhbmdlU3RlcCddID0gIGNvbmZpZ0luZGV4LnN0ZXAgKiAyOy8vKG1pbiArIG1heCkgLyBzdGVwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzb3J0Q2hlY2tCb3hlc0ZpbHRlcigpIHtcbiAgICBmb3IobGV0IGogPSB0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyLmxlbmd0aCAtMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmlzU2hvd0ZpbHRlcikge1xuICAgICAgICAgICBpZiAodGhpcy50ZW1wRmlsdGVyLmhhc093blByb3BlcnR5KHRoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnkpKSB7XG4gICAgICAgICAgICAgaWYgKHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XS5maWx0ZXJWYWx1ZXNTb3J0aW5nXG4gICAgICAgICAgICAgICYmIHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XS5maWx0ZXJTb3J0RGlyZWN0aW9uXG4gICAgICAgICAgICAgICYmIHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XS5maWx0ZXJUeXBlID09ICdjaGVja0JveGVzJ1xuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgbGV0IHNvcnREaXJlY3Rpb24gPSBfLmxvd2VyQ2FzZSh0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0uZmlsdGVyU29ydERpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgIHNvcnREaXJlY3Rpb24gPSBzb3J0RGlyZWN0aW9uID09ICdhc2MnICA/IHNvcnREaXJlY3Rpb24gOiAnZGVzYyc7XG4gICAgICAgICAgICAgICAgIGxldCBkaXJlY3Rpb246IGFueSA9IFtdO1xuICAgICAgICAgICAgICAgICBkaXJlY3Rpb24ucHVzaChzb3J0RGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgbGV0IHBpY2tBcnJheSA9IF8ucGljayh0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0sIFsnZmlsdGVyVGl0bGUnLCAnaXNTaG93RmlsdGVyJywgJ2ZpbHRlckJ5JywgJ2ZpbHRlclZhbHVlc1NvcnRpbmcnLFxuICAgICAgICAgICAgICAgICAnZmlsdGVyU29ydERpcmVjdGlvbicsICdpc1Nob3dNb3JlJywgJ2ZpbHRlckNoZWNrQm94TGltaXQnLCAnZmlsdGVyVHlwZSddKTtcbiAgICAgICAgICAgICAgICAgY29uc3Qgc29ydGVkID0gXy5vcmRlckJ5KHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XSAsIFsnZmllbGRWYWx1ZSddLCBkaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0gPSBzb3J0ZWQ7XG4gICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XVsnZmlsdGVyVGl0bGUnXSA9IHBpY2tBcnJheS5maWx0ZXJUaXRsZTtcbiAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldWydpc1Nob3dGaWx0ZXInXSA9IHBpY2tBcnJheS5pc1Nob3dGaWx0ZXI7XG4gICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XVsnZmlsdGVyQnknXSA9cGlja0FycmF5LmZpbHRlckJ5O1xuICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV1bJ2ZpbHRlclZhbHVlc1NvcnRpbmcnXSA9IHBpY2tBcnJheS5maWx0ZXJWYWx1ZXNTb3J0aW5nO1xuICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV1bJ2ZpbHRlclNvcnREaXJlY3Rpb24nXSA9IHBpY2tBcnJheS5maWx0ZXJTb3J0RGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV1bJ2lzU2hvd01vcmUnXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV1bJ2ZpbHRlckNoZWNrQm94TGltaXQnXSA9IHBpY2tBcnJheS5maWx0ZXJDaGVja0JveExpbWl0O1xuICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV1bJ2ZpbHRlclR5cGUnXSA9IHBpY2tBcnJheS5maWx0ZXJUeXBlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gIH1cblxuXG4gIGFwcGx5RmlsdGVyKCkge1xuICAgIC8vIEFzc2lnbiB0aGUgb3JpZ2luYWwgYXJyYXkgd2l0aG91dCBhbnkgZmlsdGVyIHRvIHRoZSBuZXdMb3RzXG4gICAgdmFyIG5ld0xvdHMgPSB0aGlzLmRhdGE7XG4gICAgICAvLyBDaGVjayB0aGUgc2VhcmNoVGV4dCBpcyBub3QgdW5kZWZpbmVkIGFuZCB0aGVuIHNlYXJjaCB0aGUgYnkgcHJvdmlkZWQgZmllbGRzLlxuICAgICAgaWYgKHRoaXMuc2VhcmNoVGV4dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IHRoaXMuc2VhcmNoVGV4dC50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgbWFpblNlYXJjaEFycmF5ID0gW107XG4gICAgICAgICAgLy8gU2VhcmNoIEluIHRoZSBhbGwgZmllbGRzIGdpdmVuIGluIHRoZSBjb25maWcgb2YgdGhlIHNlYXJjaC5cbiAgICAgICAgICBmb3IgKGxldCBqID0gdGhpcy5jb25maWcuc2VhcmNoLnNlYXJjaFBhcmFtZXRlci5sZW5ndGggLTE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgICBsZXQgc2VhcmNoQXJyYXkgPSBbXVxuICAgICAgICAgICAgc2VhcmNoQXJyYXkgPSAgdGhpcy5kYXRhLmZpbHRlcigoaXQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaXRbdGhpcy5jb25maWcuc2VhcmNoLnNlYXJjaFBhcmFtZXRlcltqXS5zZWFyY2hCeV0gIT0gbnVsbCAmJiBpdFt0aGlzLmNvbmZpZy5zZWFyY2guc2VhcmNoUGFyYW1ldGVyW2pdLnNlYXJjaEJ5XSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRbdGhpcy5jb25maWcuc2VhcmNoLnNlYXJjaFBhcmFtZXRlcltqXS5zZWFyY2hCeV0udG9Mb2NhbGVMb3dlckNhc2UoKS5pbmNsdWRlcyh0aGlzLnNlYXJjaFRleHQpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICAvLyBQdXNoIHRoZSBlYWNoIHNlYXJjaCByZXN1bHQuLi5cbiAgICAgICAgICBpZiAoc2VhcmNoQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbWFpblNlYXJjaEFycmF5LnB1c2goLi4uc2VhcmNoQXJyYXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBBc3NpZ24gdGhlIHNlYXJjaGVkIEFycmF5IHRvIHRoZSBsb3RzIEFycmF5LlxuICAgICAgICAgIG5ld0xvdHMgPSBtYWluU2VhcmNoQXJyYXk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGFsbFNlbGVjdGVkQ2hlY2tCb3hlc0FycmF5ID0gW107XG4gICAgICB2YXIgYWxsU2VsZWN0ZWRSYW5nZUZpbHRlckFycmF5ID0gW107XG4gICAgICAvLyBDaGVjayB0aGUgY29uZmlnIGZvciB0aGUgZmlsdGVyLi4uLlxuICAgICAgZm9yKGxldCBqID0gdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlci5sZW5ndGggLTE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgIC8vIENoZWNrIHRoZSBzdGF0dXMgb2YgdGhlIGZpbHRlclxuICAgICAgICBpZiAodGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5pc1Nob3dGaWx0ZXIpIHtcbiAgICAgICAgICBpZiAodGhpcy50ZW1wRmlsdGVyLmhhc093blByb3BlcnR5KHRoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnkpICYmIHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XS5maWx0ZXJUeXBlID09ICdjaGVja0JveGVzJykge1xuICAgICAgICAgICAgLy8gRmlsdGVyIHRoZSBjaGVja2VkIFZhbHVlc1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZExvdFN0YXR1c0ZpbHRlciA9ICB0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0uZmlsdGVyKCh2YWx1ZTogYW55LCBpbmRleDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmlzQ2hlY2tlZFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFB1c2ggdGhlIGFsbCBjaGVja2VkIHZhbHVlcyBpbiBzYW1lIGFycmF5XG4gICAgICAgICAgICBhbGxTZWxlY3RlZENoZWNrQm94ZXNBcnJheS5wdXNoKHRoaXMuc2VsZWN0ZWRMb3RTdGF0dXNGaWx0ZXIpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnRlbXBGaWx0ZXIuaGFzT3duUHJvcGVydHkodGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeSkgJiYgdGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldLmZpbHRlclR5cGUgPT0gJ3JhbmdlX3NsaWRlcicpIHtcbiAgICAgICAgICAgIC8vIElmIGZpbHRlciB0eXBlIGlzIHRoZSBSYW5nZSBmaWx0ZXIgdGhlbiBwdXNoIHRoZSBkYXRhIGluIHRoZSByYW5nZSBmaWx0ZXIuXG4gICAgICAgICAgICBhbGxTZWxlY3RlZFJhbmdlRmlsdGVyQXJyYXkucHVzaCh0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgc2luZ2xlVHlwZUZpbHRlckFycmF5ID0gW107XG4gICAgICB0aGlzLmFsbFNlbGVjdGVkRmlsdGVycyA9IGFsbFNlbGVjdGVkQ2hlY2tCb3hlc0FycmF5O1xuICAgICAgLy9GaWx0ZXIgdGhlIGRhdGEgYmFzZWQgb24gY2hlY2tib3hlc1xuICAgICAgaWYgKGFsbFNlbGVjdGVkQ2hlY2tCb3hlc0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAvLyBGaWx0ZXIgdGhlIGVhY2ggYXJyYXkgYXQgYSB0aW1lLCBJbiBjb25maWcgbXVsdGlwbGUgZmlsdGVycy5cbiAgICAgICBzaW5nbGVUeXBlRmlsdGVyQXJyYXkgPSB0aGlzLmZpbHRlclNpbmdsZShuZXdMb3RzICxhbGxTZWxlY3RlZENoZWNrQm94ZXNBcnJheSk7XG4gICAgICAgbmV3TG90cyA9IHNpbmdsZVR5cGVGaWx0ZXJBcnJheTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0xvdHMgPSBuZXdMb3RzO1xuICAgICAgfVxuXG4gICAgICBsZXQgc2luZ2xlUmFuZ2VTbGlkZXJGaWx0ZXIgPSBbXTtcbiAgICAgIC8vIEZpbHRlciB0aGUgZGF0YSBiYXNlZCBvbiB0aGUgcmFuZ2UgZmlsdGVyLlxuICAgICAgaWYgKGFsbFNlbGVjdGVkUmFuZ2VGaWx0ZXJBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBGaWx0ZXIgdGhlIGVhY2ggYXJyYXkgYXQgYSB0aW1lLCBJbiBjb25maWcgbXVsdGlwbGUgZmlsdGVycy5cbiAgICAgICBzaW5nbGVSYW5nZVNsaWRlckZpbHRlciA9IHRoaXMuZmlsdGVyU2luZ2xlUmFuZ2VGaWx0ZXIobmV3TG90cyAsIGFsbFNlbGVjdGVkUmFuZ2VGaWx0ZXJBcnJheSk7XG4gICAgICAgIG5ld0xvdHMgPSBzaW5nbGVSYW5nZVNsaWRlckZpbHRlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld0xvdHMgPSBuZXdMb3RzO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmZpbHRlckRhdGEgPSBbXTtcbiAgICAgIHRoaXMuZmlsdGVyRGF0YSA9IG5ld0xvdHM7XG5cbiAgICAgIC8vIENoZWNrIHRoZSBTb3J0aW5nIGlzIGFwcGxpZWQgaWYgWWVzIHRoZW4gc29ydCB0aGUgYXJyYXkgYWZ0ZXIgZmlsdGVyLlxuICAgICAgaWYgKHRoaXMuaXNTb3J0ZWQpIHtcbiAgICAgICAgLy90aGlzLnNvcnRMb3RzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmZpbHRlcmVkRGF0YS5lbWl0KHRoaXMuZmlsdGVyRGF0YSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEVtaXQgdGhlIHZhbHVlIHRvIHRoZSBwYXJlbnQgY29tcG9uZW50XG4gICAgICAvL3RoaXMuYWRkRmlsdGVyVG9Sb3V0ZSgpXG4gIH1cblxuICBmaWx0ZXJTaW5nbGUoZGF0YTogYW55LCBzZWxlY3RlZENoZWNrQm94ZXNBcnJheXM6IGFueSApIHtcbiAgICBmb3IgKGxldCBrID0gc2VsZWN0ZWRDaGVja0JveGVzQXJyYXlzLmxlbmd0aCAtMTsgayA+PSAwOyBrLS0pIHtcbiAgICAgIHZhciBuZXdEYXRhID0gW107XG4gICAgICBpZiAoc2VsZWN0ZWRDaGVja0JveGVzQXJyYXlzW2tdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZGF0YSA9IHRoaXMuZmlsdGVyQXJyYXlCYXNlZE9uQ2hlY2tCb3hlcyhkYXRhLCBzZWxlY3RlZENoZWNrQm94ZXNBcnJheXNba10pXG4gICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbmV3RGF0YS5wdXNoKC4uLmRhdGEpO1xuICAgICAgICAgIGRhdGEgPSBuZXdEYXRhO1xuICAgICAgIH0gZWxzZSB7XG4gICAgICAgICBkYXRhID0gW107XG4gICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy51bmlxdWVWYWx1ZXNJbkFycmF5KGRhdGEpO1xuICB9XG5cblxuICBmaWx0ZXJTaW5nbGVSYW5nZUZpbHRlcihkYXRhOiBhbnksIHNlbGVjdGVkUmFuZ2VGaWx0ZXJBcnJheXM6IGFueSApIHtcbiAgICBmb3IgKGxldCBrID0gc2VsZWN0ZWRSYW5nZUZpbHRlckFycmF5cy5sZW5ndGggLTE7IGsgPj0gMDsgay0tKXtcbiAgICAgIHZhciBuZXdEYXRhID0gW107XG4gICAgICBpZiAoXy5pc09iamVjdChzZWxlY3RlZFJhbmdlRmlsdGVyQXJyYXlzW2tdKSkge1xuICAgICAgICBkYXRhID0gdGhpcy5maWx0ZXJBcnJheVJhbmdlRmlsdGVyKGRhdGEsIHNlbGVjdGVkUmFuZ2VGaWx0ZXJBcnJheXNba10pO1xuICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgIG5ld0RhdGEucHVzaCguLi5kYXRhKTtcbiAgICAgICAgICBkYXRhID0gbmV3RGF0YTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVuaXF1ZVZhbHVlc0luQXJyYXkoZGF0YSk7XG4gIH1cblxuICBmaWx0ZXJBcnJheUJhc2VkT25DaGVja0JveGVzIChsb3RzQXJyYXk6IGFueSwgc2VsZWN0ZWRDaGVja0JveGVzQXJyYXlzOiBhbnkpIHtcbiAgICB2YXIgZmlsdGVyZWQ6IGFueSA9IFtdO1xuICAgIGZvciAodmFyIGxvdHMgaW4gbG90c0FycmF5KSB7XG4gICAgICBpZiAoc2VsZWN0ZWRDaGVja0JveGVzQXJyYXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzZWxlY3RlZENoZWNrQm94ZXNBcnJheXMuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAobG90c0FycmF5W2xvdHNdW2VsZW1lbnQuZmlsdGVyQnldID09IGVsZW1lbnQuZmllbGRWYWx1ZSApe1xuICAgICAgICAgICAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgZmlsdGVyZWQucHVzaChsb3RzQXJyYXlbbG90c10pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkLnB1c2gobG90c0FycmF5W2xvdHNdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudW5pcXVlVmFsdWVzSW5BcnJheShmaWx0ZXJlZCk7XG4gIH1cblxuICB1bmlxdWVWYWx1ZXNJbkFycmF5KGRhdGE6IGFueSApIHtcbiAgICBjb25zdCB1bmlxdWVWYWx1ZXMgPSBkYXRhLmZpbHRlcigoZWxlbWVudDogYW55LCBpbmRleDogbnVtYmVyKSA9PlxuICAgIGRhdGEuZmluZEluZGV4KCAob2JqOiBhbnkpID0+IG9ialt0aGlzLmNvbmZpZy5maWx0ZXIudW5pcXVlQ29sdW1uXSA9PSBlbGVtZW50W3RoaXMuY29uZmlnLmZpbHRlci51bmlxdWVDb2x1bW5dKSA9PSBpbmRleCk7XG4gICAgcmV0dXJuIHVuaXF1ZVZhbHVlcztcbiAgfVxuXG5cblxuICBmaWx0ZXJBcnJheVJhbmdlRmlsdGVyIChsb3RzQXJyYXk6IGFueSwgcmFuZ2VGaWx0ZXJBcnJheXM6IGFueSkge1xuICAgIHZhciBmaWx0ZXJlZCA9IFtdO1xuICAgIGZvciAodmFyIGxvdHMgaW4gbG90c0FycmF5KSB7XG4gICAgICBsZXQgbWluID0gcmFuZ2VGaWx0ZXJBcnJheXMucmFuZ2VWYWx1ZVswXTtcbiAgICAgIGxldCBtYXggPSByYW5nZUZpbHRlckFycmF5cy5yYW5nZVZhbHVlWzFdO1xuICAgICAgbGV0IG1pblZhbHVlSW5kZXggPSBOdW1iZXIobG90c0FycmF5W2xvdHNdW3JhbmdlRmlsdGVyQXJyYXlzLmZpbHRlckJ5TG93VmFsdWVdKTtcbiAgICAgIGxldCBtYXhWYWx1ZUluZGV4ID0gTnVtYmVyKGxvdHNBcnJheVtsb3RzXVtyYW5nZUZpbHRlckFycmF5cy5maWx0ZXJCeUhpZ2hWYWx1ZV0pO1xuICAgICAgaWYgKChtaW5WYWx1ZUluZGV4ID49IG1pbiAmJiBtaW5WYWx1ZUluZGV4IDw9IG1heCAmJiBtYXhWYWx1ZUluZGV4ID49IG1pbiAmJiBtYXhWYWx1ZUluZGV4IDw9IG1heCkpe1xuICAgICAgICAgIGZpbHRlcmVkLnB1c2gobG90c0FycmF5W2xvdHNdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy9yYW5nZUZpbHRlckFycmF5cy5kcm9wRG93blJhbmdlVmFsdWVzID0gcmFuZ2VGaWx0ZXJBcnJheXMucmFuZ2VWYWx1ZTtcbiAgICByZXR1cm4gdGhpcy51bmlxdWVWYWx1ZXNJbkFycmF5KGZpbHRlcmVkKTtcbiAgfVxuXG4gIGNsZWFyU2luZ2xlRmlsdGVycyhmaWx0ZXJCeTogc3RyaW5nICwgZmlsdGVyVHlwZT86IGFueSkge1xuICAgIGlmIChmaWx0ZXJCeSAmJiBmaWx0ZXJUeXBlID09ICdjaGVja0JveGVzJykge1xuICAgICAgdGhpcy51bkNoZWNrZWRDaGVja0JveGVzKHRoaXMudGVtcEZpbHRlcltmaWx0ZXJCeV0pXG4gICAgfSBlbHNlIGlmIChmaWx0ZXJCeSAmJiBmaWx0ZXJUeXBlID09ICdyYW5nZV9zbGlkZXInKSB7XG4gICAgICB0aGlzLmNsZWFyUmFuZ2VTbGlkZXJGaWx0ZXIodGhpcy50ZW1wRmlsdGVyW2ZpbHRlckJ5XSk7XG4gICAgfVxuICAgIHRoaXMuYXBwbHlGaWx0ZXIoKTtcbiAgfVxuXG4gIGNsZWFyQWxsRmlsdGVycygpIHtcbiAgICB0aGlzLmZpbHRlckRhdGEgPSBbXTtcbiAgICB0aGlzLnNvcnQgPSB0aGlzLmRlZmF1bHRTb3J0O1xuICAgIHRoaXMuc2VhcmNoVGV4dCA9IHRoaXMuZGVmYXVsdFNlYXJjaDtcbiAgICBmb3IobGV0IGogPSB0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyLmxlbmd0aCAtMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmlzU2hvd0ZpbHRlcikge1xuICAgICAgICAgICBpZiAoKHRoaXMudGVtcEZpbHRlci5oYXNPd25Qcm9wZXJ0eSh0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5KSAmJiBcbiAgICAgICAgICAgKHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XS5maWx0ZXJUeXBlID09PSAnY2hlY2tCb3hlcycpKSkge1xuICAgICAgICAgICAgdGhpcy51bkNoZWNrZWRDaGVja0JveGVzKHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XSk7XG4gICAgICAgICAgfSBlbHNlIGlmICgodGhpcy50ZW1wRmlsdGVyLmhhc093blByb3BlcnR5KHRoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnkpICYmXG4gICAgICAgICAgICh0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0uZmlsdGVyVHlwZSA9PT0gJ3JhbmdlX3NsaWRlcicpKSkge1xuICAgICAgICAgICAgdGhpcy5jbGVhclJhbmdlU2xpZGVyRmlsdGVyKHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XSlcbiAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgdGhpcy5maWx0ZXJEYXRhID0gdGhpcy5kYXRhO1xuICAgIHRoaXMuZmlsdGVyZWREYXRhLmVtaXQodGhpcy5maWx0ZXJEYXRhKTtcbiAgfVxuXG4gIHVuQ2hlY2tlZENoZWNrQm94ZXMoZGF0YTogYW55KSB7XG4gICAgZGF0YS5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcbiAgICAgIGVsZW1lbnQuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgfSlcbiAgfVxuXG4gIGNsZWFyUmFuZ2VTbGlkZXJGaWx0ZXIoZGF0YTogYW55KSB7XG4gICAgZGF0YS5yYW5nZVZhbHVlID0gZGF0YS5kZWZhdWx0UmFuZ2VWYWx1ZTtcbiAgICBkYXRhLmRyb3BEb3duUmFuZ2VWYWx1ZXMgPSBbXTtcbiAgICBkYXRhLmRyb3BEb3duUmFuZ2VWYWx1ZXMgPSBkYXRhLmRlZmF1bHRSYW5nZVZhbHVlO1xuICB9XG5cbiAgc2hvd01vcmVJdGVtcyhmaWx0ZXJCeTogc3RyaW5nLHNob3dTdGF0dXM6IGJvb2xlYW4pIHtcbiAgICBpZihzaG93U3RhdHVzKSB7XG4gICAgICB0aGlzLnRlbXBGaWx0ZXJbZmlsdGVyQnldWydmaWx0ZXJDaGVja0JveExpbWl0J10gPSB0aGlzLnRlbXBGaWx0ZXJbZmlsdGVyQnldLmxlbmd0aDtcbiAgICAgIHRoaXMudGVtcEZpbHRlcltmaWx0ZXJCeV1bJ2lzU2hvd01vcmUnXSA9IHRydWU7XG4gICAgfSBlbHNlIGlmKCFzaG93U3RhdHVzKSB7XG4gICAgICB0aGlzLnRlbXBGaWx0ZXJbZmlsdGVyQnldWydpc1Nob3dNb3JlJ10gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuXG4gIHJhbmdlRHJvcERvd25PbkNoYW5nZShkYXRhOiBhbnkpIHtcbiAgICBkYXRhLnJhbmdlVmFsdWUgPSBkYXRhLmRyb3BEb3duUmFuZ2VWYWx1ZXM7XG4gICAgdGhpcy5hcHBseUZpbHRlcigpO1xuICB9XG5cbiAgc2xpZGVyQ2hhbmdlKGRhdGE6IGFueSB8IHVuZGVmaW5lZCkge1xuICAgIGRhdGEuZHJvcERvd25SYW5nZVZhbHVlcyA9IGRhdGEucmFuZ2VWYWx1ZVxuICB9XG5cblxufVxuIiwiPGRpdiBjbGFzcz1cInJvd1wiICpuZ0lmPVwiZGF0YSAmJiBjb25maWdcIj5cbiAgPGRpdiBjbGFzcz1cImNvbC1zbS0xMlwiPlxuICAgICA8ZGl2IGNsYXNzPVwicm93IHB0LTEgcGItMVwiPlxuICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuXG4gICAgICAgPC9kaXY+XG4gICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICAgICA8aDYgY2xhc3M9XCJmbG9hdC1yaWdodCBjdXJzb3ItcG9pbnRlciB0ZXh0LXByaW1hcnlcIiAoY2xpY2spPVwiY2xlYXJBbGxGaWx0ZXJzKClcIj5DbGVhciBBbGw8L2g2PlxuICAgICAgIDwvZGl2PlxuICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgKm5nSWY9XCJjb25maWc/LnNlYXJjaD8uaXNTZWFyY2hTaG93XCIgY2xhc3M9XCJwdC0xIHBiLTFcIj5cbiAgICAgICAgPHN0cm9uZyBjbGFzcz1cInB0LTIgcGItMiBmb250LXdlaWdodC1ib2xkIHRleHQtY2FwaXRhbGl6ZVwiPlNlYXJjaDwvc3Ryb25nPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cCBwdC0xXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1vdXRsaW5lXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZm9ybTFcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFsobmdNb2RlbCldPVwic2VhcmNoVGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIEtleXdvcmQuLi5cIiAoa2V5dXApPVwiYXBwbHlGaWx0ZXIoKVwiLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8aHI+XG4gICAgICA8ZGl2ICpuZ0lmPVwiY29uZmlnPy5maWx0ZXI/LmlzU2hvd0ZpbHRlciAmJiB0ZW1wRmlsdGVyXCI+XG4gICAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGNvbmZpZyBvZiBjb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcjsgbGV0IGkgPSBpbmRleDtsZXQgbGFzdCA9IGxhc3Q7XCI+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29uZmlnPy5pc1Nob3dGaWx0ZXIgJiYgdGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcHQtMSBwYi0xXCIgKm5nSWY9XCIoKCghY29uZmlnPy5taW5pbXVtU2hvd0xpbWl0ICYmIHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5sZW5ndGggPiAwKSB8fCAodGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmxlbmd0aCA+IGNvbmZpZz8ubWluaW11bVNob3dMaW1pdCAmJiBjb25maWc/LmlzU2hvd0ZpbHRlciAmJiBjb25maWc/LmZpbHRlclR5cGUgPT0gJ2NoZWNrQm94ZXMnICYmIHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5sZW5ndGggPiAwKSkgfHwgKGNvbmZpZz8uZmlsdGVyVHlwZSA9PSAncmFuZ2Vfc2xpZGVyJyAmJiB0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ubWF4VmFsdWUgPiAwICkpXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS04IGZsb2F0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJmb250LXdlaWdodC1ib2xkXCI+e3sgdGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldPy5maWx0ZXJUaXRsZX19PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS00XCI+XG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJmbG9hdC1yaWdodCBjdXJzb3ItcG9pbnRlciB0ZXh0LXByaW1hcnkgY2xlYXJcIiAoY2xpY2spPVwiY2xlYXJTaW5nbGVGaWx0ZXJzKHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5maWx0ZXJCeSx0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0uZmlsdGVyVHlwZSlcIj5DbGVhcjwvaDY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiKGNvbmZpZz8uaXNTaG93RmlsdGVyICYmIGNvbmZpZz8uZmlsdGVyVHlwZSA9PSAnY2hlY2tCb3hlcycgJiYgKCFjb25maWc/Lm1pbmltdW1TaG93TGltaXQgfHwgKHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5sZW5ndGggPiBjb25maWc/Lm1pbmltdW1TaG93TGltaXQpKSkgXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiICpuZ0Zvcj1cImxldCBmaWx0ZXIgb2YgdGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldIHwgc2xpY2UgOiAwOighdGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmlzU2hvd01vcmUgPyBjb25maWcuZmlsdGVyQ2hlY2tCb3hMaW1pdCA6IHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5maWx0ZXJDaGVja0JveExpbWl0KTsgbGV0IGkgPSBpbmRleFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFtpZF09XCJmaWx0ZXIuZmllbGROYW1lXCIgW25hbWVdPVwiZmlsdGVyLmZpZWxkTmFtZVwiIFt2YWx1ZV09XCJmaWx0ZXIuZmllbGRWYWx1ZVwiIFsobmdNb2RlbCldPVwiZmlsdGVyLmlzQ2hlY2tlZFwiIChjaGFuZ2UpPVwiYXBwbHlGaWx0ZXIoKVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwbC0yIGZvbnQtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAge3tmaWx0ZXIuZmllbGROYW1lfX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmxlbmd0aCA+IGNvbmZpZz8uZmlsdGVyQ2hlY2tCb3hMaW1pdCBcIj5cbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cImN1cnNvci1wb2ludGVyIHRleHQtcHJpbWFyeSBwdC0xXCIgKm5nSWYgPVwiIXRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5pc1Nob3dNb3JlXCIgKGNsaWNrKT1cInNob3dNb3JlSXRlbXModGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmZpbHRlckJ5LHRydWUpXCI+XG4gICAgICAgICAgICAgICAgICB7eyB0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ubGVuZ3RoIC0gY29uZmlnLmZpbHRlckNoZWNrQm94TGltaXQgfX0gTW9yZVxuICAgICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cImN1cnNvci1wb2ludGVyIHRleHQtcHJpbWFyeSBwdC0xXCIgKm5nSWYgPVwidGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmlzU2hvd01vcmVcIiAoY2xpY2spPVwic2hvd01vcmVJdGVtcyh0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0uZmlsdGVyQnksIGZhbHNlKVwiPlxuICAgICAgICAgICAgICAgICAgICBTaG93IExlc3NcbiAgICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjb25maWc/LmlzU2hvd0ZpbHRlciAmJiBjb25maWc/LmZpbHRlclR5cGUgPT0gJ3JhbmdlX3NsaWRlcicgJiYgdGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLm1heFZhbHVlID4gMFwiPlxuICAgICAgICAgICAgICA8IS0tIChjaGFuZ2UpPVwibG9hbkNoYW5nZSgkZXZlbnQpXCIgXG4gICAgICAgICAgICAgICBbdGlja3NdPVwidGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLnRpY2tzXCIgXG4gICAgICAgICAgICAgICBbdGlja3NdPVwidGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLnRpY2tzXCJcbiAgICAgICAgICAgICAgLS0+XG4gICAgICAgICAgICAgIDwhLS0ge3t0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0udGlja3MgfCBqc29ufX0gLS0+XG4gICAgICAgICAgICAgIDwhLS0ge3t0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0gIHwganNvbn19IC0tPlxuICAgICAgICAgICAgICA8IS0tIHt7dGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLm1pblZhbHVlfX0gLS0+XG4gICAgICAgICAgICAgIDwhLS0ge3t0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeSB8IGpzb259fSAtLT5cbiAgICAgICAgICAgICAgPCEtLSBbdGlja3NdPVwidGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLnRpY2tzXCIgXG4gICAgICAgICAgICAgICAgW3Rvb2x0aXBdPVwidGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLnRvb2x0aXBcIlxuICAgICAgICAgICAgICAgICBbdGlja3NdPVwidGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLnRpY2tzXCJcbiAgICAgICAgICAgICAgICAgW3Rvb2x0aXBdPVwidGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLnRvb2x0aXBcIlxuICAgICAgICAgICAgICAtLT4gXG4gICAgICAgICAgICAgIDwhLS0gW3RpY2tzXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS50aWNrc1wiIC0tPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1pblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAge3t0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ucmFuZ2VWYWx1ZVswXX19IC0ge3t0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ucmFuZ2VWYWx1ZVsxXX19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxlanMtc2xpZGVyXG4gICAgICAgICAgICAgICAgaWQ9XCJyYW5nZVwiXG4gICAgICAgICAgICAgICAgWyh2YWx1ZSldPVwidGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLnJhbmdlVmFsdWVcIlxuICAgICAgICAgICAgICAgIFttaW5dPVwidGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLm1pblZhbHVlXCJcbiAgICAgICAgICAgICAgICBbbWF4XT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5tYXhWYWx1ZVwiXG4gICAgICAgICAgICAgICAgW3N0ZXBdPVwidGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLnJhbmdlU3RlcFwiXG4gICAgICAgICAgICAgICAgW3R5cGVdPVwiJ1JhbmdlJ1wiXG4gICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJzbGlkZXJDaGFuZ2UodGVtcEZpbHRlcltjb25maWc/LmZpbHRlckJ5XSlcIlxuICAgICAgICAgICAgICAgIChjaGFuZ2VkKT1cImFwcGx5RmlsdGVyKClcIj5cbiAgICAgICAgICAgICAgICA8L2Vqcy1zbGlkZXI+XG4gICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxvYXQtbGVmdCBtaW5cIj7igrkge3t0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ubWluVmFsdWV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmxvYXQtcmlnaHQgbWluXCI+4oK5IHt7dGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLm1heFZhbHVlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cInJvd1wiICpuZ0lmPVwidGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmRyb3Bkb3duLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB0LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImJyb3dzZXItZGVmYXVsdCBjdXN0b20tc2VsZWN0IGZsb2F0LXJpZ2h0IHJhbmdlLXNlbGVjdFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmRyb3BEb3duUmFuZ2VWYWx1ZXNbMF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwicmFuZ2VEcm9wRG93bk9uQ2hhbmdlKHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHZhbHVlIG9mIHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5kcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nVmFsdWVdPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2YWx1ZSB8IGN1cnJlbmN5TG9jYWw6J0lOUid9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02IFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInB0LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImJyb3dzZXItZGVmYXVsdCBjdXN0b20tc2VsZWN0IGZsb2F0LXJpZ2h0IHJhbmdlLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwidGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmRyb3BEb3duUmFuZ2VWYWx1ZXNbMV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInJhbmdlRHJvcERvd25PbkNoYW5nZSh0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCB2YWx1ZSBvZiB0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0uZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdWYWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZhbHVlIHwgY3VycmVuY3lMb2NhbDonSU5SJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHIgKm5nSWY9XCIoIWxhc3QgJiYgKCghY29uZmlnPy5taW5pbXVtU2hvd0xpbWl0IHx8ICh0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ubGVuZ3RoID4gY29uZmlnPy5taW5pbXVtU2hvd0xpbWl0ICYmIGNvbmZpZz8uaXNTaG93RmlsdGVyICYmIGNvbmZpZz8uZmlsdGVyVHlwZSA9PSAnY2hlY2tCb3hlcycpKSB8fCAoY29uZmlnPy5maWx0ZXJUeXBlID09ICdyYW5nZV9zbGlkZXInKSkgJiYgY29uZmlnPy5zaG93Qm90dG9tQmFyKVwiPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19
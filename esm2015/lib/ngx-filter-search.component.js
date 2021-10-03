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
NgxFilterSearchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgxFilterSearchComponent, selectors: [["lib-ngx-filter-search"]], inputs: { data: "data", config: "config" }, outputs: { filteredData: "filteredData" }, decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-sm-12"], [1, "row", "pt-1", "pb-1"], [1, "col-sm-6"], [1, "float-right", "cursor-pointer", "text-primary", 3, "click"], ["class", "pt-1 pb-1", 4, "ngIf"], [4, "ngIf"], [1, "pt-1", "pb-1"], [1, "pt-2", "pb-2", "font-weight-bold", "text-capitalize"], [1, "input-group", "pt-1"], [1, "form-outline"], ["type", "text", "id", "form1", "placeholder", "Search Keyword...", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [4, "ngFor", "ngForOf"], ["class", "row pt-1 pb-1", 4, "ngIf"], [1, "col-sm-8", "float-left"], [1, "font-weight-bold"], [1, "col-sm-4"], [1, "float-right", "cursor-pointer", "text-primary", "clear", 3, "click"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], ["type", "checkbox", 3, "id", "name", "value", "ngModel", "ngModelChange", "change"], [1, "pl-2", "font-small"], ["class", "cursor-pointer text-primary pt-1", 3, "click", 4, "ngIf"], [1, "cursor-pointer", "text-primary", "pt-1", 3, "click"], [1, "min"], ["id", "range", 3, "value", "min", "max", "step", "type", "valueChange", "change", "changed"]], template: function NgxFilterSearchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NgxFilterSearchComponent_div_0_Template, 10, 2, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.data && ctx.config);
    } }, directives: [i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i1.NgForOf, i2.CheckboxControlValueAccessor, i3.SliderComponent], pipes: [i1.SlicePipe], styles: ["@import \"node_modules/@syncfusion/ej2-angular-inputs/styles/material.css\";@import \"node_modules/@syncfusion/ej2-base/styles/material.css\";@import \"node_modules/@syncfusion/ej2-buttons/styles/material.css\";@import \"node_modules/@syncfusion/ej2-popups/styles/material.css\";"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxFilterSearchComponent, [{
        type: Component,
        args: [{
                selector: 'lib-ngx-filter-search',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZpbHRlci1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpbHRlci1zZWFyY2gvc3JjL2xpYi9uZ3gtZmlsdGVyLXNlYXJjaC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmlsdGVyLXNlYXJjaC9zcmMvbGliL25neC1maWx0ZXItc2VhcmNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7O0lDU3RCLDhCQUE0RDtJQUMxRCxpQ0FBMkQ7SUFBQSxzQkFBTTtJQUFBLGlCQUFTO0lBQ3hFLCtCQUE4QjtJQUM1QiwrQkFBMEI7SUFDeEIsaUNBQXFJO0lBQWxGLCtOQUF3QixzTEFBQTtJQUEzRSxpQkFBcUk7SUFDdkksaUJBQU07SUFDUixpQkFBTTtJQUNWLGlCQUFNOzs7SUFIcUQsZUFBd0I7SUFBeEIsMkNBQXdCOzs7O0lBUTNFLDhCQUErVztJQUM3VywrQkFBaUM7SUFDL0Isa0NBQWlDO0lBQUEsWUFBNkM7SUFBQSxpQkFBUztJQUN6RixpQkFBTTtJQUNOLCtCQUFzQjtJQUNwQiw4QkFBb0s7SUFBMUcsK1dBQXlHO0lBQUMscUJBQUs7SUFBQSxpQkFBSztJQUNoTCxpQkFBTTtJQUNSLGlCQUFNOzs7O0lBTCtCLGVBQTZDO0lBQTdDLGdJQUE2Qzs7OztJQU9oRiwrQkFBcU47SUFDbk4saUNBQTZKO0lBQXhELGlPQUE4QixtTkFBQTtJQUFuSSxpQkFBNko7SUFDN0osZ0NBQThCO0lBQzVCLFlBQ0Y7SUFBQSxpQkFBTztJQUNULGlCQUFNOzs7SUFKbUIsZUFBdUI7SUFBdkIseUNBQXVCLDhCQUFBLGdDQUFBLGlDQUFBO0lB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Z0JBQ0wsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7Z0JBQ2pELFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELE1BQU0sRUFBRSxFQUNQO2FBQ0Y7c0NBR1UsSUFBSTtrQkFBWixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0ksWUFBWTtrQkFBckIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IENoYW5nZUV2ZW50QXJncyB9IGZyb20gJ0BzeW5jZnVzaW9uL2VqMi1pbnB1dHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbmd4LWZpbHRlci1zZWFyY2gnLFxuICAvLyB0ZW1wbGF0ZTogYFxuICAvLyAgIDxwPlxuICAvLyAgICAgbmd4LWZpbHRlci1zZWFyY2ggd29ya3MhXG4gIC8vICAgPC9wPlxuICAvLyBgLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtZmlsdGVyLXNlYXJjaC5jb21wb25lbnQuc2NzcyddLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWZpbHRlci1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIE5neEZpbHRlclNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcbiAgQElucHV0KCkgY29uZmlnOiBhbnk7XG4gIEBPdXRwdXQoKSBmaWx0ZXJlZERhdGE6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBwdWJsaWMgdGVtcEZpbHRlcjogYW55ID0ge307XG4gIHB1YmxpYyBzZWFyY2hUZXh0OiBhbnk7XG4gIHB1YmxpYyBmaWx0ZXJEYXRhOiBhbnk7XG4gIHB1YmxpYyBhbGxTZWxlY3RlZEZpbHRlcnM6IGFueSA9IFtdO1xuICBwdWJsaWMgZmlsdGVyID0gJ2FsbCc7XG4gIHB1YmxpYyBzb3J0ID0gJ2xvdF9udW1iZXJfbG93JztcbiAgcHVibGljIGlzU29ydGVkOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBkZWZhdWx0RmlsdGVyID0gJ2FsbCc7XG4gIHB1YmxpYyBkZWZhdWx0U29ydCA9ICdsb3RfbnVtYmVyX2xvdyc7XG4gIHB1YmxpYyBkZWZhdWx0U2VhcmNoID0gJyc7XG4gIHB1YmxpYyBzZWxlY3RlZExvdFN0YXR1c0ZpbHRlcjogYW55O1xuXG4gIHB1YmxpYyB2YWx1ZTogbnVtYmVyID0gMzA7XG4gIHB1YmxpYyB0b29sdGlwOiBPYmplY3QgPSB7IHBsYWNlbWVudDogJ0JlZm9yZScsIGlzVmlzaWJsZTogdHJ1ZSwgc2hvd09uOiAnQWx3YXlzJyB9O1xuICBwdWJsaWMgdGlja3M6IE9iamVjdCA9IHsgcGxhY2VtZW50OiAnQWZ0ZXInLCBsYXJnZVN0ZXA6IDIwLCBzbWFsbFN0ZXA6IDEwLCBzaG93U21hbGxUaWNrczogdHJ1ZSB9O1xuICBwdWJsaWMgc3RlcDogbnVtYmVyID0gNTA7XG5cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmKHRoaXMuZGF0YSAmJiB0aGlzLmNvbmZpZykge1xuICAgICAgdGhpcy5zZXRGaWx0ZXJDb25maWcodGhpcy5kYXRhKTtcbiAgICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ3BsZWFzZSBBZGQgdGhlIGRhdGEgYW5kIGNvbmZpZycpXG4gICAgfVxuICB9XG5cbiAgc2V0RmlsdGVyQ29uZmlnKGRhdGE6IGFueSkge1xuICAgIGZvciAobGV0IGkgPSBkYXRhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBsZXQgc3RhdHVzTmFtZTtcbiAgICAgIGRhdGFbaV1bJ3N0YXR1c05hbWUnXSA9IHN0YXR1c05hbWU7XG4gICAgICAvLyBDcmVhdGUgdGhlIGtleSBmb3IgdGhlIGN1c3RvbSBmaWVsZHMuLi4uIEFkZCB0aGUgY3VzdG9tXyBiZWZvcmUgZWFjaCBjdXN0b20gZmlsZWQgbmFtZS4uLlxuICAgICAgaWYgKGRhdGFbaV0uY3VzdG9tRmllbGRzICYmICFfLmlzRW1wdHkoZGF0YVtpXS5jdXN0b21GaWVsZHMpKSB7XG4gICAgICAgIGNvbnN0IGN1c3RvbUZpZWxkcyA9IGRhdGFbaV0uY3VzdG9tRmllbGRzO1xuICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBpbiBjdXN0b21GaWVsZHMpIHtcbiAgICAgICAgICAgIGlmIChjdXN0b21GaWVsZHNbaXRlbV0uc2hvd0ZpbHRlcikge1xuICAgICAgICAgICAgICAvLyBDcmVhdGUgdGhlIHVuaXF1ZSBrZXkgZm9yIHRoZSBjdXN0b20gZmllbGRzLlxuICAgICAgICAgICAgIGxldCBrZXkgPSAnY3VzdG9tXycraXRlbTtcbiAgICAgICAgICAgICAvLyBDaGFuZ2UgdGhlIGNvbmZpZyBmb3IgdGhlIHRoZSBkaXNwbGF5IG5hbWUgd2FudCB0byBzaG93IGRpZmZlcmVudC5cbiAgICAgICAgICAgICAgY29uc3QgYyA9IF8uZ2V0KHRoaXMuY29uZmlnLmZpZWxkc0NvbmZpZ0N1c3RvbUNoYW5nZXMsIGtleSlcbiAgICAgICAgICAgICAgaWYoYykge1xuICAgICAgICAgICAgICAgIC8vIENvZGUgZm9yIGFkZGluZyB0aGUgZW1wdHkgZGF0YSBhcyB0aGUgbm90IGRhdGVkIGxvdHMuLi4uXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBjdXN0b21GaWVsZHNbaXRlbV0udmFsdWUgPT0gYy52YWx1ZSA/IGMucmVwbGFjZVZhbHVlIDogY3VzdG9tRmllbGRzW2l0ZW1dLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSAgY3VzdG9tRmllbGRzW2l0ZW1dLnZhbHVlID09IGMudmFsdWUgPyBjLmRpc3BsYXlOYW1lIDogY3VzdG9tRmllbGRzW2l0ZW1dLnZhbHVlO1xuICAgICAgICAgICAgICAgIGRhdGFbaV1bJ2N1c3RvbV8nK2N1c3RvbUZpZWxkc1tpdGVtXS5uYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGRhdGFbaV1bJ2N1c3RvbV9kaXNwbGF5XycrY3VzdG9tRmllbGRzW2l0ZW1dLm5hbWVdID0gbmFtZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhW2ldWydjdXN0b21fJytjdXN0b21GaWVsZHNbaXRlbV0ubmFtZV0gPSBjdXN0b21GaWVsZHNbaXRlbV0udmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0Q2hlY2tCb3hGaWx0ZXIoZGF0YVtpXSk7XG4gICAgfVxuICAgIHRoaXMuc29ydENoZWNrQm94ZXNGaWx0ZXIoKTtcbiAgfVxuICBzZXRDaGVja0JveEZpbHRlcihkYXRhOiBhbnkpIHtcbiAgICAvLyBDaGVja2VkIHRoZSBmaWx0ZXIgcGFyYW1ldGVyXG4gICAgaWYodGhpcy5jb25maWcuZmlsdGVyICYmIHRoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXIgKSB7XG4gICAgICBmb3IobGV0IGogPSB0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyLmxlbmd0aCAtMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgdmFyIGNvbmZpZ0luZGV4ID0gdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXTtcbiAgICAgICAvLyB2YXIgZmllbGRUeXBlID0gdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWVsZFR5cGU7XG4gICAgICAgIGlmIChjb25maWdJbmRleC5pc1Nob3dGaWx0ZXIpIHtcbiAgICAgICAgICB2YXIga2V5ID0gY29uZmlnSW5kZXguZmlsdGVyQnk7XG4gICAgICAgICAgdmFyIGlzUmFuZ2VGaWx0ZXJXaXRoRGlmZlZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgLy9kYXRhLmhhc093blByb3BlcnR5KGNvbmZpZ0luZGV4Lmxvd1ZhbHVlRmllbGROYW1lKSAmJiAgZGF0YS5oYXNPd25Qcm9wZXJ0eShjb25maWdJbmRleC5oaWdoVmFsdWVGaWVsZE5hbWUpXG4gICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoY29uZmlnSW5kZXgubG93VmFsdWVGaWVsZFZhbHVlKSAmJiAgZGF0YS5oYXNPd25Qcm9wZXJ0eShjb25maWdJbmRleC5oaWdoVmFsdWVGaWVsZFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlzUmFuZ2VGaWx0ZXJXaXRoRGlmZlZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgaXNSYW5nZUZpbHRlcldpdGhEaWZmVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSB8fCBpc1JhbmdlRmlsdGVyV2l0aERpZmZWYWx1ZSkge1xuICAgICAgICAgICAgIGlmICh0aGlzLnRlbXBGaWx0ZXIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgaWYgKChkYXRhW2NvbmZpZ0luZGV4LmZpZWxkTmFtZV0gJiYgZGF0YVtjb25maWdJbmRleC5maWVsZFZhbHVlXSkgfHwgKGlzUmFuZ2VGaWx0ZXJXaXRoRGlmZlZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGxldCBvYmo6IGFueSA9IHt9O1xuICAgICAgICAgICAgICAgIGlmIChjb25maWdJbmRleC5maWx0ZXJUeXBlID09ICdjaGVja0JveGVzJykge1xuICAgICAgICAgICAgICAgICAgb2JqWydmaWx0ZXJCeSddID0ga2V5O1xuICAgICAgICAgICAgICAgICAgb2JqWydmaWVsZE5hbWUnXSA9IGRhdGFbY29uZmlnSW5kZXguZmllbGROYW1lXTtcbiAgICAgICAgICAgICAgICAgIG9ialsnZmllbGRWYWx1ZSddID0gIGNvbmZpZ0luZGV4LmRhdGFUeXBlID09IE51bWJlciA/ICBOdW1iZXIoZGF0YVtjb25maWdJbmRleC5maWVsZFZhbHVlXSk6IGRhdGFbY29uZmlnSW5kZXguZmllbGRWYWx1ZV07XG4gICAgICAgICAgICAgICAgICBvYmpbJ2lzQ2hlY2tlZCddID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCBvYmpbJ2ZpZWxkVmFsdWUnXSwgJ09CSiBGSUVMRFMgVkFMVUUnKVxuICAgICAgICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgdmFyIGlzUHJlc2VudCA9IHRoaXMudGVtcEZpbHRlcltrZXldLnNvbWUoZnVuY3Rpb24oZWw6IGFueSl7IHJldHVybiBlbFsnZmllbGRWYWx1ZSddID09IGRhdGFbc2VsZi5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWVsZFZhbHVlXX0pO1xuICAgICAgICAgICAgICAgICAgaWYgKCFpc1ByZXNlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50ZW1wRmlsdGVyW3NlbGYuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoY29uZmlnSW5kZXguZmlsdGVyVHlwZSA9PSAncmFuZ2Vfc2xpZGVyJykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcHJldmlvdXNNaW4gPSB0aGlzLnRlbXBGaWx0ZXJba2V5XS5taW5WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzTWF4ID0gdGhpcy50ZW1wRmlsdGVyW2tleV0ubWF4VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50TWluVmFsdWUgPSAgTnVtYmVyKGRhdGFbY29uZmlnSW5kZXgubG93VmFsdWVGaWVsZFZhbHVlXSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50TWF4VmFsdWUgPSAgTnVtYmVyKGRhdGFbY29uZmlnSW5kZXguaGlnaFZhbHVlRmllbGRWYWx1ZV0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWluID0gcHJldmlvdXNNaW4gPCBjdXJyZW50TWluVmFsdWUgPyBwcmV2aW91c01pbiA6IGN1cnJlbnRNaW5WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1heCA9IHByZXZpb3VzTWF4ID4gY3VycmVudE1heFZhbHVlID8gcHJldmlvdXNNYXggOiBjdXJyZW50TWF4VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydtaW5WYWx1ZSddID0gbWluO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnbWF4VmFsdWUnXSA9IG1heDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ3JhbmdlVmFsdWUnXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZGVmYXVsdFJhbmdlVmFsdWUnXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZHJvcERvd25SYW5nZVZhbHVlcyddID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydyYW5nZVZhbHVlJ10ucHVzaChtaW4pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsncmFuZ2VWYWx1ZSddLnB1c2gobWF4KTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNtYWxsU3RlcCA9IGNvbmZpZ0luZGV4LnN0ZXAgPyAoY29uZmlnSW5kZXguc3RlcCAqIDIpIDogMTAwXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXJnZVN0ZXAgPSBjb25maWdJbmRleC5zdGVwIHx8IDUwO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZGlmZiA9IG1heCAtIG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ3NtYWxsU3RlcCddID0gZGlmZiAvIHNtYWxsU3RlcCA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydsYXJnZVN0ZXAnXSA9IGRpZmYgLyBsYXJnZVN0ZXAgO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsndGlja3MnXSA9IHsgcGxhY2VtZW50OiAnQWZ0ZXInLCBsYXJnZVN0ZXA6IGRpZmYgLyBsYXJnZVN0ZXAgICwgc21hbGxTdGVwOiBkaWZmIC8gc21hbGxTdGVwLCBzaG93U21hbGxUaWNrczogdHJ1ZSwgc2hvd0xhcmdlVGlja3M6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkZWZhdWx0UmFuZ2VWYWx1ZSddLnB1c2gobWluKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2RlZmF1bHRSYW5nZVZhbHVlJ10ucHVzaChtYXgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZHJvcERvd25SYW5nZVZhbHVlcyddLnB1c2gobWluKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2Ryb3BEb3duUmFuZ2VWYWx1ZXMnXS5wdXNoKG1heCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydyYW5nZVN0ZXAnXSA9IHNtYWxsU3RlcCAvL2RpZmYgLyBzbWFsbFN0ZXA7XG4gICAgICAgICAgICAgICAgICAvLyAgIGZpbHRlckFycmF5UmFuZ2VGaWx0ZXJcbiAgICAgICAgICAgICAgICAgIC8vIHNob3dPbjogJ0Fsd2F5cydcbiAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkcm9wZG93biddID0gW107XG4gICAgICAgICAgICAgICAgICBsZXQgZHJvcGRvd25WYWx1ZSA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8PSBzbWFsbFN0ZXA7IGsgKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2Ryb3Bkb3duJ10ucHVzaChkcm9wZG93blZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duVmFsdWUgPSAoZGlmZiAvIHNtYWxsU3RlcCkgKyBkcm9wZG93blZhbHVlO1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZHJvcGRvd24nXSA9IF8uIHVuaXEodGhpcy50ZW1wRmlsdGVyW2tleV1bJ2Ryb3Bkb3duJ10pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgb2JqOiBhbnkgPSB7fTtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnSW5kZXguaXNTaG93RmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoKGRhdGFbY29uZmlnSW5kZXguZmllbGROYW1lXSAmJiBkYXRhW2NvbmZpZ0luZGV4LmZpZWxkVmFsdWVdKSB8fCAoaXNSYW5nZUZpbHRlcldpdGhEaWZmVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydmaWx0ZXJUaXRsZSddID0gY29uZmlnSW5kZXguZmlsdGVyVGl0bGU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydpc1Nob3dGaWx0ZXInXSA9IGNvbmZpZ0luZGV4LmlzU2hvd0ZpbHRlcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2ZpbHRlckJ5J10gPSBrZXk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydmaWx0ZXJWYWx1ZXNTb3J0aW5nJ10gPSBjb25maWdJbmRleC5maWx0ZXJWYWx1ZXNTb3J0aW5nO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZmlsdGVyU29ydERpcmVjdGlvbiddID0gY29uZmlnSW5kZXguZmlsdGVyU29ydERpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2lzU2hvd01vcmUnXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZmlsdGVyQ2hlY2tCb3hMaW1pdCddID0gY29uZmlnSW5kZXguZmlsdGVyQ2hlY2tCb3hMaW1pdDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2ZpbHRlclR5cGUnXSA9IGNvbmZpZ0luZGV4LmZpbHRlclR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWdJbmRleC5maWx0ZXJUeXBlID09ICdjaGVja0JveGVzJykge1xuICAgICAgICAgICAgICAgICAgICAgIG9ialsnZmlsdGVyQnknXSA9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgICBvYmpbJ2ZpZWxkTmFtZSddID0gZGF0YVtjb25maWdJbmRleC5maWVsZE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgIG9ialsnZmllbGRWYWx1ZSddID0gIGNvbmZpZ0luZGV4LmRhdGFUeXBlID09IE51bWJlciA/ICBOdW1iZXIoZGF0YVtjb25maWdJbmRleC5maWVsZFZhbHVlXSk6IGRhdGFbY29uZmlnSW5kZXguZmllbGRWYWx1ZV07XG4gICAgICAgICAgICAgICAgICAgICAgb2JqWydpc0NoZWNrZWQnXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNvbmZpZ0luZGV4LmZpbHRlclR5cGUgPT0gJ3JhbmdlX3NsaWRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZmlsdGVyQnlMb3dWYWx1ZSddID0gY29uZmlnSW5kZXguZmlsdGVyQnlMb3dWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZmlsdGVyQnlIaWdoVmFsdWUnXSA9IGNvbmZpZ0luZGV4LmZpbHRlckJ5SGlnaFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydyYW5nZVZhbHVlJ10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZGVmYXVsdFJhbmdlVmFsdWUnXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkcm9wRG93blJhbmdlVmFsdWVzJ10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICBsZXQgbWluID0gTnVtYmVyKGRhdGFbY29uZmlnSW5kZXgubG93VmFsdWVGaWVsZFZhbHVlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IG1heCA9IE51bWJlcihkYXRhW2NvbmZpZ0luZGV4LmhpZ2hWYWx1ZUZpZWxkVmFsdWVdKTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnbWluVmFsdWUnXSA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnbWF4VmFsdWUnXSA9IG1heFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydyYW5nZVZhbHVlJ10ucHVzaChtaW4pO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydyYW5nZVZhbHVlJ10ucHVzaChtYXgpO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkZWZhdWx0UmFuZ2VWYWx1ZSddLnB1c2gobWluKTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZGVmYXVsdFJhbmdlVmFsdWUnXS5wdXNoKG1heCk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2Ryb3BEb3duUmFuZ2VWYWx1ZXMnXS5wdXNoKG1pbik7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2Ryb3BEb3duUmFuZ2VWYWx1ZXMnXS5wdXNoKG1heCk7XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IHN0ZXAgPSBjb25maWdJbmRleC5zdGVwIHx8IDEwMDtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZHJvcGRvd24nXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydyYW5nZVN0ZXAnXSA9ICBjb25maWdJbmRleC5zdGVwICogMjsvLyhtaW4gKyBtYXgpIC8gc3RlcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc29ydENoZWNrQm94ZXNGaWx0ZXIoKSB7XG4gICAgZm9yKGxldCBqID0gdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlci5sZW5ndGggLTE7IGogPj0gMDsgai0tKSB7XG4gICAgICBpZiAodGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5pc1Nob3dGaWx0ZXIpIHtcbiAgICAgICAgICAgaWYgKHRoaXMudGVtcEZpbHRlci5oYXNPd25Qcm9wZXJ0eSh0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5KSkge1xuICAgICAgICAgICAgIGlmICh0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0uZmlsdGVyVmFsdWVzU29ydGluZ1xuICAgICAgICAgICAgICAmJiB0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0uZmlsdGVyU29ydERpcmVjdGlvblxuICAgICAgICAgICAgICAmJiB0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0uZmlsdGVyVHlwZSA9PSAnY2hlY2tCb3hlcydcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgIGxldCBzb3J0RGlyZWN0aW9uID0gXy5sb3dlckNhc2UodGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldLmZpbHRlclNvcnREaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgICBzb3J0RGlyZWN0aW9uID0gc29ydERpcmVjdGlvbiA9PSAnYXNjJyAgPyBzb3J0RGlyZWN0aW9uIDogJ2Rlc2MnO1xuICAgICAgICAgICAgICAgICBsZXQgZGlyZWN0aW9uOiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgICAgZGlyZWN0aW9uLnB1c2goc29ydERpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgIGxldCBwaWNrQXJyYXkgPSBfLnBpY2sodGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldLCBbJ2ZpbHRlclRpdGxlJywgJ2lzU2hvd0ZpbHRlcicsICdmaWx0ZXJCeScsICdmaWx0ZXJWYWx1ZXNTb3J0aW5nJyxcbiAgICAgICAgICAgICAgICAgJ2ZpbHRlclNvcnREaXJlY3Rpb24nLCAnaXNTaG93TW9yZScsICdmaWx0ZXJDaGVja0JveExpbWl0JywgJ2ZpbHRlclR5cGUnXSk7XG4gICAgICAgICAgICAgICAgIGNvbnN0IHNvcnRlZCA9IF8ub3JkZXJCeSh0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0gLCBbJ2ZpZWxkVmFsdWUnXSwgZGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldID0gc29ydGVkO1xuICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV1bJ2ZpbHRlclRpdGxlJ10gPSBwaWNrQXJyYXkuZmlsdGVyVGl0bGU7XG4gICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XVsnaXNTaG93RmlsdGVyJ10gPSBwaWNrQXJyYXkuaXNTaG93RmlsdGVyO1xuICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV1bJ2ZpbHRlckJ5J10gPXBpY2tBcnJheS5maWx0ZXJCeTtcbiAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldWydmaWx0ZXJWYWx1ZXNTb3J0aW5nJ10gPSBwaWNrQXJyYXkuZmlsdGVyVmFsdWVzU29ydGluZztcbiAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldWydmaWx0ZXJTb3J0RGlyZWN0aW9uJ10gPSBwaWNrQXJyYXkuZmlsdGVyU29ydERpcmVjdGlvbjtcbiAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldWydpc1Nob3dNb3JlJ10gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldWydmaWx0ZXJDaGVja0JveExpbWl0J10gPSBwaWNrQXJyYXkuZmlsdGVyQ2hlY2tCb3hMaW1pdDtcbiAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldWydmaWx0ZXJUeXBlJ10gPSBwaWNrQXJyYXkuZmlsdGVyVHlwZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICB9XG5cblxuICBhcHBseUZpbHRlcigpIHtcbiAgICAvLyBBc3NpZ24gdGhlIG9yaWdpbmFsIGFycmF5IHdpdGhvdXQgYW55IGZpbHRlciB0byB0aGUgbmV3TG90c1xuICAgIHZhciBuZXdMb3RzID0gdGhpcy5kYXRhO1xuICAgICAgLy8gQ2hlY2sgdGhlIHNlYXJjaFRleHQgaXMgbm90IHVuZGVmaW5lZCBhbmQgdGhlbiBzZWFyY2ggdGhlIGJ5IHByb3ZpZGVkIGZpZWxkcy5cbiAgICAgIGlmICh0aGlzLnNlYXJjaFRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLnNlYXJjaFRleHQgPSB0aGlzLnNlYXJjaFRleHQudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICAgICAgdmFyIG1haW5TZWFyY2hBcnJheSA9IFtdO1xuICAgICAgICAgIC8vIFNlYXJjaCBJbiB0aGUgYWxsIGZpZWxkcyBnaXZlbiBpbiB0aGUgY29uZmlnIG9mIHRoZSBzZWFyY2guXG4gICAgICAgICAgZm9yIChsZXQgaiA9IHRoaXMuY29uZmlnLnNlYXJjaC5zZWFyY2hQYXJhbWV0ZXIubGVuZ3RoIC0xOyBqID49IDA7IGotLSkge1xuICAgICAgICAgICAgbGV0IHNlYXJjaEFycmF5ID0gW11cbiAgICAgICAgICAgIHNlYXJjaEFycmF5ID0gIHRoaXMuZGF0YS5maWx0ZXIoKGl0OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgaWYgKGl0W3RoaXMuY29uZmlnLnNlYXJjaC5zZWFyY2hQYXJhbWV0ZXJbal0uc2VhcmNoQnldICE9IG51bGwgJiYgaXRbdGhpcy5jb25maWcuc2VhcmNoLnNlYXJjaFBhcmFtZXRlcltqXS5zZWFyY2hCeV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0W3RoaXMuY29uZmlnLnNlYXJjaC5zZWFyY2hQYXJhbWV0ZXJbal0uc2VhcmNoQnldLnRvTG9jYWxlTG93ZXJDYXNlKCkuaW5jbHVkZXModGhpcy5zZWFyY2hUZXh0KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgLy8gUHVzaCB0aGUgZWFjaCBzZWFyY2ggcmVzdWx0Li4uXG4gICAgICAgICAgaWYgKHNlYXJjaEFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG1haW5TZWFyY2hBcnJheS5wdXNoKC4uLnNlYXJjaEFycmF5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gQXNzaWduIHRoZSBzZWFyY2hlZCBBcnJheSB0byB0aGUgbG90cyBBcnJheS5cbiAgICAgICAgICBuZXdMb3RzID0gbWFpblNlYXJjaEFycmF5O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBhbGxTZWxlY3RlZENoZWNrQm94ZXNBcnJheSA9IFtdO1xuICAgICAgdmFyIGFsbFNlbGVjdGVkUmFuZ2VGaWx0ZXJBcnJheSA9IFtdO1xuICAgICAgLy8gQ2hlY2sgdGhlIGNvbmZpZyBmb3IgdGhlIGZpbHRlci4uLi5cbiAgICAgIGZvcihsZXQgaiA9IHRoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXIubGVuZ3RoIC0xOyBqID49IDA7IGotLSkge1xuICAgICAgICAvLyBDaGVjayB0aGUgc3RhdHVzIG9mIHRoZSBmaWx0ZXJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uaXNTaG93RmlsdGVyKSB7XG4gICAgICAgICAgaWYgKHRoaXMudGVtcEZpbHRlci5oYXNPd25Qcm9wZXJ0eSh0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5KSAmJiB0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0uZmlsdGVyVHlwZSA9PSAnY2hlY2tCb3hlcycpIHtcbiAgICAgICAgICAgIC8vIEZpbHRlciB0aGUgY2hlY2tlZCBWYWx1ZXNcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRMb3RTdGF0dXNGaWx0ZXIgPSAgdGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldLmZpbHRlcigodmFsdWU6IGFueSwgaW5kZXg6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5pc0NoZWNrZWRcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBQdXNoIHRoZSBhbGwgY2hlY2tlZCB2YWx1ZXMgaW4gc2FtZSBhcnJheVxuICAgICAgICAgICAgYWxsU2VsZWN0ZWRDaGVja0JveGVzQXJyYXkucHVzaCh0aGlzLnNlbGVjdGVkTG90U3RhdHVzRmlsdGVyKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhpcy50ZW1wRmlsdGVyLmhhc093blByb3BlcnR5KHRoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnkpICYmIHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XS5maWx0ZXJUeXBlID09ICdyYW5nZV9zbGlkZXInKSB7XG4gICAgICAgICAgICAvLyBJZiBmaWx0ZXIgdHlwZSBpcyB0aGUgUmFuZ2UgZmlsdGVyIHRoZW4gcHVzaCB0aGUgZGF0YSBpbiB0aGUgcmFuZ2UgZmlsdGVyLlxuICAgICAgICAgICAgYWxsU2VsZWN0ZWRSYW5nZUZpbHRlckFycmF5LnB1c2godGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IHNpbmdsZVR5cGVGaWx0ZXJBcnJheSA9IFtdO1xuICAgICAgdGhpcy5hbGxTZWxlY3RlZEZpbHRlcnMgPSBhbGxTZWxlY3RlZENoZWNrQm94ZXNBcnJheTtcbiAgICAgIC8vRmlsdGVyIHRoZSBkYXRhIGJhc2VkIG9uIGNoZWNrYm94ZXNcbiAgICAgIGlmIChhbGxTZWxlY3RlZENoZWNrQm94ZXNBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgLy8gRmlsdGVyIHRoZSBlYWNoIGFycmF5IGF0IGEgdGltZSwgSW4gY29uZmlnIG11bHRpcGxlIGZpbHRlcnMuXG4gICAgICAgc2luZ2xlVHlwZUZpbHRlckFycmF5ID0gdGhpcy5maWx0ZXJTaW5nbGUobmV3TG90cyAsYWxsU2VsZWN0ZWRDaGVja0JveGVzQXJyYXkpO1xuICAgICAgIG5ld0xvdHMgPSBzaW5nbGVUeXBlRmlsdGVyQXJyYXk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdMb3RzID0gbmV3TG90cztcbiAgICAgIH1cblxuICAgICAgbGV0IHNpbmdsZVJhbmdlU2xpZGVyRmlsdGVyID0gW107XG4gICAgICAvLyBGaWx0ZXIgdGhlIGRhdGEgYmFzZWQgb24gdGhlIHJhbmdlIGZpbHRlci5cbiAgICAgIGlmIChhbGxTZWxlY3RlZFJhbmdlRmlsdGVyQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgLy8gRmlsdGVyIHRoZSBlYWNoIGFycmF5IGF0IGEgdGltZSwgSW4gY29uZmlnIG11bHRpcGxlIGZpbHRlcnMuXG4gICAgICAgc2luZ2xlUmFuZ2VTbGlkZXJGaWx0ZXIgPSB0aGlzLmZpbHRlclNpbmdsZVJhbmdlRmlsdGVyKG5ld0xvdHMgLCBhbGxTZWxlY3RlZFJhbmdlRmlsdGVyQXJyYXkpO1xuICAgICAgICBuZXdMb3RzID0gc2luZ2xlUmFuZ2VTbGlkZXJGaWx0ZXI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdMb3RzID0gbmV3TG90cztcbiAgICAgIH1cblxuICAgICAgdGhpcy5maWx0ZXJEYXRhID0gW107XG4gICAgICB0aGlzLmZpbHRlckRhdGEgPSBuZXdMb3RzO1xuXG4gICAgICAvLyBDaGVjayB0aGUgU29ydGluZyBpcyBhcHBsaWVkIGlmIFllcyB0aGVuIHNvcnQgdGhlIGFycmF5IGFmdGVyIGZpbHRlci5cbiAgICAgIGlmICh0aGlzLmlzU29ydGVkKSB7XG4gICAgICAgIC8vdGhpcy5zb3J0TG90cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5maWx0ZXJlZERhdGEuZW1pdCh0aGlzLmZpbHRlckRhdGEpO1xuICAgICAgfVxuXG4gICAgICAvLyBFbWl0IHRoZSB2YWx1ZSB0byB0aGUgcGFyZW50IGNvbXBvbmVudFxuICAgICAgLy90aGlzLmFkZEZpbHRlclRvUm91dGUoKVxuICB9XG5cbiAgZmlsdGVyU2luZ2xlKGRhdGE6IGFueSwgc2VsZWN0ZWRDaGVja0JveGVzQXJyYXlzOiBhbnkgKSB7XG4gICAgZm9yIChsZXQgayA9IHNlbGVjdGVkQ2hlY2tCb3hlc0FycmF5cy5sZW5ndGggLTE7IGsgPj0gMDsgay0tKSB7XG4gICAgICB2YXIgbmV3RGF0YSA9IFtdO1xuICAgICAgaWYgKHNlbGVjdGVkQ2hlY2tCb3hlc0FycmF5c1trXS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGRhdGEgPSB0aGlzLmZpbHRlckFycmF5QmFzZWRPbkNoZWNrQm94ZXMoZGF0YSwgc2VsZWN0ZWRDaGVja0JveGVzQXJyYXlzW2tdKVxuICAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgIG5ld0RhdGEucHVzaCguLi5kYXRhKTtcbiAgICAgICAgICBkYXRhID0gbmV3RGF0YTtcbiAgICAgICB9IGVsc2Uge1xuICAgICAgICAgZGF0YSA9IFtdO1xuICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudW5pcXVlVmFsdWVzSW5BcnJheShkYXRhKTtcbiAgfVxuXG5cbiAgZmlsdGVyU2luZ2xlUmFuZ2VGaWx0ZXIoZGF0YTogYW55LCBzZWxlY3RlZFJhbmdlRmlsdGVyQXJyYXlzOiBhbnkgKSB7XG4gICAgZm9yIChsZXQgayA9IHNlbGVjdGVkUmFuZ2VGaWx0ZXJBcnJheXMubGVuZ3RoIC0xOyBrID49IDA7IGstLSl7XG4gICAgICB2YXIgbmV3RGF0YSA9IFtdO1xuICAgICAgaWYgKF8uaXNPYmplY3Qoc2VsZWN0ZWRSYW5nZUZpbHRlckFycmF5c1trXSkpIHtcbiAgICAgICAgZGF0YSA9IHRoaXMuZmlsdGVyQXJyYXlSYW5nZUZpbHRlcihkYXRhLCBzZWxlY3RlZFJhbmdlRmlsdGVyQXJyYXlzW2tdKTtcbiAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBuZXdEYXRhLnB1c2goLi4uZGF0YSk7XG4gICAgICAgICAgZGF0YSA9IG5ld0RhdGE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRhdGEgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy51bmlxdWVWYWx1ZXNJbkFycmF5KGRhdGEpO1xuICB9XG5cbiAgZmlsdGVyQXJyYXlCYXNlZE9uQ2hlY2tCb3hlcyAobG90c0FycmF5OiBhbnksIHNlbGVjdGVkQ2hlY2tCb3hlc0FycmF5czogYW55KSB7XG4gICAgdmFyIGZpbHRlcmVkOiBhbnkgPSBbXTtcbiAgICBmb3IgKHZhciBsb3RzIGluIGxvdHNBcnJheSkge1xuICAgICAgaWYgKHNlbGVjdGVkQ2hlY2tCb3hlc0FycmF5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2VsZWN0ZWRDaGVja0JveGVzQXJyYXlzLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGxvdHNBcnJheVtsb3RzXVtlbGVtZW50LmZpbHRlckJ5XSA9PSBlbGVtZW50LmZpZWxkVmFsdWUgKXtcbiAgICAgICAgICAgICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIGZpbHRlcmVkLnB1c2gobG90c0FycmF5W2xvdHNdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZC5wdXNoKGxvdHNBcnJheVtsb3RzXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVuaXF1ZVZhbHVlc0luQXJyYXkoZmlsdGVyZWQpO1xuICB9XG5cbiAgdW5pcXVlVmFsdWVzSW5BcnJheShkYXRhOiBhbnkgKSB7XG4gICAgY29uc3QgdW5pcXVlVmFsdWVzID0gZGF0YS5maWx0ZXIoKGVsZW1lbnQ6IGFueSwgaW5kZXg6IG51bWJlcikgPT5cbiAgICBkYXRhLmZpbmRJbmRleCggKG9iajogYW55KSA9PiBvYmpbdGhpcy5jb25maWcuZmlsdGVyLnVuaXF1ZUNvbHVtbl0gPT0gZWxlbWVudFt0aGlzLmNvbmZpZy5maWx0ZXIudW5pcXVlQ29sdW1uXSkgPT0gaW5kZXgpO1xuICAgIHJldHVybiB1bmlxdWVWYWx1ZXM7XG4gIH1cblxuXG5cbiAgZmlsdGVyQXJyYXlSYW5nZUZpbHRlciAobG90c0FycmF5OiBhbnksIHJhbmdlRmlsdGVyQXJyYXlzOiBhbnkpIHtcbiAgICB2YXIgZmlsdGVyZWQgPSBbXTtcbiAgICBmb3IgKHZhciBsb3RzIGluIGxvdHNBcnJheSkge1xuICAgICAgbGV0IG1pbiA9IHJhbmdlRmlsdGVyQXJyYXlzLnJhbmdlVmFsdWVbMF07XG4gICAgICBsZXQgbWF4ID0gcmFuZ2VGaWx0ZXJBcnJheXMucmFuZ2VWYWx1ZVsxXTtcbiAgICAgIGxldCBtaW5WYWx1ZUluZGV4ID0gTnVtYmVyKGxvdHNBcnJheVtsb3RzXVtyYW5nZUZpbHRlckFycmF5cy5maWx0ZXJCeUxvd1ZhbHVlXSk7XG4gICAgICBsZXQgbWF4VmFsdWVJbmRleCA9IE51bWJlcihsb3RzQXJyYXlbbG90c11bcmFuZ2VGaWx0ZXJBcnJheXMuZmlsdGVyQnlIaWdoVmFsdWVdKTtcbiAgICAgIGlmICgobWluVmFsdWVJbmRleCA+PSBtaW4gJiYgbWluVmFsdWVJbmRleCA8PSBtYXggJiYgbWF4VmFsdWVJbmRleCA+PSBtaW4gJiYgbWF4VmFsdWVJbmRleCA8PSBtYXgpKXtcbiAgICAgICAgICBmaWx0ZXJlZC5wdXNoKGxvdHNBcnJheVtsb3RzXSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vcmFuZ2VGaWx0ZXJBcnJheXMuZHJvcERvd25SYW5nZVZhbHVlcyA9IHJhbmdlRmlsdGVyQXJyYXlzLnJhbmdlVmFsdWU7XG4gICAgcmV0dXJuIHRoaXMudW5pcXVlVmFsdWVzSW5BcnJheShmaWx0ZXJlZCk7XG4gIH1cblxuICBjbGVhclNpbmdsZUZpbHRlcnMoZmlsdGVyQnk6IHN0cmluZyAsIGZpbHRlclR5cGU/OiBhbnkpIHtcbiAgICBpZiAoZmlsdGVyQnkgJiYgZmlsdGVyVHlwZSA9PSAnY2hlY2tCb3hlcycpIHtcbiAgICAgIHRoaXMudW5DaGVja2VkQ2hlY2tCb3hlcyh0aGlzLnRlbXBGaWx0ZXJbZmlsdGVyQnldKVxuICAgIH0gZWxzZSBpZiAoZmlsdGVyQnkgJiYgZmlsdGVyVHlwZSA9PSAncmFuZ2Vfc2xpZGVyJykge1xuICAgICAgdGhpcy5jbGVhclJhbmdlU2xpZGVyRmlsdGVyKHRoaXMudGVtcEZpbHRlcltmaWx0ZXJCeV0pO1xuICAgIH1cbiAgICB0aGlzLmFwcGx5RmlsdGVyKCk7XG4gIH1cblxuICBjbGVhckFsbEZpbHRlcnMoKSB7XG4gICAgdGhpcy5maWx0ZXJEYXRhID0gW107XG4gICAgdGhpcy5zb3J0ID0gdGhpcy5kZWZhdWx0U29ydDtcbiAgICB0aGlzLnNlYXJjaFRleHQgPSB0aGlzLmRlZmF1bHRTZWFyY2g7XG4gICAgZm9yKGxldCBqID0gdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlci5sZW5ndGggLTE7IGogPj0gMDsgai0tKSB7XG4gICAgICBpZiAodGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5pc1Nob3dGaWx0ZXIpIHtcbiAgICAgICAgICAgaWYgKCh0aGlzLnRlbXBGaWx0ZXIuaGFzT3duUHJvcGVydHkodGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeSkgJiYgXG4gICAgICAgICAgICh0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0uZmlsdGVyVHlwZSA9PT0gJ2NoZWNrQm94ZXMnKSkpIHtcbiAgICAgICAgICAgIHRoaXMudW5DaGVja2VkQ2hlY2tCb3hlcyh0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoKHRoaXMudGVtcEZpbHRlci5oYXNPd25Qcm9wZXJ0eSh0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5KSAmJlxuICAgICAgICAgICAodGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldLmZpbHRlclR5cGUgPT09ICdyYW5nZV9zbGlkZXInKSkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJSYW5nZVNsaWRlckZpbHRlcih0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0pXG4gICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIHRoaXMuZmlsdGVyRGF0YSA9IHRoaXMuZGF0YTtcbiAgICB0aGlzLmZpbHRlcmVkRGF0YS5lbWl0KHRoaXMuZmlsdGVyRGF0YSk7XG4gIH1cblxuICB1bkNoZWNrZWRDaGVja0JveGVzKGRhdGE6IGFueSkge1xuICAgIGRhdGEuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XG4gICAgICBlbGVtZW50LmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgIH0pXG4gIH1cblxuICBjbGVhclJhbmdlU2xpZGVyRmlsdGVyKGRhdGE6IGFueSkge1xuICAgIGRhdGEucmFuZ2VWYWx1ZSA9IGRhdGEuZGVmYXVsdFJhbmdlVmFsdWU7XG4gICAgZGF0YS5kcm9wRG93blJhbmdlVmFsdWVzID0gW107XG4gICAgZGF0YS5kcm9wRG93blJhbmdlVmFsdWVzID0gZGF0YS5kZWZhdWx0UmFuZ2VWYWx1ZTtcbiAgfVxuXG4gIHNob3dNb3JlSXRlbXMoZmlsdGVyQnk6IHN0cmluZyxzaG93U3RhdHVzOiBib29sZWFuKSB7XG4gICAgaWYoc2hvd1N0YXR1cykge1xuICAgICAgdGhpcy50ZW1wRmlsdGVyW2ZpbHRlckJ5XVsnZmlsdGVyQ2hlY2tCb3hMaW1pdCddID0gdGhpcy50ZW1wRmlsdGVyW2ZpbHRlckJ5XS5sZW5ndGg7XG4gICAgICB0aGlzLnRlbXBGaWx0ZXJbZmlsdGVyQnldWydpc1Nob3dNb3JlJ10gPSB0cnVlO1xuICAgIH0gZWxzZSBpZighc2hvd1N0YXR1cykge1xuICAgICAgdGhpcy50ZW1wRmlsdGVyW2ZpbHRlckJ5XVsnaXNTaG93TW9yZSddID0gZmFsc2U7XG4gICAgfVxuICB9XG5cblxuICByYW5nZURyb3BEb3duT25DaGFuZ2UoZGF0YTogYW55KSB7XG4gICAgZGF0YS5yYW5nZVZhbHVlID0gZGF0YS5kcm9wRG93blJhbmdlVmFsdWVzO1xuICAgIHRoaXMuYXBwbHlGaWx0ZXIoKTtcbiAgfVxuXG4gIHNsaWRlckNoYW5nZShkYXRhOiBhbnkgfCB1bmRlZmluZWQpIHtcbiAgICBkYXRhLmRyb3BEb3duUmFuZ2VWYWx1ZXMgPSBkYXRhLnJhbmdlVmFsdWVcbiAgfVxuXG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cImRhdGEgJiYgY29uZmlnXCI+XG4gIDxkaXYgY2xhc3M9XCJjb2wtc20tMTJcIj5cbiAgICAgPGRpdiBjbGFzcz1cInJvdyBwdC0xIHBiLTFcIj5cbiAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cblxuICAgICAgIDwvZGl2PlxuICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICAgPGg2IGNsYXNzPVwiZmxvYXQtcmlnaHQgY3Vyc29yLXBvaW50ZXIgdGV4dC1wcmltYXJ5XCIgKGNsaWNrKT1cImNsZWFyQWxsRmlsdGVycygpXCI+Q2xlYXIgQWxsPC9oNj5cbiAgICAgICA8L2Rpdj5cbiAgICAgPC9kaXY+XG4gICAgICA8ZGl2ICpuZ0lmPVwiY29uZmlnPy5zZWFyY2g/LmlzU2VhcmNoU2hvd1wiIGNsYXNzPVwicHQtMSBwYi0xXCI+XG4gICAgICAgIDxzdHJvbmcgY2xhc3M9XCJwdC0yIHBiLTIgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWNhcGl0YWxpemVcIj5TZWFyY2g8L3N0cm9uZz5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAgcHQtMVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tb3V0bGluZVwiPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImZvcm0xXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBbKG5nTW9kZWwpXT1cInNlYXJjaFRleHRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaCBLZXl3b3JkLi4uXCIgKGtleXVwKT1cImFwcGx5RmlsdGVyKClcIi8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGhyPlxuICAgICAgPGRpdiAqbmdJZj1cImNvbmZpZz8uZmlsdGVyPy5pc1Nob3dGaWx0ZXIgJiYgdGVtcEZpbHRlclwiPlxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjb25maWcgb2YgY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXI7IGxldCBpID0gaW5kZXg7bGV0IGxhc3QgPSBsYXN0O1wiPlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNvbmZpZz8uaXNTaG93RmlsdGVyICYmIHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IHB0LTEgcGItMVwiICpuZ0lmPVwiKCgoIWNvbmZpZz8ubWluaW11bVNob3dMaW1pdCAmJiB0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ubGVuZ3RoID4gMCkgfHwgKHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5sZW5ndGggPiBjb25maWc/Lm1pbmltdW1TaG93TGltaXQgJiYgY29uZmlnPy5pc1Nob3dGaWx0ZXIgJiYgY29uZmlnPy5maWx0ZXJUeXBlID09ICdjaGVja0JveGVzJyAmJiB0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ubGVuZ3RoID4gMCkpIHx8IChjb25maWc/LmZpbHRlclR5cGUgPT0gJ3JhbmdlX3NsaWRlcicgJiYgdGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLm1heFZhbHVlID4gMCApKVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tOCBmbG9hdC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwiZm9udC13ZWlnaHQtYm9sZFwiPnt7IHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XT8uZmlsdGVyVGl0bGV9fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNFwiPlxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwiZmxvYXQtcmlnaHQgY3Vyc29yLXBvaW50ZXIgdGV4dC1wcmltYXJ5IGNsZWFyXCIgKGNsaWNrKT1cImNsZWFyU2luZ2xlRmlsdGVycyh0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0uZmlsdGVyQnksdGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmZpbHRlclR5cGUpXCI+Q2xlYXI8L2g2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIihjb25maWc/LmlzU2hvd0ZpbHRlciAmJiBjb25maWc/LmZpbHRlclR5cGUgPT0gJ2NoZWNrQm94ZXMnICYmICghY29uZmlnPy5taW5pbXVtU2hvd0xpbWl0IHx8ICh0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ubGVuZ3RoID4gY29uZmlnPy5taW5pbXVtU2hvd0xpbWl0KSkpIFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJcIiAqbmdGb3I9XCJsZXQgZmlsdGVyIG9mIHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XSB8IHNsaWNlIDogMDooIXRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5pc1Nob3dNb3JlID8gY29uZmlnLmZpbHRlckNoZWNrQm94TGltaXQgOiB0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0uZmlsdGVyQ2hlY2tCb3hMaW1pdCk7IGxldCBpID0gaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbaWRdPVwiZmlsdGVyLmZpZWxkTmFtZVwiIFtuYW1lXT1cImZpbHRlci5maWVsZE5hbWVcIiBbdmFsdWVdPVwiZmlsdGVyLmZpZWxkVmFsdWVcIiBbKG5nTW9kZWwpXT1cImZpbHRlci5pc0NoZWNrZWRcIiAoY2hhbmdlKT1cImFwcGx5RmlsdGVyKClcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGwtMiBmb250LXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7ZmlsdGVyLmZpZWxkTmFtZX19XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5sZW5ndGggPiBjb25maWc/LmZpbHRlckNoZWNrQm94TGltaXQgXCI+XG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LXByaW1hcnkgcHQtMVwiICpuZ0lmID1cIiF0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0uaXNTaG93TW9yZVwiIChjbGljayk9XCJzaG93TW9yZUl0ZW1zKHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5maWx0ZXJCeSx0cnVlKVwiPlxuICAgICAgICAgICAgICAgICAge3sgdGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmxlbmd0aCAtIGNvbmZpZy5maWx0ZXJDaGVja0JveExpbWl0IH19IE1vcmVcbiAgICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgICA8aDYgY2xhc3M9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LXByaW1hcnkgcHQtMVwiICpuZ0lmID1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5pc1Nob3dNb3JlXCIgKGNsaWNrKT1cInNob3dNb3JlSXRlbXModGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmZpbHRlckJ5LCBmYWxzZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgU2hvdyBMZXNzXG4gICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29uZmlnPy5pc1Nob3dGaWx0ZXIgJiYgY29uZmlnPy5maWx0ZXJUeXBlID09ICdyYW5nZV9zbGlkZXInICYmIHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5tYXhWYWx1ZSA+IDBcIj5cbiAgICAgICAgICAgICAgPCEtLSAoY2hhbmdlKT1cImxvYW5DaGFuZ2UoJGV2ZW50KVwiIFxuICAgICAgICAgICAgICAgW3RpY2tzXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS50aWNrc1wiIFxuICAgICAgICAgICAgICAgW3RpY2tzXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS50aWNrc1wiXG4gICAgICAgICAgICAgIC0tPlxuICAgICAgICAgICAgICA8IS0tIHt7dGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLnRpY2tzIHwganNvbn19IC0tPlxuICAgICAgICAgICAgICA8IS0tIHt7dGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldICB8IGpzb259fSAtLT5cbiAgICAgICAgICAgICAgPCEtLSB7e3RlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5taW5WYWx1ZX19IC0tPlxuICAgICAgICAgICAgICA8IS0tIHt7dGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnkgfCBqc29ufX0gLS0+XG4gICAgICAgICAgICAgIDwhLS0gW3RpY2tzXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS50aWNrc1wiIFxuICAgICAgICAgICAgICAgIFt0b29sdGlwXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS50b29sdGlwXCJcbiAgICAgICAgICAgICAgICAgW3RpY2tzXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS50aWNrc1wiXG4gICAgICAgICAgICAgICAgIFt0b29sdGlwXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS50b29sdGlwXCJcbiAgICAgICAgICAgICAgLS0+IFxuICAgICAgICAgICAgICA8IS0tIFt0aWNrc109XCJ0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0udGlja3NcIiAtLT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtaW5cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIHt7dGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLnJhbmdlVmFsdWVbMF19fSAtIHt7dGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLnJhbmdlVmFsdWVbMV19fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8ZWpzLXNsaWRlclxuICAgICAgICAgICAgICAgIGlkPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgIFsodmFsdWUpXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5yYW5nZVZhbHVlXCJcbiAgICAgICAgICAgICAgICBbbWluXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5taW5WYWx1ZVwiXG4gICAgICAgICAgICAgICAgW21heF09XCJ0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ubWF4VmFsdWVcIlxuICAgICAgICAgICAgICAgIFtzdGVwXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5yYW5nZVN0ZXBcIlxuICAgICAgICAgICAgICAgIFt0eXBlXT1cIidSYW5nZSdcIlxuICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwic2xpZGVyQ2hhbmdlKHRlbXBGaWx0ZXJbY29uZmlnPy5maWx0ZXJCeV0pXCJcbiAgICAgICAgICAgICAgICAoY2hhbmdlZCk9XCJhcHBseUZpbHRlcigpXCI+XG4gICAgICAgICAgICAgICAgPC9lanMtc2xpZGVyPlxuICAgICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsb2F0LWxlZnQgbWluXCI+4oK5IHt7dGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLm1pblZhbHVlfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZsb2F0LXJpZ2h0IG1pblwiPuKCuSB7e3RlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5tYXhWYWx1ZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cbiAgICAgICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJyb3dcIiAqbmdJZj1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5kcm9wZG93bi5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJicm93c2VyLWRlZmF1bHQgY3VzdG9tLXNlbGVjdCBmbG9hdC1yaWdodCByYW5nZS1zZWxlY3RcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5kcm9wRG93blJhbmdlVmFsdWVzWzBdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInJhbmdlRHJvcERvd25PbkNoYW5nZSh0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCB2YWx1ZSBvZiB0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0uZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmFsdWUgfCBjdXJyZW5jeUxvY2FsOidJTlInfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtc20tNiBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJicm93c2VyLWRlZmF1bHQgY3VzdG9tLXNlbGVjdCBmbG9hdC1yaWdodCByYW5nZS1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5kcm9wRG93blJhbmdlVmFsdWVzWzFdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJyYW5nZURyb3BEb3duT25DaGFuZ2UodGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgdmFsdWUgb2YgdGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nVmFsdWVdPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2YWx1ZSB8IGN1cnJlbmN5TG9jYWw6J0lOUid9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGhyICpuZ0lmPVwiKCFsYXN0ICYmICgoIWNvbmZpZz8ubWluaW11bVNob3dMaW1pdCB8fCAodGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmxlbmd0aCA+IGNvbmZpZz8ubWluaW11bVNob3dMaW1pdCAmJiBjb25maWc/LmlzU2hvd0ZpbHRlciAmJiBjb25maWc/LmZpbHRlclR5cGUgPT0gJ2NoZWNrQm94ZXMnKSkgfHwgKGNvbmZpZz8uZmlsdGVyVHlwZSA9PSAncmFuZ2Vfc2xpZGVyJykpICYmIGNvbmZpZz8uc2hvd0JvdHRvbUJhcilcIj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==
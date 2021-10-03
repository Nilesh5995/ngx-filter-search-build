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
    i0.ɵɵelementStart(4, "div");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div");
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "div");
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "div");
    i0.ɵɵtext(11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(12, "div");
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "ejs-slider", 26);
    i0.ɵɵlistener("valueChange", function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_3_Template_ejs_slider_valueChange_14_listener($event) { i0.ɵɵrestoreView(_r38); const config_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r37 = i0.ɵɵnextContext(3); return ctx_r37.tempFilter[config_r7.filterBy].rangeValue = $event; })("change", function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_3_Template_ejs_slider_change_14_listener() { i0.ɵɵrestoreView(_r38); const config_r7 = i0.ɵɵnextContext(2).$implicit; const ctx_r40 = i0.ɵɵnextContext(3); return ctx_r40.sliderChange(ctx_r40.tempFilter[config_r7 == null ? null : config_r7.filterBy]); })("changed", function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_3_Template_ejs_slider_changed_14_listener() { i0.ɵɵrestoreView(_r38); const ctx_r42 = i0.ɵɵnextContext(5); return ctx_r42.applyFilter(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(15, "ejs-slider", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const config_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r13 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate2(" ", ctx_r13.tempFilter[config_r7.filterBy].rangeValue[0], " - ", ctx_r13.tempFilter[config_r7.filterBy].rangeValue[1], " ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r13.tempFilter[config_r7.filterBy].rangeValue, " range value ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r13.tempFilter[config_r7.filterBy].minValue, " min value ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r13.tempFilter[config_r7.filterBy].maxValue, " max value ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r13.tempFilter[config_r7.filterBy].rangeStep, " rangeStep step ");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r13.tempFilter[config_r7 == null ? null : config_r7.filterBy], " ");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r13.tempFilter[config_r7.filterBy].rangeValue)("min", ctx_r13.tempFilter[config_r7.filterBy].minValue)("max", ctx_r13.tempFilter[config_r7.filterBy].maxValue)("step", ctx_r13.tempFilter[config_r7.filterBy].rangeStep)("type", "Range");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("type", "minType")("value", "100");
} }
function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_hr_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "hr");
} }
function NgxFilterSearchComponent_div_0_div_9_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_1_Template, 7, 1, "div", 14);
    i0.ɵɵtemplate(2, NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_2_Template, 4, 6, "div", 7);
    i0.ɵɵtemplate(3, NgxFilterSearchComponent_div_0_div_9_div_1_div_1_div_3_Template, 16, 14, "div", 7);
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
NgxFilterSearchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgxFilterSearchComponent, selectors: [["lib-ngx-filter-search"]], inputs: { data: "data", config: "config" }, outputs: { filteredData: "filteredData" }, decls: 1, vars: 1, consts: [["class", "row", 4, "ngIf"], [1, "row"], [1, "col-sm-12"], [1, "row", "pt-1", "pb-1"], [1, "col-sm-6"], [1, "float-right", "cursor-pointer", "text-primary", 3, "click"], ["class", "pt-1 pb-1", 4, "ngIf"], [4, "ngIf"], [1, "pt-1", "pb-1"], [1, "pt-2", "pb-2", "font-weight-bold", "text-capitalize"], [1, "input-group", "pt-1"], [1, "form-outline"], ["type", "text", "id", "form1", "placeholder", "Search Keyword...", 1, "form-control", 3, "ngModel", "ngModelChange", "keyup"], [4, "ngFor", "ngForOf"], ["class", "row pt-1 pb-1", 4, "ngIf"], [1, "col-sm-8", "float-left"], [1, "font-weight-bold"], [1, "col-sm-4"], [1, "float-right", "cursor-pointer", "text-primary", "clear", 3, "click"], ["class", "", 4, "ngFor", "ngForOf"], [1, ""], ["type", "checkbox", 3, "id", "name", "value", "ngModel", "ngModelChange", "change"], [1, "pl-2", "font-small"], ["class", "cursor-pointer text-primary pt-1", 3, "click", 4, "ngIf"], [1, "cursor-pointer", "text-primary", "pt-1", 3, "click"], [1, "min"], ["id", "range", 3, "value", "min", "max", "step", "type", "valueChange", "change", "changed"], ["id", "minrange", 3, "type", "value"]], template: function NgxFilterSearchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, NgxFilterSearchComponent_div_0_Template, 10, 2, "div", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.data && ctx.config);
    } }, directives: [i1.NgIf, i2.DefaultValueAccessor, i2.NgControlStatus, i2.NgModel, i1.NgForOf, i2.CheckboxControlValueAccessor, i3.SliderComponent], pipes: [i1.SlicePipe], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgxFilterSearchComponent, [{
        type: Component,
        args: [{
                selector: 'lib-ngx-filter-search',
                // template: `
                //   <p>
                //     ngx-filter-search works!
                //   </p>
                // `,
                // styleUrls: ['./ngx-filter-search.component.scss'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZpbHRlci1zZWFyY2guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpbHRlci1zZWFyY2gvc3JjL2xpYi9uZ3gtZmlsdGVyLXNlYXJjaC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtZmlsdGVyLXNlYXJjaC9zcmMvbGliL25neC1maWx0ZXItc2VhcmNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDOzs7Ozs7O0lDU3RCLDhCQUE0RDtJQUMxRCxpQ0FBMkQ7SUFBQSxzQkFBTTtJQUFBLGlCQUFTO0lBQ3hFLCtCQUE4QjtJQUM1QiwrQkFBMEI7SUFDeEIsaUNBQXFJO0lBQWxGLCtOQUF3QixzTEFBQTtJQUEzRSxpQkFBcUk7SUFDdkksaUJBQU07SUFDUixpQkFBTTtJQUNWLGlCQUFNOzs7SUFIcUQsZUFBd0I7SUFBeEIsMkNBQXdCOzs7O0lBUTNFLDhCQUErVztJQUM3VywrQkFBaUM7SUFDL0Isa0NBQWlDO0lBQUEsWUFBNkM7SUFBQSxpQkFBUztJQUN6RixpQkFBTTtJQUNOLCtCQUFzQjtJQUNwQiw4QkFBb0s7SUFBMUcsK1dBQXlHO0lBQUMscUJBQUs7SUFBQSxpQkFBSztJQUNoTCxpQkFBTTtJQUNSLGlCQUFNOzs7O0lBTCtCLGVBQTZDO0lBQTdDLGdJQUE2Qzs7OztJQU9oRiwrQkFBcU47SUFDbk4saUNBQTZKO0lBQXhELGlPQUE4QixtTkFBQTtJQUFuSSxpQkFBNko7SUFDN0osZ0NBQThCO0lBQzVCLFlBQ0Y7SUFBQSxpQkFBTztJQUNULGlCQUFNOzs7SUFKbUIsZUFBdUI7SUFBdkIseUNBQXVCLDhCQUFBLGdDQUFBLGlDQUFBO0lB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QUFDLG1CQUFtQixDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsWUFBWSxDQUFDLElBQXFCO1FBQ2hDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQzVDLENBQUM7O2dHQWxhVSx3QkFBd0I7NkRBQXhCLHdCQUF3QjtRQ2pCckMsMEVBd0lNOztRQXhJWSw2Q0FBb0I7O3VGRGlCekIsd0JBQXdCO2NBYnBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxjQUFjO2dCQUNkLFFBQVE7Z0JBQ1IsK0JBQStCO2dCQUMvQixTQUFTO2dCQUNULEtBQUs7Z0JBQ0wscURBQXFEO2dCQUNyRCxXQUFXLEVBQUUsb0NBQW9DO2dCQUNqRCxNQUFNLEVBQUUsRUFDUDthQUNGO3NDQUdVLElBQUk7a0JBQVosS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNJLFlBQVk7a0JBQXJCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBDaGFuZ2VFdmVudEFyZ3MgfSBmcm9tICdAc3luY2Z1c2lvbi9lajItaW5wdXRzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLW5neC1maWx0ZXItc2VhcmNoJyxcbiAgLy8gdGVtcGxhdGU6IGBcbiAgLy8gICA8cD5cbiAgLy8gICAgIG5neC1maWx0ZXItc2VhcmNoIHdvcmtzIVxuICAvLyAgIDwvcD5cbiAgLy8gYCxcbiAgLy8gc3R5bGVVcmxzOiBbJy4vbmd4LWZpbHRlci1zZWFyY2guY29tcG9uZW50LnNjc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1maWx0ZXItc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOZ3hGaWx0ZXJTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpIGNvbmZpZzogYW55O1xuICBAT3V0cHV0KCkgZmlsdGVyZWREYXRhOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgcHVibGljIHRlbXBGaWx0ZXI6IGFueSA9IHt9O1xuICBwdWJsaWMgc2VhcmNoVGV4dDogYW55O1xuICBwdWJsaWMgZmlsdGVyRGF0YTogYW55O1xuICBwdWJsaWMgYWxsU2VsZWN0ZWRGaWx0ZXJzOiBhbnkgPSBbXTtcbiAgcHVibGljIGZpbHRlciA9ICdhbGwnO1xuICBwdWJsaWMgc29ydCA9ICdsb3RfbnVtYmVyX2xvdyc7XG4gIHB1YmxpYyBpc1NvcnRlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgZGVmYXVsdEZpbHRlciA9ICdhbGwnO1xuICBwdWJsaWMgZGVmYXVsdFNvcnQgPSAnbG90X251bWJlcl9sb3cnO1xuICBwdWJsaWMgZGVmYXVsdFNlYXJjaCA9ICcnO1xuICBwdWJsaWMgc2VsZWN0ZWRMb3RTdGF0dXNGaWx0ZXI6IGFueTtcblxuICBwdWJsaWMgdmFsdWU6IG51bWJlciA9IDMwO1xuICBwdWJsaWMgdG9vbHRpcDogT2JqZWN0ID0geyBwbGFjZW1lbnQ6ICdCZWZvcmUnLCBpc1Zpc2libGU6IHRydWUsIHNob3dPbjogJ0Fsd2F5cycgfTtcbiAgcHVibGljIHRpY2tzOiBPYmplY3QgPSB7IHBsYWNlbWVudDogJ0FmdGVyJywgbGFyZ2VTdGVwOiAyMCwgc21hbGxTdGVwOiAxMCwgc2hvd1NtYWxsVGlja3M6IHRydWUgfTtcbiAgcHVibGljIHN0ZXA6IG51bWJlciA9IDUwO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZih0aGlzLmRhdGEgJiYgdGhpcy5jb25maWcpIHtcbiAgICAgIHRoaXMuc2V0RmlsdGVyQ29uZmlnKHRoaXMuZGF0YSk7XG4gICAgICB0aGlzLmZpbHRlckRhdGEgPSB0aGlzLmRhdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdwbGVhc2UgQWRkIHRoZSBkYXRhIGFuZCBjb25maWcnKVxuICAgIH1cbiAgfVxuXG4gIHNldEZpbHRlckNvbmZpZyhkYXRhOiBhbnkpIHtcbiAgICBmb3IgKGxldCBpID0gZGF0YS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgbGV0IHN0YXR1c05hbWU7XG4gICAgICBkYXRhW2ldWydzdGF0dXNOYW1lJ10gPSBzdGF0dXNOYW1lO1xuICAgICAgLy8gQ3JlYXRlIHRoZSBrZXkgZm9yIHRoZSBjdXN0b20gZmllbGRzLi4uLiBBZGQgdGhlIGN1c3RvbV8gYmVmb3JlIGVhY2ggY3VzdG9tIGZpbGVkIG5hbWUuLi5cbiAgICAgIGlmIChkYXRhW2ldLmN1c3RvbUZpZWxkcyAmJiAhXy5pc0VtcHR5KGRhdGFbaV0uY3VzdG9tRmllbGRzKSkge1xuICAgICAgICBjb25zdCBjdXN0b21GaWVsZHMgPSBkYXRhW2ldLmN1c3RvbUZpZWxkcztcbiAgICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gaW4gY3VzdG9tRmllbGRzKSB7XG4gICAgICAgICAgICBpZiAoY3VzdG9tRmllbGRzW2l0ZW1dLnNob3dGaWx0ZXIpIHtcbiAgICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSB1bmlxdWUga2V5IGZvciB0aGUgY3VzdG9tIGZpZWxkcy5cbiAgICAgICAgICAgICBsZXQga2V5ID0gJ2N1c3RvbV8nK2l0ZW07XG4gICAgICAgICAgICAgLy8gQ2hhbmdlIHRoZSBjb25maWcgZm9yIHRoZSB0aGUgZGlzcGxheSBuYW1lIHdhbnQgdG8gc2hvdyBkaWZmZXJlbnQuXG4gICAgICAgICAgICAgIGNvbnN0IGMgPSBfLmdldCh0aGlzLmNvbmZpZy5maWVsZHNDb25maWdDdXN0b21DaGFuZ2VzLCBrZXkpXG4gICAgICAgICAgICAgIGlmKGMpIHtcbiAgICAgICAgICAgICAgICAvLyBDb2RlIGZvciBhZGRpbmcgdGhlIGVtcHR5IGRhdGEgYXMgdGhlIG5vdCBkYXRlZCBsb3RzLi4uLlxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gY3VzdG9tRmllbGRzW2l0ZW1dLnZhbHVlID09IGMudmFsdWUgPyBjLnJlcGxhY2VWYWx1ZSA6IGN1c3RvbUZpZWxkc1tpdGVtXS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gIGN1c3RvbUZpZWxkc1tpdGVtXS52YWx1ZSA9PSBjLnZhbHVlID8gYy5kaXNwbGF5TmFtZSA6IGN1c3RvbUZpZWxkc1tpdGVtXS52YWx1ZTtcbiAgICAgICAgICAgICAgICBkYXRhW2ldWydjdXN0b21fJytjdXN0b21GaWVsZHNbaXRlbV0ubmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBkYXRhW2ldWydjdXN0b21fZGlzcGxheV8nK2N1c3RvbUZpZWxkc1tpdGVtXS5uYW1lXSA9IG5hbWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YVtpXVsnY3VzdG9tXycrY3VzdG9tRmllbGRzW2l0ZW1dLm5hbWVdID0gY3VzdG9tRmllbGRzW2l0ZW1dLnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnNldENoZWNrQm94RmlsdGVyKGRhdGFbaV0pO1xuICAgIH1cbiAgICB0aGlzLnNvcnRDaGVja0JveGVzRmlsdGVyKCk7XG4gIH1cbiAgc2V0Q2hlY2tCb3hGaWx0ZXIoZGF0YTogYW55KSB7XG4gICAgLy8gQ2hlY2tlZCB0aGUgZmlsdGVyIHBhcmFtZXRlclxuICAgIGlmKHRoaXMuY29uZmlnLmZpbHRlciAmJiB0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyICkge1xuICAgICAgZm9yKGxldCBqID0gdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlci5sZW5ndGggLTE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgIHZhciBjb25maWdJbmRleCA9IHRoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal07XG4gICAgICAgLy8gdmFyIGZpZWxkVHlwZSA9IHRoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmllbGRUeXBlO1xuICAgICAgICBpZiAoY29uZmlnSW5kZXguaXNTaG93RmlsdGVyKSB7XG4gICAgICAgICAgdmFyIGtleSA9IGNvbmZpZ0luZGV4LmZpbHRlckJ5O1xuICAgICAgICAgIHZhciBpc1JhbmdlRmlsdGVyV2l0aERpZmZWYWx1ZSA9IGZhbHNlO1xuICAgICAgICAgIC8vZGF0YS5oYXNPd25Qcm9wZXJ0eShjb25maWdJbmRleC5sb3dWYWx1ZUZpZWxkTmFtZSkgJiYgIGRhdGEuaGFzT3duUHJvcGVydHkoY29uZmlnSW5kZXguaGlnaFZhbHVlRmllbGROYW1lKVxuICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGNvbmZpZ0luZGV4Lmxvd1ZhbHVlRmllbGRWYWx1ZSkgJiYgIGRhdGEuaGFzT3duUHJvcGVydHkoY29uZmlnSW5kZXguaGlnaFZhbHVlRmllbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpc1JhbmdlRmlsdGVyV2l0aERpZmZWYWx1ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGlzUmFuZ2VGaWx0ZXJXaXRoRGlmZlZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkgfHwgaXNSYW5nZUZpbHRlcldpdGhEaWZmVmFsdWUpIHtcbiAgICAgICAgICAgICBpZiAodGhpcy50ZW1wRmlsdGVyLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgIGlmICgoZGF0YVtjb25maWdJbmRleC5maWVsZE5hbWVdICYmIGRhdGFbY29uZmlnSW5kZXguZmllbGRWYWx1ZV0pIHx8IChpc1JhbmdlRmlsdGVyV2l0aERpZmZWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgb2JqOiBhbnkgPSB7fTtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnSW5kZXguZmlsdGVyVHlwZSA9PSAnY2hlY2tCb3hlcycpIHtcbiAgICAgICAgICAgICAgICAgIG9ialsnZmlsdGVyQnknXSA9IGtleTtcbiAgICAgICAgICAgICAgICAgIG9ialsnZmllbGROYW1lJ10gPSBkYXRhW2NvbmZpZ0luZGV4LmZpZWxkTmFtZV07XG4gICAgICAgICAgICAgICAgICBvYmpbJ2ZpZWxkVmFsdWUnXSA9ICBjb25maWdJbmRleC5kYXRhVHlwZSA9PSBOdW1iZXIgPyAgTnVtYmVyKGRhdGFbY29uZmlnSW5kZXguZmllbGRWYWx1ZV0pOiBkYXRhW2NvbmZpZ0luZGV4LmZpZWxkVmFsdWVdO1xuICAgICAgICAgICAgICAgICAgb2JqWydpc0NoZWNrZWQnXSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyggb2JqWydmaWVsZFZhbHVlJ10sICdPQkogRklFTERTIFZBTFVFJylcbiAgICAgICAgICAgICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgICAgICAgICAgIHZhciBpc1ByZXNlbnQgPSB0aGlzLnRlbXBGaWx0ZXJba2V5XS5zb21lKGZ1bmN0aW9uKGVsOiBhbnkpeyByZXR1cm4gZWxbJ2ZpZWxkVmFsdWUnXSA9PSBkYXRhW3NlbGYuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmllbGRWYWx1ZV19KTtcbiAgICAgICAgICAgICAgICAgIGlmICghaXNQcmVzZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudGVtcEZpbHRlcltzZWxmLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XS5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKGNvbmZpZ0luZGV4LmZpbHRlclR5cGUgPT0gJ3JhbmdlX3NsaWRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzTWluID0gdGhpcy50ZW1wRmlsdGVyW2tleV0ubWluVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmV2aW91c01heCA9IHRoaXMudGVtcEZpbHRlcltrZXldLm1heFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudE1pblZhbHVlID0gIE51bWJlcihkYXRhW2NvbmZpZ0luZGV4Lmxvd1ZhbHVlRmllbGRWYWx1ZV0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudE1heFZhbHVlID0gIE51bWJlcihkYXRhW2NvbmZpZ0luZGV4LmhpZ2hWYWx1ZUZpZWxkVmFsdWVdKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1pbiA9IHByZXZpb3VzTWluIDwgY3VycmVudE1pblZhbHVlID8gcHJldmlvdXNNaW4gOiBjdXJyZW50TWluVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXggPSBwcmV2aW91c01heCA+IGN1cnJlbnRNYXhWYWx1ZSA/IHByZXZpb3VzTWF4IDogY3VycmVudE1heFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnbWluVmFsdWUnXSA9IG1pbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ21heFZhbHVlJ10gPSBtYXg7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydyYW5nZVZhbHVlJ10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2RlZmF1bHRSYW5nZVZhbHVlJ10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2Ryb3BEb3duUmFuZ2VWYWx1ZXMnXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsncmFuZ2VWYWx1ZSddLnB1c2gobWluKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ3JhbmdlVmFsdWUnXS5wdXNoKG1heCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzbWFsbFN0ZXAgPSBjb25maWdJbmRleC5zdGVwID8gKGNvbmZpZ0luZGV4LnN0ZXAgKiAyKSA6IDEwMFxuICAgICAgICAgICAgICAgICAgICBsZXQgbGFyZ2VTdGVwID0gY29uZmlnSW5kZXguc3RlcCB8fCA1MDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpZmYgPSBtYXggLSBtaW47XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydzbWFsbFN0ZXAnXSA9IGRpZmYgLyBzbWFsbFN0ZXAgO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnbGFyZ2VTdGVwJ10gPSBkaWZmIC8gbGFyZ2VTdGVwIDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ3RpY2tzJ10gPSB7IHBsYWNlbWVudDogJ0FmdGVyJywgbGFyZ2VTdGVwOiBkaWZmIC8gbGFyZ2VTdGVwICAsIHNtYWxsU3RlcDogZGlmZiAvIHNtYWxsU3RlcCwgc2hvd1NtYWxsVGlja3M6IHRydWUsIHNob3dMYXJnZVRpY2tzOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZGVmYXVsdFJhbmdlVmFsdWUnXS5wdXNoKG1pbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkZWZhdWx0UmFuZ2VWYWx1ZSddLnB1c2gobWF4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2Ryb3BEb3duUmFuZ2VWYWx1ZXMnXS5wdXNoKG1pbik7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkcm9wRG93blJhbmdlVmFsdWVzJ10ucHVzaChtYXgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsncmFuZ2VTdGVwJ10gPSBzbWFsbFN0ZXAgLy9kaWZmIC8gc21hbGxTdGVwO1xuICAgICAgICAgICAgICAgICAgLy8gICBmaWx0ZXJBcnJheVJhbmdlRmlsdGVyXG4gICAgICAgICAgICAgICAgICAvLyBzaG93T246ICdBbHdheXMnXG4gICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZHJvcGRvd24nXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgbGV0IGRyb3Bkb3duVmFsdWUgPSBtaW47XG4gICAgICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPD0gc21hbGxTdGVwOyBrICsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkcm9wZG93biddLnB1c2goZHJvcGRvd25WYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICBkcm9wZG93blZhbHVlID0gKGRpZmYgLyBzbWFsbFN0ZXApICsgZHJvcGRvd25WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2Ryb3Bkb3duJ10gPSBfLiB1bmlxKHRoaXMudGVtcEZpbHRlcltrZXldWydkcm9wZG93biddKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG9iajogYW55ID0ge307XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZ0luZGV4LmlzU2hvd0ZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgaWYgKChkYXRhW2NvbmZpZ0luZGV4LmZpZWxkTmFtZV0gJiYgZGF0YVtjb25maWdJbmRleC5maWVsZFZhbHVlXSkgfHwgKGlzUmFuZ2VGaWx0ZXJXaXRoRGlmZlZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZmlsdGVyVGl0bGUnXSA9IGNvbmZpZ0luZGV4LmZpbHRlclRpdGxlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnaXNTaG93RmlsdGVyJ10gPSBjb25maWdJbmRleC5pc1Nob3dGaWx0ZXI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydmaWx0ZXJCeSddID0ga2V5O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZmlsdGVyVmFsdWVzU29ydGluZyddID0gY29uZmlnSW5kZXguZmlsdGVyVmFsdWVzU29ydGluZztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2ZpbHRlclNvcnREaXJlY3Rpb24nXSA9IGNvbmZpZ0luZGV4LmZpbHRlclNvcnREaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydpc1Nob3dNb3JlJ10gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2ZpbHRlckNoZWNrQm94TGltaXQnXSA9IGNvbmZpZ0luZGV4LmZpbHRlckNoZWNrQm94TGltaXQ7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydmaWx0ZXJUeXBlJ10gPSBjb25maWdJbmRleC5maWx0ZXJUeXBlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnSW5kZXguZmlsdGVyVHlwZSA9PSAnY2hlY2tCb3hlcycpIHtcbiAgICAgICAgICAgICAgICAgICAgICBvYmpbJ2ZpbHRlckJ5J10gPSBrZXk7XG4gICAgICAgICAgICAgICAgICAgICAgb2JqWydmaWVsZE5hbWUnXSA9IGRhdGFbY29uZmlnSW5kZXguZmllbGROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICBvYmpbJ2ZpZWxkVmFsdWUnXSA9ICBjb25maWdJbmRleC5kYXRhVHlwZSA9PSBOdW1iZXIgPyAgTnVtYmVyKGRhdGFbY29uZmlnSW5kZXguZmllbGRWYWx1ZV0pOiBkYXRhW2NvbmZpZ0luZGV4LmZpZWxkVmFsdWVdO1xuICAgICAgICAgICAgICAgICAgICAgIG9ialsnaXNDaGVja2VkJ10gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XS5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjb25maWdJbmRleC5maWx0ZXJUeXBlID09ICdyYW5nZV9zbGlkZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2ZpbHRlckJ5TG93VmFsdWUnXSA9IGNvbmZpZ0luZGV4LmZpbHRlckJ5TG93VmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2ZpbHRlckJ5SGlnaFZhbHVlJ10gPSBjb25maWdJbmRleC5maWx0ZXJCeUhpZ2hWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsncmFuZ2VWYWx1ZSddID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2RlZmF1bHRSYW5nZVZhbHVlJ10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZHJvcERvd25SYW5nZVZhbHVlcyddID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgbGV0IG1pbiA9IE51bWJlcihkYXRhW2NvbmZpZ0luZGV4Lmxvd1ZhbHVlRmllbGRWYWx1ZV0pO1xuICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXggPSBOdW1iZXIoZGF0YVtjb25maWdJbmRleC5oaWdoVmFsdWVGaWVsZFZhbHVlXSk7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ21pblZhbHVlJ10gPSBtaW47XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ21heFZhbHVlJ10gPSBtYXhcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsncmFuZ2VWYWx1ZSddLnB1c2gobWluKTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsncmFuZ2VWYWx1ZSddLnB1c2gobWF4KTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsnZGVmYXVsdFJhbmdlVmFsdWUnXS5wdXNoKG1pbik7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2RlZmF1bHRSYW5nZVZhbHVlJ10ucHVzaChtYXgpO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkcm9wRG93blJhbmdlVmFsdWVzJ10ucHVzaChtaW4pO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlcltrZXldWydkcm9wRG93blJhbmdlVmFsdWVzJ10ucHVzaChtYXgpO1xuICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGVwID0gY29uZmlnSW5kZXguc3RlcCB8fCAxMDA7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW2tleV1bJ2Ryb3Bkb3duJ10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJba2V5XVsncmFuZ2VTdGVwJ10gPSAgY29uZmlnSW5kZXguc3RlcCAqIDI7Ly8obWluICsgbWF4KSAvIHN0ZXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHNvcnRDaGVja0JveGVzRmlsdGVyKCkge1xuICAgIGZvcihsZXQgaiA9IHRoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXIubGVuZ3RoIC0xOyBqID49IDA7IGotLSkge1xuICAgICAgaWYgKHRoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uaXNTaG93RmlsdGVyKSB7XG4gICAgICAgICAgIGlmICh0aGlzLnRlbXBGaWx0ZXIuaGFzT3duUHJvcGVydHkodGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeSkpIHtcbiAgICAgICAgICAgICBpZiAodGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldLmZpbHRlclZhbHVlc1NvcnRpbmdcbiAgICAgICAgICAgICAgJiYgdGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldLmZpbHRlclNvcnREaXJlY3Rpb25cbiAgICAgICAgICAgICAgJiYgdGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldLmZpbHRlclR5cGUgPT0gJ2NoZWNrQm94ZXMnXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICBsZXQgc29ydERpcmVjdGlvbiA9IF8ubG93ZXJDYXNlKHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XS5maWx0ZXJTb3J0RGlyZWN0aW9uKTtcbiAgICAgICAgICAgICAgICAgc29ydERpcmVjdGlvbiA9IHNvcnREaXJlY3Rpb24gPT0gJ2FzYycgID8gc29ydERpcmVjdGlvbiA6ICdkZXNjJztcbiAgICAgICAgICAgICAgICAgbGV0IGRpcmVjdGlvbjogYW55ID0gW107XG4gICAgICAgICAgICAgICAgIGRpcmVjdGlvbi5wdXNoKHNvcnREaXJlY3Rpb24pO1xuICAgICAgICAgICAgICAgICBsZXQgcGlja0FycmF5ID0gXy5waWNrKHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XSwgWydmaWx0ZXJUaXRsZScsICdpc1Nob3dGaWx0ZXInLCAnZmlsdGVyQnknLCAnZmlsdGVyVmFsdWVzU29ydGluZycsXG4gICAgICAgICAgICAgICAgICdmaWx0ZXJTb3J0RGlyZWN0aW9uJywgJ2lzU2hvd01vcmUnLCAnZmlsdGVyQ2hlY2tCb3hMaW1pdCcsICdmaWx0ZXJUeXBlJ10pO1xuICAgICAgICAgICAgICAgICBjb25zdCBzb3J0ZWQgPSBfLm9yZGVyQnkodGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldICwgWydmaWVsZFZhbHVlJ10sIGRpcmVjdGlvbik7XG4gICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XSA9IHNvcnRlZDtcbiAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldWydmaWx0ZXJUaXRsZSddID0gcGlja0FycmF5LmZpbHRlclRpdGxlO1xuICAgICAgICAgICAgICAgICB0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV1bJ2lzU2hvd0ZpbHRlciddID0gcGlja0FycmF5LmlzU2hvd0ZpbHRlcjtcbiAgICAgICAgICAgICAgICAgdGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldWydmaWx0ZXJCeSddID1waWNrQXJyYXkuZmlsdGVyQnk7XG4gICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XVsnZmlsdGVyVmFsdWVzU29ydGluZyddID0gcGlja0FycmF5LmZpbHRlclZhbHVlc1NvcnRpbmc7XG4gICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XVsnZmlsdGVyU29ydERpcmVjdGlvbiddID0gcGlja0FycmF5LmZpbHRlclNvcnREaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XVsnaXNTaG93TW9yZSddID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XVsnZmlsdGVyQ2hlY2tCb3hMaW1pdCddID0gcGlja0FycmF5LmZpbHRlckNoZWNrQm94TGltaXQ7XG4gICAgICAgICAgICAgICAgIHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XVsnZmlsdGVyVHlwZSddID0gcGlja0FycmF5LmZpbHRlclR5cGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG5cbiAgYXBwbHlGaWx0ZXIoKSB7XG4gICAgLy8gQXNzaWduIHRoZSBvcmlnaW5hbCBhcnJheSB3aXRob3V0IGFueSBmaWx0ZXIgdG8gdGhlIG5ld0xvdHNcbiAgICB2YXIgbmV3TG90cyA9IHRoaXMuZGF0YTtcbiAgICAgIC8vIENoZWNrIHRoZSBzZWFyY2hUZXh0IGlzIG5vdCB1bmRlZmluZWQgYW5kIHRoZW4gc2VhcmNoIHRoZSBieSBwcm92aWRlZCBmaWVsZHMuXG4gICAgICBpZiAodGhpcy5zZWFyY2hUZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5zZWFyY2hUZXh0ID0gdGhpcy5zZWFyY2hUZXh0LnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciBtYWluU2VhcmNoQXJyYXkgPSBbXTtcbiAgICAgICAgICAvLyBTZWFyY2ggSW4gdGhlIGFsbCBmaWVsZHMgZ2l2ZW4gaW4gdGhlIGNvbmZpZyBvZiB0aGUgc2VhcmNoLlxuICAgICAgICAgIGZvciAobGV0IGogPSB0aGlzLmNvbmZpZy5zZWFyY2guc2VhcmNoUGFyYW1ldGVyLmxlbmd0aCAtMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgICAgIGxldCBzZWFyY2hBcnJheSA9IFtdXG4gICAgICAgICAgICBzZWFyY2hBcnJheSA9ICB0aGlzLmRhdGEuZmlsdGVyKChpdDogYW55KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpdFt0aGlzLmNvbmZpZy5zZWFyY2guc2VhcmNoUGFyYW1ldGVyW2pdLnNlYXJjaEJ5XSAhPSBudWxsICYmIGl0W3RoaXMuY29uZmlnLnNlYXJjaC5zZWFyY2hQYXJhbWV0ZXJbal0uc2VhcmNoQnldICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdFt0aGlzLmNvbmZpZy5zZWFyY2guc2VhcmNoUGFyYW1ldGVyW2pdLnNlYXJjaEJ5XS50b0xvY2FsZUxvd2VyQ2FzZSgpLmluY2x1ZGVzKHRoaXMuc2VhcmNoVGV4dCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIFB1c2ggdGhlIGVhY2ggc2VhcmNoIHJlc3VsdC4uLlxuICAgICAgICAgIGlmIChzZWFyY2hBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBtYWluU2VhcmNoQXJyYXkucHVzaCguLi5zZWFyY2hBcnJheSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIEFzc2lnbiB0aGUgc2VhcmNoZWQgQXJyYXkgdG8gdGhlIGxvdHMgQXJyYXkuXG4gICAgICAgICAgbmV3TG90cyA9IG1haW5TZWFyY2hBcnJheTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgYWxsU2VsZWN0ZWRDaGVja0JveGVzQXJyYXkgPSBbXTtcbiAgICAgIHZhciBhbGxTZWxlY3RlZFJhbmdlRmlsdGVyQXJyYXkgPSBbXTtcbiAgICAgIC8vIENoZWNrIHRoZSBjb25maWcgZm9yIHRoZSBmaWx0ZXIuLi4uXG4gICAgICBmb3IobGV0IGogPSB0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyLmxlbmd0aCAtMTsgaiA+PSAwOyBqLS0pIHtcbiAgICAgICAgLy8gQ2hlY2sgdGhlIHN0YXR1cyBvZiB0aGUgZmlsdGVyXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmlzU2hvd0ZpbHRlcikge1xuICAgICAgICAgIGlmICh0aGlzLnRlbXBGaWx0ZXIuaGFzT3duUHJvcGVydHkodGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeSkgJiYgdGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldLmZpbHRlclR5cGUgPT0gJ2NoZWNrQm94ZXMnKSB7XG4gICAgICAgICAgICAvLyBGaWx0ZXIgdGhlIGNoZWNrZWQgVmFsdWVzXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkTG90U3RhdHVzRmlsdGVyID0gIHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XS5maWx0ZXIoKHZhbHVlOiBhbnksIGluZGV4OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUuaXNDaGVja2VkXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gUHVzaCB0aGUgYWxsIGNoZWNrZWQgdmFsdWVzIGluIHNhbWUgYXJyYXlcbiAgICAgICAgICAgIGFsbFNlbGVjdGVkQ2hlY2tCb3hlc0FycmF5LnB1c2godGhpcy5zZWxlY3RlZExvdFN0YXR1c0ZpbHRlcik7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoaXMudGVtcEZpbHRlci5oYXNPd25Qcm9wZXJ0eSh0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5KSAmJiB0aGlzLnRlbXBGaWx0ZXJbdGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeV0uZmlsdGVyVHlwZSA9PSAncmFuZ2Vfc2xpZGVyJykge1xuICAgICAgICAgICAgLy8gSWYgZmlsdGVyIHR5cGUgaXMgdGhlIFJhbmdlIGZpbHRlciB0aGVuIHB1c2ggdGhlIGRhdGEgaW4gdGhlIHJhbmdlIGZpbHRlci5cbiAgICAgICAgICAgIGFsbFNlbGVjdGVkUmFuZ2VGaWx0ZXJBcnJheS5wdXNoKHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBzaW5nbGVUeXBlRmlsdGVyQXJyYXkgPSBbXTtcbiAgICAgIHRoaXMuYWxsU2VsZWN0ZWRGaWx0ZXJzID0gYWxsU2VsZWN0ZWRDaGVja0JveGVzQXJyYXk7XG4gICAgICAvL0ZpbHRlciB0aGUgZGF0YSBiYXNlZCBvbiBjaGVja2JveGVzXG4gICAgICBpZiAoYWxsU2VsZWN0ZWRDaGVja0JveGVzQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgIC8vIEZpbHRlciB0aGUgZWFjaCBhcnJheSBhdCBhIHRpbWUsIEluIGNvbmZpZyBtdWx0aXBsZSBmaWx0ZXJzLlxuICAgICAgIHNpbmdsZVR5cGVGaWx0ZXJBcnJheSA9IHRoaXMuZmlsdGVyU2luZ2xlKG5ld0xvdHMgLGFsbFNlbGVjdGVkQ2hlY2tCb3hlc0FycmF5KTtcbiAgICAgICBuZXdMb3RzID0gc2luZ2xlVHlwZUZpbHRlckFycmF5O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3TG90cyA9IG5ld0xvdHM7XG4gICAgICB9XG5cbiAgICAgIGxldCBzaW5nbGVSYW5nZVNsaWRlckZpbHRlciA9IFtdO1xuICAgICAgLy8gRmlsdGVyIHRoZSBkYXRhIGJhc2VkIG9uIHRoZSByYW5nZSBmaWx0ZXIuXG4gICAgICBpZiAoYWxsU2VsZWN0ZWRSYW5nZUZpbHRlckFycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIEZpbHRlciB0aGUgZWFjaCBhcnJheSBhdCBhIHRpbWUsIEluIGNvbmZpZyBtdWx0aXBsZSBmaWx0ZXJzLlxuICAgICAgIHNpbmdsZVJhbmdlU2xpZGVyRmlsdGVyID0gdGhpcy5maWx0ZXJTaW5nbGVSYW5nZUZpbHRlcihuZXdMb3RzICwgYWxsU2VsZWN0ZWRSYW5nZUZpbHRlckFycmF5KTtcbiAgICAgICAgbmV3TG90cyA9IHNpbmdsZVJhbmdlU2xpZGVyRmlsdGVyO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3TG90cyA9IG5ld0xvdHM7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmlsdGVyRGF0YSA9IFtdO1xuICAgICAgdGhpcy5maWx0ZXJEYXRhID0gbmV3TG90cztcblxuICAgICAgLy8gQ2hlY2sgdGhlIFNvcnRpbmcgaXMgYXBwbGllZCBpZiBZZXMgdGhlbiBzb3J0IHRoZSBhcnJheSBhZnRlciBmaWx0ZXIuXG4gICAgICBpZiAodGhpcy5pc1NvcnRlZCkge1xuICAgICAgICAvL3RoaXMuc29ydExvdHMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZmlsdGVyZWREYXRhLmVtaXQodGhpcy5maWx0ZXJEYXRhKTtcbiAgICAgIH1cblxuICAgICAgLy8gRW1pdCB0aGUgdmFsdWUgdG8gdGhlIHBhcmVudCBjb21wb25lbnRcbiAgICAgIC8vdGhpcy5hZGRGaWx0ZXJUb1JvdXRlKClcbiAgfVxuXG4gIGZpbHRlclNpbmdsZShkYXRhOiBhbnksIHNlbGVjdGVkQ2hlY2tCb3hlc0FycmF5czogYW55ICkge1xuICAgIGZvciAobGV0IGsgPSBzZWxlY3RlZENoZWNrQm94ZXNBcnJheXMubGVuZ3RoIC0xOyBrID49IDA7IGstLSkge1xuICAgICAgdmFyIG5ld0RhdGEgPSBbXTtcbiAgICAgIGlmIChzZWxlY3RlZENoZWNrQm94ZXNBcnJheXNba10ubGVuZ3RoID4gMCkge1xuICAgICAgICBkYXRhID0gdGhpcy5maWx0ZXJBcnJheUJhc2VkT25DaGVja0JveGVzKGRhdGEsIHNlbGVjdGVkQ2hlY2tCb3hlc0FycmF5c1trXSlcbiAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBuZXdEYXRhLnB1c2goLi4uZGF0YSk7XG4gICAgICAgICAgZGF0YSA9IG5ld0RhdGE7XG4gICAgICAgfSBlbHNlIHtcbiAgICAgICAgIGRhdGEgPSBbXTtcbiAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVuaXF1ZVZhbHVlc0luQXJyYXkoZGF0YSk7XG4gIH1cblxuXG4gIGZpbHRlclNpbmdsZVJhbmdlRmlsdGVyKGRhdGE6IGFueSwgc2VsZWN0ZWRSYW5nZUZpbHRlckFycmF5czogYW55ICkge1xuICAgIGZvciAobGV0IGsgPSBzZWxlY3RlZFJhbmdlRmlsdGVyQXJyYXlzLmxlbmd0aCAtMTsgayA+PSAwOyBrLS0pe1xuICAgICAgdmFyIG5ld0RhdGEgPSBbXTtcbiAgICAgIGlmIChfLmlzT2JqZWN0KHNlbGVjdGVkUmFuZ2VGaWx0ZXJBcnJheXNba10pKSB7XG4gICAgICAgIGRhdGEgPSB0aGlzLmZpbHRlckFycmF5UmFuZ2VGaWx0ZXIoZGF0YSwgc2VsZWN0ZWRSYW5nZUZpbHRlckFycmF5c1trXSk7XG4gICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgbmV3RGF0YS5wdXNoKC4uLmRhdGEpO1xuICAgICAgICAgIGRhdGEgPSBuZXdEYXRhO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkYXRhID0gW107XG4gICAgICAgICAgfVxuICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudW5pcXVlVmFsdWVzSW5BcnJheShkYXRhKTtcbiAgfVxuXG4gIGZpbHRlckFycmF5QmFzZWRPbkNoZWNrQm94ZXMgKGxvdHNBcnJheTogYW55LCBzZWxlY3RlZENoZWNrQm94ZXNBcnJheXM6IGFueSkge1xuICAgIHZhciBmaWx0ZXJlZDogYW55ID0gW107XG4gICAgZm9yICh2YXIgbG90cyBpbiBsb3RzQXJyYXkpIHtcbiAgICAgIGlmIChzZWxlY3RlZENoZWNrQm94ZXNBcnJheXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNlbGVjdGVkQ2hlY2tCb3hlc0FycmF5cy5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChsb3RzQXJyYXlbbG90c11bZWxlbWVudC5maWx0ZXJCeV0gPT0gZWxlbWVudC5maWVsZFZhbHVlICl7XG4gICAgICAgICAgICAgIGlmIChmaWx0ZXJlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICBmaWx0ZXJlZC5wdXNoKGxvdHNBcnJheVtsb3RzXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWQucHVzaChsb3RzQXJyYXlbbG90c10pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy51bmlxdWVWYWx1ZXNJbkFycmF5KGZpbHRlcmVkKTtcbiAgfVxuXG4gIHVuaXF1ZVZhbHVlc0luQXJyYXkoZGF0YTogYW55ICkge1xuICAgIGNvbnN0IHVuaXF1ZVZhbHVlcyA9IGRhdGEuZmlsdGVyKChlbGVtZW50OiBhbnksIGluZGV4OiBudW1iZXIpID0+XG4gICAgZGF0YS5maW5kSW5kZXgoIChvYmo6IGFueSkgPT4gb2JqW3RoaXMuY29uZmlnLmZpbHRlci51bmlxdWVDb2x1bW5dID09IGVsZW1lbnRbdGhpcy5jb25maWcuZmlsdGVyLnVuaXF1ZUNvbHVtbl0pID09IGluZGV4KTtcbiAgICByZXR1cm4gdW5pcXVlVmFsdWVzO1xuICB9XG5cblxuXG4gIGZpbHRlckFycmF5UmFuZ2VGaWx0ZXIgKGxvdHNBcnJheTogYW55LCByYW5nZUZpbHRlckFycmF5czogYW55KSB7XG4gICAgdmFyIGZpbHRlcmVkID0gW107XG4gICAgZm9yICh2YXIgbG90cyBpbiBsb3RzQXJyYXkpIHtcbiAgICAgIGxldCBtaW4gPSByYW5nZUZpbHRlckFycmF5cy5yYW5nZVZhbHVlWzBdO1xuICAgICAgbGV0IG1heCA9IHJhbmdlRmlsdGVyQXJyYXlzLnJhbmdlVmFsdWVbMV07XG4gICAgICBsZXQgbWluVmFsdWVJbmRleCA9IE51bWJlcihsb3RzQXJyYXlbbG90c11bcmFuZ2VGaWx0ZXJBcnJheXMuZmlsdGVyQnlMb3dWYWx1ZV0pO1xuICAgICAgbGV0IG1heFZhbHVlSW5kZXggPSBOdW1iZXIobG90c0FycmF5W2xvdHNdW3JhbmdlRmlsdGVyQXJyYXlzLmZpbHRlckJ5SGlnaFZhbHVlXSk7XG4gICAgICBpZiAoKG1pblZhbHVlSW5kZXggPj0gbWluICYmIG1pblZhbHVlSW5kZXggPD0gbWF4ICYmIG1heFZhbHVlSW5kZXggPj0gbWluICYmIG1heFZhbHVlSW5kZXggPD0gbWF4KSl7XG4gICAgICAgICAgZmlsdGVyZWQucHVzaChsb3RzQXJyYXlbbG90c10pO1xuICAgICAgfVxuICAgIH1cbiAgICAvL3JhbmdlRmlsdGVyQXJyYXlzLmRyb3BEb3duUmFuZ2VWYWx1ZXMgPSByYW5nZUZpbHRlckFycmF5cy5yYW5nZVZhbHVlO1xuICAgIHJldHVybiB0aGlzLnVuaXF1ZVZhbHVlc0luQXJyYXkoZmlsdGVyZWQpO1xuICB9XG5cbiAgY2xlYXJTaW5nbGVGaWx0ZXJzKGZpbHRlckJ5OiBzdHJpbmcgLCBmaWx0ZXJUeXBlPzogYW55KSB7XG4gICAgaWYgKGZpbHRlckJ5ICYmIGZpbHRlclR5cGUgPT0gJ2NoZWNrQm94ZXMnKSB7XG4gICAgICB0aGlzLnVuQ2hlY2tlZENoZWNrQm94ZXModGhpcy50ZW1wRmlsdGVyW2ZpbHRlckJ5XSlcbiAgICB9IGVsc2UgaWYgKGZpbHRlckJ5ICYmIGZpbHRlclR5cGUgPT0gJ3JhbmdlX3NsaWRlcicpIHtcbiAgICAgIHRoaXMuY2xlYXJSYW5nZVNsaWRlckZpbHRlcih0aGlzLnRlbXBGaWx0ZXJbZmlsdGVyQnldKTtcbiAgICB9XG4gICAgdGhpcy5hcHBseUZpbHRlcigpO1xuICB9XG5cbiAgY2xlYXJBbGxGaWx0ZXJzKCkge1xuICAgIHRoaXMuZmlsdGVyRGF0YSA9IFtdO1xuICAgIHRoaXMuc29ydCA9IHRoaXMuZGVmYXVsdFNvcnQ7XG4gICAgdGhpcy5zZWFyY2hUZXh0ID0gdGhpcy5kZWZhdWx0U2VhcmNoO1xuICAgIGZvcihsZXQgaiA9IHRoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXIubGVuZ3RoIC0xOyBqID49IDA7IGotLSkge1xuICAgICAgaWYgKHRoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uaXNTaG93RmlsdGVyKSB7XG4gICAgICAgICAgIGlmICgodGhpcy50ZW1wRmlsdGVyLmhhc093blByb3BlcnR5KHRoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnkpICYmIFxuICAgICAgICAgICAodGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldLmZpbHRlclR5cGUgPT09ICdjaGVja0JveGVzJykpKSB7XG4gICAgICAgICAgICB0aGlzLnVuQ2hlY2tlZENoZWNrQm94ZXModGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKCh0aGlzLnRlbXBGaWx0ZXIuaGFzT3duUHJvcGVydHkodGhpcy5jb25maWcuZmlsdGVyLmZpbHRlclBhcmFtZXRlcltqXS5maWx0ZXJCeSkgJiZcbiAgICAgICAgICAgKHRoaXMudGVtcEZpbHRlclt0aGlzLmNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyW2pdLmZpbHRlckJ5XS5maWx0ZXJUeXBlID09PSAncmFuZ2Vfc2xpZGVyJykpKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyUmFuZ2VTbGlkZXJGaWx0ZXIodGhpcy50ZW1wRmlsdGVyW3RoaXMuY29uZmlnLmZpbHRlci5maWx0ZXJQYXJhbWV0ZXJbal0uZmlsdGVyQnldKVxuICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB0aGlzLmZpbHRlckRhdGEgPSB0aGlzLmRhdGE7XG4gICAgdGhpcy5maWx0ZXJlZERhdGEuZW1pdCh0aGlzLmZpbHRlckRhdGEpO1xuICB9XG5cbiAgdW5DaGVja2VkQ2hlY2tCb3hlcyhkYXRhOiBhbnkpIHtcbiAgICBkYXRhLmZvckVhY2goKGVsZW1lbnQ6IGFueSkgPT4ge1xuICAgICAgZWxlbWVudC5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICB9KVxuICB9XG5cbiAgY2xlYXJSYW5nZVNsaWRlckZpbHRlcihkYXRhOiBhbnkpIHtcbiAgICBkYXRhLnJhbmdlVmFsdWUgPSBkYXRhLmRlZmF1bHRSYW5nZVZhbHVlO1xuICAgIGRhdGEuZHJvcERvd25SYW5nZVZhbHVlcyA9IFtdO1xuICAgIGRhdGEuZHJvcERvd25SYW5nZVZhbHVlcyA9IGRhdGEuZGVmYXVsdFJhbmdlVmFsdWU7XG4gIH1cblxuICBzaG93TW9yZUl0ZW1zKGZpbHRlckJ5OiBzdHJpbmcsc2hvd1N0YXR1czogYm9vbGVhbikge1xuICAgIGlmKHNob3dTdGF0dXMpIHtcbiAgICAgIHRoaXMudGVtcEZpbHRlcltmaWx0ZXJCeV1bJ2ZpbHRlckNoZWNrQm94TGltaXQnXSA9IHRoaXMudGVtcEZpbHRlcltmaWx0ZXJCeV0ubGVuZ3RoO1xuICAgICAgdGhpcy50ZW1wRmlsdGVyW2ZpbHRlckJ5XVsnaXNTaG93TW9yZSddID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYoIXNob3dTdGF0dXMpIHtcbiAgICAgIHRoaXMudGVtcEZpbHRlcltmaWx0ZXJCeV1bJ2lzU2hvd01vcmUnXSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG5cbiAgcmFuZ2VEcm9wRG93bk9uQ2hhbmdlKGRhdGE6IGFueSkge1xuICAgIGRhdGEucmFuZ2VWYWx1ZSA9IGRhdGEuZHJvcERvd25SYW5nZVZhbHVlcztcbiAgICB0aGlzLmFwcGx5RmlsdGVyKCk7XG4gIH1cblxuICBzbGlkZXJDaGFuZ2UoZGF0YTogYW55IHwgdW5kZWZpbmVkKSB7XG4gICAgZGF0YS5kcm9wRG93blJhbmdlVmFsdWVzID0gZGF0YS5yYW5nZVZhbHVlXG4gIH1cblxuXG59XG4iLCI8ZGl2IGNsYXNzPVwicm93XCIgKm5nSWY9XCJkYXRhICYmIGNvbmZpZ1wiPlxuICA8ZGl2IGNsYXNzPVwiY29sLXNtLTEyXCI+XG4gICAgIDxkaXYgY2xhc3M9XCJyb3cgcHQtMSBwYi0xXCI+XG4gICAgICAgPGRpdiBjbGFzcz1cImNvbC1zbS02XCI+XG5cbiAgICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgIDxoNiBjbGFzcz1cImZsb2F0LXJpZ2h0IGN1cnNvci1wb2ludGVyIHRleHQtcHJpbWFyeVwiIChjbGljayk9XCJjbGVhckFsbEZpbHRlcnMoKVwiPkNsZWFyIEFsbDwvaDY+XG4gICAgICAgPC9kaXY+XG4gICAgIDwvZGl2PlxuICAgICAgPGRpdiAqbmdJZj1cImNvbmZpZz8uc2VhcmNoPy5pc1NlYXJjaFNob3dcIiBjbGFzcz1cInB0LTEgcGItMVwiPlxuICAgICAgICA8c3Ryb25nIGNsYXNzPVwicHQtMiBwYi0yIGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1jYXBpdGFsaXplXCI+U2VhcmNoPC9zdHJvbmc+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwIHB0LTFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLW91dGxpbmVcIj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJmb3JtMVwiIGNsYXNzPVwiZm9ybS1jb250cm9sXCIgWyhuZ01vZGVsKV09XCJzZWFyY2hUZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggS2V5d29yZC4uLlwiIChrZXl1cCk9XCJhcHBseUZpbHRlcigpXCIvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxocj5cbiAgICAgIDxkaXYgKm5nSWY9XCJjb25maWc/LmZpbHRlcj8uaXNTaG93RmlsdGVyICYmIHRlbXBGaWx0ZXJcIj5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgY29uZmlnIG9mIGNvbmZpZy5maWx0ZXIuZmlsdGVyUGFyYW1ldGVyOyBsZXQgaSA9IGluZGV4O2xldCBsYXN0ID0gbGFzdDtcIj5cbiAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJjb25maWc/LmlzU2hvd0ZpbHRlciAmJiB0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBwdC0xIHBiLTFcIiAqbmdJZj1cIigoKCFjb25maWc/Lm1pbmltdW1TaG93TGltaXQgJiYgdGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmxlbmd0aCA+IDApIHx8ICh0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ubGVuZ3RoID4gY29uZmlnPy5taW5pbXVtU2hvd0xpbWl0ICYmIGNvbmZpZz8uaXNTaG93RmlsdGVyICYmIGNvbmZpZz8uZmlsdGVyVHlwZSA9PSAnY2hlY2tCb3hlcycgJiYgdGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmxlbmd0aCA+IDApKSB8fCAoY29uZmlnPy5maWx0ZXJUeXBlID09ICdyYW5nZV9zbGlkZXInICYmIHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5tYXhWYWx1ZSA+IDAgKSlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTggZmxvYXQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cImZvbnQtd2VpZ2h0LWJvbGRcIj57eyB0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0/LmZpbHRlclRpdGxlfX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTRcIj5cbiAgICAgICAgICAgICAgICAgIDxoNiBjbGFzcz1cImZsb2F0LXJpZ2h0IGN1cnNvci1wb2ludGVyIHRleHQtcHJpbWFyeSBjbGVhclwiIChjbGljayk9XCJjbGVhclNpbmdsZUZpbHRlcnModGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmZpbHRlckJ5LHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5maWx0ZXJUeXBlKVwiPkNsZWFyPC9oNj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIoY29uZmlnPy5pc1Nob3dGaWx0ZXIgJiYgY29uZmlnPy5maWx0ZXJUeXBlID09ICdjaGVja0JveGVzJyAmJiAoIWNvbmZpZz8ubWluaW11bVNob3dMaW1pdCB8fCAodGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmxlbmd0aCA+IGNvbmZpZz8ubWluaW11bVNob3dMaW1pdCkpKSBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiXCIgKm5nRm9yPVwibGV0IGZpbHRlciBvZiB0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0gfCBzbGljZSA6IDA6KCF0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0uaXNTaG93TW9yZSA/IGNvbmZpZy5maWx0ZXJDaGVja0JveExpbWl0IDogdGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmZpbHRlckNoZWNrQm94TGltaXQpOyBsZXQgaSA9IGluZGV4XCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgW2lkXT1cImZpbHRlci5maWVsZE5hbWVcIiBbbmFtZV09XCJmaWx0ZXIuZmllbGROYW1lXCIgW3ZhbHVlXT1cImZpbHRlci5maWVsZFZhbHVlXCIgWyhuZ01vZGVsKV09XCJmaWx0ZXIuaXNDaGVja2VkXCIgKGNoYW5nZSk9XCJhcHBseUZpbHRlcigpXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBsLTIgZm9udC1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICB7e2ZpbHRlci5maWVsZE5hbWV9fVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ubGVuZ3RoID4gY29uZmlnPy5maWx0ZXJDaGVja0JveExpbWl0IFwiPlxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC1wcmltYXJ5IHB0LTFcIiAqbmdJZiA9XCIhdGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmlzU2hvd01vcmVcIiAoY2xpY2spPVwic2hvd01vcmVJdGVtcyh0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0uZmlsdGVyQnksdHJ1ZSlcIj5cbiAgICAgICAgICAgICAgICAgIHt7IHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5sZW5ndGggLSBjb25maWcuZmlsdGVyQ2hlY2tCb3hMaW1pdCB9fSBNb3JlXG4gICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgICAgPGg2IGNsYXNzPVwiY3Vyc29yLXBvaW50ZXIgdGV4dC1wcmltYXJ5IHB0LTFcIiAqbmdJZiA9XCJ0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0uaXNTaG93TW9yZVwiIChjbGljayk9XCJzaG93TW9yZUl0ZW1zKHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5maWx0ZXJCeSwgZmFsc2UpXCI+XG4gICAgICAgICAgICAgICAgICAgIFNob3cgTGVzc1xuICAgICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiAqbmdJZj1cImNvbmZpZz8uaXNTaG93RmlsdGVyICYmIGNvbmZpZz8uZmlsdGVyVHlwZSA9PSAncmFuZ2Vfc2xpZGVyJyAmJiB0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ubWF4VmFsdWUgPiAwXCI+XG4gICAgICAgICAgICAgIDwhLS0gKGNoYW5nZSk9XCJsb2FuQ2hhbmdlKCRldmVudClcIiBcbiAgICAgICAgICAgICAgIFt0aWNrc109XCJ0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0udGlja3NcIiBcbiAgICAgICAgICAgICAgIFt0aWNrc109XCJ0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0udGlja3NcIlxuICAgICAgICAgICAgICAtLT5cbiAgICAgICAgICAgICAgPCEtLSB7e3RlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS50aWNrcyB8IGpzb259fSAtLT5cbiAgICAgICAgICAgICAgPCEtLSB7e3RlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XSAgfCBqc29ufX0gLS0+XG4gICAgICAgICAgICAgIDwhLS0ge3t0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ubWluVmFsdWV9fSAtLT5cbiAgICAgICAgICAgICAgPCEtLSB7e3RlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5IHwganNvbn19IC0tPlxuICAgICAgICAgICAgICA8IS0tIFt0aWNrc109XCJ0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0udGlja3NcIiBcbiAgICAgICAgICAgICAgICBbdG9vbHRpcF09XCJ0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0udG9vbHRpcFwiXG4gICAgICAgICAgICAgICAgIFt0aWNrc109XCJ0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0udGlja3NcIlxuICAgICAgICAgICAgICAgICBbdG9vbHRpcF09XCJ0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0udG9vbHRpcFwiXG4gICAgICAgICAgICAgIC0tPiBcbiAgICAgICAgICAgICAgPCEtLSBbdGlja3NdPVwidGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLnRpY2tzXCIgLS0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWluXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICB7e3RlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5yYW5nZVZhbHVlWzBdfX0gLSB7e3RlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5yYW5nZVZhbHVlWzFdfX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7e3RlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5yYW5nZVZhbHVlfX0gcmFuZ2UgdmFsdWVcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge3t0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ubWluVmFsdWUgfX0gbWluIHZhbHVlXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt7dGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLm1heFZhbHVlfX0gbWF4IHZhbHVlXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt7IHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5yYW5nZVN0ZXB9fSByYW5nZVN0ZXAgc3RlcFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7e3RlbXBGaWx0ZXJbY29uZmlnPy5maWx0ZXJCeV19fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGVqcy1zbGlkZXJcbiAgICAgICAgICAgICAgICBpZD1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICBbKHZhbHVlKV09XCJ0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ucmFuZ2VWYWx1ZVwiXG4gICAgICAgICAgICAgICAgW21pbl09XCJ0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ubWluVmFsdWVcIlxuICAgICAgICAgICAgICAgIFttYXhdPVwidGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLm1heFZhbHVlXCJcbiAgICAgICAgICAgICAgICBbc3RlcF09XCJ0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ucmFuZ2VTdGVwXCJcbiAgICAgICAgICAgICAgICBbdHlwZV09XCInUmFuZ2UnXCJcbiAgICAgICAgICAgICAgICAoY2hhbmdlKT1cInNsaWRlckNoYW5nZSh0ZW1wRmlsdGVyW2NvbmZpZz8uZmlsdGVyQnldKVwiXG4gICAgICAgICAgICAgICAgKGNoYW5nZWQpPVwiYXBwbHlGaWx0ZXIoKVwiPlxuICAgICAgICAgICAgICAgIDwvZWpzLXNsaWRlcj5cbiAgICAgICAgICAgICAgICA8ZWpzLXNsaWRlciBpZD0nbWlucmFuZ2UnIFt0eXBlXT1cIidtaW5UeXBlJ1wiIFt2YWx1ZV09XCInMTAwJ1wiPjwvZWpzLXNsaWRlcj5cbiAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbG9hdC1sZWZ0IG1pblwiPuKCuSB7e3RlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5taW5WYWx1ZX19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmbG9hdC1yaWdodCBtaW5cIj7igrkge3t0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0ubWF4VmFsdWV9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwicm93XCIgKm5nSWY9XCJ0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0uZHJvcGRvd24ubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiYnJvd3Nlci1kZWZhdWx0IGN1c3RvbS1zZWxlY3QgZmxvYXQtcmlnaHQgcmFuZ2Utc2VsZWN0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0uZHJvcERvd25SYW5nZVZhbHVlc1swXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJyYW5nZURyb3BEb3duT25DaGFuZ2UodGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgdmFsdWUgb2YgdGVtcEZpbHRlcltjb25maWcuZmlsdGVyQnldLmRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdWYWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHZhbHVlIHwgY3VycmVuY3lMb2NhbDonSU5SJ319XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLXNtLTYgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzPVwiYnJvd3Nlci1kZWZhdWx0IGN1c3RvbS1zZWxlY3QgZmxvYXQtcmlnaHQgcmFuZ2Utc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJ0ZW1wRmlsdGVyW2NvbmZpZy5maWx0ZXJCeV0uZHJvcERvd25SYW5nZVZhbHVlc1sxXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwicmFuZ2VEcm9wRG93bk9uQ2hhbmdlKHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHZhbHVlIG9mIHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5kcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgdmFsdWUgfCBjdXJyZW5jeUxvY2FsOidJTlInfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxociAqbmdJZj1cIighbGFzdCAmJiAoKCFjb25maWc/Lm1pbmltdW1TaG93TGltaXQgfHwgKHRlbXBGaWx0ZXJbY29uZmlnLmZpbHRlckJ5XS5sZW5ndGggPiBjb25maWc/Lm1pbmltdW1TaG93TGltaXQgJiYgY29uZmlnPy5pc1Nob3dGaWx0ZXIgJiYgY29uZmlnPy5maWx0ZXJUeXBlID09ICdjaGVja0JveGVzJykpIHx8IChjb25maWc/LmZpbHRlclR5cGUgPT0gJ3JhbmdlX3NsaWRlcicpKSAmJiBjb25maWc/LnNob3dCb3R0b21CYXIpXCI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=
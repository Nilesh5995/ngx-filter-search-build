import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as _ from 'lodash';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

class NgxFilterSearchService {
    constructor() { }
}
NgxFilterSearchService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgxFilterSearchService_Factory() { return new NgxFilterSearchService(); }, token: NgxFilterSearchService, providedIn: "root" });
NgxFilterSearchService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
NgxFilterSearchService.ctorParameters = () => [];

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
        console.log(this.tempFilter, 'this.temopfiler');
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
        console.log(this.data, 'this.data');
        console.log(this.config.search.searchParameter.length, 'this.config.search.searchParameter.length');
        // Check the searchText is not undefined and then search the by provided fields.
        if (this.searchText !== undefined) {
            this.searchText = this.searchText.toLocaleLowerCase();
            var mainSearchArray = [];
            // Search In the all fields given in the config of the search.
            for (let j = this.config.search.searchParameter.length - 1; j >= 0; j--) {
                let searchArray = [];
                searchArray = this.data.filter((it) => {
                    console.log(it, 'it');
                    console.log(this.config.search.searchParameter[j].searchBy, 'this.config.search.searchParameter[j].searchBy');
                    console.log(it[this.config.search.searchParameter[j].searchBy], 'it[this.config.search.searchParameter[j].searchBy]');
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
        console.log(newLots, 'newLots in middel');
        console.log(this.config.filter.filterParameter.length, 'this.config.filter.filterParameter.length');
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
        console.log(this.allSelectedFilters, 'this.allSelectedFilters ');
        //Filter the data based on checkboxes
        if (allSelectedCheckBoxesArray.length > 0) {
            // Filter the each array at a time, In config multiple filters.
            singleTypeFilterArray = this.filterSingle(newLots, allSelectedCheckBoxesArray);
            console.log(singleTypeFilterArray, 'singleTypeFilterArray');
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
            console.log(this.filterData, 'this.filterData in library ..first');
            //this.sortLots();
        }
        else {
            console.log(this.filterData, 'this.filterData in library');
            this.filteredData.emit(this.filterData);
        }
        // Emit the value to the parent component
        //this.addFilterToRoute()
    }
    filterSingle(data, selectedCheckBoxesArrays) {
        console.log(data, 'data in the filter single');
        console.log(selectedCheckBoxesArrays, 'selectedCheckBoxesArrays');
        for (let k = selectedCheckBoxesArrays.length - 1; k >= 0; k--) {
            var newData = [];
            if (selectedCheckBoxesArrays[k].length > 0) {
                console.log(selectedCheckBoxesArrays[k], 'selectedCheckBoxesArrays[k]');
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
        console.log(data, 'data');
        console.log(newData, 'newData');
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
        console.log(filtered, 'filtered');
        console.log(this.uniqueValuesInArray(filtered), 'this.uniqueValuesInArray(filtered)');
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
NgxFilterSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ngx-filter-search',
                // template: `
                //   <p>
                //     ngx-filter-search works!
                //   </p>
                // `,
                template: "<div class=\"row\" *ngIf=\"data && config\">\n  <div class=\"col-sm-12\">\n     <div class=\"row pt-1 pb-1\">\n       <div class=\"col-sm-6\">\n\n       </div>\n       <div class=\"col-sm-6\">\n         <h6 class=\"float-right cursor-pointer text-primary\" (click)=\"clearAllFilters()\">Clear All</h6>\n       </div>\n     </div>\n      <div *ngIf=\"config?.search?.isSearchShow\" class=\"pt-1 pb-1\">\n        <strong class=\"pt-2 pb-2 font-weight-bold text-capitalize\">Search</strong>\n          <div class=\"input-group pt-1\">\n            <div class=\"form-outline\">\n              <input type=\"text\" id=\"form1\" class=\"form-control\" [(ngModel)]=\"searchText\" placeholder=\"Search Keyword...\" (keyup)=\"applyFilter()\"/>\n            </div>\n          </div>\n      </div>\n      <hr>\n      <div *ngIf=\"config?.filter?.isShowFilter && tempFilter\">\n        <div *ngFor=\"let config of config.filter.filterParameter; let i = index;let last = last;\">\n            <div *ngIf=\"config?.isShowFilter && tempFilter[config.filterBy]\">\n              <div class=\"row pt-1 pb-1\" *ngIf=\"(((!config?.minimumShowLimit && tempFilter[config.filterBy].length > 0) || (tempFilter[config.filterBy].length > config?.minimumShowLimit && config?.isShowFilter && config?.filterType == 'checkBoxes' && tempFilter[config.filterBy].length > 0)) || (config?.filterType == 'range_slider' && tempFilter[config.filterBy].maxValue > 0 ))\">\n                <div class=\"col-sm-8 float-left\">\n                  <strong class=\"font-weight-bold\">{{ tempFilter[config.filterBy]?.filterTitle}}</strong>\n                </div>\n                <div class=\"col-sm-4\">\n                  <h6 class=\"float-right cursor-pointer text-primary clear\" (click)=\"clearSingleFilters(tempFilter[config.filterBy].filterBy,tempFilter[config.filterBy].filterType)\">Clear</h6>\n                </div>\n              </div>\n              <div *ngIf=\"(config?.isShowFilter && config?.filterType == 'checkBoxes' && (!config?.minimumShowLimit || (tempFilter[config.filterBy].length > config?.minimumShowLimit))) \">\n                <div class=\"\" *ngFor=\"let filter of tempFilter[config.filterBy] | slice : 0:(!tempFilter[config.filterBy].isShowMore ? config.filterCheckBoxLimit : tempFilter[config.filterBy].filterCheckBoxLimit); let i = index\">\n                  <input type=\"checkbox\" [id]=\"filter.fieldName\" [name]=\"filter.fieldName\" [value]=\"filter.fieldValue\" [(ngModel)]=\"filter.isChecked\" (change)=\"applyFilter()\">\n                  <span class=\"pl-2 font-small\">\n                    {{filter.fieldName}}\n                  </span>\n                </div>\n                <div *ngIf=\"tempFilter[config.filterBy].length > config?.filterCheckBoxLimit \">\n                  <h6 class=\"cursor-pointer text-primary pt-1\" *ngIf =\"!tempFilter[config.filterBy].isShowMore\" (click)=\"showMoreItems(tempFilter[config.filterBy].filterBy,true)\">\n                  {{ tempFilter[config.filterBy].length - config.filterCheckBoxLimit }} More\n                  </h6>\n                  <h6 class=\"cursor-pointer text-primary pt-1\" *ngIf =\"tempFilter[config.filterBy].isShowMore\" (click)=\"showMoreItems(tempFilter[config.filterBy].filterBy, false)\">\n                    Show Less\n                  </h6>\n                </div>\n            </div>\n            <div *ngIf=\"config?.isShowFilter && config?.filterType == 'range_slider' && tempFilter[config.filterBy].maxValue > 0\">\n              <!-- (change)=\"loanChange($event)\" \n               [ticks]=\"tempFilter[config.filterBy].ticks\" \n               [ticks]=\"tempFilter[config.filterBy].ticks\"\n              -->\n              <!-- {{tempFilter[config.filterBy].ticks | json}} -->\n              <!-- {{tempFilter[config.filterBy]  | json}} -->\n              <!-- {{tempFilter[config.filterBy].minValue}} -->\n              <!-- {{tempFilter[config.filterBy | json}} -->\n              <!-- [ticks]=\"tempFilter[config.filterBy].ticks\" \n                [tooltip]=\"tempFilter[config.filterBy].tooltip\"\n                 [ticks]=\"tempFilter[config.filterBy].ticks\"\n                 [tooltip]=\"tempFilter[config.filterBy].tooltip\"\n              --> \n              <!-- [ticks]=\"tempFilter[config.filterBy].ticks\" -->\n              <span class=\"min\">\n                <span>\n                  {{tempFilter[config.filterBy].rangeValue[0]}} - {{tempFilter[config.filterBy].rangeValue[1]}}\n                </span>\n              </span>\n              <div>\n                {{tempFilter[config.filterBy].rangeValue}} range value\n              </div>\n              <div>\n                {{tempFilter[config.filterBy].minValue }} min value\n              </div>\n              <div>\n                {{tempFilter[config.filterBy].maxValue}} max value\n              </div>\n              <div>\n                {{ tempFilter[config.filterBy].rangeStep}} rangeStep step\n              </div>\n              <div>\n                {{tempFilter[config?.filterBy]}}\n              </div>\n              <ejs-slider\n                id=\"range\"\n                [(value)]=\"tempFilter[config.filterBy].rangeValue\"\n                [min]=\"tempFilter[config.filterBy].minValue\"\n                [max]=\"tempFilter[config.filterBy].maxValue\"\n                [step]=\"tempFilter[config.filterBy].rangeStep\"\n                [type]=\"'Range'\"\n                (change)=\"sliderChange(tempFilter[config?.filterBy])\"\n                (changed)=\"applyFilter()\">\n                </ejs-slider>\n                 <!-- <div class=\"row\">\n                  <div class=\"col-sm-6\">\n                    <span class=\"float-left min\">\u20B9 {{tempFilter[config.filterBy].minValue}}</span>\n                  </div>\n                  <div class=\"col-sm-6\">\n                    <span class=\"float-right min\">\u20B9 {{tempFilter[config.filterBy].maxValue}}</span>\n                  </div>\n                 </div> -->\n                <!-- <div class=\"row\" *ngIf=\"tempFilter[config.filterBy].dropdown.length > 0\">\n                    <div class=\"col-sm-6 \">\n                        <div class=\"pt-1\">\n                          <select class=\"browser-default custom-select float-right range-select\" \n                            [(ngModel)]=\"tempFilter[config.filterBy].dropDownRangeValues[0]\"\n                            (change)=\"rangeDropDownOnChange(tempFilter[config.filterBy])\">\n                            <option\n                            *ngFor=\"let value of tempFilter[config.filterBy].dropdown\"\n                            [ngValue]=\"value\"\n                            >\n                            {{ value | currencyLocal:'INR'}}\n                            </option>\n                          </select>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-6 \">\n                        <div class=\"pt-1\">\n                          <select class=\"browser-default custom-select float-right range-select\"\n                          [(ngModel)]=\"tempFilter[config.filterBy].dropDownRangeValues[1]\"\n                          (change)=\"rangeDropDownOnChange(tempFilter[config.filterBy])\">\n                            <option\n                            *ngFor=\"let value of tempFilter[config.filterBy].dropdown\"\n                             [ngValue]=\"value\"\n                            >\n                            {{ value | currencyLocal:'INR'}}\n                            </option>\n                          </select>\n                        </div>\n                    </div>\n                </div> -->\n              </div>\n            <hr *ngIf=\"(!last && ((!config?.minimumShowLimit || (tempFilter[config.filterBy].length > config?.minimumShowLimit && config?.isShowFilter && config?.filterType == 'checkBoxes')) || (config?.filterType == 'range_slider')) && config?.showBottomBar)\">\n          </div>\n        </div>\n      </div>\n  </div>\n</div>\n"
            },] }
];
NgxFilterSearchComponent.ctorParameters = () => [];
NgxFilterSearchComponent.propDecorators = {
    data: [{ type: Input }],
    config: [{ type: Input }],
    filteredData: [{ type: Output }]
};

class NgxFilterSearchModule {
}
NgxFilterSearchModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxFilterSearchComponent],
                imports: [
                    BrowserModule,
                    CommonModule,
                    SliderModule,
                    FormsModule,
                ],
                exports: [NgxFilterSearchComponent]
            },] }
];

/*
 * Public API Surface of ngx-filter-search
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxFilterSearchComponent, NgxFilterSearchModule, NgxFilterSearchService };
//# sourceMappingURL=ngx-filter-search.js.map

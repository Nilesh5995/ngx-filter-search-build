import { OnInit, EventEmitter } from '@angular/core';
export declare class NgxFilterSearchComponent implements OnInit {
    data: any;
    config: any;
    filteredData: EventEmitter<any>;
    tempFilter: any;
    searchText: any;
    filterData: any;
    allSelectedFilters: any;
    filter: string;
    sort: string;
    isSorted: boolean;
    defaultFilter: string;
    defaultSort: string;
    defaultSearch: string;
    selectedLotStatusFilter: any;
    value: number;
    tooltip: Object;
    ticks: Object;
    step: number;
    constructor();
    ngOnInit(): void;
    setFilterConfig(data: any): void;
    setCheckBoxFilter(data: any): void;
    sortCheckBoxesFilter(): void;
    applyFilter(): void;
    filterSingle(data: any, selectedCheckBoxesArrays: any): any;
    filterSingleRangeFilter(data: any, selectedRangeFilterArrays: any): any;
    filterArrayBasedOnCheckBoxes(lotsArray: any, selectedCheckBoxesArrays: any): any;
    uniqueValuesInArray(data: any): any;
    filterArrayRangeFilter(lotsArray: any, rangeFilterArrays: any): any;
    clearSingleFilters(filterBy: string, filterType?: any): void;
    clearAllFilters(): void;
    unCheckedCheckBoxes(data: any): void;
    clearRangeSliderFilter(data: any): void;
    showMoreItems(filterBy: string, showStatus: boolean): void;
    rangeDropDownOnChange(data: any): void;
    sliderChange(data: any | undefined): void;
}

# NgxFilterSearch

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

## Code scaffolding

Run `ng generate component component-name --project ngx-filter-search` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-filter-search`.
> Note: Don't forget to add `--project ngx-filter-search` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-filter-search` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-filter-search`, go to the dist folder `cd dist/ngx-filter-search` and run `npm publish`.

## Running unit tests

Run `ng test ngx-filter-search` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# How to use the ngx-fileter-search-library
- ### Install the library - ``` npm install ngx-filter-search```
# Import the libarry in your project
 - ##### After installing the library you need to import the library in your project.
 1. Add the import statement in the module file
 ``` import { NgxFilterSearchModule } from 'ngx-filter-search'; ```
 2.  add the libary in the import section.
 ```imports: [
    NgxFilterSearchModule
  ],```
# Add the configuration file
  Create the configuration file , in configuration file create the json object. The example config file shown below you can add filter you want by adding the values in the config
 
 ``` export const filterConfig = {
    search: {
                isSearchShow: true,
                searchParameter: [
                   {
                       searchBy: 'Brand',
                   },
                   {
                       searchBy: 'Country'
                   },
                   {
                        searchBy: 'Style',
                   },
                   {
                        searchBy: 'Variety',
                   },
                ]

            },
    filter: {
        isShowFilter: true,
        // This Id is required, and used for finding the unique arrays.
        // Unique column (Ex . Auto increment Id)
        uniqueColumn: 'id',
        filterParameter:  [
            {   // FilterBy - It should be unique in the JSON and  node should contain in the data provided
                //(For checkboxes filter node should filterBy in data)
                filterBy: 'Brand',
                // isShowFilter - true for showing the filter.
                isShowFilter: true,
                // filterTitle - it is Name for the filter
                filterTitle: 'Brand',
                // fieldName - Name of the field we are showing after the checkbox.
                fieldName: 'Brand',
                //fieldValue - Field value is used for actual filtering the data
                fieldValue: 'Brand',
                // filterValuesSorting - Sorting the filter (All checkboxes is sorting)
                filterValuesSorting: true,
                //filterSortDirection - Direction of the sorting (ASC or DESC)
                filterSortDirection: 'asc',
                // filterType - Type of the filter (checkboxes or range_filter)
                filterType: 'checkBoxes',
                //filterCheckBoxLimit- Shows the minimum checkboxes at once....
                filterCheckBoxLimit: 10,
                //default the comparison is done with respect to the string datatype for, if needed we can pass the datatype as a Number
                //dataType: Number

            },
            {
                filterBy: 'Country',
                isShowFilter: true,
                filterTitle: 'Country',
                fieldName: 'Country',
                fieldValue: 'Country',
                filterValuesSorting: true,
                filterSortDirection: 'asc',
                filterType: 'checkBoxes',
                // dataType: Number,
                // Shows the minimum checkboxes at once....
                filterCheckBoxLimit: 10,
            },
            {
                filterBy: 'Stars',
                isShowFilter: true,
                filterTitle: 'Medium',
                fieldName: 'Stars',
                fieldValue: 'Stars',
                filterValuesSorting: true,
                filterSortDirection: 'asc',
                filterType: 'checkBoxes',
                // Shows the minimum checkboxes at once....
                filterCheckBoxLimit: 10,
            },
            {
                filterBy: 'Style',
                isShowFilter: true,
                filterTitle: 'Style',
                fieldName: 'Style',
                fieldValue: 'Style',
                filterValuesSorting: true,
                filterSortDirection: 'asc',
                filterType: 'checkBoxes',
                // dataType: Number,
                // Shows the minimum checkboxes at once....
                filterCheckBoxLimit: 10,
            },
            {
                filterBy: 'Variety',
                isShowFilter: true,
                filterTitle: 'Variety',
                fieldName: 'Variety',
                fieldValue: 'Variety',
                filterValuesSorting: true,
                filterSortDirection: 'asc',
                filterType: 'checkBoxes',
                filterCheckBoxLimit: 10,
                showBottomBar: true
            },
        ]
    },
}
```

# Add the code in the template file , to render the filter
```  <ngx-filter-search [config]="config" [data]="newRestaurants" (filteredData)="filterOutput($event)"></ngx-filter-search> ```

# Add the function in the .ts file to get the filter data
```   filterOutput($event) {
    if ($event) {
      this.filteredData= $event;
    }
  } ```
  
  Assign the $event to the any variable we you want to shows in the template.


# NgxFilterSearch

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2.

## Code scaffolding

Run `ng generate component component-name --project ngx-filter-search` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-filter-search`.
> Note: Don't forget to add `--project ngx-filter-search` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-filter-search` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-filter-search`, go to the dist folder `cd dist/ngx-filter-search` and run `npm publish`.

## Running unit tests

Run `ng test ngx-filter-search` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

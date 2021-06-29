import { NgModule } from '@angular/core';
import { NgxFilterSearchComponent } from './ngx-filter-search.component';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';
import { FormsModule } from '@angular/forms';
export class NgxFilterSearchModule {
}
NgxFilterSearchModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxFilterSearchComponent],
                imports: [
                    SliderModule,
                    FormsModule
                ],
                exports: [NgxFilterSearchComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZpbHRlci1zZWFyY2gubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZpbHRlci1zZWFyY2gvc3JjL2xpYi9uZ3gtZmlsdGVyLXNlYXJjaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBWTdDLE1BQU0sT0FBTyxxQkFBcUI7OztZQVJqQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsd0JBQXdCLENBQUM7Z0JBQ3hDLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7aUJBQ1o7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsd0JBQXdCLENBQUM7YUFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4RmlsdGVyU2VhcmNoQ29tcG9uZW50IH0gZnJvbSAnLi9uZ3gtZmlsdGVyLXNlYXJjaC5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVyTW9kdWxlIH0gZnJvbSAnQHN5bmNmdXNpb24vZWoyLWFuZ3VsYXItaW5wdXRzJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW05neEZpbHRlclNlYXJjaENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBTbGlkZXJNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW05neEZpbHRlclNlYXJjaENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4RmlsdGVyU2VhcmNoTW9kdWxlIHsgfVxuIl19
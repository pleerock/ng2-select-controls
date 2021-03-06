import {bootstrap} from "@angular/platform-browser-dynamic";
import {Component} from "@angular/core";
import {SELECT_DIRECTIVES} from "../../src/index";
import {Car} from "./Car";
import {ItemTemplate} from "../../src/ItemTemplate";
import {provideForms, disableDeprecatedForms} from "@angular/forms";

@Component({
    selector: "app",
    template: `
<div class="container">

    <h4>Simple select items: </h4>
    <select-items [(ngModel)]="selectedCars"
                  [items]="cars"
                  labelBy="name">
    </select-items>
    
    <h4>model: </h4>
    <pre>{{ selectedCars | json }}</pre>

    <h4>Select list with search</h4>
    <select-items [(ngModel)]="selectedCars1"
                  [items]="cars"
                  labelBy="name"
                  searchBy="name"
                  searchLabel="search...">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCars1 | json }}</pre>

    <h4>Select list with ordering</h4>
    <select-items [(ngModel)]="selectedCars2"
                  [items]="cars"
                  labelBy="name"
                  orderBy="name">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCars2 | json }}</pre>

    <h4>Select list with descendant ordering</h4>
    <select-items [(ngModel)]="selectedCars3"
                  [items]="cars"
                  labelBy="name"
                  orderBy="name"
                  orderDirection="desc">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCars3 | json }}</pre>
    
    
    <h4>Select items with select all option</h4>
    <select-items [(ngModel)]="selectedCars4"
                  [items]="cars"
                  labelBy="name"
                  [selectAll]="true"
                  selectAllLabel="select all"> <!-- label is optional -->
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCars4 | json }}</pre>
    
    <h4>Select items with limited number of shown items:</h4>
    <select-items [(ngModel)]="selectedCars5"
                  [items]="cars"
                  [limit]="4"
                  labelBy="name">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCars5 | json }}</pre>
    
    <h4>Select items with limited number of shown items, with more button:</h4>
    <select-items [(ngModel)]="selectedCars6"
                  [items]="cars"
                  [limit]="4"
                  labelBy="name"
                  moreLabel="more">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCars6 | json }}</pre>
    
    <h4>Select items with limited number of shown items, with more & hide button:</h4>
    <select-items [(ngModel)]="selectedCars7"
                  [items]="cars"
                  [limit]="4"
                  labelBy="name"
                  moreLabel="more"
                  hideLabel="hide">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCars7 | json }}</pre>
    
    <h4>Select items where items can be removed:</h4>
    <select-items [(ngModel)]="selectedCars8"
                  [items]="cars"
                  labelBy="name"
                  [removeButton]="true">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCars8 | json }}</pre>
    
    <h4>Select items with no controls:</h4>
    <select-items [(ngModel)]="selectedCars9"
                  [items]="cars"
                  labelBy="name"
                  [hideControls]="true">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCars9 | json }}</pre>
    
    <h4>Select items where where selected items are not showing after they are selected:</h4>
    <select-items [(ngModel)]="selectedCars10"
                  [items]="cars"
                  labelBy="name"
                  [hideSelected]="true">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCars10 | json }}</pre>
    
    <h4>Select items with maximal number of allowed selected items:</h4>
    <select-items [(ngModel)]="selectedCars11"
                  [items]="cars"
                  labelBy="name"
                  [maxModelSize]="3">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCars11 | json }}</pre>
    
    <h4>Select items with minimal number of allowed selected items:</h4>
    <select-items [(ngModel)]="selectedCars12"
                  [items]="cars"
                  labelBy="name"
                  [minModelSize]="3">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCars12 | json }}</pre>
    
    <h4>Select items with track by, to track by another model:</h4>
    <select-items [(ngModel)]="secondSelectedCars"
                  [items]="cars"
                  labelBy="name"
                  trackBy="name">
    </select-items>
    <h4>model: </h4>
    <pre>{{ secondSelectedCars | json }}</pre>
    
    <h4>Select items with value by, to get more specific values:</h4>
    <select-items [(ngModel)]="selectedCarNames"
                  [items]="cars"
                  labelBy="name"
                  valueBy="name">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCarNames | json }}</pre>
    
    <h4>Select items with grouping:</h4>
    <select-items [(ngModel)]="selectedCars13"
                  [items]="cars"
                  groupBy="year"
                  labelBy="name"
                  valueBy="name">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCars13 | json }}</pre>
    
    <h4>Select items with grouping and select-alls in groups:</h4>
    <select-items [(ngModel)]="selectedCars14"
                  [items]="cars"
                  [groupSelectAll]="true"
                  groupBy="year"
                  labelBy="name"
                  valueBy="name">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCars14 | json }}</pre>
    
    <h4>Select items with grouping and select-alls in groups, but without a checkbox:</h4>
    <select-items [(ngModel)]="selectedCars15"
                  [items]="cars"
                  [groupSelectAll]="true"
                  [hideGroupSelectAllCheckbox]="true"
                  groupBy="year"
                  labelBy="name"
                  valueBy="name">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCars15 | json }}</pre>
    
    <h4>Select items with custom item template:</h4>
    <select-items #selectItems
                  [(ngModel)]="selectedCars17"
                  [items]="cars"
                  labelBy="name">
        <span *ngFor="let item of selectItems.displayedItems">
           <span *itemTemplate="item">
                #{{ item.id }} <b>{{ item.name }}</b> <i>({{ item.year }})</i>
            </span>          
        </span>
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCars17 | json }}</pre>
    
    <h4>Select items with custom item template and hidden controls:</h4>
    <select-items #secondSelectItems
                  [(ngModel)]="selectedCars17"
                  [items]="cars"
                  [hideControls]="true"
                  labelBy="name">
        <span *ngFor="let item of secondSelectItems.displayedItems">
           <span *itemTemplate="item">
                #{{ item.id }} <b>{{ item.name }}</b> <i>({{ item.year }})</i>
            </span>          
        </span>
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCars17 | json }}</pre>
    
    <h4>All-in-one select items:</h4>
    <select-items [(ngModel)]="selectedCars18"
                  [items]="cars"
                  [removeButton]="true"
                  [hideControls]="false"
                  [hideSelected]="false"
                  [limit]="4"
                  [maxModelSize]="0"
                  [minModelSize]="0"
                  labelBy="name"
                  searchBy="name"
                  orderBy="name"
                  orderDirection="desc"
                  moreLabel="more"
                  hideLabel="hide"
                  [selectAll]="true"
                  selectAllLabel="select all">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCars18 | json }}</pre>
    
    <!-- SAME WITH RADIO -->
    
    <hr>
    Single item:
    <hr>
    
    <h4>Simple select items: </h4>
    <select-items [(ngModel)]="selectedCar"
                  [items]="cars"
                  labelBy="name">
    </select-items>
    
    <h4>model: </h4>
    <pre>{{ selectedCar | json }}</pre>

    <h4>Select list with search</h4>
    <select-items [(ngModel)]="selectedCar"
                  [items]="cars"
                  labelBy="name"
                  searchBy="name"
                  searchLabel="search...">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCar | json }}</pre>

    <h4>Select list with ordering</h4>
    <select-items [(ngModel)]="selectedCar"
                  [items]="cars"
                  labelBy="name"
                  orderBy="name">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCar | json }}</pre>

    <h4>Select list with descendant ordering</h4>
    <select-items [(ngModel)]="selectedCar"
                  [items]="cars"
                  labelBy="name"
                  orderBy="name"
                  orderDirection="desc">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCar | json }}</pre>
    
    
    <h4>Select items with nothing is selected</h4>
    <select-items [(ngModel)]="selectedCar"
                  [items]="cars"
                  labelBy="name"
                  [noSelection]="true"
                  noSelectionLabel="nothing is selected">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCar | json }}</pre>
    
    <h4>Select items with limited number of shown items:</h4>
    <select-items [(ngModel)]="selectedCar"
                  [items]="cars"
                  [limit]="4"
                  labelBy="name">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCar | json }}</pre>
    
    <h4>Select items with limited number of shown items, with more button:</h4>
    <select-items [(ngModel)]="selectedCar"
                  [items]="cars"
                  [limit]="4"
                  labelBy="name"
                  moreLabel="more">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCar | json }}</pre>
    
    <h4>Select items with limited number of shown items, with more & hide button:</h4>
    <select-items [(ngModel)]="selectedCar"
                  [items]="cars"
                  [limit]="4"
                  labelBy="name"
                  moreLabel="more"
                  hideLabel="hide">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCar | json }}</pre>
    
    <h4>Select items where items can be removed:</h4>
    <select-items [(ngModel)]="selectedCar"
                  [items]="cars"
                  labelBy="name"
                  [removeButton]="true">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCar | json }}</pre>
    
    <h4>Select items where with no controls:</h4>
    <select-items [(ngModel)]="selectedCar"
                  [items]="cars"
                  labelBy="name"
                  [hideControls]="true">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCar | json }}</pre>
    
    <h4>Select items where where selected items are not showing after they are selected:</h4>
    <select-items [(ngModel)]="selectedCar"
                  [items]="cars"
                  labelBy="name"
                  [hideSelected]="true">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCar | json }}</pre>
    
    <h4>Select items with maximal number of allowed selected items:</h4>
    <select-items [(ngModel)]="selectedCar"
                  [items]="cars"
                  labelBy="name"
                  [maxModelSize]="3">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCar | json }}</pre>
    
    <h4>Select items with minimal number of allowed selected items:</h4>
    <select-items [(ngModel)]="selectedCar"
                  [items]="cars"
                  labelBy="name"
                  [minModelSize]="3">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCar | json }}</pre>
    
    <h4>Select items with track by, to track by another model:</h4>
    <select-items [(ngModel)]="secondSelectedCar"
                  [items]="cars"
                  labelBy="name"
                  trackBy="name">
    </select-items>
    <h4>model: </h4>
    <pre>{{ secondSelectedCar | json }}</pre>
    
    <h4>Select items with value by, to get more specific values:</h4>
    <select-items [(ngModel)]="selectedCarName"
                  [items]="cars"
                  labelBy="name"
                  valueBy="name">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCarName | json }}</pre>
    
    <h4>Select items with explicitly set multiple option:</h4>
    <select-items [(ngModel)]="allNewSelectedCars"
                  [items]="cars"
                  [multiple]="true"
                  labelBy="name">
    </select-items>
    <h4>model: </h4>
    <pre>{{ allNewSelectedCars | json }}</pre>
    
    <h4>Select items single with grouping:</h4>
    <select-items [(ngModel)]="selectedCar"
                  [items]="cars"
                  groupBy="year"
                  labelBy="name"
                  valueBy="name">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCar | json }}</pre>
    
    <h4>All-in-one select items:</h4>
    <select-items [(ngModel)]="selectedCar"
                  [items]="cars"
                  [removeButton]="true"
                  [hideControls]="false"
                  [hideSelected]="false"
                  [limit]="4"
                  [maxModelSize]="0"
                  [minModelSize]="0"
                  labelBy="name"
                  searchBy="name"
                  searchLabel="search..."
                  orderBy="name"
                  orderDirection="desc"
                  moreLabel="more"
                  hideLabel="hide"
                  [selectAll]="true"
                  selectAllLabel="select all">
    </select-items>
    <h4>model: </h4>
    <pre>{{ selectedCar | json }}</pre>
    
    
</div>
`,
    directives: [SELECT_DIRECTIVES]
})
export class Sample1App {

    cars: Car[] = [
        new Car(1, "BMW", 2000),
        new Car(2, "Mercedes", 1999),
        new Car(3, "Opel", 2008),
        new Car(4, "Porshe", 1940),
        new Car(5, "Ferrari", 2000),
        new Car(6, "Toyota", 2008),
        new Car(7, "Nissan", 1940)
    ];

    selectedCars: Car[] = [];
    selectedCars1: Car[] = [];
    selectedCars2: Car[] = [];
    selectedCars3: Car[] = [];
    selectedCars4: Car[] = [];
    selectedCars5: Car[] = [];
    selectedCars6: Car[] = [];
    selectedCars7: Car[] = [];
    selectedCars8: Car[] = [];
    selectedCars9: Car[] = [];
    selectedCars10: Car[] = [];
    selectedCars11: Car[] = [];
    selectedCars12: Car[] = [];
    selectedCars13: Car[] = [];
    selectedCars14: Car[] = [];
    selectedCars15: Car[] = [];
    selectedCars16: Car[] = [];
    selectedCars17: Car[] = [];
    selectedCars18: Car[] = [];
    selectedCars19: Car[] = [];
    secondSelectedCars: Car[] = [
        new Car(2, "Mercedes", 1999)
    ];
    selectedCarNames: string[] = [];

    selectedCar: Car;
    secondSelectedCar: Car = new Car(2, "Mercedes", 1999);
    selectedCarName: string;

    constructor() {
    }

}

bootstrap(Sample1App, [
    disableDeprecatedForms(),
    provideForms(),
]);
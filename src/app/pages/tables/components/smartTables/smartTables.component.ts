import { Component } from '@angular/core';

import { SmartTablesService } from './smartTables.service';
import { LocalDataSource } from 'ng2-smart-table';

import 'style-loader!./smartTables.scss';

@Component({
  selector: 'smart-tables',
  templateUrl: './smartTables.html',
})
export class SmartTables {

  query: string = '';

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      External_id: {
        title: 'External_id',
        type: 'number'
      },
      nd: {
        title: 'Date',
        type: 'string'
      },
      name: {
        title: 'Beer',
        type: 'string'
      },
      beer_type_name: {
        title: 'Beer Type',
        type: 'string'
      },
      brand_name: {
        title: 'Brand',
        type: 'string'
      },
      'sum(Volume)': {
        title: 'Volume',
        type: 'number'
      },
      'sum(price)': {
        title: 'Price',
        type: 'number'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: SmartTablesService) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}

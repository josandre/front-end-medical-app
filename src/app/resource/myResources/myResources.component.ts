import {Component, OnInit} from '@angular/core';
import {ResourceService} from "../services/Resource.Service";
import {Resource} from "../models/Resource";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-inbox',
  templateUrl: './myResources.component.html',
  styleUrls: ['./myResources.component.scss'],
})
export class MyResourcesComponent implements OnInit{

  message: string = 'MENUITEMS.RESOURCES.MESSAGE'

  constructor(private readonly resourceService: ResourceService,private snackBar: MatSnackBar) {
    this.selectedResourceIds=[];
    }

  resourcesList: Resource[];
  originalResourcesList: Resource[];
  selectedResourceIds: number[];

  flag: boolean = true;

  ngOnInit(){
    this.flag = true;
    this.resourceService.getResourceList().subscribe(
      resources =>{
        this.resourcesList = resources;
        this.originalResourcesList=[...resources]
        // this.flag = false;
      }

    )
  }

  sessionResource(id: number){
    sessionStorage.setItem('resourseId', id.toString());
  }

  applyFilter(filterValue: any) {
    let filterText: string = filterValue.value;
    filterText = filterText.trim();
    filterText = filterText.toLowerCase();

    if (filterText) {
      this.resourcesList = this.originalResourcesList.filter((resource) =>
        resource.title.toLowerCase().includes(filterText)
      );
    } else {
      this.resourcesList = [...this.originalResourcesList];
    }
  }
  readResourceCheck(id: number) {

    const index = this.selectedResourceIds.indexOf(id);

    if (index === -1) {

      this.selectedResourceIds.push(id);
    } else {

      this.selectedResourceIds.splice(index, 1);

    }
  }
  deleteResource(){
    this.resourceService.deleteResourse(this.selectedResourceIds).subscribe((res) => {
      switch (res) {
        case 200:{
          this.openSnackBar("Resource deleted", "Close");

          this.resourcesList = this.resourcesList.filter(resource => !this.selectedResourceIds.includes(resource.id));
          this.originalResourcesList=[...this.resourcesList]
          this.selectedResourceIds = [];

          break;
        }
      }
    }, error => {
        this.openSnackBar("Something went wrong", "Close" );

        })
  }
  openSnackBar(message: string, action: string){
    this.snackBar.open(message, action, {verticalPosition: 'top', horizontalPosition: 'end'})
  }

}

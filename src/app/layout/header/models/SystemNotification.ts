import {EventCategory} from "../../../global/models/eventcategory";

export class SystemNotification {
  title: string;
  startDate: Date;
  details: string;
  category: EventCategory;
  status: boolean

  constructor(partial?: Partial<SystemNotification>) {
    if(partial){
      Object.assign(this, partial)
    }
  }

}
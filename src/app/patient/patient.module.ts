import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { PatientRoutingModule } from './patient-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { MedicalRecordsComponent } from './medical-records/medical-records.component';
import { SettingsComponent } from './settings/settings.component';
import { ComponentsModule } from '@shared/components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { DiaryComponent } from './diary/diary.component';
import {CKEditorModule} from "@ckeditor/ckeditor5-angular";
@NgModule({
  declarations: [
    DashboardComponent,
    PrescriptionsComponent,
    MedicalRecordsComponent,
    SettingsComponent,
    PatientProfileComponent,
    DiaryComponent
  ],
    imports: [
        CommonModule,
        NgChartsModule,
        NgxEchartsModule.forRoot({
            echarts: () => import('echarts'),
        }),
        PatientRoutingModule,
        NgApexchartsModule,
        NgScrollbarModule,
        ComponentsModule,
        SharedModule,
        TranslateModule,
        CKEditorModule,
    ],
})
export class PatientModule {}

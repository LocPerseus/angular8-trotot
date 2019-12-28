import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '../Blocks/layout.module';
import { CategoryComponent } from './Pages/category/category.component';
import { MemberComponent } from './Pages/member/member.component';
import { NewsComponent } from './Pages/news/news.component';
import { HomeDashboardComponent } from './Pages/home-dashboard/home-dashboard.component';
import { ModalCategoryComponent } from './Pages/modal-category/modal-category.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
// ngbBoostrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailMemberComponent } from './Pages/member/detail-member/detail-member.component';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [DashboardComponent, CategoryComponent, MemberComponent, NewsComponent, HomeDashboardComponent, ModalCategoryComponent, DetailMemberComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DashboardRoutingModule,
    LayoutModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class DashboardModule { }

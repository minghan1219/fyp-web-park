import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardProductComponent } from './dashboard-product/dashboard-product.component';
import { ProductOverviewComponent } from './dashboard-product/overview/overview.component';
import { ProductStatsComponent } from './dashboard-product/stats/stats.component';
import { ProductFeaturesComponent } from './dashboard-product/features/features.component';
import { FeaturesFormComponent } from './dashboard-product/features/form/form.component';
// import { UsersComponent } from './users/users.component';
// import { UsersFormComponent } from './users/form/form.component';
// import { LogsComponent } from './logs/logs.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import {ManageUserComponent} from "./manage-user/manage-user.component";
// import { FormComponent } from './form/form.component';
// import { TemplatesComponent } from './templates/templates.component';
// import { DashboardTemplateComponent } from './templates/dashboard/dashboard.component';
// import { EmailTemplateComponent } from './templates/email/email.component';
// import { EditorTemplateComponent } from './templates/editor/editor.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'user', component: ManageUserComponent},
  {path: '', component: DashboardProductComponent, children: [
    {path: '', component: ProductOverviewComponent},
    {path: 'stats', component: ProductStatsComponent},
    {path: 'features', children: [
      {path: '', component: ProductFeaturesComponent},
      {path: 'add', component: FeaturesFormComponent},
      {path: ':id/delete', component: FeaturesFormComponent},
      {path: ':id/edit', component: FeaturesFormComponent},
    ]},
    {path: 'item/:id', component: DetailComponent},
  ]},
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });

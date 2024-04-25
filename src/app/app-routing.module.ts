import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  {path : "", redirectTo: "/home", pathMatch:'full'},
  {path: "home", component:HomePageComponent},
  {path: "projects", loadChildren: () => import('src/app/components/project-details/project-details.module').then(m => m.ProjectDetailsModule)},
  {path: "**", component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

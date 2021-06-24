import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { NavbarComponent } from "./navigation/navbar.component";
import { ClientRoutes } from "./pages/client/client.module";
import { EnterpriseRoutes } from "./pages/enterprise/enterprise.module";
import { DetailRoutes } from "./pages/details/detail.module";
const routes: Routes = [
  {
    path: "",
    component: NavbarComponent,
    children: [...EnterpriseRoutes],
  },
  {
    path: "",
    component: NavbarComponent,
    children: [...ClientRoutes],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

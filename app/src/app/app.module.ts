import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LayoutModule } from "@angular/cdk/layout";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PagesModule } from "./pages/pages.module";
import { NavbarModule } from "./navigation/navebar.module";
import { EnterpriseModule } from "./pages/enterprise/enterprise.module";
import { DialogOverviewComponent } from "./components/dialog-overview/dialog-overview.component";
import { DialogOverviewModule } from "./components/dialog-overview/dialog-overview.module";
import { DialogEnterpriseModule } from "./components/dialog-overview/dialog-enterprise.module";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [DialogOverviewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FlexLayoutModule,
    HttpClientModule,
    NavbarModule,
    PagesModule,
    EnterpriseModule,
    RouterModule,
    DialogOverviewModule,
    DialogEnterpriseModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

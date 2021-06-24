import { NgModule } from "@angular/core";

import { ClientModule } from "./client/client.module";
import { EnterpriseModule } from "./enterprise/enterprise.module";
import { DetailModule } from "./details/detail.module";

@NgModule({
  imports: [ClientModule, EnterpriseModule, DetailModule],
})
export class PagesModule {}

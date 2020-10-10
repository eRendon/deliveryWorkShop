import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { AMDModule } from '../amd.module';
import { Tab1PageRoutingModule } from './tab1-routing.module';
import { MatCardModule } from '@angular/material/card';
import { ModalAddUserComponent } from '../modal-add-user/modal-add-user.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AMDModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    MatCardModule
  ],
  declarations: [Tab1Page, ModalAddUserComponent]
})
export class Tab1PageModule {}

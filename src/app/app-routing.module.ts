import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissingNumberComponent } from './missing-number/missing-number.component';
import { ComponentXComponent } from './component-x/component-x.component';
import { ComponentYComponent } from './component-y/component-y.component';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { CommunicationComponent } from './communication/communication.component';
import { BottomLeftComponent } from './bottom-left/bottom-left.component';
import { BottomRightComponent } from './bottom-right/bottom-right.component';
import { TopRightComponent } from './top-right/top-right.component';
import { TopLeftComponent } from './top-left/top-left.component';
import { CenterComponent } from './center/center.component';

const routes: Routes = [
  {
  path:'missing-number',
  component:MissingNumberComponent
  },
  {
    path:'component',
   component:ComponentComponent 
 },
 {
    path:'phonenumber',
   component:PhoneNumberComponent  
 },
 {
    path:'communication',
   component:CommunicationComponent 
 },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

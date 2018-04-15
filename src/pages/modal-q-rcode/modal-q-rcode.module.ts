import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalQRcodePage } from './modal-q-rcode';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    ModalQRcodePage,
    
  ],
  imports: [
    IonicPageModule.forChild(ModalQRcodePage),
    NgxQRCodeModule
  ],
})
export class ModalQRcodePageModule {}

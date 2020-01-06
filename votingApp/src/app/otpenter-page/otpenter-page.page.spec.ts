import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OTPEnterPagePage } from './otpenter-page.page';

describe('OTPEnterPagePage', () => {
  let component: OTPEnterPagePage;
  let fixture: ComponentFixture<OTPEnterPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OTPEnterPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OTPEnterPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

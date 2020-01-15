import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoteesPage } from './votees.page';

describe('VoteesPage', () => {
  let component: VoteesPage;
  let fixture: ComponentFixture<VoteesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoteesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

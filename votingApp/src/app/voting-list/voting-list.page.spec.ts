import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VotingListPage } from './voting-list.page';

describe('VotingListPage', () => {
  let component: VotingListPage;
  let fixture: ComponentFixture<VotingListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotingListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VotingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

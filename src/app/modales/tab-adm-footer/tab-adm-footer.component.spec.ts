import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAdmFooterComponent } from './tab-adm-footer.component';

describe('TabAdmFooterComponent', () => {
  let component: TabAdmFooterComponent;
  let fixture: ComponentFixture<TabAdmFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAdmFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabAdmFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

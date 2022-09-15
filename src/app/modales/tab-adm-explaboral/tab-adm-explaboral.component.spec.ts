import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAdmExplaboralComponent } from './tab-adm-explaboral.component';

describe('TabAdmExplaboralComponent', () => {
  let component: TabAdmExplaboralComponent;
  let fixture: ComponentFixture<TabAdmExplaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAdmExplaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabAdmExplaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

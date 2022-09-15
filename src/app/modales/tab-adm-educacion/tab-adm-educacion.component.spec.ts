import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAdmEducacionComponent } from './tab-adm-educacion.component';

describe('TabAdmEducacionComponent', () => {
  let component: TabAdmEducacionComponent;
  let fixture: ComponentFixture<TabAdmEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAdmEducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabAdmEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

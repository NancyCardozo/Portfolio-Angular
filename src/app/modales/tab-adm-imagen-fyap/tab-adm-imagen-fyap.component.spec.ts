import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAdmImagenFyapComponent } from './tab-adm-imagen-fyap.component';

describe('TabAdmImagenFyapComponent', () => {
  let component: TabAdmImagenFyapComponent;
  let fixture: ComponentFixture<TabAdmImagenFyapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAdmImagenFyapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabAdmImagenFyapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

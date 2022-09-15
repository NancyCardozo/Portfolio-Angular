import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAdmContactosComponent } from './tab-adm-contactos.component';

describe('TabAdmContactosComponent', () => {
  let component: TabAdmContactosComponent;
  let fixture: ComponentFixture<TabAdmContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAdmContactosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabAdmContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

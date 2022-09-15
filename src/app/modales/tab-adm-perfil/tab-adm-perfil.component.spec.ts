import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAdmPerfilComponent } from './tab-adm-perfil.component';

describe('TabAdmPerfilComponent', () => {
  let component: TabAdmPerfilComponent;
  let fixture: ComponentFixture<TabAdmPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAdmPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabAdmPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

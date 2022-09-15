import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAdmProyectosComponent } from './tab-adm-proyectos.component';

describe('TabAdmProyectosComponent', () => {
  let component: TabAdmProyectosComponent;
  let fixture: ComponentFixture<TabAdmProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAdmProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabAdmProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAdmHabilidadesComponent } from './tab-adm-habilidades.component';

describe('TabAdmHabilidadesComponent', () => {
  let component: TabAdmHabilidadesComponent;
  let fixture: ComponentFixture<TabAdmHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabAdmHabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabAdmHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

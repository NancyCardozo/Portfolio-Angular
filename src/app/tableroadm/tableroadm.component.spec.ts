import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroAdmComponent } from './tableroadm.component';

describe('TableroAdmComponent', () => {
  let component: TableroAdmComponent;
  let fixture: ComponentFixture<TableroAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableroAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableroAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

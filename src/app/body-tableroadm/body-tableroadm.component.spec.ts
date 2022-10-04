import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTableroadmComponent } from './body-tableroadm.component';

describe('BodyTableroadmComponent', () => {
  let component: BodyTableroadmComponent;
  let fixture: ComponentFixture<BodyTableroadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyTableroadmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyTableroadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

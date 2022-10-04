import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbartableroadmComponent } from './navbartableroadm.component';

describe('NavbartableroadmComponent', () => {
  let component: NavbartableroadmComponent;
  let fixture: ComponentFixture<NavbartableroadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbartableroadmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbartableroadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillHighlightsComponent } from './skill-highlights.component';

describe('SkillHighlightsComponent', () => {
  let component: SkillHighlightsComponent;
  let fixture: ComponentFixture<SkillHighlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillHighlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillHighlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduzioneComponenti } from './introduzione-componenti';

describe('IntroduzioneComponenti', () => {
  let component: IntroduzioneComponenti;
  let fixture: ComponentFixture<IntroduzioneComponenti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroduzioneComponenti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroduzioneComponenti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

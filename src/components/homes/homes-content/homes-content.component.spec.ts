import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesContentComponent } from './homes-content.component';

describe('HomesContentComponent', () => {
  let component: HomesContentComponent;
  let fixture: ComponentFixture<HomesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomesContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

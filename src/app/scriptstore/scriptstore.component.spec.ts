import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptstoreComponent } from './scriptstore.component';

describe('ScriptstoreComponent', () => {
  let component: ScriptstoreComponent;
  let fixture: ComponentFixture<ScriptstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptstoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScriptstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

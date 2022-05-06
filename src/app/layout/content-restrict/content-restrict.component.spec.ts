import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRestrictComponent } from './content-restrict.component';

describe('ContentRestrictComponent', () => {
  let component: ContentRestrictComponent;
  let fixture: ComponentFixture<ContentRestrictComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentRestrictComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentRestrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

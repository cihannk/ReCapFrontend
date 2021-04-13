import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcontainerComponent } from './listcontainer.component';

describe('ListcontainerComponent', () => {
  let component: ListcontainerComponent;
  let fixture: ComponentFixture<ListcontainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListcontainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

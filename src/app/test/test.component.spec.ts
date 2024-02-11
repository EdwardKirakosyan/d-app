import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it(`should have as title 'angular-unit-test'`, (() => {
      const fixture = TestBed.createComponent(TestComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('angular-unit-test');
  }));
});

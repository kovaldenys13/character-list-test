import { CommonModule } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { SelectPlaceholderDirective } from './select-placeholder.directive';

@Component({
  template: `
      <select class="form-field__control">
          <option value="0: null" selected>select a species</option>
      </select>
  `,
})
class MockComponent {
}

describe('SelectPlaceholderDirective', () => {
  let component: MockComponent;
  let fixture: ComponentFixture<MockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        MockComponent,
        SelectPlaceholderDirective,
      ],
      providers: [ Renderer2 ],
    });
    fixture = TestBed.createComponent(MockComponent);
    component = fixture.componentInstance;
  }));

  it('Component should have \'form-field__control--placeholder\' class', () => {
    fixture.detectChanges();
    let compWithPlaceholder = fixture.debugElement.query(By.css('.form-field__control--placeholder'));
    console.log(compWithPlaceholder);
    expect(compWithPlaceholder).toBeTruthy();
  });
});

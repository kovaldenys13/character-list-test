import { Component, Renderer2 } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TooltipDirective } from './tooltip.directive';

@Component({
  template: '<span appTooltip="test string">content</span>',
})
class MockComponent {
}

describe('TooltipDirective', () => {
  let component: MockComponent;
  let fixture: ComponentFixture<MockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockComponent,
        TooltipDirective,
      ],
      providers: [ Renderer2 ],
    });
    fixture = TestBed.createComponent(MockComponent);
    component = fixture.componentInstance;
  }));


  it('Tooltip label is created', () => {
    fixture.detectChanges();
    let label = fixture.debugElement.query(By.css('.tooltip__label'));
    expect(label).toBeTruthy();
  });
});

import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })
  it('should get number 5 after adding 1 to 4', () => {
    const button4 = container.getByTestId('number4');
    const button1 = container.getByTestId('number1');
    const add = container.getByTestId('operator-add');
    const runningTotal = container.getByTestId('running-total');
    const operatorEquals = container.getByTestId('operator-equals');

    fireEvent.click(button4);
    fireEvent.click(add);
    fireEvent.click(button1);
    fireEvent.click(operatorEquals);
    
    expect(runningTotal.textContent).toEqual('5');
  })
  it('subtract 4 from 7 and get 3', () => {
    const button4 = container.getByTestId('number4');
    const button7 = container.getByTestId('number7');
    const subtract = container.getByTestId('operator-subtract');
    const runningTotal = container.getByTestId('running-total');
    const operatorEquals = container.getByTestId('operator-equals');

    fireEvent.click(button7);
    fireEvent.click(subtract);
    fireEvent.click(button4);
    fireEvent.click(operatorEquals);
    expect(runningTotal.textContent).toEqual('3');


  })

  it('multiply 3 by 5 and should get 15', () => {
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const multiply = container.getByTestId('operator-multiply');
    const runningTotal = container.getByTestId('running-total');
    const operatorEquals = container.getByTestId('operator-equals');
  
    fireEvent.click(button3);
    fireEvent.click(multiply);
    fireEvent.click(button5);
    fireEvent.click(operatorEquals);
  
    expect(runningTotal.textContent).toEqual('15');
  
  
  })
  it('divide 21 by 7 and get 3', ()=>{
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const divide = container.getByTestId('operator-divide');
    const runningTotal = container.getByTestId('running-total');
    const operatorEquals = container.getByTestId('operator-equals');
  
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(operatorEquals);
  
    expect(runningTotal.textContent).toEqual('3');
  })
  it('Concatenate 8 4 and 3, this is equals to 843',() => {
    const button8 = container.getByTestId('number8');
    const button4 = container.getByTestId('number4');
    const button3 = container.getByTestId('number3');
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button8);
    fireEvent.click(button4);
    fireEvent.click(button3);

    expect(runningTotal.textContent).toEqual('843');

  })
  it('8 + 4 / 4 = 3', ()=>{
    const button8 = container.getByTestId('number8');
    const button4 = container.getByTestId('number4');
    const add = container.getByTestId('operator-add');
    const divide = container.getByTestId('operator-divide');
    const operatorEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');

    fireEvent.click(button8);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(divide);
    fireEvent.click(button4);
    fireEvent.click(operatorEquals);

    expect(runningTotal.textContent).toEqual('3');
  })
  it('clear the running total without affecting the calculation',()=>{
    const button8 = container.getByTestId('number8');
    const button4 = container.getByTestId('number4');
    const add = container.getByTestId('operator-add');
    const divide = container.getByTestId('operator-divide');
    const operatorEquals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    const clear = container.getByTestId('clear');

    fireEvent.click(button8);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(divide);
    fireEvent.click(button4);
    fireEvent.click(operatorEquals);
    fireEvent.click(clear); // clear

    expect(runningTotal.textContent).toEqual('0');
  })
})

           //BUTTONS VARIABLES
           
           const zero = document.getElementById('zero');
            const one = document.getElementById('one');
            const two = document.getElementById('two');
            const three = document.getElementById('three');
            const four = document.getElementById('four');
            const five = document.getElementById('five');
            const six = document.getElementById('six');
            const seven = document.getElementById('seven');
            const eight = document.getElementById('eight');
            const nine = document.getElementById('nine');
           
            const plus = document.getElementById('plus');
            const minus = document.getElementById('minus');
            const divide = document.getElementById('divide');
            const times = document.getElementById('times');
            const perce = document.getElementById('percentage');
            const square = document.getElementById('square');
            
            const equals = document.getElementById('equals');
            const dot = document.getElementById('dot');

            const del = document.getElementById('del');
            const reset = document.getElementById('reset');

            let current = document.getElementById('current');
            let previous = document.getElementById('previous');
            let again;
           
         // ADDING NUMBERS BY CLICKING
           

            zero.addEventListener('click', () => {
               if (again === true) {
                  current.innerText = '';
                  again = false;
               };
                  current.innerText += 0;});      

            one.addEventListener('click', () => {
               if (again === true) {
                  current.innerText = '';
                  again = false;
               }
               current.innerText += 1;});

            two.addEventListener('click', () => {
               if (again === true) {
                  current.innerText = '';
                  again = false;
               }
                  current.innerText += 2});

            three.addEventListener('click', () => {
               if (again === true) {
                  current.innerText = '';
                  again = false;
               }
               current.innerText += 3});

            four.addEventListener('click', () => {
               if (again === true) {
                  current.innerText = '';
                  again = false;
               }
               current.innerText += 4});

            five.addEventListener('click', () => {
               if (again === true) {
                  current.innerText = '';
                  again = false;
               }
               current.innerText += 5});

            six.addEventListener('click', () => {
               if (again === true) {
                  current.innerText = '';
                  again = false;
               }
               current.innerText += 6});

            seven.addEventListener('click', () => {
               if (again === true) {
                  current.innerText = '';
                  again = false;
               }
               current.innerText += 7});

            eight.addEventListener('click', () => {
               if (again === true) {
                  current.innerText = '';
                  again = false;
               }
               current.innerText += 8});

            nine.addEventListener('click', () => {
               if (again === true) {
                  current.innerText = '';
                  again = false;
               }
                  current.innerText += 9});

            dot.addEventListener('click', () => {
               if (current.innerText.includes('.')) return;
               if (again === true) {
                  current.innerText = '';
                  again = false;
               }
                  current.innerText += '.'});
      

            document.addEventListener('keydown',(e) => { // dot on keyboard
               
               if (e.key === '.') {
                if (current.innerText.includes('.')) return;  
               if (again === true) {
                  current.innerText = '';
                  again = false;
               } 
                  current.innerText += '.';}})
            
            
            
            /// OPERATIONS FUNCTIONS AND CLICK TRIGGERS

         function operation (oper) {
         
         operand1 = parseFloat(operand1);
         operand2 = parseFloat(current.innerText);
         oper = operator;
         var result;

         switch(oper) {
            case '+':
               result = operand1 + operand2;
               break;
            case '-':
               result = operand1 - operand2;
               break;
            case '*':
               result = operand1 * operand2;
               break;
            case '/':
               result = operand1 / operand2;
               break;
            case '%':
               result = operand1 * (operand2/100);
               break;
            case '√':
               operand2 = '';
               result = Math.sqrt(operand1);
               break;
            default:
               return;   
         }
         // result = result.toFixed(2);
         result = result.toLocaleString('en', {
            maximumFractionDigits: 2 });
         current.innerText = '';
         previous.innerText = result;
         operand1 = result;
         operand2 = '';  
      }

      
      
      let operator = '';
      let operand1 = '';
      let operand2 = '';

      function add() {
         if (current.innerText === '' && previous.innerText === '') return;
         if (operator !== '' && operand1 !== '' && current.innerText !== '') {
            operation();
            previous.innerText += ' +';
            operator = '+';
            return;
         }
         if (operator === '-' || operator === '*' || operator === '/' || operator === '%' || operator === '√') return;
         if (operator === '+' && operand1 !== '' && current.innerText === '') return;
         operator = "+";
         operand1 = current.innerText;
         previous.innerText = current.innerText;
         previous.innerText += ' +';
         current.innerText = '';
      }

      function subtract() {
         if (current.innerText === '' && previous.innerText === '') return;
         if (operator !== '' && operand1 !== '' && current.innerText !== '') {
            operation();
            previous.innerText += ' -';
            operator = '-';
            return;
         }
         if (operator === '+' || operator === '*' || operator === '/' || operator === '%' || operator === '√') return;
         if (operator === '-' && operand1 !== '' && current.innerText === '' ) return;
         operator = "-";
         operand1 = current.innerText;
         previous.innerText = current.innerText;
         previous.innerText += ' -';
         current.innerText = ''
      }

      function multiply() {
         if (current.innerText === '' && previous.innerText === '') return;
         if (operator !== '' && operand1 !== '' && current.innerText !== '') {
            operation();
            previous.innerText += ' *';
            operator = '*';
            return;
         }
         if (operator === '+' || operator === '-' || operator === '/' || operator === '%' || operator === '√') return;
         if (operator === '*' && operand1 !== '' && current.innerText === '' ) return;  
         operator = "*";
         operand1 = current.innerText;
         previous.innerText = current.innerText;
         previous.innerText += ' *';
         current.innerText = '';     
      }

      function division() {
         if (current.innerText === '' && previous.innerText === '') return;
         if (operator !== '' && operand1 !== '' && current.innerText !== '') {
            operation();
            previous.innerText += ' /';
            operator = '/';
            return;
         }
         if (operator === '+' || operator === '*' || operator === '-' || operator === '%' || operator === '√') return;
         if (operator === '/' && operand1 !== '' && current.innerText === '' ) return;       
         operator = "/";
         operand1 = current.innerText;
         previous.innerText = current.innerText;
         previous.innerText += ' /';
         current.innerText = '';
      }

      function percentage() {
         if (current.innerText === '' && previous.innerText === '') return;
         if (operator !== '' && operand1 !== '' && current.innerText !== '') {
            operation();
            previous.innerText += ' %';
            operator = '%';
            return;
         }
         if (operator === '+' || operator === '*' || operator === '-' || operator === '/' || operator === '√') return;
         if (operator === '%' && operand1 !== '' && current.innerText === '' ) return;       
         operator = "%";
         operand1 = current.innerText;
         previous.innerText = current.innerText;
         previous.innerText += ' %';
         current.innerText = '';
      }

      function squareRoot() {
         if (current.innerText === '' && previous.innerText === '') return;
         if (operator !== '' && operand1 !== '' && current.innerText !== '') {
            // operation();
            // previous.innerText += ' √';
            // operator = '√';
            return;
         }
         if (operator === '+' || operator === '*' || operator === '-' || operator === '%' || operator === ';') return;
         if (operator === '√' && operand1 !== '' && current.innerText === '' ) return;       
         operator = "√";
         operand1 = current.innerText;
         resultado();
         // previous.innerText = current.innerText;
         // previous.innerText += ' √';
         // current.innerText = '';
         // operand1 = parseFloat(operand1);
         // current.innerText = `${Math.sqrt(operand1)}`;
      }




      plus.addEventListener('click', () => {
        add();
      })

      minus.addEventListener('click', () => {
        subtract();          
      })

      times.addEventListener('click', () => {
         multiply();
      })

      divide.addEventListener('click', () => {
         division();     
      })

      perce.addEventListener('click', () => {
         percentage();
      })

      square.addEventListener('click', () => {
         squareRoot();
      })



//  EQUALS BUTTON FUNCTIONS AND TRIGGER

      equals.addEventListener('click', () => {        
         resultado();
      })

      function resultado() {
         if (operator === '√') resultsBtn();
         if (current.innerText !== '' && previous.innerText === '') return;
         if (operator !== '' && current.innerText === '') return;
         resultsBtn();         
      }

      function resultsBtn() {
         operation();
         current.innerText = previous.innerText;
         previous.innerText = '';
         operator = '';
         again = true;
      }

      
// deleting and clearing

      del.addEventListener('click', () => {
         current.innerText = current.innerText.slice(0,-1);
      })

      reset.addEventListener('click', () => {
         current.innerText = '';
         previous.innerText = '';
         operand1 = '';
         operand2 = '';
         operator = undefined;
      } );
    
// KEYBOARD FEATURES

document.addEventListener('keydown',e => {
   if (e.which === 13) {  // Enter for result
      e.preventDefault();
      resultado();}
   if (e.which === 32) e.preventDefault(); // Bar space off default inputs
   if (e.which == 8) current.innerText = current.innerText.slice(0,-1); // backspace delete last char
   if (e.shiftKey && e.which === 187) add(); //
   if (e.which === 187 && !e.shiftKey) resultado(); // equal keyboard for result
   if (e.which === 189 && !e.shiftKey) subtract();
   if (e.which === 56 && e.shiftKey) multiply();
   if (e.which === 191 && !e.shiftKey) division();
   if (e.which === 53 && e.shiftKey) percentage();   
})


document.addEventListener('keydown', e => {
if (e.which === 48 && !e.shiftKey) {
   if (again === true) {
      current.innerText = '';
      again = false;
   } 
      current.innerText += 0;}
})

document.addEventListener('keydown', e => {
   if (e.which === 49 && !e.shiftKey) {
      if (again === true) {
         current.innerText = '';
         again = false;
      } 
         current.innerText += 1;}
   })

document.addEventListener('keydown', e => {
      if (e.which === 50 && !e.shiftKey) {
         if (again === true) {
            current.innerText = '';
            again = false;
         } 
            current.innerText += 2;}
      })

      document.addEventListener('keydown', e => {
         if (e.which === 51 && !e.shiftKey) {
            if (again === true) {
               current.innerText = '';
               again = false;
            }
               current.innerText += 3;}
         })

         document.addEventListener('keydown', e => {
            if (e.which === 52 && !e.shiftKey) {
               if (again === true) {
                  current.innerText = '';
                  again = false;
               }
                  current.innerText += 4;}
            })

            document.addEventListener('keydown', e => {
               if (e.which === 53 && !e.shiftKey) {
                  if (again === true) {
                     current.innerText = '';
                     again = false;
                  } 
                     current.innerText += 5;}
               })

               document.addEventListener('keydown', e => {
                  if (e.which === 54 && !e.shiftKey) {
                     if (again === true) {
                        current.innerText = '';
                        again = false;
                     }
                        current.innerText += 6;}
                  })

                  document.addEventListener('keydown', e => {
                     if (e.which === 55 && !e.shiftKey) {
                        if (again === true) {
                           current.innerText = '';
                           again = false;
                        } 
                           current.innerText += 7;}
                     })

                     document.addEventListener('keydown', e => {
                        if (e.which === 56 && !e.shiftKey) {
                           if (again === true) {
                              current.innerText = '';
                              again = false;
                           }
                              current.innerText += 8;}
                        })

                        document.addEventListener('keydown', e => {
                           if (e.which === 57 && !e.shiftKey) {
                              if (again === true) {
                                 current.innerText = '';
                                 again = false;
                              }
                                 current.innerText += 9;}
                           })


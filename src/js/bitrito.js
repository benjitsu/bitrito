var coins = {
    btc: 6958,
    eth: 245,
    xrp: .292
  }
  
  var foodStuff = {
    burrito: {
      name: 'Burrito',
      price: 7.5
    },
    burger: {
      name: 'Hamburger',
      price: 6.5
    },
    pizza: {
      name: 'Pizza Slice',
      price: 4
    },
    salad: {
      name: 'Salad',
      price: 10
    }
  }
  
  
  var coinsArr = Object.keys(coins);
  var calc = document.getElementById('calcBtn');
  var total = document.querySelector('.finalAmount');
  var s = document.querySelector('.endS');
  var headline = document.querySelector('.hLine');
  var elements = document.getElementById('elements');
  var add = document.getElementById('add');
  var burrito = 7.5;
  var amount;
  var selected;
  var selector;
  var coinEnt;
  var input;
  var grandTotal;
  var removeBtn;
  
  
  //add new row
  function newLine() {
    var wrapper = document.createElement("div");
    wrapper.className = 'col-lg-8 coinBox ml-auto mr-auto';
    var newRow = document.createElement("div");
    newRow.className = 'coinInput row';
    elements.appendChild(wrapper);
    wrapper.appendChild(newRow);
    newRow.appendChild(coinSelector());
    newRow.appendChild(numInput());
    if (elements.childElementCount > 1) {
      newRow.appendChild(removeRowBtn());
    }
  }
  
  newLine();
  
  // add new line btn listener
  add.addEventListener('click', function() {
    newLine();
  })
  
  
  // function to print total 
  function printAmount(value) {
    if (value == 1) {
      total.innerHTML = 'Your crypto is worth ' + value + ' burrito';
    } else if (value > 1) {
      total.innerHTML = 'Your crypto is worth ' + value + ' burritos';
    } else {
      total.innerHTML = 'Sorry, your crypto is worth enough for a burrito';
    }
  }
  
  //create selector and add coins
  function coinSelector() {
    selector = document.createElement("select");
    selector.className = 'selector';
    for (i = 0; i < coinsArr.length; i++) {
      coinEnt = '<option value =' + coinsArr[i] + '>' + coinsArr[i] + '</option>';
      selector.innerHTML += coinEnt;
    }
    selectorHTML = document.createElement('div');
    selectorHTML.className = 'rowSelect col-lg-5';
    selectorHTML.appendChild(selector);
    return selectorHTML;
  }
  
  //create input box
  function numInput() {
    input = document.createElement('input');
    input.className = 'amount';
    input.setAttribute('pattern', '[0-9]');
    input.setAttribute('type', 'number');
    inputHTML = document.createElement('div');
    inputHTML.className = 'rowInput col-lg-5';
    inputHTML.appendChild(input);
    return inputHTML;

  }


  
  //create remove btn
  function removeRowBtn() {
    removeBtn = document.createElement('button');
    removeBtn.className = 'remove';
    removeBtn.insertAdjacentHTML('afterbegin', 'X');
    removeBtn.addEventListener('click', function() {
      var parentRow = this.parentNode;
      parentRow.remove();
    })
    return removeBtn;
  }
  
  
  // calculate and print amount
  calc.addEventListener('click', function() {
    grandTotal = 0;
    var elementsN = elements.childElementCount;
    for (var i = 0; i < elementsN; i++) {
      var thisRow = elements.childNodes[i];
      var amount = thisRow.querySelector('.amount').value;
      var selected = thisRow.querySelector('.selector').value;
      grandTotal += (amount * coins[selected]);
    }
    grandTotal = grandTotal / burrito;
    grandTotal = Math.floor(grandTotal);
    if (grandTotal > 1) {
      total.innerHTML = grandTotal;
    } else {
      total.innerHTML = '00.00';
    }
  })
  
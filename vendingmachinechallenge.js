

let bag = [];
let totalTender = 0;
let items = [];

//step 1 declaring items and prices
var vm = {

	'snickers' : 1.00,
	'gushers' : 0.50,
	'gum' : 0.25,
	'potato chips' : 1.50,
	'soda' : 2.00,
	'water' : 1.00

};


//step 2 calling items and prices
let keys = Object.keys(vm);

for(let i = 0; i<keys.length; i++) {
	let itemPair = [];

	itemPair.push(keys[i]);

	itemPair.push(vm[keys[i]]);

	items.push(itemPair);

};

var showScreen = function() {
	return items

};

console.log(showScreen());

//step 3 creating currency
var enterCurrency = function(curr) {
	let coin = [.25, 1.00];
//part a error for incorrect tender
	if (!Number.isInteger(curr))
		return 'Incorrect value has been entered'

        coin.forEach((eL) => {
		if(curr % coin !== 0) {
		}
	})
//part b creating tender
	totalTender += curr

	return totalTender
}

console.log('You have entered:$ ' + enterCurrency(5));

//step 4 selecting items and taking curr from totalTender
	const selectItem = (item) => {
  		const itemSet = new Set()
// {}
// {1,1,1,2,3}
// {1,2,3} doesn't print duplicates

  keys.forEach((snack) => {

     itemSet.add(snack)
  })

  if (!itemSet.has(item)) {
        console.log('Wrong choice')
  } else {
        let itemPrice = vm[item]
        if (totalTender >= itemPrice) {
          let change = totalTender - itemPrice
//part 5 returning change





		  console.log('change $', change )
//part 6 setting up bag
          bag.push(item)

          return item
        }else {
          console.log('not enough money')
        }
  }
};






console.log(selectItem('banana'));
console.log(selectItem('soda'));
console.log(selectItem('potato chips'));
console.log(selectItem('snickers'));
console.log(selectItem('water'));
console.log(selectItem('gum'));
console.log(bag);

//step 7 removing items from bag
while(bag.length) {
	
		console.log(bag[0] + ' has been consumed');
		bag.shift();
	
	//console.log(bag + ' has been consumed')
	//bag.shift();
	
}

console.log(bag + 'bag is empty');




// bonus
/*
class VendingMachine {
  constructor (bag = []) {
    this.bag = bag
    this.vm = vm
    this.totalTender = 0
  }

  showItemsClass() {
        return Object.keys(store)
  }

  selectItemClass(item) {
        const currencyvm = this.vm
        const classItemSet = new set()
        keys.forEach((snickers) => {
          classItemSet.add(snack)
 }

  enterCurrencyClass(curr) {

 }

*/

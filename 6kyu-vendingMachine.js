// refactored
class VendingMachine {
  constructor(items, money) {
    this.items = items
    this.money = money
  }
  vend(selection, itemMoney) {
    const item = this.items.find(obj => obj.code === selection)
    
    if(!item) return `Invalid selection! : Money in vending machine = ${(this.money).toFixed(2)}`
    if(itemMoney < item['price']) return `Not enough money!`
    if(item['quantity'] === 0) return `${item['name']}: Out of stock!`
    if(item && itemMoney === item['price']) {
      item['quantity'] -= 1
      this.money += itemMoney
      return `Vending ${item['name']}`
    }
    if(item && itemMoney > item['price']) {
      item['quantity'] -= 1
      this.money += item['price']
      return `Vending ${item['name']} with ${(itemMoney - item['price']).toFixed(2)} change.`
    }
  }
}


// first pass
// class VendingMachine {
//   constructor(items, money) {
//     this.items = items
//     this.money = money 
//   } 
  
//   vend(selection, itemMoney) {
//     // first search for selection in this.items
//     let found = this.items.filter((val, index) => selection === val.code)
    
//     // if not found return invalid selection
//     if(found.length === 0) {
//       return `Invalid selection! : Money in vending machine = ${(this.money).toFixed(2)}`
      
//     // else time to check for other validations
//     } else {
//       // check if customer didn't insert enough money
//       if(itemMoney < found[0]['price']) return 'Not enough money!'
      
//       // check if item is out of stock
//       if(found[0]['quantity'] === 0) return `${found[0]['name']}: Out of stock!`
    
//       // vend item if customer gave exact change
//       if(itemMoney === found[0]['price']) {
//         this.money += itemMoney
//         found[0]['quantity'] -= 1
//         return `Vending ${found[0]['name']}`
//       }
      
//       // vend item and give change if customer overpaid
//       if(itemMoney > found[0]['price']) {
//         this.money += found[0]['price']
//         found[0]['quantity'] -= 1
//         return `Vending ${found[0]['name']} with ${(itemMoney - found[0]['price']).toFixed(2)} change.`
//       }    
//     } 
//   }
// }

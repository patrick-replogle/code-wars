class VendingMachine {
  constructor(items, money) {
    this.items = items
    this.money = money 
  }
  
  vend(selection, itemMoney) {
    let found = this.items.filter((val, index) => selection === val.code)
    
    // check if item is out of stock
    if(found.length > 0 && found[0]['quantity'] === 0) return `${found[0]['name']}: Out of stock!`
    
    // check if vending machine doesn't have enough money to give change
    if(found.length === 0) return `Invalid selection! : Money in vending machine = ${(this.money).toFixed(2)}`
    
    // check if customer didn't insert enough money
    if(found.length > 0 && itemMoney < found[0]['price']) return 'Not enough money!'
    
    // vend item if customer gave exact change
    if(found.length > 0 && itemMoney === found[0]['price']) {
      this.money += itemMoney
      found[0]['quantity'] -= 1
      return `Vending ${found[0]['name']}`
    }
    
    // vend item and give change is customer overpaid
    if(found.length > 0 && itemMoney > found[0]['price']) {
      this.money += found[0]['price']
      found[0]['quantity'] -= 1
      return `Vending ${found[0]['name']} with ${(itemMoney - found[0]['price']).toFixed(2)} change.`
    }  
  }
}

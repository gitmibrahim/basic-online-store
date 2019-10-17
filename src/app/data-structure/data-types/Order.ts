interface Order {
  OrderId: number,
  OrderDate: string,
  UserId: string,
  Products: OrderProduct[],
  PaymentType: string,
  TotalPrice?: number
}

interface OrderProduct {
  ProductId: number,
  Quantity: number
}
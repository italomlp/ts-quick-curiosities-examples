enum OrderStatus {
  Pending,
  Approved,
  Rejected,
  Cancelled,
}

interface IOrder {
  status: OrderStatus;
  product: string;
  price: number;
  cancel: () => Promise<void>;
}

class Order implements IOrder {
  constructor(
    public status: OrderStatus,
    public product: string,
    public price: number,
  ) {}

  cancel() {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        this.status = OrderStatus.Cancelled;
        resolve();
      }, 1000);
    });
  };
}

const order: Order = new Order(OrderStatus.Pending, 'Macbook Pro', 1000);
console.log('Status:', order.status);
order.cancel().then(() => {
  console.log('Status:', order.status);
});

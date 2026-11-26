import { Product } from '../products/products.entity.js';
import { User } from '../users/users.entity.js';
import { DeliveryStatus, OrderStatus } from './enum/order-types.enum.js';

export class Order {
  id: string;
  customer: User;
  product: Product;
  orderStatus: OrderStatus;
  deliveryStatus: DeliveryStatus;
  orderedAt: Date;
}

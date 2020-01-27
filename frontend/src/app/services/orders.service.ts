import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  readonly URL_API = 'http://localhost:3000/api/orders';
  selectedOrder: Order;
  orders: Order[];

  constructor(private http: HttpClient) { 
    this.selectedOrder = new Order();
  }

  getOrders(){
    return this.http.get(this.URL_API);
  }

  createOrder(order: Order){
  return this.http.post(this.URL_API, order);
  }

  editOrder(order: Order){
    return this.http.put(this.URL_API+`/${order._id}`, order);
  }

  deleteOrder(_id: String){
    return this.http.delete(this.URL_API+`/${_id}`);
  }
}

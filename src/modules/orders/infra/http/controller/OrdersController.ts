import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateOrderService from '@modules/orders/services/CreateOrderService';
import FindOrderService from '@modules/orders/services/FindOrderService';

export default class OrdersController {
  public async show(request: Request, response: Response): Promise<Response> {
    // TODO
    const { id } = request.params;

    const findOrders = container.resolve(FindOrderService);

    const order = await findOrders.execute({ id });

    return response.json(order);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    // TODO
    const { customer_id, products } = request.body;

    const createOrders = container.resolve(CreateOrderService);

    const order = await createOrders.execute({ customer_id, products });

    return response.json(order);
  }
}

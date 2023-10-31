import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { OrderPlacement } from './interface/order-placement.interface';
import { UpdateOrderPlacementDto } from './dto/update-order-placement.dto';
import { CreateOrderPlacementDto } from './dto/create-order-placement.dto';

@Injectable()
export default class OrderPlacementService {
    private lastOrderPlacementId = 0;
    private orderPlacements: OrderPlacement[] = [];

    getAllOrderPlacements() {
        return this.orderPlacements;
    }

    getOrderPlacementById(id: number) {
        const orderPlacement = this.orderPlacements.find(orderPlacement => orderPlacement.id === id);
        if(orderPlacement) {
            return orderPlacement;
        }
        throw new HttpException('OrderPlacement not found', HttpStatus.NOT_FOUND);
    }

    replaceOrderPlacement(id: number, orderPlacement: UpdateOrderPlacementDto) {
        const orderPlacementIndex = this.orderPlacements.findIndex(orderPlacement => orderPlacement.id === id);
        if(orderPlacementIndex > -1) {
            this.orderPlacements[orderPlacementIndex] = orderPlacement;
            return orderPlacement;
        }
        throw new HttpException('OrderPlacement not found', HttpStatus.NOT_FOUND);
    }

    createOrderPlacement(orderPlacement: CreateOrderPlacementDto) {
        const newOrderPlacement = {
            id: ++this.lastOrderPlacementId,
            ...orderPlacement
        }
        this.orderPlacements.push(newOrderPlacement);
        return newOrderPlacement;
    }

    deleteOrderPlacement(id: number) {
        const orderPlacementIndex = this.orderPlacements.findIndex(orderPlacement => orderPlacement.id === id);
        if(orderPlacementIndex > -1) {
            this.orderPlacements.splice(orderPlacementIndex, 1);
        } else {
            throw new HttpException('OrderPlacement not found', HttpStatus.NOT_FOUND);
        }
    }
}

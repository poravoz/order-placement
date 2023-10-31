import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateOrderPlacementDto } from './dto/update-order-placement.dto';
import { CreateOrderPlacementDto } from './dto/create-order-placement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import OrderPlacementEntity from './entities/order-placement.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export default class OrderPlacementService {
    constructor(
        @InjectRepository(OrderPlacementEntity)
        private orderPlacementsRepository: Repository<OrderPlacementEntity>
    ) {}

    async getAllOrderPlacements() {
        return await this.orderPlacementsRepository.find();
    }

    async getOrderPlacementById(id: string) {
        const orderPlacement = await this.orderPlacementsRepository.findOne({where: {id}});
        if(orderPlacement) {
            return orderPlacement;
        }
        throw new HttpException('OrderPlacement not found', HttpStatus.NOT_FOUND);
    }

    async createOrderPlacement(orderPlacement: CreateOrderPlacementDto) {
        const newOrderPlacement = await this.orderPlacementsRepository.create({
            id: uuidv4(),
            ...orderPlacement,
        }) 
        await this.orderPlacementsRepository.save(newOrderPlacement);
        return newOrderPlacement;
    }

    async replaceOrderPlacement(id: string, orderPlacement: UpdateOrderPlacementDto) {
        await this.orderPlacementsRepository.update(id, orderPlacement);
        const updateOrderPlacement = await this.orderPlacementsRepository.findOne({where: {id}});
        if(updateOrderPlacement) {
            return updateOrderPlacement;
        }
        throw new HttpException('OrderPlacement not found', HttpStatus.NOT_FOUND);
    }

    async deleteOrderPlacement(id: string) {
        const deleteOrderPlacement = await this.orderPlacementsRepository.delete(id);
        if(!deleteOrderPlacement) {
            throw new HttpException('OrderPlacement not found', HttpStatus.NOT_FOUND);
        }
    }
}

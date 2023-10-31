import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import OrderPlacementService  from './order-placement.service';
import { CreateOrderPlacementDto } from './dto/create-order-placement.dto';
import { UpdateOrderPlacementDto } from './dto/update-order-placement.dto';

@Controller('order-placement')
export default class OrderPlacementController {
    constructor(
        private readonly orderPlacementService: OrderPlacementService
    ) {}

    @Get()
    getAllOrderPlacements() {
         return this.orderPlacementService.getAllOrderPlacements();
    }

    @Get(':id')
    getOrderPlacementById(@Param('id') id: number) {
        return this.orderPlacementService.getOrderPlacementById(Number(id));
    }

    @Post()
    async createOrderPlacement(@Body() orderPlacement: CreateOrderPlacementDto) {
        return this.orderPlacementService.createOrderPlacement(orderPlacement);
    }

    @Put(':id')
    async replaceOrderPlacement(@Param('id') id: number, @Body() orderPlacement: UpdateOrderPlacementDto) {
        return this.orderPlacementService.replaceOrderPlacement(Number(id), orderPlacement);
    }

    @Delete(':id')
    async deleteOrderPlacement(@Param('id') id: number) {
        this.orderPlacementService.deleteOrderPlacement(Number(id));
    }
}

import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
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
    getOrderPlacementById(@Param('id') id: string) {
        return this.orderPlacementService.getOrderPlacementById(id);
    }

    @Post()
    async createOrderPlacement(@Body() orderPlacement: CreateOrderPlacementDto) {
        return this.orderPlacementService.createOrderPlacement(orderPlacement);
    }

    @Patch(':id')
    async updateOrderPlacement(@Param('id') id: string, @Body() orderPlacement: UpdateOrderPlacementDto) {
        return this.orderPlacementService.updateOrderPlacement(id, orderPlacement);
    }

    @Delete(':id')
    async deleteOrderPlacement(@Param('id') id: string) {
        this.orderPlacementService.deleteOrderPlacement(id);
        return "Order Placement is Deleted";
    }
}

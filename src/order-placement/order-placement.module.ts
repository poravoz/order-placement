import { Module } from '@nestjs/common';
import  OrderPlacementController from './order-placement.controller';
import OrderPlacementService  from './order-placement.service';

@Module({
    imports: [],
    controllers: [OrderPlacementController],
    providers: [OrderPlacementService],
})
export class OrderPlacementModule {}

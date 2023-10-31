import { Module } from '@nestjs/common';
import  OrderPlacementController from './order-placement.controller';
import OrderPlacementService  from './order-placement.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import OrderPlacementDto from './entities/order-placement.entity';

@Module({
    imports: [TypeOrmModule.forFeature([OrderPlacementDto])],
    controllers: [OrderPlacementController],
    providers: [OrderPlacementService],
})
export class OrderPlacementModule {}

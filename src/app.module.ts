import { Module } from '@nestjs/common';
import { OrderPlacementModule } from './order-placement/order-placement.module';

@Module({
  imports: [OrderPlacementModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

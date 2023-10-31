import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class OrderPlacementEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    phone: string;

    @Column()
    email: string;

    @Column()
    city: string;

    @Column()
    delivery: string;
}

export default OrderPlacementEntity;

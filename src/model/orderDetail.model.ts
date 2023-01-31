 import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class OrderDetail {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    status: string
    @Column()
    quantity: number
    @Column({ nullable: true,})
    productID: number
    @Column({ nullable: true,})
    orderID: number
}
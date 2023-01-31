import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({nullable:true})
    quantity: number
    @Column({nullable:true})
    address: string
    @Column({nullable:true})
    phone: string
    @Column({nullable:true})
    orderDate: string
    @Column({nullable:true})
    status: string
    @Column({nullable:true})
    totalMoney: string
    @Column({nullable:true})
    userID: number
    @Column({nullable:true})
    orderDetailID: number
}
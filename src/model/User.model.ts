import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    username: string
    @Column()
    password: string
    @Column({default: 2})
    role: number
    @Column({ nullable: true,})
    orderID: number
}
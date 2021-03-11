import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class E {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    e: boolean
}
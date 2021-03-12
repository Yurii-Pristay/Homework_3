import {Column, Entity, PrimaryColumn} from "typeorm";


@Entity()
export class A {
    @PrimaryColumn({type: "int"})
    id: number;

    @Column()
    a: number[];
}
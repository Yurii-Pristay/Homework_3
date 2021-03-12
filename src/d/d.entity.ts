import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class D {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    d: string;
}

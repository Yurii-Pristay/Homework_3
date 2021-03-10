import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RouteС {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  speciality: number;
}
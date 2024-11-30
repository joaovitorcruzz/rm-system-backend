import { Entity, PrimaryGeneratedColumn, Column, } from 'typeorm';

@Entity()
export class room_schedules {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  room_id: number;

  @Column()
  title: string;

  @Column()
  date: string;

}

import { Entity, PrimaryGeneratedColumn, Column, } from 'typeorm';

@Entity()
export class room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;
  
  @Column()
  maxCapacity: string;

  @Column()
  utils: string;

  @Column()
  roomPictures: string;

  @Column()
  local: string;

  @Column({ type: 'timestamp' }) // Define que será uma coluna com data e hora
  dateStart: Date;

  @Column({ type: 'timestamp' }) // Define que será uma coluna com data e hora
  dateEnd: Date;

}

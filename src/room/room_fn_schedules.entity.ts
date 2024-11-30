import { Entity, PrimaryGeneratedColumn, Column, } from 'typeorm';

@Entity()
export class room_fn_schedules {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  schedule_id: number;

  @Column()
  room_id: number;

  @Column()
  user_id: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}

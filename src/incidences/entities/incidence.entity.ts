import { Company } from 'src/company/entities/company.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Incidence {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @OneToOne(() => Company)
  @JoinColumn()
  company: Company;

  @Column()
  description: string;

  @Column()
  closed: boolean;

  @Column()
  duration: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;


  
}
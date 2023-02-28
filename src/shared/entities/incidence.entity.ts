import { Company } from 'src/shared/entities/company.entity';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Incidence {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @ManyToOne(() => Company)
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

  @BeforeInsert()
  setIncidenceStatus() {
    this.date = new Date();
  }
}

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

  @CreateDateColumn()
  date: Date;

  @ManyToOne(() => Company, { eager: true })
  @JoinColumn()
  company: Company;

  @Column()
  description: string;

  @Column({ default: false })
  closed: boolean;

  @Column({ default: 0 })
  duration: number;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  setIncidenceStatus() {
    this.date = new Date();
  }
}

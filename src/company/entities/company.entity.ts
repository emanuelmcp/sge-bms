import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string;

  @Column()
  postalCode: number;

  @Column()
  city: string;

  @Column()
  region: string;

  @Column()
  cif: string;

  @Column()
  email: string;

  @Column()
  numberPhone: string;

  @Column()
  contactName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

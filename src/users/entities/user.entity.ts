import { Company } from 'src/company/entities/company.entity';
import { Role } from 'src/roles/entities/role.entity';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToOne(() => Role)
  @JoinColumn()
  idRol: Role;

  @OneToOne(() => Company)
  @JoinColumn()
  idCompany: Company;

  @Column()
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  hashPassword() {
    this.password = 
  }
}

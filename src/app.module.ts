import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { CompanyModule } from './company/company.module';
import { IncidencesModule } from './incidences/incidences.module';
import { IndexModule } from './index/index.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      database: 'sge',
      username: 'root',
      password: 'root',
      port: 40000,
      autoLoadEntities: true,
      synchronize: true,
    }),
    RolesModule,
    CompanyModule,
    IncidencesModule,
    IndexModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

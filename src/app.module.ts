import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { CompanyModule } from './company/company.module';
import { IncidencesModule } from './incidences/incidences.module';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      database: 'sge',
      username: 'root',
      port: 3306,
      autoLoadEntities: true,
      synchronize: true,
    }),
    RolesModule,
    CompanyModule,
    IncidencesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';
import { IncidencesModule } from './incidences/incidences.module';
import { IndexModule } from './index/index.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      database: 'sge',
      username: 'root',
      //password: 'root',
      port: 3306,
      autoLoadEntities: true,
      synchronize: true,
    }),
    CompanyModule,
    IncidencesModule,
    IndexModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

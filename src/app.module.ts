import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Neo4jModule } from './neo4j/neo4j.module';

@Module({
  imports: [
    Neo4jModule.forRoot({
      scheme: 'neo4j',
      host: 'localhost',
      port: '7687',
      username: 'danorel',
      password: '1234567890',
      database: 'default',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { DynamicModule } from '@nestjs/common';

import { NEO4J_DRIVER, NEO4J_OPTIONS } from './neo4j.constants';
import { Neo4jService } from './neo4j.service';
import { Neo4jConfig } from './neo4j.types';
import { createDriver } from './neo4j.utils';

export class Neo4jModule {
  static forRoot(config: Neo4jConfig): DynamicModule {
    return {
      module: Neo4jModule,
      providers: [
        {
          provide: NEO4J_OPTIONS,
          useValue: config,
        },
        {
          // Define a key for injection
          provide: NEO4J_DRIVER,
          // Inject NEO4J_OPTIONS defined above as the
          inject: [NEO4J_OPTIONS],
          // Use the factory function created above to return the driver
          useFactory: (config: Neo4jConfig) => createDriver(config),
        },
        Neo4jService,
      ],
    };
  }
}

import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import * as path from 'path';

export default function(schema: any): Rule {
  const stateName = 'mytest';

  return chain([
    externalSchematic('@nrwl/schematics', 'lib', {
      name: schema.name,
      tags: 'data-access'
    }),
    externalSchematic('@nrwl/schematics', 'ngrx', {
      name: stateName,
      module: path.join(
        'libs',
        schema.name,
        'src',
        'lib',
        `${schema.name}.module.ts`
      )
    })
  ]);
}

import { Injectable } from '@nestjs/common';
import { DbObject } from 'src/interfaces/DbObject';

@Injectable()
export class DatabaseService {
  public dbArray: DbObject[] = [
    { id: 1, a: [1, 2, 3] },
    { id: 2, b: { key: 'test' } },
    { id: 3, c: 123 },
    { id: 4, d: 'test' },
    { id: 5, e: true },
  ];
}

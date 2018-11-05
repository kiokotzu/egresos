export class IngresoEgreso {

  description: string;
  count: number;
  type: string;
  uid?: any;

  constructor(obj: Ingreso) {
    this.description = obj && obj.description || null;
    this.count = obj && obj.count || null;
    this.type = obj && obj.type || null;
  }

}

export interface Ingreso {
  description: string;
  count: number;
  type: string;
  uid?: any;
}

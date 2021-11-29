export abstract class BaseEntity
{
  readonly entityUUID: string;
  readonly createdDate: Date;

  constructor(data: any) {
    this.entityUUID = data.entityUUID;
    this.createdDate = data.createdDate;
  }
}

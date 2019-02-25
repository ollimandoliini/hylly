import * as Hapi from 'hapi';

export interface NewCollectionRequest extends Hapi.Request {
  payload: {
    userId: number;
    title: string;
    description: string;
  };
}
export interface UpdateCollectionRequest extends Hapi.Request {
  payload: {
    id: number;
    userId: number;
    title: string;
    description: string;
  };
}

export interface GetListResponse {
  data: ListObject[];
  config: object;
  headers: object;
  request: object;
  status: number;
  statusText: string;
};

export interface ListObject {
  id: number;
  task: string;
  status: boolean;
  priority: string;
};



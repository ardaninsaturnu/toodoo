export const priorityOptions = [
  {
    value: 0,
    label: 'Select Priority'
  },
  {
    value: 1,
    label: 'Primary'
  },
  {
    value: 2,
    label: 'Secondary'
  },
  {
    value: 3,
    label: 'Tertiary'
  }
]

export type GetListResponse = {
  data: ListObject[];
  config: object;
  headers: object;
  request: object;
  status: number;
  statusText: string;
};

export type ListObject = {
  id: string;
  task: string;
  status: boolean;
  priority: string;
};

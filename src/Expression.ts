export type Symbol = {
  value: string;
  type: 'operation' | 'number' | 'bracket';
};

export type Expression = {
  listOfSymbols: Symbol[];
  openBrackets: number;
};

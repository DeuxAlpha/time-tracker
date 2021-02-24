export type Filter = {
  propertyName: string;
  value?: any;
  comparison: 'Equal' | 'LessThan' | 'LessThanOrEqual' | 'GreaterThan' | 'GreaterThanOrEqual' | 'NotEqual' | 'Contains' | 'StartsWith' | 'EndsWith' | 'NotNull';
  relation?: 'And' | 'AndAlso' | 'Or' | 'OrElse' | 'Xor';
}
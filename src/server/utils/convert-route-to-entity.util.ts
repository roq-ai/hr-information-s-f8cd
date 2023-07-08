const mapping: Record<string, string> = {
  companies: 'company',
  payrolls: 'payroll',
  users: 'user',
  vacations: 'vacation',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

import { AddBudget } from "../views/AddBudget";
import { AllBudgets } from "../views/AllBudgets";

const APP_ROUTES = {
  BUDGET_PAGE: "BUDGET_PAGE",
  ALL_BUDGETS_PAGE: "ALL_BUDGET_PAGE",
};

const ROUTES = [
  {
    name: APP_ROUTES.BUDGET_PAGE,
    component: AddBudget,
  },
  {
    name: APP_ROUTES.ALL_BUDGETS_PAGE,
    component: AllBudgets,
  },
];

export { ROUTES, APP_ROUTES };

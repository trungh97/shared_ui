export const required = (message: string = 'This field is required') => {
  return (value: any) => (value ? undefined : message);
};

export const email = (message: string = 'Invalid email address') => {
  return (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? undefined : message;
};

export type RuleType = 'required' | 'email';
export type RuleValidateFn = (
  message?: string,
) => (value: any) => string | undefined;
export type Rules = { type: RuleType; message?: string }[];

export const ruleMap: Record<RuleType, RuleValidateFn> = {
  required,
  email,
};

/**
 * Composes validation rules by mapping each rule type to its corresponding validation function.
 *
 * @param rules - An array of objects representing the validation rules, each with a `type` indicating
 * the rule type (e.g., 'required', 'email') and an optional `message` for custom error messages.
 *
 * @returns An array of objects where each object contains the `type` of the rule and a `validateFn`,
 * which is a function that takes a value and returns a validation error message or undefined if valid.
 */

export const composeRules = (
  rules: Rules,
): {
  type: RuleType;
  validateFn: (value: any) => string | undefined;
}[] => {
  return rules.map(({ type, message }) => ({
    type,
    validateFn: ruleMap[type](message),
  }));
};

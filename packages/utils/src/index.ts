export const cn = (...classes: Array<string | undefined | false | null>) =>
  classes.filter(Boolean).join(" ");

export const formatCurrency = (value: number, currency: string = "USD") =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency
  }).format(value);

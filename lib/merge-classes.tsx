const mergeClasses = (...args: (string | undefined)[]): string => {
  return args.filter(Boolean).join(" ");
};

export default mergeClasses;

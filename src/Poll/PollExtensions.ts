export interface IPollOptions {
  ms?: number;
  conditionalFn?: (iteration: number) => Promise<boolean>;
  pollCallback: (iteration: number) => Promise<void>;
}
export const Wait = (ms = 1000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const Poll = async (options: IPollOptions) => {
  let iteration: number = 0;
  const ms = options.ms ? options.ms : 1000;
  await options.pollCallback(iteration);
  while (options.conditionalFn ? options.conditionalFn(iteration) : true) {
    await Wait(ms);
    await options.pollCallback(iteration);
    iteration++;
  }
};

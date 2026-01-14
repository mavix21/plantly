import { createStore } from "@xstate/store";

export const userStore = createStore({
  context: {
    hasFinishedOnboarding: false,
  },
  on: {
    toggle: (ctx) => ({
      ...ctx,
      hasFinishedOnboarding: !ctx.hasFinishedOnboarding,
    }),
  },
});

// cypress/support/index.ts

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mount } from "cypress/react18";

Cypress.Commands.add("mount", (component, options = {}) => {
  // Use the default store if one is not provided
  const queryClient = new QueryClient();

  const { ...mountOptions } = options;

  const wrapped = (
    <QueryClientProvider client={queryClient}>{component}</QueryClientProvider>
  );

  return mount(wrapped, mountOptions);
});

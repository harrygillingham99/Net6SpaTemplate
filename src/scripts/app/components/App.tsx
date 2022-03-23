import * as React from "react";
import { Template } from "@components/Template";
import ErrorBoundary from "./ErrorBoundary";

export const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Template />
    </ErrorBoundary>
  );
};

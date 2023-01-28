import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { RenderResult, render } from "@testing-library/react";

import theme from "styles/theme";

// helper de testes criado para renderizar o tema criado com styled-components
// o componente abaixo recebe um elemento filho React e
// retorna um resultado de renderização no formato do React Testing Library
export const renderWithTheme = (children: ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

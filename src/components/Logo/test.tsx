import { render, screen } from "@testing-library/react";

import Logo from ".";

import { renderWithTheme } from "utils/tests/helpers";

describe("<Logo />", () => {
  // deve renderizar a logo branca por padrão
  it("should render a white label by default", () => {
    // 1) renderizar o componente `container`
    // 1.1) como estamos usando um tema para aplicação utilizando styled-components,
    // precisaremos renderizar o Logo dentro do helper de testes
    renderWithTheme(<Logo />);
    // 2) selecionar o elemento a ser testado com o método `screen`
    // 2.1) através do método `screen` conseguiremos fazer "queries": getByLabel...
    // 3) expect - assertion: asserção - comparação -> espero que determinada coisa ocorra...
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: "#FAFAFA",
    });
  });

  // deve renderizar a logo preta quando a color for passada
  it("should render a black label when color is passed", () => {
    renderWithTheme(<Logo color="black" />);
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: "#030517",
    });
  });
});

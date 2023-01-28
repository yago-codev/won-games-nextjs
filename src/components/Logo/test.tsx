import { render, screen } from "@testing-library/react";

import Logo from ".";

describe("<Logo />", () => {
  // deve renderizar a logo branca por padrão
  it("should render a white label by default", () => {
    // 1) renderizar o componente `container`
    const { container } = render(<Logo />);
    // 2) selecionar o elemento a ser testado com o método `screen`
    // 2.1) através do método `screen` conseguiremos fazer "queries": getByLabel...
    // 3) expect - assertion: asserção - comparação -> espero que determinada coisa ocorra...
    expect(screen.getByRole("heading", { name: /Logo/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});

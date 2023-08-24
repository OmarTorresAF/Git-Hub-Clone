import { isValidElement } from 'react'

import styled from 'styled-components'

const ButtonStyled = styled.button`
  border-radius: 0.5rem;
  padding-block: 0.25rem;
  font: var(--button);
  background: var(--buttonBG);
  color: var(--white);
  min-inline-size: 135px;
  border: 1px solid var(--grey);
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  text-decoration: none !important;
	&:hover{
		background: var(--white);
		color: var(--button);
	}
`



function Button({text, link, className, icon}) {
	const component = link ? 'a': 'button'
	let IconComponent = null
	if (icon) {
		if (isValidElement(icon)) {
IconComponent = icon
		}
	}
  return (
    <ButtonStyled as={component} href="{link}" className={className}>
      {IconComponent}
      {text}
    </ButtonStyled>
  );
}

export const ButtonContrast = styled(Button)`
  background: var(--white);
  color: var(--bg);
  &:hover {
    background: var(--bg);
    color: var(--white);
  }
`;

export const ButtonRounded = styled(Button)`
  border: 1px solid red;
  min-inline-size: initial;
  border-radius: 50%;
  padding: 0.75rem;
  border: 2px solid var(--grey);
  &:hover {
    background: var(--bg);
    transform:scale(1.1);
  }
`;


export default Button

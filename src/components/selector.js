import styled from 'styled-components'

const SelectorStyled = styled.select`
border:none;
background: var(--bg);
color: var(--white);
block-size:2.5rem;
padding-inline: 1rem;
font: var(--buttonBG);

`

function Selector({ children, setLanguage }) {
  function handleLanguage(e) {
    if (setLanguage) {
      setLanguage(e.target.value);
    }
  }
  return <SelectorStyled onChange={handleLanguage}>{children}</SelectorStyled>
}

export default Selector;
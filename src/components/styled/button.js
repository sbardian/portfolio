import styled from "@emotion/styled"

export const Button = styled.button`
  appearance: none;
  transition: all 0.2s ease-in-out;
  background-color: transparent;
  border-radius: 0.35em;
  border: 3px solid #e1e1e1;
  color: #e1e1e1;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  line-height: 2.75em;
  min-width: 10em;
  padding: 0 1.5em;
  margin-bottom: 3em;
  &:hover {
    background: #2f2d2d;
    color: #92e5f3;
    border-color: #92e5f3;
  }
`

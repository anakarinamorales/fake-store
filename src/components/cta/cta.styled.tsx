import styled from 'styled-components';

import Link from 'next/link';

export const CustomLink = styled(Link)`
  background-color: var(--background);
  border-radius: 30px;
  border: 1px solid var(--primary);
  margin: 0 auto;
  padding: 24px;
  transition: transform 250ms, background-color 250ms ease;

  &:hover {
    background-color: var(--primary);
    transform: translateY(-10px);
  }
`;

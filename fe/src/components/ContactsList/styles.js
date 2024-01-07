import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
`;

export const Header = styled.header`

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  strong{
    font-size: 24px;
    color: #222;
    line-height: 30.24px;
  }

  a{
    font-size: 16px;
    line-height: 20.16px;
    font-weight: 600;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.main};
    padding: 11px 15px;
    text-decoration: none;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.3s ease-in;

    &:hover{
      color: #fff;
      background: ${({ theme }) => theme.colors.primary.main};
    }
  }

  
`;

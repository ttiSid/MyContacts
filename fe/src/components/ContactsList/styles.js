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
    padding: 6px 11px;
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

export const ListContainer = styled.div`
  margin-top: 24px;
  

  header{
    margin-bottom: .5rem;

    button{
    border: none;
    background: transparent;
    display: flex;
    align-items: center;

    span{
      margin-right: .5rem;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  }
  
`;

export const Card = styled.div`
  background: #fff;
  box-shadow:  0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 1rem;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .actions{
    display: flex;
    align-items: center;

    button{
    background: transparent;
    border: none;
    margin-left: 8px;
    }
    
  }

  .info{
    display: flex;
    align-items: center;

    small{
      background: ${({ theme }) => theme.colors.primary.lightest};
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: bold;
      text-transform: uppercase;
      padding: 4px;
      border-radius: 4px;
      margin-left: 8px;
    }
    span{
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.gray[200]}
    }
  }
  
`;

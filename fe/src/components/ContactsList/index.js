import {
  Container, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import trash from '../../assets/images/icons/trash.svg';
import edit from '../../assets/images/icons/edit.svg';

export default function ContactsList() {
  return (
    <Container>
      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>

        </header>
      </ListContainer>
      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Nome do contato</strong>
            <small>Instagram</small>
            <span>e-mail@mail.com</span>
            <span>(99) 99999-9999</span>
          </div>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="edit" />
          </a>
          <button type="button">
            <img src={trash} alt="trash" />
          </button>
        </div>

      </Card>
      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Nome do contato</strong>
            <small>Instagram</small>
            <span>e-mail@mail.com</span>
            <span>(99) 99999-9999</span>
          </div>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="edit" />
          </a>
          <button type="button">
            <img src={trash} alt="trash" />
          </button>
        </div>

      </Card>
      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Nome do contato</strong>
            <small>Instagram</small>
            <span>e-mail@mail.com</span>
            <span>(99) 99999-9999</span>
          </div>
        </div>

        <div className="actions">
          <a href="/">
            <img src={edit} alt="edit" />
          </a>
          <button type="button">
            <img src={trash} alt="trash" />
          </button>
        </div>

      </Card>
    </Container>
  );
}

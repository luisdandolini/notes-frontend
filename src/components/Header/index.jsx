import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';

export function Header() {
  return(
    <Container>
      <Profile>
        <img src="https://github.com/luisdandolini.png" alt="Foto de Perfil do Github" />

        <div>
          <span>Bem-vindo</span>
          <strong>Luís Dandolini</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
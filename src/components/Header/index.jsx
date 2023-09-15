import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import placeholderImg from '../../assets/background.png';

export function Header() {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderImg;


  return(
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt="Foto de Perfil do Github" />

        <div>
          <span>Bem-vindo(a)</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
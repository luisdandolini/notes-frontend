import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from './styles';
import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';
import placeholderImg from '../../assets/background.png';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeholderImg;

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  return(
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt="Foto de Perfil do Github" />

        <div>
          <span>Bem-vindo(a)</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}
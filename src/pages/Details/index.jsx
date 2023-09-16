import { Container, Links, Content } from './styles';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';
import { api } from '../../services/api';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function Details() {
  const [data, setData] = useState(null)
  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  }

  const deleteNote = async() => {
    try {
      await api.delete(`/notes/${params.id}`)
      alert("Nota deletada com sucesso!");
      navigate("/");
    } catch (error) {
      alert("Erro ao deletar a nota!");
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);

      setData(response.data);
    }

    fetchNote();
  }, [params.id])

  return(
    <Container>
      <Header />

      {
        data &&
        <main>
          <Content>
            <ButtonText title="Excluir nota" onClick={deleteNote} />
            
            <h1>{data.title}</h1>

            <p>{data.descriptions}</p>

            {
              data.links &&
              <Section title ="Links úteis">
                <Links>
                  {
                    data.links.map((link) => (
                      <li key={String(link.id)}>
                        <a href={link.url} target='blank'>{link.url}</a>
                      </li>
                    ))
                  }
                </Links>
              </Section>
            }

            {
              data.tags && 
              <Section title="Marcadores">
                {
                  data.tags.map((tag) => (
                    <Tag key={String(tag.id)} title={tag.name}/>
                  ))
                }
              </Section>
            }

            <Button title="Voltar" onClick={handleBack}/>

          </Content>
        </main>
      }
    </Container>
  )
}
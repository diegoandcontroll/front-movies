import { useEffect, useState } from "react";
import { Banner } from "./components/BannerCard/style";
import { Card } from "./components/Card/style";
import { CardWrapper } from "./components/CardWrapper/style";
import { Container } from "./components/Container/style"
import { ContainerDirector } from "./components/ContainerDirector/style";
import { Description } from "./components/Description/style";
import { Title } from "./components/Title/style";
interface Data{
  id: string;

  title: string;

  banner: string;

  description: string;

  director: string;

  producer: string;
}
function App() {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    async function fetchData(){
      const response = await fetch(`http://localhost:5000/movies?limit=10`);
      const movies = await response.json();
      setData(movies.items)
      
    }
    fetchData();
  },[])
  return (
      <Container>
        <div style={{display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '1.5rem'}}>
          {data.map(item => (
            <CardWrapper key={item.id}>
            <Title>{item.title}</Title>
            <Card >
              <Banner linkImage={item.banner}/>
              <Description >{item.description.slice(0,150)}...</Description>
              <ContainerDirector>
                <span >Director: {item.director}</span>
                <span>Producer: {item.producer}</span>
              </ContainerDirector>
            </Card>
          </CardWrapper>
          ))}
          
        </div>
        <p style={{paddingTop: '4rem', textAlign: 'center'}}>
          Pagination
        </p>
      </Container>
    
  );
}

export default App;

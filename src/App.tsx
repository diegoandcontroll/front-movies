import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
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
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    async function fetchData(){
      const response = await fetch(`http://localhost:5000/movies`);
      const movies = await response.json();
      setData(movies.items)
      
    }
    fetchData();
  },[])

  const moviesPerPage = 10;
  const pagesVisited = pageNumber * moviesPerPage;
  const displayMovies = data.slice(pagesVisited, pagesVisited + moviesPerPage).map((item) => (
          <CardWrapper key={item.id}>
            <Title>{item.title}</Title>
            <Card >
              <Banner linkImage={item.banner}/>
              <Description >{item.description.slice(0,150)}...</Description>
              <ContainerDirector>
                <span >Director: {item.director.slice(0,12)}</span>
                <span>Producer: {item.producer.slice(0, 20)}</span>
              </ContainerDirector>
            </Card>
          </CardWrapper>
  ))
  const pageCount = Math.ceil(data.length / moviesPerPage);
  const changePage = ({selected}: any) => {
    setPageNumber(selected)
  }
  return (
      <Container>

      <div style={{marginBottom: '2rem', padding: '1rem 0'}}>
        <ReactPaginate 
          previousLabel={"🡰"}
          nextLabel={"🡲"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
       </div>
        <div style={{display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', gap: '1.5rem'}}>
          {displayMovies}
        </div>
       
      </Container>
    
  );
}

export default App;

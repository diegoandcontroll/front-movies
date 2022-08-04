import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';

interface MoviesProviderProps {
    children: ReactNode;
}
interface MoviesContextData {
    handlePopulate: () => Promise<void>;
    loading: boolean;
}

export const MoviesContext = createContext<MoviesContextData>(
    {} as MoviesContextData
);

export function MoviesProvider({children}: MoviesProviderProps){
    const [loading, setLoading] = useState(false);
    async function handlePopulate(){
        try{
          setLoading(true)
          const response = await fetch(`http://localhost:5000/movies/data`);
          const movies = await response.json();
          if(movies.length >= 22){
            alert('Poulate movie OK')
            setLoading(false)
          }
          
        }catch(error){
          setLoading(false);
        }finally{
          setLoading(false)
          return document.location.reload()
        }
      }
    return (
        <MoviesContext.Provider value={{ handlePopulate, loading}}>
          {children}
        </MoviesContext.Provider>
    );
}
export function useMovies() {
    const context = useContext(MoviesContext);
    return context;
}
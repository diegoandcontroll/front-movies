import {Banner} from './style';
export type BannerProps = {
    linkImage: string;
}
export const index = ({linkImage}:BannerProps) => {
  return (
    <Banner linkImage={linkImage}/>
  )
}

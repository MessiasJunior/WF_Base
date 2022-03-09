import * as S from './styles'

const Main = ({
  title = 'WeFlink',
  description = 'Elfo é merda'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="IMPORTANTE!!! MAS TO SEM IDEIA PRA EXPLICAR"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main

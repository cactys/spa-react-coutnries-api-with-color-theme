import {
  CardBody,
  CardImage,
  CardList,
  CardListItem,
  CardTitle,
  Wrapper,
} from './styles';

const Card = ({ img, name, info = [] }) => {
  return (
    <Wrapper>
      <CardImage src={img} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardList>
          {info.map((el) => (
            <CardListItem key={el.title}>
              <span>{el.title}</span> {el.description}
            </CardListItem>
          ))}
        </CardList>
      </CardBody>
    </Wrapper>
  );
};

export { Card };

import * as C from './styles';

type ResumeItemProps = {
  title: string;
  Icon: React.ElementType;
  color: string;
  value: number;
};

const ResumeItem: React.FC<ResumeItemProps> = ({ title, Icon, color, value }) => {
  return (
    <C.Container color={color}>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon/>
      </C.Header>
      <C.Total>{value}</C.Total>
    </C.Container>
  );
};

export default ResumeItem;

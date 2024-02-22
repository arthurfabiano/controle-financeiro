import * as C from './styles';
import ResumeItem from "../ResumeItem";
import { FaRegArrowAltCircleUp, FaRegArrowAltCircleDown, FaDollarSign } from 'react-icons/fa';

const Resume = () => {
  return (
    <C.Container>
        <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={1000} color="#a3cfbb"/>
        <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={-1000} color='#f1aeb5'/>
        <ResumeItem title="Total" Icon={FaDollarSign} value={1000} color='#cfe2ff'/>
    </C.Container>
  )
}

export default Resume;
import '../styles/App.scss';
import { useState } from 'react';
import dataApi from '../services/api';
import Create from './Create';

function App() {
  //constantes de estado
  const [designClassCollapsed, setDesignClassCollapsed] = useState('collapsed');
  const [fillClassCollapsed, setFillClassCollapsed] = useState('collapsed');
  const [shareClassCollapsed, setShareClassCollapsed] = useState('collapsed');
  const [dataCard, setDataCard] = useState({
    palette: '1',
    name: '',
    job: '',
    email: '',
    phone: '',
    photo: '',
    linkedin: '',
    github: '',
  });
  const [dataApi, setDataApi] = useState('');

  //funciones manejadoras
  const handleInput = (event) => {
    const inputValue = event.target.value;
    const inputChanged = event.target.name;
    setDataCard({ ...dataCard, [inputChanged]: inputValue });
  };

  const handleCollapsed = (ev) => {
    const targetId = ev.currentTarget.id;
    if (targetId === 'design') {
      designClassCollapsed === 'collapsed'
        ? setDesignClassCollapsed('')
        : setDesignClassCollapsed('collapsed');
    } else if (targetId === 'fill') {
      fillClassCollapsed === 'collapsed'
        ? setFillClassCollapsed('')
        : setFillClassCollapsed('collapsed');
    } else if (targetId === 'share') {
      shareClassCollapsed === 'collapsed'
        ? setShareClassCollapsed('')
        : setShareClassCollapsed('collapsed');
    }
  };

  const handleReset = () => {
    setDataCard({
      palette: '1',
      name: '',
      job: '',
      email: '',
      phone: '',
      linkedin: '',
      github: '',
    });
  };

  //aquí hacer la llamada a la api para enviar los datos
  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    dataApi(dataCard).then((response) => {
      setDataApi(response);
    });
  };

  return (
    <div>
      <Create
        dataCard={dataCard}
        designClassCollapsed={designClassCollapsed}
        fillClassCollapsed={fillClassCollapsed}
        shareClassCollapsed={shareClassCollapsed}
        handleInput={handleInput}
        handleCollapsed={handleCollapsed}
        handleClickCreateCard={handleClickCreateCard}
        handleReset={handleReset}
      />
    </div>
  );
}

export default App;

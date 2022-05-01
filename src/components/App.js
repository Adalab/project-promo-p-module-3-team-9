import '../styles/App.scss';
import { useState } from 'react';
import dataApi from '../services/api';
import Create from './Create';

function App() {
  //constantes de estado
  const [designClass, setDesignClass] = useState('collapsed');
  const [fillClass, setFillClass] = useState('collapsed');
  const [shareClass, setShareClass] = useState('collapsed');

  const [designArrow, setDesignArrow] = useState('fa-transform');
  const [fillArrow, setFillArrow] = useState('fa-transform');
  const [shareArrow, setShareArrow] = useState('fa-transform');

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
  const handleInput = (inputValue, inputChanged) => {
    setDataCard({ ...dataCard, [inputChanged]: inputValue });
  };

  const handleCollapsed = (targetId) => {
    if (targetId === 'design') {
      if (designClass === 'collapsed') {
        setFillClass('collapsed');
        setShareClass('collapsed');
        setFillArrow('fa-transform');
        setShareArrow('fa-transform');
        setDesignClass('');
        setDesignArrow('');
      } else {
        setDesignClass('collapsed');
        setDesignArrow('fa-transform');
      }
    } else if (targetId === 'fill') {
      if (fillClass === 'collapsed') {
        setDesignClass('collapsed');
        setShareClass('collapsed');
        setDesignArrow('fa-transform');
        setShareArrow('fa-transform');
        setFillClass('');
        setFillArrow('');
      } else {
        setFillClass('collapsed');
        setFillArrow('fa-transform');
      }
    } else if (targetId === 'share') {
      if (shareClass === 'collapsed') {
        setDesignClass('collapsed');
        setFillClass('collapsed');
        setFillArrow('fa-transform');
        setDesignArrow('fa-transform');
        setShareClass('');
        setShareArrow('');
      } else {
        setShareClass('collapsed');
        setShareArrow('fa-transform');
      }
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
        designClass={designClass}
        fillClass={fillClass}
        shareClass={shareClass}
        designArrow={designArrow}
        fillArrow={fillArrow}
        shareArrow={shareArrow}
        handleInput={handleInput}
        handleCollapsed={handleCollapsed}
        handleClickCreateCard={handleClickCreateCard}
        handleReset={handleReset}
      />
    </div>
  );
}

export default App;

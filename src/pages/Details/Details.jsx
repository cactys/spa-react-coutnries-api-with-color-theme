import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { BiArrowBack } from 'react-icons/bi';

import { api } from '../../utils/api';
import { Button } from '../../UI/Button/styles';

import { Info } from '../../components/Info/Info';

const Details = () => {
  const [info, setInfo] = useState([]);

  const { name } = useParams();

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    api
      .getCountryInfo(name)
      .then((res) => {
        if (res) setInfo(res[0]);
      })
      .catch((err) => console.error(err));
  }, [name]);

  return (
    <>
      <Button onClick={goBack}>
        <BiArrowBack size={24} /> Back
      </Button>
      {info && <Info {...info} />}
    </>
  );
};

export { Details };

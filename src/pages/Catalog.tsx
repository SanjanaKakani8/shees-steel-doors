import { useNavigate } from 'react-router-dom';
import HomeSearchStation from '../components/HomeSearchStation';
import { useDoors } from '../context/DoorsContext';

export default function Catalog() {
  const navigate = useNavigate();
  const { doors, addDoor, deleteDoor, resetDefaultDoors } = useDoors();

  return (
    <HomeSearchStation
      doors={doors}
      onAddDoor={addDoor}
      onDeleteDoor={deleteDoor}
      onResetDefaultDoors={resetDefaultDoors}
      onTriggerInquiry={() => navigate('/contact')}
      onSelectDoor={(doorId) => navigate(`/catalog/${doorId}`)}
    />
  );
}

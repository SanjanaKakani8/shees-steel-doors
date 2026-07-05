import { useParams, useNavigate, Navigate } from 'react-router-dom';
import DoorDetailPage from '../components/DoorDetailPage';
import { useDoors } from '../context/DoorsContext';

export default function DoorDetails() {
  const { doorId } = useParams<{ doorId: string }>();
  const navigate = useNavigate();
  const { doors } = useDoors();

  const door = doors.find((d) => d.id === doorId);

  if (!door) {
    return <Navigate to="/catalog" replace />;
  }

  return (
    <DoorDetailPage
      door={door}
      initialFinish={null}
      onBack={() => navigate('/catalog')}
    />
  );
}

import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Homes = ({ username, setUserName, room, setRoom, socket }) => {
    const navigate = useNavigate();
    const [localData, setLocalData] = useState([]);
    useEffect(() => {
        localStorage.setItem('dataKey', JSON.stringify(localData));
    }, [localData]);
    const joinRoom = () => {
        if (room !== '' && username !== '') {
            setLocalData(`users`, ['sssssssssssssssssssssss']);
            socket.emit('join_room', { username, room });
            navigate('/chat', { replace: true });
        }

    };
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>{`Glad You're Back!`}</h1>
                <input
                    className={styles.input}
                    placeholder='Username...'
                    onChange={(e) => setUserName(e.target.value)} />

                <select
                    className={styles.input}
                    onChange={(e) => setRoom(e.target.value)}
                >
                    <option>-- Select Room --</option>
                    <option value='General LOBBY'>General Discussion</option>
                    <option value='STUDY LOBBY'>Study Group</option>
                    <option value='GAMING LOBBY'>Gaming Group</option>
                    <option value='MOVIES LOBBY'>Movies Discussion</option>
                </select>

                <button
                    className='btn btn-secondary'
                    style={{ width: '100%' }}
                    onClick={joinRoom}
                >Join Room</button>
            </div>
        </div>
    );
};

export default Homes;
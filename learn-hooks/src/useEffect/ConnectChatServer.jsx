import { useEffect, useState } from "react";
import { createConnection } from "./Chat"
import PropTypes from 'prop-types';

function ChatRoom({ roomId }) {
    const [serverUrl, setServerUrl] = useState('https://localhost:1234');

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connnect();
        return () => {
            connection.disconnnect();
        }
    }, [roomId, serverUrl]);

    return (
        <>
            <label>
                Server URL: {' '}
                <input
                    value={serverUrl}
                    onChange={e => setServerUrl(e.target.value)}
                />
            </label>

            <h1>Welcome to the {roomId} room!</h1>
        </>
    )
}

ChatRoom.propTypes = {
    roomId: PropTypes.string.isRequired,
};

export default function ConnectChatServer() {
    const [roomId, setRoomId] = useState('general');
    const [show, setShow] = useState(false);
    return (
        <>
            <label>
                Choose the chat room: {' '}
                <select
                    value={roomId}
                    onChange={e => setRoomId(e.target.value)}
                >
                    <option value="general">General</option>
                    <option value="travel">Travel</option>
                    <option value="music">Music</option>
                </select>
            </label>

            <button onClick={() => setShow(!show)}>
                {show ? 'Close chat' : 'Open chat'}
            </button>

            {show && <hr />}
            {show && <ChatRoom roomId={roomId} />}
        </>
    )
}
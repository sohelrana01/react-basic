export function createConnection(serverUrl, roomId) {
    return {
        connnect() {
            console.log('✅ Connecting to ' + roomId + 'room at ' + serverUrl + '...');
        },
        disconnnect() {
            console.log('❌ Disconnecting to ' + roomId + 'room at ' + serverUrl);
        }
    }
}
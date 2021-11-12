import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { ZepetoWorldMultiplay } from 'ZEPETO.World'
import { Room, RoomData } from 'ZEPETO.Multiplay'

export default class MessageTest extends ZepetoScriptBehaviour {

    private multiplay: ZepetoWorldMultiplay;
    private Room: Room;

    Start() {
        this.multiplay = this.gameObject.GetComponent<ZepetoWorldMultiplay>();

        this.Room.Send("message", "hello");
    }

}
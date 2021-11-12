import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import { ZepetoWorldMultiplay } from 'ZEPETO.World'
import { Room, RoomData } from 'ZEPETO.Multiplay'
import { Player, State, Vector3 } from 'ZEPETO.Multiplay.Schema'
import { CharacterState, SpawnInfo, ZepetoPlayers } from 'ZEPETO.Character.Controller'
import * as UnityEngine from "UnityEngine";


export default class Starter extends ZepetoScriptBehaviour {
    private multiplay: ZepetoWorldMultiplay;
    private room: Room;

    public static PlayerPosition: Vector3;

    public static PlayerPosition_X: int;
    public static PlayerPosition_Y: int;
    public static PlayerPosition_Z: int;

    public Start() {
        this.multiplay = this.gameObject.GetComponent<ZepetoWorldMultiplay>();

        this.multiplay.RoomCreated += (room: Room) => {
            this.room = room;
        };

        this.multiplay.RoomJoined += (room: Room) => {
            room.OnStateChange += this.OnStateChange;

            room.AddMessageHandler("CatMovingX", (message) => {
                // print server message            

                Starter.PlayerPosition_X = message;
                //console.log(Starter.PlayerPosition);
            });

            room.AddMessageHandler("CatMovingZ", (message) => {
                // print server message            

                Starter.PlayerPosition_Z = message;
                //console.log(Starter.PlayerPosition);
            });
        };

        this.StartCoroutine(this.SendMessageLoop(0.1));
    }

    // ���� Interval Time���� ��(local)ĳ���� transform�� server�� �����մϴ�.
    private * SendMessageLoop(tick: number) {
        while (true) {
            yield new UnityEngine.WaitForSeconds(tick);

            if (this.room != null && this.room.IsConnected) {
                const hasPlayer = ZepetoPlayers.instance.HasPlayer(this.room.SessionId);
                if (hasPlayer) {
                    const myPlayer = ZepetoPlayers.instance.GetPlayer(this.room.SessionId);
                    if (myPlayer.character.CurrentState != CharacterState.Idle)
                        this.SendTransform(myPlayer.character.transform);
                }
            }
        }
    }

    private OnStateChange(state: State, isFirst: boolean) {

        // ù OnStateChange �̺�Ʈ ���� ��, State ��ü �������� �����մϴ�.
        if (isFirst) {

            // [RoomState] ���� Room�� �����ϴ� player �ν��Ͻ� ����
            state.players.ForEach((sessionId: string, player: Player) => this.OnJoinPlayer(sessionId, player));

            // [RoomState] ���� Room�� �����ϴ� player �ν��Ͻ� ����
            state.players.OnAdd += (player: Player, sessionId: string) => this.OnJoinPlayer(sessionId, player);

            // [RoomState] ���� Room���� �����ϴ� player �ν��Ͻ� ����
            state.players.OnRemove += (player: Player, sessionId: string) => this.OnRemovePlayer(sessionId, player);


            // [CharacterController] �� (Local)player �ν��Ͻ� ������ �Ϸ�� ��, �ʱ�ȭ
            ZepetoPlayers.instance.OnAddedLocalPlayer.AddListener(() => {

                const myPlayer = ZepetoPlayers.instance.LocalPlayer.zepetoPlayer;

                myPlayer.character.OnChangedState.AddListener((cur, next) => {
                    this.SendState(next);
                });
            });

            // [CharacterController] �ٸ� player �ν��Ͻ� ������ �Ϸ�� ��, �ʱ�ȭ
            ZepetoPlayers.instance.OnAddedPlayer.AddListener((sessionId: string) => {

                const playerState: Player = this.room.State.players.get_Item(sessionId);

                // [RoomState] player �ν��Ͻ��� state�� ���ŵ� ������ ȣ��˴ϴ�.
                playerState.OnChange += (changedValues) => {
                    const zepetoPlayer = ZepetoPlayers.instance.GetPlayer(sessionId);

                    if (zepetoPlayer.isLocalPlayer === false) {
                        const position = this.ParseVector3(playerState.transform.position);
                        zepetoPlayer.character.MoveToPosition(position);

                        if (playerState.state === CharacterState.JumpIdle || playerState.state === CharacterState.JumpMove)
                            zepetoPlayer.character.Jump();
                    }
                };
            });

        }
    }

    private OnJoinPlayer(sessionId: string, player: Player) {        
        console.log(`[OnJoinPlayer] players - sessionId : ${sessionId}`);

        const spawnInfo = new SpawnInfo();
        const position = this.ParseVector3(player.transform.position);
        const rotation = this.ParseVector3(player.transform.rotation);
        spawnInfo.position = position;
        spawnInfo.rotation = UnityEngine.Quaternion.Euler(rotation);

        const isLocal = this.room.SessionId === player.sessionId;
        ZepetoPlayers.instance.CreatePlayerWithUserId(sessionId, player.zepetoUserId, spawnInfo, isLocal);
    }

    private OnRemovePlayer(sessionId: string, player: Player) {
        console.log(`[OnRemove] players - sessionId : ${sessionId}`);
        ZepetoPlayers.instance.RemovePlayer(sessionId);
    }

    private SendTransform(transform: UnityEngine.Transform) {
        const data = new RoomData();

        const pos = new RoomData();
        pos.Add("x", transform.localPosition.x);
        pos.Add("y", transform.localPosition.y);
        pos.Add("z", transform.localPosition.z);
        data.Add("position", pos.GetObject());

        const rot = new RoomData();
        rot.Add("x", transform.localEulerAngles.x);
        rot.Add("y", transform.localEulerAngles.y);
        rot.Add("z", transform.localEulerAngles.z);
        data.Add("rotation", rot.GetObject());
        this.room.Send("onChangedTransform", data.GetObject());
    }

    private SendState(state: CharacterState) {
        const data = new RoomData();
        data.Add("state", state);
        this.room.Send("onChangedState", data.GetObject());
    }

    private ParseVector3(vector3: Vector3): UnityEngine.Vector3 {
        return new UnityEngine.Vector3
            (
                vector3.x,
                vector3.y,
                vector3.z
            );
    }
}
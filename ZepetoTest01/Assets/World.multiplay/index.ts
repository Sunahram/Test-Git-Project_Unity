import { Sandbox, SandboxOptions, SandboxPlayer } from "ZEPETO.Multiplay";
import { DataStorage } from "ZEPETO.Multiplay.DataStorage";
import { Player, Transform, Vector3 } from "ZEPETO.Multiplay.Schema";

export default class extends Sandbox {

    constructor() {
        super();
    }

    onCreate(options: SandboxOptions) {

        // Room ��ü�� ������ �� ȣ��˴ϴ�.
        // Room ��ü�� ���³� ������ �ʱ�ȭ�� ó�� �Ѵ�.

        this.onMessage("onChangedTransform", (client, message) => {
            const player = this.state.players.get(client.sessionId);

            const transform = new Transform();
            transform.position = new Vector3();
            transform.position.x = message.position.x;
            transform.position.y = message.position.y;
            transform.position.z = message.position.z;

            transform.rotation = new Vector3();
            transform.rotation.x = message.rotation.x;
            transform.rotation.y = message.rotation.y;
            transform.rotation.z = message.rotation.z;

            player.transform = transform;


            //console.log(player.sessionId);
            this.broadcast("CatMovingX", transform.position.x);
            this.broadcast("CatMovingZ", transform.position.z);
            //console.log(player.transform.position.x + ' , ' + player.transform.position.y + ' , ' + player.transform.position.z);
        });

        this.onMessage("onChangedState", (client, message) => {
            const player = this.state.players.get(client.sessionId);
            player.state = message.state;
        });

    }

    async onJoin(client: SandboxPlayer) {

        // schemas.json ���� ������ player ��ü�� ���� �� �ʱⰪ ����.
        console.log(`[OnJoin] sessionId : ${client.sessionId}, HashCode : ${client.hashCode}, userId : ${client.userId}`)

        // ���� Player Storage Load
        const storage: DataStorage = client.loadDataStorage();

        const player = new Player();
        player.sessionId = client.sessionId;

        if (client.hashCode) {
            player.zepetoHash = client.hashCode;
        }
        if (client.userId) {
            player.zepetoUserId = client.userId;
        }

        // storage�� ���� ������ transform�� �����ϴ� �� Ȯ���� ����, �����մϴ�.
        const raw_val = await storage.get("transform") as string;
        const json_val = raw_val != null ? JSON.parse(raw_val) : JSON.parse("{}");

        const transform = new Transform();
        transform.position = new Vector3();
        transform.rotation = new Vector3();

        if (json_val.position) {
            transform.position.x = json_val.position.x;
            transform.position.y = json_val.position.y;
            transform.position.z = json_val.position.z;
        }

        if (json_val.rotation) {
            transform.rotation.x = json_val.rotation.x;
            transform.rotation.y = json_val.rotation.y;
            transform.rotation.z = json_val.rotation.z;
        }

        player.transform = transform;

        // client ��ü�� ���� Ű���� sessionId �� ����ؼ� ���� ��ü�� ����.
        // set ���� �߰��� player ��ü�� ���� ������ Ŭ���̾�Ʈ������ players ��ü�� add_OnAdd �̺�Ʈ�� �߰��Ͽ� Ȯ�� �� �� ����.
        this.state.players.set(client.sessionId, player);
    }

    getTimeSandbox() {
        return Date.now();
    }

    onTick(deltaTime: number): void {
        //  �������� ������ Ÿ�Ӹ��� �ݺ������� ȣ��Ǹ� deltaTime �� �̿��Ͽ� ������ interval �̺�Ʈ�� ������ �� ����.
    }

    async onLeave(client: SandboxPlayer, consented?: boolean) {

        // ���� Player Storage Load
        const storage: DataStorage = client.loadDataStorage();

        const _player = this.state.players.get(client.sessionId);
        const _pos = _player.transform.position;
        const _rot = _player.transform.rotation;

        const _trans = {
            position: { x: _pos.x, y: _pos.y, z: _pos.z },
            rotation: { x: _rot.x, y: _rot.y, z: _rot.z }
        };

        // console.log(`[onLeave] last transform : ${JSON.stringify(_trans)}`);
        // �����ϴ� ������ transform�� json ���·� ������ ����, ������ �� load �մϴ�.
        await storage.set("transform", JSON.stringify(_trans));

        // allowReconnection ������ ���� ���ܿ� ���� connection ���� ó������ �� �� ������ �⺻ ���̵忡���� ��� ����.
        // delete �� player ��ü�� ���� ������ Ŭ���̾�Ʈ������ players ��ü�� add_OnRemove �̺�Ʈ�� �߰��Ͽ� Ȯ�� �� �� ����.
        this.state.players.delete(client.sessionId);
    }
}
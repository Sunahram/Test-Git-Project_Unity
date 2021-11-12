import { Animator, GameObject, Mathf, Quaternion, Vector3, WaitForSeconds } from 'UnityEngine';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'
import ClientRoomEnter from "./ClientRoomEnter"


export default class CatScript extends ZepetoScriptBehaviour {

    public cat: GameObject;
    public PlayerPosition: Vector3;

    public PlayerPosition_X: int;
    public PlayerPosition_Z: int;

    Start() {
        console.log("Test7777");

        this.cat = this.gameObject;

        this.bool = true;
        this.StartCoroutine(this.CatMovingTowardPlayer());

        //this.StartCoroutine(this.CatMoving());
        //this.StartCoroutine(this.RoutineRepeat());

        //this.FollowingCondition = false;
    }

    Update() {
        this.PlayerPosition_X = ClientRoomEnter.PlayerPosition_X;
        this.PlayerPosition_Z = ClientRoomEnter.PlayerPosition_Z;
        //console.log(this.PlayerPosition_X);
        //console.log(this.PlayerPosition_Z);
        
    }

    //Idle
    CatRoutine_0() {
        //console.log("Idle State");
        this.cat.GetComponent<Animator>().SetInteger("state", 0);
    }

    //Walk
    CatRoutine_1() {
        //console.log("Walk State");
        this.cat.GetComponent<Animator>().SetInteger("state", 1);
    }

    //Sit
    CatRoutine_2() {
        //console.log("Sit State");
        this.cat.GetComponent<Animator>().SetInteger("state", 2);
    }

    CatRoutine_2_1() {
        this.cat.GetComponent<Animator>().SetInteger("state", 3);
    }



    public randomPos_X: int;
    public randomPos_Z: int;
    public randomPos_X_sign: int;
    public randomPos_Z_sign: int;

    public target: Vector3;
    public direction: Vector3;
    public rot: Quaternion;
    //Moving Cat
    *CatMoving() {
        while (true) {
            yield null;

            if (this.Random_Routine == 1) {
                this.target = new Vector3(this.randomPos_X * this.randomPos_X_sign * 100, 0, this.randomPos_Z * this.randomPos_Z_sign * 100);
                this.direction = this.target - this.cat.transform.position;
                this.direction.y = 0;

                this.rot = Quaternion.LookRotation(this.direction.normalized);

                this.cat.transform.rotation = this.rot;

                this.cat.transform.position += new Vector3(this.randomPos_X * this.randomPos_X_sign * 0.05, 0, this.randomPos_Z * this.randomPos_Z_sign * 0.05);

                yield new WaitForSeconds(0.1);
            }
        }
    }


    public direction2: Vector3;
    public rot2: Quaternion;
    public bool: boolean;

    public x: int;
    public z: int;

    public x2: int;
    public z2: int;
    public pos: Vector3;
    * CatMovingTowardPlayer() {
        while (true) {
            yield null;

            if (this.bool == true) {
                this.x = this.PlayerPosition_X - this.cat.transform.position.x;
                this.z = this.PlayerPosition_Z - this.cat.transform.position.z;

                this.direction2 = new Vector3(this.x, 0, this.z);
                this.direction2.y = 0;

                this.rot2 = Quaternion.LookRotation(this.direction2.normalized);
                this.cat.transform.rotation = this.rot2;

                this.x2 = this.PlayerPosition_X - 0.01;
                this.z2 = this.PlayerPosition_Z - 0.01;
                this.pos = new Vector3(this.x2, 0, this.z2);

                console.log(Vector3.Distance(this.cat.transform.position, this.pos));
                
                if (Vector3.Distance(this.cat.transform.position, this.pos) <= 2.5) {
                    console.log("stop");
                    this.cat.GetComponent<Animator>().SetInteger("state", 2);
                }
                else {
                    this.cat.transform.position += new Vector3(this.x * 0.05, 0, this.z * 0.05);
                    this.cat.GetComponent<Animator>().SetInteger("state", 1);
                    console.log("go");
                }
                yield new WaitForSeconds(0.1);
            }            
        }
    }

    public FollowingCondition: bool;
    //Following Cat
    *CatFollowing(player) {
        while (true) {
            yield null;

            if (this.FollowingCondition == true) {

            }
        }
    }



    public Random_Routine_Pre: int;
    public Random_Routine: int;
    public Random_RunTime: int;
    //Routine Setting
    *CatRoutine() {
        this.Random_Routine_Pre = this.Random_Routine;
        this.Random_Routine = Math.floor(Math.random() * 3);

        while (this.Random_Routine_Pre == this.Random_Routine) {
            this.Random_Routine = Math.floor(Math.random() * 3);
        }

        //console.log("Routine num : " + this.Random_Routine);

        if (this.Random_Routine == 0) {
            this.CatRoutine_0();
        }
        else if (this.Random_Routine == 1) {
            this.CatRoutine_1();

            this.randomPos_X = Math.random();
            this.randomPos_Z = Math.random();

            this.randomPos_X_sign = Math.random();
            if (this.randomPos_X_sign >= 0.5) {
                this.randomPos_X_sign = 1;
            }
            else {
                this.randomPos_X_sign = -1;
            }

            this.randomPos_Z_sign = Math.random();
            if (this.randomPos_Z_sign >= 0.5) {
                this.randomPos_Z_sign = 1;
            }
            else {
                this.randomPos_Z_sign = -1;
            }
        }
        else if (this.Random_Routine == 2) {
            this.CatRoutine_2();
            yield new WaitForSeconds(3);
            this.CatRoutine_2_1();
        }

        this.StopCoroutine(this.CatRoutine());
    }

    *RoutineRepeat() {
        while (true) {            
            this.StartCoroutine(this.CatRoutine());

            this.Random_RunTime = Math.floor(Math.random() * 10) + 5;
            //console.log("RunTime num : " + this.Random_RunTime);
            yield new WaitForSeconds(this.Random_RunTime);
        }
    }
}
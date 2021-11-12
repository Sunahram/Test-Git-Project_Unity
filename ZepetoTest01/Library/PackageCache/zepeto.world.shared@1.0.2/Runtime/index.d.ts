//# signature=ZEPETO.World.Shared#e27f72bacbfba1fb6f00d6dfb6994e26#0.0.4
// @ts-nocheck
declare module 'ZEPETO.World' {

    import * as UnityEngine from 'UnityEngine';
    import * as System from 'System';
        
    
    class CustomWorldSetting extends WorldSetting {
        
        public constructor();
        
                    
    }
    
    class WorldSetting extends UnityEngine.ScriptableObject {
        
        public zepetoApiHost: string;
        
        public multiplayHost: string;
        
        public multiplayPort: number;
        
        public isSecure: boolean;
        
        public gameSystemHost: string;
        
        public constructor();
        
                    
    }
    
    class WorldService extends System.Object {
        
        public static userId: string;
        
        public static authToken: string;
        
        public static worldId: string;
        
        public static worldVersion: string;
        
        public static worldName: string;
        
        public static setting: WorldSetting;
        
                    
    }
    
    class WorldUtils extends System.Object {
        
        public constructor();
        
        public static Encrypt($plain: string):string;
        
        public static Decrypt($encrypt: string):string;
        
                    
    }
    
    enum ZepetoScreenOrientation { Vertical = 0, Horizontal = 1 }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * A class you can derive from if you want to create objects that don't need to be attached to game objects.
     */
    interface ScriptableObject extends Object {
        
                    
    }
    /**
     * Base class for all objects Unity can reference.
     */
    interface Object extends System.Object {
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Enum extends ValueType {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
}


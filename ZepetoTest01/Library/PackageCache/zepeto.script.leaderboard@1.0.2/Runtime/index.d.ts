//# signature=ZEPETO.Script.Leaderboard#9b8f4cadd09ab53b1a7bd66c5ae3d253#0.0.4
// @ts-nocheck
declare module 'ZEPETO.Script.Leaderboard' {

    import * as System from 'System';
    import * as System_Collections_Generic from 'System.Collections.Generic';
    import * as UnityEngine from 'UnityEngine';
    import * as UnityEngine_Networking from 'UnityEngine.Networking';
    import * as System_Collections from 'System.Collections';
        
    
    class LeaderboardAPI extends System.Object {
        
        public constructor();
        
        public static CreateLeaderboard($createLeaderboardRequest: CreateLeaderboardRequest, $onResult?: System.Action$1<CreateLeaderboardResponse>, $onError?: System.Action$1<string>):void;
        
        public static DeleteLeaderboard($deleteLeaderboardRequest: DeleteLeaderboardRequest, $onResult?: System.Action$1<DeleteLeaderboardResponse>, $onError?: System.Action$1<string>):void;
        
        public static GetLeaderboard($getLeaderboardRequest: GetLeaderboardRequest, $onResult?: System.Action$1<GetLeaderboardResponse>, $onError?: System.Action$1<string>):void;
        
        public static GetAllLeaderboards($getAllLeaderboardsRequest: GetAllLeaderboardsRequest, $onResult?: System.Action$1<GetAllLeaderboardsResponse>, $onError?: System.Action$1<string>):void;
        
        public static DeleteRank($deleteRankRequest: DeleteRankRequest, $onResult?: System.Action$1<DeleteRankResponse>, $onError?: System.Action$1<string>):void;
        
        public static GetRank($getRankRequest: GetRankRequest, $onResult?: System.Action$1<GetRankResponse>, $onError?: System.Action$1<string>):void;
        
        public static GetRangeRank($getRangeRankRequest: GetRangeRankRequest, $onResult?: System.Action$1<GetRangeRankResponse>, $onError?: System.Action$1<string>):void;
        
        public static SetScore($setScoreRequest: SetScoreRequest, $onResult?: System.Action$1<SetScoreResponse>, $onError?: System.Action$1<string>):void;
        
                    
    }
    
    class CreateLeaderboardRequest extends RequestBase {
        
        public leaderboardName: string;
        
        public resetInfoList: ResetInfo[];
        
        public scoreSetType: string;
        
        public sortType: string;
        
        public subScoreLength: number;
        
        public subSortType: string;
        
        public timezoneOffset: number;
        
        public constructor();
        
                    
    }
    
    class RequestBase extends System.Object {
        
        public worldId: string;
        
        public worldVersion: string;
        
        public constructor();
        
                    
    }
    
    class CreateLeaderboardResponse extends ResponseBase {
        
        public leaderboardId: string;
        
        public constructor();
        
                    
    }
    
    class ResponseBase extends System.Object {
        
        public isSuccess: boolean;
        
        public constructor();
        
                    
    }
    
    class DeleteLeaderboardRequest extends RequestBase {
        
        public leaderboardId: string;
        
        public constructor();
        
                    
    }
    
    class DeleteLeaderboardResponse extends ResponseBase {
        
        public constructor();
        
                    
    }
    
    class GetLeaderboardRequest extends RequestBase {
        
        public leaderboardId: string;
        
        public constructor();
        
                    
    }
    
    class GetLeaderboardResponse extends ResponseBase {
        
        public leaderboard: Leaderboard;
        
        public constructor();
        
                    
    }
    
    class GetAllLeaderboardsRequest extends RequestBase {
        
        public constructor();
        
                    
    }
    
    class GetAllLeaderboardsResponse extends ResponseBase {
        
        public leaderboards: Leaderboard[];
        
        public constructor();
        
                    
    }
    
    class DeleteRankRequest extends RequestBase {
        
        public leaderboardId: string;
        
        public member: string;
        
        public prevRanking: boolean;
        
        public reqTimestamp: bigint;
        
        public constructor();
        
                    
    }
    
    class DeleteRankResponse extends ResponseBase {
        
        public constructor();
        
                    
    }
    
    class GetRankRequest extends RequestBase {
        
        public leaderboardId: string;
        
        public members: string[];
        
        public myMember: string;
        
        public prevRanking: boolean;
        
        public reqTimestamp: bigint;
        
        public resetType: string;
        
        public sortType: string;
        
        public constructor();
        
                    
    }
    
    class GetRankResponse extends ResponseBase {
        
        public rankInfo: RankInfo;
        
        public constructor();
        
                    
    }
    
    class GetRangeRankRequest extends RequestBase {
        
        public leaderboardId: string;
        
        public startRank: number;
        
        public endRank: number;
        
        public myMember: string;
        
        public prevRanking: boolean;
        
        public reqTimestamp: bigint;
        
        public resetType: string;
        
        public sortType: string;
        
        public constructor();
        
                    
    }
    
    class GetRangeRankResponse extends ResponseBase {
        
        public rankInfo: RankInfo;
        
        public constructor();
        
                    
    }
    
    class SetScoreRequest extends RequestBase {
        
        public leaderboardId: string;
        
        public member: string;
        
        public prevRanking: boolean;
        
        public reqTimestamp: bigint;
        
        public score: number;
        
        public subScore: number;
        
        public constructor();
        
                    
    }
    
    class SetScoreResponse extends ResponseBase {
        
        public constructor();
        
                    
    }
    
    class Leaderboard extends System.Object {
        
        public createTimestamp: bigint;
        
        public id: string;
        
        public name: string;
        
        public resetInfoList: ResetInfo[];
        
        public scoreSetType: string;
        
        public sortType: string;
        
        public subScoreLength: number;
        
        public subSortType: string;
        
        public timezoneOffset: number;
        
        public constructor();
        
                    
    }
    
    class RankInfo extends System.Object {
        
        public myRank: Rank;
        
        public rankList: Rank[];
        
        public totalRankCount: bigint;
        
        public constructor();
        
                    
    }
    
    class ResetInfo extends System.Object {
        
        public customResetStartTimestamp: bigint;
        
        public day: number;
        
        public hour: number;
        
        public min: number;
        
        public resetType: string;
        
        public sec: number;
        
        public weekDay: string;
        
        public constructor();
        
                    
    }
    
    class Extension extends System.Object {
        
        public static ForEach<T>($sequence: System_Collections_Generic.IEnumerable$1<T>, $action: System.Action$1<T>):void;
        
        public static MinMax($value: number, $min: number, $max: number):number;
        
        public static MinMax($value: number, $min: number, $max: number):number;
        
                    
    }
    
    class HttpAPI extends System.Object {
        
        public constructor();
        
        public static CreateLeaderboard($request: CreateLeaderboardRequest, $onResult?: System.Action$1<CreateLeaderboardResponse>, $onError?: System.Action$1<string>):HttpRequestContainer$1<CreateLeaderboardResponse>;
        
        public static DeleteLeaderboard($request: DeleteLeaderboardRequest, $onResult?: System.Action$1<DeleteLeaderboardResponse>, $onError?: System.Action$1<string>):HttpRequestContainer$1<DeleteLeaderboardResponse>;
        
        public static GetLeaderboard($request: GetLeaderboardRequest, $onResult?: System.Action$1<GetLeaderboardResponse>, $onError?: System.Action$1<string>):HttpRequestContainer$1<GetLeaderboardResponse>;
        
        public static GetAllLeaderboards($request: GetAllLeaderboardsRequest, $onResult?: System.Action$1<GetAllLeaderboardsResponse>, $onError?: System.Action$1<string>):HttpRequestContainer$1<GetAllLeaderboardsResponse>;
        
        public static DeleteRank($request: DeleteRankRequest, $onResult?: System.Action$1<DeleteRankResponse>, $onError?: System.Action$1<string>):HttpRequestContainer$1<DeleteRankResponse>;
        
        public static GetRank($request: GetRankRequest, $onResult?: System.Action$1<GetRankResponse>, $onError?: System.Action$1<string>):HttpRequestContainer$1<GetRankResponse>;
        
        public static GetRangeRank($request: GetRangeRankRequest, $onResult?: System.Action$1<GetRangeRankResponse>, $onError?: System.Action$1<string>):HttpRequestContainer$1<GetRangeRankResponse>;
        
        public static SetScore($request: SetScoreRequest, $onResult?: System.Action$1<SetScoreResponse>, $onError?: System.Action$1<string>):HttpRequestContainer$1<SetScoreResponse>;
        
                    
    }
    
    interface HttpRequestContainer$1<TResponse> extends UnityEngine.CustomYieldInstruction {
        
                    
    }
    
    class Rank extends System.Object {
        
        public extraInfo: string;
        
        public member: string;
        
        public rank: number;
        
        public score: number;
        
        public constructor();
        
                    
    }
    
    class ScoreSetType extends System.Object {
        
        public static MAX: string;
        
        public static MIN: string;
        
        public static NEW: string;
        
        public static ACCUMULATE: string;
        
        public static Array: string[];
        
        public constructor();
        
                    
    }
    
    class WeekDay extends System.Object {
        
        public static MONDAY: string;
        
        public static TUESDAY: string;
        
        public static WEDNESDAY: string;
        
        public static THURSDAY: string;
        
        public static FRIDAY: string;
        
        public static SATURDAY: string;
        
        public static SUNDAY: string;
        
        public static Array: string[];
        
        public constructor();
        
                    
    }
    
    class ResetType extends System.Object {
        
        public static INFINITE: string;
        
        public static DAY: string;
        
        public static WEEK: string;
        
        public static MONTH: string;
        
        public static CUSTOM: string;
        
        public static Array: string[];
        
        public constructor();
        
                    
    }
    
    class SortType extends System.Object {
        
        public static DESC: string;
        
        public static ASC: string;
        
        public static Array: string[];
        
        public constructor();
        
                    
    }
    
    class SubSortType extends System.Object {
        
        public static NONE: string;
        
        public static SEQ_FIRST: string;
        
        public static SEQ_LAST: string;
        
        public static TIME_FIRST: string;
        
        public static TIME_LAST: string;
        
        public static CUSTOM: string;
        
        public static Array: string[];
        
        public constructor();
        
                    
    }
    
    class ServerSetting extends UnityEngine.ScriptableObject {
        
        public scheme: string;
        
        public host: string;
        
        public static get Default(): ServerSetting;
        
        public constructor();
        
                    
    }
    
    class MonoSingleton extends UnityEngine.MonoBehaviour {
        
        public static get Instance(): MonoSingleton;
        
        public constructor();
        
        public static HasInstance():boolean;
        
        public static Instantiate():void;
        
                    
    }
    
    class Http extends System.Object {
        
        public constructor();
        
        public static Delete<TResponse>($apiEndpoint: string, $onResult?: System.Action$1<TResponse>, $onError?: System.Action$1<string>, $requestHeaders?: System_Collections_Generic.Dictionary$2<string, string>, $queryString?: System_Collections_Generic.Dictionary$2<string, string>, $serverSetting?: ServerSetting):HttpRequestContainer$1<TResponse>;
        
        public static Get<TResponse>($apiEndpoint: string, $onResult?: System.Action$1<TResponse>, $onError?: System.Action$1<string>, $requestHeaders?: System_Collections_Generic.Dictionary$2<string, string>, $queryString?: System_Collections_Generic.Dictionary$2<string, string>, $serverSetting?: ServerSetting):HttpRequestContainer$1<TResponse>;
        
        public static Post<TResponse>($apiEndpoint: string, $postData: string, $onResult?: System.Action$1<TResponse>, $onError?: System.Action$1<string>, $requestHeaders?: System_Collections_Generic.Dictionary$2<string, string>, $queryString?: System_Collections_Generic.Dictionary$2<string, string>, $serverSetting?: ServerSetting, $json?: boolean):HttpRequestContainer$1<TResponse>;
        
        public static Post<TResponse>($apiEndpoint: string, $multipartFormSections: System_Collections_Generic.List$1<UnityEngine_Networking.IMultipartFormSection>, $onResult?: System.Action$1<TResponse>, $onError?: System.Action$1<string>, $requestHeaders?: System_Collections_Generic.Dictionary$2<string, string>, $queryString?: System_Collections_Generic.Dictionary$2<string, string>, $serverSetting?: ServerSetting):HttpRequestContainer$1<TResponse>;
        
        public static Put<TResponse>($apiEndpoint: string, $onResult?: System.Action$1<TResponse>, $onError?: System.Action$1<string>, $requestHeaders?: System_Collections_Generic.Dictionary$2<string, string>, $queryString?: System_Collections_Generic.Dictionary$2<string, string>, $serverSetting?: ServerSetting):HttpRequestContainer$1<TResponse>;
        
        public static Put<TResponse>($apiEndpoint: string, $bodyData: string, $onResult?: System.Action$1<TResponse>, $onError?: System.Action$1<string>, $requestHeaders?: System_Collections_Generic.Dictionary$2<string, string>, $queryString?: System_Collections_Generic.Dictionary$2<string, string>, $serverSetting?: ServerSetting):HttpRequestContainer$1<TResponse>;
        
        public static SetBaseHeader($headers: System_Collections_Generic.Dictionary$2<string, string>):System_Collections_Generic.Dictionary$2<string, string>;
        
        public static SetAPIBaseHeader($headers: System_Collections_Generic.Dictionary$2<string, string>, $request: RequestBase):System_Collections_Generic.Dictionary$2<string, string>;
        
                    
    }
    
    class HttpExtension extends System.Object {
        
        public static SetRequestHeader($unityWebRequest: UnityEngine_Networking.UnityWebRequest, $requestHeaders: System_Collections_Generic.Dictionary$2<string, string>):void;
        
                    
    }
    
    class UnityHttp extends System.Object {
        
        public constructor();
        
        public static Delete($uri: string, $requestHeaders?: System_Collections_Generic.Dictionary$2<string, string>, $onResult?: System.Action$1<UnityEngine_Networking.UnityWebRequest>, $onError?: System.Action$1<string>):void;
        
        public static Get($uri: string, $requestHeaders?: System_Collections_Generic.Dictionary$2<string, string>, $onResult?: System.Action$1<UnityEngine_Networking.UnityWebRequest>, $onError?: System.Action$1<string>):void;
        
        public static Post($uri: string, $postData: string, $requestHeaders?: System_Collections_Generic.Dictionary$2<string, string>, $onResult?: System.Action$1<UnityEngine_Networking.UnityWebRequest>, $onError?: System.Action$1<string>, $json?: boolean):void;
        
        public static Post($uri: string, $multipartFormSections: System_Collections_Generic.List$1<UnityEngine_Networking.IMultipartFormSection>, $requestHeaders?: System_Collections_Generic.Dictionary$2<string, string>, $onResult?: System.Action$1<UnityEngine_Networking.UnityWebRequest>, $onError?: System.Action$1<string>):void;
        
        public static Put($uri: string, $requestHeaders?: System_Collections_Generic.Dictionary$2<string, string>, $onResult?: System.Action$1<UnityEngine_Networking.UnityWebRequest>, $onError?: System.Action$1<string>):void;
        
        public static Put($uri: string, $bodyData: string, $requestHeaders?: System_Collections_Generic.Dictionary$2<string, string>, $onResult?: System.Action$1<UnityEngine_Networking.UnityWebRequest>, $onError?: System.Action$1<string>):void;
        
                    
    }
    
    class UtilImpl extends System.Object {
        
        public constructor();
        
                    
    }
    
    type OnStartBackgroundTask = (update: System_Collections.IEnumerator, end: System.Action, error: System.Action$1<System.Exception>) => void;
    var OnStartBackgroundTask: {new (func: (update: System_Collections.IEnumerator, end: System.Action, error: System.Action$1<System.Exception>) => void): OnStartBackgroundTask;}
    
    class Util extends System.Object {
        
        public static onStartBackgroundTask: OnStartBackgroundTask;
        
        public constructor();
        
        public static StartBackgroundTask($update: System_Collections.IEnumerator, $end?: System.Action, $error?: System.Action$1<System.Exception>):void;
        
                    
    }
    
}
declare module 'System' {

        
    
    interface Object {
        
                    
    }
    
    interface Void extends ValueType {
        
                    
    }
    
    interface ValueType extends Object {
        
                    
    }
    
    type Action$1<T> = (obj: T) => void;
    
    type MulticastDelegate = (...args:any[]) => any;
    var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
    
    interface Delegate extends Object {
        
                    
    }
    
    interface String extends Object {
        
                    
    }
    
    interface Array extends Object {
        
                    
    }
    
    interface Int32 extends ValueType {
        
                    
    }
    
    interface Boolean extends ValueType {
        
                    
    }
    
    interface Int64 extends ValueType {
        
                    
    }
    
    interface Single extends ValueType {
        
                    
    }
    
    interface Double extends ValueType {
        
                    
    }
    
    type Action = () => void;
    var Action: {new (func: () => void): Action;}
    
    interface Exception extends Object {
        
                    
    }
    
    interface IAsyncResult {
        
                    
    }
    
    type AsyncCallback = (ar: IAsyncResult) => void;
    var AsyncCallback: {new (func: (ar: IAsyncResult) => void): AsyncCallback;}
    
    interface IntPtr extends ValueType {
        
                    
    }
    
    interface Int32 {
        /** @extension ZEPETO.Script.Leaderboard.Extension */
        MinMax($min: number, $max: number):number;
        
                    
    }
    
    interface Single {
        /** @extension ZEPETO.Script.Leaderboard.Extension */
        MinMax($min: number, $max: number):number;
        
                    
    }
    
}
declare module 'System.Collections.Generic' {

    import * as System from 'System';
        
    
    interface IEnumerable$1<T> {
        
                    
    }
    
    interface Dictionary$2<TKey,TValue> extends System.Object {
        
                    
    }
    
    interface List$1<T> extends System.Object {
        
                    
    }
    
    interface IEnumerable$1 {
        /** @extension ZEPETO.Script.Leaderboard.Extension */
        ForEach<T>($action: System.Action$1<T>):void;
        
                    
    }
    
}
declare module 'UnityEngine' {

    import * as System from 'System';
        
    /**
     * Base class for custom yield instructions to suspend coroutines.
     */
    interface CustomYieldInstruction extends System.Object {
        
                    
    }
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
    /**
     * MonoBehaviour is the base class from which every Unity script derives.
     */
    interface MonoBehaviour extends Behaviour {
        
                    
    }
    /**
     * Behaviours are Components that can be enabled or disabled.
     */
    interface Behaviour extends Component {
        
                    
    }
    /**
     * Base class for everything attached to GameObjects.
     */
    interface Component extends Object {
        
                    
    }
    
}
declare module 'UnityEngine.Networking' {

    import * as System from 'System';
    import * as System_Collections_Generic from 'System.Collections.Generic';
        
    /**
     * An interface for composition of data into multipart forms.
     */
    interface IMultipartFormSection {
        
                    
    }
    /**
     * The UnityWebRequest object is used to communicate with web servers.
     */
    interface UnityWebRequest extends System.Object {
        
                    
    }
    
    interface UnityWebRequest {
        /** @extension ZEPETO.Script.Leaderboard.HttpExtension */
        SetRequestHeader($requestHeaders: System_Collections_Generic.Dictionary$2<string, string>):void;
        
                    
    }
    
}
declare module 'System.Collections' {

        
    
    interface IEnumerator {
        
                    
    }
    
}


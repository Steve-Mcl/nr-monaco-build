
interface NodeMessage {
    topic?: string;
    payload?: any;
    _msgid?: string;
    [other: any]: any; //permit other properties
}

/** @type {NodeMessage} the `msg` object */
var msg: NodeMessage;
/** @type {string} the id of the incoming `msg` (alias of msg._msgid) */
const __msgid__:string;

/**
 * @typedef NodeStatus
 * @type {object}
 * @property {string} [fill] The fill property can be: red, green, yellow, blue or grey.
 * @property {string} [shape] The shape property can be: ring or dot.
 * @property {string} [text] The text to display
 */
interface NodeStatus {
    /** The fill property can be: red, green, yellow, blue or grey */
    fill?: string,
    /** The shape property can be: ring or dot */
    shape?: string,
    /** The text to display */
    text?: string
}

declare class node {
    /** 
    * Send 1 or more messages asynchronously 
    * @param {object | object[]} msg  The msg object 
    * @param {Boolean} [clone=true]  Flag to indicate the `msg` should be cloned. Default = `true`   
    * @example Send 1 msg to output 1 
    * ```javascript 
    * node.send({ payload: "a" }); 
    * ``` 
    * @example Send 2 msg to 2 outputs 
    * ```javascript 
    * node.send([{ payload: "output1" }, { payload: "output2" }]); 
    * ``` 
    * @example Send 3 msg to output 1 
    * ```javascript 
    * node.send([[{ payload: 1 }, { payload: 2 }, { payload: 3 }]]); 
    * ``` 
    * @see node-red documentation [writing-functions: sending messages asynchronously](https://nodered.org/docs/user-guide/writing-functions#sending-messages-asynchronously) 
    */ 
    static send(msg:object, clone:Boolean=true);
    /** Inform runtime this instance has completed its operation */
    static done();
    /** Send an error to the console and debug side bar. Include `msg` in the 2nd parameter to trigger the catch node.  */
    static error(err:string|Error, msg:object=null);
    /** Log a warn message to the console and debug sidebar */
    static warn(warning:string|Object);
    /** Log an info message to the console (not sent to sidebar)' */
    static log(info:string|Object);
    /** Set the status icon and text underneath the node.
    * @param {NodeStatus} status - The status object `{fill, shape, text}`
    * @example clear node status
    * ```javascript 
    * node.status({});
    * ```
    * @example set node status to red ring with text
    * ```javascript 
    * node.status({fill:"red",shape:"ring",text:"error"})
    * ```
    * @see node-red documentation [writing-functions: adding-status](https://nodered.org/docs/user-guide/writing-functions#adding-status)
    */
    static status(status:NodeStatus);
    /** the id of this node */
    public readonly id:string;
    /** the name of this node */
    public readonly name:string;
    /** the number of outputs of this node */
    public readonly outputCount:Number;
}
declare class context {
    /** Get a value from context */
    static get(name:string, store:string="default");
    /** Store a value in context */
    static set(name:string, value:Any, store:string="default");
    /** Get an array of the keys in the context store */
    static keys(store:string="default"):Array ;
}
declare class flow {
    /** Get a value from flow context */
    static get(name:string, store:string="default");
    /** Store a value in flow context */
    static set(name:string, value:Any, store:string="default");
    /** Get an array of the keys in the flow context store */
    static keys(store:string="default"):Array ;
}
declare class global {
    /** Get a value from global context */
    static get(name:string, store:string="default");
    /** Store a value in global context */
    static set(name:string, value:Any, store:string="default");
    /** Get an array of the keys in the global context store */
    static keys(store:string="default"):Array ;
}

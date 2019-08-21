export interface State {
    accepted?: boolean;
    declined?: boolean;
    pending?: boolean;
 }
 
 export interface Request {
    rid: string;
    name: string;
    nic: string;
    job: string;
    age: string;
    address: string;
    doc: string;
    reson: string;
    status: State;
 } 
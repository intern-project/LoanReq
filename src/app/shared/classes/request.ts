export interface Request {
    rid: string;
    name: string;
    nic: string;
    job: string;
    age: string;
    address: string;
    doc: string;
    reason: string;
    contact: string;
    duration: string;
    amount: string;
    accepted?: boolean;
    declined?: boolean;
    pending?: boolean;
 }

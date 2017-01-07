export default class AuthSession {

    mid: number;
    secret: string;
    sid: string;
    sig: string;

    constructor(mid: number, secret: string, sid: string, sig: string) {

        this.mid = mid;
        this.secret = secret;
        this.sid = sid;
        this.sig = sig;
    }
}

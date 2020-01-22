import { DomSanitizer } from '@angular/platform-browser';

export class OTPForm {

    public _otpid: number;
    public _otpNumber: string;
    

    // Constructor
    constructor(_otpid: number, _otpNumber: string) {

        console.log('object ctreated');
        this._otpNumber = _otpNumber;
        this._otpid = _otpid;

    }


    




    //Getter and setters
    public get otpid(): number {
        return this._otpid;
    }
    public set otpid(value: number) {
        this._otpid = value;
    }

   // Getters amd setters
   public get otpNumber(): string {
    return this._otpNumber;
   }
   public set otpNumber(value: string) {
    this._otpNumber = value;
}


}

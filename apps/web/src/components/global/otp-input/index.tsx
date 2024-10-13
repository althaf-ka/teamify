import React from "react";
import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";

interface OTPInputProps {
  otp: string;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
}

function OTPInput({ otp, setOtp }: OTPInputProps) {
  return (
    <InputOTP
      maxLength={6}
      onChange={(otpNum) => {
        setOtp(otpNum);
      }}
      value={otp}
    >
      <div className="flex gap-3">
        <div>
          <InputOTPSlot index={0} />
        </div>
        <div>
          <InputOTPSlot index={1} />
        </div>
        <div>
          <InputOTPSlot index={2} />
        </div>
        <div>
          <InputOTPSlot index={3} />
        </div>
        <div>
          <InputOTPSlot index={4} />
        </div>
        <div>
          <InputOTPSlot index={5} />
        </div>
      </div>
    </InputOTP>
  );
}

export default OTPInput;

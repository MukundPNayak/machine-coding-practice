import { useState } from "react";
import OTPInput from "./components/otpInput";
import PhoneInput from "./components/phoneInput";

function App() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [isOTPVisible, setIsOTPVisble] = useState(false);

  return (
    <div className="App">
      {!isOTPVisible && (
        <PhoneInput
          setIsOTPVisble={setIsOTPVisble}
          phone={phone}
          setPhone={setPhone}
          error={error}
          setError={setError}
        />
      )}
      {isOTPVisible && (
        <OTPInput length={4} setIsOTPVisble={setIsOTPVisble} />
      )}
    </div>
  );
}

export default App;

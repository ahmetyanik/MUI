import "./App.css";
import { MuiAutocomplete } from "./components/MuiAutocomplete";
import { MuiButtons } from "./components/MuiButtons";
import { MuiCheckBox } from "./components/MuiCheckBox";
import { MuiRadioButton } from "./components/MuiRadioButton";
import { MuiRating } from "./components/MuiRating";
import { MuiSelect } from "./components/MuiSelect";
import { MuiSwitch } from "./components/MuiSwitch";
import { MuiTextField } from "./components/MuiTextField";
// import MuiTypography from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      {/* <MuiTypography/> */}
      {/* <MuiButtons/> */}
      {/* <MuiTextField/> */}
      {/* <MuiSelect/> */}
      {/* <MuiRadioButton /> */}
      {/* <MuiCheckBox /> */}
      {/* <MuiSwitch /> */}
      {/* <MuiRating /> */}
      <MuiAutocomplete />
    </div>
  );
}

export default App;

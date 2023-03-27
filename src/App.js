import { useState } from "react";
import SelectComponent from "./SelectComponent";
import "./styles.css";

const options = [
  { key: 1, value: "Test 1" },
  { key: 2, value: "Test 2" },
  { key: 3, value: "Test 3" },
  { key: 4, value: "Test 4" }
];
export default function App() {
    const [selectedPickup, setSelectedPickup] = useState("");
    const [selectedDropoff, setSelectedDropoff] = useState("");
    return (
    
    <div className="App">
        <h1>Uber/Lyft Price Estimator</h1>

        <div className="pickup-selector">
        <SelectComponent
            options={options}
            onChange={(item) => setSelectedPickup(item)}
            selectedKey={selectedPickup}
            placeholder={"Pickup"}
        />
        </div>

        <div className="dropoff">
        <SelectComponent
            options={options}
            onChange={(item) => setSelectedDropoff(item)}
            selectedKey={selectedDropoff}
            placeholder={"Dropoff"}
        />
        </div>

        
    </div>
  );
}

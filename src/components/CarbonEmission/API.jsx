import React from "react";
import { POST } from "../../../utils/request";

export const homeElec = async (val, setcalcHomeElec) => {
  const [err, setErr] = useState("");
  try {
    const body = JSON.stringify({
      emission_factor: {
        activity_id: "electricity-energy_source_grid_mix",
      },
      parameters: {
        energy: parseInt(val),
        energy_unit: "kWh",
      },
    });

    const response = await POST(body);

    if (response.ok) {
      const result = await response.json();

      console.log(result.constituent_gases.co2e_total);
      setcalcHomeElec(result.constituent_gases.co2e_total);
    }

    response.json().then((text) => {
      console.log(text);
    });
  } catch (err) {
    setErr(err.message);
  } finally {
  }
};

export const homeGas = async (val, setcalcHomeGas) => {
  try {
    const body = JSON.stringify({
      emission_factor: {
        activity_id: "heat-and-steam-type_cooking_natural_gas",
      },
      parameters: {
        energy: parseInt(val),
        energy_unit: "kWh",
      },
    });

    const response = await POST(body);

    if (response.ok) {
      const result = await response.json();

      console.log(result.constituent_gases.co2e_total);
      setcalcHomeGas(result.constituent_gases.co2e_total);
    }

    response.json().then((text) => {
      console.log(text);
    });
  } catch (err) {
    setErr(err.message);
  } finally {
  }
};
export const homeWood = async (val, setcalcHomeWood) => {
  try {
    const body = JSON.stringify({
      emission_factor: {
        activity_id: "heat-and-steam-type_wood_logs",
      },
      parameters: {
        energy: parseInt(val),
        energy_unit: "kWh",
      },
    });

    const response = await POST(body);

    if (response.ok) {
      const result = await response.json();

      console.log(result.constituent_gases.co2e_total);
      setcalcHomeWood(result.constituent_gases.co2e_total);
    }

    response.json().then((text) => {
      console.log(text);
    });
  } catch (err) {
    setErr(err.message);
  } finally {
  }
};

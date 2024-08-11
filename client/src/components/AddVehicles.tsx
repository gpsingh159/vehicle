import { useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { ADD_VEHICAL } from "./gqloperation/mutations";
import { Link, useNavigate } from "react-router-dom";
import { flatNumbers } from "../flatData/flatNumbers";
import "../App.css";

type VehicalType = {
  user_name?: string;
  vehical_number: string;
  mobile_number: string;
  flat_number: string;
  by?: string;
};
const AddVehicles = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<VehicalType>({ user_name: "", vehical_number:'',mobile_number:'',flat_number:'' });
  // const navigate = useNavigate();
  const [addVehicalFunction, { data, loading, error }] = useMutation(ADD_VEHICAL, {
    onCompleted: () => {
       navigate("/")
    },
    refetchQueries: ["Vehicals"]
  });
  if (loading) return <h1>Loading</h1>;

  const inputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("formData");
    console.log(formData);
    addVehicalFunction({    
      variables: {
        vehical: formData
      },
    });
  };

  

return (
    <>
      <div className="container my-container">
        <div className="card card-panel hoverable ">
          {error && <div className="red card-panel">{error.message}</div>}
          {data && <div className="green card-panel">{data.vehical  }</div>}
          <div className="cart-content">
            <span className="card-title">Add Vehical Details</span>
            <form action="" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="user_name"
                onChange={inputChange}
                required
              />
              <input
                type="text"
                placeholder="Enter Vehical Number"
                name="vehical_number"
                onChange={inputChange}
                required
              />

                <input
                type="text"
                placeholder="Enter mobile Number"
                name="mobile_number"
                onChange={inputChange}
                required
              />

              <select   onChange={inputChange}  className="browser-default" name="flat_number"  style={{padding:"3px",color:"gray"}}>
                <option value="disabled">Choose Flat Number </option>
                {flatNumbers.map((flat) => (
                  <option key={flat.id} value={flat.flat_number}>
                    {flat.flat_number}
                  </option>
                ))}
              </select>

              <button
                className="btn #673ab7 deep-purple waves-effect waves-light"
                type="submit"
              >
                Submit
              </button>

              <Link className="right" to="/">
                Search Vehicals
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddVehicles;

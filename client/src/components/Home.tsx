import { useQuery } from "@apollo/client";
import { GET_ALL_VEHICAL } from "./gqloperation/queries";

type VehicalType = {
  user_name?: string;
  vehical_number: string;
  mobile_number: string;
  flat_number: string;
  by?: string;
};

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_VEHICAL, {
    fetchPolicy: "cache-and-network",
  });

  if (loading) return <h1>Loading</h1>;
  if (error) {
    console.log(error.message);
  }

  if (!data?.vehicals?.length) {
    console.log(data);
    return <h5>No Vehicals are available.</h5>;
  }
  console.log("data get ", data);

  return (
    <>
      <div className="container my-container">
        <div className="card card-panel hoverable ">
          <span className="card-title"><b>All Vehicals Details</b></span>
          <div className="cart-content">
            <input type="text" placeholder="Search Vehical" name="search" id="" />
            <br />
            <table style={{ maxWidth: "500px" }}>
              <tr>
                <th>User Name</th>
                <th>Vehical Number</th>
                <th>Flat Number</th>
                <th>Mobile Nunber</th>
              </tr>

              {data.vehicals.map((v: VehicalType, i: number) => {
                return (
                  
                    <tr key={i}>
                      <td>{v.user_name ?? "Guest"}</td>
                      <td>{v.vehical_number}</td>
                      <td>{v.mobile_number}</td>
                      <td>{v.flat_number}</td>
                    </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

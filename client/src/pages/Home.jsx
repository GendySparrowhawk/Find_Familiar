import { NavLink } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

function Home() {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;



  return (

    <div>
        <h1>Welcome Home</h1>
    </div>
    
  )
}


export default Home;
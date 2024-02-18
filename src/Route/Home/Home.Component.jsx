import Directory from "../../Component/Directory/Directory.component";
import { Outlet } from "react-router-dom";
const categori = [
  {
    "id": 46246824685468,
    "title": "HATS",
    "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
  },
  {
    "id": 26216848,
    "title": "JACKETS",
    "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
  },
  {
    "id": 799241658748,
    "title": "SNEAKERS",
    "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
  },
  {
    "id": 8424682,
    "title": "WOMENS",
    "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
  },
  {
    "id": 4682468,
    "title": "MENS",
    "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
  }
]
const Home = ()=> {
  return (
    <div>
    <Outlet />
    <Directory categori={categori} />
    </div>
  )
}

export default Home;

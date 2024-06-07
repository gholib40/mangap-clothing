import DirectoryItem from '../directory-item/directory-item.component'
import './Directory.styles.scss'

const categori = [
    {
      "id": 46246824685468,
      "title": "HATS",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
      route: 'shop/hats',
    },
    {
      "id": 26216848,
      "title": "JACKETS",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
       route: 'shop/jackets',
    },
    {
      "id": 799241658748,
      "title": "SNEAKERS",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
       route: 'shop/sneakers',
    },
    {
      "id": 8424682,
      "title": "WOMENS",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
       route: 'shop/womens',
    },
    {
      "id": 4682468,
      "title": "MENS",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
       route: 'shop/mens',
    }
  ]

const Directory = ()=> {
    return (
        <div className="directory-container" >
        {categori.map((categories)=> {
            return <DirectoryItem key={categories.id} category={categories} />
            
        })}
        </div>
    )
}

export default Directory
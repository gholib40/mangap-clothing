import DirectoryItem from '../Directory-item/directory-item.component'
import './Directory.styles.scss'

const Directory = ({categori})=> {
    return (
        <div className="directory-container" >
        {categori.map((categories)=> {
            return <DirectoryItem key={categories.id} category={categories} />
            
        })}
        </div>
    )
}

export default Directory
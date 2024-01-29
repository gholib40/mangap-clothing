import Category from "../Category/Category.component"
import './Directory.styles.scss'

const Directory = ({categori})=> {
    return (
        <div className="directory-container">
        {categori.map((categories)=> {
            return <Category category={categories} />
        })}
        </div>
    )
}

export default Directory
import { categories } from "../utils/Constants"

import './css/index.css'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
    <div className='Sidebar'>
        {categories.map((category) => (
            <button className="sidebar-main-btn"
                onClick={() => setSelectedCategory(category.name)}
                key={category.name}
            >
            <span
                className={ category.name === selectedCategory ? 'selected-icon' : 'cat-icon'}
            >
                {category.icon}
            </span>
            <span className={category.name === selectedCategory ? 'selected-cat-name' : 'cat-name'}>{category.name}</span>
        </button>
        ))}
    </div>
  )

export default Sidebar
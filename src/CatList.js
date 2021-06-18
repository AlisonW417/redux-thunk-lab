import React, {Component} from 'react'

class CatList extends Component {
    render() {
        const cats = this.props.catPics.map(cat => {
           return <img key={cat.id} src={cat.url} alt={cat.id} />
        })
        return (
            <div>
                {cats}
            </div>
        )
    }
}

export default CatList;
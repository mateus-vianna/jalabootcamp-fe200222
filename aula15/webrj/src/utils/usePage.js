import Home from '../pages/home'
import AddDog from '../pages/addDog'
import ListDog from '../pages/listDog'
import News from '../pages/news'

const changePage = (index) => {
        switch (index) {
            case 0:
                return <Home />
            case 1:
                return <AddDog />
            case 2:
                return <ListDog />
            case 3:
                return <News />
            default:
                return <Home />
        }
}

export default changePage
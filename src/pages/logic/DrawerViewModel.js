import BaseViewModel from 'pages/logic/BaseViewModel'

import StoryCache from 'cache/StoryCache'
import BlogCache from 'cache/BlogCache'

export const TEXT_TYPE = {
    STORY: 'story',
    BLOG: 'blog'
}

class DrawerState {
    listItems = []
    type = null
    toggleDrawer = null
    closeDrawer = null
    expanded = false
}

export default class DrawerViewModel extends BaseViewModel {
    defaultState() {
        return new DrawerState()
    }

    start() {        
        const newState = this.newState({
            toggleDrawer: this.toggleDrawer
        }) 
        
        this.setState(newState)
    }

    toggleDrawer = (type) => {
        const safeType = type || this.state.type
        
        console.log('safe', safeType)
        console.log('state', this.state.type)

        // If the drawer is open for stories and they user selected blogs, keep the drawer open
        const expanded = (this.state.expanded && this.state.type !== safeType) ? true : !this.state.expanded

        this.setState({
            expanded: expanded,
            type: safeType,
            listItems: this.getListItems(safeType)
        })
    }

    closeDrawer = () => {
        this.setState({ 
            expanded: false
        })
    }

    getListItems(type) {
        if(type === "story") {
            return StoryCache.getStoryList()
        } else if(type === "blog") {
            return BlogCache.getBlogList()
        } else { 
            return []
        }
    }

}
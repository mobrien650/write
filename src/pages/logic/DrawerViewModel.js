import BaseViewModel from 'pages/logic/BaseViewModel'

import StoryCache from 'cache/StoryCache'
import BlogCache from 'cache/BlogCache'

import TEXT_TYPE from 'pages/MediaTypes'

class DrawerState {
    listItems = []
    type = null
    toggleDrawer = null
    closeDrawer = null
    expanded = false
    storyCount = 0
    blogCount = 0
}

export default class DrawerViewModel extends BaseViewModel {
    defaultState() {
        return new DrawerState()
    }

    start() {        
        const newState = this.newState({
            storyCount: StoryCache.getStoryList().length,
            blogCount: BlogCache.getBlogList().length,
            toggleDrawer: this.toggleDrawer,
            closeDrawer: this.closeDrawer
        }) 
        
        this.setState(newState)
    }

    toggleDrawer = (type) => {
        const safeType = type || this.state.type
        
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
        if(type === TEXT_TYPE.STORY) {
            return StoryCache.getStoryList()
        } else if(type === TEXT_TYPE.BLOG) {
            return BlogCache.getBlogList()
        } else { 
            return []
        }
    }

}
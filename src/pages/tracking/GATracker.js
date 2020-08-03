import ReactGA from 'react-ga'
import { v4 as uuidv4 } from 'uuid';

export const CATEGORIES = {
    PageViewComplete: 'PageViewComplete',
    StartStory: 'StartStory'
}

export const DIMENSION = {
    TimeOnPage: 'TIME_ON_PAGE',
    Story: 'STORY',
    Story_Progress: 'STORY_PROGRESS'
}

class GATracker {
    constructor() {
        ReactGA.initialize('UA-72978549-2', {
            gaOptions: `${uuidv4()}-${new Date().getTime()}`
        })        
        ReactGA.set({ dimension1: DIMENSION.TimeOnPage})
        ReactGA.set({ dimension2: DIMENSION.Story})
        ReactGA.set({ dimension3: DIMENSION.Story_Progress})
        
    }

    trackPage() {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    sendEvent(category, action, interaction, payload) {
        ReactGA.event({
            category,
            action,
            interaction: !interaction,
        }, payload)
    }
}

export default new GATracker()
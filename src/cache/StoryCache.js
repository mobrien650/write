class StoryCache {
    constructor() {
        this.stories = {}
        this.storyList = null
    }

    fetchStory(storyName) {
        return new Promise(async (complete) => { 
            if(this.stories[storyName]) {
                complete(this.stories[storyName])
            }

            let story = null
            try {
                story = require(`../writings/story/${storyName}.md`)
            } catch {
                return complete(`Could not find ${storyName}`)
            }

            return fetch(story)
                .then(response => {
                    return response.text()
                })
                .then(text => {
                    this.stories[storyName] = text
                    complete(text)
                })
        })
    }

    getStoryList() {
        if(this.storyList == null) {
            let stories = null
            try {
                stories = require(`../writings/writing_api.json`)
            } catch {
                stories = { "data": [] }
            }
            this.storyList = stories.data
        }

        return this.storyList
    }
}

export default new StoryCache()
class BlogCache {
    constructor() {
        this.blogs = {}
        this.blogList = null
    }

    fetchBlog(blogName) {
        return new Promise(async (complete) => { 
            if(this.blogs[blogName]) {
                complete(this.blogs[blogName])
            }

            let blog = null
            try {
                blog = require(`../writings/blog/${blogName}.md`)
            } catch {
                return complete(`Could not find ${blogName}`)
            }

            return fetch(blog)
                .then(response => {
                    return response.text()
                })
                .then(text => {
                    this.blogs[blogName] = text
                    complete(text)
                })
        })
    }

    getBlogList() {
        if(this.blogList == null) {
            let blogs = null
            try {
                blogs = require(`../writings/blog_api.json`)
            } catch {
                blogs = { "data": [] }
            }
            this.blogList = blogs.data
        }

        return this.blogList
    }
}

export default new BlogCache()
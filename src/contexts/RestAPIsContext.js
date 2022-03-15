import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import RestAPIs from "./RestAPIs";

export const RestAPIsContext = createContext();

export const RestAPIsProvider = ( {children} ) => {
    const [authors, setAuthors] = useState([])
    const [posts, setPosts] = useState([])
    const [categories, setCategories] = useState([])
    const [tags, setTags] = useState([])
    const [comments, setComments] = useState([])

    const apisAuthors = RestAPIs("users")
    const apisPosts = RestAPIs("posts")
    const apisCategories = RestAPIs("categories")
    const apisTags = RestAPIs("tags")
    const apisComments = RestAPIs("comments")

    const findAuthor = useCallback(
        (id) => () => {
            let author = {}
            authors.forEach((a) => {
                if (parseInt(id) === parseInt(a.id)){
                    author = a
                    return 
                }
            })
            return author
        },
        [authors]
    )

    const findPost = useCallback(
        (id) => () => {
            let post = {}
            posts.forEach((p) => {
                if (parseInt(id) === parseInt(p.id)){
                    post = p
                    return 
                }
            })
            return post
        },
        [posts]
    )

    const findCategory = useCallback(
        (arr) => () => {
            let category = []
            arr.forEach((id) => {
                categories.forEach((c) => {
                    if (parseInt(id) === parseInt(c.id)){
                        category.push(c)
                        return 
                    }
                })
            })
            return category
        },
        [categories]
    )

    const findTag = useCallback(
        (arr) => () => {
            let tag = []
            arr.forEach((id) => {
                tags.forEach((t) => {
                    if (parseInt(id) === parseInt(t.id)){
                        tag.push(t)
                        return 
                    }
                })
            })
            return tag
        },
        [tags]
    )

    const findComment = useCallback(
        (id) => () => {
            let comment = []
            comments.forEach((c) => {
                if (parseInt(id) === parseInt(c.post)){
                    comment.push(c)
                }
            })
            return comment
        },
        [comments]
    )

    const toDateTime = (old_time) => {
        let [date, time] = old_time.split("T");
        return ({
            date,
            time
        })
    }

    useEffect(
        () => {
            if (apisAuthors) {
                setAuthors(apisAuthors)
            }
            if (apisPosts) {
                setPosts(apisPosts)
            }
            if (apisCategories) {
                setCategories(apisCategories)
            }
            if (apisTags) {
                setTags(apisTags)
            }
            if (apisComments) {
                setComments(apisComments)
            }
        },
        [apisAuthors, apisCategories, apisComments, apisPosts, apisTags]
    )

    const value = useMemo(
        () => ({
            authors,
            posts,
            comments,
            categories,
            tags,
            findAuthor,
            findPost,
            findCategory,
            findTag,
            findComment,
            toDateTime,
        }),
        [authors, posts, comments, categories, tags, findAuthor, findPost, findCategory, findTag, findComment]
    )

    return (
        <RestAPIsContext.Provider value={value}>
            {children}
        </RestAPIsContext.Provider>
    )
}

export const useRestAPI = () => useContext(RestAPIsContext)
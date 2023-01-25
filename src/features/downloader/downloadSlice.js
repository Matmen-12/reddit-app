import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils";
import { useSelector } from "react-redux"


const initialState = {
        posts: [{
            id: 1,
            subject: 'Some test',
            description: 'New revolution for user',
            likes: 230
        },
        {
            id: 2,
            subject: 'Test 2',
            description: 'OMG asa',
            likes: 289,
        },
        {
            id: 3,
            subject: 'Test 3',
            description: 'OMG asa',
            likes: 289,
        },
        {
            id: 4,
            subject: 'Test 4',
            description: 'OMG asa',
            likes: 289,
        }
    ],
    loading: false,
    success: true
}
export const getPosts = createAsyncThunk(
    'download/getPosts',
    async (thunkAPI) => {
        const res = await fetch('https://www.reddit.com/r/popular.json')
        .then((data) => data.json()
        ); 
        // for (const entry in entries) {
        //     let posts = []
        //     posts.append({id: entry.data.subreddit_id, subject: entry.data.title, description: entry.data.selftext, likes: entry.data.ups })
        //     alert(entry.data.title)
        // }

        // const test =  entries.map((entry) => {
        //     posts.append({id: entry.data.subreddit_id, subject: entry.data.title, description: entry.data.selftext, likes: entry.data.ups })
        //     return 'mateusz'
        // })
        return res;
    }
)

export const sliceDownload = createSlice({
    name: 'download',
    initialState,
    reducers: {
        increment: (state) => {
            state.items.likes += 1
        }
    },
    extraReducers: {
    [getPosts.pending]: (state) => {
        state.loading = true
    },
    [getPosts.fulfilled]: (state, action) => {
        state.loading = false;
        state.success = true
        // alert(action.payload)
        // console.log(action.payload.data.children)
        let posts = action.payload.data.children
        let new_posts = posts.map((entry) => {
            let test = []
            test.push({id: entry.data.subreddit_id, subject: entry.data.title, 
                description: entry.data.selftext, likes: entry.data.ups, img: entry.data.url_overridden_by_dest })
                return test[0]
        })
        // console.log(new_posts)
        state.posts = new_posts
    },
    [getPosts.rejected]: (state) => {
        state.loading = false
    }
    }
})

export const selectItems = (state) => state.download.posts
export const loadingState  = (state) => state.download.loading
export default sliceDownload.reducer
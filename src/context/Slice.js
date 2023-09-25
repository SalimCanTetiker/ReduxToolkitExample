import { createSlice } from "@reduxjs/toolkit";


const Slice = createSlice({
    name: 'favorite',
    initialState: [],
    reducers: {
        addFavorite(state, action){
        state.push(action.payload)
        },
        deleteFavorite(state, action){
        return state.filter(q => q.id !== action.payload.id)
        },
        emptyFavorite(state){
        return []
        }
    }
})
export default Slice
export const {addFavorite, emptyFavorite, deleteFavorite} = Slice.actions ;
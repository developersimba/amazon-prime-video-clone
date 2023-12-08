import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

export interface MovieState {
 loading:boolean,
 error:any
 data:any
}

const initialState: MovieState = {
    loading:false,
    error:"",
    data:[]
}

export const getMovies = createAsyncThunk("movie",async()=>{
    try{
        return await fetch("https://api.themoviedb.org/3/discover/movie?api_key=aafa86502a60244c7844fcc84ca5ecce")
        .then(res => res.json())
    }catch(err){
        console.error(err)
        const error:any = err
        toast.error(error)
    }
})

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers(builder){
    return builder.addCase(getMovies.pending,(state)=>{
        state.loading = true;
    }),
    builder.addCase(getMovies.fulfilled,(state,action:PayloadAction<any>)=>{
        state.loading = false;
        state.error = null;
        state.data = action.payload;
    }),
    builder.addCase(getMovies.rejected,(state,action:PayloadAction<any>)=>{
        state.loading = false;
        state.error = action.payload;
        state.data = [];
    })
  }
})

export const {  } = movieSlice.actions

export default movieSlice.reducer
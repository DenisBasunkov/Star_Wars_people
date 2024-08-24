import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharactersList, IPeople_info } from "../assets/interfase";
import axios from "axios";


// type TypeCharactersData = {
//     data: IPeople_info[],
//     Count: number,
//     Next: string | null,
// }

type Typefetch = {
    data: IPeople_info[],
    Count: number
}
const fetchAllData = async (initialUrl: string): Promise<Typefetch> => {
    return await axios.get(initialUrl)
        .then(async ({ data }) => {

            const allData = data.results
            if (data.next) {
                const nextPageData = (await fetchAllData(data.next)).data
                return {
                    data: [...allData, ...nextPageData],
                    Count: data.count
                }
            }
            return {
                data: allData,
                Count: data.count,
            }
        })
        .catch(() => ({
            data: [],
            Count: 0
        }))
    // try {
    //     const { data } = await axios.get(initialUrl)
    //     const allData = data.results
    //     if (data.next) {
    //         const nextPageData = (await fetchAllData(data.next)).data
    //         return { data: [...allData, ...nextPageData], Count: 0 }
    //     } else {
    //         return allData
    //     }
    // } catch (err) {
    //     console.error('Error fetching data:', err);
    //     return { data: [], Count: 0 }
    // }
};

export const FetchCharacters = createAsyncThunk<Typefetch, string, { rejectValue: string }>(
    "CharactersSlice/FetchCharacters",
    async function (Url, { rejectWithValue }) {
        try {
            return await fetchAllData(Url)
        } catch (Error) {
            return rejectWithValue("Error")
        }
        // return axios.get(Url)
        //     .then(({ status, data }) => {

        //         if (status !== 200) {
        //             return rejectWithValue("Not Found")
        //         }
        //         return {
        //             data: data.results,
        //             Count: data.count,
        //             Next: data.next
        //         }
        //     })
        //     .catch(Error => rejectWithValue(Error.messang))
    }

)


const initialState: ICharactersList = {// Данные по умолчанию в слайсе
    list: [],
    loading: true,
    Error: null,
    count: 0,
    Next: "",
}


const CharactersSlise = createSlice({
    name: "CharactersSlice",
    initialState,
    reducers: {
        addLoading(state, action): void {
            state.loading = action.payload
        }
    },
    extraReducers: (build) => {
        build
            .addCase(FetchCharacters.pending, (state) => {
                state.Error = null
                state.loading = true
            })
            .addCase(FetchCharacters.fulfilled, (state, action) => {
                state.Error = null
                state.loading = false
                state.list = [...state.list, ...action.payload.data]
                // state.Next = action.payload.Next
                state.count = action.payload.Count
            })
            .addCase(FetchCharacters.rejected, (state, action: PayloadAction<string | undefined>) => {
                state.loading = false
                state.Error = action.payload ?? "";
            })
    }
})

export const { addLoading } = CharactersSlise.actions;

export default CharactersSlise.reducer
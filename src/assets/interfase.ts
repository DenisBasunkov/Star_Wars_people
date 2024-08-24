
export interface nav_btn {
    label: string,
    value: string
}

export interface ICharactersList {
    list: IPeople_info[],
    count: number,
    loading: boolean,
    Error: string | null,
    Next: string | null;
}

export interface IPeople_info {
    name: string,
    height: string,
    mass: string,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    created: string,
    edited: string,
    url: string,
}


// const fetchAllData = async (initialUrl: string): Promise<Typefetch> => {
//     try {
//         const { data } = await axios.get(initialUrl)
//         const allData = data.results
//         if (data.next) {
//             const nextPageData = await fetchAllData(data.next)
//             return [...allData, ...nextPageData]
//         } else {
//             return allData
//         }
//     } catch (err) {
//         console.error('Error fetching data:', err);
//         return []
//     }
// };
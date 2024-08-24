import React, { useCallback, useEffect, useState } from "react"
import styles from "./Characters.module.scss"
import _ from "lodash"
import Card from "../../components/Card/Card"
// import { IPeople_info } from "../../assets/interfase"
import { useAppDispatch, useAppSelector } from "../../assets/hook"
import { addLoading, FetchCharacters } from "../../store/CharactersSlice"
import SelectCustom from "../../components/SelectCustom/SelectCustom"

const Characters: React.FC = () => {

    const { list, Next, count, loading } = useAppSelector(store => store.repos)
    const dispatch = useAppDispatch()
    // const [page, setPage] = useState<number>(1)

    const [fetching, setFetching] = useState<boolean>(false)
    const [perPage, setPerPage] = useState<number>(10)


    useEffect(() => {
        if (loading && Next !== null) {
            // dispatch(FetchCharacters(`https://swapi.dev/api/people/?page=${page}`))
            dispatch(FetchCharacters(`https://swapi.dev/api/people/`))
                .then(() => {
                    // setPage((prev) => prev + 1);
                }).finally(() => dispatch(addLoading(false)))
        }
    }, [loading])

    const ScrollHider = useCallback((e: Event) => {

        setFetching(true)
        const timer = setTimeout(() => {
            const target = e.target as Document;
            const scrollBottom = target.documentElement.scrollHeight - (target.documentElement.scrollTop + window.innerHeight);
            if (scrollBottom < 10 && !(CurentList.length < count)) {
                setFetching(false)
                setPerPage(item => item + 10)
            }
        }, 4000)
        return () => clearTimeout(timer)

    }, []);

    useEffect(() => {
        const debounsedScroll = _.debounce(ScrollHider, 100);
        document.addEventListener("scroll", debounsedScroll)
        return () => document.removeEventListener("scroll", debounsedScroll)
    }, [ScrollHider])

    const [eyeColor, setEyeColor] = useState('All')
    const [hairColor, setHairColor] = useState('All')
    const [skinColor, setSkinColor] = useState('All')
    const [Genders, setGenders] = useState('All')
    const [birthYear, setBirthYear] = useState('All')
    const [height, setHeight] = useState('All')
    const [mass, setMass] = useState('All')

    const CurentList = list.filter((item) =>
        (item.eye_color == eyeColor || eyeColor == "All") &&
        (item.skin_color == skinColor || skinColor == "All") &&
        (item.hair_color == hairColor || hairColor == "All") &&
        (item.gender == Genders || Genders == "All") &&
        (item.birth_year == birthYear || birthYear == "All") &&
        (item.height == height || height == "All") &&
        (item.mass == mass || mass == "All"))

    if (list.length === 0 && loading) {
        return <div style={{ width: "100%", height: "100vh", position: "relative", backgroundColor: "gray" }}>

            <div className={styles.Loading_container}><div className={styles.img_loading} /> Loading...</div>
        </div>
    }


    return <div className={styles.Characters_container}>
        <h1 className={styles.title_lable}><strong>{count} Peoples</strong> for you to choose your favorite</h1>
        <div style={{ margin: "15px 30px 0px", display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center", gap: "15px", flexWrap: "wrap" }}>
            <SelectCustom
                label="color eye"
                OnSelect={setEyeColor}
                data={
                    [{ label: "All", value: "All" }, ..._.uniqBy(list, ({ eye_color }) => eye_color)
                        .map(({ eye_color }) => ({ label: eye_color, value: eye_color }))
                    ]
                } />
            <SelectCustom
                OnSelect={setHairColor}
                label="color hair"
                data={[{ label: "All", value: "All" }, ..._.uniqBy(list, ({ hair_color }) => hair_color)
                    .map(({ hair_color }) => ({ label: hair_color, value: hair_color }))
                ]} />
            <SelectCustom
                OnSelect={setSkinColor}
                label="color skin"
                data={[{ label: "All", value: "All" }, ..._.uniqBy(list, ({ skin_color }) => skin_color)
                    .map(({ skin_color }) => ({ label: skin_color, value: skin_color }))
                ]} />
            <SelectCustom
                OnSelect={setGenders}
                label="gender"
                data={[{ label: "All", value: "All" }, ..._.uniqBy(list, ({ gender }) => gender)
                    .map(({ gender }) => ({ label: gender, value: gender }))
                ]} />
            <SelectCustom
                OnSelect={setBirthYear}
                label="birth year"
                data={[{ label: "All", value: "All" }, ..._.uniqBy(list, ({ birth_year }) => birth_year)
                    .map(({ birth_year }) => ({ label: birth_year, value: birth_year }))
                ]} />
            <SelectCustom
                OnSelect={setHeight}
                label="height"
                data={[{ label: "All", value: "All" }, ..._.uniqBy(list, ({ height }) => height)
                    .map(({ height }) => ({ label: height, value: height }))
                ]} />
            <SelectCustom
                OnSelect={setMass}
                label="mass"
                data={[{ label: "All", value: "All" }, ..._.uniqBy(list, ({ mass }) => mass)
                    .map(({ mass }) => ({ label: mass, value: mass }))
                ]} />
        </div>
        <div className={styles.Card_list}>
            {

                CurentList.length !== 0 ? _.map(CurentList.slice(0, perPage), (item, i) => {
                    return <Card key={i + 1} data={item} index={i + 1} />
                }) : <div style={{ height: "60vh" }}>
                </div>
            }
            {
                fetching ? <div className={styles.Loading_container}><div className={styles.img_loading} /> Loading...</div> : null
            }
        </div>

    </div >
}


export default Characters
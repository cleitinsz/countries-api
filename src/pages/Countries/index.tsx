import * as C from './styles'
import { api } from '../../api'
import { useEffect, useState } from 'react'
import { CountriesTS } from '../../types/Countries'
import { CountryItemTS } from '../../types/CountryItem'
import CountryItem from '../../components/CountryItem'
import Input from '../../components/Input/input'
import { useForm } from '../../contexts/ThemeContext'

const Countries = () => {
  const { state } = useForm()
  const [countries, setCountries] = useState<CountriesTS[]>([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getAllCountries()
  },[])

  const getAllCountries = async () => {
    setLoading(true)
    let countries = await api.getCountries()
    setCountries(countries)
    setLoading(false)
  }

  const lowerSearch = search.toLowerCase()

  const filteredCountries = countries.filter(country => country
    .name.toLowerCase().includes(lowerSearch) || country.
    region.toLowerCase().includes(lowerSearch));

  return (
    <C.CountriesArea theme={state.theme}>
        <Input
          value={search}
          setSearch={setSearch}
        />
        <div className="countries">
          {loading && 
            <div className="loading">Loading...</div>
          }
          {!loading &&
            filteredCountries.map((item, index) =>(
              <CountryItem 
                name={item.name} 
                capital={item.capital} 
                population={item.population} 
                region={item.region} 
                flag={item.flags.png}
                />
            ))
          }
        </div>
    </C.CountriesArea>
  )
}

export default Countries
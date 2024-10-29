import { useState, useEffect, useMemo } from 'react'
import { useDebounce } from 'react-use'
import Input from 'rc-input'

import { Search as SearchIcon, Close as CloseIcon } from 'react-ionicons'

import './search.scss'

function Search() {
  const [inputVal, setInputVal] = useState('')
  const [inputDebounce, setInputDebounce] = useState('')

  useDebounce(() => setInputDebounce(inputVal), 500, [inputVal])

  const allowClear = useMemo(() => {
    if (!inputVal.trim()) return false
    return {
      clearIcon: <CloseIcon color="currentColor" width="16px" height="16px" />,
    }
  }, [inputVal])

  useEffect(() => {
    console.log({ inputDebounce })
  }, [inputDebounce])

  return (
    <Input
      prefixCls="a8-search-input"
      onChange={({ currentTarget }) => setInputVal(currentTarget.value)}
      placeholder="Search..."
      prefix={
        <div>
          <SearchIcon color="currentColor" width="16px" height="16px" />
        </div>
      }
      allowClear={allowClear}
      classNames={{
        affixWrapper: 'a8-search-container',
      }}
    />
  )
}

export default Search

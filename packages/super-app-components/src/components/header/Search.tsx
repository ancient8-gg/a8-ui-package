import { useState, useEffect, useMemo } from 'react'
import { useDebounce } from 'react-use'

import { Input } from 'antd'

import {
  SearchNormal1 as SearchIcon,
  CloseCircle as CloseIcon,
} from 'iconsax-react'

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
      onChange={({ currentTarget }) => setInputVal(currentTarget.value)}
      placeholder="Search..."
      prefix={
        <div>
          <SearchIcon color="currentColor" size={16} />
        </div>
      }
      allowClear={allowClear}
    />
  )
}

export default Search

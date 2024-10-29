import { Header } from '@ancient8/components'

function App() {
  return (
    <div>
      <Header
        config={{
          search: {
            baseUrl: 'https://dummyjson.com/posts/search',
            accessToken: '',
          },
        }}
      />
    </div>
  )
}

export default App

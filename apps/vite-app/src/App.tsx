import { Header, Sider } from '@ancient8/components'

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
      <div>
        <Sider
          config={{
            sider: {
              baseUrl: 'https://cms-dev.ancient8.gg/api/side-menus',
              accessToken:
                'e562ad40c07d0e8cc16cf0d6a0aedc2c985d5a91ce5be8e29ade24eb73d20ad541e6c89463859078f05fed4e535606febb5e4d5d24105f32c81b872df49d5d09ac682219b7b34d4c2b4215b9eb2ca1955e893810c3b448178dd0f89c7843cc7768d5df53a104863d831b341d56b5e729ea303492265ee4f917c138d56bc85d38',
            },
          }}
        />
      </div>
    </div>
  )
}

export default App

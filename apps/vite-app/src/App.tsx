import { Header, Sider } from '@ancient8/components'

function App() {
  return (
    <div>
      <Header />
      <div>
        <Sider
          config={{
            sider: {
              baseUrl: 'https://cms-dev.ancient8.gg/api/side-menus',
            },
          }}
        />
      </div>
    </div>
  )
}

export default App

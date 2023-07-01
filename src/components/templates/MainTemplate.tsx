import  { FC } from 'react'
import Aside from '../layouts/Aside/Aside'
import Header from '../layouts/Header/Header'

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

const MainTemplate: FC<Props> = ({children}) => (
  <>
    <Header/>
    <div className='flex flex-1'>
      <Aside/>
      <main className='flex flex-col h-full w-full overscroll-y-auto'>
        {children}
      </main>
    </div>
  </>
)
  

export default MainTemplate
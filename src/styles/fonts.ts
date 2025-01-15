import ActayWide from 'next/font/local'
import Jost from 'next/font/local'

const actayWide = ActayWide({
  src: '../../public/fonts/ActayWide-Bold.otf',
  variable: '--actayWide',
})

const jost = Jost({
  src: [
    {
      path: '../../public/fonts/Jost-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Jost-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Jost-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--jost',
})

export { jost, actayWide }

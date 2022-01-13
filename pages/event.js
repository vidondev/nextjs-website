import Banner from '../components/banner'
import withLayout from "../layouts"

function EventPage( { banners }) {
    return (
      <div>
        <Banner banners={banners} />
        <h3>Movie</h3>
      </div>
      
    )
}

export async function getStaticProps(context) {
  return {
    props: {
      banners: [
        'banner_1280-thumb-1280x458-16988.png',
        'e3516c0f396990e1eafcbf0120ee3a2e7fda2d93-thumb-1280x458-17088.jpg',
        'fd2d0612953d45fabc7855c07e87f366cbcad93c-thumb-1280x458-16984.png',
        'PC-thumb-1280xauto-16920.jpg',
        'portal_banner_pc_s8b-thumb-1280x458-17232.jpg',
      ]
    }, // will be passed to the page component as props
  }
}


export default withLayout()(EventPage)
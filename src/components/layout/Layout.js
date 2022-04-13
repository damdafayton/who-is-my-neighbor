import Neighbors from '../Neighbors';
import { flagSvgLink } from '../../utils';

export default function Layout({ neighbors, country, city, iso, children, title }) {
  return (country && neighbors
    && (
      <main className="fluid bg-secondary text-white">
        <section className="min-vh-40 position-relative row row-cols-2 mx-0 align-items-center fs-5">
          {/* <span className='d-flex'> */}
          <img className="max-100 px-3 py-3 top-0 start-0" src={flagSvgLink(iso)} />
          {/* </span> */}
          <span className=''>
            {children}
          </span>
        </section>
        <section>
          <h2 className='bg-info fs-6 px-2 py-1 mb-0'>{title}</h2>
          <Neighbors neighbors={neighbors} />
        </section>
      </main>
    )
  );
}
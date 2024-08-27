import Breadcumbs from '@/app/components/commons/breadcrumbs';
import newsData from '@/app/contents/newsData';

export default function NewsList({ lang, onArticleClick }) {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-4 lg:px-8 lg:py-8 mt-24">
        <Breadcumbs></Breadcumbs>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
        {newsData.map((item) => (
          <div key={item.id} className="p-4 border rounded" onClick={() => onArticleClick(item)}>
            <img src={item.imageUrl} alt={item.title} className="mb-4 w-full h-48 object-cover" />
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.shortDescription}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

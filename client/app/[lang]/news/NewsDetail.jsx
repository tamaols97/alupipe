export default function NewsDetail({ article, onBack }) {
    return (
      <div className="mx-auto max-w-screen-xl px-4 py-4 lg:px-8 lg:py-8 mt-20">
        <button onClick={onBack} className="text-blue-500 mb-4">
          Trở lại
        </button>
        <h1 className="text-2xl font-bold">{article.title}</h1>
        <img src={article.imageUrl} alt={article.title} className="w-full h-64 object-cover rounded mb-6" />
        <p>{article.fullDescription}</p>
      </div>
    );
  }
  
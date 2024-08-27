"use client";

import { useState } from 'react';
import NewsList from './NewsList';
import NewsDetail from './NewsDetail';

export default function NewsPage({ params: { lang } }) {
  const [currentArticle, setCurrentArticle] = useState(null);

  return (
    <section>
      {currentArticle ? (
        <NewsDetail article={currentArticle} onBack={() => setCurrentArticle(null)} />
      ) : (
        <NewsList lang={lang} onArticleClick={(article) => setCurrentArticle(article)} />
      )}
    </section>
  );
}

import * as funtions from 'firebase-functions';
import * as readingTime from 'reading-time';

export const readTimeArticles = funtions.firestore
  .document('articles/{articleID}')
  .onUpdate(change => {
    const article = (<any>change.after).data();

    const readTime = readingTime(article.body).minutes;

    return (<any>change.after).ref.set(
      {
        readTime,
      },
      { merge: true },
    );
  });

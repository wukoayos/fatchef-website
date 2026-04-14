import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import reviewsData from '../data/reviews.json';
import './ReviewCarousel.css';

interface Review {
  author: string;
  authorPhoto?: string | null;
  rating: number;
  text: string;
  timeAgo: string;
  publishTime?: string | null;
}

interface StoreReviews {
  reviews: Review[];
  mapsUri?: string;
  name?: string;
}

interface ReviewCarouselProps {
  storeSlug: string;
  storeName: string;
}

const STORES: Record<string, StoreReviews> = (reviewsData as any).stores || {};

function StarRow({ rating }: { rating: number }) {
  return (
    <span className="rc-stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= rating ? 'rc-star-filled' : 'rc-star-empty'}>
          {(FaStar as any)()}
        </span>
      ))}
    </span>
  );
}

function ReviewCarousel({ storeSlug, storeName }: ReviewCarouselProps) {
  const store = STORES[storeSlug];
  const reviews = store?.reviews || [];
  const [idx, setIdx] = useState(0);

  if (reviews.length === 0) return null;

  const prev = () => setIdx((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIdx((i) => (i + 1) % reviews.length);
  const review = reviews[idx];

  return (
    <div className="rc-banner">
      <div className="rc-body">
        <div className="rc-quote-row">
          <StarRow rating={review.rating} />
          <p className="rc-quote">“{review.text}”</p>
        </div>
        <div className="rc-meta-row">
          <span className="rc-meta">
            {review.authorPhoto && (
              <img
                src={review.authorPhoto}
                alt=""
                className="rc-avatar"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            )}
            <span className="rc-author">{review.author}</span>
            <span className="rc-sep">·</span>
            <span className="rc-time">{review.timeAgo}</span>
            <span className="rc-sep">·</span>
            <span className="rc-store">What guests say about {storeName}</span>
          </span>
          {store?.mapsUri && (
            <a
              href={store.mapsUri}
              target="_blank"
              rel="noopener noreferrer"
              className="rc-see-all"
            >
              See all on Google {(FiExternalLink as any)()}
            </a>
          )}
        </div>
      </div>

      {reviews.length > 1 && (
        <div className="rc-nav">
          <button onClick={prev} aria-label="Previous review" className="rc-nav-btn">
            {(FaChevronLeft as any)()}
          </button>
          <div className="rc-dots" role="tablist">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`rc-dot ${i === idx ? 'rc-dot-active' : ''}`}
                onClick={() => setIdx(i)}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} aria-label="Next review" className="rc-nav-btn">
            {(FaChevronRight as any)()}
          </button>
        </div>
      )}
    </div>
  );
}

export default ReviewCarousel;

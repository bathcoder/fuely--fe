import { useState } from "react";
import "../styles/reviews.css";

const SortBy = ({ setAllReviews, allReviews }) => {
  const [sorted, setSorted] = useState(true);

  const handleSortClick = (sortBy) => {
    if (sorted) {
      const copiedReviews = [...allReviews];
      let sorted = copiedReviews.sort((a, b) => {
        let keyA = new Date(a[sortBy]),
          keyB = new Date(b[sortBy]);

        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
      });
      setAllReviews(sorted);
      setSorted(false);
    } else {
      const copiedReviews = [...allReviews];
      let sorted = copiedReviews.sort((a, b) => {
        let keyA = new Date(a[sortBy]),
          keyB = new Date(b[sortBy]);

        if (keyA < keyB) return -1;
        if (keyA > keyB) return +1;
        return 0;
      });
      setAllReviews(sorted);
      setSorted(true);
    }
  };
  return (
    <div className="reviews__sortButtonWrapper">
      <h5>Sort by:</h5>
      <button
        className="reviews__sortButton"
        onClick={() => {
          handleSortClick("created_at");
        }}
      >
        Date
      </button>
      <button
        className="reviews__sortButton"
        onClick={() => {
          handleSortClick("comment_count");
        }}
      >
        Comment count
      </button>
      <button
        className="reviews__sortButton"
        onClick={() => {
          handleSortClick("votes");
        }}
      >
        Votes
      </button>
    </div>
  );
};

export default SortBy;
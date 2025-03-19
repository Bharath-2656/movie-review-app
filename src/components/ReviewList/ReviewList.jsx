import React from 'react'
import './ReviewList.css'
import { FaStar } from 'react-icons/fa'

const ReviewList = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return null
  }

  return (
    <div className="review-list">
      <h4 className="review-list-heading">User Reviews</h4>
      <div
        className={`review-list-scroll ${
          reviews.length > 2 ? 'scrollable' : ''
        }`}
      >
        {reviews.map((review, index) => (
          <div key={index}>
            <div className="review-item">
              <div>
                <div>
                  {index === 0 && (
                    <p className="review-author">
                      User: {review.user.username}
                    </p>
                  )}
                </div>
                <div className="review-rating">
                  <div>Rating: </div>
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} color="gold" />
                  ))}
                </div>
                <p className="review-text">
                  Description: {review.description}"
                </p>
                {index < reviews.length - 1 && (
                  <hr className="review-divider" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewList

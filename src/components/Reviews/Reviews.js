
import axios from 'axios';
import React from 'react';

const Reviews = async() => {
   
  fetch('/api/v1/reviews')
  .then(res=>res.json)
  .then(result=> console.log(result))

console.log(review);

  return (
    <div>
      <h3>hi</h3>
    </div>
  );
};

export default Reviews;
import React from "react";
import styles from "../styles/Page.module.css";
import businessStyles from "../styles/Business.module.css";
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';

const businesses = [
  {
    owner: "Dr.Joseph MFITUMUKIZA ",
    company: "SAFE TRAVEL MOTORS LTD ",
    phone: "(+82) 10-3581-4424 / (+250) 788-445-011",
    registered: "Registered in Rwanda",
    description: "- Korean used and new car Trading\n- Car spare parts and accessories Trading",
    notes: "10 years of experience in used car export",
  },
  {
    owner: "Dr.Joseph MFITUMUKIZA ",
    company: "TG-CAR LTD",
    phone: "(+82) 10-3581-4424 / (+250) 788-405-909",
    registered: "Registered in Rwanda",
    description: "Car Rental Business",
    notes: "We offer:\n- cars for vip cars for weeding, special events etc…\n- School buses\n- off roads cars for picnic\n- etc",
  },
  {
    owner: "Ndayambaje Jules",
    company: "ecoshipcar LTD",
    phone: "(+82) 10-7202-2900",
    registered: "Registered in Rwanda",
    description:
      "Ecoshipcar LTD is aim to Import Vehicles & spare parts from S kore to Rwanda, as well it aim to make Rwandan vehicle market more affordable with reliability and flexibility of the Services.",
    notes: "For more about Us please visit our website Ecoshipcar.com",
  },
  {
    owner: "SHAIBU EMMANUEL & NELLY MPUHWE AIMELYNE",
    company: "Elly's Fabrics",
    logo: "/ellys_fabric.jpeg",
    phone: "(+82) 10-5282-1622 / (+82) 10-3496-1394 Instagram: @ellys.fabrics",
    registered: "Not yet registered",
    description:
      "We are Elly's Fabrics currently operating in Rwanda, bringing you elegance in form of fabrics and beauty beyond the skin. These fabrics are high quality asoebi from Nigeria readily available for you to 'steal the show'. ",
    notes:
      "We would like to add that currently all inquiries and interactions with customers are made online through our instagram page. We also do pre- orders (customers can place their orders even when not available in Rwanda) and we get these orders to them. We are grateful for the opportunity to further share our business with the world and can't wait to deliver your orders.",
  },
  {
    owner: "NIYIGENA ADOLPHE",
    company: "TM MONEY GROUP LTD,(TM TRAVELS, TM MONEY TRANSFER, TM EduBridge)",
    phone: "(+82) 10-9862-0978",
    registered: "Registered in Rwanda",
    description:
      "TM MONEY GROUP Ltd is a dynamic multinational company dedicated to providing innovative financial, travel, and educational solutions. Our diverse business divisions include:\n\nTM MONEY TRANSFER – A trusted remittance service facilitating secure and efficient money transfers from across the globe to East Africa, Malawi, Zambia, South Africa, and Lesotho.\n\nTM TRAVELS – A comprehensive travel service offering affordable hotel bookings, flight reservations, and expert tour guidance to ensure seamless travel experiences.\n\nTM EDUBRIDGE – A leading consultancy that assists individuals in securing scholarships and university admissions in Korea and worldwide. We also provide high-quality language and academic training, starting with Korean, with plans to expand into other subjects.\n\nAt TM MONEY GROUP Ltd, we are committed to excellence, affordability, and customer satisfaction across all our services.",
    notes: "YOU REQUEST, WE DELIVER",
  },
  {
    owner: "Ingororano Theophile ",
    company: "ALT GROUP CO., LTD.",
    phone: "(+82) 10-8120-8573",
    registered: "Registered in Korea",
    description: "Consulting firm, Export and Import, Wholesales used cars Export. ",
    notes:
      "Greetings! \n\nOur company is committed to tackling the challenges that lie ahead. We believe in the power of collaboration and innovation to make a positive impact on the world. Let's join forces and work towards a brighter future. \n\nTogether, we can heal the world. \n \nALT Group Co., Ltd. Korea \n",
  },
  {
    owner: "HABIMANA SETH",
    company: "Inzi trust",
    phone: "(+82) 10-5733-8138",
    registered: "Registered in Rwanda",
    description: "Inzi trust is Korean used car exporter",
    notes: "",
  },
];

// Define Review Interface
interface Review {
  id: string;
  business_name: string;
  reviewer_name: string;
  rating: number;
  comment: string;
  created_at: string;
}

const Businesses = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const PAGE_SIZE = 5;

  const [newReview, setNewReview] = useState({
    business_name: '',
    reviewer_name: '',
    rating: 5,
    comment: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Fetch reviews on load
  useEffect(() => {
    fetchReviews(0, true);
  }, []);

  const fetchReviews = async (pageNumber = 0, isRefresh = false) => {
    const from = pageNumber * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;

    const { data, error, count } = await supabase
      .from('business_reviews')
      .select('*', { count: 'exact' })
      .eq('is_approved', true) // Only show approved reviews
      .order('created_at', { ascending: false })
      .range(from, to);

    if (error) {
      console.error('Error fetching reviews:', error);
    } else {
      if (isRefresh) {
        setReviews(data || []);
        setPage(0);
      } else {
        setReviews(prev => [...prev, ...(data || [])]);
      }
      
      // Check if we have more data
      if (count !== null && data) {
        setHasMore(from + data.length < count);
      }
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchReviews(nextPage);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (!newReview.business_name || !newReview.comment) {
      setMessage('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    const { error } = await supabase
      .from('business_reviews')
      .insert([
        {
          business_name: newReview.business_name,
          reviewer_name: newReview.reviewer_name || 'Anonymous',
          rating: newReview.rating,
          comment: newReview.comment,
          is_approved: true // Auto-approve by default
        }
      ]);

    if (error) {
      setMessage('Error submitting review. Please try again.');
      console.error(error);
    } else {
      setMessage('Review submitted successfully!');
      setNewReview({ business_name: '', reviewer_name: '', rating: 5, comment: '' });
      fetchReviews(0, true); // Refresh list immediately
    }
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Rwandan Businesses</h1>
        <div className={styles.content}>
          <section className={styles.section}>
            {/* Business Directory content hidden pending review */}
            <div className={businessStyles.comingSoon}>
              <div className={businessStyles.messageCard}>
                <span className={businessStyles.icon}>🚧</span>
                <h2>Directory Update in Progress</h2>
                <p>
                  We are currently updating our business directory to ensure we provide you with the most reliable and trusted services. 
                  The full list of community businesses will be back shortly after our verification review.
                </p>
              </div>
            </div>

            <section className={businessStyles.reviewSection}>
              <h2 className={businessStyles.sectionTitle}>Community Reviews</h2>
              
              {/* Submission Form */}
              <div className={businessStyles.formCard}>
                <h3>Submit a Review</h3>
                <p style={{ marginBottom: '1.5rem', color: '#666' }}>
                  Share your experience with our community businesses to help others.
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div className={businessStyles.formGroup}>
                    <label>Names of The Business Representative</label>
                    <input
                      type="text"
                      className={businessStyles.input}
                      value={newReview.business_name}
                      onChange={(e) => setNewReview({...newReview, business_name: e.target.value})}
                      placeholder="Name of the business representative"
                      required
                    />
                  </div>

                  <div className={businessStyles.formGroup}>
                    <label>Your Name (Optional)</label>
                    <input
                      type="text"
                      className={businessStyles.input}
                      value={newReview.reviewer_name}
                      onChange={(e) => setNewReview({...newReview, reviewer_name: e.target.value})}
                      placeholder="Anonymous"
                    />
                  </div>

                  <div className={businessStyles.formGroup}>
                    <label>Rating</label>
                    <select
                      className={businessStyles.select}
                      value={newReview.rating}
                      onChange={(e) => setNewReview({...newReview, rating: Number(e.target.value)})}
                    >
                      <option value="5">⭐⭐⭐⭐⭐ (Excellent)</option>
                      <option value="4">⭐⭐⭐⭐ (Good)</option>
                      <option value="3">⭐⭐⭐ (Average)</option>
                      <option value="2">⭐⭐ (Poor)</option>
                      <option value="1">⭐ (Terrible)</option>
                    </select>
                  </div>

                  <div className={businessStyles.formGroup}>
                    <label>Review</label>
                    <textarea
                      className={businessStyles.textarea}
                      value={newReview.comment}
                      onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                      required
                      placeholder="Please describe your experience..."
                    />
                  </div>

                  <button type="submit" className={businessStyles.submitButton} disabled={loading}>
                    {loading ? 'Submitting...' : 'Post Review'}
                  </button>

                  {message && (
                    <div className={`${businessStyles.message} ${message.includes('Error') ? businessStyles.error : businessStyles.success}`}>
                      {message}
                    </div>
                  )}
                </form>
              </div>

              {/* Reviews List */}
              <div className={businessStyles.reviewsList}>
                <h3 style={{ marginBottom: '1.5rem', color: '#2d3748' }}>Recent Reviews</h3>
                
                {reviews.length === 0 ? (
                  <div className={businessStyles.emptyState}>
                    No reviews yet. Be the first to share your experience!
                  </div>
                ) : (
                  reviews.map((review) => (
                    <div key={review.id} className={businessStyles.reviewCard}>
                      <div className={businessStyles.reviewHeader}>
                        <div className={businessStyles.reviewerInfo}>
                          <h4>{review.reviewer_name || 'Anonymous'}</h4>
                          <div className={businessStyles.businessName}>
                            Review for: <strong>{review.business_name}</strong>
                          </div>
                        </div>
                        <div className={businessStyles.reviewDate}>
                          {new Date(review.created_at).toLocaleDateString()}
                        </div>
                      </div>
                      <div className={businessStyles.stars}>
                        {'⭐'.repeat(review.rating)}
                      </div>
                      <p className={businessStyles.reviewComment}>{review.comment}</p>
                    </div>
                  ))
                )}
              </div>
              
              {hasMore && reviews.length > 0 && (
                <button onClick={handleLoadMore} className={businessStyles.loadMoreButton}>
                  Load More Reviews
                </button>
              )}
            </section>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Businesses;

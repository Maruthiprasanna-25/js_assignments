import React, { useState, useEffect, useRef } from 'react';

const InfiniteScroll = ({ fetchItems }) => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef();

  useEffect(() => {
    fetchMoreItems();
  }, []);

  const fetchMoreItems = async () => {
    const newItems = await fetchItems();
    setItems(prevItems => [...prevItems, ...newItems]);
    if (newItems.length === 0) setHasMore(false);
  };

  const lastItemRef = useRef(null);

  useEffect(() => {
    if (!hasMore) return;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };
    const handleObserver = (entities) => {
      const target = entities[0];
      if (target.isIntersecting) {
        fetchMoreItems();
      }
    };
    observer.current = new IntersectionObserver(handleObserver, options);
    if (lastItemRef.current) observer.current.observe(lastItemRef.current);
  }, [hasMore]);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} ref={index === items.length - 1 ? lastItemRef : null}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default InfiniteScroll;

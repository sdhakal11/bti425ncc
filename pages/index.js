"use client"
import React, { useState, useEffect } from 'react';
import  useSWR from 'swr';
import { Pagination, Accordion } from 'react-bootstrap';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';

const Home = () => {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  // Fetch data using SWR
  const { data, error } = useSWR(`https://cute-lime-mite-kilt.cyclic.app/api/listings?page=${page}&perPage=10`);

  // Update page data when data changes
  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  // Function to navigate to the previous page
  const previous = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  // Function to navigate to the next page
  const next = () => {
    setPage(page + 1);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <PageHeader text="Browse Listings : Sorted by Number of Ratings" />
      
      <Accordion>
        {pageData.map(listing => (
          <Accordion.Item key={listing._id} eventKey={listing._id}>
            <Accordion.Header>
              <strong>{listing.name}</strong> - {listing.address.street}
            </Accordion.Header>
            <Accordion.Body>
              <ListingDetails listing={listing} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </main>
  );
};

export default Home;

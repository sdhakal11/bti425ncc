import React from 'react';
// import Link from 'next/link';
import { Card } from 'react-bootstrap';
import ListingDetails from '@/components/ListingDetails';
import PageHeader from '@/components/PageHeader';

export async function getStaticProps() {
  // Fetch a specific listing from the API using the provided path
  const res = await fetch('https://cute-lime-mite-kilt.cyclic.app/api/listings/1206363');
  const listing = await res.json();

  return {
    props: {
      listing,
    },
  };
}

const About = ({ listing }) => {
  return (
    <div>
      <PageHeader text="About the Developer" />
      <Card>
        <Card.Body>
          <p>My name is Srushti Patel</p>
          <p>Currently pursuing my bachelors in software development</p>
          <p>For the Assignment 3, view one of my listings from our the Listings API:</p>
          <ListingDetails listing={listing} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default About;



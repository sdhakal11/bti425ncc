import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import ListingDetails from '@/components/ListingDetails';
import Error from 'next/error';
import PageHeader from '@/components/PageHeader';

const Listing = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch data using SWR
  const { data, error, isValidating } = useSWR(`https://cute-lime-mite-kilt.cyclic.app/api/listings/${id}`);

  if (isValidating) return null; // Return null while loading

  if (error || !data) return <Error statusCode={404} />; // Show 404 error if there's an error or no data

  return (
    <main className="flex flex-col items-center justify-center p-8">
      <PageHeader text={data.name} />
      <ListingDetails listing={data} />
    </main>
  );
};

export default Listing;

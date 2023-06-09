import Header from '@/app/search/components/Header';
import RestaurantCard from '@/app/search/components/RestaurantCard';
import SearchSideBar from '@/app/search/components/SearchSideBar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search Restaurants -  OpenTable',
  description: 'Generated by create next app',
};

export default function Search() {
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar />
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </>
  );
}

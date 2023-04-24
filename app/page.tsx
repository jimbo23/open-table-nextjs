import Header from '@/app/components/Header';
import RestaurantCard from '@/app/components/RestaurantCard';
import { prisma } from '@/app/prisma';
import { Cuisine, Location, PRICE } from '@prisma/client';

export type RestaurantCardType = {
  id: number;
  name: string;
  main_img: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  slug: string;
};

const fetchRestaurants = async (): Promise<RestaurantCardType[]> =>
  await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_img: true,
      cuisine: true,
      location: true,
      price: true,
      slug: true,
    },
  });

export default async function Home() {
  const restaurants = await fetchRestaurants();

  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} key={restaurant.id} />
        ))}
      </div>
    </main>
  );
}

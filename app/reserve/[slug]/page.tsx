import Form from '@/app/reserve/[slug]/components/Form';
import Header from '@/app/reserve/[slug]/components/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reserve at Milestones Grill (Toronto)',
  description: 'Generated by create next app',
};

export default function Reserve() {
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <Header />
        <Form />
      </div>
    </div>
  );
}

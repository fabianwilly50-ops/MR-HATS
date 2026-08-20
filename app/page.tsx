import { supabase } from '@/lib/supabase';
import { BrandIntro } from '@/components/BrandIntro';
import { CatalogCta } from '@/components/CatalogCta';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductGrid } from '@/components/ProductGrid';
import type { ProductRow } from '@/lib/types';

export default async function HomePage() {
  const { data, error } = await supabase
    .from('products')
    .select('legacy_id, brand, name, price')
    .order('page', { ascending: true })
    .limit(8);

  const products: ProductRow[] = data ?? [];

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProductGrid products={products} error={error?.message} />
        <BrandIntro />
        <CatalogCta />
      </main>
      <Footer />
    </>
  );
}

import { Footer } from "@/components/Landing/Footer";
import { Header } from "@/components/Landing/Header";
import { Skeleton } from "@/components/ui/skeleton";

export default function CreamLoading() {
  return (
    <div className="flex min-h-screen flex-col bg-creamBackgroundV1">
      <Header />
      <main className="w-full flex-1">
        <section className="w-full bg-creamBackgroundV1 p-8 md:p-16 md:py-8 lg:p-12 xl:p-16 xxl:p-20">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:gap-12 xl:gap-14 xxl:gap-16">
            {/* Gallery skeleton */}
            <div className="flex w-full flex-row gap-3">
              <div className="hidden w-20 shrink-0 flex-col gap-3 md:flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-20 w-20 rounded-none" />
                ))}
              </div>
              <Skeleton className="aspect-square w-full rounded-none" />
            </div>

            {/* Info skeleton */}
            <div className="flex flex-col gap-3">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-12 w-1/2" />
              <Skeleton className="h-14 w-full" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

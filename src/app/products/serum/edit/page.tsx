"use client";

import { ProductPageProvider, useProductPage } from "@/context/ProductPageContext";
import { Header } from "@/components/Landing/Header";
import { SerumProduct } from "@/components/Product/SerumProduct";
import { Footer } from "@/components/Landing/Footer";
import { AdminLoginDialog } from "@/components/Admin/AdminLoginDialog";
import { SectionEditWrapper } from "@/components/Admin/SectionEditWrapper";
import { ProductPageModalsContainer } from "@/components/Admin/modals/productPage/ProductPageModalsContainer";

function EditSerumPageContent() {
  const productPage = useProductPage();

  return (
    <div className="min-h-screen bg-creamBackgroundV1 flex flex-col">
      <AdminLoginDialog contextValue={productPage} />
      <Header adminBarContext={productPage} />

      <main className="flex-1 w-full">
        <SectionEditWrapper
          sectionKey="productPage"
          sectionTitle="Trang sản phẩm Tinh chất"
          contextValue={productPage}
        >
          <SerumProduct />
        </SectionEditWrapper>
      </main>

      <Footer />

      {/* Edit Form Modal */}
      <ProductPageModalsContainer />
    </div>
  );
}

export default function EditSerumProductPage() {
  return (
    <ProductPageProvider slug="serum" initialEditMode={true}>
      <EditSerumPageContent />
    </ProductPageProvider>
  );
}

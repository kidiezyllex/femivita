"use client";

import { ProductPageProvider, useProductPage } from "@/context/ProductPageContext";
import { Header } from "@/components/Landing/Header";
import { CreamProduct } from "@/components/Product/CreamProduct";
import { Footer } from "@/components/Landing/Footer";
import { AdminLoginDialog } from "@/components/Admin/AdminLoginDialog";
import { SectionEditWrapper } from "@/components/Admin/SectionEditWrapper";
import { ProductPageModalsContainer } from "@/components/Admin/modals/productPage/ProductPageModalsContainer";

function EditCreamPageContent() {
  const productPage = useProductPage();

  return (
    <div className="min-h-screen bg-creamBackgroundV1 flex flex-col">
      <AdminLoginDialog contextValue={productPage} />
      <Header adminBarContext={productPage} />

      <main className="flex-1 w-full">
        <SectionEditWrapper
          sectionKey="productPage"
          sectionTitle="Trang sản phẩm Kem dưỡng"
          contextValue={productPage}
        >
          <CreamProduct />
        </SectionEditWrapper>
      </main>

      <Footer />

      {/* Edit Form Modal */}
      <ProductPageModalsContainer />
    </div>
  );
}

export default function EditCreamProductPage() {
  return (
    <ProductPageProvider slug="cream" initialEditMode={true}>
      <EditCreamPageContent />
    </ProductPageProvider>
  );
}

import { useState } from "react";
import { PlusIcon, TrashIcon } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/atoms/button";
import { Card, CardContent, CardFooter } from "@/components/molecules/card";
import FormBuilder from "@/components/molecules/FormBuilder";
import {
  useAddProductMutation,
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/api/products";

const ProductList = () => {
  const [page, setPage] = useState(1);
  const [deleteProductById] = useDeleteProductMutation();
  const [pageSize] = useState(10); // Number of products per page
  const [addProduct] = useAddProductMutation();
  const { data: productData, isFetching } = useGetProductsQuery({
    pageSize,
    page,
  });
  const form = useForm<any>();

  const handleAddProduct = async (data: any) => {
    try {
      addProduct({
        data,
      });
      form.reset();
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  const handleDeleteProduct = async (id: number) => {
    try {
      deleteProductById({
        id,
      });
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div className="w-screen bg-gray-100 p-10">
      <h1 className="mb-8 text-4xl font-extrabold text-gray-800">
        Product List
      </h1>

      {/* Add Product Form */}
      <div className="mb-10 rounded-lg bg-white p-4 shadow-md">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">
          Add New Product
        </h2>
        <FormBuilder
          form={form}
          onSubmit={handleAddProduct}
          fields={[
            {
              name: "title",
              label: "Title",
              type: "text",
              required: true,
            },
            {
              name: "description",
              label: "Description",
              type: "text",
              required: true,
            },
            {
              name: "price",
              label: "Price",
              type: "text",
              required: true,
            },
          ]}
        >
          <Button
            type="submit"
            className="mt-4 flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            <PlusIcon className="mr-2 h-5 w-5" />
            Add Product
          </Button>
        </FormBuilder>
      </div>

      {isFetching && <p className="text-center text-gray-700">Loading...</p>}
      {/* Product List */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {!isFetching &&
          productData?.products.map((product: any) => (
            <Card
              key={product.id}
              className="max-w-xs overflow-hidden rounded-lg bg-white text-gray-800 shadow-md transition-shadow hover:shadow-lg"
            >
              <img
                src={product.thumbnail || "/default-image.jpg"} // Add product image or a placeholder
                alt={product.title}
                className="h-48 w-full object-cover"
              />
              <CardContent className="px-4 py-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="mt-2 text-lg font-bold text-gray-800">
                  Price: ${product.price}
                </p>
              </CardContent>
              <CardFooter className="px-4 py-3">
                <Button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="flex w-full items-center justify-center rounded-lg bg-red-500 px-4 py-2 font-semibold text-white transition-colors hover:bg-red-600"
                >
                  <TrashIcon className="mr-2 h-5 w-5" />
                  Delete
                </Button>
              </CardFooter>
            </Card>
          ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-10 flex justify-center">
        <Button
          onClick={() => handlePageChange(page - 1)}
          disabled={page <= 1}
          className="mr-2 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
        >
          Previous
        </Button>
        <Button
          onClick={() => handlePageChange(page + 1)}
          //   disabled={productsData?.products.length < pageSize}
          className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-blue-700 disabled:opacity-50"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ProductList;

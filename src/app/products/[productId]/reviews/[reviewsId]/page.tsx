import { notFound } from "next/navigation";

export default function ReviewsDetails({
  params,
}: {
  params: { reviewsId: string; productId: string };
}) {
    if (parseInt(params.reviewsId) > 100) {
        notFound()
    }
    if (parseInt(params.reviewsId) === 8) {
      throw new Error("Error during loading reviews");
    }
  return (
    <h1>
      Reviews {params.reviewsId} about product {params.productId}
    </h1>
  );
}

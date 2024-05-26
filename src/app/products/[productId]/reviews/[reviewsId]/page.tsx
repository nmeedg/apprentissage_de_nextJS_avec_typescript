import { notFound } from "next/navigation";

export default function ReviewsDetails({
  params,
}: {
  params: { reviewsId: string; productId: string };
}) {
    if (parseInt(params.reviewsId) > 100) {
        notFound()
    }
  return (
    <h1>
      Reviews {params.reviewsId} about product {params.productId}
    </h1>
  );
}

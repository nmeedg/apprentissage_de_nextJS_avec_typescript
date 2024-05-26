export default function ReviewsDetails({params}:{params: {reviewsId:string,productId:string}}) {
    return (
        <h1>
            Reviews {params.reviewsId} about product {params.productId}
        </h1>
    )
}
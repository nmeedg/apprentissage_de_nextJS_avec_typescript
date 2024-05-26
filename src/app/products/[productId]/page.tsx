import { Metadata } from "next"
/*
export const metadata:Metadata = {
  title:"product 1"
}*/
type Props={
    params:{
        productId:string
    }
}

export const generateMetadata = ({params}:Props):Metadata => {
    return {
        title:`Product ${params.productId}`
    }
}

export default function ProductDetails({params}:Props) {
    return (
        <h2>
            Details about product {params.productId}
        </h2>
    )
}
import { IDetailLabelData, IProduct, TDetailsConfig } from "@domains/product";
import { IProductDetail } from "@components/ProductDetails";

class ProductDetailsManager {
    public static getDetailsData = (
        product: IProduct,
        detailsConfig: TDetailsConfig
    ): IProductDetail[] => {
        const detailsData: IProductDetail[] = [];
        const necessaryFieldsKeys: string[] = Object.keys(detailsConfig);

        for (const [key, value] of Object.entries(product)) {
            if (!necessaryFieldsKeys.includes(key)) {
                continue;
            }

            const configData: IDetailLabelData<typeof key> =
                detailsConfig[key as keyof IProduct]!;

            const { label, valuesDictionary, link } = configData;

            const productDetail: IProductDetail = {
                title: label,
                value: !valuesDictionary ? value : valuesDictionary[value],
            };

            if (link) {
                productDetail.isLink = true;
                productDetail.link = link;
            }

            detailsData.push(productDetail);
        }

        return detailsData;
    };
}

export default ProductDetailsManager;

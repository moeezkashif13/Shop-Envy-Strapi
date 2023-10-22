import type { Schema, Attribute } from '@strapi/strapi';

export interface PlacedOrdersPlacedOrders extends Schema.Component {
  collectionName: 'components_placed_orders_placed_orders';
  info: {
    displayName: 'Placed Orders';
    description: '';
  };
  attributes: {
    ProductName: Attribute.String & Attribute.Required;
    PreviewImage: Attribute.String & Attribute.Required;
  };
}

export interface ProductColorsProductColors extends Schema.Component {
  collectionName: 'components_product_colors_product_colors';
  info: {
    displayName: 'Product Colors';
  };
  attributes: {
    ColorHex: Attribute.String & Attribute.Required;
  };
}

export interface ProductRelatedFeaturesProductRelatedFeatures
  extends Schema.Component {
  collectionName: 'components_product_related_features_product_related_features';
  info: {
    displayName: 'Product Related Features';
  };
  attributes: {
    InfoType: Attribute.String & Attribute.Required;
    Answer: Attribute.String & Attribute.Required;
  };
}

export interface ProductSizesProductSizes extends Schema.Component {
  collectionName: 'components_product_sizes_product_sizes';
  info: {
    displayName: 'Product Sizes';
  };
  attributes: {
    SizesAvailable: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'placed-orders.placed-orders': PlacedOrdersPlacedOrders;
      'product-colors.product-colors': ProductColorsProductColors;
      'product-related-features.product-related-features': ProductRelatedFeaturesProductRelatedFeatures;
      'product-sizes.product-sizes': ProductSizesProductSizes;
    }
  }
}
